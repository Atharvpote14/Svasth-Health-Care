/**
 * PageLoader - Full-page loading overlay with typewriter animation
 * Uses the user's provided typewriter animation design
 */

"use client";

import TypewriterLoader from "./TypewriterLoader";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <TypewriterLoader />
        <p className="font-display text-lg font-semibold text-neutral-900">
          Loading...
        </p>
      </div>
    </div>
  );
}
