import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQAccordion from "../utilities/FAQAccordion";
import Reveal from "../../Reveal";

/**
 * FAQSection — questions as a ruled register.
 *
 * Moved off the centred max-w-3xl column onto an asymmetric two-column split
 * with the heading held in place while the questions scroll past it. FAQ lists
 * are long and read in a scanning mode; keeping the section's subject visible
 * while scanning is more useful than centring it above a list that pushes it
 * off screen.
 */

const FAQSection = ({
  eyebrow = "Common questions",
  title,
  items = [],
  seeAllHref,
  className = "",
}) => {
  if (items.length === 0) return null;

  return (
    <section className={`bg-white py-14 md:py-[88px] ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              {eyebrow && <p className="care-eyebrow mb-4">{eyebrow}</p>}
              {title && <h2 className="care-h2 font-display">{title}</h2>}

              {seeAllHref && (
                <Link
                  href={seeAllHref}
                  className="group mt-6 hidden items-center gap-1.5 care-label text-primary hover:text-primary-600 lg:inline-flex"
                >
                  All questions
                  <ArrowRight
                    size={13}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="transition-transform duration-250 ease-standard group-hover:translate-x-1"
                  />
                </Link>
              )}
            </div>
          </Reveal>

          <div>
            <FAQAccordion items={items} />

            {seeAllHref && (
              <p className="mt-8 lg:hidden">
                <Link
                  href={seeAllHref}
                  className="inline-flex items-center gap-1.5 care-label text-primary"
                >
                  All questions
                  <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
