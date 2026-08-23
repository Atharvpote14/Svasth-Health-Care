import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../../Reveal";
import ServiceCard from "../domain/ServiceCard";
import ProcedureCard from "../domain/ProcedureCard";
import VerticalCard from "../domain/VerticalCard";
import { serviceHref, procedureHref } from "../../../lib/site";

/**
 * ServiceGridSection — card grid for a service group.
 *
 * Two changes worth noting. The section header now uses the chart type scale
 * (.care-eyebrow / .care-h2 / .care-lead) rather than repeating the same
 * hand-rolled Tailwind string that appeared in six separate section files, so
 * heading rhythm is defined once.
 *
 * And the reveal is now per-card with a capped stagger, instead of one Reveal
 * wrapping the whole grid. Cards arriving in sequence reads as the grid being
 * dealt out; the cap stops the last card of a fourteen-item grid waiting a
 * second to appear.
 */

const STAGGER_MS = 60;
const STAGGER_CAP = 6;

const ServiceGridSection = ({
  eyebrow,
  title,
  lead,
  items = [],
  variant = "service",
  columns = 3,
  tone = "white",
  seeAllHref,
  seeAllLabel = "See all services",
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
      className={`py-14 md:py-[88px] ${
        tone === "off-white" ? "care-band" : "bg-white"
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || lead) && (
          <Reveal>
            <div className="mb-11 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
              <div className="max-w-2xl">
                {eyebrow && <p className="care-eyebrow mb-4">{eyebrow}</p>}
                {title && <h2 className="care-h2 font-display">{title}</h2>}
                {lead && <p className="care-lead mt-4">{lead}</p>}
              </div>

              {seeAllHref && (
                <Link
                  href={seeAllHref}
                  className="group flex shrink-0 items-center gap-1.5 care-label text-primary hover:text-primary-600"
                >
                  {seeAllLabel}
                  <ArrowRight
                    size={13}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="transition-transform duration-250 ease-standard group-hover:translate-x-1"
                  />
                </Link>
              )}
            </div>
          </Reveal>
        )}

        <div className={`grid grid-cols-1 gap-4 md:gap-5 ${columnClass}`}>
          {items.map((item, index) => {
            const delay = Math.min(index, STAGGER_CAP) * STAGGER_MS;

            return (
              <Reveal
                key={item.slug || item.href || item.title}
                delay={delay}
                className="h-full"
              >
                {variant === "procedure" ? (
                  <ProcedureCard
                    procedure={item}
                    href={procedureHref(item.slug)}
                  />
                ) : variant === "vertical" ? (
                  <VerticalCard item={item} />
                ) : (
                  <ServiceCard service={item} href={serviceHref(item)} />
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceGridSection;
