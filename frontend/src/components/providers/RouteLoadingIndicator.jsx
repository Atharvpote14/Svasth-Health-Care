/**
 * RouteLoadingIndicator - Shows loading state during route transitions
 * Next.js 14 App Router compatible - wrapped in Suspense boundary
 */

"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import PageLoader from "../loaders/PageLoader";

function RouteLoadingIndicatorInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Start loading when navigation begins
    setIsLoading(true);

    // Small delay to show loader (prevents flash for instant loads)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => {
      clearTimeout(timer);
      setIsLoading(false);
    };
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return <PageLoader />;
}

export default function RouteLoadingIndicator() {
  return (
    <Suspense fallback={null}>
      <RouteLoadingIndicatorInner />
    </Suspense>
  );
}
