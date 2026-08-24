import { Award, BadgeCheck, Star, Users } from "lucide-react";

/**
 * StatsStrip — the four headline measures.
 *
 * ┌───────────────────────────────────────────────────────────────────────────┐
 * │ [CONFIRM WITH CLIENT] — every figure below is unverified.                 │
 * │                                                                           │
 * │ These four values were carried into this repo from a competitor's          │
 * │ marketing site, not from Svasth. "1 Mn+ patients a year", "2 K+ verified   │
 * │ caregivers", the QAI accreditation and the 4.9 Google rating are therefore │
 * │ claims about Svasth that nothing in this project substantiates, sitting in │
 * │ the most trust-bearing band on the home page. Replace each one with a      │
 * │ figure the client will stand behind, or delete the entry — an honest three │
 * │ measures beat four with one invented.                                      │
 * └───────────────────────────────────────────────────────────────────────────┘
 *
 * Design notes. Previously a centred row of icon + count-up figure + label, then
 * briefly a ruled register of mono figures hanging off hairlines with descending
 * ticks. Both are gone:
 *
 * - The count-up is gone. It spent its effect on numbers as small as "1" and
 *   "4.9" and needed a client component to do it. The entrance is now the
 *   CSS-only --care-i stagger, so the strip ships no JavaScript.
 * - The figures are set in the display face, not in mono on a rule. These are
 *   claims a brand is making, not readings off an instrument, and Fraunces at
 *   SOFT 60 says them in the same voice as the headlines above.
 * - Each measure gets the arch plate, which is how the icon appears everywhere
 *   else in the system, so the band belongs to the page rather than sitting in
 *   it as an imported widget.
 */

const STATS = [
  {
    icon: Users,
    figure: "1 Mn+",
    label: "Patients served a year",
    source: "[CONFIRM WITH CLIENT]",
  },
  {
    icon: BadgeCheck,
    figure: "2 K+",
    label: "Trained and verified caregivers",
    source: "[CONFIRM WITH CLIENT]",
  },
  {
    icon: Award,
    figure: "QAI",
    label: "Quality accreditation",
    source: "[CONFIRM WITH CLIENT]",
  },
  {
    icon: Star,
    figure: "4.9",
    label: "Rating on Google",
    source: "[CONFIRM WITH CLIENT]",
  },
];

const StatsStrip = ({ stats = STATS, className = "" }) => {
  if (stats.length === 0) return null;

  return (
    <section className={`care-band ${className}`}>
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 md:grid-cols-4 md:py-16">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="care-rise grid"
            style={{ "--care-i": index }}
          >
            {/* Explicit grid rows rather than flex-col-reverse: inside a <dl> the
                <dt> has to precede its <dd> in the DOM, while the figure has to
                read above the label, and only one wrapping <div> per group is
                valid between them. */}
            <span className="care-plate row-start-1 mb-4" aria-hidden="true">
              <stat.icon size={19} strokeWidth={1.75} />
            </span>

            <dt className="row-start-3 mt-2 max-w-[18ch] text-[13.5px] leading-[1.55] text-[var(--care-mute)]">
              {stat.label}
            </dt>

            <dd className="row-start-2 font-display text-[30px] font-semibold leading-none text-primary md:text-[40px]">
              {stat.figure}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default StatsStrip;
