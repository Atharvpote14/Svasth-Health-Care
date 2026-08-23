import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "../../shared";
import { PAGE_DATA } from "../../careServicesData";
import { Users, HeartHandshake, ShieldCheck, Clock3, HeartPulse, MapPin } from "lucide-react";

const elderData = PAGE_DATA.longTermCareElder;

function ElderCarePage() {
  return <PageShell breadcrumbs={[{ label: "Long Term Care" }, { label: "Elder Care" }]}>
    <Hero eyebrow="Long Term Care" title={elderData.title} description={elderData.description} icon={Users} primary={["Explore Services", "/care-services/long-term-care/"]} />
    <Section id="overview" eyebrow="Overview" title={elderData.title} lead={elderData.overview} tone="ivory">
      <div className="rounded-xl bg-white p-4 text-sm text-neutral-700 border border-black/5">Available in {elderData.localKeywords.join(", ")} — {elderData.priceFrom}</div>
    </Section>
    <Section id="services" eyebrow="Elder Care" title="Senior care subscription plans" lead="Choose Basic, Advanced Medical (Recommended), or Premium — cost-effective vs ad-hoc services." tone="white">
      <FeatureGrid items={[
        { icon: ShieldCheck, title: "24/7 Emergency Support", description: "Round-the-clock care and emergency response coordination." },
        { icon: HeartHandshake, title: "Personalised Care Plans", description: "Tailored routines and exercise programs for individual needs." },
        { icon: MapPin, title: "Doorstep Service", description: "Regular visits without travel requirements." },
        { icon: Clock3, title: "Comprehensive Monitoring", description: "Regular health checkups and vital monitoring." }
      ]} />
    </Section>
    <Section eyebrow="Who Is This For" title="Suitable for" tone="ivory">
      <div className="grid gap-3 sm:grid-cols-2">
        {elderData.whoItsFor.map((item,i)=><div key={i} className="flex gap-3 rounded-xl bg-white p-4 border border-black/5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">{i+1}</span><span className="text-sm text-neutral-700 mt-1">{item}</span></div>)}
      </div>
    </Section>
    <Section eyebrow="What's Included" title="Service inclusions" tone="white">
      <ul className="grid gap-3 sm:grid-cols-2">
        {elderData.whatsIncluded.map((item,i)=><li key={i} className="flex gap-3 rounded-xl bg-neutral-100 p-4 border border-black/5"><span className="text-primary mt-1">•</span><span className="text-sm text-neutral-700">{item}</span></li>)}
      </ul>
    </Section>
    <Section eyebrow="How It Works" title="How it works" tone="ivory">
      <ol className="grid gap-4 md:grid-cols-2">
        {elderData.howItWorks.map((step,i)=><li key={i} className="flex gap-4 rounded-xl bg-white p-5 border border-black/5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">{i+1}</span><span className="text-sm text-neutral-700 mt-1">{step}</span></li>)}
      </ol>
    </Section>
    <Section eyebrow="FAQs" title="Common questions" tone="white">
      <div className="grid gap-3 max-w-3xl">
        {elderData.faqs.map((q,i)=><details key={i} className="rounded-xl border border-black/5 bg-neutral-100 p-4"><summary className="font-medium text-neutral-900">{q}</summary><p className="mt-2 text-sm text-neutral-600">Contact 1800 108 8586 for details.</p></details>)}
      </div>
    </Section>
    <FinalCTA title="Subscribe to Elder Care services" description="Enquire about the appropriate subscription plan for your loved one." href="/care-services/long-term-care/" label="Speak with a Care Expert" />
  </PageShell>;
}

export default function Page() { return <ElderCarePage />; }
