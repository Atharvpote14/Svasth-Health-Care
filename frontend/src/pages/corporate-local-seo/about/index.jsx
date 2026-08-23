import {
    PageShell,
    Hero,
    Section,
    FeatureGrid,
    Card,
    Steps,
    FAQ,
    FinalCTA,
} from "../../diagnostics-equipment/shared";

import {
    HeartHandshake,
    ShieldCheck,
    Users,
    Stethoscope,
    Clock3,
    MapPin,
    BadgeCheck,
    Building2,
} from "lucide-react";

export default function AboutPage() {
    return (
        <PageShell breadcrumbs={[{ label: "About Us" }]}>

            {/* HERO SECTION */}
            <Hero
                eyebrow="About Our Homecare Platform"
                title="Healthcare That Comes to You"
                description="We make quality healthcare more accessible by connecting patients and families with convenient, professional home-based care services."
                primary={["Explore Our Services", "/"]}
                secondary={["View Careers", "/careers/"]}
                icon={HeartHandshake}
            />

            {/* WHO WE ARE */}
            <Section
                eyebrow="Who We Are"
                title="Care designed around people and their homes"
                lead="Our platform is built to make healthcare support easier to access. From long-term care and doctor visits to diagnostics and medical equipment, our services are designed around convenience, safety and patient needs."
                tone="ivory"
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        icon={HeartHandshake}
                        title="Patient-centred care"
                        description="We focus on making healthcare services more convenient and comfortable for patients and their families."
                    />

                    <Card
                        icon={Stethoscope}
                        title="Professional healthcare support"
                        description="Our platform connects users with trained healthcare professionals and organised homecare services."
                    />

                    <Card
                        icon={Clock3}
                        title="Convenience at home"
                        description="Reduce unnecessary travel and access suitable healthcare services from the comfort of home."
                    />

                    <Card
                        icon={ShieldCheck}
                        title="Safety and trust"
                        description="We aim to build every service around responsible care, clear information and a patient-first approach."
                    />
                </div>
            </Section>

            {/* MISSION AND VISION */}
            <Section
                eyebrow="Our Purpose"
                title="Making home healthcare simpler"
            >
                <div className="grid gap-5 md:grid-cols-2">
                    <Card
                        icon={HeartHandshake}
                        title="Our Mission"
                        description="To make reliable home healthcare services easier to discover, understand and access through a simple digital platform."
                    />

                    <Card
                        icon={Building2}
                        title="Our Vision"
                        description="To build a trusted and accessible home healthcare ecosystem that supports patients, families and healthcare professionals."
                    />
                </div>
            </Section>

            {/* VALUES */}
            <Section
                eyebrow="What We Believe In"
                title="The values behind our care"
                tone="ivory"
            >
                <FeatureGrid
                    items={[
                        {
                            icon: HeartHandshake,
                            title: "Compassion",
                            description:
                                "Healthcare should always begin with understanding and respect for people.",
                        },
                        {
                            icon: ShieldCheck,
                            title: "Trust",
                            description:
                                "Clear information and responsible service help build confidence.",
                        },
                        {
                            icon: Users,
                            title: "Accessibility",
                            description:
                                "Healthcare services should be easier for patients and families to access.",
                        },
                        {
                            icon: BadgeCheck,
                            title: "Quality",
                            description:
                                "We aim to create a consistent and professional healthcare experience.",
                        },
                    ]}
                />
            </Section>

            {/* HOW THE PLATFORM WORKS */}
            <Steps
                items={[
                    {
                        title: "Explore services",
                        description:
                            "Browse home healthcare services based on your requirements.",
                    },
                    {
                        title: "Choose your location",
                        description:
                            "Select your city to explore services available in your area.",
                    },
                    {
                        title: "Request support",
                        description:
                            "Share your requirements and connect with the appropriate service team.",
                    },
                    {
                        title: "Receive care",
                        description:
                            "Coordinate the healthcare service and next steps from the comfort of home.",
                    },
                ]}
            />

            {/* COVERAGE */}
            <Section
                eyebrow="Our Growing Network"
                title="Bringing home healthcare closer to more cities"
                lead="Our city pages help patients explore relevant home healthcare services and information based on their location."
            >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Card
                        icon={MapPin}
                        title="Pune"
                        description="Explore home healthcare services available in Pune."
                        href="/locations/pune/"
                    />

                    <Card
                        icon={MapPin}
                        title="Multiple Cities"
                        description="Our location network is designed to expand healthcare access across major cities."
                        href="/locations/pune/"
                    />

                    <Card
                        icon={MapPin}
                        title="Local Healthcare Access"
                        description="Find location-specific information and relevant homecare services."
                        href="/locations/pune/"
                    />
                </div>
            </Section>

            {/* FAQ */}
            <FAQ
                items={[
                    {
                        q: "What is home healthcare?",
                        a: "Home healthcare provides selected healthcare services to patients at their home, depending on their medical needs and service availability.",
                    },
                    {
                        q: "Which services are available?",
                        a: "The platform includes long-term care, home visits, medical equipment, home diagnostics and adult vaccination services.",
                    },
                    {
                        q: "How can I find services in my city?",
                        a: "You can use the Locations section to explore city-specific information and available services.",
                    },
                ]}
            />

            {/* FINAL CTA */}
            <FinalCTA
                title="Healthcare support, designed around your needs"
                description="Explore our home healthcare services and find the support that suits you and your family."
                href="/"
                label="Explore Services"
            />
        </PageShell>
    );
}