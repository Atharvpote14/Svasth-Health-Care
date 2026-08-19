import {
  Award,
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  Users,
  Star,
} from "lucide-react";
import CategoryHero from "../components/care-services/sections/CategoryHero";
import ServiceGridSection from "../components/care-services/sections/ServiceGridSection";
import HowItWorksSection from "../components/care-services/sections/HowItWorksSection";
import SafetySection from "../components/care-services/sections/SafetySection";
import FinalCTASection from "../components/care-services/sections/FinalCTASection";
import { getHomePage } from "../lib/data";

export const metadata = {
  title: "Apollo Homecare | #1 Home Care Services in India",
  description:
    "Expert healthcare delivered to your doorstep — long term care, home visits, and nursing procedures by trained, verified professionals. Call 1800 108 8586.",
};

const HOW_IT_WORKS_STEPS = [
  {
    title: "Initial assessment",
    description:
      "A detailed evaluation of the patient's health and lifestyle guides the right care.",
  },
  {
    title: "Care plan design",
    description:
      "A customised care plan is built around individual needs and preferences.",
  },
  {
    title: "Service delivery",
    description:
      "Regular visits by caregivers, nurses, or therapists happen as per the plan.",
  },
  {
    title: "Monitoring & feedback",
    description:
      "Periodic reviews adjust the care plan as needs change over time.",
  },
];

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
    icon: Award,
    title: "Quality accreditations",
    description:
      "Accreditations that ensure your safety and comfort at home.",
  },
  {
    icon: ShieldCheck,
    title: "Compassionate, reliable care",
    description:
      "Empathetic and ethical care you can trust for unwavering support.",
  },
];

const TRUST_STATS = [
  { icon: Users, value: "1Mn+", label: "Patients served a year" },
  { icon: BadgeCheck, value: "2K+", label: "Trained and verified caregivers" },
  { icon: Award, value: "QAI", label: "Badge of honor" },
  { icon: Star, value: "4.9", label: "Rating on Google" },
];

export default async function HomePage() {
  const data = await getHomePage();

  return (
    <>
      <CategoryHero
        tone="primary"
        eyebrow="Apollo Homecare"
        title="Expert Home Visit Services Delivered to Your Doorstep"
        lead="Schedule professional healthcare visits at home with our experienced medical team. Quality care in the comfort of your own space."
        primaryCta={{ label: "Book Now", href: "/home-visit/" }}
        secondaryCta={{ label: "Explore Long Term Care", href: "/long-term-care/" }}
        trustItems={[
          { icon: BadgeCheck, label: "Trained & verified caregivers" },
          { icon: ShieldCheck, label: "Hospital-grade care at home" },
          { icon: HeartHandshake, label: "Compassionate, reliable support" },
        ]}
      />

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <stat.icon size={24} strokeWidth={1.5} aria-hidden="true" className="mb-1 text-primary-700" />
              <p className="font-display text-3xl text-neutral-900 tabular-nums">{stat.value}</p>
              <p className="text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceGridSection
        eyebrow="Long Term Care"
        title="Compassionate care you can trust at home"
        lead="Expert care for your loved ones, combining medical excellence with the comfort of home."
        items={data.popularServices}
      />

      <HowItWorksSection
        title="How care at home works"
        steps={HOW_IT_WORKS_STEPS}
      />

      <SafetySection
        eyebrow="Why choose us"
        title="Hospital-grade care, brought home"
        lead="Apollo Homecare brings hospital-grade care to your doorstep with professionally trained, background-verified caregivers you can trust."
        items={SAFETY_ITEMS}
      />

      {data.locations.length > 0 && (
        <section className="border-t border-neutral-200 bg-white py-10">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-center text-sm font-medium uppercase tracking-[0.08em] text-primary-700">
              Available in 11 cities
            </p>
            <p className="mt-2 text-center text-lg text-neutral-600">
              {data.locations.map((location) => location.name).join(" · ")}
            </p>
          </div>
        </section>
      )}

      <FinalCTASection
        title="Compassionate Care You Can Trust at Home"
        lead="Expert care for your loved ones — combining medical excellence with the comfort of home."
        cta={{ label: "Enquire Now", href: "/long-term-care/" }}
        note="In a medical emergency, our team provides quick response support."
      />
    </>
  );
}