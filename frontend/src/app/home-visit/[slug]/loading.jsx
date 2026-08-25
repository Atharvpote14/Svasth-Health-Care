/**
 * Service detail page loading skeleton (home visit)
 */

export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Breadcrumbs skeleton */}
      <div className="border-b border-neutral-200 bg-white py-4">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-4 w-16 rounded bg-neutral-200"></div>
            <div className="h-4 w-4 rounded bg-neutral-200"></div>
            <div className="h-4 w-24 rounded bg-neutral-200"></div>
            <div className="h-4 w-4 rounded bg-neutral-200"></div>
            <div className="h-4 w-32 rounded bg-neutral-200"></div>
          </div>
        </div>
      </div>

      {/* Hero section skeleton */}
      <section className="bg-neutral-100 py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="h-12 w-3/4 rounded bg-neutral-200"></div>
            <div className="h-6 w-full rounded bg-neutral-200"></div>
            <div className="h-6 w-5/6 rounded bg-neutral-200"></div>

            {/* Meta row */}
            <div className="flex gap-4 pt-4">
              <div className="h-8 w-32 rounded-full bg-neutral-200"></div>
              <div className="h-8 w-40 rounded-full bg-neutral-200"></div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-4 pt-6">
              <div className="h-12 w-40 rounded-md bg-neutral-200"></div>
              <div className="h-12 w-40 rounded-md bg-neutral-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections skeleton */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 w-64 rounded bg-neutral-200"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-neutral-200"></div>
                  <div className="h-4 w-full rounded bg-neutral-200"></div>
                  <div className="h-4 w-3/4 rounded bg-neutral-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
