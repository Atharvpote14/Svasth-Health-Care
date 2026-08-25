import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import {
  Accessibility,
  Activity,
  ArrowRight,
  BadgeCheck,
  BedDouble,
  ClipboardCheck,
  Clock3,
  Droplets,
  HeartHandshake,
  HeartPulse,
  Hospital,
  LaptopMinimal,
  MapPin,
  Menu,
  Microscope,
  Phone,
  Quote,
  ScanLine,
  Search,
  ShieldCheck,
  Syringe,
  Thermometer,
  UserRound,
  Wind,
  X,
} from "lucide-react";

import CategoryHero from "../../components/care-services/sections/CategoryHero";
import HowItWorksSection from "../../components/care-services/sections/HowItWorksSection";
import FAQSection from "../../components/care-services/sections/FAQSection";
import FinalCTASection from "../../components/care-services/sections/FinalCTASection";
import Breadcrumbs from "../../components/care-services/utilities/Breadcrumbs";
import Footer from "../../components/footer";
import {
  FOOTER_COLUMNS,
  FOOTER_COPYRIGHT,
  NAV_LINKS,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE_NAME,
} from "../../lib/site";

/**
 * Person B's pages (medical equipment, home diagnostics, adult vaccination,
 * insurance/TPA, home procedures, testimonials) rendered in the care-services
 * "threshold" design language so they are indistinguishable from Person A's
 * pages.
 *
 * One source of truth. `PersonBPage` + `PAGE_DATA` are consumed both by the 14
 * nested route files under pages/diagnostics-equipment/** (which serve the
 * /diagnostics-equipment/... mirror URLs) and by index.jsx's slug router (which
 * serves the canonical top-level URLs via pages/[...slug].jsx). Restyling here
 * restyles every Person B surface at once — and fixes the nested routes, which
 * previously imported these two symbols before they existed.
 *
 * The heavy lifting is delegated to Person A's own section components
 * (CategoryHero, HowItWorksSection, FAQSection, FinalCTASection, Breadcrumbs,
 * Footer). They are router-agnostic, so importing them here gives a pixel match
 * for free. Only the header/nav is rebuilt Pages-Router-safe: A's Navbar uses
 * next/navigation (App-Router only), so this file drives active state from
 * next/router instead.
 *
 * The care-* design language is scoped by `.care-theme` plus three next/font CSS
 * variables that App Router pages get on <body> but Pages Router pages never do.
 * PageShell re-establishes both on a wrapper div; the mobile drawer portals to
 * document.body, so it carries the font variables on its own root.
 */

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

const FONT_VARS = `${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`;

// The three trust facts, shown as pills in every hero — same as A's pages.
const HERO_TRUST = [
  { icon: BadgeCheck, label: "Trained professionals" },
  { icon: ShieldCheck, label: "Safety-first service" },
  { icon: HeartHandshake, label: "Care at home" },
];

/* ----------------------------------------------------------------------------
 * Catalogue data (unchanged from Person B, minus the Apollo branding and the
 * non-existent Wheelchair icon → Accessibility).
 * ------------------------------------------------------------------------- */

const EQUIPMENT = [
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
  ["Wheel Chairs", "Wheel Chair", Accessibility, "Mobility support for home and assisted movement."],
  ["DVT Pump", "DVT Pump", Activity, "Sequential compression support used under clinical guidance."],
  ["Ventilator", "Ventilator", Wind, "Home ventilatory support equipment for eligible patients."],
].map(([title, category, icon, description]) => ({
  title,
  category,
  icon,
  description,
  href: "/medical-equipment/",
}));

const DIAGNOSTICS = [
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
].map(([title, category, icon, description]) => ({
  title,
  category,
  icon,
  description,
  href: "/home-diagnostics/",
}));

const VACCINES = [
  ["Typhoid Vaccine", "Typhoid", Syringe, "At-home typhoid vaccination with administration support."],
  ["Flu Vaccine at Home – 2026", "Influenza", Syringe, "Convenient at-home influenza vaccination."],
  ["HPV Vaccine", "HPV", ShieldCheck, "At-home HPV vaccination with professional administration."],
  ["Meningococcal Vaccine", "Meningococcal", ShieldCheck, "Protection against meningococcal disease."],
  ["Pneumococcal Vaccine", "Pneumococcal", ShieldCheck, "At-home pneumococcal vaccination for eligible adults."],
  ["Shingles Vaccine", "Shingles", ShieldCheck, "Convenient vaccination against shingles."],
  ["Pneumococcal Vaccination – PCV20", "Pneumococcal", ShieldCheck, "PCV20 at-home vaccination option for adults."],
  ["Td / Tdap", "Routine Adult Vaccination", Syringe, "Tetanus and diphtheria vaccination options as advised."],
  ["Hepatitis A & B", "Routine Adult Vaccination", Syringe, "Adult hepatitis vaccination options based on suitability."],
  ["Varicella", "Routine Adult Vaccination", Syringe, "Chickenpox vaccination for eligible adults."],
].map(([title, category, icon, description]) => ({
  title,
  category,
  icon,
  description,
  href: "/adult-vaccination/",
}));

const bloodTests = DIAGNOSTICS.filter(
  (item) => item.category === "Blood Tests" || item.category === "Diagnostic Tests"
);
const checkups = DIAGNOSTICS.filter((item) => item.category === "Health Checkups");

/* ----------------------------------------------------------------------------
 * Page chrome — Pages-Router-safe header + reused footer.
 * ------------------------------------------------------------------------- */

const normPath = (p) => (p && p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p);
const isActive = (pathname, href) => normPath(pathname || "/") === normPath(href);

function SiteHeader() {
  return (
    <header className="header care-header">
      <div className="header-container">
        <Link
          href="/"
          className="header-logo care-wordmark font-display text-xl text-neutral-900"
        >
          {SITE_NAME}
        </Link>
        <PagesNav items={NAV_LINKS} />
      </div>
    </header>
  );
}

/**
 * PagesNav — the App Router Navbar rebuilt on next/router. Desktop inline links
 * hidden below lg; a hamburger opens the same accessible slide-in drawer,
 * portalled to <body> because `.care-header`'s backdrop-filter would otherwise
 * confine a fixed child to the 64px header box.
 */
function PagesNav({ items = [] }) {
  const router = useRouter();
  const pathname = (router.asPath || router.pathname || "/").split(/[?#]/)[0];
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => setMounted(true), []);

  // Close on client-side route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Release the drawer if the viewport grows past lg while it is open.
  useEffect(() => {
    if (!open) return undefined;
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <nav className="navbar flex items-center" aria-label="Primary">
      <ul className="navbar-list hidden lg:flex">
        {items.map((item) => (
          <li className="navbar-item" key={item.path || item.label}>
            <Link
              href={item.path}
              aria-current={isActive(pathname, item.path) ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-neutral-700 transition-colors duration-250 ease-standard hover:bg-black/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
      >
        <Menu size={24} strokeWidth={1.75} aria-hidden="true" />
      </button>

      {mounted &&
        open &&
        createPortal(
          <MobileDrawer items={items} pathname={pathname} onClose={close} />,
          document.body
        )}
    </nav>
  );
}

function MobileDrawer({ items, pathname, onClose }) {
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      onClose();
      return;
    }
    if (event.key !== "Tab") return;
    const focusables = panelRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      id="mobile-nav-panel"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className={`${FONT_VARS} care-theme fixed inset-0 z-[60] lg:hidden`}
      onKeyDown={onKeyDown}
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`absolute inset-0 bg-[#06282a]/45 transition-opacity duration-250 ease-standard ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={panelRef}
        className={`absolute inset-y-0 right-0 flex h-full w-[min(20rem,86vw)] flex-col bg-[#faf8f3] shadow-2xl transition-transform duration-250 ease-standard ${
          shown ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-black/5 pl-5 pr-3">
          <span className="font-display text-lg text-neutral-900">
            {SITE_NAME}
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-neutral-600 transition-colors duration-250 ease-standard hover:bg-black/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X size={22} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Site" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {items.map((item) => {
              const active = isActive(pathname, item.path);
              return (
                <li key={item.path || item.label}>
                  <Link
                    href={item.path}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors duration-250 ease-standard ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-neutral-800 hover:bg-black/5"
                    }`}
                  >
                    {item.label}
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                      className={active ? "text-primary" : "text-neutral-400"}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-black/5 px-5 py-4">
          <a
            href={PHONE_HREF}
            onClick={onClose}
            className="btn btn-primary h-12 w-full"
          >
            <Phone size={16} strokeWidth={2} aria-hidden="true" />
            Call care team
          </a>
          <p className="mt-3 text-center text-sm text-neutral-500">
            or dial{" "}
            <a href={PHONE_HREF} className="font-semibold text-primary">
              {PHONE_NUMBER}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * PageShell — re-establishes the care-* theme and the three font variables that
 * only App Router pages get on <body>, then frames the page with the shared
 * header, breadcrumb trail and footer.
 */
export function PageShell({ breadcrumbs = [], children }) {
  return (
    <div
      className={`${FONT_VARS} care-theme min-h-screen bg-white text-[var(--care-ink)]`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content">
        {breadcrumbs.length > 0 && (
          <div className="mx-auto max-w-6xl px-6 pt-8 pb-2">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {children}
      </main>

      <Footer columns={FOOTER_COLUMNS} copyright={FOOTER_COPYRIGHT} />
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Content primitives in the care-* language.
 * ------------------------------------------------------------------------- */

function Section({ id, eyebrow, title, lead, tone = "white", className = "", children }) {
  const band = tone === "band";
  return (
    <section
      id={id}
      className={`${band ? "care-band" : "bg-white"} py-14 md:py-[88px] ${
        id ? "scroll-mt-24" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || lead) && (
          <div className="mb-11 max-w-2xl">
            {eyebrow && <p className="care-eyebrow mb-4">{eyebrow}</p>}
            {title && <h2 className="care-h2 font-display">{title}</h2>}
            {lead && <p className="care-lead mt-4">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function CardGrid({ cols = 3, children }) {
  const map = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };
  return (
    <div className={`grid grid-cols-1 gap-4 md:gap-5 ${map[cols] || map[3]}`}>
      {children}
    </div>
  );
}

// Static feature card — icon plate, title, body. No link.
function InfoCard({ icon: Icon = ShieldCheck, title, description }) {
  return (
    <article className="care-card p-6">
      <span className="care-plate">
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="care-h3 mt-5 font-display">{title}</h3>
      {description && (
        <p className="mt-2.5 text-[15px] leading-[1.7] text-[var(--care-mute)]">
          {description}
        </p>
      )}
    </article>
  );
}

// Whole-card link (category / cross-links). The title anchor's ::after covers
// the card, so the entire card is the hit target.
function LinkCard({ icon: Icon = ArrowRight, title, description, href, cta = "Explore" }) {
  return (
    <article className="care-card group p-6">
      <span className="care-plate">
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="care-h3 mt-5 font-display">
        <Link href={href} className="after:absolute after:inset-0">
          {title}
        </Link>
      </h3>
      {description && (
        <p className="mt-2.5 text-[15px] leading-[1.7] text-[var(--care-mute)]">
          {description}
        </p>
      )}
      <span className="care-label mt-auto flex items-center gap-1.5 pt-6 text-primary">
        {cta}
        <ArrowRight
          size={14}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-250 ease-standard group-hover:translate-x-1"
        />
      </span>
    </article>
  );
}

// Catalogue item — like LinkCard, with an optional category label (shown only
// when it adds information beyond the title) and an "Enquire" affordance.
function CatalogueCard({ icon: Icon = ShieldCheck, title, description, href, category, cta = "Enquire now" }) {
  return (
    <article className="care-card group p-6">
      <span className="care-plate">
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="care-h3 mt-5 font-display leading-snug">
        <Link href={href} className="after:absolute after:inset-0">
          {title}
        </Link>
      </h3>
      {category && category !== title && (
        <p className="care-label mt-2 text-[var(--care-mute)]">{category}</p>
      )}
      {description && (
        <p className="mt-2.5 text-[14px] leading-[1.65] text-[var(--care-mute)]">
          {description}
        </p>
      )}
      <span className="care-label mt-auto flex items-center gap-1.5 pt-5 text-primary">
        {cta}
        <ArrowRight
          size={14}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-250 ease-standard group-hover:translate-x-1"
        />
      </span>
    </article>
  );
}

// Searchable, category-filterable catalogue grid.
function FilterGrid({ items, placeholder = "Search" }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category).filter(Boolean)))],
    [items]
  );

  const filtered = useMemo(
    () =>
      items.filter(
        (i) =>
          (active === "All" || i.category === active) &&
          i.title.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [items, active, query]
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const on = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={on}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-250 ease-standard ${
                  on
                    ? "bg-primary text-white"
                    : "border border-[var(--care-rule-strong)] bg-white text-neutral-600 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
        <label className="flex h-11 w-full items-center gap-2 rounded-full border border-[var(--care-rule-strong)] bg-white px-4 text-neutral-500 lg:max-w-xs">
          <Search size={16} strokeWidth={1.75} aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
            className="w-full bg-transparent text-sm text-neutral-800 outline-none placeholder:text-neutral-400"
          />
        </label>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <CatalogueCard key={item.title} {...item} />
          ))}
        </div>
      ) : (
        <div className="care-card p-10 text-center text-[15px] text-[var(--care-mute)]">
          No matching results. Try another search or category.
        </div>
      )}
    </div>
  );
}

function QuoteCard({ quote, author }) {
  return (
    <figure className="care-card p-7">
      <span className="care-plate">
        <Quote size={20} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <blockquote className="mt-5 text-[15px] leading-[1.7] text-[var(--care-ink)]">
        {quote}
      </blockquote>
      <figcaption className="care-label mt-6 text-[var(--care-mute)]">
        {author}
      </figcaption>
    </figure>
  );
}

/* ----------------------------------------------------------------------------
 * Page layouts.
 * ------------------------------------------------------------------------- */

function EquipmentLayout({ mode = "all" }) {
  const rent = mode === "rent";
  const buy = mode === "buy";
  const crumbs = rent
    ? [
        { label: "Home", path: "/" },
        { label: "Medical Equipment", path: "/medical-equipment/" },
        { label: "Rent Now" },
      ]
    : buy
      ? [
          { label: "Home", path: "/" },
          { label: "Medical Equipment", path: "/medical-equipment/" },
          { label: "Buy Now" },
        ]
      : [{ label: "Home", path: "/" }, { label: "Medical Equipment" }];
  const enquireCta = rent ? "Enquire for rental" : buy ? "Enquire to buy" : "Enquire now";
  const catalogue = EQUIPMENT.map((item) => ({ ...item, cta: enquireCta }));

  return (
    <PageShell breadcrumbs={crumbs}>
      <CategoryHero
        eyebrow="Medical Equipment"
        title={
          rent
            ? "Medical Equipment for Rent at Home"
            : buy
              ? "Buy Medical Equipment for Home Care"
              : "Medical Equipment for Sales & Rentals"
        }
        lead="High-quality medical equipment for home-based care, with support for choosing the right equipment and arranging delivery."
        primaryCta={{ label: "Explore equipment", href: "#equipment" }}
        secondaryCta={{ label: "Request expert help", href: "/medical-equipment/" }}
        trustItems={HERO_TRUST}
      />

      <Section
        id="equipment"
        tone="band"
        eyebrow="Browse the catalogue"
        title="Medical equipment for home care"
        lead="Svasth Homecare's medical-equipment catalogue spans respiratory, monitoring, mobility and everyday home-care equipment."
      >
        <FilterGrid items={catalogue} placeholder="Search equipment" />
      </Section>

      <Section
        eyebrow="Why Svasth Homecare"
        title="Equipment support beyond the product"
        lead="The catalogue pairs product discovery with an expert-help route for patients and families who need guidance."
      >
        <CardGrid cols={4}>
          <InfoCard
            icon={ShieldCheck}
            title="Expert guidance"
            description="Get help selecting equipment suited to the care requirement."
          />
          <InfoCard
            icon={Hospital}
            title="Home-care focused"
            description="Equipment is presented for practical use in a home-care setting."
          />
          <InfoCard
            icon={Clock3}
            title="Convenient coordination"
            description="Request support for availability, delivery and next steps."
          />
          <InfoCard
            icon={HeartHandshake}
            title="Patient-first support"
            description="A care-focused team helps you navigate equipment needs."
          />
        </CardGrid>
      </Section>

      <FinalCTASection
        title="Let our team help you choose"
        lead="Share your requirement and the care team can guide you on the right equipment and next steps."
        cta={{ label: "Request expert help", href: "/medical-equipment/" }}
      />
    </PageShell>
  );
}

function DiagnosticsLayout() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", path: "/" }, { label: "Home Diagnostics" }]}
    >
      <CategoryHero
        eyebrow="Home Diagnostics"
        title="Home Diagnostics Services"
        lead="Accurate, convenient diagnostic tests, advanced diagnostics and comprehensive health checkups brought to your doorstep."
        primaryCta={{ label: "Book a diagnostic service", href: "#diagnostics" }}
        secondaryCta={{
          label: "Full body checkup",
          href: "/home-diagnostics/full-body-checkup-at-home/",
        }}
        trustItems={HERO_TRUST}
      />

      <Section
        tone="band"
        eyebrow="Our diagnostic categories"
        title="Choose the right diagnostic service"
        lead="Svasth Homecare's diagnostics are organised into diagnostic tests, advanced diagnostics and comprehensive health checkups."
      >
        <CardGrid cols={3}>
          <LinkCard
            icon={Droplets}
            title="Diagnostic Tests"
            description="Routine tests and sample collection at home."
            href="/home-diagnostics/blood-test-at-home/"
          />
          <LinkCard
            icon={Activity}
            title="Advanced Diagnostics"
            description="ECG, Holter, ABPM, sleep study and other advanced services."
            href="/home-diagnostics/"
          />
          <LinkCard
            icon={ClipboardCheck}
            title="Comprehensive Health Checkups"
            description="Preventive and whole-body health checkup packages."
            href="/home-diagnostics/full-body-checkup-at-home/"
          />
        </CardGrid>
      </Section>

      <Section
        id="diagnostics"
        eyebrow="Diagnostic services"
        title="Tests and checkups at home"
      >
        <FilterGrid items={DIAGNOSTICS} placeholder="Search diagnostic services" />
      </Section>

      <Section
        tone="band"
        eyebrow="Why Svasth Homecare"
        title="What makes the diagnostic experience different"
      >
        <CardGrid cols={4}>
          <InfoCard
            icon={Microscope}
            title="Advanced diagnostics"
            description="Home sample collection paired with advanced diagnostic capability."
          />
          <InfoCard
            icon={ShieldCheck}
            title="Hygiene and safety"
            description="Safety, sanitation and careful sample handling are prioritised."
          />
          <InfoCard
            icon={MapPin}
            title="Easy accessibility"
            description="Doorstep sample collection reduces travel and waiting."
          />
          <InfoCard
            icon={LaptopMinimal}
            title="Digital reports"
            description="Designed around convenient report access and follow-up."
          />
        </CardGrid>
      </Section>

      <HowItWorksSection
        title="Simple, safe and convenient"
        steps={[
          {
            title: "Choose a test",
            description: "Select the diagnostic test, advanced service or checkup you need.",
          },
          {
            title: "Book the visit",
            description: "Share your details and preferred appointment information.",
          },
          {
            title: "Sample collection",
            description: "A trained professional visits your home for the required service.",
          },
          {
            title: "Get your report",
            description: "Receive results and use them with your healthcare professional.",
          },
        ]}
      />

      <FAQSection
        title="Frequently asked questions"
        items={[
          {
            id: "diag-1",
            question: "Can diagnostic tests be done at home?",
            answer:
              "Yes. Svasth Homecare offers routine tests, advanced diagnostics and health checkups designed for home-based service.",
          },
          {
            id: "diag-2",
            question: "Which tests are available?",
            answer:
              "The catalogue includes blood tests, thyroid screening, ECG, ABPM, Holter monitoring, sleep study, health checkups and more.",
          },
          {
            id: "diag-3",
            question: "Is home sample collection available?",
            answer:
              "The home diagnostics service is built around scheduled sample collection at the patient's preferred location.",
          },
        ]}
      />

      <FinalCTASection
        title="Need help choosing a diagnostic service?"
        lead="Tell us what you need and the care team can help you select the appropriate home diagnostic option."
        cta={{ label: "Book a diagnostic service", href: "/home-diagnostics/" }}
      />
    </PageShell>
  );
}

function BloodTestLayout() {
  const items = bloodTests.map((item) => ({
    ...item,
    href: "/home-diagnostics/blood-test-at-home/",
  }));
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Home Diagnostics", path: "/home-diagnostics/" },
        { label: "Blood Test at Home" },
      ]}
    >
      <CategoryHero
        eyebrow="Diagnostic tests"
        title="Blood Tests at Home"
        lead="Convenient blood sample collection at home for routine screening, preventive care and clinically indicated monitoring."
        primaryCta={{
          label: "Enquire now",
          href: "/home-diagnostics/blood-test-at-home/",
        }}
        secondaryCta={{ label: "View all diagnostics", href: "/home-diagnostics/" }}
        trustItems={HERO_TRUST}
      />

      <Section
        tone="band"
        eyebrow="Blood test services"
        title="Common tests available through home diagnostics"
      >
        <CardGrid cols={3}>
          {items.map((item) => (
            <CatalogueCard key={item.title} {...item} />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Why choose home sample collection"
        title="A simpler way to stay on top of your health"
      >
        <CardGrid cols={4}>
          <InfoCard
            icon={MapPin}
            title="Doorstep collection"
            description="Avoid unnecessary travel by arranging collection at home."
          />
          <InfoCard
            icon={ShieldCheck}
            title="Safe handling"
            description="Sample collection is performed by trained healthcare professionals."
          />
          <InfoCard
            icon={Clock3}
            title="Convenient scheduling"
            description="Choose a suitable time for the home visit."
          />
          <InfoCard
            icon={HeartHandshake}
            title="Support when needed"
            description="Use the care team for guidance around the service."
          />
        </CardGrid>
      </Section>

      <FinalCTASection
        title="Book a blood test at home"
        lead="Choose a convenient appointment and let the care team coordinate the next steps."
        cta={{ label: "Enquire now", href: "/home-diagnostics/blood-test-at-home/" }}
      />
    </PageShell>
  );
}

function FullBodyLayout() {
  const items = checkups.map((item) => ({
    ...item,
    href: "/home-diagnostics/full-body-checkup-at-home/",
  }));
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Home Diagnostics", path: "/home-diagnostics/" },
        { label: "Full Body Checkup at Home" },
      ]}
    >
      <CategoryHero
        eyebrow="Comprehensive health checkups"
        title="Full Body Checkup at Home"
        lead="A comprehensive health assessment designed for proactive health management, organised around the convenience of home-based care."
        primaryCta={{
          label: "Enquire now",
          href: "/home-diagnostics/full-body-checkup-at-home/",
        }}
        secondaryCta={{ label: "View diagnostic services", href: "/home-diagnostics/" }}
        trustItems={HERO_TRUST}
      />

      <Section
        tone="band"
        eyebrow="Health checkup options"
        title="Comprehensive screening options"
      >
        <CardGrid cols={3}>
          {items.map((item) => (
            <CatalogueCard key={item.title} {...item} />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow="Premium whole body health checkup"
        title="A detailed assessment for proactive health management"
      >
        <CardGrid cols={2}>
          <InfoCard
            icon={HeartPulse}
            title="Multi-organ health assessment"
            description="Screening can cover major areas such as heart, liver and kidney health along with metabolic markers."
          />
          <InfoCard
            icon={Activity}
            title="Lifestyle disease detection"
            description="Health checkups can support early identification of common lifestyle-related risks."
          />
          <InfoCard
            icon={Droplets}
            title="Nutritional and metabolic health"
            description="Comprehensive testing can include relevant nutritional, metabolic and cardiovascular markers."
          />
          <InfoCard
            icon={ShieldCheck}
            title="Early risk identification"
            description="A broader health assessment can help identify areas that may need professional follow-up."
          />
        </CardGrid>
      </Section>

      <FAQSection
        title="Frequently asked questions"
        items={[
          {
            id: "fbc-1",
            question: "What is a full body checkup?",
            answer:
              "It is a broader diagnostic package that evaluates multiple aspects of health rather than focusing on a single test.",
          },
          {
            id: "fbc-2",
            question: "Can the checkup be done at home?",
            answer:
              "Yes. Svasth Homecare offers home-based diagnostic services and health checkup packages with sample collection at home.",
          },
          {
            id: "fbc-3",
            question: "Which package should I choose?",
            answer:
              "Package suitability depends on age, sex, health goals and clinical requirements; professional guidance is recommended.",
          },
        ]}
      />

      <FinalCTASection
        title="Plan your health checkup at home"
        lead="Enquire about the appropriate comprehensive checkup package for your needs."
        cta={{ label: "Enquire now", href: "/home-diagnostics/full-body-checkup-at-home/" }}
      />
    </PageShell>
  );
}

function VaccinationLayout() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", path: "/" }, { label: "Adult Vaccination" }]}
    >
      <CategoryHero
        eyebrow="Adult Vaccination"
        title="Vaccination at Home"
        lead="Protect yourself from preventable diseases with convenient adult vaccination services delivered at home by trained healthcare professionals."
        primaryCta={{ label: "Explore vaccines", href: "#vaccines" }}
        secondaryCta={{ label: "Flu vaccine", href: "/adult-vaccination/flu-vaccine/" }}
        trustItems={HERO_TRUST}
      />

      <Section
        id="vaccines"
        tone="band"
        eyebrow="Vaccinations at home"
        title="Adult vaccines available through home service"
        lead="The Svasth Homecare catalogue includes influenza, pneumococcal, HPV, shingles, typhoid, meningococcal and other adult vaccination options."
      >
        <FilterGrid items={VACCINES} placeholder="Search vaccines" />
      </Section>

      <Section
        eyebrow="Why vaccination matters"
        title="Preventive care that fits your routine"
      >
        <CardGrid cols={4}>
          <InfoCard
            icon={ShieldCheck}
            title="Preventive healthcare"
            description="Vaccination supports ongoing adult wellness and disease prevention."
          />
          <InfoCard
            icon={HeartHandshake}
            title="Comfort at home"
            description="Receive vaccination in a familiar setting without a clinic wait."
          />
          <InfoCard
            icon={Thermometer}
            title="Safety protocols"
            description="Vaccines are handled and administered following appropriate safety standards."
          />
          <InfoCard
            icon={BadgeCheck}
            title="Professional administration"
            description="Vaccinations are administered by trained healthcare professionals."
          />
        </CardGrid>
      </Section>

      <HowItWorksSection
        title="Simple, safe and convenient"
        steps={[
          {
            title: "Select a vaccine",
            description: "Browse the available adult vaccination options.",
          },
          {
            title: "Schedule a visit",
            description: "Choose your preferred appointment details.",
          },
          {
            title: "Home administration",
            description: "A trained professional visits your home to administer the vaccine.",
          },
          {
            title: "Post-vaccination guidance",
            description: "Receive guidance and support after the service.",
          },
        ]}
      />

      <FinalCTASection
        title="Stay protected without leaving home"
        lead="Enquire about adult vaccination and the vaccine that may be appropriate for you."
        cta={{ label: "Explore vaccines", href: "/adult-vaccination/" }}
      />
    </PageShell>
  );
}

function VaccineLayout({ type }) {
  const flu = type === "flu";
  const href = flu
    ? "/adult-vaccination/flu-vaccine/"
    : "/adult-vaccination/pneumonia-vaccine/";
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Adult Vaccination", path: "/adult-vaccination/" },
        { label: flu ? "Flu Vaccine" : "Pneumococcal Vaccine" },
      ]}
    >
      <CategoryHero
        eyebrow="Adult Vaccination"
        title={flu ? "Flu Vaccine at Home — 2026" : "Pneumococcal Vaccine"}
        lead={
          flu
            ? "Influenza, including strains such as H1N1 and H3N2, can significantly affect older adults and people with medical conditions. Get convenient at-home vaccination."
            : "Pneumococcal disease can lead to serious infections such as pneumonia and meningitis. Protect yourself with a convenient at-home vaccination service."
        }
        primaryCta={{ label: "Enquire now", href }}
        secondaryCta={{ label: "View all vaccines", href: "/adult-vaccination/" }}
        trustItems={HERO_TRUST}
      />

      <Section
        tone="band"
        eyebrow="About the vaccine"
        title="Professional vaccination at your doorstep"
      >
        <CardGrid cols={3}>
          <InfoCard
            icon={Syringe}
            title="At-home administration"
            description="Receive the vaccination at your home at a scheduled appointment."
          />
          <InfoCard
            icon={ShieldCheck}
            title="Proper handling"
            description="Vaccines are handled and administered using appropriate safety practices."
          />
          <InfoCard
            icon={HeartHandshake}
            title="Post-service guidance"
            description="Receive guidance after vaccination and support for the next steps."
          />
        </CardGrid>
      </Section>

      <Section eyebrow="Key benefits" title="Designed around convenience and safety">
        <CardGrid cols={4}>
          <InfoCard
            icon={MapPin}
            title="No clinic travel"
            description="A home visit reduces unnecessary travel and waiting."
          />
          <InfoCard
            icon={Clock3}
            title="Flexible scheduling"
            description="Choose an appointment time that works for you."
          />
          <InfoCard
            icon={BadgeCheck}
            title="Trained professionals"
            description="Vaccination is administered by qualified healthcare professionals."
          />
          <InfoCard
            icon={ShieldCheck}
            title="Safety-focused"
            description="Service delivery follows appropriate hygiene and vaccination protocols."
          />
        </CardGrid>
      </Section>

      <FAQSection
        title="Frequently asked questions"
        items={[
          {
            id: "vax-1",
            question: "Who should get this vaccine?",
            answer:
              "Vaccine suitability depends on age, medical history, previous vaccination and clinical guidance. Consult a healthcare professional for personalised advice.",
          },
          {
            id: "vax-2",
            question: "Can I get the vaccine at home?",
            answer:
              "Yes. Svasth Homecare offers adult vaccination services at home, subject to service availability.",
          },
          {
            id: "vax-3",
            question: "Is the vaccine price fixed?",
            answer:
              "Pricing and availability can vary by vaccine, city and current catalogue. Confirm the final details while booking.",
          },
        ]}
      />

      <FinalCTASection
        title="Book your vaccination at home"
        lead="Enquire about availability and let the team coordinate your home visit."
        cta={{ label: "Enquire now", href }}
      />
    </PageShell>
  );
}

function InsuranceLayout() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Insurance & TPA Tie-ups" },
      ]}
    >
      <CategoryHero
        eyebrow="Insurance & TPA"
        title="Insurance & TPA Tie-ups"
        lead="Understand how Svasth Homecare supports patients and families through insurance and third-party administrator processes for eligible homecare services."
        primaryCta={{ label: "Enquire now", href: "/insurance-tpa-tieups/" }}
        secondaryCta={{ label: "Talk to the care team", href: "/insurance-tpa-tieups/" }}
        trustItems={HERO_TRUST}
      />

      <Section
        tone="band"
        eyebrow="Support"
        title="A simpler path through healthcare coordination"
      >
        <CardGrid cols={4}>
          <InfoCard
            icon={ClipboardCheck}
            title="Service documentation"
            description="Get guidance on the information required for service coordination."
          />
          <InfoCard
            icon={ShieldCheck}
            title="Eligibility support"
            description="Confirm applicable coverage and requirements with your insurer or TPA."
          />
          <InfoCard
            icon={UserRound}
            title="Patient assistance"
            description="A care team can help explain the next steps in the process."
          />
          <InfoCard
            icon={HeartHandshake}
            title="Care continuity"
            description="Keep the focus on care while administrative requirements are coordinated."
          />
        </CardGrid>
      </Section>

      <HowItWorksSection
        title="From enquiry to service"
        steps={[
          {
            title: "Share your requirement",
            description: "Tell the team what homecare service you need.",
          },
          {
            title: "Confirm insurer / TPA details",
            description: "Provide the relevant insurance or TPA information.",
          },
          {
            title: "Review eligibility and documents",
            description: "Review what is covered and what documentation is needed.",
          },
          {
            title: "Coordinate the home service",
            description: "Proceed with the eligible homecare service.",
          },
        ]}
      />

      <FinalCTASection
        title="Need help with insurance or TPA coordination?"
        lead="Share your service requirement and the team can guide you through the next steps."
        cta={{ label: "Enquire now", href: "/insurance-tpa-tieups/" }}
      />
    </PageShell>
  );
}

function ProcedureLayout({ which }) {
  const config = {
    nebulization: {
      title: "Nebulization at Home",
      lead: "Home nebulization support for prescribed respiratory care.",
      slug: "nebulization-at-home",
    },
    injection: {
      title: "Injection Administration at Home",
      lead: "Convenient administration of prescribed injections at home by trained professionals.",
      slug: "injection-at-home",
    },
    vitals: {
      title: "Vital Monitoring at Home",
      lead: "Home monitoring of essential clinical observations for appropriate care plans.",
      slug: "vital-monitoring-at-home",
    },
  }[which];
  const href = `/procedures/${config.slug}/`;

  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Home Diagnostics", path: "/home-diagnostics/" },
        { label: config.title },
      ]}
    >
      <CategoryHero
        eyebrow="Home procedure"
        title={config.title}
        lead={config.lead}
        primaryCta={{ label: "Enquire now", href }}
        secondaryCta={{ label: "View all services", href: "/home-diagnostics/" }}
        trustItems={HERO_TRUST}
      />

      <Section tone="band" eyebrow="Service" title="Professional support at home">
        <CardGrid cols={4}>
          <InfoCard
            icon={BadgeCheck}
            title="Trained professionals"
            description="The service is delivered by trained healthcare professionals following appropriate protocols."
          />
          <InfoCard
            icon={ShieldCheck}
            title="Safety first"
            description="Patient safety, hygiene and appropriate procedure practices are prioritised."
          />
          <InfoCard
            icon={MapPin}
            title="At your doorstep"
            description="Receive the service in the comfort of your home."
          />
          <InfoCard
            icon={HeartHandshake}
            title="Patient-focused care"
            description="The care experience is designed around comfort and clear communication."
          />
        </CardGrid>
      </Section>

      <HowItWorksSection
        title="Simple, safe and convenient"
        steps={[
          {
            title: "Share the requirement",
            description: "Tell the team what procedure or monitoring support is needed.",
          },
          {
            title: "Confirm suitability",
            description: "The service requirement and appointment details are reviewed.",
          },
          {
            title: "Professional home visit",
            description: "A trained professional visits your home at the scheduled time.",
          },
          {
            title: "Follow-up guidance",
            description: "Receive appropriate guidance after the service.",
          },
        ]}
      />

      <FinalCTASection
        title="Need a home procedure?"
        lead="Enquire about availability and let the care team coordinate your home visit."
        cta={{ label: "Enquire now", href }}
      />
    </PageShell>
  );
}

function TestimonialsLayout() {
  const quotes = [
    "The home-based model made it easier for our family to coordinate care without repeated trips to a facility.",
    "The team was professional, organised and focused on making the home visit comfortable.",
    "Having diagnostics and preventive services available at home made routine healthcare much easier to manage.",
  ];
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", path: "/" }, { label: "Testimonials" }]}
    >
      <CategoryHero
        eyebrow="Testimonials & case studies"
        title="Patient experiences with Svasth Homecare"
        lead="Patient and family experiences, service stories and the trust built through home-based healthcare."
        primaryCta={{ label: "Explore our services", href: "/home-diagnostics/" }}
        secondaryCta={{ label: "Medical equipment", href: "/medical-equipment/" }}
        trustItems={HERO_TRUST}
      />

      <Section tone="band" eyebrow="Testimonials" title="What patients value">
        <CardGrid cols={3}>
          {quotes.map((quote, index) => (
            <QuoteCard
              key={index}
              quote={quote}
              author="Svasth Homecare patient experience"
            />
          ))}
        </CardGrid>
      </Section>

      <Section eyebrow="Across our services" title="Care that comes home">
        <CardGrid cols={3}>
          <LinkCard
            icon={Hospital}
            title="Medical Equipment"
            description="Equipment for purchase or rental to support care at home."
            href="/medical-equipment/"
          />
          <LinkCard
            icon={Microscope}
            title="Home Diagnostics"
            description="Tests, advanced diagnostics and health checkups at home."
            href="/home-diagnostics/"
          />
          <LinkCard
            icon={Syringe}
            title="Adult Vaccination"
            description="Convenient preventive vaccination services at home."
            href="/adult-vaccination/"
          />
        </CardGrid>
      </Section>

      <FinalCTASection
        title="Start your own homecare journey"
        lead="Explore the service that fits your current healthcare need."
        cta={{ label: "Explore services", href: "/home-diagnostics/" }}
      />
    </PageShell>
  );
}

function NotFound() {
  return (
    <PageShell breadcrumbs={[{ label: "Home", path: "/" }, { label: "Not found" }]}>
      <Section
        eyebrow="Page not found"
        title="We couldn't find that page"
        lead="Use the navigation to continue exploring Svasth Homecare services."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/home-diagnostics/" className="btn btn-primary h-12 px-6">
            Home Diagnostics
          </Link>
          <Link href="/medical-equipment/" className="btn btn-secondary h-12 px-6">
            Medical Equipment
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}

/* ----------------------------------------------------------------------------
 * Public API — one renderer, one data map. Consumed by the 14 nested route
 * files and by index.jsx's slug router (via PAGE_BY_SLUG).
 * ------------------------------------------------------------------------- */

export function PersonBPage({ data }) {
  if (!data) return <NotFound />;
  switch (data.kind) {
    case "equipment":
      return <EquipmentLayout mode={data.mode} />;
    case "diagnostics":
      return <DiagnosticsLayout />;
    case "bloodTest":
      return <BloodTestLayout />;
    case "fullBodyCheckup":
      return <FullBodyLayout />;
    case "vaccination":
      return <VaccinationLayout />;
    case "vaccine":
      return <VaccineLayout type={data.type} />;
    case "insurance":
      return <InsuranceLayout />;
    case "procedure":
      return <ProcedureLayout which={data.which} />;
    case "testimonials":
      return <TestimonialsLayout />;
    default:
      return <NotFound />;
  }
}

export const PAGE_DATA = {
  medicalEquipment: { kind: "equipment", mode: "all" },
  rentEquipment: { kind: "equipment", mode: "rent" },
  buyEquipment: { kind: "equipment", mode: "buy" },
  homeDiagnostics: { kind: "diagnostics" },
  bloodTest: { kind: "bloodTest" },
  fullBodyCheckup: { kind: "fullBodyCheckup" },
  adultVaccination: { kind: "vaccination" },
  fluVaccine: { kind: "vaccine", type: "flu" },
  pneumoniaVaccine: { kind: "vaccine", type: "pneumonia" },
  insuranceTPA: { kind: "insurance" },
  nebulization: { kind: "procedure", which: "nebulization" },
  injection: { kind: "procedure", which: "injection" },
  vitalMonitoring: { kind: "procedure", which: "vitals" },
  testimonials: { kind: "testimonials" },
};

// Slug (as produced by pages/[...slug].jsx → index.jsx) → page data.
export const PAGE_BY_SLUG = {
  "medical-equipment": PAGE_DATA.medicalEquipment,
  "medical-equipment/rent": PAGE_DATA.rentEquipment,
  "medical-equipment/buy": PAGE_DATA.buyEquipment,
  "home-diagnostics": PAGE_DATA.homeDiagnostics,
  "home-diagnostics/blood-test-at-home": PAGE_DATA.bloodTest,
  "home-diagnostics/full-body-checkup-at-home": PAGE_DATA.fullBodyCheckup,
  "adult-vaccination": PAGE_DATA.adultVaccination,
  "adult-vaccination/flu-vaccine": PAGE_DATA.fluVaccine,
  "adult-vaccination/pneumonia-vaccine": PAGE_DATA.pneumoniaVaccine,
  "insurance-tpa-tieups": PAGE_DATA.insuranceTPA,
  "procedures/nebulization-at-home": PAGE_DATA.nebulization,
  "procedures/injection-at-home": PAGE_DATA.injection,
  "procedures/vital-monitoring-at-home": PAGE_DATA.vitalMonitoring,
  testimonials: PAGE_DATA.testimonials,
};

// shared.jsx is itself a file under pages/, so Next treats it as a route and
// requires a default-exported component. It renders nothing on purpose.
export default function Shared() {
  return null;
}
