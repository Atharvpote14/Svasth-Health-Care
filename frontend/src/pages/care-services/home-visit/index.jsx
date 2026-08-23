import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "../shared";
import { Activity, HeartHandshake, Hospital, MapPin, Stethoscope, Clock3, ShieldCheck, Bandage } from "lucide-react";

const hvServices = [
  ["Doctor at Home", "Expert medical care at your doorstep, ensuring convenience, comfort, and peace of mind.", Stethoscope, "/care-services/home-visit/doctor-at-home/"],
  ["Physiotherapy at Home", "Apollo physiotherapists deliver expert care at home to enhance mobility and improve quality of life.", Activity, "/care-services/home-visit/physiotherapy-at-home/"],
  ["Post-Surgical Care", "Structured recovery support after surgery — nursing visits, wound care, and rehabilitation at home.", Bandage, "/care-services/home-visit/post-surgical-care/"],
];

const hvItems = hvServices.map(([title, description, icon, href]) => ({ title, description, icon, href }));

function HomeVisitPage() {
  return <PageShell breadcrumbs={[{ label: "Home Visit" }]}>
    <Hero eyebrow="Home Visit" title="Expert Healthcare, Right at Your Doorstep" description="Convenient, personalised medical care delivered in the comfort of your home." primary={["Book a Service", "/care-services/home-visit/"]} icon={Hospital} />
    <Section id="services" eyebrow="Home Visit" title="Choose the right care solution" lead="Apollo Homecare's home visit services are designed to provide professional healthcare in the comfort of your home." tone="ivory">
      <FilteredGrid items={hvItems} initialCount={3} placeholder="Select a service" />
    </Section>
    <Section eyebrow="Why Choose Apollo Homecare" title="Trusted care at home" tone="white">
      <FeatureGrid items={[{ icon: ShieldCheck, title: "Clinical Excellence", description: "Qualified healthcare professionals with extensive experience." }, { icon: MapPin, title: "Doorstep Service", description: "We bring care to your home, eliminating travel needs." }, { icon: HeartHandshake, title: "Patient-Centric Approach", description: "Care plans tailored to individual needs and preferences." }, { icon: Clock3, title: "Flexible Scheduling", description: "Convenient appointment slots to fit your routine." }]} />
    </Section>
    <FinalCTA title="Find the right service for your needs" description="Share your requirements and our care team can guide you to the right solution." href="/care-services/home-visit/" label="Speak with a Care Expert" />
  </PageShell>;
}

export default function HomeVisitIndex() { return <HomeVisitPage />; }
