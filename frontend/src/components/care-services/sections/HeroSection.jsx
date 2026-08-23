import Link from "next/link";
import ServiceSelector from "./ServiceSelector";

/**
 * HeroSection — the home page thesis.
 *
 * Sits on the same lit ground as every category hero and the closing CTA (see
 * .care-sheet in globals.css), so the front page and the pages beneath it read
 * as one system rather than two designs bolted together. The arch of light
 * behind the headline is the site's signature — the threshold care crosses to
 * reach a home — and appears once at this scale per page.
 *
 * What was removed and why:
 *
 * - A decorative background SVG under a four-stop ivory gradient scrim. The
 *   scrim existed only to make text legible over an image that carried no
 *   information.
 * - 44px hairline ruling and a margin rule down the left edge. That was the
 *   observation-chart motif; on a page read by families rather than clinicians
 *   it read as notebook paper.
 * - Five stacked <Reveal> wrappers. Everything here is above the fold, so the
 *   observer fired immediately on all five and the staggering came from
 *   transition delays on content the reader was already looking at. The entrance
 *   is now the CSS-only --care-i sequence, which lets this be a server component:
 *   the only JavaScript left in the hero is the selector's own.
 * - The `/faq/` link. That route does not exist yet, so it fell through the
 *   catch-all and rendered an unrelated page. Only the two live hubs are linked.
 *
 * The selector is deliberately the single call to action. Buttons beside it
 * would compete with it for the same click, and it already carries the phone
 * number for anyone who would rather talk to a person.
 */

const HeroSection = ({
  eyebrow = "Home healthcare",
  title = "Apollo Homecare Services",
  tagline,
  selectorGroups = [],
  trustItems = [],
  browseLinks = [
    { label: "Long Term Care", href: "/long-term-care/" },
    { label: "Home Visit", href: "/home-visit/" },
  ],
  className = "",
}) => {
  // Sequence index for the staggered entrance, incremented as elements are
  // emitted so an absent block never leaves a gap in the timing.
  let step = 0;
  const next = () => ({ "--care-i": step++ });

  return (
    <>
      <section
        className={`care-sheet care-on-dark relative isolate overflow-hidden ${className}`}
      >
        {/* The signature: a doorway of light standing on the section baseline.
            Decorative, so hidden from assistive tech, and suppressed on the
            narrowest screens where it would fall under the headline. */}
        <span
          aria-hidden="true"
          className="care-arch bottom-0 right-[-4rem] hidden h-[24rem] w-[18rem] sm:block md:right-4 md:h-[31rem] md:w-[23rem]"
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pb-28 md:pt-24">
          <div className="max-w-[48rem]">
            {eyebrow && (
              <p className="care-eyebrow care-rise mb-5" style={next()}>
                {eyebrow}
              </p>
            )}

            <h1 className="care-display max-w-[20ch] font-display text-white">
              <span className="care-mask">
                <span className="care-wipe" style={next()}>
                  {title}
                </span>
              </span>
            </h1>

            {tagline && (
              <p className="care-lead care-rise mt-6 max-w-[56ch]" style={next()}>
                {tagline}
              </p>
            )}

            {trustItems.length > 0 && (
              <ul
                className="care-rise mt-9 flex flex-wrap items-center gap-2.5"
                style={next()}
              >
                {trustItems.map((item) => (
                  <li key={item.label} className="care-pill py-2 pl-3 pr-3.5">
                    <item.icon
                      size={15}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
            )}

            {browseLinks.length > 0 && (
              <p
                className="care-rise care-label mt-9 text-[var(--care-mute)]"
                style={next()}
              >
                Prefer to browse
                <span aria-hidden="true" className="px-2.5 text-white/30">
                  /
                </span>
                {browseLinks.map((link, index) => (
                  <span key={link.href}>
                    {index > 0 && (
                      <span aria-hidden="true" className="px-2 text-white/30">
                        ·
                      </span>
                    )}
                    <Link
                      href={link.href}
                      className="text-[var(--care-accent)] underline-offset-4 transition-opacity duration-250 ease-standard hover:underline hover:opacity-80"
                    >
                      {link.label}
                    </Link>
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* The intake card is pulled up over the lit ground's bottom edge, so the
          first interactive thing on the site sits on the threshold rather than
          floating in white space beneath it. Same treatment as the hub pages. */}
      {selectorGroups.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <div
              className="care-rise relative z-10 -mt-12 md:-mt-16"
              style={next()}
            >
              <ServiceSelector groups={selectorGroups} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroSection;
