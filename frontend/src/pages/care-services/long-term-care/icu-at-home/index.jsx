import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "../../shared";
import { PAGE_DATA } from "../../careServicesData";
import { Clock3, ShieldCheck, HeartHandshake, Hospital, MapPin } from "lucide-react";

const icuData = PAGE_DATA.longTermCareICU;

function ICUAtHomePage() {
  return <PageShell breadcrumbs={[{ label: "Long Term Care" }, { label: "ICU at Home" }]}>
    <Hero eyebrow="Long Term Care" title={icuData.title} tagline={icuData.tagline} description={icuData.description} icon={Clock3} primary={["Enquire Now", "/care-services/long-term-care/"]} />
    <Section id="overview" eyebrow="Overview" title={icuData.title} lead={icuData.overview} tone="ivory">
      <div className="rounded-xl bg-white p-4 text-sm text-neutral-700 border border-black/5"><span className="font-semibold">Price: </span>{icuData.priceFrom} — Available in {icuData.localKeywords.join(", ")}</div>
    </Section>
    <Section id="services" eyebrow="ICU at Home" title="Critical care at home" lead="Hospital-grade setup at home" tone="white">
      <FeatureGrid items={[
        { icon: ShieldCheck, title: "Hospital-Grade Equipment", description: "Ventilators, monitors, and advanced life-support equipment." },
        { icon: HeartHandshake, title: "Trained Critical Care Staff", description: "Certified nurses and doctors in critical care management." },
        { icon: MapPin, title: "Home Environment", description: "Comfort of receiving care at home with loved ones." },
        { icon: Clock3, title: "24/7 Monitoring", description: "Round-the-clock patient monitoring and intervention." }
      ]} />
    </Section>
    <Section eyebrow="Who Is This For" title="Suitable for" tone="ivory">
      <div className="grid gap-3 sm:grid-cols-2">
        {icuData.whoItsFor.map((item,i)=><div key={i} className="flex gap-3 rounded-xl bg-white p-4 border border-black/5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">{i+1}</span><span className="text-sm text-neutral-700 mt-1">{item}</span></div>)}
      </div>
    </Section>
    <Section eyebrow="What's Included" title="Service inclusions" tone="white">
      <ul className="grid gap-3 sm:grid-cols-2">
        {icuData.whatsIncluded.map((item,i)=><li key={i} className="flex gap-3 rounded-xl bg-neutral-100 p-4 border border-black/5"><span className="text-primary mt-1">•</span><span className="text-sm text-neutral-700">{item}</span></li>)}
      </ul>
    </Section>
    <Section eyebrow="How It Works" title="How it works" tone="ivory">
      <ol className="grid gap-4 md:grid-cols-2">
        {icuData.howItWorks.map((step,i)=><li key={i} className="flex gap-4 rounded-xl bg-white p-5 border border-black/5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">{i+1}</span><span className="text-sm text-neutral-700 mt-1">{step}</span></li>)}
      </ol>
    </Section>
    <Section eyebrow="FAQs" title="Common questions" tone="white">
      <div className="grid gap-3 max-w-3xl">
        {icuData.faqs.map((q,i)=><details key={i} className="rounded-xl border border-black/5 bg-neutral-100 p-4"><summary className="font-medium text-neutral-900">{q}</summary><p className="mt-2 text-sm text-neutral-600">Contact 1800 000 0000 for details.</p></details>)}
      </div>
    </Section>
    <FinalCTA title="Get hospital-quality care at home" description="Enquire about ICU at Home setup and availability for your loved one." href="/care-services/long-term-care/" label="Speak with a Care Expert" />
  </PageShell>;
}

export default function Page() { return <ICUAtHomePage />; }




