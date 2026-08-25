import Link from "next/link";

/**
 * Breadcrumbs — the care-services trail.
 *
 * Renders its own markup rather than delegating to components/Breadcrumb.jsx,
 * because that component's `.breadcrumb` styling in globals.css is shared with
 * pages/diagnostics-equipment. Set in mono at 11px: a breadcrumb is positional
 * metadata, not prose, and typing it as such keeps it from competing with the
 * headline directly beneath it.
 */

const Breadcrumbs = ({ items = [], className = "" }) => {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 care-label">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label || index} className="flex items-center gap-2.5">
              {!isLast && item.path ? (
                <Link
                  href={item.path}
                  className="text-[var(--care-mute)] transition-colors duration-250 ease-standard hover:text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-neutral-900"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span aria-hidden="true" className="text-neutral-400">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
