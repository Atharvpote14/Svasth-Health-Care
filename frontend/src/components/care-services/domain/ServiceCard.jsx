/**
 * ServiceCard — simplified "icon + title + Book Now" card.
 * Portea service-tile: white card, 12px radius, border rgba(0,151,158,.12),
 * 56px icon media box rgba(0,151,158,.08), title 17px/600, outlined teal
 * pill Book Now (12px/600), hover = teal border .4 + shadow
 * 0 8px 20px rgba(0,151,158,.1) + translateY(-2px), .15s ease.
 */

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import AvailabilityBadge from "./AvailabilityBadge";
import { SERVICE_ICONS } from "./service-icons";

const ServiceCard = ({ service, href, ctaColor = "primary", className = "" }) => {
  const Icon = SERVICE_ICONS[service.icon] || ShieldCheck;

  return (
    <article
      className={`card group relative flex h-full flex-col items-center gap-4 text-center transition-all duration-150 ease-in-out hover:-translate-y-[2px] hover:border-[rgba(0,151,158,0.4)] hover:shadow-[0_8px_20px_rgba(0,151,158,0.1)] ${className}`}
    >
      <div className="flex w-full items-start justify-between">
        <span className="rounded-xl bg-[rgba(0,151,158,0.08)] p-3.5 text-primary">
          <Icon size={24} strokeWidth={2} aria-hidden="true" />
        </span>
        <AvailabilityBadge availability={service.availability} />
      </div>

      <h3 className="text-[17px] font-semibold leading-snug text-neutral-900">
        <Link href={href} className="after:absolute after:inset-0">
          {service.name}
        </Link>
      </h3>

      <Link href={href} className="btn btn-secondary mt-auto px-3.5 py-1.5 text-xs">
        Book Now
      </Link>
    </article>
  );
};

export default ServiceCard;