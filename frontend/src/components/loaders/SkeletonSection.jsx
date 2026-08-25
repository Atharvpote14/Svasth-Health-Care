/**
 * SkeletonSection - Full section skeleton for service grids
 */

import SkeletonCard from "./SkeletonCard";

export default function SkeletonSection({
  columns = 3,
  variant = "default",
  count = 6
}) {
  const gridClasses = {
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header skeleton */}
        <div className="mb-10 animate-pulse space-y-4 text-center">
          <div className="mx-auto h-4 w-32 rounded bg-neutral-200"></div>
          <div className="mx-auto h-8 w-96 max-w-full rounded bg-neutral-200"></div>
          <div className="mx-auto h-4 w-[600px] max-w-full rounded bg-neutral-200"></div>
        </div>

        {/* Cards grid skeleton */}
        <div className={`grid gap-6 ${gridClasses[columns]}`}>
          {Array.from({ length: count }).map((_, i) => (
            <SkeletonCard key={i} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
}
