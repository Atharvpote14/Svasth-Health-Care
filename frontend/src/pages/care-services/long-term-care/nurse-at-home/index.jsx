import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "../../shared";
import { PAGE_DATA } from "../../careServicesData";
import { Stethoscope, UserRound, HeartHandshake, Hospital, ShieldCheck, Clock3 , MapPin } from "lucide-react";

const nurseData = PAGE_DATA.longTermCareNurse;

function NurseAtHomePage() {
  return <PageShell breadcrumbs={[{ label: "Long Term Care" }, { label: "Nurse at Home" }]}>
    <Hero eyebrow="Long Term Care" title={nurseData.title} tagline={nurseData.tagline} description={nurseData.description} icon={Stethoscope} primary={["Explore Services", "/care-services/long-term-care/"]} />
    <Section id="overview" eyebrow="Overview" title={nurseData.title} lead={nurseData.overview} tone="ivory">
      <div className="rounded-xl bg-white p-4 text-sm text-neutral-700 border border-black/5"><span className="font-semibold">Price: </span>{nurseData.priceFrom} — Available in {nurseData.localKeywords.join(", ")}</div>
    </Section>
    <Section id="services" eyebrow="Nurse at Home" title="Clinical nursing care at home" lead="Trusted care delivered at home" tone="white">
      <FeatureGrid items={[
        { icon: ShieldCheck, title: "Qualified Nurses", description: "Experienced and verified nursing professionals." },
        { icon: MapPin, title: "Doorstep Service", description: "We bring care to your home, eliminating travel needs." },
        { icon: HeartHandshake, title: "Patient-Centric Care", description: "Care plans tailored to individual needs and preferences." },
        { icon: Clock3, title: "Flexible Scheduling", description: "Convenient appointment slots to fit your routine." }
      ]} />
    </Section>
    <Section eyebrow="Who Is This For" title="Suitable for" tone="ivory">
      <div className="grid gap-3 sm:grid-cols-2">
        {nurseData.whoItsFor.map((item,i)=><div key={i} className="flex gap-3 rounded-xl bg-white p-4 border border-black/5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">{i+1}</span><span className="text-sm text-neutral-700 mt-1">{item}</span></div>)}
      </div>
    </Section>
    <Section eyebrow="What's Included" title="Service inclusions" tone="white">
      <ul className="grid gap-3 sm:grid-cols-2">
        {nurseData.whatsIncluded.map((item,i)=><li key={i} className="flex gap-3 rounded-xl bg-neutral-100 p-4 border border-black/5"><span className="text-primary mt-1">•</span><span className="text-sm text-neutral-700">{item}</span></li>)}
      </ul>
    </Section>
    <Section eyebrow="How It Works" title="Simple process" tone="ivory">
      <ol className="grid gap-4 md:grid-cols-2">
        {nurseData.howItWorks.map((step,i)=><li key={i} className="flex gap-4 rounded-xl bg-white p-5 border border-black/5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">{i+1}</span><span className="text-sm text-neutral-700 mt-1">{step}</span></li>)}
      </ol>
    </Section>
    <Section eyebrow="FAQs" title="Common questions" tone="white">
      <div className="grid gap-3 max-w-3xl">
        {nurseData.faqs.map((q,i)=><details key={i} className="rounded-xl border border-black/5 bg-neutral-100 p-4"><summary className="font-medium text-neutral-900">{q}</summary><p className="mt-2 text-sm text-neutral-600">Contact 1800 000 0000 for details.</p></details>)}
      </div>
    </Section>
    <FinalCTA title="Discuss care options for your loved one" description="Share your requirements and our care team can guide you to the right solution." href="/care-services/long-term-care/" label="Speak with a Care Expert" />
  </PageShell>;
}

export default function Page() { return <NurseAtHomePage />; }




