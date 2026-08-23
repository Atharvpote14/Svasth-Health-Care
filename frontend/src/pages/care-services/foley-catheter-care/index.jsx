import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "../shared";
import { Syringe, HeartHandshake, ShieldCheck, MapPin, Clock3 } from "lucide-react";

const pageData = {
  title: "Foley Catheter Insertion",
  description: "Foley catheter insertion ensures proper urinary management with secure placement.",
  icon: Syringe,
  bg: "ivory",
  localKeywords: ["Hyderabad", "Chennai", "Bangalore", "Delhi NCR", "Kolkata"],
  faqs: [
    "Why get nursing procedures done at home?",
    "Are consumables charged separately?",
  ],
  overview: "A thin, flexible tube called a Foley catheter is inserted into the bladder to drain urine. A tiny, inflated balloon holds the catheter in place. Urinary management, either short-term or long-term, is frequently accomplished with this treatment.",
  whoItsFor: [
    "Patients needing relief from urinary retention",
    "Healing after surgeries affecting the urinary tract",
    "Managing incontinence in patients with limited mobility",
    "Monitoring and measuring urine output for medical assessments",
  ],
  whatsIncluded: [
    "Secure, hygienic Foley catheter insertion by trained nurses",
    "A safe, hygienic, and compassionate approach prioritising patient comfort",
    "Catheter care guidance for the family",
    "Consumables at MRP, billed separately",
  ],
  howItWorks: [
    "Book the procedure and check availability at your doorstep",
    "Select your preferred date and slot",
    "A trained nurse performs the procedure at home",
    "Care instructions are shared",
    "Final confirmation is subject to availability",
  ],
};

function FoleyCatheterCarePage() {
  return <PageShell breadcrumbs={[{ label: "Procedures" }, { label: "Foley Catheter Insertion" }]}>
    <Hero eyebrow="Procedures" title={pageData.title} description={pageData.description} icon={pageData.icon} primary={["Enquire Now", "/care-services/foley-catheter-care/"]} />
    <Section id="overview" eyebrow="Procedure Details" title="Foley Catheter Insertion" lead={pageData.overview} tone={pageData.bg}>
      <FeatureGrid items={[{ icon: ShieldCheck, title: "Secure Placement", description: "Secure, hygienic catheter insertion by trained nurses." }, { icon: MapPin, title: "At Your Doorstep", description: "Receive the procedure in the comfort of your home." }, { icon: HeartHandshake, title: "Patient Comfort", description: "Compassionate approach prioritising patient comfort." }, { icon: Clock3, title: "Proper Positioning", description: "Correct catheter placement and balloon inflation." }]} />
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
    <FinalCTA title="Book Foley Catheter Insertion at home" description="Enquire about availability and let our team coordinate your home visit." href="/care-services/foley-catheter-care/" label="Enquire Now" />
  </PageShell>;
}

export default function Page() { return <FoleyCatheterCarePage />; }