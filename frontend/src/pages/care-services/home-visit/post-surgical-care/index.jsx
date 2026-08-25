import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "../../shared";
import { PAGE_DATA } from "../../careServicesData";
import { Bandage, HeartHandshake, Hospital, ShieldCheck, Clock3, MapPin } from "lucide-react";

const pscData = PAGE_DATA.homeVisitPostSurgical;
const priceLabel = typeof pscData.priceFrom === "number" ? `From ₹${pscData.priceFrom.toLocaleString("en-IN")}` : pscData.priceFrom;

function PostSurgicalCarePage() {
  return <PageShell breadcrumbs={[{ label: "Home Visit" }, { label: "Post-Surgical Care" }]}>
    <Hero eyebrow="Home Visit" title={pscData.title} description={pscData.description} icon={Bandage} primary={["Enquire Now", "/care-services/home-visit/"]} />
    <Section id="overview" eyebrow="Overview" title={pscData.title} lead={pscData.overview} tone="ivory">
      <div className="rounded-xl bg-white p-4 text-sm text-neutral-700 border border-black/5"><span className="font-semibold">Price: </span>{priceLabel} — Available in {pscData.localKeywords.join(", ")}</div>
    </Section>
    <Section id="services" eyebrow="Post-Surgical Care" title="Post-surgical recovery at home" lead="Skilled recovery support delivered at home" tone="white">
      <FeatureGrid items={[
        { icon: ShieldCheck, title: "Skilled Nursing Care", description: "Registered nurses for post-surgical care and monitoring." },
        { icon: MapPin, title: "Doorstep Service", description: "We bring care to your home, eliminating travel needs." },
        { icon: HeartHandshake, title: "Personalised Recovery", description: "Care plans tailored to your surgery type and recovery needs." },
        { icon: Clock3, title: "Monitored Progress", description: "Regular recovery monitoring and family updates." }
      ]} />
    </Section>
    <Section eyebrow="Who Is This For" title="Suitable for" tone="ivory">
      <div className="grid gap-3 sm:grid-cols-2">
        {pscData.whoItsFor.map((item,i)=><div key={i} className="flex gap-3 rounded-xl bg-white p-4 border border-black/5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">{i+1}</span><span className="text-sm text-neutral-700 mt-1">{item}</span></div>)}
      </div>
    </Section>
    <Section eyebrow="What's Included" title="Service inclusions" tone="white">
      <ul className="grid gap-3 sm:grid-cols-2">
        {pscData.whatsIncluded.map((item,i)=><li key={i} className="flex gap-3 rounded-xl bg-neutral-100 p-4 border border-black/5"><span className="text-primary mt-1">•</span><span className="text-sm text-neutral-700">{item}</span></li>)}
      </ul>
    </Section>
    <Section eyebrow="How It Works" title="Simple process" tone="ivory">
      <ol className="grid gap-4 md:grid-cols-2">
        {pscData.howItWorks.map((step,i)=><li key={i} className="flex gap-4 rounded-xl bg-white p-5 border border-black/5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">{i+1}</span><span className="text-sm text-neutral-700 mt-1">{step}</span></li>)}
      </ol>
    </Section>
    <Section eyebrow="FAQs" title="Common questions" tone="white">
      <div className="grid gap-3 max-w-3xl">
        {pscData.faqs.map((q,i)=><details key={i} className="rounded-xl border border-black/5 bg-neutral-100 p-4"><summary className="font-medium text-neutral-900">{q}</summary><p className="mt-2 text-sm text-neutral-600">Contact 1800 000 0000 for details.</p></details>)}
      </div>
    </Section>
    <FinalCTA title="Arrange post-surgical care at home" description="Enquire about nursing visits and recovery support for your loved one." href="/care-services/home-visit/" label="Enquire Now" />
  </PageShell>;
}

export default function Page() { return <PostSurgicalCarePage />; }
