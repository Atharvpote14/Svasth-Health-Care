/**
 * HowItWorksSection — 4-step care journey.
 * Portea how-sec: dark dotted gradient band
 * radial-gradient(rgba(143,224,227,.1) 1.5px,transparent 1.6px) 22px +
 * linear-gradient(120deg,#0d2222,#114143); white Fraunces h2; step cards
 * bg hsla(0,0%,100%,.05) / border hsla(0,0%,100%,.12), radius 16px,
 * hover bg .08 + border rgba(143,224,227,.4) + translateY(-4px);
 * step accents #8fe0e3.
 */

import Reveal from "../../Reveal";

const HowItWorksSection = ({
  eyebrow = "How it works",
  title,
  lead,
  steps = [],
  className = "",
}) => {
  if (steps.length === 0) return null;

  return (
    <section className={`band-dark-dotted py-10 md:py-[70px] ${className}`}>
      <Reveal>
        <div className="mx-auto max-w-6xl px-6">
          {(eyebrow || title) && (
            <div className="mb-10">
              {eyebrow && (
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8fe0e3]">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="font-display text-[24px] font-semibold leading-[1.3] text-white md:text-[36px]">
                  {title}
                </h2>
              )}
              {lead && (
                <p className="mt-3 max-w-2xl text-lg leading-[1.6] text-white/75">{lead}</p>
              )}
            </div>
          )}

          <ol className="grid grid-cols-1 gap-[18px] lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <li
                key={step.title || index}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-150 ease-in-out hover:-translate-y-1 hover:border-[rgba(143,224,227,0.4)] hover:bg-white/10"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-display text-[#8fe0e3] tabular-nums"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-base leading-relaxed text-white/75">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
};

export default HowItWorksSection;