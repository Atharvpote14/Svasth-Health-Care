import Link from "next/link";
import FAQAccordion from "../utilities/FAQAccordion";

const FAQSection = ({
  eyebrow = "Common questions",
  title,
  items = [],
  seeAllHref,
  className = "",
}) => {
  if (items.length === 0) return null;

  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-3xl px-6">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-primary-700">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mb-8 font-display text-3xl text-neutral-900 md:text-4xl">
            {title}
          </h2>
        )}

        <FAQAccordion items={items} />

        {seeAllHref && (
          <p className="mt-6 text-center">
            <Link href={seeAllHref} className="font-medium text-primary-700 hover:underline">
              View all FAQs →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default FAQSection;