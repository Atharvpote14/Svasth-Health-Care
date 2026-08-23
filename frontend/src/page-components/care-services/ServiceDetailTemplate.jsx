import { notFound } from "next/navigation";
import {
  Check,
  ClipboardCheck,
  HeartHandshake,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/care-services/utilities/Breadcrumbs";
import CategoryHero from "@/components/care-services/sections/CategoryHero";
import HowItWorksSection from "@/components/care-services/sections/HowItWorksSection";
import SafetySection from "@/components/care-services/sections/SafetySection";
import FAQSection from "@/components/care-services/sections/FAQSection";
import RelatedServicesSection from "@/components/care-services/sections/RelatedServicesSection";
import FinalCTASection from "@/components/care-services/sections/FinalCTASection";
import CityCoverageSection from "@/components/care-services/sections/CityCoverageSection";
import EmergencyDisclaimer from "@/components/care-services/domain/EmergencyDisclaimer";
import PriceFromNote from "@/components/care-services/domain/PriceFromNote";
import StickyMobileBar from "@/components/care-services/domain/StickyMobileBar";
import {
  priceFromLabel,
  serviceTypeLabel,
} from "@/components/care-services/domain/service-meta";

import { getServicePage } from "@/lib/data";
import { faqs as ALL_FAQS } from "@/lib/site-content";
import { PHONE_HREF, hubHref } from "@/lib/site";

/**
 * ServiceDetailTemplate — one template for every service and procedure page.
 *
 * All copy is read from `src/lib/site-content.js` through `getServicePage()`,
 * so a page file only has to name its slug. Sections that receive an empty
 * array render nothing (the section components self-hide), which keeps thin
 * services from showing empty headings.
 *
 * Layout note. The body used to be three full-width bands, each with a centred
 * block heading over a grid of rounded boxes — Overview, Who it's for, What's
 * included — which made three unrelated-looking marketing panels out of what is
 * really one record about one service. They now share a single gutter/field
 * skeleton (see RecordSection): the label sits in the left margin and the
 * content sits in the field beside it, so all three headings hang off the same
 * vertical line and the page reads down as one document. It is also the same
 * skeleton FAQSection uses, so the rhythm holds to the bottom of the page.
 *
 * The two lists are deliberately given different markers rather than matching
 * bullets, because they are different kinds of statement: "who it's for" entries
 * are indications, marked with a plain dot, while "what's included" entries are a
 * coverage checklist, where a check genuinely encodes "this is covered".
 */

/** Generic FAQs shown when a service has no category-specific ones. */
const FALLBACK_FAQ_CATEGORIES = ["booking", "trust"];

const SAFETY_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Verified professionals",
    description:
      "Every nurse, attendant, and therapist is background-checked and assessed on clinical skill before being assigned to a home.",
  },
  {
    icon: ClipboardCheck,
    title: "Written care plan",
    description:
      "Care starts from a documented plan so the family, the attending clinician, and the care team all work to the same instructions.",
  },
  {
    icon: PhoneCall,
    title: "A number that answers",
    description:
      "A coordinator stays reachable for schedule changes, replacements, and clinical questions for the length of the engagement.",
  },
  {
    icon: HeartHandshake,
    title: "Dignity at home",
    description:
      "Hygiene, privacy, and consent are treated as part of the clinical work, not an afterthought.",
  },
];

/** Resolve the service once and reuse for both metadata and the page body. */
async function loadService(slug) {
  return getServicePage(slug);
}

/**
 * Build Next.js metadata for a service page.
 * @param {string} slug
 */
export async function buildServiceMetadata(slug) {
  const service = await loadService(slug);
  if (!service) return { title: "Service not found" };

  return {
    title: service.name,
    description: service.tagline || service.overview,
    openGraph: {
      title: service.name,
      description: service.tagline || service.overview,
      type: "website",
    },
  };
}

/**
 * RecordSection — the gutter/field skeleton shared by every body section.
 *
 * The heading sticks from `lg` up so the label stays beside its content while a
 * long list scrolls past it. Note the nesting: the grid item is left to stretch
 * to the row's full height and the sticky element is its child. A sticky element
 * can only travel inside its parent's box, so collapsing that parent to its own
 * content height (align-self: start) would leave it nothing to travel in.
 */
function RecordSection({ eyebrow, title, tone = "white", children }) {
  return (
    <section
      className={`py-14 md:py-[88px] ${
        tone === "off-white" ? "care-band" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <p className="care-eyebrow mb-4">{eyebrow}</p>
              <h2 className="care-h2 font-display">{title}</h2>
            </div>
          </Reveal>

          <Reveal delay={90}>{children}</Reveal>
        </div>
      </div>
    </section>
  );
}

export default async function ServiceDetailTemplate({
  slug,
  variant = "service",
  emergencyNote,
}) {
  const service = await loadService(slug);
  if (!service) notFound();

  const isProcedure = variant === "procedure";
  const category = service.category || {};
  const hubPath = hubHref(category.slug);

  // getServicePage() only attaches category-specific FAQs; fall back to the
  // general booking/trust set so every page answers something real.
  const faqItems =
    service.faqs && service.faqs.length > 0
      ? service.faqs
      : ALL_FAQS.filter((faq) => FALLBACK_FAQ_CATEGORIES.includes(faq.category));

  const whoItsFor = service.who_its_for || [];
  const whatsIncluded = service.whats_included || [];
  const howItWorks = service.how_it_works || [];

  // how_it_works entries are single sentences, not title + body pairs. Passing
  // them as descriptions with no title lets the rail render the sentence itself
  // as the step; the old mapping produced "01" followed by the words "Step 1",
  // which numbered the same step twice and said nothing either time.
  const steps = howItWorks.map((step) => ({ description: step }));

  // Only the two facts a family actually decides on. `availability` is the
  // string "available" on all 23 records, so it differentiates nothing and is
  // not shown; `type` and `price_from` both genuinely vary.
  const heroSpecs = [
    { key: isProcedure ? "Visit" : "Care", value: serviceTypeLabel(service.type) },
    { key: "From", value: priceFromLabel(service.price_from) },
  ].filter((spec) => Boolean(spec.value));

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-6">
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: category.name || "Services", path: hubPath },
              { label: service.name },
            ]}
          />
        </div>
      </div>

      <CategoryHero
        eyebrow={category.name}
        title={service.name}
        lead={service.tagline}
        primaryCta={{ label: "Talk to our care team", href: PHONE_HREF }}
        secondaryCta={{
          label: `All ${category.name || "services"}`,
          href: hubPath,
        }}
        specs={heroSpecs}
      />

      <RecordSection
        eyebrow="Overview"
        title={isProcedure ? "What this procedure involves" : "About this service"}
      >
        <p className="care-lead max-w-[62ch]">{service.overview}</p>

        {/* The figure itself is already on the hero rail, so this carries only
            what the figure cannot: what the price actually depends on. */}
        <PriceFromNote
          priceNote={service.price_note}
          showFigure={false}
          className="mt-10 max-w-[62ch]"
        />

        {emergencyNote && (
          <div className="mt-8 max-w-[62ch]">
            <EmergencyDisclaimer message={emergencyNote} />
          </div>
        )}
      </RecordSection>

      {whoItsFor.length > 0 && (
        <RecordSection
          eyebrow="Who it's for"
          title={isProcedure ? "When this is needed" : "Who this service suits"}
          tone="off-white"
        >
          <ul className="care-log max-w-[62ch]">
            {whoItsFor.map((item) => (
              <li key={item} className="care-log-item">
                <span aria-hidden="true" className="care-log-marker">
                  <span className="block h-1.5 w-1.5 rounded-full bg-current" />
                </span>
                <span className="text-[15px] leading-[1.7] text-neutral-800 md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </RecordSection>
      )}

      {whatsIncluded.length > 0 && (
        <RecordSection eyebrow="What's included" title="What the care team covers">
          <ul className="care-log sm:grid-cols-2 sm:gap-x-10">
            {whatsIncluded.map((item) => (
              <li key={item} className="care-log-item">
                <span aria-hidden="true" className="care-log-marker">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className="text-[15px] leading-[1.7] text-neutral-800 md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </RecordSection>
      )}

      <HowItWorksSection
        title={isProcedure ? "How it is done at home" : "How it works"}
        lead="From the first call to care at your door, the process is deliberately short."
        steps={steps}
      />

      <SafetySection
        eyebrow="Safety & trust"
        title="How we keep care safe at home"
        items={SAFETY_ITEMS}
        tone="off-white"
      />

      <FAQSection
        title={`${service.name} — common questions`}
        items={faqItems}
      />

      <RelatedServicesSection title="You may also need" items={service.related} />

      <CityCoverageSection />

      <FinalCTASection
        title={`Arrange ${service.name.toLowerCase()} at home`}
        lead="Tell us about the patient and our care team will confirm availability, timing, and the right care plan."
        cta={{ label: "Explore services", href: hubPath }}
        note="Final confirmation is subject to availability in your city."
      />

      <StickyMobileBar
        callHref={PHONE_HREF}
        callLabel="Call care team"
        bookHref={hubPath}
        bookLabel="Explore services"
      />
    </>
  );
}
