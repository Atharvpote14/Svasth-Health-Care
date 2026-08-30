import Link from "next/link";
import { useMemo, useState } from "react";
import {
    ArrowRight,
    BadgeCheck,
    Building2,
    CalendarDays,
    CheckCircle2,
    ClipboardCheck,
    Clock3,
    FileText,
    Globe2,
    Handshake,
    HeartHandshake,
    HeartPulse,
    Hospital,
    Landmark,
    MapPin,
    Megaphone,
    Microscope,
    Phone,
    Search,
    ShieldCheck,
    Stethoscope,
    Users,
    UserRound,
    BriefcaseBusiness,
    Newspaper,
    Award,
    Accessibility,
    ChevronRight,
} from "lucide-react";

import CategoryHero from "../care-services/sections/CategoryHero";
import FAQSection from "../care-services/sections/FAQSection";
import FinalCTASection from "../care-services/sections/FinalCTASection";
import Breadcrumbs from "../care-services/utilities/Breadcrumbs";
import Footer from "../footer";

import {
    FOOTER_COLUMNS,
    FOOTER_COPYRIGHT,
    NAV_LINKS,
    PHONE_HREF,
    PHONE_NUMBER,
    SITE_NAME,
} from "../../lib/site";

/* ============================================================================
   CONSTANTS
============================================================================ */

const HERO_TRUST = [
    {
        icon: BadgeCheck,
        label: "Patient-focused support",
    },
    {
        icon: ShieldCheck,
        label: "Safety-first approach",
    },
    {
        icon: HeartHandshake,
        label: "Coordinated care",
    },
];

const CITY_LIST = [
    {
        name: "Pune",
        slug: "pune",
        description:
            "Home healthcare support designed around patients and families in Pune.",
    },
    {
        name: "Hyderabad",
        slug: "hyderabad",
        description:
            "Convenient and coordinated home healthcare support in Hyderabad.",
    },
    {
        name: "Kolkata",
        slug: "kolkata",
        description:
            "Patient-focused home healthcare services for families in Kolkata.",
    },
    {
        name: "Delhi",
        slug: "delhi",
        description:
            "Professional home-based healthcare support across Delhi.",
    },
    {
        name: "Chennai",
        slug: "chennai",
        description:
            "Healthcare services designed for comfort and continuity of care.",
    },
    {
        name: "Bangalore",
        slug: "bangalore",
        description:
            "Flexible home healthcare coordination for patients and families.",
    },
    {
        name: "Madurai",
        slug: "madurai",
        description:
            "Convenient home healthcare services designed around patient needs.",
    },
    {
        name: "Mysore",
        slug: "mysore",
        description:
            "Support for patients and caregivers seeking healthcare at home.",
    },
    {
        name: "Indore",
        slug: "indore",
        description:
            "Professional healthcare coordination closer to where patients live.",
    },
    {
        name: "Mumbai",
        slug: "mumbai",
        description:
            "Home healthcare options for patients and families across Mumbai.",
    },
    {
        name: "Guwahati",
        slug: "guwahati",
        description:
            "Convenient home-based healthcare support for families in Guwahati.",
    },
];
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

                <nav className="navbar flex items-center" aria-label="Primary">
                    <ul className="navbar-list flex">
                        {NAV_LINKS.map((item) => (
                            <li
                                className="navbar-item"
                                key={item.path || item.label}
                            >
                                <Link href={item.path}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
/* ============================================================================
   PAGE SHELL
============================================================================ */

export function PageShell({ breadcrumbs = [], children }) {
    return (
        <div className="care-theme min-h-screen bg-white text-[var(--care-ink)]">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
            >
                Skip to main content
            </a>

            <SiteHeader />

            <main id="main-content">
                {breadcrumbs.length > 0 && (
                    <div className="mx-auto max-w-6xl px-6 pb-2 pt-8">
                        <Breadcrumbs items={breadcrumbs} />
                    </div>
                )}

                {children}
            </main>

            <Footer
                columns={FOOTER_COLUMNS}
                copyright={FOOTER_COPYRIGHT}
            />
        </div>
    );
}
/* ============================================================================
   REUSABLE COMPONENTS
============================================================================ */

export function Section({
    id,
    eyebrow,
    title,
    lead,
    tone = "white",
    children,
}) {
    const background = tone === "ivory" ? "care-band" : "bg-white";

    return (
        <section
            id={id}
            className={`${background} py-14 md:py-20 ${id ? "scroll-mt-24" : ""}`}
        >
            <div className="mx-auto max-w-6xl px-6">
                {(eyebrow || title || lead) && (
                    <div className="mb-10 max-w-3xl">
                        {eyebrow && (
                            <p className="care-eyebrow mb-3">
                                {eyebrow}
                            </p>
                        )}

                        {title && (
                            <h2 className="care-h2 font-display">
                                {title}
                            </h2>
                        )}

                        {lead && (
                            <p className="care-lead mt-4">
                                {lead}
                            </p>
                        )}
                    </div>
                )}

                {children}
            </div>
        </section>
    );
}

export function CardGrid({ cols = 3, children }) {
    const gridClass =
        cols === 2
            ? "md:grid-cols-2"
            : cols === 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-2 lg:grid-cols-3";

    return (
        <div className={`grid grid-cols-1 gap-5 ${gridClass}`}>
            {children}
        </div>
    );
}

export function InfoCard({
    icon: Icon = ShieldCheck,
    title,
    description,
}) {
    return (
        <article className="care-card p-6">
            <div className="care-plate">
                <Icon size={21} strokeWidth={1.8} />
            </div>

            <h3 className="care-h3 mt-5 font-display">
                {title}
            </h3>

            <p className="mt-3 text-[15px] leading-7 text-[var(--care-mute)]">
                {description}
            </p>
        </article>
    );
}

export function LinkCard({
    icon: Icon = ArrowRight,
    title,
    description,
    href,
    cta = "Learn more",
}) {
    return (
        <article className="care-card group relative flex min-h-[220px] flex-col p-6">
            <div className="care-plate">
                <Icon size={21} strokeWidth={1.8} />
            </div>

            <h3 className="care-h3 mt-5 font-display">
                <Link
                    href={href}
                    className="after:absolute after:inset-0"
                >
                    {title}
                </Link>
            </h3>

            <p className="mt-3 text-[15px] leading-7 text-[var(--care-mute)]">
                {description}
            </p>

            <div className="care-label mt-auto flex items-center gap-2 pt-6 text-primary">
                {cta}

                <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                />
            </div>
        </article>
    );
}

/* ============================================================================
   CITY SELECTOR
============================================================================ */

export function CitySelector() {
    const [query, setQuery] = useState("");

    const cities = useMemo(() => {
        const search = query.toLowerCase().trim();

        if (!search) {
            return CITY_LIST;
        }

        return CITY_LIST.filter((city) =>
            city.name.toLowerCase().includes(search)
        );
    }, [query]);

    return (
        <div>
            <div className="mb-8 max-w-xl">
                <label className="flex h-12 items-center gap-3 rounded-xl border border-[var(--care-rule-strong)] bg-white px-4">
                    <Search size={18} />

                    <input
                        type="text"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search your city"
                        className="w-full bg-transparent text-sm outline-none"
                    />
                </label>
            </div>

            <CardGrid cols={3}>
                {cities.map((city) => (
                    <LinkCard
                        key={city.slug}
                        icon={MapPin}
                        title={city.name}
                        description={city.description}
                        href={`/locations/${city.slug}/`}
                        cta="View city services"
                    />
                ))}
            </CardGrid>

            {cities.length === 0 && (
                <div className="care-card p-8 text-center text-[var(--care-mute)]">
                    We could not find that city. Please try another location.
                </div>
            )}
        </div>
    );
}

/* ============================================================================
   ABOUT PAGE
============================================================================ */
function AboutLayout() {
    return (
        <PageShell
            breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "About Us" },
            ]}
        >
            <CategoryHero
                eyebrow="About Us"
                title="Healthcare support designed around life at home"
                lead="Svasth Homecare is building a more connected approach to home healthcare by making services, information and care coordination easier for patients and families."
                primaryCta={{
                    label: "Explore our services",
                    href: "/long-term-care/",
                }}
                secondaryCta={{
                    label: "Find your city",
                    href: "#locations",
                }}
                trustItems={HERO_TRUST}
            />

            <Section
                eyebrow="Our purpose"
                title="Making care easier to access beyond hospital walls"
                lead="Patients may need healthcare support before, after or instead of a hospital visit. Our goal is to help families understand and access appropriate services in the comfort of home."
            >
                <CardGrid cols={3}>
                    <InfoCard
                        icon={HeartPulse}
                        title="Care closer to home"
                        description="Services designed around comfort, convenience and the practical needs of patients."
                    />

                    <InfoCard
                        icon={Users}
                        title="Built around families"
                        description="We aim to make healthcare coordination clearer and easier for patients and caregivers."
                    />

                    <InfoCard
                        icon={ShieldCheck}
                        title="Trust and responsibility"
                        description="A patient-focused approach to communication, coordination and service experience."
                    />
                </CardGrid>
            </Section>

            <Section
                tone="ivory"
                eyebrow="Our approach"
                title="A more connected healthcare journey"
            >
                <CardGrid cols={4}>
                    <InfoCard
                        icon={Search}
                        title="Discover"
                        description="Explore services relevant to your healthcare requirement."
                    />

                    <InfoCard
                        icon={ClipboardCheck}
                        title="Understand"
                        description="Get clearer information about services and next steps."
                    />

                    <InfoCard
                        icon={CalendarDays}
                        title="Coordinate"
                        description="Plan appointments and service requirements more conveniently."
                    />

                    <InfoCard
                        icon={HeartHandshake}
                        title="Continue care"
                        description="Support a smoother journey with appropriate ongoing services."
                    />
                </CardGrid>
            </Section>

            <Section
                eyebrow="Our values"
                title="The principles behind our work"
            >
                <CardGrid cols={2}>
                    <InfoCard
                        icon={Accessibility}
                        title="Accessibility"
                        description="Healthcare information and support should be easier to understand and access."
                    />

                    <InfoCard
                        icon={ShieldCheck}
                        title="Responsibility"
                        description="We believe healthcare coordination should be careful, transparent and patient-focused."
                    />

                    <InfoCard
                        icon={Users}
                        title="Respect"
                        description="Patients, families and healthcare professionals deserve clear and respectful communication."
                    />

                    <InfoCard
                        icon={Globe2}
                        title="Continuous improvement"
                        description="We aim to improve experiences through better technology, systems and service design."
                    />
                </CardGrid>
            </Section>

            <Section
                id="locations"
                tone="ivory"
                eyebrow="Our locations"
                title="Find home healthcare support in your city"
                lead="Explore local healthcare pages designed around the needs of patients and families in each city."
            >
                <CitySelector />
            </Section>

            <FinalCTASection
                title="Explore healthcare support that comes closer to you"
                lead="Discover home healthcare services designed around your needs."
                cta={{
                    label: "Explore services",
                    href: "/long-term-care/",
                }}
            />
        </PageShell>
    );
}

/* ============================================================================
   PATIENT CHARTER
============================================================================ */

function PatientCharterLayout() {
    const commitments = [
        {
            icon: UserRound,
            title: "Respect and dignity",
            description:
                "Patients should be treated with respect, consideration and appropriate privacy throughout their care journey.",
        },
        {
            icon: FileText,
            title: "Clear information",
            description:
                "Patients should receive understandable information about services, processes and next steps.",
        },
        {
            icon: ShieldCheck,
            title: "Privacy and confidentiality",
            description:
                "Personal information should be handled responsibly and with appropriate safeguards.",
        },
        {
            icon: HeartHandshake,
            title: "Patient participation",
            description:
                "Patients and families should be able to ask questions and participate in relevant decisions.",
        },
        {
            icon: Accessibility,
            title: "Accessible support",
            description:
                "We aim to make services and healthcare information easier for patients and caregivers to understand.",
        },
        {
            icon: ClipboardCheck,
            title: "Feedback and concerns",
            description:
                "Patients should have a clear way to share feedback or raise concerns about their experience.",
        },
    ];

    return (
        <PageShell
            breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about/" },
                { label: "Patient Charter" },
            ]}
        >
            <CategoryHero
                eyebrow="Patient Charter"
                title="Our commitment to patients and families"
                lead="This charter describes the principles that guide how we aim to communicate, coordinate services and support patients throughout their healthcare journey."
                primaryCta={{
                    label: "Contact the care team",
                    href: PHONE_HREF,
                }}
                secondaryCta={{
                    label: "About Svasth",
                    href: "/about/",
                }}
                trustItems={HERO_TRUST}
            />

            <Section
                eyebrow="Our commitment"
                title="What patients can expect"
            >
                <CardGrid cols={3}>
                    {commitments.map((item) => (
                        <InfoCard
                            key={item.title}
                            {...item}
                        />
                    ))}
                </CardGrid>
            </Section>

            <Section
                tone="ivory"
                eyebrow="Working together"
                title="Helping us support you better"
            >
                <CardGrid cols={3}>
                    <InfoCard
                        icon={CheckCircle2}
                        title="Share accurate information"
                        description="Provide relevant and correct information about the patient's service requirements."
                    />

                    <InfoCard
                        icon={Megaphone}
                        title="Ask questions"
                        description="Ask for clarification whenever information or a process is unclear."
                    />

                    <InfoCard
                        icon={Clock3}
                        title="Communicate changes"
                        description="Let the care team know about important changes that may affect a scheduled service."
                    />
                </CardGrid>
            </Section>

            <FAQSection
                title="Frequently asked questions"
                items={[
                    {
                        id: "charter-1",
                        question: "How can I share feedback?",
                        answer:
                            "You can contact the care team and share feedback about your service experience or any area that needs attention.",
                    },
                    {
                        id: "charter-2",
                        question: "Can a family member communicate with the care team?",
                        answer:
                            "Yes. Subject to appropriate consent and privacy considerations, family members and caregivers may participate in service coordination.",
                    },
                    {
                        id: "charter-3",
                        question: "What if I have a concern about a service?",
                        answer:
                            "Contact the care team as soon as possible so the concern can be understood and addressed appropriately.",
                    },
                ]}
            />

            <FinalCTASection
                title="Questions about your care experience?"
                lead="Our team is available to help you understand the next steps."
                cta={{
                    label: "Contact us",
                    href: PHONE_HREF,
                }}
            />
        </PageShell>
    );
}

/* ============================================================================
   CAREERS
============================================================================ */
function CareersLayout() {
    const benefits = [
        {
            icon: HeartHandshake,
            title: "Meaningful work",
            description:
                "Contribute to healthcare experiences that can make a real difference to patients and families.",
        },
        {
            icon: Users,
            title: "Collaborative teams",
            description:
                "Work with people across healthcare, technology, operations and service coordination.",
        },
        {
            icon: Award,
            title: "Learn and grow",
            description:
                "Build new skills as we continue developing our services and healthcare platform.",
        },
    ];

    return (
        <PageShell
            breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "Careers" },
            ]}
        >
            <CategoryHero
                eyebrow="Careers"
                title="Build the future of healthcare support with us"
                lead="We are building a team that combines healthcare understanding, technology and thoughtful service design to improve the experience of care."
                primaryCta={{
                    label: "Explore opportunities",
                    href: "#opportunities",
                }}
                secondaryCta={{
                    label: "About us",
                    href: "/about/",
                }}
                trustItems={HERO_TRUST}
            />

            <Section
                eyebrow="Why join us"
                title="Work on challenges that matter"
            >
                <CardGrid cols={3}>
                    {benefits.map((item) => (
                        <InfoCard
                            key={item.title}
                            {...item}
                        />
                    ))}
                </CardGrid>
            </Section>

            <Section
                id="opportunities"
                tone="ivory"
                eyebrow="Opportunities"
                title="Growing with our team"
                lead="As the organisation grows, opportunities may become available across technology, operations, care coordination, partnerships and business development."
            >
                <CardGrid cols={3}>
                    <InfoCard
                        icon={Building2}
                        title="Operations"
                        description="Help design and improve the systems behind reliable service delivery."
                    />

                    <InfoCard
                        icon={BriefcaseBusiness}
                        title="Business and partnerships"
                        description="Build relationships and help expand access to home healthcare services."
                    />

                    <InfoCard
                        icon={Globe2}
                        title="Technology"
                        description="Build digital experiences that make healthcare information and coordination easier."
                    />
                </CardGrid>
            </Section>

            <FinalCTASection
                title="Interested in working with us?"
                lead="Share your interest and tell us how you could contribute to our growing team."
                cta={{
                    label: "Contact us",
                    href: `mailto:careers@svasth.com`,
                }}
            />
        </PageShell>
    );
}

/* ============================================================================
   PARTNER
============================================================================ */

function PartnerLayout() {
    return (
        <PageShell
            breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "Partner With Us" },
            ]}
        >
            <CategoryHero
                eyebrow="Partner with Svasth"
                title="Build better healthcare experiences together"
                lead="We are looking to collaborate with organisations and professionals who share our goal of making healthcare support more accessible and better coordinated."
                primaryCta={{
                    label: "Start a conversation",
                    href: "#partner-enquiry",
                }}
                secondaryCta={{
                    label: "About us",
                    href: "/about/",
                }}
                trustItems={HERO_TRUST}
            />

            <Section
                eyebrow="Partnership opportunities"
                title="Who we work with"
            >
                <CardGrid cols={3}>
                    <InfoCard
                        icon={Hospital}
                        title="Healthcare organisations"
                        description="Explore service and referral collaborations that improve continuity of care."
                    />

                    <InfoCard
                        icon={Stethoscope}
                        title="Healthcare professionals"
                        description="Work with a growing healthcare ecosystem focused on patient needs."
                    />

                    <InfoCard
                        icon={Building2}
                        title="Businesses and institutions"
                        description="Explore employee healthcare and corporate wellness opportunities."
                    />

                    <InfoCard
                        icon={Handshake}
                        title="Strategic partners"
                        description="Collaborate on technology, operations and healthcare innovation."
                    />

                    <InfoCard
                        icon={Landmark}
                        title="Local networks"
                        description="Help strengthen healthcare access through local service ecosystems."
                    />

                    <InfoCard
                        icon={BriefcaseBusiness}
                        title="Business expansion"
                        description="Discuss opportunities to build and expand responsible healthcare services."
                    />
                </CardGrid>
            </Section>

            <Section
                id="partner-enquiry"
                tone="ivory"
                eyebrow="Start a conversation"
                title="Interested in partnering with us?"
                lead="Tell us about your organisation and how you would like to work together."
            >
                <div className="care-card max-w-3xl p-8">
                    <div className="flex items-start gap-4">
                        <div className="care-plate">
                            <Phone size={21} />
                        </div>

                        <div>
                            <h3 className="care-h3 font-display">
                                Let's explore the opportunity
                            </h3>

                            <p className="mt-3 leading-7 text-[var(--care-mute)]">
                                Our team can discuss potential collaboration based on your
                                organisation, service area and requirements.
                            </p>

                            <a
                                href={PHONE_HREF}
                                className="btn btn-primary mt-6 inline-flex"
                            >
                                <Phone size={16} />
                                {PHONE_NUMBER}
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </PageShell>
    );
}

/* ============================================================================
   NEWS & MEDIA
============================================================================ */

function NewsMediaLayout() {
    return (
        <PageShell
            breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "News & Media" },
            ]}
        >
            <CategoryHero
                eyebrow="News & Media"
                title="Updates from Svasth Homecare"
                lead="Follow our journey as we build a more connected and accessible approach to home healthcare."
                primaryCta={{
                    label: "Explore our services",
                    href: "/long-term-care/",
                }}
                secondaryCta={{
                    label: "About us",
                    href: "/about/",
                }}
                trustItems={HERO_TRUST}
            />

            <Section
                eyebrow="Latest updates"
                title="News, insights and announcements"
                lead="This space will feature company updates, healthcare insights, service announcements and important developments."
            >
                <CardGrid cols={3}>
                    <InfoCard
                        icon={Newspaper}
                        title="Company updates"
                        description="Announcements and important milestones from our organisation."
                    />

                    <InfoCard
                        icon={HeartPulse}
                        title="Healthcare insights"
                        description="Useful information and perspectives related to healthcare and home-based support."
                    />

                    <InfoCard
                        icon={Megaphone}
                        title="Media enquiries"
                        description="Information for journalists and media organisations seeking to connect with our team."
                    />
                </CardGrid>
            </Section>

            <Section tone="ivory">
                <div className="care-card p-8 md:p-10">
                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div className="max-w-2xl">
                            <p className="care-eyebrow mb-3">
                                Media enquiries
                            </p>

                            <h2 className="care-h2 font-display">
                                Connect with our communications team
                            </h2>

                            <p className="care-lead mt-4">
                                For media-related enquiries, interviews or company information,
                                please contact our team.
                            </p>
                        </div>

                        <a
                            href="mailto:media@svasth.com"
                            className="btn btn-primary inline-flex shrink-0"
                        >
                            Contact media team
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </Section>
        </PageShell>
    );
}

/* ============================================================================
   PUNE CITY HUB
============================================================================ */
function PuneLayout() {
    return (
        <PageShell
            breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "Locations", path: "/locations/pune/" },
                { label: "Pune" },
            ]}
        >
            <CategoryHero
                eyebrow="Svasth Homecare in Pune"
                title="Healthcare support designed around life in Pune"
                lead="Explore home healthcare services and support options for patients and families in Pune."
                primaryCta={{
                    label: "Explore Pune services",
                    href: "#services",
                }}
                secondaryCta={{
                    label: "Contact the care team",
                    href: PHONE_HREF,
                }}
                trustItems={HERO_TRUST}
            />

            <Section
                id="services"
                eyebrow="Services in Pune"
                title="Explore healthcare support at home"
                lead="Choose the service area most relevant to the patient's requirement."
            >
                <CardGrid cols={2}>
                    <LinkCard
                        icon={Users}
                        title="Nurse at Home in Pune"
                        description="Explore home nursing and related long-term care support."
                        href="/locations/pune/nurse-at-home/"
                        cta="Explore nursing support"
                    />

                    <LinkCard
                        icon={HeartPulse}
                        title="ICU at Home in Pune"
                        description="Learn about coordinated intensive care support in a home setting."
                        href="/locations/pune/icu-at-home/"
                        cta="Explore ICU support"
                    />

                    <LinkCard
                        icon={Stethoscope}
                        title="Doctor at Home in Pune"
                        description="Explore home visit and doctor consultation support."
                        href="/locations/pune/doctor-at-home/"
                        cta="Explore doctor visits"
                    />

                    <LinkCard
                        icon={Microscope}
                        title="Home Diagnostics in Pune"
                        description="Explore diagnostic and testing options designed around home convenience."
                        href="/locations/pune/home-diagnostics/"
                        cta="Explore diagnostics"
                    />
                </CardGrid>
            </Section>

            <Section
                tone="ivory"
                eyebrow="For Pune families"
                title="A local page with a connected healthcare journey"
            >
                <CardGrid cols={3}>
                    <InfoCard
                        icon={MapPin}
                        title="Local information"
                        description="Service information designed specifically for patients and families searching in Pune."
                    />

                    <InfoCard
                        icon={Phone}
                        title="Clear next steps"
                        description="Contact the care team to discuss service availability and requirements."
                    />

                    <InfoCard
                        icon={HeartHandshake}
                        title="Coordinated support"
                        description="Explore connected services based on the patient's individual needs."
                    />
                </CardGrid>
            </Section>

            <FAQSection
                title="Frequently asked questions about home healthcare in Pune"
                items={[
                    {
                        id: "pune-1",
                        question: "Which home healthcare services are available in Pune?",
                        answer:
                            "The Pune location page provides information about nursing, ICU-related support, doctor home visits and home diagnostics.",
                    },
                    {
                        id: "pune-2",
                        question: "How can I check whether a service is available?",
                        answer:
                            "Contact the care team with your location and service requirement to discuss the next steps.",
                    },
                    {
                        id: "pune-3",
                        question: "Can I explore more than one service?",
                        answer:
                            "Yes. You can explore multiple service pages depending on the patient's healthcare requirement.",
                    },
                ]}
            />

            <FinalCTASection
                title="Looking for healthcare support in Pune?"
                lead="Explore the relevant service or contact our team to discuss your requirement."
                cta={{
                    label: "Contact the care team",
                    href: PHONE_HREF,
                }}
            />
        </PageShell>
    );
}

/* ============================================================================
   PUNE SERVICE SUBPAGES
============================================================================ */

function PuneServiceLayout({
    title,
    eyebrow,
    lead,
    serviceHref,
    serviceName,
    icon: Icon,
    faqItems,
}) {
    return (
        <PageShell
            breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "Pune", path: "/locations/pune/" },
                { label: title },
            ]}
        >
            <CategoryHero
                eyebrow={eyebrow}
                title={title}
                lead={lead}
                primaryCta={{
                    label: "Contact the care team",
                    href: PHONE_HREF,
                }}
                secondaryCta={{
                    label: `Explore ${serviceName}`,
                    href: serviceHref,
                }}
                trustItems={HERO_TRUST}
            />

            <Section
                eyebrow="How we help"
                title={`Understanding ${serviceName} in Pune`}
            >
                <CardGrid cols={3}>
                    <InfoCard
                        icon={Icon}
                        title="Understand your requirement"
                        description="Start by understanding the patient's needs and the type of support being considered."
                    />

                    <InfoCard
                        icon={Phone}
                        title="Discuss the next steps"
                        description="Contact the care team to discuss service requirements and availability."
                    />

                    <InfoCard
                        icon={CalendarDays}
                        title="Coordinate care"
                        description="Plan the appropriate next steps based on the patient's individual situation."
                    />
                </CardGrid>
            </Section>

            <Section
                tone="ivory"
                eyebrow="Why a local page matters"
                title="Information designed for patients and families in Pune"
                lead="This page connects local searches with the relevant healthcare service while helping families understand where to go next."
            >
                <LinkCard
                    icon={ChevronRight}
                    title={`Explore the main ${serviceName} service`}
                    description="Visit the main service page for broader information and service details."
                    href={serviceHref}
                    cta="Visit service page"
                />
            </Section>

            <FAQSection
                title={`Frequently asked questions about ${serviceName} in Pune`}
                items={faqItems}
            />

            <FinalCTASection
                title={`Need help with ${serviceName} in Pune?`}
                lead="Contact the care team to discuss the patient's requirement and the next steps."
                cta={{
                    label: "Contact the care team",
                    href: PHONE_HREF,
                }}
            />
        </PageShell>
    );
}

function PuneNurseAtHomeLayout() {
    return (
        <PuneServiceLayout
            eyebrow="Home nursing in Pune"
            title="Nurse at Home in Pune"
            lead="Explore information about home nursing and healthcare support designed around the needs of patients and families in Pune."
            serviceName="Nurse at Home"
            serviceHref="/long-term-care/nurse-at-home/"
            icon={Users}
            faqItems={[
                {
                    id: "nurse-1",
                    question: "How can I enquire about nursing support in Pune?",
                    answer:
                        "Contact the care team and share the patient's location and service requirement.",
                },
                {
                    id: "nurse-2",
                    question: "Can families discuss their care requirements before booking?",
                    answer:
                        "Yes. The care team can help explain the available service pathway and next steps.",
                },
            ]}
        />
    );
}

function PuneICUAtHomeLayout() {
    return (
        <PuneServiceLayout
            eyebrow="Critical care support in Pune"
            title="ICU at Home in Pune"
            lead="Explore information about coordinated intensive care support and relevant healthcare services for patients requiring complex care at home."
            serviceName="ICU at Home"
            serviceHref="/long-term-care/icu-at-home/"
            icon={HeartPulse}
            faqItems={[
                {
                    id: "icu-1",
                    question: "How can I discuss ICU-related home care requirements?",
                    answer:
                        "Contact the care team with the patient's healthcare requirement so the appropriate next steps can be discussed.",
                },
                {
                    id: "icu-2",
                    question: "Is every patient suitable for intensive care at home?",
                    answer:
                        "Suitability depends on individual clinical requirements and should be discussed with appropriate healthcare professionals.",
                },
            ]}
        />
    );
}

function PuneDoctorAtHomeLayout() {
    return (
        <PuneServiceLayout
            eyebrow="Doctor visits in Pune"
            title="Doctor at Home in Pune"
            lead="Explore information about doctor home visits and healthcare support designed to make access to appropriate care more convenient."
            serviceName="Doctor at Home"
            serviceHref="/home-visit/doctor-at-home/"
            icon={Stethoscope}
            faqItems={[
                {
                    id: "doctor-1",
                    question: "How can I enquire about a doctor home visit?",
                    answer:
                        "Contact the care team with the patient's location and consultation requirement.",
                },
                {
                    id: "doctor-2",
                    question: "What information should I provide?",
                    answer:
                        "Share relevant details about the patient's requirement so the appropriate next steps can be discussed.",
                },
            ]}
        />
    );
}

function PuneHomeDiagnosticsLayout() {
    return (
        <PuneServiceLayout
            eyebrow="Diagnostics in Pune"
            title="Home Diagnostics in Pune"
            lead="Explore information about diagnostic and testing services designed to make healthcare access more convenient for patients and families."
            serviceName="Home Diagnostics"
            serviceHref="/home-diagnostics/"
            icon={Microscope}
            faqItems={[
                {
                    id: "diagnostics-1",
                    question: "What diagnostic services can I explore?",
                    answer:
                        "You can explore the main Home Diagnostics page for available diagnostic service information.",
                },
                {
                    id: "diagnostics-2",
                    question: "How can I check service availability in Pune?",
                    answer:
                        "Contact the care team with your location and diagnostic requirement.",
                },
            ]}
        />
    );
}

/* ============================================================================
   GENERIC CITY HUB
============================================================================ */
function CityLayout({ city }) {
    return (
        <PageShell
            breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "Locations", path: "/locations/pune/" },
                { label: city.name },
            ]}
        >
            <CategoryHero
                eyebrow={`Svasth Homecare in ${city.name}`}
                title={`Healthcare support for patients and families in ${city.name}`}
                lead={`Explore home healthcare information and support options designed around the needs of patients and families in ${city.name}.`}
                primaryCta={{
                    label: "Contact the care team",
                    href: PHONE_HREF,
                }}
                secondaryCta={{
                    label: "Explore services",
                    href: "/long-term-care/",
                }}
                trustItems={HERO_TRUST}
            />

            <Section
                eyebrow={`Healthcare in ${city.name}`}
                title="Explore home healthcare support"
            >
                <CardGrid cols={3}>
                    <LinkCard
                        icon={Users}
                        title="Long-term care"
                        description="Explore support options for patients who need ongoing healthcare assistance."
                        href="/long-term-care/"
                        cta="Explore long-term care"
                    />

                    <LinkCard
                        icon={Stethoscope}
                        title="Home visits"
                        description="Explore healthcare services designed to bring appropriate support closer to home."
                        href="/home-visit/"
                        cta="Explore home visits"
                    />

                    <LinkCard
                        icon={Microscope}
                        title="Home diagnostics"
                        description="Explore diagnostic services designed around patient convenience."
                        href="/home-diagnostics/"
                        cta="Explore diagnostics"
                    />
                </CardGrid>
            </Section>

            <Section
                tone="ivory"
                eyebrow="Local support"
                title={`Finding the right healthcare path in ${city.name}`}
            >
                <CardGrid cols={3}>
                    <InfoCard
                        icon={Search}
                        title="Explore"
                        description="Start by exploring the service that best matches the patient's current requirement."
                    />

                    <InfoCard
                        icon={Phone}
                        title="Connect"
                        description="Contact the care team to discuss location and service requirements."
                    />

                    <InfoCard
                        icon={HeartHandshake}
                        title="Coordinate"
                        description="Understand the appropriate next steps for the patient's care journey."
                    />
                </CardGrid>
            </Section>

            <FAQSection
                title={`Frequently asked questions in ${city.name}`}
                items={[
                    {
                        id: `${city.slug}-1`,
                        question: `Which home healthcare services can I explore in ${city.name}?`,
                        answer:
                            "You can explore long-term care, home visit and home diagnostics information through the relevant service pages.",
                    },
                    {
                        id: `${city.slug}-2`,
                        question: "How can I check service availability?",
                        answer:
                            "Contact the care team with your location and service requirement to discuss availability and next steps.",
                    },
                    {
                        id: `${city.slug}-3`,
                        question: "Can family members contact the care team?",
                        answer:
                            "Yes. Family members and caregivers can contact the team to discuss relevant service requirements.",
                    },
                ]}
            />

            <FinalCTASection
                title={`Looking for healthcare support in ${city.name}?`}
                lead="Explore the relevant service or contact our team to discuss your requirement."
                cta={{
                    label: "Contact the care team",
                    href: PHONE_HREF,
                }}
            />
        </PageShell>
    );
}

/* ============================================================================
   OTHER CITY COMPONENTS
============================================================================ */

function HyderabadLayout() {
    return <CityLayout city={CITY_LIST.find((city) => city.slug === "hyderabad")} />;
}

function KolkataLayout() {
    return <CityLayout city={CITY_LIST.find((city) => city.slug === "kolkata")} />;
}

function DelhiLayout() {
    return <CityLayout city={CITY_LIST.find((city) => city.slug === "delhi")} />;
}

function ChennaiLayout() {
    return <CityLayout city={CITY_LIST.find((city) => city.slug === "chennai")} />;
}

function BangaloreLayout() {
    return <CityLayout city={CITY_LIST.find((city) => city.slug === "bangalore")} />;
}

function MaduraiLayout() {
    return <CityLayout city={CITY_LIST.find((city) => city.slug === "madurai")} />;
}

function MysoreLayout() {
    return <CityLayout city={CITY_LIST.find((city) => city.slug === "mysore")} />;
}

function IndoreLayout() {
    return <CityLayout city={CITY_LIST.find((city) => city.slug === "indore")} />;
}

function MumbaiLayout() {
    return <CityLayout city={CITY_LIST.find((city) => city.slug === "mumbai")} />;
}

function GuwahatiLayout() {
    return <CityLayout city={CITY_LIST.find((city) => city.slug === "guwahati")} />;
}

/* ============================================================================
   PAGE DATA
============================================================================ */

export const PAGE_DATA = {
    about: {
        key: "about",
        component: AboutLayout,
    },

    patientCharter: {
        key: "patientCharter",
        component: PatientCharterLayout,
    },

    careers: {
        key: "careers",
        component: CareersLayout,
    },

    partner: {
        key: "partner",
        component: PartnerLayout,
    },

    newsMedia: {
        key: "newsMedia",
        component: NewsMediaLayout,
    },

    pune: {
        key: "pune",
        component: PuneLayout,
    },

    puneNurseAtHome: {
        key: "puneNurseAtHome",
        component: PuneNurseAtHomeLayout,
    },

    puneICUAtHome: {
        key: "puneICUAtHome",
        component: PuneICUAtHomeLayout,
    },

    puneDoctorAtHome: {
        key: "puneDoctorAtHome",
        component: PuneDoctorAtHomeLayout,
    },

    puneHomeDiagnostics: {
        key: "puneHomeDiagnostics",
        component: PuneHomeDiagnosticsLayout,
    },

    hyderabad: {
        key: "hyderabad",
        component: HyderabadLayout,
    },

    kolkata: {
        key: "kolkata",
        component: KolkataLayout,
    },

    delhi: {
        key: "delhi",
        component: DelhiLayout,
    },

    chennai: {
        key: "chennai",
        component: ChennaiLayout,
    },

    bangalore: {
        key: "bangalore",
        component: BangaloreLayout,
    },

    madurai: {
        key: "madurai",
        component: MaduraiLayout,
    },

    mysore: {
        key: "mysore",
        component: MysoreLayout,
    },

    indore: {
        key: "indore",
        component: IndoreLayout,
    },

    mumbai: {
        key: "mumbai",
        component: MumbaiLayout,
    },

    guwahati: {
        key: "guwahati",
        component: GuwahatiLayout,
    },
};

/* ============================================================================
   URL SLUG MAPPING
============================================================================ */

export const PAGE_BY_SLUG = {
    about: PAGE_DATA.about,

    "about/patient-charter": PAGE_DATA.patientCharter,

    careers: PAGE_DATA.careers,

    partner: PAGE_DATA.partner,

    "news-media": PAGE_DATA.newsMedia,

    "locations/pune": PAGE_DATA.pune,

    "locations/pune/nurse-at-home": PAGE_DATA.puneNurseAtHome,

    "locations/pune/icu-at-home": PAGE_DATA.puneICUAtHome,

    "locations/pune/doctor-at-home": PAGE_DATA.puneDoctorAtHome,

    "locations/pune/home-diagnostics": PAGE_DATA.puneHomeDiagnostics,

    "locations/hyderabad": PAGE_DATA.hyderabad,

    "locations/kolkata": PAGE_DATA.kolkata,

    "locations/delhi": PAGE_DATA.delhi,

    "locations/chennai": PAGE_DATA.chennai,

    "locations/bangalore": PAGE_DATA.bangalore,

    "locations/madurai": PAGE_DATA.madurai,

    "locations/mysore": PAGE_DATA.mysore,

    "locations/indore": PAGE_DATA.indore,

    "locations/mumbai": PAGE_DATA.mumbai,

    "locations/guwahati": PAGE_DATA.guwahati,
};

/* ============================================================================
   PAGE RENDERER
============================================================================ */

export function PersonCPage({ data }) {
    if (!data || !data.component) {
        return <PersonCNotFound />;
    }

    const Component = data.component;

    return <Component />;
}

/* ============================================================================
   NOT FOUND
============================================================================ */

export function PersonCNotFound() {
    return (
        <PageShell
            breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "Page not found" },
            ]}
        >
            <section className="bg-white py-20 md:py-28">
                <div className="mx-auto max-w-2xl px-6 text-center">
                    <p className="care-eyebrow mb-4">
                        Page not found
                    </p>

                    <h1 className="care-h1 font-display">
                        We could not find that page
                    </h1>

                    <p className="care-lead mx-auto mt-5">
                        The page you are looking for may have moved or the link may be incorrect.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <Link
                            href="/"
                            className="btn btn-primary"
                        >
                            Go to homepage
                            <ArrowRight size={16} />
                        </Link>

                        <Link
                            href="/locations/pune/"
                            className="btn btn-secondary"
                        >
                            Explore locations
                        </Link>
                    </div>
                </div>
            </section>
        </PageShell>
    );
}
