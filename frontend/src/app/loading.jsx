/**
 * Loading state for homepage
 * Shows skeleton UI while the page loads
 */

import SkeletonSection from "../components/loaders/SkeletonSection";

export default function Loading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="bg-neutral-100 py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl animate-pulse space-y-6 text-center">
            <div className="mx-auto h-12 w-3/4 rounded bg-neutral-200"></div>
            <div className="mx-auto h-6 w-full max-w-2xl rounded bg-neutral-200"></div>
            <div className="mx-auto h-6 w-2/3 rounded bg-neutral-200"></div>
            <div className="mx-auto mt-8 h-12 w-48 rounded-md bg-neutral-200"></div>
          </div>
        </div>
      </section>

      {/* Stats skeleton */}
      <section className="border-y border-neutral-200 bg-white py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid animate-pulse grid-cols-2 gap-8 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2 text-center">
                <div className="mx-auto h-8 w-20 rounded bg-neutral-200"></div>
                <div className="mx-auto h-4 w-24 rounded bg-neutral-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections skeleton */}
      <SkeletonSection columns={3} count={3} />
      <SkeletonSection columns={3} count={3} />
      <SkeletonSection columns={4} variant="procedure" count={4} />
      <SkeletonSection columns={3} variant="vertical" count={3} />
    </>
  );
}
