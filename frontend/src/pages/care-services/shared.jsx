import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  HeartHandshake,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  UserRound,
  X,
} from "lucide-react";

const NAV = [
  ["Home", "/"],
  ["Long Term Care", "/care-services/long-term-care/"],
  ["Home Visit", "/care-services/home-visit/"],
  ["Medical Equipment", "/medical-equipment/"],
  ["Home Diagnostics", "/home-diagnostics/"],
  ["Adult Vaccination", "/adult-vaccination/"],
];

const CITIES = [
  "Hyderabad",
  "Kolkata",
  "Delhi NCR",
  "Chennai",
  "Bangalore",
  "Pune",
  "Madurai",
  "Mysore",
  "Indore",
  "Mumbai",
  "Guwahati",
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf7f1]/95 backdrop-blur">
      <div className="border-b border-black/5 bg-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs text-neutral-600 md:px-6">
          <div className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Select City</div>
          <div className="hidden items-center gap-5 sm:flex">
            <a href="tel:18000000000" className="font-semibold text-primary">1800 000 0000</a>
            <span className="flex items-center gap-1"><ShoppingCart size={14} /> Cart</span>
            <span className="flex items-center gap-1"><UserRound size={14} /> Login</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Svasth Homecare home">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"><Stethoscope size={21} /></div>
          <div><div className="font-display text-xl font-semibold leading-none text-neutral-900">Svasth</div><div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">Homecare</div></div>
        </Link>
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {NAV.map(([label, href]) => <li key={href}><Link href={href} className="text-sm font-medium text-neutral-700 transition hover:text-primary">{label}</Link></li>)}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/care-services/" className="btn btn-secondary h-10 px-4 text-sm">Book a service</Link>
          <a href="tel:18000000000" className="btn btn-primary h-10 px-4 text-sm"><Phone size={15} /> Call Now</a>
        </div>
        <button type="button" className="rounded-lg p-2 lg:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle navigation">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileOpen && <div className="border-t border-black/5 bg-white px-4 py-4 lg:hidden"><ul className="space-y-2">{NAV.map(([label, href]) => <li key={href}><Link onClick={() => setMobileOpen(false)} href={href} className="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100">{label}</Link></li>)}</ul></div>}
    </header>
  );
}

export function Footer() {
  return <footer className="footer">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
      <div><div className="mb-4 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary"><Stethoscope size={21} /></div><div><div className="font-display text-lg font-semibold">Svasth</div><div className="text-[10px] uppercase tracking-[0.14em] text-white/60">Homecare</div></div></div><p className="max-w-xs text-sm leading-6 text-white/70">World-class healthcare services delivered to your home with professional medical expertise and personalised care.</p></div>
      <FooterColumn title="Our Services" links={NAV.slice(1)} />
      <div><h3 className="mb-4 font-display text-base text-white">Contact Us</h3><div className="space-y-2 text-sm text-white/75">{CITIES.map((city) => <div key={city}>{city}</div>)}</div><a href="tel:18000000000" className="mt-5 inline-flex items-center gap-2 font-semibold text-white"><Phone size={16} className="text-[#8fe0e3]" />1800 000 0000</a></div>
    </div>
    <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">© {new Date().getFullYear()} Svasth Homecare. All rights reserved.</div>
  </footer>;
}

function FooterColumn({ title, links }) { return <div><h3 className="mb-4 font-display text-base text-white">{title}</h3><ul className="space-y-2">{links.map(([label, href]) => <li key={href}><Link href={href} className="text-sm text-white/75 transition hover:text-white">{label}</Link></li>)}</ul></div>; }

export function Breadcrumbs({ items }) { return <div className="mx-auto max-w-7xl px-6 py-4"><nav className="breadcrumb" aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li>{items.map((item, i) => <li key={`${item.href || item.label}-${i}`} className="flex items-center gap-2"><span className="breadcrumb-separator">/</span>{item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}</li>)}</ol></nav></div>; }

export function PageShell({ children, breadcrumbs = [] }) { return <><SiteHeader /><Breadcrumbs items={breadcrumbs} />{children}<Footer /></>; }

export function Hero({ eyebrow, title, description, primary = ["Enquire Now", "/care-services/"], secondary, icon: Icon = Stethoscope }) {
  return <section className="bg-white">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:grid-cols-[1.2fr_.8fr] md:py-16">
      <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p><h1 className="max-w-4xl font-display text-[40px] font-semibold leading-[1.08] text-neutral-900 md:text-[56px]">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">{description}</p><div className="mt-8 flex flex-wrap gap-3"><Link href={primary[1]} className="btn btn-primary h-12 px-7">{primary[0]} <ArrowRight size={17} /></Link>{secondary && <Link href={secondary[1]} className="btn btn-secondary h-12 px-7">{secondary[0]}</Link>}</div><div className="mt-8 flex flex-wrap gap-6 text-sm text-neutral-600"><span className="flex items-center gap-2"><BadgeCheck size={17} className="text-primary" />Trained professionals</span><span className="flex items-center gap-2"><ShieldCheck size={17} className="text-primary" />Safety-first service</span><span className="flex items-center gap-2"><HeartHandshake size={17} className="text-primary" />Care at home</span></div></div>
      <div className="band-ivory-dotted flex min-h-[300px] items-center justify-center rounded-[28px] border border-primary/10 p-8"><div className="flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-lg"><Icon size={88} strokeWidth={1.4} className="text-primary" /></div></div>
    </div>
  </section>;
}

export function Section({ id, eyebrow, title, lead, children, tone = "white", className = "" }) { return <section id={id} className={`${tone === "ivory" ? "bg-neutral-100" : "bg-white"} py-12 md:py-20 ${className}`}><div className="mx-auto max-w-7xl px-6">{(eyebrow || title || lead) && <div className="mb-9 flex flex-wrap items-end justify-between gap-4"><div>{eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>}{title && <h2 className="font-display text-[30px] font-semibold leading-tight text-neutral-900 md:text-[38px]">{title}</h2>}{lead && <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-600">{lead}</p>}</div></div>}{children}</div></section>; }

export function Card({ title, description, href, icon: Icon = Check, badge, children }) { return <article className="group relative flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">{badge && <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-white">{badge}</span>}<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon size={24} /></div><h3 className="pr-8 text-lg font-semibold text-neutral-900">{title}</h3>{description && <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>}{children}{href && <Link href={href} className="mt-auto pt-5 text-sm font-semibold text-primary">Explore <ArrowRight size={15} className="ml-1 inline transition group-hover:translate-x-1" /></Link>}</article>; }

export function ProductCard({ title, description, href, icon: Icon = Stethoscope, price, badge = "Enquire Now" }) { return <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"><div className="flex h-44 items-center justify-center bg-neutral-100"><div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-md text-primary"><Icon size={48} strokeWidth={1.5} /></div></div><div className="flex flex-1 flex-col p-5"><h3 className="text-base font-semibold leading-6 text-neutral-900">{title}</h3>{description && <p className="mt-2 line-clamp-3 text-sm leading-6 text-neutral-600">{description}</p>}{price && <div className="mt-4 text-lg font-bold text-neutral-900">{price}</div>}<Link href={href || "/"} className="btn btn-secondary mt-5 h-10 w-full text-sm">{badge} <ArrowRight size={15} /></Link></div></article>; }

export function FilteredGrid({ items, initialCount = 12, placeholder = "Search services" }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category).filter(Boolean)))];
  const filtered = useMemo(() => items.filter((item) => (active === "All" || item.category === active) && item.title.toLowerCase().includes(query.toLowerCase())), [items, active, query]);
  return <div><div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div className="flex flex-wrap gap-2">{categories.map((category) => <button key={category} type="button" onClick={() => setActive(category)} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active === category ? "border-primary bg-primary text-white" : "border-primary/20 bg-white text-neutral-700 hover:border-primary/50"}`}>{category}</button>)}</div><label className="flex h-11 w-full max-w-sm items-center gap-2 rounded-full border border-black/10 bg-white px-4 text-neutral-500"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={placeholder} className="w-full bg-transparent text-sm outline-none" /></label></div><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filtered.slice(0, initialCount).map((item) => <ProductCard key={item.title} {...item} />)}</div>{filtered.length === 0 && <div className="rounded-2xl border border-primary/10 bg-neutral-100 p-10 text-center text-neutral-600">No matching services found. Try another search or category.</div>}</div>;
}

export function FeatureGrid({ items }) { return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.map(({ title, description, icon: Icon = Check }) => <Card key={title} title={title} description={description} icon={Icon} />)}</div>; }

export function Steps({ items }) { return <section className="band-dark-dotted py-12 md:py-20"><div className="mx-auto max-w-7xl px-6"><p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8fe0e3]">How it works</p><h2 className="font-display text-[30px] font-semibold text-white md:text-[38px]">Simple, safe and convenient</h2><div className="mt-9 grid gap-4 md:grid-cols-4">{items.map((item, i) => <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 font-display text-[#8fe0e3]">{i + 1}</div><h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-white/70">{item.description}</p></div>)}</div></div></section>; }

export function FAQ({ items }) { return <Section eyebrow="FAQs" title="Frequently asked questions"><div className="mx-auto max-w-4xl space-y-3">{items.map((item, i) => <details key={item.q} className="group rounded-2xl border border-primary/15 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-semibold text-neutral-900"><span>{item.q}</span><ChevronDown size={18} className="shrink-0 text-primary transition group-open:rotate-180" /></summary><p className="px-5 pb-5 text-sm leading-7 text-neutral-600">{item.a}</p></details>)}</div></Section>; }

export function FinalCTA({ title, description, href = "/care-services/", label = "Enquire Now" }) { return <section className="band-dark-dotted-strong py-14 md:py-20"><div className="mx-auto max-w-3xl px-6 text-center"><h2 className="font-display text-[30px] font-semibold text-white md:text-[40px]">{title}</h2><p className="mt-4 text-white/75">{description}</p><div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"><Link href={href} className="btn btn-primary h-12 px-8">{label} <ArrowRight size={17} /></Link><a href="tel:18000000000" className="flex h-12 items-center gap-2 px-5 font-semibold text-white"><Phone size={17} className="text-[#8fe0e3]" />1800 000 0000</a></div></div></section>; }

export { CITIES };

export default function Shared() { return null; }
