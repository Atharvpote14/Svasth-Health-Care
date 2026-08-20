/**
 * FinalCTASection — closing banner before the footer.
 * Portea closing-cta: dark dotted gradient
 * radial-gradient(rgba(143,224,227,.12) 1.5px,transparent 1.6px) 22px +
 * linear-gradient(120deg,#0d2222,#114143); centered; orange Book Now
 * (height 60px, radius 999px) + white call link with #8fe0e3 phone icon.
 */

import Link from "next/link";
import { Phone } from "lucide-react";
import Reveal from "../../Reveal";
import { PHONE_HREF, PHONE_NUMBER } from "../../../lib/site";

const FinalCTASection = ({
  title,
  lead,
  cta,
  note,
  className = "",
}) => {
  return (
    <section
      className={`band-dark-dotted-strong py-10 md:py-[70px] ${className}`}
    >
      <Reveal>
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <h2 className="font-display text-[26px] font-semibold leading-[1.3] text-white md:text-[40px]">
            {title}
          </h2>

          {lead && <p className="mt-4 text-base text-white/80">{lead}</p>}

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            {cta && (
              <Link
                href={cta.href}
                className="btn btn-primary flex h-[60px] w-[184px] items-center justify-center text-lg"
              >
                {cta.label}
              </Link>
            )}
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 px-4 py-4 text-base font-semibold text-white transition-colors hover:text-[#8fe0e3]"
            >
              <Phone size={18} aria-hidden="true" className="text-[#8fe0e3]" />
              {PHONE_NUMBER}
            </a>
          </div>

          {note && <p className="mt-6 text-sm text-white/60">{note}</p>}
        </div>
      </Reveal>
    </section>
  );
};

export default FinalCTASection;