import { PageShell, Hero, Section, FAQ, FinalCTA } from "../shared";
import { ShieldCheck, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Can nursing procedures be done at home?",
    a: "Yes. Apollo Homecare lists nursing procedures such as Ryle's tube insertion, Foley catheter care, IV infusion, and wound dressing designed for home-based service by trained nurses.",
  },
  {
    q: "Which procedures are available at home?",
    a: "The current service catalogue includes Ryle's tube insertion, Foley catheter insertion, IV infusion at home, wound dressing at home, and tracheostomy care.",
  },
  {
    q: "Is home sample collection available for diagnostics?",
    a: "Yes. Diagnostic tests, advanced diagnostics and comprehensive health checkups are designed for home-based service with sample collection at home.",
  },
  {
    q: "What is the process to book a home visit?",
    a: "Choose a service, check availability at your doorstep, select your preferred date and slot, and confirm. Final confirmation is subject to availability.",
  },
  {
    q: "Which cities do you operate in?",
    a: "Hyderabad, Kolkata, Delhi NCR, Chennai, Bangalore, Pune, Madurai, Mysore, Indore, Mumbai, and Guwahati. Coordinate with Person C for city-specific service availability.",
  },
  {
    q: "How are professionals verified?",
    a: "Yes. Apollo ensures that all attendants and nurses are well-trained, background-verified, and experienced in handling patients with various medical needs.",
  },
  {
    q: "How is the quality of care ensured?",
    a: "Apollo follows strict quality control measures, professional clinical care, and sterilisation and safety protocols across all services.",
  },
  {
    q: "Are consumables charged separately?",
    a: "Yes. Consumables will be charged as per MRP, separately from the procedure or service fee.",
  },
];

function FAQHelpCenterPage() {
  return <PageShell breadcrumbs={[{ label: "FAQ / Help Center" }]}>
    <Hero eyebrow="FAQ / Help Center" title="Frequently Asked Questions" description="Find answers to common questions about our home healthcare services." primary={["Back to Services", "/care-services/"]} icon={ShieldCheck} />
    <Section id="faqs" eyebrow="Frequently Asked Questions" title="Common questions about our services" tone="ivory">
      <div className="mx-auto max-w-4xl space-y-3">{faqs.map((item, i) => (
        <details key={i} className="group rounded-2xl border border-primary/15 bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-semibold text-neutral-900">
            <span>{item.q}</span><ChevronDown size={18} className="shrink-0 text-primary transition group-open:rotate-180" />
          </summary>
          <p className="px-5 pb-5 text-sm leading-7 text-neutral-600">{item.a}</p>
        </details>
      ))}</div>
    </Section>
    <Section eyebrow="Coordinate with Us" title="Get city-specific information" tone="ivory">
      <div className="mx-auto max-w-xl px-6">
        <p className="mb-4 text-neutral-600">Apollo Homecare services are available in the following cities. Please coordinate with our team for city-specific service availability and scheduling:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4">
          {["Hyderabad", "Kolkata", "Delhi NCR", "Chennai", "Bangalore", "Pune"].map((city) => (
            <div key={city} className="rounded-2xl border border-primary/10 bg-white p-4 text-center">
              <div className="text-primary text-lg font-medium">{city}</div>
              <span className="mt-2 block text-sm text-neutral-500">Contact us for availability</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-neutral-600">For detailed city-specific service availability, please contact our care team or coordinate with Person C as mentioned in the sitemap documentation.</p>
      </div>
    </Section>
    <FinalCTA title="Need further assistance?" description="Tell us what you need and the care team can help you select the appropriate home healthcare option." />
  </PageShell>;
}

export default function Page() { return <FAQHelpCenterPage />; }