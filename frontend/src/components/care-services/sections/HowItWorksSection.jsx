import Reveal from "../../Reveal";

/**
 * HowItWorksSection — the sequence.
 *
 * Two earlier versions are worth recording. The first put each step in a rounded
 * translucent box with a 48px numbered square: the default treatment for any
 * "how it works" strip, saying nothing about the subject. The second hung each
 * step off a continuous hairline with a descending tick, which was distinctive
 * but drew a chart, and a page of hairlines reads as ruled notebook paper.
 *
 * What is left is the part that carries information: a counter and the step. No
 * connector line between them — the reading order already says the steps are
 * ordered, and a line joining them would be the third piece of furniture added
 * to a list of four short sentences.
 *
 * Numbering is used here because the content genuinely is ordered: step three
 * cannot happen before step two. It is information, not ornament.
 */

const STAGGER_MS = 80;

const HowItWorksSection = ({
  eyebrow = "How it works",
  title,
  lead,
  steps = [],
  className = "",
}) => {
  if (steps.length === 0) return null;

  return (
    <section
      className={`care-sheet care-on-dark py-16 md:py-[104px] ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title) && (
          <Reveal>
            <div className="mb-14 max-w-2xl">
              {eyebrow && <p className="care-eyebrow mb-4">{eyebrow}</p>}
              {title && (
                <h2 className="care-h2 font-display text-white">{title}</h2>
              )}
              {lead && <p className="care-lead mt-4">{lead}</p>}
            </div>
          </Reveal>
        )}

        <ol className="grid grid-cols-1 gap-x-9 gap-y-11 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title || step.description || index}
              delay={Math.min(index, 5) * STAGGER_MS}
            >
              <span className="care-rail-index" aria-hidden="true">
                {index + 1}
              </span>

              {/* Steps arrive in two shapes. The hub pages write title + body
                  pairs. Service data (site-content.js how_it_works) is a plain
                  list of sentences, and a title-less step renders that sentence
                  as the step itself — the alternative was captioning it "Step 1"
                  directly under the counter, numbering the same step twice. */}
              {step.title ? (
                <>
                  <h3 className="care-h3 mt-5 font-display text-white">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="mt-2.5 text-[15px] leading-[1.7] text-[var(--care-mute)]">
                      {step.description}
                    </p>
                  )}
                </>
              ) : (
                <p className="mt-5 max-w-[34ch] text-[17px] leading-[1.55] text-white">
                  {step.description}
                </p>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorksSection;
