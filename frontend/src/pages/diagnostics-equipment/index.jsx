import { useRouter } from "next/router";
import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "./shared";
import { Activity, BadgeCheck, BedDouble, ClipboardCheck, Clock3, Droplets, HeartHandshake, HeartPulse, Hospital, LaptopMinimal, MapPin, Microscope, Pill, ScanLine, ShieldCheck, Syringe, Thermometer, UserRound, Wind, Wheelchair } from "lucide-react";

const equipment = [
  ["Beds", "Cots & Mattress", BedDouble, "Medical beds and support surfaces for home care."],
  ["Nimbus Mattress Bubble Type", "Cots & Mattress", BedDouble, "Pressure-relief support for patients requiring extended bed rest."],
  ["Nimbus Mattress", "Cots & Mattress", BedDouble, "Specialised mattress support for home-based recovery."],
  ["Oxygen Concentrator", "Oxygen Concentrator", Wind, "Supplemental oxygen equipment for home use."],
  ["Bi-PAP / CPAP", "BiPAP/CPAP", Wind, "Respiratory support devices for prescribed home therapy."],
  ["Bi-PAP Face Mask", "Masks", ShieldCheck, "Comfort-focused respiratory masks and accessories."],
  ["Nebulizer", "Respiratory", Wind, "Nebulization support for prescribed respiratory care."],
  ["Monitors", "Monitoring", Activity, "Home monitoring equipment for clinical observations."],
  ["Suction Apparatus", "Suction", Droplets, "Suction support equipment for appropriate home care needs."],
  ["Syringe Pumps", "Pumps", Syringe, "Controlled medication and fluid delivery support."],
  ["Infusion Pump", "Pumps", Droplets, "Controlled infusion equipment for prescribed therapy."],
  ["Wheel Chairs", "Wheel Chair", Wheelchair, "Mobility support for home and assisted movement."],
  ["DVT Pump", "DVT Pump", Activity, "Sequential compression support used under clinical guidance."],
  ["Ventilator", "Ventilator For Sales & Rentals", Wind, "Home ventilatory support equipment for eligible patients."],
];

const equipmentItems = equipment.map(([title, category, icon, description]) => ({ title, category, icon, description, href: "/medical-equipment/" }));

const diagnosticTests = [
  ["Diabetic Packages", "Health Checkups", HeartPulse, "At-home packages supporting diabetes monitoring."],
  ["Basic Master Health Checkup", "Health Checkups", ClipboardCheck, "Comprehensive preventive health screening."],
  ["Lipid Profile Screening", "Blood Tests", Activity, "Screening that evaluates key blood lipid levels."],
  ["Thyroid Screening", "Blood Tests", Thermometer, "Convenient thyroid screening with home sample collection."],
  ["Preventive Health Checkup – Male", "Health Checkups", UserRound, "Preventive screening designed for men's health."],
  ["Preventive Health Checkup – Female", "Health Checkups", UserRound, "Preventive screening designed for women's health."],
  ["Sr. Citizen Health Checkup – Male", "Health Checkups", UserRound, "Preventive health assessment for senior men."],
  ["Sr. Citizen Health Checkup – Female", "Health Checkups", UserRound, "Preventive health assessment for senior women."],
  ["Healthy Heart", "Health Checkups", HeartPulse, "Heart-focused screening for proactive health management."],
  ["Premium Whole Body Health Checkup – Male", "Health Checkups", Microscope, "Detailed whole-body health assessment."],
  ["Premium Whole Body Health Checkup – Female", "Health Checkups", Microscope, "Detailed whole-body health assessment."],
  ["Liver Function Tests", "Blood Tests", Activity, "At-home testing for liver function markers."],
  ["Kidney Function Test", "Blood Tests", Activity, "At-home testing for kidney function markers."],
  ["Thyroid Function Test", "Blood Tests", Thermometer, "Laboratory testing of thyroid function markers."],
  ["Cardiac Markers", "Advanced Diagnostics", HeartPulse, "Diagnostic markers supporting cardiac assessment."],
  ["Arterial Blood Gases", "Advanced Diagnostics", Droplets, "ABG collection for clinically indicated testing."],
  ["Serum Electrolytes", "Blood Tests", Droplets, "Testing for key electrolyte levels."],
  ["Sleep Study", "Advanced Diagnostics", Activity, "At-home sleep study using prescribed monitoring equipment."],
  ["Ambulatory Blood Pressure Monitoring", "Advanced Diagnostics", Activity, "24-hour blood pressure monitoring at home."],
  ["Holter Monitoring Patch", "Advanced Diagnostics", HeartPulse, "Continuous heart rhythm monitoring at home."],
  ["X-Ray at Home", "Advanced Diagnostics", ScanLine, "Home diagnostic imaging where available and clinically appropriate."],
  ["Urinalysis", "Diagnostic Tests", Droplets, "Convenient at-home urine testing."],
  ["ECG at Home", "Advanced Diagnostics", HeartPulse, "At-home ECG service delivered by trained professionals."],
];
const diagnosticItems = diagnosticTests.map(([title, category, icon, description]) => ({ title, category, icon, description, href: "/home-diagnostics/" }));

const vaccines = [
  ["Typhoid Vaccine", "Typhoid", Syringe, "At-home typhoid vaccination with administration support."],
  ["Flu Vaccine at Home – 2026", "Influenza", Syringe, "Convenient at-home influenza vaccination."],
  ["HPV Vaccine", "HPV", ShieldCheck, "At-home HPV vaccination with professional administration."],
  ["Meningococcal Vaccine", "Meningococcal", ShieldCheck, "Protection against meningococcal disease."],
  ["Pneumococcal Vaccine", "Pneumococcal", ShieldCheck, "At-home pneumococcal vaccination for eligible adults."],
  ["Shingles Vaccine", "Shingles", ShieldCheck, "Convenient vaccination against shingles."],
  ["Pneumococcal Vaccination – PCV20", "Pneumococcal", ShieldCheck, "PREVENAR 20 at-home vaccination option for adults."],
  ["Td / Tdap", "Routine Adult Vaccination", Syringe, "Tetanus and diphtheria vaccination options as advised."],
  ["Hepatitis A & B", "Routine Adult Vaccination", Syringe, "Adult hepatitis vaccination options based on suitability."],
  ["Varicella", "Routine Adult Vaccination", Syringe, "Chickenpox vaccination for eligible adults."],
];
const vaccineItems = vaccines.map(([title, category, icon, description]) => ({ title, category, icon, description, href: "/adult-vaccination/" }));

const bloodTests = diagnosticItems.filter((item) => item.category === "Blood Tests" || item.category === "Diagnostic Tests");
const checkups = diagnosticItems.filter((item) => item.category === "Health Checkups");

function MedicalEquipmentPage({ mode = "all" }) {
  const rent = mode === "rent";
  const buy = mode === "buy";
  return <PageShell breadcrumbs={rent ? [{ label: "Medical Equipment", href: "/medical-equipment/" }, { label: "Rent Now" }] : buy ? [{ label: "Medical Equipment", href: "/medical-equipment/" }, { label: "Buy Now" }] : [{ label: "Medical Equipment" }]}>
    <Hero eyebrow="Medical Equipment" title={rent ? "Medical Equipment for Rent at Home" : buy ? "Buy Medical Equipment for Home Care" : "Medical Equipment for Sales & Rentals"} description="High-quality medical equipment for home-based care, with support for choosing the right equipment and arranging delivery." primary={[rent ? "Explore rental equipment" : buy ? "Explore equipment" : "Explore equipment", "#equipment"]} secondary={["Request expert help", "/medical-equipment/"]} icon={Hospital} />
    <Section id="equipment" eyebrow="Quick Link" title="Browse medical equipment" lead="Apollo Homecare's medical-equipment catalogue includes respiratory, monitoring, mobility and home-care equipment." tone="ivory">
      <FilteredGrid items={mode === "all" ? equipmentItems : equipmentItems.map((item) => ({ ...item, badge: rent ? "Enquire for rental" : "Enquire to buy" }))} initialCount={14} placeholder="Search equipment" />
    </Section>
    <Section eyebrow="Why Apollo Homecare" title="Equipment support beyond the product" lead="The live Apollo catalogue combines product discovery with an expert-help route for patients and families who need guidance." >
      <FeatureGrid items={[{ icon: ShieldCheck, title: "Expert guidance", description: "Get help selecting equipment suited to the care requirement." }, { icon: Hospital, title: "Home-care focused", description: "Equipment is presented for practical use in a home-care setting." }, { icon: Clock3, title: "Convenient coordination", description: "Request support for availability, delivery and next steps." }, { icon: HeartHandshake, title: "Patient-first support", description: "A care-focused team helps you navigate equipment needs." }]} />
    </Section>
    <FinalCTA title="Let our expert help you choose" description="Share your requirement and the care team can guide you on the right equipment and next steps." href="/medical-equipment/" label="Request expert help" />
  </PageShell>;
}

function HomeDiagnosticsPage() { return <PageShell breadcrumbs={[{ label: "Home Diagnostics" }]}>
  <Hero eyebrow="Home Diagnostics" title="Home Diagnostics Services" description="Accurate and convenient diagnostic tests, advanced diagnostics and comprehensive health checkups brought to your doorstep." primary={["Book a diagnostic service", "#diagnostics"]} secondary={["Full body checkup", "/home-diagnostics/full-body-checkup-at-home/"]} icon={Microscope} />
  <Section id="diagnostics" eyebrow="Our diagnostic categories" title="Choose the right diagnostic service" lead="The live Apollo Homecare diagnostics page is organised into Diagnostic Tests, Advanced Diagnostics and Comprehensive Health Checkups." tone="ivory"><div className="grid gap-4 md:grid-cols-3"><Card icon={Droplets} title="Diagnostic Tests" description="Routine tests and sample collection at home." href="/home-diagnostics/blood-test-at-home/" /><Card icon={Activity} title="Advanced Diagnostics" description="ECG, Holter, ABPM, sleep study and other advanced services." href="/home-diagnostics/" /><Card icon={ClipboardCheck} title="Comprehensive Health Checkups" description="Preventive and whole-body health checkup packages." href="/home-diagnostics/full-body-checkup-at-home/" /></div></Section>
  <Section eyebrow="Diagnostic Services Provided by Apollo" title="Tests and checkups at home"><FilteredGrid items={diagnosticItems} initialCount={21} placeholder="Search diagnostic services" /></Section>
  <Section eyebrow="Why Apollo Homecare" title="What makes the diagnostic experience different" tone="ivory"><FeatureGrid items={[{ icon: Microscope, title: "Advanced diagnostic centre", description: "Apollo combines home sample collection with advanced diagnostic capability." }, { icon: ShieldCheck, title: "Hygiene and security", description: "Safety, sanitation and careful sample handling are prioritised." }, { icon: MapPin, title: "Easy accessibility", description: "Doorstep sample collection reduces travel and waiting." }, { icon: LaptopMinimal, title: "Digital reports", description: "The service is designed around convenient report access and follow-up." }]} /></Section>
  <Steps items={[{ title: "Choose a test", description: "Select the diagnostic test, advanced service or checkup you need." }, { title: "Book the visit", description: "Share your details and preferred appointment information." }, { title: "Sample collection", description: "A trained professional visits your home for the required service." }, { title: "Get your report", description: "Receive results and use them with your healthcare professional." }]} />
  <FAQ items={[{ q: "Can diagnostic tests be done at home?", a: "Yes. Apollo Homecare lists routine tests, advanced diagnostics and health checkups designed for home-based service." }, { q: "Which tests are available?", a: "The current service catalogue includes blood tests, thyroid screening, ECG, ABPM, Holter monitoring, sleep study, health checkups and more." }, { q: "Is home sample collection available?", a: "The Home Diagnostics service is built around scheduled sample collection at the patient's preferred location." }]} />
  <FinalCTA title="Need help choosing a diagnostic service?" description="Tell us what you need and the care team can help you select the appropriate home diagnostic option." />
</PageShell>; }

function BloodTestPage() { return <PageShell breadcrumbs={[{ label: "Home Diagnostics", href: "/home-diagnostics/" }, { label: "Blood Test at Home" }]}>
  <Hero eyebrow="Diagnostic Tests" title="Blood Tests at Home" description="Convenient blood sample collection at home for routine screening, preventive care and clinically indicated monitoring." primary={["Enquire Now", "/home-diagnostics/blood-test-at-home/"]} secondary={["View all diagnostics", "/home-diagnostics/"]} icon={Droplets} />
  <Section eyebrow="Blood Test Services" title="Common tests available through home diagnostics" tone="ivory"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{bloodTests.map((item) => <ProductCard key={item.title} {...item} href="/home-diagnostics/blood-test-at-home/" />)}</div></Section>
  <Section eyebrow="Why choose home sample collection" title="A simpler way to stay on top of your health"><FeatureGrid items={[{ icon: MapPin, title: "Doorstep collection", description: "Avoid unnecessary travel by arranging collection at home." }, { icon: ShieldCheck, title: "Safe handling", description: "Sample collection is performed by trained healthcare professionals." }, { icon: Clock3, title: "Convenient scheduling", description: "Choose a suitable time for the home visit." }, { icon: HeartHandshake, title: "Support when needed", description: "Use the care team for guidance around the service." }]} /></Section>
  <FinalCTA title="Book a blood test at home" description="Choose a convenient appointment and let the care team coordinate the next steps." href="/home-diagnostics/blood-test-at-home/" />
</PageShell>; }

function FullBodyCheckupPage() { return <PageShell breadcrumbs={[{ label: "Home Diagnostics", href: "/home-diagnostics/" }, { label: "Full Body Checkup at Home" }]}>
  <Hero eyebrow="Comprehensive Health Checkups" title="Full Body Checkup at Home" description="A comprehensive health assessment designed for proactive health management, with testing organised around the convenience of home-based care." primary={["Enquire Now", "/home-diagnostics/full-body-checkup-at-home/"]} secondary={["View diagnostic services", "/home-diagnostics/"]} icon={ClipboardCheck} />
  <Section eyebrow="Health Checkup Options" title="Comprehensive screening options" tone="ivory"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{checkups.map((item) => <ProductCard key={item.title} {...item} href="/home-diagnostics/full-body-checkup-at-home/" />)}</div></Section>
  <Section eyebrow="Premium Whole Body Health Checkup" title="A detailed assessment for proactive health management"><div className="grid gap-4 md:grid-cols-2"><Card icon={HeartPulse} title="Multi-organ health assessment" description="Screening can cover major areas such as heart, liver and kidney health along with metabolic markers." /><Card icon={Activity} title="Lifestyle disease detection" description="Health checkups can support early identification of common lifestyle-related risks." /><Card icon={Droplets} title="Nutritional and metabolic health" description="Comprehensive testing can include relevant nutritional, metabolic and cardiovascular markers." /><Card icon={ShieldCheck} title="Early risk identification" description="A broader health assessment can help identify areas that may need professional follow-up." /></div></Section>
  <FAQ items={[{ q: "What is a full body checkup?", a: "It is a broader diagnostic package that evaluates multiple aspects of health rather than focusing on a single test." }, { q: "Can the checkup be done at home?", a: "Apollo Homecare offers home-based diagnostic services and health checkup packages with sample collection at home." }, { q: "Which package should I choose?", a: "Package suitability depends on age, sex, health goals and clinical requirements; professional guidance is recommended." }]} />
  <FinalCTA title="Plan your health checkup at home" description="Enquire about the appropriate comprehensive checkup package for your needs." href="/home-diagnostics/full-body-checkup-at-home/" />
</PageShell>; }

function AdultVaccinationPage() { return <PageShell breadcrumbs={[{ label: "Adult Vaccination" }]}>
  <Hero eyebrow="Adult Vaccination" title="Vaccination at Home" description="Protect yourself from preventable diseases with convenient adult vaccination services delivered at home by trained healthcare professionals." primary={["Explore vaccines", "#vaccines"]} secondary={["Flu vaccine", "/adult-vaccination/flu-vaccine/"]} icon={Syringe} />
  <Section id="vaccines" eyebrow="Vaccinations at Home" title="Adult vaccines available through home service" lead="The current Apollo Homecare catalogue includes influenza, pneumococcal, HPV, shingles, typhoid, meningococcal and other adult vaccination options." tone="ivory"><FilteredGrid items={vaccineItems} initialCount={10} placeholder="Search vaccines" /></Section>
  <Section eyebrow="Why vaccination matters" title="Preventive care that fits your routine"><FeatureGrid items={[{ icon: ShieldCheck, title: "Preventive healthcare", description: "Vaccination supports ongoing adult wellness and disease prevention." }, { icon: HeartHandshake, title: "Comfort at home", description: "Receive vaccination in a familiar setting without a clinic wait." }, { icon: Thermometer, title: "Safety protocols", description: "Vaccines are handled and administered following appropriate safety standards." }, { icon: BadgeCheck, title: "Professional administration", description: "Vaccinations are administered by trained healthcare professionals." }]} /></Section>
  <Steps items={[{ title: "Select a vaccine", description: "Browse the available adult vaccination options." }, { title: "Schedule a visit", description: "Choose your preferred appointment details." }, { title: "Home administration", description: "A trained professional visits your home to administer the vaccine." }, { title: "Post-vaccination guidance", description: "Receive guidance and support after the service." }]} />
  <FinalCTA title="Stay protected without leaving home" description="Enquire about adult vaccination and the vaccine that may be appropriate for you." href="/adult-vaccination/" />
</PageShell>; }

function VaccinePage({ type }) { const flu = type === "flu"; return <PageShell breadcrumbs={[{ label: "Adult Vaccination", href: "/adult-vaccination/" }, { label: flu ? "Flu Vaccine" : "Pneumococcal Vaccine" }]}>
  <Hero eyebrow="Adult Vaccination" title={flu ? "Flu Vaccine at Home – 2026" : "Pneumococcal Vaccine"} description={flu ? "Influenza, including strains such as H1N1 and H3N2, can significantly affect older adults and people with medical conditions. Get convenient at-home vaccination." : "Pneumococcal disease can lead to serious infections such as pneumonia and meningitis. Protect yourself with a convenient at-home vaccination service."} primary={["Enquire Now", flu ? "/adult-vaccination/flu-vaccine/" : "/adult-vaccination/pneumonia-vaccine/"]} secondary={["View all vaccines", "/adult-vaccination/"]} icon={Syringe} />
  <Section eyebrow="About the vaccine" title="Professional vaccination at your doorstep" tone="ivory"><div className="grid gap-4 md:grid-cols-3"><Card icon={Syringe} title="At-home administration" description="Receive the vaccination at your home at a scheduled appointment." /><Card icon={ShieldCheck} title="Proper handling" description="Vaccines are handled and administered using appropriate safety practices." /><Card icon={HeartHandshake} title="Post-service guidance" description="Receive guidance after vaccination and support for the next steps." /></div></Section>
  <Section eyebrow="Key benefits" title="Designed around convenience and safety"><FeatureGrid items={[{ icon: MapPin, title: "No clinic travel", description: "A home visit reduces unnecessary travel and waiting." }, { icon: Clock3, title: "Flexible scheduling", description: "Choose an appointment time that works for you." }, { icon: BadgeCheck, title: "Trained professionals", description: "Vaccination is administered by qualified healthcare professionals." }, { icon: ShieldCheck, title: "Safety-focused", description: "Service delivery follows appropriate hygiene and vaccination protocols." }]} /></Section>
  <FAQ items={[{ q: "Who should get this vaccine?", a: "Vaccine suitability depends on age, medical history, previous vaccination and clinical guidance. Consult a healthcare professional for personalised advice." }, { q: "Can I get the vaccine at home?", a: "Yes. Apollo Homecare offers adult vaccination services at home, subject to service availability." }, { q: "Is the vaccine price fixed?", a: "Pricing and availability can vary by vaccine, city and current catalogue. Confirm the final details while booking." }]} />
  <FinalCTA title="Book your vaccination at home" description="Enquire about availability and let the team coordinate your home visit." href={flu ? "/adult-vaccination/flu-vaccine/" : "/adult-vaccination/pneumonia-vaccine/"} />
</PageShell>; }

function InsurancePage() { return <PageShell breadcrumbs={[{ label: "Insurance & TPA Tie-ups" }]}>
  <Hero eyebrow="Insurance & TPA" title="Insurance & TPA Tie-ups" description="Understand how Apollo Homecare supports patients and families through insurance and third-party administrator processes for eligible homecare services." primary={["Enquire Now", "/insurance-tpa-tieups/"]} icon={ShieldCheck} />
  <Section eyebrow="Support" title="A simpler path through healthcare coordination" tone="ivory"><FeatureGrid items={[{ icon: ClipboardCheck, title: "Service documentation", description: "Get guidance on the information required for service coordination." }, { icon: ShieldCheck, title: "Eligibility support", description: "Confirm applicable coverage and requirements with your insurer or TPA." }, { icon: UserRound, title: "Patient assistance", description: "A care team can help explain the next steps in the process." }, { icon: HeartHandshake, title: "Care continuity", description: "Keep the focus on care while administrative requirements are coordinated." }]} /></Section>
  <Section eyebrow="How it works" title="From enquiry to service"><div className="grid gap-4 md:grid-cols-4">{["Share your requirement", "Confirm insurer / TPA details", "Review eligibility and documents", "Coordinate the home service"].map((title, i) => <Card key={title} title={title} description={i === 0 ? "Tell the team what homecare service you need." : i === 1 ? "Provide the relevant insurance or TPA information." : i === 2 ? "Review what is covered and what documentation is needed." : "Proceed with the eligible homecare service."} icon={i === 0 ? UserRound : i === 1 ? ShieldCheck : i === 2 ? ClipboardCheck : HeartHandshake} />)}</div></Section>
  <FinalCTA title="Need help with insurance or TPA coordination?" description="Share your service requirement and the team can guide you through the next steps." href="/insurance-tpa-tieups/" />
</PageShell>; }

function ProcedurePage({ kind }) { const config = { nebulization: ["Nebulization at Home", "Home nebulization support for prescribed respiratory care.", Wind], injection: ["Injection Administration at Home", "Convenient administration of prescribed injections at home by trained professionals.", Syringe], vitals: ["Vital Monitoring at Home", "Home monitoring of essential clinical observations for appropriate care plans.", Activity] }[kind]; return <PageShell breadcrumbs={[{ label: "Home Diagnostics", href: "/home-diagnostics/" }, { label: config[0] }]}>
  <Hero eyebrow="Home Procedure" title={config[0]} description={config[1]} primary={["Enquire Now", `/procedures/${kind === "vitals" ? "vital-monitoring-at-home" : kind === "nebulization" ? "nebulization-at-home" : "injection-at-home"}/`]} icon={config[2]} />
  <Section eyebrow="Service" title="Professional support at home" tone="ivory"><FeatureGrid items={[{ icon: BadgeCheck, title: "Trained professionals", description: "The service is delivered by trained healthcare professionals following appropriate protocols." }, { icon: ShieldCheck, title: "Safety first", description: "Patient safety, hygiene and appropriate procedure practices are prioritised." }, { icon: MapPin, title: "At your doorstep", description: "Receive the service in the comfort of your home." }, { icon: HeartHandshake, title: "Patient-focused care", description: "The care experience is designed around comfort and clear communication." }]} /></Section>
  <Steps items={[{ title: "Share the requirement", description: "Tell the team what procedure or monitoring support is needed." }, { title: "Confirm suitability", description: "The service requirement and appointment details are reviewed." }, { title: "Professional home visit", description: "A trained professional visits your home at the scheduled time." }, { title: "Follow-up guidance", description: "Receive appropriate guidance after the service." }]} />
  <FinalCTA title="Need a home procedure?" description="Enquire about availability and let the care team coordinate your home visit." href={`/procedures/${kind === "vitals" ? "vital-monitoring-at-home" : kind === "nebulization" ? "nebulization-at-home" : "injection-at-home"}/`} />
</PageShell>; }

function TestimonialsPage() { const quotes = ["The home-based model made it easier for our family to coordinate care without repeated trips to a facility.", "The team was professional, organised and focused on making the home visit comfortable.", "Having diagnostics and preventive services available at home made routine healthcare much easier to manage."]; return <PageShell breadcrumbs={[{ label: "Testimonials" }]}>
  <Hero eyebrow="Testimonials / Case Studies" title="Patient experiences with Apollo Homecare" description="A place for patient and family experiences, service stories and the trust built through home-based healthcare." primary={["Explore our services", "/home-diagnostics/"]} icon={HeartHandshake} />
  <Section eyebrow="Testimonials" title="What patients value" tone="ivory"><div className="grid gap-5 md:grid-cols-3">{quotes.map((quote, i) => <article key={quote} className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm"><div className="mb-5 flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, n) => <span key={n}>★</span>)}</div><p className="text-base leading-7 text-neutral-700">“{quote}”</p><p className="mt-6 text-sm font-semibold text-neutral-900">Apollo Homecare patient experience</p></article>)}</div></Section>
  <Section eyebrow="Across Person B services" title="Care that comes home"><div className="grid gap-4 md:grid-cols-3"><Card icon={Hospital} title="Medical Equipment" description="Equipment for purchase or rental to support care at home." href="/medical-equipment/" /><Card icon={Microscope} title="Home Diagnostics" description="Tests, advanced diagnostics and health checkups at home." href="/home-diagnostics/" /><Card icon={Syringe} title="Adult Vaccination" description="Convenient preventive vaccination services at home." href="/adult-vaccination/" /></div></Section>
  <FinalCTA title="Start your own homecare journey" description="Explore the service that fits your current healthcare need." href="/home-diagnostics/" label="Explore services" />
</PageShell>; }

export default function DiagnosticsEquipmentIndex() { const router = useRouter(); const slug = (router.query.slug || []).join("/"); if (slug === "medical-equipment") return <MedicalEquipmentPage />; if (slug === "medical-equipment/rent") return <MedicalEquipmentPage mode="rent" />; if (slug === "medical-equipment/buy") return <MedicalEquipmentPage mode="buy" />; if (slug === "home-diagnostics") return <HomeDiagnosticsPage />; if (slug === "home-diagnostics/blood-test-at-home") return <BloodTestPage />; if (slug === "home-diagnostics/full-body-checkup-at-home") return <FullBodyCheckupPage />; if (slug === "adult-vaccination") return <AdultVaccinationPage />; if (slug === "adult-vaccination/flu-vaccine") return <VaccinePage type="flu" />; if (slug === "adult-vaccination/pneumonia-vaccine") return <VaccinePage type="pneumonia" />; if (slug === "insurance-tpa-tieups") return <InsurancePage />; if (slug === "procedures/nebulization-at-home") return <ProcedurePage kind="nebulization" />; if (slug === "procedures/injection-at-home") return <ProcedurePage kind="injection" />; if (slug === "procedures/vital-monitoring-at-home") return <ProcedurePage kind="vitals" />; if (slug === "testimonials") return <TestimonialsPage />; return <PageShell><Section eyebrow="Page not found" title="The requested Person B page was not found" lead="Use the navigation to continue exploring Apollo Homecare services." /></PageShell>; }
