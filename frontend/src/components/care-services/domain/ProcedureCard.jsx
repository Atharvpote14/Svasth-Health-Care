import Link from "next/link";
import { SERVICE_ICONS } from "./service-icons";
import { ShieldCheck } from "lucide-react";

const ProcedureCard = ({ procedure, href, className = "" }) => {
  const Icon = SERVICE_ICONS[procedure.icon] || ShieldCheck;

  return (
    <article
      className={`card group relative flex h-full items-center gap-5 transition-shadow hover:border-primary-300 hover:shadow-md ${className}`}
    >
      <span className="shrink-0 rounded-md bg-primary-50 p-2.5 text-primary-700">
        <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
      </span>

      <div>
        <h3 className="text-lg font-semibold text-neutral-900">
          <Link href={href} className="after:absolute after:inset-0">
            {procedure.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-neutral-600">{procedure.tagline}</p>
      </div>
    </article>
  );
};

export default ProcedureCard;