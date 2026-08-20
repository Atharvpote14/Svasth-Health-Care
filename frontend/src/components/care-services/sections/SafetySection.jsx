/**
 * SafetySection — "Why Choose Us?" trust grid.
 * Portea case-sec pattern: white band, cards white / teal-tinted border,
 * teal eyebrows/icons. Header type scales per Portea h2/eyebrow/lead.
 */

import Reveal from "../../Reveal";
import SafetyCallout from "../domain/SafetyCallout";

const SafetySection = ({
  eyebrow = "Safety & trust",
  title,
  lead,
  items = [],
  tone = "white",
  className = "",
}) => {
  if (items.length === 0) return null;

  return (
    <section
      className={`py-10 md:py-[70px] ${
        tone === "off-white" ? "bg-neutral-100" : "bg-white"
      } ${className}`}
    >
      <Reveal>
        <div className="mx-auto max-w-6xl px-6">
          {(eyebrow || title) && (
            <div className="mb-10">
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
              {lead && <p className="mt-3 max-w-2xl text-lg leading-[1.6] text-neutral-600">{lead}</p>}
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {items.map((item) => (
              <SafetyCallout
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default SafetySection;