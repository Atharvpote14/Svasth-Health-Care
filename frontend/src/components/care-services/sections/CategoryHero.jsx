import Link from "next/link";

/**
 * CategoryHero — the page thesis.
 *
 * Opens on the threshold: a lit dark ground with a single arch of light standing
 * on the baseline behind the headline (see .care-sheet / .care-arch in
 * globals.css). The arch is the site's signature and appears exactly once per
 * page at this size; the small version is the icon plate on every card.
 *
 * This replaces a sheet of 44px hairline ruling with a vertical margin rule down
 * the left edge. That drew the clinician's observation chart, but the reader here
 * is a family member, and ruled paper reads as a notebook rather than as care.
 *
 * The entrance is CSS-only, driven by an inline `--care-i` index (see .care-wipe
 * / .care-rise in globals.css). That keeps this a server component: the sequence
 * runs on first paint with no hydration boundary and no flash of hidden text,
 * which the previous Reveal-based version could not avoid.
 *
 * Two fixes carried over from the old hero: the primary CTA was `text-2xl` with
 * `py-5`, which rendered as an oversized slab, and the trust icons were
 * `text-secondary` (#00979e) on a #0d2222 ground — about 2.2:1, well under the
 * 4.5:1 floor. `.care-on-dark` remaps the accent to #8fe0e3 for the whole
 * subtree instead of patching colours per element.
 */

const CategoryHero = ({
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
  trustItems = [],
  specs = [],
  tone = "primary",
  className = "",
}) => {
  const isDark = tone === "primary";

  // Sequence index for the staggered entrance. Incremented as elements are
  // emitted so gaps never appear when an optional block is absent.
  let step = 0;
  const next = () => ({ "--care-i": step++ });

  return (
    <section
      className={`relative isolate overflow-hidden ${
        isDark ? "care-sheet care-on-dark" : "bg-white"
      } ${className}`}
    >
      {/* The signature, and the only decoration on the page: a doorway of light
          standing on the section's baseline. Decorative, so it is hidden from
          assistive tech, and suppressed on the narrowest screens where it would
          sit under the headline rather than behind it. */}
      {isDark && (
        <span
          aria-hidden="true"
          className="care-arch bottom-0 right-[-3.5rem] hidden h-[22rem] w-[16.5rem] sm:block md:right-6 md:h-[28rem] md:w-[21rem]"
        />
      )}

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-[46rem]">
          {eyebrow && (
            <p className="care-eyebrow care-rise mb-5" style={next()}>
              {eyebrow}
            </p>
          )}

          <h1
            className={`care-display max-w-[22ch] font-display ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            <span className="care-mask">
              <span className="care-wipe" style={next()}>
                {title}
              </span>
            </span>
          </h1>

          {lead && (
            <p
              className="care-lead care-rise mt-6 max-w-[54ch]"
              style={next()}
            >
              {lead}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div
              className="care-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={next()}
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="btn btn-primary h-13 px-7 text-[15px]"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className={`btn h-13 px-6 text-[15px] font-medium ${
                    isDark
                      ? "border border-white/25 text-white hover:border-[#8fe0e3] hover:text-[#8fe0e3]"
                      : "btn-secondary"
                  }`}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {/* Spec pills — the care type and the starting price, the two facts a
              family decides on, stated once and near the top. These used to be
              rows with dotted leaders running from the label to the value, which
              made two reassuring facts look like line items on a bill. */}
          {specs.length > 0 && (
            <dl
              className="care-rise mt-10 flex flex-wrap items-center gap-x-4 gap-y-2.5"
              style={next()}
            >
              {specs.map((spec) => (
                <div key={spec.key} className="care-spec">
                  <dt className="care-spec-key">{spec.key}</dt>
                  <dd className="care-spec-value">{spec.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {trustItems.length > 0 && (
            <ul
              className="care-rise mt-9 flex flex-wrap items-center gap-2.5"
              style={next()}
            >
              {trustItems.map((item) => (
                <li key={item.label} className="care-pill py-2 pl-3 pr-3.5">
                  <item.icon size={15} strokeWidth={1.75} aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
