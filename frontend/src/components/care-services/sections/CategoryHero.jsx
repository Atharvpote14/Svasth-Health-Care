import Link from "next/link";

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
      className={`${isDark ? "bg-primary-900" : "bg-primary-50"} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {eyebrow && (
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.08em] ${
              isDark ? "text-accent-300" : "text-primary-700"
            }`}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className={`max-w-3xl font-display text-4xl leading-tight md:text-5xl ${
            isDark ? "text-white" : "text-neutral-900"
          }`}
        >
          {title}
        </h1>

        {lead && (
          <p
            className={`mt-4 max-w-2xl text-lg leading-relaxed md:text-xl ${
              isDark ? "text-neutral-100" : "text-neutral-600"
            }`}
          >
            {lead}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn btn-accent h-13 px-6 text-base">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn btn-secondary h-13 px-6 text-base">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}

        {trustItems.length > 0 && (
          <ul
            className={`mt-10 flex flex-wrap gap-x-8 gap-y-3 ${
              isDark ? "text-neutral-100" : "text-neutral-700"
            }`}
          >
            {trustItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm">
                <item.icon size={16} aria-hidden="true" className="text-accent-500" />
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CategoryHero;