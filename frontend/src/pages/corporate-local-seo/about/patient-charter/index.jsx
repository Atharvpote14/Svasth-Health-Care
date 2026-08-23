import {
    PageShell,
    Hero,
    Section,
    Card,
    FeatureGrid,
    FAQ,
    FinalCTA,
} from "../../../diagnostics-equipment/shared";

import {
    ShieldCheck,
    HeartHandshake,
    Users,
    Eye,
    LockKeyhole,
    MessageCircle,
    CheckCircle2,
    Scale,
    Stethoscope,
} from "lucide-react";

export default function PatientCharterPage() {
    return (
        <PageShell
            breadcrumbs={[
                { label: "About Us", href: "/about/" },
                { label: "Patient Charter" },
            ]}
        >
            {/* HERO */}
            <Hero
                eyebrow="Patient Charter"
                title="Our Commitment to Every Patient"
                description="Our Patient Charter outlines the principles that guide our approach to respectful, transparent and patient-focused home healthcare."
                primary={["Explore Our Services", "/"]}
                secondary={["About Us", "/about/"]}
                icon={ShieldCheck}
            />

            {/* INTRODUCTION */}
            <Section
                eyebrow="Our Promise"
                title="Healthcare with dignity, respect and trust"
                lead="Every patient deserves clear communication, respectful treatment and a healthcare experience designed around their individual needs."
                tone="ivory"
            >
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card
                        icon={HeartHandshake}
                        title="Respect & Dignity"
                        description="We believe every patient should be treated with courtesy, empathy and respect."
                    />

                    <Card
                        icon={MessageCircle}
                        title="Clear Communication"
                        description="We aim to provide information in a clear and understandable way."
                    />

                    <Card
                        icon={LockKeyhole}
                        title="Privacy & Confidentiality"
                        description="Patient information should be handled responsibly and with appropriate care."
                    />

                    <Card
                        icon={Users}
                        title="Patient Participation"
                        description="Patients and families should be supported in understanding their healthcare journey."
                    />
                </div>
            </Section>

            {/* PATIENT RIGHTS */}
            <Section
                eyebrow="Patient Rights"
                title="What patients can expect"
                lead="These principles represent the experience we aim to create across our home healthcare platform."
            >
                <FeatureGrid
                    items={[
                        {
                            icon: Eye,
                            title: "Right to Information",
                            description:
                                "Patients should receive relevant information about the healthcare services they are exploring.",
                        },
                        {
                            icon: Scale,
                            title: "Right to Fair Treatment",
                            description:
                                "Every patient should be treated fairly and respectfully without unnecessary discrimination.",
                        },
                        {
                            icon: ShieldCheck,
                            title: "Right to Privacy",
                            description:
                                "Personal and healthcare-related information should be handled with appropriate responsibility.",
                        },
                        {
                            icon: CheckCircle2,
                            title: "Right to Ask Questions",
                            description:
                                "Patients and families should feel comfortable seeking clarification about services and next steps.",
                        },
                    ]}
                />
            </Section>

            {/* OUR RESPONSIBILITY */}
            <Section
                eyebrow="Our Responsibility"
                title="How we aim to support your healthcare journey"
                tone="ivory"
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <Card
                        icon={Stethoscope}
                        title="Patient-Focused Service"
                        description="We aim to make the healthcare journey more convenient and easier to understand for patients and families."
                    />

                    <Card
                        icon={ShieldCheck}
                        title="Responsible Care"
                        description="We are committed to supporting safe, professional and responsible healthcare experiences."
                    />

                    <Card
                        icon={MessageCircle}
                        title="Transparent Communication"
                        description="We aim to keep service information and next steps clear and easy to understand."
                    />

                    <Card
                        icon={HeartHandshake}
                        title="Continuous Improvement"
                        description="We continue to improve our platform and healthcare experience based on evolving patient and service needs."
                    />
                </div>
            </Section>

            {/* FAQ */}
            <FAQ
                items={[
                    {
                        q: "What is a Patient Charter?",
                        a: "A Patient Charter describes the principles and standards that guide how patients should be treated and supported during their healthcare journey.",
                    },
                    {
                        q: "Why is patient privacy important?",
                        a: "Healthcare information is personal and should be handled responsibly with appropriate confidentiality and care.",
                    },
                    {
                        q: "Can family members be involved in the healthcare journey?",
                        a: "Family members and caregivers can play an important role in supporting a patient, depending on the patient's preferences and healthcare requirements.",
                    },
                ]}
            />

            {/* CTA */}
            <FinalCTA
                title="Your healthcare journey matters"
                description="Explore our home healthcare services and find convenient support for you and your family."
                href="/"
                label="Explore Services"
            />
        </PageShell>
    );
}