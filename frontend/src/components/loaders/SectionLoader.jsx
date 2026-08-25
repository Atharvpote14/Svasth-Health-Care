/**
 * SectionLoader - Inline loading state with typewriter animation
 */

"use client";

import TypewriterLoader from "./TypewriterLoader";

export default function SectionLoader({
  message = "Loading...",
}) {
  return (
    <div className="flex min-h-[200px] items-center justify-center py-12">
      <div className="flex flex-col items-center gap-6">
        <TypewriterLoader />
        {message && (
          <p className="text-sm text-neutral-600">{message}</p>
        )}
      </div>
    </div>
  );
}
