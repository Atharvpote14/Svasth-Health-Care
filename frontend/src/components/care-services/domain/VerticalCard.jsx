import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * VerticalCard — the card for a whole service line (Diagnostics, Vaccination,
 * Equipment) rather than for one service.
 *
 * Matches ServiceCard's treatment: a soft surface, the arch plate, one tab stop
 * via the inset ::after overlay on the heading link. It carries a tagline where
 * ServiceCard carries spec pills, because these are section entrances — there is
 * no single price or care type to record for a whole line.
 *
 * The CTA no longer reads "Book Now". Nothing is booked here; the card opens a
 * section index, so it says so. A label that overstates what a click does costs
 * the reader a wasted tap and some trust.
 */

const VerticalCard = ({ item, className = "" }) => {
  const Icon = item.icon;

  return (
    <article className={`care-card group p-6 ${className}`}>
      {Icon && (
        <span className="care-plate">
          <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
        </span>
      )}

      <h3 className="care-h3 mt-5 font-display">
        <Link href={item.href} className="after:absolute after:inset-0">
          {item.title}
        </Link>
      </h3>

      {item.tagline && (
        <p className="mt-2.5 max-w-[36ch] text-[15px] leading-[1.7] text-[var(--care-mute)]">
          {item.tagline}
        </p>
      )}

      <span className="care-label mt-auto flex items-center gap-1.5 pt-6 text-primary">
        {item.ctaLabel || "Explore"}
        <ArrowRight
          size={14}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-250 ease-standard group-hover:translate-x-1"
        />
      </span>
    </article>
  );
};

export default VerticalCard;
