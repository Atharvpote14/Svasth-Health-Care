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
  title: "Svasth Homecare | #1 Home Care Services in India",
  description:
    "Expert healthcare delivered to your doorstep — long term care, home visits, and nursing procedures by trained, verified professionals. Call 1800 000 0000.",
};

/* How-it-works steps — real Svasth flow (sourced from live service pages).
   [CONFIRM WITH CLIENT] — confirm exact step naming before launch. */
const HOW_IT_WORKS_STEPS = [
  {
    title: "Book or call us",
    description:
      "Choose a service on this page or call 1800 000 0000 to share the patient's needs.",
  },
  {
    title: "Clinical assessment",
    description:
      "Svasth's team evaluates the patient's condition and recommends the right care plan.",
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

/* Why-choose-us grid — unified lucide line icons only, Svasth palette */
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

/* The other three service lines (Person B's routes). One section with three
   cards, not three sections with one card each: a full-width band, heading and
   "see all" link wrapped around a single tile read as a page that had run out
   of content, and three of them in a row read as a fault. */
const SERVICE_LINES = [
  {
    icon: Microscope,
    title: "Home Diagnostics",
    tagline: "Diagnostic tests and sample collection at home.",
    href: "/home-diagnostics/",
  },
  {
    icon: Syringe,
    title: "Adult Vaccination",
    tagline: "Vaccination services delivered at home.",
    href: "/adult-vaccination/",
  },
  {
    icon: MonitorCheck,
    title: "Medical Equipment",
    tagline: "Medical equipment for home-based care.",
    href: "/medical-equipment/",
  },
];

/* Offers, testimonials, clinical leadership, partner logos and press logos are
   all still waiting on the client, and every one of them renders its own
   placeholder text — "[PENDING REAL TESTIMONIAL]", "[Doctor name]", "[Logo]".
   Five such bands were shipping on the home page, which is worse for a reader
   than their absence. The components and their copy stay in the repo; flip this
   to true once real content lands and they come back in the same order. */
const SHOW_PLACEHOLDER_SECTIONS = false;

/* FAQs picked to cover the common questions (real Svasth answers) */
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
        title="Svasth Homecare Services"
        tagline="Hospital-grade care at your doorstep — long term care, home visits, nursing procedures, and diagnostics delivered by trained, verified professionals."
        selectorGroups={selectorGroups}
        trustItems={HERO_TRUST_ITEMS}
      />

      {/* 2. STATS BAR — directly under hero (1Mn+, QAI, 2K+, 4.9) */}
      <StatsStrip />

      {/* 3. SERVICES — the three care-services grids, then the other lines.
          Grounds alternate white / off-white so consecutive grids stay legible
          as separate sections without needing a divider. */}
      <ServiceGridSection
        tone="white"
        eyebrow="Long Term Care"
        title="Compassionate Care You Can Trust at Home"
        lead="Expert care for your loved ones, combining medical excellence with the comfort of home."
        items={data.popularServices}
        seeAllHref="/long-term-care/"
      />

      <ServiceGridSection
        tone="off-white"
        eyebrow="Home Visit"
        title="Professional Healthcare at Your Doorstep"
        lead="Easily book doctors, physiotherapists, and post-surgical support at home."
        items={data.homeVisitServices}
        seeAllHref="/home-visit/"
      />

      <ServiceGridSection
        tone="white"
        eyebrow="Home Visit · Nursing Procedures"
        title="Nurse Procedures at Home"
        lead="Services like wound care and urinary catheterisation, delivered safely in the comfort of your home."
        items={data.homeVisitProcedures}
        variant="procedure"
        columns={4}
        seeAllHref="/home-visit/"
      />

      <ServiceGridSection
        tone="off-white"
        eyebrow="Also at home"
        title="Diagnostics, vaccination, and equipment"
        lead="The same care team can arrange tests, vaccinations, and the equipment a care plan needs."
        items={SERVICE_LINES}
        variant="vertical"
        columns={3}
      />

      {/* 4. HOW IT WORKS — 4-step booking-to-care flow */}
      <HowItWorksSection
        title="How care at home works"
        lead="From first call to ongoing follow-up, the Svasth care journey in four steps."
        steps={HOW_IT_WORKS_STEPS}
      />

      {/* 5–7 + 10–11. Offers, testimonials, clinical leadership, partner logos,
          press logos — all awaiting client content. See
          SHOW_PLACEHOLDER_SECTIONS above. */}
      {SHOW_PLACEHOLDER_SECTIONS && (
        <>
          <OffersSection />
          <TestimonialsSection />
          <ClinicalLeadershipSection />

          <LogosStripSection
            eyebrow="Partners"
            title="Trusted by leading hospitals"
            lead="Svasth Homecare works alongside leading hospitals and healthcare partners."
            note="[CONFIRM LOGOS / PERMISSION WITH CLIENT] — no logos shown until approved."
          />

          <LogosStripSection
            tone="off-white"
            eyebrow="In the news"
            title="As seen in the press"
            lead="Press mentions and media coverage of Svasth Homecare."
            note="[CONFIRM PRESS MENTIONS WITH CLIENT] — placeholder chips, real logos/media to be supplied."
          />
        </>
      )}

      {/* 8. WHY CHOOSE US */}
      <SafetySection
        eyebrow="Why choose us"
        title="Hospital-grade care, brought home"
        lead="Svasth Homecare brings hospital-grade care to your doorstep with professionally trained, background-verified caregivers you can trust."
        items={SAFETY_ITEMS}
        tone="white"
      />

      {/* 9. CASE STUDIES — skipped for v1 (no real content yet) */}

      {/* 12. CITY COVERAGE — ruled register (footer links retained for SEO) */}
      <CityCoverageSection />

      {/* 13. FAQ — before the final CTA */}
      <FAQSection
        eyebrow="Common questions"
        title="Frequently asked questions"
        items={homeFaqs}
        seeAllHref="/faq/"
      />

      {/* 14. FINAL CTA BANNER. The button reads "Explore home visits", not
          "Book Now": it opens the hub, and nothing is booked by pressing it.
          Anyone ready to book now has the phone number beside it. */}
      <FinalCTASection
        title="Ready to bring care home?"
        lead="Hospital-grade care delivered by trusted professionals — browse the services or talk to our care team."
        cta={{ label: "Explore home visits", href: "/home-visit/" }}
        note="In a medical emergency, our team provides quick response support."
      />

      {/* 15. FOOTER — unchanged (About, Services, Partner, Careers, News &
          Media, city links). Patient Charter link already fixed to
          /about/patient-charter/. */}
    </>
  );
}