import Link from "next/link";
import { PageShell, Hero, Section, FeatureGrid, FinalCTA } from "./shared";
import { HeartHandshake, ShieldCheck, Clock3, MapPin, Stethoscope, UserRound, Activity, Syringe } from "lucide-react";

export default function CareServicesIndex() {
  return (
    <PageShell breadcrumbs={[{ label: "Care Services" }]}>
      <Hero eyebrow="Care Services" title="Hospital-grade care at your doorstep" description="Long term care, home visits, and nursing procedures delivered by trained, verified professionals. Available in Hyderabad, Chennai, Bangalore, Delhi NCR, Kolkata." primary={["Long Term Care", "/care-services/long-term-care/"]} secondary={["Home Visit", "/care-services/home-visit/"]} />
      <Section eyebrow="Long Term Care" title="Compassionate Care You Can Trust at Home" lead="Expert care for your loved ones, combining medical excellence with the comfort of home." tone="ivory">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/care-services/long-term-care/nurse-at-home/" className="rounded-2xl border border-black/5 bg-white p-6 hover:border-primary/30"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Stethoscope size={20} /></div><h3 className="mt-4 font-semibold">Nurse at Home</h3><p className="mt-2 text-sm text-neutral-600">Skilled nursing care for post-operative recovery and chronic conditions.</p></Link>
          <Link href="/care-services/long-term-care/attendant-at-home/" className="rounded-2xl border border-black/5 bg-white p-6 hover:border-primary/30"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><UserRound size={20} /></div><h3 className="mt-4 font-semibold">Attendant at Home</h3><p className="mt-2 text-sm text-neutral-600">Professional caregiver for daily living assistance.</p></Link>
          <Link href="/care-services/long-term-care/icu-at-home/" className="rounded-2xl border border-black/5 bg-white p-6 hover:border-primary/30"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Clock3 size={20} /></div><h3 className="mt-4 font-semibold">ICU at Home</h3><p className="mt-2 text-sm text-neutral-600">Critical care setup with hospital-grade equipment.</p></Link>
          <Link href="/care-services/long-term-care/elder-care/" className="rounded-2xl border border-black/5 bg-white p-6 hover:border-primary/30"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><HeartHandshake size={20} /></div><h3 className="mt-4 font-semibold">Elder Care</h3><p className="mt-2 text-sm text-neutral-600">Subscription-based senior care with 24/7 support.</p></Link>
        </div>
      </Section>
      <Section eyebrow="Home Visit" title="Professional Healthcare at Your Doorstep" lead="Doctors, physiotherapists, and post-surgical support at home." tone="white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/care-services/home-visit/doctor-at-home/" className="rounded-2xl border border-black/5 bg-white p-6 hover:border-primary/30"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><UserRound size={20} /></div><h3 className="mt-4 font-semibold">Doctor at Home</h3><p className="mt-2 text-sm text-neutral-600">Expert medical care at your doorstep — tele/visit at ₹1,000.</p></Link>
          <Link href="/care-services/home-visit/physiotherapy-at-home/" className="rounded-2xl border border-black/5 bg-white p-6 hover:border-primary/30"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Activity size={20} /></div><h3 className="mt-4 font-semibold">Physiotherapy at Home</h3><p className="mt-2 text-sm text-neutral-600">Mobility and rehabilitation by Svasth physiotherapists.</p></Link>
          <Link href="/care-services/home-visit/post-surgical-care/" className="rounded-2xl border border-black/5 bg-white p-6 hover:border-primary/30"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><ShieldCheck size={20} /></div><h3 className="mt-4 font-semibold">Post-Surgical Care</h3><p className="mt-2 text-sm text-neutral-600">Structured recovery support after surgery.</p></Link>
        </div>
      </Section>
      <Section eyebrow="Nursing Procedures" title="Nurse Procedures at Home" lead="Wound care, catheterisation, and infusions delivered safely at home." tone="ivory">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/care-services/ryles-tube-insertion/" className="rounded-2xl border border-black/5 bg-white p-6 hover:border-primary/30"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Syringe size={20} /></div><h3 className="mt-4 font-semibold">Ryle&apos;s Tube Insertion</h3><p className="mt-2 text-sm text-neutral-600">₹1,500 — feeding and drainage via nasal tube.</p></Link>
          <Link href="/care-services/foley-catheter-care/" className="rounded-2xl border border-black/5 bg-white p-6 hover:border-primary/30"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Syringe size={20} /></div><h3 className="mt-4 font-semibold">Foley Catheter Care</h3><p className="mt-2 text-sm text-neutral-600">₹2,200 — urinary management with secure placement.</p></Link>
          <Link href="/care-services/iv-infusion-at-home/" className="rounded-2xl border border-black/5 bg-white p-6 hover:border-primary/30"><h3 className="font-semibold">IV Infusion at Home</h3><p className="mt-2 text-sm text-neutral-600">₹1,500 — fluids and nutrients via pre-inserted cannula.</p></Link>
          <Link href="/care-services/wound-dressing-at-home/" className="rounded-2xl border border-black/5 bg-white p-6 hover:border-primary/30"><h3 className="font-semibold">Wound Dressing at Home</h3><p className="mt-2 text-sm text-neutral-600">Sterile dressing and infection prevention.</p></Link>
          <Link href="/care-services/tracheostomy-care/" className="rounded-2xl border border-black/5 bg-white p-6 hover:border-primary/30"><h3 className="font-semibold">Tracheostomy Care</h3><p className="mt-2 text-sm text-neutral-600">Airway management and family training.</p></Link>
        </div>
      </Section>
      <Section eyebrow="More" title="Help & Pricing" tone="white">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/care-services/faq-help-center/" className="rounded-2xl border border-black/5 bg-neutral-100 p-6 hover:border-primary/30"><h3 className="font-semibold">FAQ / Help Center</h3><p className="mt-2 text-sm text-neutral-600">Booking, cities, trust, and procedure FAQs.</p></Link>
          <Link href="/care-services/pricing-plans-comparison/" className="rounded-2xl border border-black/5 bg-neutral-100 p-6 hover:border-primary/30"><h3 className="font-semibold">Pricing & Plans</h3><p className="mt-2 text-sm text-neutral-600">Compare Basic, Advanced, Premium and procedure pricing.</p></Link>
        </div>
      </Section>
      <FinalCTA title="Ready to bring care home?" description="Book now or call 1800 000 0000 — hospital-grade care delivered by trusted professionals." href="/care-services/long-term-care/" label="Explore Services" />
    </PageShell>
  );
}
