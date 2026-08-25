import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "../shared";
import { Wind, HeartHandshake, ShieldCheck, MapPin, Clock3 } from "lucide-react";

const pageData = {
  title: "Tracheostomy Care",
  description: "Skilled care for tracheostomy patients at home — tube care, suctioning, and family training.",
  icon: Wind,
  bg: "ivory",
  localKeywords: ["Hyderabad", "Chennai", "Bangalore", "Delhi NCR", "Kolkata"],
  faqs: [
    "What is tracheostomy care?",
    "How is quality of care ensured?",
  ],
  overview: "Tracheostomy care at home is provided by Svasth's trained nurses as part of skilled long-term care, supporting patients with airway management needs and training families on safe daily care.",
  whoItsFor: [
    "Patients with tracheostomy or ventilator-related care needs",
    "Families needing daily care guidance for a tracheostomy patient",
  ],
  whatsIncluded: [
    "Skilled nursing care for airway management",
    "Hygienic care following strict protocols",
    "Family training for daily care and safety",
    "Coordination with the care team for emergencies",
  ],
  howItWorks: [
    "Enquire about tracheostomy care",
    "Svasth assesses the patient's needs",
    "A trained nurse provides care at home",
    "Family is trained for daily management",
  ],
};

function TracheostomyCarePage() {
  return <PageShell breadcrumbs={[{ label: "Procedures" }, { label: "Tracheostomy Care" }]}>
    <Hero eyebrow="Procedures" title={pageData.title} description={pageData.description} icon={pageData.icon} primary={["Enquire Now", "/care-services/tracheostomy-care/"]} />
    <Section id="overview" eyebrow="Procedure Details" title="Tracheostomy Care" lead={pageData.overview} tone={pageData.bg}>
      <FeatureGrid items={[{ icon: ShieldCheck, title: "Airway Management", description: "Skilled nursing care for airway management and tube care." }, { icon: MapPin, title: "At Your Doorstep", description: "Receive the procedure in the comfort of your home." }, { icon: HeartHandshake, title: "Family Training", description: "Training families on safe daily care and safety protocols." }, { icon: Clock3, title: "24/7 Support", description: "Coordination with the care team for emergencies." }]} />
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
    <FinalCTA title="Book Tracheostomy Care at home" description="Enquire about availability and let our team coordinate your home visit." href="/care-services/tracheostomy-care/" label="Enquire Now" />
  </PageShell>;
}

export default function Page() { return <TracheostomyCarePage />; }