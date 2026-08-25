import Link from "next/link";
import { Phone } from "lucide-react";
import Reveal from "../../Reveal";
import { PHONE_HREF, PHONE_NUMBER } from "../../../lib/site";

/**
 * FinalCTASection — the closing bookend.
 *
 * The same lit ground and arch as CategoryHero, so the page opens and closes on
 * the same threshold. Previously this was centred, which read as a generic
 * closing banner unrelated to anything above it.
 *
 * The phone number is set at display size in the body face rather than in mono.
 * It is the last thing on the page and the one the whole page is arguing for, so
 * it is sized like an invitation rather than tucked into a data style.
 */

const FinalCTASection = ({ title, lead, cta, note, className = "" }) => {
  return (
    <section
      className={`care-sheet care-on-dark relative isolate overflow-hidden ${className}`}
    >
      <span
        aria-hidden="true"
        className="care-arch bottom-0 right-[-4rem] hidden h-[20rem] w-[15rem] sm:block md:right-10 md:h-[25rem] md:w-[18.75rem]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="care-h2 font-display text-white">{title}</h2>

            {lead && <p className="care-lead mt-5">{lead}</p>}

            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
              {cta && (
                <Link
                  href={cta.href}
                  className="btn btn-primary h-13 px-7 text-[15px]"
                >
                  {cta.label}
                </Link>
              )}

              <a
                href={PHONE_HREF}
                className="group inline-flex items-center gap-2.5 text-[19px] font-semibold text-white transition-colors duration-250 ease-standard hover:text-[#8fe0e3]"
              >
                <Phone
                  size={17}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="text-[#8fe0e3] transition-transform duration-250 ease-standard group-hover:-rotate-12"
                />
                {PHONE_NUMBER}
              </a>
            </div>

            {note && (
              <p className="care-label mt-9 max-w-md text-[var(--care-mute)]">
                {note}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
