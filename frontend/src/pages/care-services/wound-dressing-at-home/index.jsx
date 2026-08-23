import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "../shared";
import { Bandage, HeartHandshake, ShieldCheck, MapPin, Clock3 } from "lucide-react";

const pageData = {
  title: "Wound Dressing at Home",
  description: "Wound dressing promotes healing and prevents infection with sterile materials.",
  icon: Bandage,
  bg: "ivory",
  localKeywords: ["Hyderabad", "Chennai", "Bangalore", "Delhi NCR", "Kolkata"],
  faqs: [
    "Why get nursing procedures done at home?",
    "Are consumables charged separately?",
  ],
  overview: "The process of cleansing, shielding, and covering a wound to encourage healing and ward off infection is known as wound dressing. It entails covering the wound with sterile materials like bandages, gauze, or sophisticated dressings, depending on the size, depth, and state of the wound.",
  whoItsFor: [
    "Cuts, surgical incisions, burns, ulcers, or chronic wounds",
    "Post-surgical patients needing regular dressing changes",
  ],
  whatsIncluded: [
    "Sterile wound cleansing and dressing by trained nurses",
    "Dressings matched to wound type and condition",
    "Infection prevention protocols",
    "Consumables at MRP, billed separately",
  ],
  howItWorks: [
    "Enquire about wound dressing",
    "A trained nurse confirms the visit",
    "The wound is cleansed and dressed at home",
    "Next dressing is scheduled as needed",
  ],
};

function WoundDressingAtHomePage() {
  return <PageShell breadcrumbs={[{ label: "Procedures" }, { label: "Wound Dressing at Home" }]}>
    <Hero eyebrow="Procedures" title={pageData.title} description={pageData.description} icon={pageData.icon} primary={["Enquire Now", "/care-services/wound-dressing-at-home/"]} />
    <Section id="overview" eyebrow="Procedure Details" title="Wound Dressing at Home" lead={pageData.overview} tone={pageData.bg}>
      <FeatureGrid items={[{ icon: ShieldCheck, title: "Sterile Dressing", description: "Sterile wound cleansing and dressing by trained nurses." }, { icon: MapPin, title: "At Your Doorstep", description: "Receive the procedure in the comfort of your home." }, { icon: HeartHandshake, title: "Patient Comfort", description: "Compassionate care prioritising patient comfort." }, { icon: Clock3, title: "Infection Prevention", description: "Protocols to prevent wound infections." }]} />
    </Section>
    <Section id="who-for" eyebrow="Who Is This For" title="Suitable for" tone={pageData.bg}>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pageData.whoItsFor.map((item, i) => (
          <div key={i} className="rounded-2xl border border-primary/10 bg-white p-5">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 text-primary">{i + 1}</span>
              <div>
                <h4 className="font-semibold text-neutral-900">{item}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
    <Section id="included" eyebrow="What's Included" title="Service inclusions" tone={pageData.bg}>
      <ul className="list-disc list-inside space-y-2 text-neutral-600">
        {pageData.whatsIncluded.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Section>
    <Section id="how-it-works" eyebrow="How It Works" title="Simple process" tone="white">
      <ol className="list-decimal list-inside space-y-4 text-neutral-600">
        {pageData.howItWorks.map((step, i) => (
          <li key={i}>
            <p className="font-medium text-neutral-900">{step}</p>
          </li>
        ))}
      </ol>
    </Section>
    <FinalCTA title="Book Wound Dressing at home" description="Enquire about availability and let our team coordinate your home visit." href="/care-services/wound-dressing-at-home/" label="Enquire Now" />
  </PageShell>;
}

export default function Page() { return <WoundDressingAtHomePage />; }