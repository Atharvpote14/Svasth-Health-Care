/**
 * Low-level HTTP helper.
 * Handles base URL, JSON, timeout, and the API error envelope
 * defined in docs/API_SPECIFICATION.md §2.
 */

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "/api/v1";

const DEFAULT_TIMEOUT_MS = 15000;

export class ApiError extends Error {
  constructor(status, code, message, details = []) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

function buildUrl(path, query) {
  const url = new URL(`${DEFAULT_BASE_URL}${path}`, "http://localhost");

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return `${url.pathname}${url.search}`;
}

async function request(path, { method = "GET", query, body, headers = {}, token } = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);

  const requestHeaders = {
    "Content-Type": "application/json",
    ...headers,
  };

  if (token) {
    requestHeaders.Authorization = `Bearer ${token}`;
  }

  let response;

  try {
    response = await fetch(buildUrl(path, query), {
      method,
      headers: requestHeaders,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
      cache: method === "GET" ? "no-store" : "no-store",
    });
  } catch (error) {
    if (error.name === "AbortError") {
      throw new ApiError(0, "TIMEOUT", "The request took too long. Please try again.");
    }
    throw new ApiError(0, "NETWORK_ERROR", "Unable to reach the server. Check your connection.");
  } finally {
    clearTimeout(timeoutId);
  }

  let payload = null;

  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const errorPayload = payload?.error;
    throw new ApiError(
      response.status,
      errorPayload?.code || "INTERNAL_ERROR",
      errorPayload?.message || "Something went wrong. Please try again.",
      errorPayload?.details || [],
    );
  }

  return payload?.data ?? payload;
}

export { request };