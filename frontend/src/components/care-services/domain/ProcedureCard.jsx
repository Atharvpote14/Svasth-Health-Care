import Link from "next/link";
import { SERVICE_ICONS } from "./service-icons";
import { ShieldCheck } from "lucide-react";

const ProcedureCard = ({ procedure, href, ctaColor = "primary", className = "" }) => {
  const Icon = SERVICE_ICONS[procedure.icon] || ShieldCheck;

  return (
    <article
      className={`card group relative flex h-full flex-col items-center gap-4 text-center transition-all duration-150 ease-in-out hover:-translate-y-[2px] hover:border-[rgba(0,151,158,0.4)] hover:shadow-[0_8px_20px_rgba(0,151,158,0.1)] ${className}`}
    >
      <span className="rounded-xl bg-[rgba(0,151,158,0.08)] p-3.5 text-primary">
        <Icon size={24} strokeWidth={2} aria-hidden="true" />
      </span>

      <h3 className="text-[17px] font-semibold leading-snug text-neutral-900">
        <Link href={href} className="after:absolute after:inset-0">
          {procedure.name}
        </Link>
      </h3>

      <Link href={href} className="btn btn-secondary mt-auto px-3.5 py-1.5 text-xs">
        Book Now
      </Link>
    </article>
  );
};

export default ProcedureCard;