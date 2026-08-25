import { notFound } from "next/navigation";
import { Activity, Bandage, UserRound } from "lucide-react";

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
import { PHONE_HREF, PROCEDURE_SLUGS, serviceHref } from "@/lib/site";

const HUB_SLUG = "home-visits";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata() {
  const hub = await getHubPage(HUB_SLUG);
  if (!hub) return { title: "Home Visit" };

  return {
    title: hub.title,
    description: hub.lead,
    openGraph: { title: hub.title, description: hub.lead, type: "website" },
  };
}

const HOW_IT_WORKS = [
  {
    title: "Choose the visit you need",
    description:
      "Pick a doctor consultation, a physiotherapy session, or a nursing procedure. Tell us the patient's condition when you call.",
  },
  {
    title: "Confirm slot and address",
    description:
      "Share your locality and preferred time. The care team confirms the nearest available professional for that slot.",
  },
  {
    title: "Visit at home",
    description:
      "The professional arrives with the equipment and consumables the visit requires, and carries out the care plan.",
  },
  {
    title: "Notes and follow-up",
    description:
      "Findings are shared with you, and any repeat visits or escalation to a doctor are arranged through the same coordinator.",
  },
];

const SAFETY_ITEMS = [
  {
    icon: UserRound,
    title: "Qualified clinicians",
    description:
      "Doctors, physiotherapists, and nurses are verified for registration and experience before they take home visits.",
  },
  {
    icon: Bandage,
    title: "Sterile, single-use consumables",
    description:
      "Procedures use sealed, single-use consumables, opened in front of you and disposed of according to protocol.",
  },
  {
    icon: Activity,
    title: "Escalation when it matters",
    description:
      "If a visit reveals something that needs urgent attention, the professional escalates rather than waiting for the next visit.",
  },
];

export default async function HomeVisitRoute() {
  const hub = await getHubPage(HUB_SLUG);
  if (!hub) notFound();

  // getHubPage() already resolves hub.services into full service objects.
  // The hub lists both home-visit services and nursing procedures, so split
  // them into two grids (procedures are also linked from Nurse at Home).
  const all = hub.services || [];
  const services = all.filter((s) => !PROCEDURE_SLUGS.includes(s.slug));
  const procedures = all.filter((s) => PROCEDURE_SLUGS.includes(s.slug));

  const selectorGroups = [
    {
      label: "Home Visit Services",
      options: services.map((service) => ({
        label: service.name,
        href: serviceHref(service),
      })),
    },
    {
      label: "Nursing Procedures",
      options: procedures.map((service) => ({
        label: service.name,
        href: serviceHref(service),
      })),
    },
  ].filter((group) => group.options.length > 0);

  const faqItems = ALL_FAQS.filter((faq) =>
    ["booking", "trust", "procedures"].includes(faq.category),
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
          { icon: UserRound, label: "Expert doctors at home" },
          { icon: Activity, label: "Physiotherapy packs" },
          { icon: Bandage, label: "Post-surgical recovery" },
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
        title="Our Home Visit services"
        lead="Doctors, physiotherapists, and recovery support — delivered at your doorstep."
        items={services}
        variant="service"
        columns={3}
        tone="white"
      />

      <ServiceGridSection
        eyebrow="Nursing procedures"
        title="Procedures done at home"
        lead="Planned nursing procedures carried out at home by trained nurses on a doctor's advice."
        items={procedures}
        variant="procedure"
        columns={4}
        tone="off-white"
      />

      <HowItWorksSection
        title="Booking a home visit"
        lead="Four steps from the first call to a professional at your door."
        steps={HOW_IT_WORKS}
      />

      <SafetySection
        title="How we keep home visits safe"
        items={SAFETY_ITEMS}
        tone="white"
      />

      <FAQSection title="Home Visit — common questions" items={faqItems} />

      <CityCoverageSection />

      <FinalCTASection
        title="Book a professional for a home visit"
        lead="Tell us the patient's condition and preferred slot, and our care team will confirm the nearest available professional."
        cta={{ label: "Explore services", href: "/home-visit/" }}
        note="Final confirmation is subject to availability in your city."
      />

      <StickyMobileBar
        callHref={PHONE_HREF}
        callLabel="Call care team"
        bookHref="/home-visit/"
        bookLabel="Explore services"
      />
    </>
  );
}
