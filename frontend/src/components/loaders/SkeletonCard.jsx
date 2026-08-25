/**
 * SkeletonCard - Skeleton loader for service cards
 * Maintains layout while content loads
 */

export default function SkeletonCard({ variant = "default" }) {
  if (variant === "procedure") {
    return (
      <div className="animate-pulse rounded-lg border border-neutral-200 bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-lg bg-neutral-200"></div>
          <div className="flex-1 space-y-3">
            <div className="h-4 w-3/4 rounded bg-neutral-200"></div>
            <div className="h-3 w-full rounded bg-neutral-200"></div>
            <div className="h-3 w-2/3 rounded bg-neutral-200"></div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div className="animate-pulse rounded-lg border border-neutral-200 bg-white p-6">
        <div className="space-y-4">
          <div className="h-10 w-10 rounded-lg bg-neutral-200"></div>
          <div className="space-y-2">
            <div className="h-5 w-3/4 rounded bg-neutral-200"></div>
            <div className="h-3 w-full rounded bg-neutral-200"></div>
            <div className="h-3 w-5/6 rounded bg-neutral-200"></div>
          </div>
          <div className="h-9 w-full rounded-md bg-neutral-200"></div>
        </div>
      </div>
    );
  }

  // Default card skeleton
  return (
    <div className="animate-pulse rounded-lg border border-neutral-200 bg-white p-6">
      <div className="space-y-4">
        {/* Icon/Image placeholder */}
        <div className="h-12 w-12 rounded-lg bg-neutral-200"></div>

        {/* Title */}
        <div className="h-5 w-3/4 rounded bg-neutral-200"></div>

        {/* Description lines */}
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-neutral-200"></div>
          <div className="h-3 w-5/6 rounded bg-neutral-200"></div>
        </div>

        {/* CTA button */}
        <div className="h-10 w-full rounded-md bg-neutral-200"></div>
      </div>
    </div>
  );
}
