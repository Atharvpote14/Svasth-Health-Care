import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "../shared";
import { Droplets, HeartHandshake, ShieldCheck, MapPin, Clock3 } from "lucide-react";

const pageData = {
  title: "IV Infusion at Home",
  description: "IV infusion with pre-inserted cannula — fluids, drugs, or nutrients delivered at home.",
  icon: Droplets,
  bg: "ivory",
  localKeywords: ["Hyderabad", "Chennai", "Bangalore", "Delhi NCR", "Kolkata"],
  faqs: [
    "Why get nursing procedures done at home?",
    "Are consumables charged separately?",
  ],
  overview: "IV infusion with a cannula already in place uses an intravenous line already inserted into the patient's vein to provide fluids, drugs, or nutrients. The procedure is speedier and less intrusive because the cannula is already installed and the needle doesn't need to be reinserted.",
  whoItsFor: [
    "Patients who need frequent or ongoing IV therapy",
  ],
  whatsIncluded: [
    "IV infusion with pre-inserted cannula",
    "Minimised discomfort — no needle reinsertion",
    "Reduced preparation time compared to fresh cannulation",
    "Consumables at MRP, billed separately",
  ],
  howItWorks: [
    "Book the procedure and check availability at your doorstep",
    "Select your preferred date and slot",
    "A trained nurse administers the infusion at home",
    "Monitoring continues through the infusion",
    "Final confirmation is subject to availability",
  ],
};

function IVInfusionAtHomePage() {
  return <PageShell breadcrumbs={[{ label: "Procedures" }, { label: "IV Infusion at Home" }]}>
    <Hero eyebrow="Procedures" title={pageData.title} description={pageData.description} icon={pageData.icon} primary={["Enquire Now", "/care-services/iv-infusion-at-home/"]} />
    <Section id="overview" eyebrow="Procedure Details" title="IV Infusion at Home" lead={pageData.overview} tone={pageData.bg}>
      <FeatureGrid items={[{ icon: ShieldCheck, title: "Pre-Inserted Cannula", description: "No needle reinsertion — minimises discomfort." }, { icon: MapPin, title: "At Your Doorstep", description: "Receive the procedure in the comfort of your home." }, { icon: HeartHandshake, title: "Trained Nurses", description: "Administered by Svasth's trained nursing staff." }, { icon: Clock3, title: "Quick Procedure", description: "Speedier than fresh cannulation." }]} />
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
    <FinalCTA title="Book IV Infusion at home" description="Enquire about availability and let our team coordinate your home visit." href="/care-services/iv-infusion-at-home/" label="Enquire Now" />
  </PageShell>;
}

export default function Page() { return <IVInfusionAtHomePage />; }