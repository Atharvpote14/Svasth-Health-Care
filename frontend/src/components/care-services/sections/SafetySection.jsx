import Reveal from "../../Reveal";
import SafetyCallout from "../domain/SafetyCallout";

/**
 * SafetySection — the trust grid.
 *
 * Header uses the shared chart type scale. The items are ruled columns rather
 * than cards (see SafetyCallout), so on desktop their top hairlines join into
 * one continuous rule across the grid and on mobile they stack into ruled rows.
 */

const STAGGER_MS = 70;

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
      className={`py-14 md:py-[88px] ${
        tone === "off-white" ? "care-band" : "bg-white"
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title) && (
          <Reveal>
            <div className="mb-11 max-w-2xl">
              {eyebrow && <p className="care-eyebrow mb-4">{eyebrow}</p>}
              {title && <h2 className="care-h2 font-display">{title}</h2>}
              {lead && <p className="care-lead mt-4">{lead}</p>}
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * STAGGER_MS}
              className="h-full"
            >
              <SafetyCallout
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
