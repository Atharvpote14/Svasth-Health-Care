/**
 * FAQSection — FAQ accordion block.
 * Portea faq-sec: white band, h2 Fraunces 24/36 600, eyebrow 12px/.14em teal,
 * teal "View all" link; accordion styling lives in globals (.accordion).
 */

import Link from "next/link";
import FAQAccordion from "../utilities/FAQAccordion";
import Reveal from "../../Reveal";

const FAQSection = ({
  eyebrow = "Common questions",
  title,
  items = [],
  seeAllHref,
  className = "",
}) => {
  if (items.length === 0) return null;

  return (
    <section className={`bg-white py-10 md:py-[70px] ${className}`}>
      <Reveal>
        <div className="mx-auto max-w-3xl px-6">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mb-8 font-display text-[24px] font-semibold leading-[1.3] text-neutral-900 md:text-[36px]">
              {title}
            </h2>
          )}

          <FAQAccordion items={items} />

          {seeAllHref && (
            <p className="mt-6 text-center">
              <Link href={seeAllHref} className="font-medium text-primary hover:text-primary-600 hover:underline">
                View all FAQs →
              </Link>
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
};

export default FAQSection;