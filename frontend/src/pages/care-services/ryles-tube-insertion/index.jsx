import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "../shared";
import { Syringe, HeartHandshake, ShieldCheck, MapPin, Clock3 } from "lucide-react";

const pageData = {
  title: "Ryle's Tube Insertion",
  description: "Ryle's tube insertion provides feeding, medication, and drainage via a nasal tube.",
  icon: Syringe,
  bg: "ivory",
  localKeywords: ["Hyderabad", "Chennai", "Bangalore", "Delhi NCR", "Kolkata"],
  faqs: [
    "Why get nursing procedures done at home?",
    "Are consumables charged separately?",
  ],
  overview: "A flexible tube is inserted into the stomach through the nose during Ryle's tube insertion, often referred to as nasogastric (NG) tube insertion. In patients who are unable to eat or drink normally, it is frequently used for feeding, drug administration, and stomach contents drainage.",
  whoItsFor: [
    "Patients who are unable to eat or drink normally",
    "Bedridden or elderly patients who would otherwise require hospital visits",
  ],
  whatsIncluded: [
    "Safe, precise tube insertion by Svasth's trained nurses with minimal discomfort",
    "Strict sterilisation protocols to prevent infections",
    "Guidance on appropriate feeding schedules and nutrition plans",
    "Regular checks to ensure the tube remains functional",
  ],
  howItWorks: [
    "Book the procedure and check availability at your doorstep",
    "Select your preferred date and slot",
    "A trained nurse performs the procedure at home",
    "Feeding and care guidance is shared with the family",
    "Final confirmation is subject to availability",
  ],
};

function RylesTubeInsertionPage() {
  return <PageShell breadcrumbs={[{ label: "Procedures" }, { label: "Ryle's Tube Insertion" }]}>
    <Hero eyebrow="Procedures" title={pageData.title} description={pageData.description} icon={pageData.icon} primary={["Enquire Now", "/care-services/ryles-tube-insertion/"]} />
    <Section id="overview" eyebrow="Procedure Details" title="Ryle's Tube Insertion" lead={pageData.overview} tone={pageData.bg}>
      <FeatureGrid items={[{ icon: ShieldCheck, title: "Sterile Procedure", description: "Strict sterilisation protocols to prevent infections." }, { icon: MapPin, title: "At Your Doorstep", description: "Receive the procedure in the comfort of your home." }, { icon: HeartHandshake, title: "Trained Nurses", description: "Performed by Svasth's trained nursing staff." }, { icon: Clock3, title: "Minimal Discomfort", description: "Precise tube insertion with minimal patient discomfort." }]} />
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
    <FinalCTA title="Book Ryle's Tube Insertion at home" description="Enquire about availability and let our team coordinate your home visit." href="/care-services/ryles-tube-insertion/" label="Enquire Now" />
  </PageShell>;
}

export default function Page() { return <RylesTubeInsertionPage />; }