import { priceFromLabel } from "./service-meta";

/**
 * PriceFromNote — the price line, in two registers.
 *
 * `showFigure` (default) renders the figure as a spec pill, matching the cards
 * and the hero. PricingTable needs this: in a table of plans the number is the
 * whole point.
 *
 * A service detail page passes `showFigure={false}`, because the figure is
 * already on that page's hero and printing it twice states one fact twice. What
 * is left is the more useful half anyway: only 4 of 12 services in
 * site-content.js have `price_from` set, while all 12 have a `price_note`
 * explaining that cost follows the care plan, duration, and city. That note is
 * set on a tinted panel rather than under a rule — it is an answer to "what will
 * this cost me", which deserves to look like something, not like a footnote.
 */

const PriceFromNote = ({
  priceFrom,
  priceNote,
  showFigure = true,
  className = "",
}) => {
  if (!showFigure) {
    if (!priceNote) return null;

    return (
      <div className={`care-band rounded-2xl px-5 py-4 ${className}`}>
        <p className="care-eyebrow mb-2">Pricing</p>
        <p className="text-[15px] leading-[1.7] text-[var(--care-mute)]">
          {priceNote}
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="care-spec">
        <span className="care-spec-key">Starting from</span>
        <span className="care-spec-value">{priceFromLabel(priceFrom)}</span>
      </div>

      {priceNote && (
        <p className="mt-3 text-[15px] leading-[1.7] text-[var(--care-mute)]">
          {priceNote}
        </p>
      )}
    </div>
  );
};

export default PriceFromNote;
