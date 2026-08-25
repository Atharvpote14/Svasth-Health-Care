/**
 * Loading state for long-term care hub
 */

import SkeletonSection from "../../components/loaders/SkeletonSection";

export default function Loading() {
  return (
    <>
      {/* Hub hero skeleton */}
      <section className="bg-neutral-100 py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl animate-pulse space-y-4 text-center">
            <div className="mx-auto h-4 w-32 rounded bg-neutral-200"></div>
            <div className="mx-auto h-10 w-3/4 rounded bg-neutral-200"></div>
            <div className="mx-auto h-5 w-full max-w-xl rounded bg-neutral-200"></div>
          </div>
        </div>
      </section>

      {/* Services grid skeleton */}
      <SkeletonSection columns={3} count={6} />
    </>
  );
}
