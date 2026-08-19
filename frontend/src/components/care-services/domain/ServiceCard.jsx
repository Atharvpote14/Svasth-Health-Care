import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import AvailabilityBadge from "./AvailabilityBadge";
import PriceFromNote from "./PriceFromNote";
import { SERVICE_ICONS } from "./service-icons";

const ServiceCard = ({ service, href, className = "" }) => {
  const Icon = SERVICE_ICONS[service.icon] || ShieldCheck;

  return (
    <article
      className={`card group relative flex h-full flex-col gap-4 transition-shadow hover:border-primary-300 hover:shadow-md ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-md bg-primary-50 p-2.5 text-primary-700">
          <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <AvailabilityBadge availability={service.availability} />
      </div>

      <h3 className="text-xl font-semibold text-neutral-900">
        <Link href={href} className="after:absolute after:inset-0">
          {service.name}
        </Link>
      </h3>

      <p className="text-base leading-relaxed text-neutral-600">{service.tagline}</p>

      <div className="mt-auto pt-2">
        <PriceFromNote priceFrom={service.price_from} priceNote={service.price_note} />
        <span className="mt-1 text-sm font-medium text-primary-700 opacity-0 transition-opacity group-hover:opacity-100">
          Learn more →
        </span>
      </div>
    </article>
  );
};

export default ServiceCard;