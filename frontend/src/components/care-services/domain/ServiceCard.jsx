import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICE_ICONS } from "./service-icons";
import { priceFromLabel, serviceTypeLabel } from "./service-meta";

/**
 * ServiceCard — the primary tile.
 *
 * The original centred an icon, a title and a "Book Now" pill: every card an
 * identical silhouette, with the facts a family decides on left off the card
 * entirely. Those facts are now on it — whether the service is an ongoing
 * engagement or a single visit, and what it starts at — as two small pills
 * rather than the dotted-leader rows this used to draw, which made a service
 * look like a line on an invoice.
 *
 * Interaction: one tab stop, not two. The heading link carries an inset ::after
 * overlay so the whole card is the hit target, and "View details" is a plain
 * span rather than a second link to the same href. The arch plate fills with the
 * accent on hover, which points the feedback at the card's own subject instead of
 * at a decorative bar.
 *
 * Copy: the CTA no longer reads "Book Now". This card navigates to a detail page
 * — it does not book anything — and an action should keep its promise. The
 * booking CTA lives on the page it leads to.
 */

const ServiceCard = ({ service, href, className = "" }) => {
  const Icon = SERVICE_ICONS[service.icon] || ShieldCheck;
  const typeLabel = serviceTypeLabel(service.type);

  return (
    <article className={`care-card group p-6 ${className}`}>
      <span className="care-plate">
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </span>

      <h3 className="care-h3 mt-5 font-display">
        <Link href={href} className="after:absolute after:inset-0">
          {service.name}
        </Link>
      </h3>

      <dl className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        {typeLabel && (
          <div className="care-spec">
            <dt className="care-spec-key">Care</dt>
            <dd className="care-spec-value">{typeLabel}</dd>
          </div>
        )}
        <div className="care-spec">
          <dt className="care-spec-key">From</dt>
          <dd className="care-spec-value">
            {priceFromLabel(service.price_from)}
          </dd>
        </div>
      </dl>

      <span className="care-label mt-auto flex items-center gap-1.5 pt-6 text-primary">
        View details
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

export default ServiceCard;
