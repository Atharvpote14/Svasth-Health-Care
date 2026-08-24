import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "../shared";
import { PAGE_DATA } from "../careServicesData";
import { Activity, BedDouble, HeartHandshake, Hospital, LaptopMinimal, MapPin, Pill, Stethoscope, UserRound, Clock3, ShieldCheck } from "lucide-react";

const ltcServices = [
  ["Nurse at Home", "Clinical nursing care and medical support at home.", Stethoscope, "/care-services/long-term-care/nurse-at-home/"],
  ["Attendant/Caregiver at Home", "Daily living assistance and personal care support.", UserRound, "/care-services/long-term-care/attendant-at-home/"],
  ["ICU at Home", "Critical care setup with ventilators and monitoring at home.", Clock3, "/care-services/long-term-care/icu-at-home/"],
  ["Elder Care", "Comprehensive care solutions for senior citizens at home.", HeartHandshake, "/care-services/long-term-care/elder-care/"],
];

const ltcItems = ltcServices.map(([title, description, icon, href]) => ({ title, description, icon, href }));

function LongTermCarePage() {
  const nurseData = PAGE_DATA.longTermCareNurse;
  const attendantData = PAGE_DATA.longTermCareAttendant;
  const icuData = PAGE_DATA.longTermCareICU;
  const elderData = PAGE_DATA.longTermCareElder;

  return <PageShell breadcrumbs={[{ label: "Long Term Care" }]}>
    <Hero eyebrow="Long Term Care" title="Comprehensive Home-Based Long Term Care" description="Professional medical and non-medical care services delivered at your convenience." primary={["Explore Our Services", "/care-services/long-term-care/"]} icon={Hospital} />
    <Section id="services" eyebrow="Our Long Term Care Services" title="Choose the right care solution" lead={nurseData.overview} tone={nurseData.bg}>
      <FilteredGrid items={ltcItems} initialCount={4} placeholder="Select a service" />
    </Section>
    <Section eyebrow="Why Choose Svasth Homecare" title="Trusted care at home" tone="ivory">
      <FeatureGrid items={[
        { icon: ShieldCheck, title: "Clinical Excellence", description: "Qualified nurses and healthcare professionals with extensive experience." },
        { icon: MapPin, title: "Doorstep Service", description: "We bring care to your home, eliminating travel needs." },
        { icon: HeartHandshake, title: "Patient-Centric Approach", description: "Care plans tailored to individual needs and preferences." },
        { icon: Clock3, title: "Flexible Scheduling", description: "Convenient appointment slots to fit your routine." }
      ]} />
    </Section>
    <FinalCTA title="Discuss care options for your loved one" description="Share your requirements and our care team can guide you to the right solution." href="/care-services/long-term-care/" label="Speak with a Care Expert" />
  </PageShell>;
}

export default function LongTermCareIndex() { return <LongTermCarePage />; }


