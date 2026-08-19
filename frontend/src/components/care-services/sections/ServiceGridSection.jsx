import ServiceCard from "../domain/ServiceCard";
import ProcedureCard from "../domain/ProcedureCard";
import { serviceHref, procedureHref } from "../../../lib/site";

const ServiceGridSection = ({
  eyebrow,
  title,
  lead,
  items = [],
  variant = "service",
  columns = 3,
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
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || lead) && (
          <div className="mb-10">
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-primary-700">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl text-neutral-900 md:text-4xl">
                {title}
              </h2>
            )}
            {lead && <p className="mt-3 max-w-2xl text-lg text-neutral-600">{lead}</p>}
          </div>
        )}

        <div className={`grid grid-cols-1 gap-6 ${columnClass}`}>
          {items.map((item) =>
            variant === "procedure" ? (
              <ProcedureCard
                key={item.slug}
                procedure={item}
                href={procedureHref(item.slug)}
              />
            ) : (
              <ServiceCard
                key={item.slug}
                service={item}
                href={serviceHref(item)}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceGridSection;