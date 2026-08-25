import { BadgePercent, Gift, HeartPulse } from "lucide-react";
import Reveal from "../../Reveal";

/**
 * OffersSection — promotional card row.
 * Portea new-offers-sec: on page background #fafafa; offers-card bg #f8f3e9,
 * radius 12px, border rgba(13,34,34,.06), padding 32px; badge = 71x25 pill
 * bg #00979e / white 12px/500; teal icon media box rgba(0,151,158,.08).
 * [PENDING OFFER DATA] — real offers/pricing are TBD by the marketing team.
 * Do not publish any of the placeholder copy below.
 */

const OFFER_CARDS = [
  {
    icon: BadgePercent,
    title: "First consultation discount",
    description: "[PENDING OFFER DATA] — first-visit offer details to be set by the marketing team.",
    tag: "10% Off",
  },
  {
    icon: Gift,
    title: "Elder care package offer",
    description: "[PENDING OFFER DATA] — subscription package promotion to be set by the marketing team.",
    tag: "10% Off",
  },
  {
    icon: HeartPulse,
    title: "Physiotherapy pack offer",
    description: "[PENDING OFFER DATA] — pack pricing to be set by the marketing team.",
    tag: "10% Off",
  },
];

const OffersSection = ({ className = "" }) => {
  return (
    <section className={`bg-[#fafafa] py-14 md:py-[88px] ${className}`}>
      <Reveal>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-11">
            <p className="care-eyebrow mb-4">
              Offers
            </p>
            <h2 className="care-h2 font-display">
              Savings on home care
            </h2>
            <p className="care-lead mt-4 max-w-2xl">
              [PENDING OFFER DATA] — this section is structural; the marketing
              team will supply real promotions before launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {OFFER_CARDS.map((offer) => (
              <article
                key={offer.title}
                className="flex flex-col gap-3 rounded-[12px] border border-[rgba(13,34,34,0.06)] bg-[#f8f3e9] p-6 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-xl bg-[rgba(0,151,158,0.08)] p-3 text-primary">
                    <offer.icon size={22} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="inline-flex h-[25px] w-[71px] items-center justify-center rounded-full bg-primary text-xs font-medium text-white">
                    {offer.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{offer.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{offer.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default OffersSection;