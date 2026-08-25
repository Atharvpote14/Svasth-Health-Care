import { notFound } from "next/navigation";
import { HeartHandshake, MonitorCheck, ShieldCheck } from "lucide-react";

import Breadcrumbs from "@/components/care-services/utilities/Breadcrumbs";
import CategoryHero from "@/components/care-services/sections/CategoryHero";
import ServiceSelector from "@/components/care-services/sections/ServiceSelector";
import ServiceGridSection from "@/components/care-services/sections/ServiceGridSection";
import HowItWorksSection from "@/components/care-services/sections/HowItWorksSection";
import SafetySection from "@/components/care-services/sections/SafetySection";
import FAQSection from "@/components/care-services/sections/FAQSection";
import CityCoverageSection from "@/components/care-services/sections/CityCoverageSection";
import FinalCTASection from "@/components/care-services/sections/FinalCTASection";
import StickyMobileBar from "@/components/care-services/domain/StickyMobileBar";

import { getHubPage } from "@/lib/data";
import { faqs as ALL_FAQS } from "@/lib/site-content";
import { PHONE_HREF, serviceHref } from "@/lib/site";

const HUB_SLUG = "long-term-care";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata() {
  const hub = await getHubPage(HUB_SLUG);
  if (!hub) return { title: "Long Term Care" };

  return {
    title: hub.title,
    description: hub.lead,
    openGraph: { title: hub.title, description: hub.lead, type: "website" },
  };
}

const HOW_IT_WORKS = [
  {
    title: "Tell us what's needed",
    description:
      "Call the care team and describe the patient's condition, the level of support required, and how long you expect to need it.",
  },
  {
    title: "Clinical assessment",
    description:
      "A coordinator reviews the medical notes and, where required, arranges an assessment to agree the right level of care.",
  },
  {
    title: "Matched care professional",
    description:
      "We assign a nurse, attendant, or critical-care team whose training matches the care plan, and share their details with you.",
  },
  {
    title: "Care begins at home",
    description:
      "Care starts on the agreed schedule, with a coordinator reachable for changes, replacements, and clinical questions.",
  },
];

const SAFETY_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Verified professionals",
    description:
      "Nurses and attendants are background-checked and assessed on clinical skill before they are assigned to a home.",
  },
  {
    icon: MonitorCheck,
    title: "Equipment that fits the plan",
    description:
      "Where care needs monitoring or respiratory support, the equipment is arranged and set up as part of the engagement.",
  },
  {
    icon: HeartHandshake,
    title: "Continuity of carer",
    description:
      "Long-term care works best with familiar faces, so we keep the same team on a case wherever rosters allow.",
  },
];

export default async function LongTermCareRoute() {
  const hub = await getHubPage(HUB_SLUG);
  if (!hub) notFound();

  // getHubPage() already resolves hub.services into full service objects.
  const services = hub.services || [];

  const selectorGroups = [
    {
      label: "Long Term Care Services",
      options: services.map((service) => ({
        label: service.name,
        href: serviceHref(service),
      })),
    },
  ];

  const faqItems = ALL_FAQS.filter((faq) =>
    ["booking", "trust", "icu"].includes(faq.category),
  );

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-6">
          <Breadcrumbs
            items={[{ label: "Home", path: "/" }, { label: hub.name }]}
          />
        </div>
      </div>

      <CategoryHero
        eyebrow={hub.eyebrow}
        title={hub.title}
        lead={hub.lead}
        primaryCta={{ label: "Talk to our care team", href: PHONE_HREF }}
        trustItems={[
          { icon: ShieldCheck, label: "Trained & verified nurses" },
          { icon: HeartHandshake, label: "Personalised care plans" },
          { icon: MonitorCheck, label: "Hospital-grade equipment" },
        ]}
      />

      {/* The intake slip is pulled up over the hero's bottom edge, so it sits on
          the ruled sheet rather than floating in white space beneath it. */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative z-10 -mt-9 md:-mt-12">
            <ServiceSelector groups={selectorGroups} />
          </div>
        </div>
      </section>

      <ServiceGridSection
        eyebrow={hub.name}
        title="Our Long Term Care services"
        lead="From skilled nursing to ICU-level critical care — all delivered at home with clinical oversight."
        items={services}
        variant="service"
        columns={4}
        tone="white"
      />

      <HowItWorksSection
        title="Arranging long term care"
        lead="Four steps from the first call to a care professional at your door."
        steps={HOW_IT_WORKS}
      />

      <SafetySection
        title="How we keep long-term care safe"
        items={SAFETY_ITEMS}
        tone="off-white"
      />

      <FAQSection title="Long Term Care — common questions" items={faqItems} />

      <CityCoverageSection />

      <FinalCTASection
        title="Not sure which level of care you need?"
        lead="Describe the patient's condition and our care team will recommend the right service and confirm availability in your city."
        cta={{ label: "Explore services", href: "/long-term-care/" }}
        note="Final confirmation is subject to availability in your city."
      />

      <StickyMobileBar
        callHref={PHONE_HREF}
        callLabel="Call care team"
        bookHref="/long-term-care/"
        bookLabel="Explore services"
      />
    </>
  );
}
