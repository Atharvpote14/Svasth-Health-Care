import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICE_ICONS } from "./service-icons";
import { priceFromLabel } from "./service-meta";

/**
 * ProcedureCard — denser sibling of ServiceCard.
 *
 * Procedures render four-up, so this card drops the arch plate for an inline
 * glyph and leads on price, which is the one field most procedure records
 * actually populate. The "Procedure" label is not decoration: it marks these as
 * clinician-performed interventions carried out on a doctor's advice, which is a
 * materially different commitment from booking a consultation. It sits in a chip
 * because a chip is how this system labels a thing, replacing the letterspaced
 * mono caption that made every card look like a filing stamp.
 */

const ProcedureCard = ({ procedure, href, className = "" }) => {
  const Icon = SERVICE_ICONS[procedure.icon] || ShieldCheck;

  return (
    <article className={`care-card group p-5 ${className}`}>
      <p className="care-pill">
        <Icon size={14} strokeWidth={1.75} aria-hidden="true" />
        Procedure
      </p>

      <h3 className="care-h3 mt-4 font-display">
        <Link href={href} className="after:absolute after:inset-0">
          {procedure.name}
        </Link>
      </h3>

      <dl className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="care-spec">
          <dt className="care-spec-key">From</dt>
          <dd className="care-spec-value">
            {priceFromLabel(procedure.price_from)}
          </dd>
        </div>
      </dl>

      <span className="care-label mt-auto flex items-center gap-1.5 pt-5 text-primary">
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

export default ProcedureCard;
