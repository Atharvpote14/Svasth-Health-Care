import Link from "next/link";
import Reveal from "../../Reveal";

/**
 * CategoryHero — page hero.
 * Polish: staggered fade + upward slide entrance (eyebrow → title → lead →
 * CTAs → trust items) via Reveal, so the hero reads as calm and deliberate.
 * CHANGE (7-color system): white base background, H1 in Neutral Dark #1F2937,
 * supporting sub-headline in Neutral Mid #5C6570, primary CTA in Apollo Red,
 * secondary CTA in Trust Blue outline, trust icons in Trust Blue.
 */

const CategoryHero = ({
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
  trustItems = [],
  tone = "primary",
  className = "",
}) => {
  const isDark = tone === "primary";

  return (
    <section
      className={`${isDark ? "bg-neutral-900" : "bg-white"} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {eyebrow && (
          <Reveal delay={0}>
            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-[0.08em] ${
                isDark ? "text-white/80" : "text-secondary"
              }`}
            >
              {eyebrow}
            </p>
          </Reveal>
        )}

        <Reveal delay={80}>
          <h1
            className={`max-w-3xl font-display text-[40px] font-bold leading-tight ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            {title}
          </h1>
        </Reveal>

        {lead && (
          <Reveal delay={160}>
            <p
              className={`mt-4 max-w-2xl text-base leading-relaxed ${
                isDark ? "text-neutral-100" : "text-neutral-600"
              }`}
            >
              {lead}
            </p>
          </Reveal>
        )}

        {(primaryCta || secondaryCta) && (
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="btn btn-primary px-10 py-5 text-2xl"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="btn btn-secondary px-8 py-4 text-base"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </Reveal>
        )}

        {trustItems.length > 0 && (
          <Reveal delay={320}>
            <ul
              className={`mt-10 flex flex-wrap gap-x-8 gap-y-3 ${
                isDark ? "text-neutral-100" : "text-neutral-600"
              }`}
            >
              {trustItems.map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-sm">
                  <item.icon size={16} aria-hidden="true" className="text-secondary" />
                  {item.label}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default CategoryHero;