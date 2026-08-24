/**
 * API endpoint functions.
 * Mirrors docs/API_SPECIFICATION.md — public catalog, actions, and booking.
 * Components must go through this layer, never call fetch directly.
 */

import { request } from "./http";

export const api = {
  // ---------- Catalog ----------

  getServices: (params = {}) => request("/services", { query: params }),

  getService: (slug) => request(`/services/${slug}`),

  getServiceAvailability: (slug, city) =>
    request(`/services/${slug}/availability`, { query: { city } }),

  getServiceFaqs: (slug) => request(`/services/${slug}/faqs`),

  getRelatedServices: (slug) => request(`/services/${slug}/related`),

  getCategories: () => request("/categories"),

  getLocations: () => request("/locations"),

  getFaqs: (params = {}) => request("/faqs", { query: params }),

  getSearch: (q) => request("/search", { query: { q } }),

  // ---------- Public actions ----------

  postEnquiry: (body) => request("/enquiries", { method: "POST", body }),

  postCallback: (body) => request("/callbacks", { method: "POST", body }),

  postContact: (body) => request("/contact", { method: "POST", body }),

  // ---------- Booking ----------

  createBooking: (body, idempotencyKey) =>
    request("/bookings", {
      method: "POST",
      body,
      headers: idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {},
    }),
};

export { ApiError } from "./http";