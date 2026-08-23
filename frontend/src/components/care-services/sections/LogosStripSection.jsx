import Reveal from "../../Reveal";

/**
 * LogosStripSection — trusted logo strip (partner hospitals / press media).
 * Portea partners-sec / press-sec pattern: white / ivory band, white chips
 * with border rgba(13,34,34,.06) and soft shadow 0 2px 20px rgba(13,34,34,.04).
 * [CONFIRM LOGOS/PERMISSION WITH CLIENT] — no logos are displayed; real
 * partner/press logos must be approved before use. No fake partnerships.
 */

const LogosStripSection = ({
  eyebrow,
  title,
  lead,
  placeholderLabels = ["[Logo]", "[Logo]", "[Logo]", "[Logo]", "[Logo]", "[Logo]"],
  tone = "white",
  note = "[CONFIRM LOGOS / PERMISSION WITH CLIENT]",
  className = "",
}) => {
  return (
    <section
      className={`py-14 md:py-[88px] ${
        tone === "off-white" ? "care-band" : "bg-white"
      } ${className}`}
    >
      <Reveal>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-11 text-center">
            {eyebrow && (
              <p className="care-eyebrow mb-4">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="care-h2 font-display">
                {title}
              </h2>
            )}
            {lead && <p className="care-lead mx-auto mt-4 max-w-2xl">{lead}</p>}
            <p className="mt-2 text-xs text-neutral-600">{note}</p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-4">
            {placeholderLabels.map((label, index) => (
              <li
                key={index}
                className="flex h-16 min-w-40 items-center justify-center rounded-[12px] border border-[rgba(13,34,34,0.06)] bg-white px-6 text-sm font-medium text-neutral-600 shadow-[0_2px_20px_rgba(13,34,34,0.04)]"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
};

export default LogosStripSection;