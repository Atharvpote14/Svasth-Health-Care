import Link from "next/link";
import Reveal from "../../Reveal";
import ServiceCard from "../domain/ServiceCard";
import ProcedureCard from "../domain/ProcedureCard";
import VerticalCard from "../domain/VerticalCard";
import { serviceHref, procedureHref } from "../../../lib/site";

/**
 * ServiceGridSection — responsive card grid for a service group.
 * Portea medical-sec pattern: section padding 40px mobile / 70px desktop,
 * h2 Fraunces 24px/36px 600, eyebrow 12px/.14em teal, lead 18px, cards in a
 * 3-col grid with 16px gap (12px mobile), ivory #faf7f1 on the "off-white"
 * tone. Card CTAs are outlined teal pills (Portea service-tile-book).
 */

const ServiceGridSection = ({
  eyebrow,
  title,
  lead,
  items = [],
  variant = "service",
  columns = 3,
  tone = "white",
  ctaColor = "primary",
  seeAllHref,
  seeAllLabel = "See all services →",
  className = "",
}) => {
  if (items.length === 0) return null;

  const columnClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      className={`py-10 md:py-[70px] ${
        tone === "off-white" ? "bg-neutral-100" : "bg-white"
      } ${className}`}
    >
      <Reveal>
        <div className="mx-auto max-w-6xl px-6">
          {(eyebrow || title || lead) && (
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                {eyebrow && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {eyebrow}
                  </p>
                )}
                {title && (
                  <h2 className="font-display text-[24px] font-semibold leading-[1.3] text-neutral-900 md:text-[36px]">
                    {title}
                  </h2>
                )}
                {lead && (
                  <p className="mt-3 max-w-2xl text-lg leading-[1.6] text-neutral-600">{lead}</p>
                )}
              </div>

              {seeAllHref && (
                <Link
                  href={seeAllHref}
                  className="shrink-0 font-medium text-primary hover:text-primary-600 hover:underline"
                >
                  {seeAllLabel}
                </Link>
              )}
            </div>
          )}

          <div className={`grid grid-cols-1 gap-3 md:gap-4 ${columnClass}`}>
            {items.map((item) =>
              variant === "procedure" ? (
                <ProcedureCard
                  key={item.slug}
                  procedure={item}
                  href={procedureHref(item.slug)}
                  ctaColor={ctaColor}
                />
              ) : variant === "vertical" ? (
                <VerticalCard
                  key={item.href || item.title}
                  item={item}
                  ctaColor={ctaColor}
                />
              ) : (
                <ServiceCard
                  key={item.slug}
                  service={item}
                  href={serviceHref(item)}
                  ctaColor={ctaColor}
                />
              ),
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ServiceGridSection;