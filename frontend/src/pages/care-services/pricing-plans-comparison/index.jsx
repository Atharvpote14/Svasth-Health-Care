import { PageShell, Hero, Section, Card, ProductCard, FilteredGrid, FeatureGrid, Steps, FAQ, FinalCTA } from "../shared";
import { Droplets } from "lucide-react";

function PricingPlansComparisonPage() {
  const ltcPlans = [
    {
      id: "plan-ltc-basic",
      vertical: "Long Term Care",
      name: "Basic Care Plan",
      description: "Daily living support and companionship for elderly loved ones.",
      price_from: null,
      price_note: "Subscription — pricing on enquiry.",
      features: [
        "Assistance with personal hygiene and grooming",
        "Feeding support",
        "Engaging activities to reduce loneliness",
        "Companionship and emotional support",
      ],
      most_popular: false,
    },
    {
      id: "plan-ltc-advanced",
      vertical: "Long Term Care",
      name: "Advanced Medical Plan",
      description: "Medical care, physiotherapy, and chronic disease management.",
      price_from: null,
      price_note: "Subscription — pricing on enquiry.",
      features: [
        "Regular health monitoring (vitals, medication management)",
        "Management of chronic conditions like diabetes, hypertension, and arthritis",
        "Scheduled visits from healthcare professionals",
        "Access to on-call doctors, nurses, and physiotherapists",
      ],
      most_popular: true,
    },
    {
      id: "plan-ltc-premium",
      vertical: "Long Term Care",
      name: "Premium Care Plan",
      description: "Comprehensive care with 24/7 assistance and enhanced support.",
      price_from: null,
      price_note: "Subscription — pricing on enquiry.",
      features: [
        "Round-the-clock care from skilled caregivers",
        "Emergency support with rapid response coordination",
        "Mental health support, counseling, and cognitive exercises",
        "Post-surgical and palliative care support",
        "Personalised exercise and wellness programs",
      ],
      most_popular: false,
    },
  ];

  const hvPlans = [
    {
      id: "plan-hv-doctor",
      vertical: "Home Visit",
      name: "Tele Consultation",
      description: "Quality healthcare on call with a doctor.",
      price_from: 1000,
      price_note: "₹1,000 per consultation.",
      features: [
        "Doctor consultation on call",
        "Prescription and advice",
        "Most trusted service",
      ],
      most_popular: true,
    },
    {
      id: "plan-hv-physio",
      vertical: "Home Visit",
      name: "Physiotherapy Packs",
      description: "7, 14, and 30-day physiotherapy packages at home.",
      price_from: null,
      price_note: "Pricing on enquiry.",
      features: [
        "Initial assessment",
        "Multiple sessions over 7/14/30 days",
        "Mobility, healing, and well-being focus",
        "Chest, sports, and disc therapy options",
      ],
      most_popular: false,
    },
  ];

  return <PageShell breadcrumbs={[{ label: "Pricing" }, { label: "Pricing & Plans Comparison" }]}>
    <Hero eyebrow="Pricing" title="Pricing & Plans Comparison" description="Compare Long Term Care and Home Visit package options side by side." primary={["Enquire Now", "/care-services/"]} icon={Droplets} />
    <Section id="pricing" eyebrow="Pricing Plans" title="Plan comparison" tone="ivory">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h2 className="font-display text-[24px] font-semibold text-neutral-900 md:text-[30px] mb-4">Long Term Care Plans</h2>
          {ltcPlans.map((plan) => (
            <div key={plan.id} className={`
              rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition duration-200 hover:border-primary/30 hover:shadow-lg ${plan.most_popular ? "border-primary bg-primary/5 text-primary" : ""}
            `}>
              <h3 className="font-display text-[20px] font-semibold text-neutral-900 mb-3">{plan.name}</h3>
              <p className="text-neutral-600 mb-4">{plan.description}</p>
              {plan.price_from !== null && <p className="text-2xl font-bold text-primary mb-4">₹{plan.price_from}</p>}
              {plan.price_note && <p className="text-sm text-neutral-500">{plan.price_note}</p>}
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              {plan.cta && (
                <a href={`/care-services/${plan.id.replace("plan-", "")}/`} className="btn btn-primary w-full h-10 px-4 text-sm font-medium">
                  {plan.cta.label}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="font-display text-[24px] font-semibold text-neutral-900 md:text-[30px] mb-4">Home Visit Plans</h2>
          {hvPlans.map((plan) => (
            <div key={plan.id} className={`
              rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition duration-200 hover:border-primary/30 hover:shadow-lg ${plan.most_popular ? "border-primary bg-primary/5 text-primary" : ""}
            `}>
              <h3 className="font-display text-[20px] font-semibold text-neutral-900 mb-3">{plan.name}</h3>
              <p className="text-neutral-600 mb-4">{plan.description}</p>
              {plan.price_from !== null && <p className="text-2xl font-bold text-primary mb-4">₹{plan.price_from}</p>}
              {plan.price_note && <p className="text-sm text-neutral-500">{plan.price_note}</p>}
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              {plan.cta && (
                <a href={`/care-services/${plan.id.replace("plan-", "")}/`} className="btn btn-primary w-full h-10 px-4 text-sm font-medium">
                  {plan.cta.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
    <FinalCTA title="Get expert guidance on care planning" description="Share your requirements and our care team can recommend the right plan for your needs." href="/care-services/" label="Speak with a Care Expert" />
  </PageShell>;
}

export default function Page() { return <PricingPlansComparisonPage />; }