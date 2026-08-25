/**
 * LoadingProvider - Global loading state management
 * Provides loading context to all components
 */

"use client";

import { createContext, useContext, useState, useCallback } from "react";
import PageLoader from "../loaders/PageLoader";

const LoadingContext = createContext({
  isLoading: false,
  setLoading: () => {},
});

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = useCallback((loading) => {
    setIsLoading(loading);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {isLoading && <PageLoader />}
      {children}
    </LoadingContext.Provider>
  );
}
