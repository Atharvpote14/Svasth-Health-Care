import {
  BadgeCheck,
  HeartHandshake,
  Microscope,
  MonitorCheck,
  ShieldCheck,
  Syringe,
} from "lucide-react";
import HeroSection from "../components/care-services/sections/HeroSection";
import StatsStrip from "../components/care-services/sections/StatsStrip";
import ServiceGridSection from "../components/care-services/sections/ServiceGridSection";
import HowItWorksSection from "../components/care-services/sections/HowItWorksSection";
import OffersSection from "../components/care-services/sections/OffersSection";
import TestimonialsSection from "../components/care-services/sections/TestimonialsSection";
import ClinicalLeadershipSection from "../components/care-services/sections/ClinicalLeadershipSection";
import SafetySection from "../components/care-services/sections/SafetySection";
import LogosStripSection from "../components/care-services/sections/LogosStripSection";
import CityCoverageSection from "../components/care-services/sections/CityCoverageSection";
import FAQSection from "../components/care-services/sections/FAQSection";
import FinalCTASection from "../components/care-services/sections/FinalCTASection";
import { getFaqPage, getHomePage } from "../lib/data";
import { NAV_LINKS, serviceHref } from "../lib/site";

export const metadata = {
  title: "Apollo Homecare | #1 Home Care Services in India",
  description:
    "Expert healthcare delivered to your doorstep — long term care, home visits, and nursing procedures by trained, verified professionals. Call 1800 108 8586.",
};

/* How-it-works steps — real Apollo flow (sourced from live service pages).
   [CONFIRM WITH CLIENT] — confirm exact step naming before launch. */
const HOW_IT_WORKS_STEPS = [
  {
    title: "Book or call us",
    description:
      "Choose a service on this page or call 1800 108 8586 to share the patient's needs.",
  },
  {
    title: "Clinical assessment",
    description:
      "Apollo's team evaluates the patient's condition and recommends the right care plan.",
  },
  {
    title: "Care begins at home",
    description:
      "A trained, verified nurse, doctor, or attendant starts care on the agreed schedule.",
  },
  {
    title: "Ongoing follow-up",
    description:
      "Recovery is monitored and the care plan is adjusted as needs change over time.",
  },
];

/* Why-choose-us grid — unified lucide line icons only, Apollo palette */
const SAFETY_ITEMS = [
  {
    icon: BadgeCheck,
    title: "Experienced professionals",
    description:
      "Expert doctors, nurses, and caregivers delivering top-tier home-based healthcare.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised care plans",
    description:
      "Tailored care plans designed to meet unique health needs and lifestyle.",
  },
  {
    icon: ShieldCheck,
    title: "Quality accreditations",
    description:
      "Accreditations that ensure your safety and comfort at home.",
  },
  {
    icon: MonitorCheck,
    title: "Compassionate, reliable care",
    description:
      "Empathetic and ethical care you can trust for unwavering support.",
  },
];

/* Hero trust items — one-line, no invented statistics */
const HERO_TRUST_ITEMS = [
  { icon: BadgeCheck, label: "Trained & verified caregivers" },
  { icon: ShieldCheck, label: "Hospital-grade care at home" },
  { icon: HeartHandshake, label: "Compassionate, reliable support" },
];

/* Vertical cards for Diagnostics / Vaccination / Equipment (Person B routes).
   Minimal copy — full content lives on those pages. */
const VERTICAL_CARDS = {
  diagnostics: {
    icon: Microscope,
    title: "Home Diagnostics",
    tagline: "Diagnostic tests and sample collection at home.",
    href: "/home-diagnostics/",
  },
  vaccination: {
    icon: Syringe,
    title: "Adult Vaccination",
    tagline: "Vaccination services delivered at home.",
    href: "/adult-vaccination/",
  },
  equipment: {
    icon: MonitorCheck,
    title: "Medical Equipment",
    tagline: "Medical equipment for home-based care.",
    href: "/medical-equipment/",
  },
};

/* FAQs picked to cover the common questions (real Apollo answers) */
const HOME_FAQ_IDS = [
  "faq-booking-1",
  "faq-trust-1",
  "faq-booking-2",
  "faq-proc-2",
  "faq-icu-1",
  "faq-icu-2",
  "faq-booking-3",
  "faq-trust-2",
];

export default async function HomePage() {
  const data = await getHomePage();
  const { faqs } = await getFaqPage();

  /* "What care do you need?" selector groups — built from real services */
  const selectorGroups = [
    {
      label: "Long Term Care",
      options: data.popularServices.map((service) => ({
        label: service.name,
        href: serviceHref(service),
      })),
    },
    {
      label: "Home Visit",
      options: data.homeVisitServices.map((service) => ({
        label: service.name,
        href: serviceHref(service),
      })),
    },
    {
      label: "Nursing Procedures",
      options: data.homeVisitProcedures.map((service) => ({
        label: service.name,
        href: serviceHref(service),
      })),
    },
    {
      label: "More services",
      options: NAV_LINKS.slice(3).map((link) => ({
        label: link.label,
        href: link.path,
      })),
    },
  ];

  const homeFaqs = faqs.filter((faq) => HOME_FAQ_IDS.includes(faq.id));

  return (
    <>
      {/* 1. HERO — service selector + Book Now + phone (replaces 13-button wall) */}
      <HeroSection
        title="Apollo Homecare Services"
        tagline="Hospital-grade care at your doorstep — long term care, home visits, nursing procedures, and diagnostics delivered by trained, verified professionals."
        selectorGroups={selectorGroups}
        trustItems={HERO_TRUST_ITEMS}
      />

      {/* 2. STATS BAR — directly under hero (1Mn+, QAI, 2K+, 4.9) */}
      <StatsStrip />

      {/* 3. SERVICES OVERVIEW — 5 verticals, simplified icon + title + Book Now cards.
          Rhythm mirrors portea.com: ivory/white alternation on the service grids. */}
      <ServiceGridSection
        tone="off-white"
        eyebrow="Long Term Care"
        title="Compassionate Care You Can Trust at Home"
        lead="Expert care for your loved ones, combining medical excellence with the comfort of home."
        items={data.popularServices}
        seeAllHref="/long-term-care/"
      />

      <ServiceGridSection
        tone="white"
        eyebrow="Home Visit"
        title="Professional Healthcare at Your Doorstep"
        lead="Easily book doctors, physiotherapists, and post-surgical support at home."
        items={data.homeVisitServices}
        seeAllHref="/home-visit/"
      />

      <ServiceGridSection
        tone="off-white"
        eyebrow="Home Visit · Nursing Procedures"
        title="Nurse Procedures at Home"
        lead="Services like wound care and urinary catheterisation, delivered safely in the comfort of your home."
        items={data.homeVisitProcedures}
        variant="procedure"
        columns={2}
        seeAllHref="/home-visit/"
      />

      {/* Diagnostics / Vaccination / Equipment — same card treatment */}
      <ServiceGridSection
        tone="white"
        eyebrow="Home Diagnostics"
        title="Tests at Home"
        items={[VERTICAL_CARDS.diagnostics]}
        variant="vertical"
        seeAllHref="/home-diagnostics/"
      />

      <ServiceGridSection
        tone="off-white"
        eyebrow="Adult Vaccination"
        title="Stay Protected"
        items={[VERTICAL_CARDS.vaccination]}
        variant="vertical"
        seeAllHref="/adult-vaccination/"
      />

      <ServiceGridSection
        tone="white"
        eyebrow="Medical Equipment"
        title="Care Essentials Delivered"
        items={[VERTICAL_CARDS.equipment]}
        variant="vertical"
        seeAllHref="/medical-equipment/"
      />

      {/* 4. HOW IT WORKS — 4-step booking-to-care flow */}
      <HowItWorksSection
        title="How care at home works"
        lead="From first call to ongoing follow-up, the Apollo care journey in four steps."
        steps={HOW_IT_WORKS_STEPS}
      />

      {/* 5. OFFERS — placeholder cards [PENDING OFFER DATA] */}
      <OffersSection />

      {/* 6. TESTIMONIALS — placeholder carousel [PENDING REAL TESTIMONIALS] */}
      <TestimonialsSection />

      {/* 7. CLINICAL LEADERSHIP — placeholder cards [PENDING FROM CLIENT] */}
      <ClinicalLeadershipSection />

      {/* 8. WHY CHOOSE US — simplified icon grid */}
      <SafetySection
        eyebrow="Why choose us"
        title="Hospital-grade care, brought home"
        lead="Apollo Homecare brings hospital-grade care to your doorstep with professionally trained, background-verified caregivers you can trust."
        items={SAFETY_ITEMS}
      />

      {/* 9. CASE STUDIES — skipped for v1 (no real content yet) */}

      {/* 10. PARTNER HOSPITALS — placeholder logo strip [CONFIRM LOGOS] */}
      <LogosStripSection
        eyebrow="Partners"
        title="Trusted by leading hospitals"
        lead="Apollo Homecare works alongside leading hospitals and healthcare partners."
        note="[CONFIRM LOGOS / PERMISSION WITH CLIENT] — no logos shown until approved."
      />

      {/* 11. PRESS / MEDIA — placeholder press logo strip (ivory band, like portea.com) */}
      <LogosStripSection
        tone="off-white"
        eyebrow="In the news"
        title="As seen in the press"
        lead="Press mentions and media coverage of Apollo Homecare."
        note="[CONFIRM PRESS MENTIONS WITH CLIENT] — placeholder chips, real logos/media to be supplied."
      />

      {/* 12. CITY COVERAGE — state → city accordion (footer links retained for SEO) */}
      <CityCoverageSection />

      {/* 13. FAQ — before the final CTA */}
      <FAQSection
        eyebrow="Common questions"
        title="Frequently asked questions"
        items={homeFaqs}
        seeAllHref="/faq/"
      />

      {/* 14. FINAL CTA BANNER — "Ready to bring care home?" */}
      <FinalCTASection
        title="Ready to bring care home?"
        lead="Hospital-grade care delivered by trusted professionals — book now or talk to our care team."
        cta={{ label: "Book Now", href: "/home-visit/" }}
        note="In a medical emergency, our team provides quick response support."
      />

      {/* 15. FOOTER — unchanged (About, Services, Partner, Careers, News &
          Media, city links). Patient Charter link already fixed to
          /about/patient-charter/. */}
    </>
  );
}