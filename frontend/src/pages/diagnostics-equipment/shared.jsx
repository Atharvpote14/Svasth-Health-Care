import Head from "next/head";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, HeartPulse, MapPin, ShieldCheck, Stethoscope } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Breadcrumb from "../../components/Breadcrumb";
import Card from "../../components/Card";
import Badge from "../../components/Badge";
import SectionTitle from "../../components/SectionTitle";
import BookingCTA from "../../components/care-services/domain/BookingCTA";
import FAQSection from "../../components/care-services/sections/FAQSection";
import FinalCTASection from "../../components/care-services/sections/FinalCTASection";
import HowItWorksSection from "../../components/care-services/sections/HowItWorksSection";
import CityCoverageSection from "../../components/care-services/sections/CityCoverageSection";
import { FOOTER_COLUMNS, FOOTER_COPYRIGHT, NAV_LINKS } from "../../lib/site";

const DEFAULT_STEPS = [
  { title: "Choose your service", description: "Select the service that fits your care requirement and review what is included." },
  { title: "Share your details", description: "Tell the care team the basic patient and location details needed to arrange the service." },
  { title: "Care team confirms", description: "The CareNest team coordinates availability, timing and the next steps with you." },
  { title: "Care at home", description: "The service is delivered at home with the agreed follow-up and support." },
];

const DEFAULT_TRUST = [
  { icon: BadgeCheck, label: "Trained & verified professionals" },
  { icon: ShieldCheck, label: "Home-based care" },
  { icon: HeartPulse, label: "Patient-focused support" },
];

export const PAGE_DATA = {
  medicalEquipment: {
    title: "Medical Equipment at Home",
    eyebrow: "Medical Equipment",
    lead: "Access essential medical equipment for home-based care with support for choosing, arranging and using the right equipment.",
    path: "/medical-equipment/",
    primary: { label: "Enquire Now", href: "/medical-equipment/buy/" },
    secondary: { label: "Explore Rental", href: "/medical-equipment/rent/" },
    intro: "Find equipment options for recovery, monitoring, mobility and ongoing home care. Choose whether you want to buy or rent and speak with the care team for availability and suitability.",
    cards: [
      { title: "Rent Medical Equipment", text: "Explore rental options for equipment needed for a temporary recovery or care period.", href: "/medical-equipment/rent/", badge: "Rent" },
      { title: "Buy Medical Equipment", text: "Explore equipment purchase options for longer-term home care requirements.", href: "/medical-equipment/buy/", badge: "Buy" },
    ],
    highlights: ["Equipment options for home care", "Buy or rent pathways", "Availability and delivery coordination", "Support from the care team"],
    faqs: [
      { question: "Can I rent medical equipment?", answer: "Yes. The rental pathway is designed for equipment required for a temporary or defined care period. Availability is confirmed by the care team." },
      { question: "Can I buy medical equipment?", answer: "Yes. Use the Buy Now pathway to enquire about equipment purchase options and availability." },
      { question: "How do I know which equipment I need?", answer: "Equipment should be selected according to the patient's care requirements. Contact the care team if you need help identifying the appropriate category." },
    ],
  },
  rentEquipment: {
    title: "Rent Medical Equipment",
    eyebrow: "Medical Equipment · Rent",
    lead: "Arrange medical equipment for a temporary home-care requirement without committing to a purchase.",
    path: "/medical-equipment/rent/",
    primary: { label: "Request Rental", href: "/medical-equipment/rent/" },
    secondary: { label: "View Buy Options", href: "/medical-equipment/buy/" },
    intro: "Rental can be useful when equipment is needed during recovery, rehabilitation or a defined period of home care. Availability, delivery and support are confirmed before the arrangement is finalised.",
    cards: [
      { title: "Tell us what you need", text: "Share the equipment category, location and expected duration so the team can check the appropriate option.", href: "/medical-equipment/rent/", badge: "Step 1" },
      { title: "Confirm availability", text: "The care team coordinates the available rental option, delivery details and next steps.", href: "/medical-equipment/rent/", badge: "Step 2" },
    ],
    highlights: ["Suitable for temporary care needs", "Availability confirmation", "Delivery coordination", "Support during setup"],
    faqs: [
      { question: "How long can equipment be rented?", answer: "Rental duration depends on the equipment and availability. The care team confirms the available rental period for your requirement." },
      { question: "Is delivery available?", answer: "Delivery arrangements depend on the equipment and service location and are confirmed during the enquiry." },
    ],
  },
  buyEquipment: {
    title: "Buy Medical Equipment",
    eyebrow: "Medical Equipment · Buy",
    lead: "Enquire about medical equipment for longer-term home care, recovery and monitoring needs.",
    path: "/medical-equipment/buy/",
    primary: { label: "Enquire to Buy", href: "/medical-equipment/buy/" },
    secondary: { label: "Compare Rental", href: "/medical-equipment/rent/" },
    intro: "For equipment that will be needed for an extended period, the purchase pathway lets you enquire about suitable equipment categories, availability and delivery arrangements.",
    cards: [
      { title: "Monitoring Equipment", text: "Equipment categories intended to support monitoring during home care can be discussed with the care team.", href: "/medical-equipment/buy/", badge: "Monitoring" },
      { title: "Mobility & Care Equipment", text: "Explore home-care equipment categories and discuss the appropriate option for your requirements.", href: "/medical-equipment/buy/", badge: "Home Care" },
    ],
    highlights: ["Longer-term equipment pathway", "Availability confirmation", "Delivery coordination", "Care-team guidance"],
    faqs: [
      { question: "Can the team help me choose equipment?", answer: "The care team can help you understand the available equipment categories and coordinate the enquiry. Clinical suitability should be confirmed by the appropriate healthcare professional." },
      { question: "Can I choose rental instead?", answer: "Yes. If you only need equipment for a defined period, you can use the rental pathway instead." },
    ],
  },
  homeDiagnostics: {
    title: "Home Diagnostics",
    eyebrow: "Home Diagnostics",
    lead: "Convenient diagnostic testing and sample collection arranged at home, helping reduce unnecessary travel for routine healthcare needs.",
    path: "/home-diagnostics/",
    primary: { label: "Book a Test", href: "/home-diagnostics/blood-test-at-home/" },
    secondary: { label: "View Checkup", href: "/home-diagnostics/full-body-checkup-at-home/" },
    intro: "Choose from at-home diagnostic pathways and coordinate a convenient visit. The available service, preparation requirements and timing depend on the selected test or package.",
    cards: [
      { title: "Blood Test at Home", text: "Arrange sample collection at home for eligible blood investigations and testing requirements.", href: "/home-diagnostics/blood-test-at-home/", badge: "Diagnostics" },
      { title: "Full Body Checkup at Home", text: "Explore a coordinated health-check pathway with tests selected according to the available package.", href: "/home-diagnostics/full-body-checkup-at-home/", badge: "Checkup" },
    ],
    highlights: ["Home sample collection", "Convenient scheduling", "Test-specific preparation guidance", "Results pathway coordinated by the service"],
    faqs: [
      { question: "Can diagnostic samples be collected at home?", answer: "Yes, eligible tests can be arranged through the home diagnostics service. The exact collection process depends on the selected test." },
      { question: "Do all tests require the same preparation?", answer: "No. Preparation varies by investigation. Follow the instructions provided for the specific test or package." },
      { question: "Can I book a full body checkup at home?", answer: "Yes. Use the Full Body Checkup at Home pathway to review the available package and arrange the service." },
    ],
  },
  bloodTest: {
    title: "Blood Test at Home",
    eyebrow: "Home Diagnostics · Blood Tests",
    lead: "Arrange convenient blood sample collection at home for eligible laboratory investigations.",
    path: "/home-diagnostics/blood-test-at-home/",
    primary: { label: "Book Blood Test", href: "/home-diagnostics/blood-test-at-home/" },
    secondary: { label: "View Full Checkup", href: "/home-diagnostics/full-body-checkup-at-home/" },
    intro: "Home collection can make routine blood testing more convenient. Select the required investigation, check any preparation instructions and arrange a suitable collection time.",
    cards: [
      { title: "Before Collection", text: "Check the preparation instructions for your selected investigation before the collection visit.", href: "/home-diagnostics/blood-test-at-home/", badge: "Prepare" },
      { title: "Home Collection", text: "A scheduled collection visit is arranged according to service availability in your location.", href: "/home-diagnostics/blood-test-at-home/", badge: "Collect" },
      { title: "Results", text: "The service team coordinates the applicable laboratory reporting pathway after the sample is processed.", href: "/home-diagnostics/blood-test-at-home/", badge: "Report" },
    ],
    highlights: ["Home sample collection", "Convenient scheduling", "Test-specific preparation", "Laboratory reporting pathway"],
    faqs: [
      { question: "Do I need to fast for a blood test?", answer: "Some investigations require fasting and others do not. Follow the preparation instructions for the specific test you are booking." },
      { question: "Can multiple blood tests be collected in one visit?", answer: "This depends on the investigations requested and the collection requirements. Confirm the test list when booking." },
    ],
  },
  fullBodyCheckup: {
    title: "Full Body Checkup at Home",
    eyebrow: "Home Diagnostics · Health Checkup",
    lead: "Arrange a coordinated health-check pathway from the comfort of home, subject to package availability in your location.",
    path: "/home-diagnostics/full-body-checkup-at-home/",
    primary: { label: "Enquire About Checkup", href: "/home-diagnostics/full-body-checkup-at-home/" },
    secondary: { label: "Book Blood Test", href: "/home-diagnostics/blood-test-at-home/" },
    intro: "A home checkup pathway can combine multiple investigations into a convenient scheduled experience. The exact tests and preparation depend on the package selected.",
    cards: [
      { title: "Package Selection", text: "Review the available health-check package and the investigations included before booking.", href: "/home-diagnostics/full-body-checkup-at-home/", badge: "Choose" },
      { title: "At-Home Collection", text: "Coordinate the required sample collection or other eligible home-based components at a convenient time.", href: "/home-diagnostics/full-body-checkup-at-home/", badge: "At Home" },
    ],
    highlights: ["Coordinated health-check pathway", "Home-based collection", "Package-specific preparation", "Convenient scheduling"],
    faqs: [
      { question: "What tests are included?", answer: "The included investigations depend on the package available at the time of booking. Review the package details before confirming." },
      { question: "Is fasting required?", answer: "Preparation requirements depend on the investigations included in the selected package. Follow the package instructions." },
    ],
  },
  adultVaccination: {
    title: "Adult Vaccination at Home",
    eyebrow: "Adult Vaccination",
    lead: "Arrange eligible adult vaccinations at home with a convenient scheduling and care-team coordination process.",
    path: "/adult-vaccination/",
    primary: { label: "Enquire About Vaccination", href: "/adult-vaccination/flu-vaccine/" },
    secondary: { label: "Pneumonia Vaccine", href: "/adult-vaccination/pneumonia-vaccine/" },
    intro: "Explore adult vaccination pathways and coordinate an eligible vaccination visit. Vaccine availability, eligibility and administration requirements should be confirmed before booking.",
    cards: [
      { title: "Flu Vaccine", text: "Explore the seasonal influenza vaccination pathway and arrange an eligible home visit.", href: "/adult-vaccination/flu-vaccine/", badge: "Flu" },
      { title: "Pneumonia Vaccine", text: "Explore the pneumococcal vaccination pathway and confirm eligibility with the care team.", href: "/adult-vaccination/pneumonia-vaccine/", badge: "Pneumonia" },
    ],
    highlights: ["Home vaccination pathway", "Eligibility confirmation", "Scheduling support", "Clinical administration"],
    faqs: [
      { question: "Can adult vaccination be arranged at home?", answer: "Eligible adult vaccinations can be arranged through the home vaccination pathway, subject to vaccine availability and clinical requirements." },
      { question: "How do I know which vaccine I need?", answer: "Vaccine choice depends on age, history, risk factors and clinical guidance. Speak with a qualified healthcare professional for individual advice." },
    ],
  },
  fluVaccine: {
    title: "Flu Vaccine at Home",
    eyebrow: "Adult Vaccination · Flu",
    lead: "Arrange an eligible influenza vaccination visit at home with scheduling coordinated by the care team.",
    path: "/adult-vaccination/flu-vaccine/",
    primary: { label: "Enquire About Flu Vaccine", href: "/adult-vaccination/flu-vaccine/" },
    secondary: { label: "Other Adult Vaccines", href: "/adult-vaccination/" },
    intro: "The influenza vaccination pathway is intended to make eligible vaccination more convenient. Vaccine availability and individual suitability should be confirmed before administration.",
    cards: [
      { title: "Eligibility Review", text: "Share the relevant details needed by the care team to confirm whether the home vaccination pathway is appropriate.", href: "/adult-vaccination/flu-vaccine/", badge: "Review" },
      { title: "Home Visit", text: "Coordinate an eligible vaccination visit at a convenient time, subject to availability.", href: "/adult-vaccination/flu-vaccine/", badge: "Visit" },
    ],
    highlights: ["Convenient home visit", "Eligibility confirmation", "Scheduling support", "Post-vaccination guidance"],
    faqs: [
      { question: "Can the flu vaccine be given at home?", answer: "An eligible flu vaccination can be arranged through the home vaccination pathway, subject to availability and clinical suitability." },
      { question: "Is the flu vaccine suitable for everyone?", answer: "Vaccination suitability varies. Discuss your medical history and any previous vaccine reactions with the healthcare professional before vaccination." },
    ],
  },
  pneumoniaVaccine: {
    title: "Pneumonia Vaccine at Home",
    eyebrow: "Adult Vaccination · Pneumococcal",
    lead: "Explore a convenient home vaccination pathway for eligible pneumococcal vaccination needs.",
    path: "/adult-vaccination/pneumonia-vaccine/",
    primary: { label: "Enquire About Vaccine", href: "/adult-vaccination/pneumonia-vaccine/" },
    secondary: { label: "View Adult Vaccination", href: "/adult-vaccination/" },
    intro: "Pneumococcal vaccination suitability depends on individual circumstances and current clinical recommendations. The care team can coordinate the enquiry and eligible home visit.",
    cards: [
      { title: "Eligibility & History", text: "Discuss age, medical history and previous vaccination information with the healthcare professional.", href: "/adult-vaccination/pneumonia-vaccine/", badge: "Review" },
      { title: "Home Administration", text: "Arrange an eligible vaccination visit at home once availability and suitability are confirmed.", href: "/adult-vaccination/pneumonia-vaccine/", badge: "Home Visit" },
    ],
    highlights: ["Home vaccination pathway", "Clinical suitability check", "Scheduling support", "Post-vaccination guidance"],
    faqs: [
      { question: "Who should get a pneumococcal vaccine?", answer: "Recommendations depend on age, health conditions and vaccination history. A qualified healthcare professional should confirm individual eligibility." },
      { question: "Can it be administered at home?", answer: "An eligible pneumococcal vaccination can be coordinated as a home visit subject to availability and clinical requirements." },
    ],
  },
  insuranceTPA: {
    title: "Insurance & TPA Tie-ups",
    eyebrow: "Support & Coverage",
    lead: "Understand how insurance and third-party administrator coordination may support eligible home healthcare services.",
    path: "/insurance-tpa-tieups/",
    primary: { label: "Talk to Care Team", href: "/insurance-tpa-tieups/" },
    secondary: { label: "View Services", href: "/medical-equipment/" },
    intro: "Coverage depends on your policy, provider, service and approval requirements. The care team can help explain the documentation and coordination steps relevant to your enquiry.",
    cards: [
      { title: "Coverage Check", text: "Share your insurer or TPA details so the team can explain the applicable coordination process.", href: "/insurance-tpa-tieups/", badge: "Step 1" },
      { title: "Documentation", text: "Keep the policy and service-related documents requested for verification or pre-authorisation where applicable.", href: "/insurance-tpa-tieups/", badge: "Step 2" },
      { title: "Care Coordination", text: "The team helps coordinate the next steps based on the service and approval status.", href: "/insurance-tpa-tieups/", badge: "Step 3" },
    ],
    highlights: ["Insurance coordination", "TPA support", "Documentation guidance", "Service-specific approval process"],
    faqs: [
      { question: "Is every homecare service covered by insurance?", answer: "No. Coverage depends on the policy, insurer, service, medical necessity and approval terms. Confirm the details for your specific case." },
      { question: "Will CareNest guarantee reimbursement?", answer: "No. Reimbursement or cashless approval is determined by the insurer or TPA according to the applicable policy and approval process." },
    ],
  },
  nebulization: {
    title: "Nebulization at Home",
    eyebrow: "Home Procedure",
    lead: "Arrange eligible nebulization support at home when a healthcare professional has recommended the procedure.",
    path: "/procedures/nebulization-at-home/",
    primary: { label: "Enquire About Procedure", href: "/procedures/nebulization-at-home/" },
    secondary: { label: "Home Diagnostics", href: "/home-diagnostics/" },
    intro: "Nebulization should be performed according to a healthcare professional's instructions, including the prescribed medication and treatment plan. The homecare team can coordinate eligible support.",
    cards: [
      { title: "Clinical Instruction", text: "The procedure should follow the prescribed treatment and instructions provided by the appropriate healthcare professional.", href: "/procedures/nebulization-at-home/", badge: "Clinical" },
      { title: "Home Support", text: "Arrange an eligible home visit for assistance with the procedure according to the care plan.", href: "/procedures/nebulization-at-home/", badge: "At Home" },
    ],
    highlights: ["Home procedure support", "Care-plan based service", "Professional assistance", "Follow-up coordination"],
    faqs: [
      { question: "Can nebulization be done at home?", answer: "Yes, when it is appropriate and prescribed or recommended as part of the patient's care plan, eligible home support can be arranged." },
      { question: "Does the homecare team prescribe the medicine?", answer: "The service should follow the medication and instructions provided by the treating healthcare professional. It should not replace a medical consultation." },
    ],
  },
  injection: {
    title: "Injection Administration at Home",
    eyebrow: "Home Procedure",
    lead: "Arrange eligible injection administration at home according to a valid prescription or clinical care plan.",
    path: "/procedures/injection-at-home/",
    primary: { label: "Enquire About Injection", href: "/procedures/injection-at-home/" },
    secondary: { label: "View Vaccination", href: "/adult-vaccination/" },
    intro: "Injection administration at home can be arranged when the medication and route are appropriate for home-based administration and a valid prescription or clinical instruction is available.",
    cards: [
      { title: "Prescription Check", text: "Provide the medication and prescription details required for the care team to confirm the service request.", href: "/procedures/injection-at-home/", badge: "Prepare" },
      { title: "Professional Administration", text: "An eligible healthcare professional administers the injection according to the documented care plan.", href: "/procedures/injection-at-home/", badge: "Care" },
    ],
    highlights: ["Prescription-led service", "Professional administration", "Home visit convenience", "Care-plan documentation"],
    faqs: [
      { question: "Do I need a prescription?", answer: "Medication administration should be based on a valid prescription or clinical instruction where required. The care team confirms the documentation needed for the service." },
      { question: "Can every injection be administered at home?", answer: "No. Eligibility depends on the medication, route, clinical requirements and homecare suitability." },
    ],
  },
  vitalMonitoring: {
    title: "Vital Monitoring at Home",
    eyebrow: "Home Procedure",
    lead: "Arrange home-based monitoring support for eligible care plans that require regular observation of vital measurements.",
    path: "/procedures/vital-monitoring-at-home/",
    primary: { label: "Enquire About Monitoring", href: "/procedures/vital-monitoring-at-home/" },
    secondary: { label: "Medical Equipment", href: "/medical-equipment/" },
    intro: "Vital monitoring can support an established care plan by tracking relevant measurements at home. The exact measurements and frequency depend on the patient's clinical requirements.",
    cards: [
      { title: "Monitoring Plan", text: "Confirm which vital measurements are required and how frequently they should be recorded according to the care plan.", href: "/procedures/vital-monitoring-at-home/", badge: "Plan" },
      { title: "Home Monitoring", text: "Arrange eligible professional support for measurements and documentation during the scheduled home visit.", href: "/procedures/vital-monitoring-at-home/", badge: "Monitor" },
    ],
    highlights: ["Care-plan based monitoring", "Home visit support", "Measurement documentation", "Escalation according to clinical guidance"],
    faqs: [
      { question: "What vitals can be monitored at home?", answer: "The measurements depend on the patient's care plan and available equipment. Common measurements may include blood pressure, pulse, temperature and oxygen saturation." },
      { question: "Does monitoring replace a doctor's consultation?", answer: "No. Monitoring supports an established care plan and does not replace medical assessment or emergency care when needed." },
    ],
  },
  testimonials: {
    title: "Testimonials & Case Studies",
    eyebrow: "Patient Experiences",
    lead: "A place for patient and family experiences, service feedback and approved care stories across CareNest.",
    path: "/testimonials/",
    primary: { label: "Explore Services", href: "/home-diagnostics/" },
    secondary: { label: "Contact Care Team", href: "/testimonials/" },
    intro: "This hub is designed to help visitors understand the type of homecare experience the service aims to provide. Published stories should use approved, consented content and should not imply guaranteed outcomes.",
    cards: [
      { title: "Home Diagnostics", text: "Stories about convenience, coordination and the experience of arranging eligible diagnostic services at home.", href: "/home-diagnostics/", badge: "Diagnostics" },
      { title: "Adult Vaccination", text: "Experiences with arranging eligible vaccination visits and coordinating home-based care.", href: "/adult-vaccination/", badge: "Vaccination" },
      { title: "Medical Equipment", text: "Experiences with equipment enquiries, rental or purchase coordination and home-care support.", href: "/medical-equipment/", badge: "Equipment" },
    ],
    highlights: ["Approved patient stories", "Real service experiences", "Family and caregiver perspectives", "Clear distinction between experience and clinical advice"],
    faqs: [
      { question: "Are testimonials medical advice?", answer: "No. Testimonials describe individual experiences and should not be treated as medical advice or a guarantee of outcomes." },
      { question: "Can I share my experience?", answer: "You can contact the care team to ask about the process for submitting feedback or an approved patient story." },
    ],
  },
};

export function PersonBPage({ data }) {
  return (
    <>
      <Head>
        <title>{data.title} | CareNest</title>
        <meta name="description" content={data.lead} />
      </Head>
      <header className="header">
        <div className="header-container">
          <a href="/" className="header-logo font-display text-xl font-semibold text-neutral-900">CareNest</a>
          <Navbar items={NAV_LINKS} />
        </div>
      </header>

      <main id="main-content">
        <div className="mx-auto max-w-6xl px-6 pt-5">
          <Breadcrumb items={[{ label: "Home", path: "/" }, { label: data.eyebrow, path: data.path }, { label: data.title }]} />
        </div>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-10 md:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <div>
                <Badge variant="default">{data.eyebrow}</Badge>
                <h1 className="mt-4 max-w-4xl font-display text-[40px] font-bold leading-tight text-neutral-900 md:text-[52px]">{data.title}</h1>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-600">{data.lead}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <BookingCTA label={data.primary.label} href={data.primary.href} size="lg" />
                  <BookingCTA label={data.secondary.label} href={data.secondary.href} variant="secondary" size="lg" />
                </div>
                <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-neutral-600">
                  {DEFAULT_TRUST.map(({ icon: Icon, label }) => <span key={label} className="flex items-center gap-2"><Icon size={17} className="text-secondary" />{label}</span>)}
                </div>
              </div>
              <Card className="border border-neutral-200 bg-neutral-100 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm"><Stethoscope size={24} /></div>
                <h2 className="mt-5 font-display text-2xl font-semibold text-neutral-900">Care at your doorstep</h2>
                <p className="mt-3 text-neutral-600">{data.intro}</p>
                <Link href={data.primary.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">Get started <ArrowRight size={17} /></Link>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-neutral-100 py-10 md:py-[70px]">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle title="What you can expect" subtitle={data.eyebrow} align="left" />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {data.highlights.map((item) => <Card key={item} className="p-5"><CheckCircle2 size={22} className="text-primary" /><p className="mt-4 font-semibold text-neutral-900">{item}</p></Card>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-10 md:py-[70px]">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle title="Explore this service" subtitle="Available pathways" align="left" />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.cards.map((item) => (
                <Card key={item.title} className="flex h-full flex-col p-6">
                  <Badge variant="default">{item.badge}</Badge>
                  <h3 className="mt-4 font-display text-xl font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-neutral-600">{item.text}</p>
                  <Link href={item.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">Learn more <ArrowRight size={17} /></Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <HowItWorksSection title="How it works" lead="A straightforward path from enquiry to coordinated home care." steps={DEFAULT_STEPS} />
        <CityCoverageSection />
        <FAQSection title="Frequently asked questions" items={data.faqs} />
        <FinalCTASection title="Ready to get started?" lead="Tell the CareNest team what you need and we will help you with the next step." cta={data.primary} />
      </main>

      <Footer columns={FOOTER_COLUMNS} copyright={FOOTER_COPYRIGHT} />
    </>
  );
}
