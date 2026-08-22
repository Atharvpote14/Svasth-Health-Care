import Link from "next/link";
import Reveal from "../../Reveal";
import ServiceSelector from "./ServiceSelector";

/**
 * HeroSection — home hero (Portea banner-sec).
 * Portea design system: ivory #faf7f1 band, Fraunces H1 (52px/600 desktop,
 * 30px mobile), 18px/1.65 tagline, teal eyebrow (12px/600/.14em), orange
 * Book Now + teal phone in the booking selector.
 * TEMP: decorative home-care background image (public/hero-bg.svg) layered
 * on the right with an ivory fade for text readability. Swap for a real
 * photography asset later.
 */

const HeroSection = ({
  eyebrow = "CareNest",
  title = "CareNest Services",
  tagline,
  selectorGroups = [],
  trustItems = [],
  className = "",
}) => {
  return (
    <section className={`relative overflow-hidden bg-neutral-100 ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #faf7f1 12%, rgba(250,247,241,0.85) 42%, rgba(250,247,241,0.4) 68%, rgba(250,247,241,0.05) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-10 md:py-[70px]">
        {eyebrow && (
          <Reveal delay={0}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {eyebrow}
            </p>
          </Reveal>
        )}

        <Reveal delay={80}>
          <h1 className="max-w-3xl font-display text-[30px] font-semibold leading-[1.25] text-neutral-900 md:text-[52px] md:leading-[1.18]">
            {title}
          </h1>
        </Reveal>

        {tagline && (
          <Reveal delay={160}>
            <p className="mt-4 max-w-2xl text-lg leading-[1.65] text-neutral-600">
              {tagline}
            </p>
          </Reveal>
        )}

        <Reveal delay={240}>
          <ServiceSelector groups={selectorGroups} />
        </Reveal>

        {trustItems.length > 0 && (
          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-neutral-600">
              {trustItems.map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-sm">
                  <item.icon size={16} aria-hidden="true" className="text-primary" />
                  {item.label}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {/* Book Now also directly links into the verticals for no-JS users */}
        <Reveal delay={400}>
          <p className="mt-6 text-sm text-neutral-600">
            Or explore:{" "}
            <Link href="/long-term-care/" className="font-medium text-primary hover:text-primary-600 hover:underline">
              Long Term Care
            </Link>
            {" · "}
            <Link href="/home-visit/" className="font-medium text-primary hover:text-primary-600 hover:underline">
              Home Visit
            </Link>
            {" · "}
            <Link href="/faq/" className="font-medium text-primary hover:text-primary-600 hover:underline">
              FAQ
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;