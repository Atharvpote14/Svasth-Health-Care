import { useState } from "react";

import {
    X,
    Send,
    CheckCircle2,
    User,
    Mail,
    Phone,
    MapPin,
    BriefcaseBusiness,
    HeartHandshake,
    Users,
    GraduationCap,
    BadgeCheck,
    Clock3,
    Stethoscope,
    ShieldCheck,
} from "lucide-react";

import {
    PageShell,
    Hero,
    Section,
    Card,
    FeatureGrid,
    Steps,
    FAQ,
    FinalCTA,
} from "../../diagnostics-equipment/shared";

const jobs = [
    {
        title: "Staff Nurse",
        location: "Multiple Locations",
        type: "Full Time",
        icon: Stethoscope,
        description:
            "Provide professional nursing support and patient-focused healthcare services at home.",
    },
    {
        title: "Caregiver / Attendant",
        location: "Multiple Locations",
        type: "Full Time",
        icon: HeartHandshake,
        description:
            "Support patients with day-to-day care needs while maintaining comfort, dignity and safety.",
    },
    {
        title: "Physiotherapist",
        location: "Multiple Locations",
        type: "Full Time / Visiting",
        icon: BadgeCheck,
        description:
            "Deliver personalised physiotherapy and rehabilitation support in a home-care setting.",
    },
    {
        title: "Medical Coordinator",
        location: "Pune and Other Cities",
        type: "Full Time",
        icon: Users,
        description:
            "Coordinate patient services, appointments and communication between patients and care teams.",
    },
    {
        title: "Healthcare Operations Executive",
        location: "Multiple Locations",
        type: "Full Time",
        icon: BriefcaseBusiness,
        description:
            "Support the smooth coordination and day-to-day operations of home healthcare services.",
    },
    {
        title: "Business Development Associate",
        location: "Multiple Locations",
        type: "Full Time",
        icon: Users,
        description:
            "Build partnerships and help expand access to quality home healthcare services.",
    },
];

export default function CareersPage() {
    const [showForm, setShowForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        position: "",
        experience: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleApply = (jobTitle) => {
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            city: "",
            position: jobTitle,
            experience: "",
            message: "",
        });

        setSubmitted(false);
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // FRONTEND ONLY FOR NOW
        // Later this data will be sent to Express backend + MongoDB
        console.log("Job Application:", formData);

        setSubmitted(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <>
            <PageShell breadcrumbs={[{ label: "Careers" }]}>
                {/* HERO */}
                <Hero
                    eyebrow="Careers"
                    title="Build a Career That Makes a Difference"
                    description="Join a growing home healthcare team working to make quality healthcare more accessible, convenient and patient-centred."
                    primary={["View Open Roles", "#open-roles"]}
                    secondary={["About Us", "/corporate-local-seo/about/"]}
                    icon={BriefcaseBusiness}
                />

                {/* WHY JOIN US */}
                <Section
                    eyebrow="Why Join Us"
                    title="More than just a job"
                    lead="We are building a healthcare platform where skilled professionals, technology and compassionate care come together to create a better experience for patients and families."
                    tone="ivory"
                >
                    <FeatureGrid
                        items={[
                            {
                                icon: HeartHandshake,
                                title: "Meaningful Work",
                                description:
                                    "Make a real difference by helping patients receive care in the comfort of their homes.",
                            },
                            {
                                icon: Users,
                                title: "Collaborative Team",
                                description:
                                    "Work alongside healthcare and technology professionals who share a common purpose.",
                            },
                            {
                                icon: GraduationCap,
                                title: "Learn and Grow",
                                description:
                                    "Develop your skills and grow with a platform that is continuously evolving.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Professional Environment",
                                description:
                                    "Be part of a workplace built around responsibility, respect and quality service.",
                            },
                        ]}
                    />
                </Section>

                {/* OPEN JOBS */}
                <Section
                    eyebrow="Career Opportunities"
                    title="Find a role that fits you"
                    lead="Explore opportunities across clinical care, healthcare operations and business teams."
                    id="open-roles"
                >
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {jobs.map((job) => (
                            <Card
                                key={job.title}
                                icon={job.icon}
                                title={job.title}
                                description={job.description}
                            >
                                <div className="mt-5 space-y-2 border-t border-primary/10 pt-4 text-sm text-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={15} className="text-primary" />
                                        <span>{job.location}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Clock3 size={15} className="text-primary" />
                                        <span>{job.type}</span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handleApply(job.title)}
                                    className="btn btn-primary mt-5 h-10 px-5 text-sm"
                                >
                                    Apply Now
                                </button>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* HOW TO APPLY */}
                <Steps
                    items={[
                        {
                            title: "Explore Roles",
                            description:
                                "Browse available opportunities and choose a role that matches your skills.",
                        },
                        {
                            title: "Submit Application",
                            description:
                                "Share your basic details and professional information with our team.",
                        },
                        {
                            title: "Meet the Team",
                            description:
                                "Selected candidates can move forward through the interview process.",
                        },
                        {
                            title: "Start Your Journey",
                            description:
                                "Join the team and begin contributing to better healthcare at home.",
                        },
                    ]}
                />

                {/* CULTURE */}
                <Section
                    eyebrow="Our Culture"
                    title="People and purpose at the centre"
                    lead="Healthcare is built on trust. We believe the same principle should guide how teams work together."
                >
                    <div className="grid gap-5 md:grid-cols-3">
                        <Card
                            icon={BadgeCheck}
                            title="Take Ownership"
                            description="We encourage people to take responsibility and contribute ideas that improve the patient experience."
                        />

                        <Card
                            icon={HeartHandshake}
                            title="Care for People"
                            description="We value empathy, respect and meaningful relationships with patients, families and colleagues."
                        />

                        <Card
                            icon={GraduationCap}
                            title="Keep Learning"
                            description="Healthcare and technology continue to evolve, and we believe in growing with them."
                        />
                    </div>
                </Section>

                {/* FAQ */}
                <FAQ
                    items={[
                        {
                            q: "How can I apply for a job?",
                            a: "Choose a suitable role and click Apply Now. A form will open where you can submit your application.",
                        },
                        {
                            q: "Are opportunities available in different cities?",
                            a: "Yes. As the platform expands, opportunities can be available across multiple service locations.",
                        },
                        {
                            q: "Are both clinical and non-clinical roles available?",
                            a: "Yes. Opportunities may include clinical healthcare roles, operations, coordination, technology and business roles.",
                        },
                        {
                            q: "Can freshers apply?",
                            a: "Eligibility depends on the specific role. Some positions may be suitable for entry-level candidates while others require professional experience.",
                        },
                    ]}
                />

                {/* FINAL CTA */}
                <FinalCTA
                    title="Ready to build the future of healthcare?"
                    description="Join a team working to make professional healthcare services more accessible from the comfort of home."
                    href="#open-roles"
                    label="View Open Roles"
                />
            </PageShell>

            {/* APPLICATION FORM MODAL */}
            {showForm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
                    <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8">
                        {/* FORM HEADER */}
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                                    Careers
                                </p>

                                <h2 className="mt-2 text-2xl font-semibold text-neutral-900">
                                    Apply for this position
                                </h2>

                                <p className="mt-2 text-sm text-neutral-600">
                                    Fill in your details and submit your application.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={closeForm}
                                className="rounded-full p-2 transition hover:bg-neutral-100"
                                aria-label="Close form"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* SUCCESS MESSAGE */}
                        {submitted ? (
                            <div className="py-10 text-center">
                                <CheckCircle2
                                    size={60}
                                    className="mx-auto text-green-600"
                                />

                                <h3 className="mt-5 text-2xl font-semibold text-neutral-900">
                                    Application Submitted!
                                </h3>

                                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-neutral-600">
                                    Thank you for applying for the {formData.position} position.
                                    Your application has been submitted successfully.
                                </p>

                                <button
                                    type="button"
                                    onClick={closeForm}
                                    className="btn btn-primary mt-7 h-11 px-6"
                                >
                                    Done
                                </button>
                            </div>
                        ) : (
                            /* APPLICATION FORM */
                            <form onSubmit={handleSubmit} className="mt-7">
                                <div className="grid gap-5 md:grid-cols-2">
                                    {/* FULL NAME */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold">
                                            Full Name *
                                        </label>

                                        <div className="flex items-center gap-3 rounded-xl border border-black/10 px-4">
                                            <User size={18} className="text-primary" />

                                            <input
                                                type="text"
                                                name="fullName"
                                                required
                                                placeholder="Enter your full name"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="h-12 w-full outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* EMAIL */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold">
                                            Email Address *
                                        </label>

                                        <div className="flex items-center gap-3 rounded-xl border border-black/10 px-4">
                                            <Mail size={18} className="text-primary" />

                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="h-12 w-full outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* PHONE */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold">
                                            Phone Number *
                                        </label>

                                        <div className="flex items-center gap-3 rounded-xl border border-black/10 px-4">
                                            <Phone size={18} className="text-primary" />

                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="Enter phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="h-12 w-full outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* CITY */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold">
                                            Current City *
                                        </label>

                                        <div className="flex items-center gap-3 rounded-xl border border-black/10 px-4">
                                            <MapPin size={18} className="text-primary" />

                                            <input
                                                type="text"
                                                name="city"
                                                required
                                                placeholder="Enter your city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="h-12 w-full outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* POSITION */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold">
                                            Position Applying For *
                                        </label>

                                        <select
                                            name="position"
                                            required
                                            value={formData.position}
                                            onChange={handleChange}
                                            className="h-12 w-full rounded-xl border border-black/10 px-4 outline-none"
                                        >
                                            <option value="">Select a position</option>

                                            {jobs.map((job) => (
                                                <option key={job.title} value={job.title}>
                                                    {job.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* EXPERIENCE */}
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold">
                                            Experience
                                        </label>

                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="h-12 w-full rounded-xl border border-black/10 px-4 outline-none"
                                        >
                                            <option value="">Select experience</option>
                                            <option value="Fresher">Fresher</option>
                                            <option value="Less than 1 year">
                                                Less than 1 year
                                            </option>
                                            <option value="1-2 years">1-2 years</option>
                                            <option value="3-5 years">3-5 years</option>
                                            <option value="5+ years">5+ years</option>
                                        </select>
                                    </div>

                                    {/* MESSAGE */}
                                    <div className="md:col-span-2">
                                        <label className="mb-2 block text-sm font-semibold">
                                            Why should we consider you?
                                        </label>

                                        <textarea
                                            name="message"
                                            rows={4}
                                            placeholder="Tell us briefly about yourself, your skills and your experience..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-black/10 p-4 outline-none"
                                        />
                                    </div>
                                </div>

                                {/* SUBMIT BUTTON */}
                                <div className="mt-7 flex justify-end">
                                    <button
                                        type="submit"
                                        className="btn btn-primary h-12 px-7"
                                    >
                                        Submit Application
                                        <Send size={17} />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}