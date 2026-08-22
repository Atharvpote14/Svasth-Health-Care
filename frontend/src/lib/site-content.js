/**
 * Local site content for the CareNest platform.
 *
 * [DE-BRANDED] All references to the reference site (Apollo) — brand name,
 * helpline, email, and lifted copy — have been removed per
 * docs/PROJECT_CONTEXT.md §7 and docs/BRAND_IDENTITY.md, which prohibit
 * Apollo branding and any implied hospital-network affiliation.
 *
 * [REWRITE PENDING] Service descriptions below still follow the structure of
 * the reference site and must be rewritten in original CareNest voice before
 * production. Do not treat prices, timings, or clinical claims as approved.
 *
 * [PLACEHOLDER] Contact details in lib/site.js are placeholders pending real
 * CareNest numbers from the client.
 *
 * Replaced by the live API when ready — swap via NEXT_PUBLIC_USE_MOCK_DATA=false.
 * Shapes follow docs/API_SPECIFICATION.md.
 */

export const categories = [
  {
    slug: "long-term-care",
    name: "Long Term Care",
    description:
      "Compassionate services for your loved ones at home — ICU setup, specialised nurses, trained attendants, and senior care subscriptions.",
    icon: "heart-pulse",
  },
  {
    slug: "home-visits",
    name: "Home Visit",
    description:
      "Easily book professional healthcare services from the comfort of your home — doctors, physiotherapists, and nursing procedures.",
    icon: "home",
  },
];

export const services = [
  // ---------- Long Term Care ----------
  {
    id: "svc-ltc-nurse",
    slug: "nurse-at-home",
    name: "Specialised Nurse at Home",
    tagline: "Skilled nurse at home — skilled nursing care for post-operative recovery, chronic conditions, and daily medical support at home.",
    category: { slug: "long-term-care", name: "Long Term Care" },
    icon: "stethoscope",
    image: null,
    price_from: null,
    price_note: "Pricing on enquiry — depends on the care plan, duration, and location.",
    availability: "available",
    type: "long_term",
    overview:
      "CareNest serves as a bridge between professional medical care and the comfort of one's home, ensuring that patients receive compassionate, personalised, and reliable care tailored to their needs.",
    who_its_for: [
      "Patients recovering from surgery or illness",
      "Chronic conditions that require ongoing care",
      "Elderly family members who need assistance with daily activities",
      "Families who want professional yet heartfelt care for their seriously ill loved ones",
    ],
    whats_included: [
      "Post-surgical care",
      "Chronic disease management",
      "Elderly care",
      "Paediatric care",
      "Palliative support",
      "Medication administration and monitoring",
    ],
    how_it_works: [
      "Contact CareNest via phone, email, or website",
      "Share the patient's condition and needs",
      "We match a trained, verified nurse",
      "Care begins at home on the agreed schedule",
    ],
    faqs: [],
    related: ["attendant-at-home", "icu-at-home", "elder-care", "ryles-tube-insertion", "foley-catheter-care", "iv-infusion-at-home", "wound-dressing-at-home"],
  },
  {
    id: "svc-ltc-attendant",
    slug: "attendant-at-home",
    name: "Trained Attendant at Home",
    tagline: "A professional caregiver for non-medical support — bathing, dressing, feeding, mobility, and a clean, safe environment.",
    category: { slug: "long-term-care", name: "Long Term Care" },
    icon: "hand-heart",
    image: null,
    price_from: null,
    price_note: "The time frame of service, the degree of care needed, and the location affect the cost. We offer competitive prices with numerous packages and clear pricing with no hidden fees.",
    availability: "available",
    type: "long_term",
    overview:
      "A trained attendant at home is a professional caregiver who provides non-medical support to patients in the comfort of their homes — assisting with daily activities such as bathing, dressing, feeding, and mobility support, while following specific care plans tailored to the patient's needs.",
    who_its_for: [
      "Elderly individuals who have difficulty moving around or performing basic activities",
      "Patients recovering from surgery, injuries, or serious illnesses",
      "People with chronic conditions such as Parkinson's, dementia, or paralysis",
      "Bedridden patients who need positioning, feeding, and personal care",
      "Families with busy schedules who cannot provide full-time care",
    ],
    whats_included: [
      "Assistance with bathing, dressing, feeding, and mobility support",
      "Maintaining personal hygiene",
      "Administering prescribed medications",
      "Ensuring a clean and safe environment for the patient",
      "Unlike nurses, trained attendants do not perform medical procedures",
    ],
    how_it_works: [
      "Get in touch with CareNest by calling our care team or booking through this website",
      "Based on needs and the patient's condition, the team suggests a qualified caregiver",
      "A consultation with medical specialists may be scheduled to ascertain the degree of care required",
      "The patient is allocated to the trained attendant, who starts helping at home",
      "Flexible service options: hourly, daily, and long-term care plans",
    ],
    faqs: [],
    related: ["nurse-at-home", "elder-care", "post-surgical-care"],
  },
  {
    id: "svc-ltc-icu",
    slug: "icu-at-home",
    name: "ICU at Home",
    tagline: "ICU at home — expert critical care in the comfort of your home, with hospital-grade equipment and trained staff.",
    category: { slug: "long-term-care", name: "Long Term Care" },
    icon: "monitor-heart",
    image: null,
    price_from: null,
    price_note: "Pricing on enquiry. Avoids hefty hospital bills while maintaining a quality setting.",
    availability: "available",
    type: "long_term",
    overview:
      "ICU at home is a facility where a family member who is ill or in a critical situation can get hospital-like treatment at home. Advanced and critical facilities and equipment are served at home by high-quality professionals, with the patient surrounded by loved ones.",
    who_its_for: [
      "Recovery after hospitalisation — patients who need long-term care after being discharged",
      "Chronic conditions that require constant monitoring",
      "Palliative care — comfort and care for critically ill patients",
      "Infection control — reducing the risk of hospital-acquired infections",
      "Patient preference — avoiding long-term hospital stays",
    ],
    whats_included: [
      "Advanced equipment: ventilators, oxygen concentrators, defibrillators, patient monitors, and more",
      "Skilled medical staff: certified nurses and doctors trained in critical care management",
      "24/7 monitoring to ensure patient safety and timely intervention",
      "Customised care plans based on your needs and preferences",
      "Emergency support with quick response in case of complications",
    ],
    how_it_works: [
      "Enquire about ICU at Home",
      "Our team discusses the patient's condition and requirements",
      "A customised care plan and equipment setup are arranged",
      "The care team begins round-the-clock care at home",
    ],
    faqs: [],
    related: ["nurse-at-home", "tracheostomy-care"],
  },
  {
    id: "svc-ltc-elder",
    slug: "elder-care",
    name: "Senior Care Subscription",
    tagline: "A customised healthcare and support plan for elderly loved ones, on a convenient subscription.",
    category: { slug: "long-term-care", name: "Long Term Care" },
    icon: "users",
    image: null,
    price_from: null,
    price_note: "Subscription plans: Basic, Advanced Medical (Recommended), and Premium. Our subscription plans are cost-effective compared to ad-hoc services.",
    availability: "available",
    type: "long_term",
    overview:
      "The CareNest Elder Care Subscription is a customised healthcare and support plan specially designed for elderly individuals to ensure their well-being and comfort at home. It provides continuous professional care, personalised attention, and essential services on a subscription basis.",
    who_its_for: [
      "Elderly individuals living alone who need assistance with daily tasks",
      "Seniors recovering from surgery or illness who require post-hospital care",
      "Families unable to provide constant care due to work or distance",
      "Seniors with chronic conditions requiring regular health monitoring",
    ],
    whats_included: [
      "Professional medical support: regular health monitoring, vitals, medication management",
      "Assistance with chronic condition management (diabetes, hypertension, arthritis, etc.)",
      "Access to on-call doctors, nurses, and physiotherapists",
      "Personalised care plans with tailored routines and exercise programs",
      "Assistance with daily activities: hygiene, grooming, dressing, feeding, mobility, meals",
      "Emergency support: 24/7 availability of trained caregivers, hospital and ambulance coordination",
      "Companionship and emotional support to reduce loneliness",
    ],
    how_it_works: [
      "Initial assessment — a detailed evaluation of the elderly person's health and lifestyle",
      "Care plan design — a customised subscription plan tailored to individual needs",
      "Service delivery — regular visits by caregivers, nurses, or therapists as per the plan",
      "Monitoring and feedback — periodic reviews to adjust the care plan as needed",
    ],
    faqs: [],
    related: ["attendant-at-home", "nurse-at-home", "physiotherapy-at-home"],
  },

  // ---------- Home Visit ----------
  {
    id: "svc-hv-doctor",
    slug: "doctor-at-home",
    name: "Doctor at Home",
    tagline: "Doctor at Home — expert medical care at your doorstep, ensuring convenience, comfort, and peace of mind.",
    category: { slug: "home-visits", name: "Home Visit" },
    icon: "user-round",
    image: null,
    price_from: 1000,
    price_note: "Tele Consultation at ₹1,000. General Practitioners and Specialised Doctor at Home on enquiry.",
    availability: "available",
    type: "visit",
    overview:
      "CareNest's Doctor at Home Service brings expert medical care to your doorstep. Our skilled doctors provide routine checkups, acute care, post-operative support, elderly care, and palliative care — tailored to your unique needs.",
    who_its_for: [
      "Patients with mobility challenges who find travel difficult",
      "People with chronic conditions needing timely attention",
      "Anyone preferring high-quality medical care at home",
    ],
    whats_included: [
      "Tele Consultation at ₹1,000 — quality healthcare on call",
      "General Practitioners — comprehensive care for all health needs",
      "Specialised Doctor at Home — targeted expertise for complicated medical issues",
    ],
    how_it_works: [
      "Book your Doctor at Home appointment",
      "Choose tele consultation or a home visit",
      "A doctor provides care at the scheduled time",
      "Prescription and follow-up support follow",
    ],
    faqs: [],
    related: ["physiotherapy-at-home", "post-surgical-care"],
  },
  {
    id: "svc-hv-physio",
    slug: "physiotherapy-at-home",
    name: "Physiotherapist at Home",
    tagline: "Our physiotherapists deliver expert care at home to enhance mobility and improve quality of life.",
    category: { slug: "home-visits", name: "Home Visit" },
    icon: "activity",
    image: null,
    price_from: null,
    price_note: "Pack options: 7, 14, and 30 days. Chest, Sports, and Disc physiotherapy available. Pricing on enquiry.",
    availability: "available",
    type: "visit",
    overview:
      "Our physiotherapists deliver expert care at home to enhance mobility and improve quality of life. Collaborating with your doctor and Homecare nurses, they address challenges from illness, injury, disability, or aging — all in the comfort and safety of your home.",
    who_its_for: [
      "Recovery from injuries, surgeries, or chronic conditions",
      "Mobility and balance concerns",
      "Chronic pain management",
      "Sports injury rehabilitation",
      "Chest and respiratory rehabilitation",
      "Disc-related pain relief",
    ],
    whats_included: [
      "Physiotherapist 14 Days Pack — enhance mobility, healing, and well-being",
      "Physiotherapist 30 Days Pack — healing, mobility, and well-being",
      "Physiotherapist 7 Days Pack — mobility, healing, and well-being",
      "Chest Physiotherapy at home",
      "Sports Physiotherapy — sports injury rehab and performance therapy",
      "Disc Physiotherapy — personalised disc pain relief and recovery exercises",
    ],
    how_it_works: [
      "Enquire with your preferred pack or therapy",
      "A physiotherapist assesses your needs",
      "A personalised rehabilitation program begins at home",
      "Progress is tracked across sessions",
    ],
    faqs: [],
    related: ["doctor-at-home", "post-surgical-care", "elder-care"],
  },
  {
    id: "svc-hv-psc",
    slug: "post-surgical-care",
    name: "Post-Surgical Care",
    tagline: "Structured recovery support after surgery — nursing visits, wound care, and rehabilitation at home.",
    category: { slug: "home-visits", name: "Home Visit" },
    icon: "bandage",
    image: null,
    price_from: null,
    price_note: "Pricing on enquiry — depends on the surgery type and recovery plan.",
    availability: "available",
    type: "visit",
    overview:
      "Post-surgical care at home helps patients recovering from surgery, injury, or illness receive skilled care without hospital stays. Our nurses assist with wound care, medication, and daily recovery needs, enabling quicker recovery in familiar surroundings.",
    who_its_for: [
      "Patients recovering from surgery who require skilled care at home",
      "Recovery after hospitalisation, including post-operative wound care",
      "Patients needing rehabilitation support after injury or illness",
    ],
    whats_included: [
      "Skilled nursing visits for post-surgical care",
      "Wound dressing and wound care",
      "Medication administration and monitoring",
      "Mobility support and physiotherapy coordination",
      "Recovery monitoring with family updates",
    ],
    how_it_works: [
      "Enquire about post-surgical care",
      "Our team assesses the recovery needs",
      "A care plan with nursing visits begins at home",
      "Recovery progress is monitored and adjusted",
    ],
    faqs: [],
    related: ["nurse-at-home", "physiotherapy-at-home", "wound-dressing-at-home"],
  },

  // ---------- Procedures ----------
  {
    id: "svc-proc-ryles",
    slug: "ryles-tube-insertion",
    name: "Ryle's Tube Insertion",
    tagline: "Ryle's tube insertion provides feeding, medication, and drainage via a nasal tube.",
    category: { slug: "home-visits", name: "Home Visit" },
    icon: "syringe",
    image: null,
    price_from: 1500,
    price_note: "₹1,500. Consumables will be charged as per MRP.",
    availability: "available",
    type: "visit",
    overview:
      "A flexible tube is inserted into the stomach through the nose during Ryle's tube insertion, often referred to as nasogastric (NG) tube insertion. In patients who are unable to eat or drink normally, it is frequently used for feeding, drug administration, and stomach contents drainage.",
    who_its_for: [
      "Patients who are unable to eat or drink normally",
      "Bedridden or elderly patients who would otherwise require hospital visits",
    ],
    whats_included: [
      "Safe, precise tube insertion by our trained nurses with minimal discomfort",
      "Strict sterilisation protocols to prevent infections",
      "Guidance on appropriate feeding schedules and nutrition plans",
      "Regular checks to ensure the tube remains functional",
    ],
    how_it_works: [
      "Book the procedure and check availability at your doorstep",
      "Select your preferred date and slot",
      "A trained nurse performs the procedure at home",
      "Feeding and care guidance is shared with the family",
      "Final confirmation is subject to availability",
    ],
    faqs: [],
    related: ["nurse-at-home", "iv-infusion-at-home"],
  },
  {
    id: "svc-proc-foley",
    slug: "foley-catheter-care",
    name: "Foley Catheter Insertion",
    tagline: "Foley catheter insertion ensures proper urinary management with secure placement.",
    category: { slug: "home-visits", name: "Home Visit" },
    icon: "syringe",
    image: null,
    price_from: 2200,
    price_note: "₹2,200. Consumables will be charged as per MRP.",
    availability: "available",
    type: "visit",
    overview:
      "A thin, flexible tube called a Foley catheter is inserted into the bladder to drain urine. A tiny, inflated balloon holds the catheter in place. Urinary management, either short-term or long-term, is frequently accomplished with this treatment.",
    who_its_for: [
      "Patients needing relief from urinary retention",
      "Healing after surgeries affecting the urinary tract",
      "Managing incontinence in patients with limited mobility",
      "Monitoring and measuring urine output for medical assessments",
    ],
    whats_included: [
      "Secure, hygienic Foley catheter insertion by trained nurses",
      "A safe, hygienic, and compassionate approach prioritising patient comfort",
      "Catheter care guidance for the family",
      "Consumables at MRP, billed separately",
    ],
    how_it_works: [
      "Book the procedure and check availability at your doorstep",
      "Select your preferred date and slot",
      "A trained nurse performs the procedure at home",
      "Care instructions are shared",
      "Final confirmation is subject to availability",
    ],
    faqs: [],
    related: ["nurse-at-home", "wound-dressing-at-home"],
  },
  {
    id: "svc-proc-iv",
    slug: "iv-infusion-at-home",
    name: "IV INFUSION (Cannula already in place)",
    tagline: "IV infusion with pre-inserted cannula — fluids, drugs, or nutrients delivered at home.",
    category: { slug: "home-visits", name: "Home Visit" },
    icon: "droplets",
    image: null,
    price_from: 1500,
    price_note: "₹1,500. Rs.250/Hr for extra hour. Consumables will be charged as per MRP.",
    availability: "available",
    type: "visit",
    overview:
      "IV infusion with a cannula already in place uses an intravenous line already inserted into the patient's vein to provide fluids, drugs, or nutrients. The procedure is speedier and less intrusive because the cannula is already installed and the needle doesn't need to be reinserted.",
    who_its_for: ["Patients who need frequent or ongoing IV therapy"],
    whats_included: [
      "IV infusion with pre-inserted cannula",
      "Minimised discomfort — no needle reinsertion",
      "Reduced preparation time compared to fresh cannulation",
      "Consumables at MRP, billed separately",
    ],
    how_it_works: [
      "Book the procedure and check availability at your doorstep",
      "Select your preferred date and slot",
      "A trained nurse administers the infusion at home",
      "Monitoring continues through the infusion",
      "Final confirmation is subject to availability",
    ],
    faqs: [],
    related: ["nurse-at-home", "ryles-tube-insertion"],
  },
  {
    id: "svc-proc-wound",
    slug: "wound-dressing-at-home",
    name: "Wound Dressing",
    tagline: "Wound dressing promotes healing and prevents infection with sterile materials.",
    category: { slug: "home-visits", name: "Home Visit" },
    icon: "bandage",
    image: null,
    price_from: null,
    price_note: "Pricing on enquiry. Consumables will be charged as per MRP.",
    availability: "available",
    type: "visit",
    overview:
      "The process of cleansing, shielding, and covering a wound to encourage healing and ward off infection is known as wound dressing. It entails covering the wound with sterile materials like bandages, gauze, or sophisticated dressings, depending on the size, depth, and state of the wound.",
    who_its_for: [
      "Cuts, surgical incisions, burns, ulcers, or chronic wounds",
      "Post-surgical patients needing regular dressing changes",
    ],
    whats_included: [
      "Sterile wound cleansing and dressing by trained nurses",
      "Dressings matched to wound type and condition",
      "Infection prevention protocols",
      "Consumables at MRP, billed separately",
    ],
    how_it_works: [
      "Enquire about wound dressing",
      "A trained nurse confirms the visit",
      "The wound is cleansed and dressed at home",
      "Next dressing is scheduled as needed",
    ],
    faqs: [],
    related: ["post-surgical-care", "nurse-at-home", "foley-catheter-care"],
  },
  {
    id: "svc-proc-trache",
    slug: "tracheostomy-care",
    name: "Tracheostomy Care",
    tagline: "Skilled care for tracheostomy patients at home — tube care, suctioning, and family training.",
    category: { slug: "long-term-care", name: "Long Term Care" },
    icon: "wind",
    image: null,
    price_from: null,
    price_note: "Pricing on enquiry — part of skilled long-term nursing care.",
    availability: "available",
    type: "long_term",
    overview:
      "Tracheostomy care at home is provided by our trained nurses as part of skilled long-term care, supporting patients with airway management needs and training families on safe daily care.",
    who_its_for: [
      "Patients with tracheostomy or ventilator-related care needs",
      "Families needing daily care guidance for a tracheostomy patient",
    ],
    whats_included: [
      "Skilled nursing care for airway management",
      "Hygienic care following strict protocols",
      "Family training for daily care and safety",
      "Coordination with the care team for emergencies",
    ],
    how_it_works: [
      "Enquire about tracheostomy care",
      "Our team assesses the patient's needs",
      "A trained nurse provides care at home",
      "Family is trained for daily management",
    ],
    faqs: [],
    related: ["icu-at-home", "nurse-at-home"],
  },
];

export const hubs = {
  "long-term-care": {
    slug: "long-term-care",
    name: "Long Term Care",
    eyebrow: "Long Term Care",
    title: "Compassionate Care You Can Trust at Home",
    lead:
      "Expert care for your loved ones, combining medical excellence with the comfort of home.",
    services: ["nurse-at-home", "attendant-at-home", "icu-at-home", "elder-care"],
  },
  "home-visits": {
    slug: "home-visits",
    name: "Home Visit",
    eyebrow: "Home Visit",
    title: "Expert Healthcare, Right at Your Doorstep",
    lead:
      "Convenient, personalised medical care delivered in the comfort of your home.",
    services: [
      "doctor-at-home",
      "physiotherapy-at-home",
      "post-surgical-care",
      "ryles-tube-insertion",
      "foley-catheter-care",
      "iv-infusion-at-home",
      "wound-dressing-at-home",
    ],
  },
};

export const faqs = [
  {
    id: "faq-icu-1",
    category: "icu",
    question: "What is ICU at Home?",
    answer:
      "ICU at home is a facility where a family member who is ill or in a critical situation can get hospital-like treatment at home. These setups include state-of-the-art medical equipment like ventilators, monitors, and infusion pumps, provided by high-quality professionals in the home environment.",
  },
  {
    id: "faq-icu-2",
    category: "icu",
    question: "Who needs ICU at Home services?",
    answer:
      "It works best for recovery after hospitalisation, chronic conditions that require constant monitoring, palliative care for critically ill patients, infection control, and people who prefer avoiding long-term hospital stays.",
  },
  {
    id: "faq-icu-3",
    category: "icu",
    question: "What medical equipment is included in ICU at Home?",
    answer:
      "Advanced equipment including ventilators, oxygen concentrators, defibrillators, patient monitors, and more — provided and maintained by our team.",
  },
  {
    id: "faq-icu-4",
    category: "icu",
    question: "What type of medical staff will be available?",
    answer:
      "Certified nurses and doctors trained in critical care management, with 24/7 monitoring to ensure patient safety and timely intervention.",
  },
  {
    id: "faq-icu-5",
    category: "icu",
    question: "Can you manage patients on a ventilator at home?",
    answer:
      "Yes. Ventilators are part of the advanced equipment we provide, with skilled critical-care staff managing the setup and monitoring round the clock.",
  },
  {
    id: "faq-icu-6",
    category: "icu",
    question: "What if there's a medical emergency at home?",
    answer:
      "We provide emergency support with quick response in case of any complications, as part of the ICU at Home service.",
  },
  {
    id: "faq-icu-7",
    category: "icu",
    question: "Are medicines and consumables included in the service?",
    answer:
      "Consumables are charged separately as per MRP. Medicine and consumable requirements are discussed when the care plan is designed.",
  },
  {
    id: "faq-proc-1",
    category: "procedures",
    question: "Why get nursing procedures done at home?",
    answer:
      "Travelling while unwell can increase health risks and complications. Services like wound care and urinary catheterisation are available at home for safety and convenience, with professional monitoring and personalised attention.",
  },
  {
    id: "faq-proc-2",
    category: "procedures",
    question: "Are consumables charged separately?",
    answer:
      "Yes. Consumables will be charged as per MRP, separately from the procedure fee.",
  },
  {
    id: "faq-booking-1",
    category: "booking",
    question: "How do I book a service at home?",
    answer:
      "Choose a service, check availability at your doorstep, select your preferred date and slot, and confirm. Final confirmation is subject to availability.",
  },
  {
    id: "faq-booking-2",
    category: "booking",
    question: "Which cities do you operate in?",
    answer:
      "Hyderabad, Kolkata, Delhi NCR, Chennai, Bangalore, Pune, Madurai, Mysore, Indore, Mumbai, and Guwahati.",
  },
  {
    id: "faq-booking-3",
    category: "booking",
    question: "How can I contact the care team?",
    answer:
      "Call 1800 000 0000, email care@carenest.in, or reach us on WhatsApp at +91 00000 00000.",
  },
  {
    id: "faq-trust-1",
    category: "trust",
    question: "Are your professionals verified?",
    answer:
      "Yes. We ensure that all attendants and nurses are well-trained, background-verified, and experienced in handling patients with various medical needs.",
  },
  {
    id: "faq-trust-2",
    category: "trust",
    question: "How is the quality of care ensured?",
    answer:
      "We follow strict quality control measures, professional clinical care, and sterilisation and safety protocols across all services.",
  },
];

export const pricingPlans = [
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
    cta: { label: "Enquire Now", type: "assessment" },
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
    cta: { label: "Enquire Now", type: "assessment" },
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
    cta: { label: "Enquire Now", type: "assessment" },
    most_popular: false,
  },
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
    cta: { label: "Enquire Now", type: "booking" },
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
    cta: { label: "Enquire Now", type: "booking" },
    most_popular: false,
  },
];

export const locations = [
  { slug: "hyderabad", name: "Hyderabad", availability: "available" },
  { slug: "kolkata", name: "Kolkata", availability: "available" },
  { slug: "delhi-ncr", name: "Delhi NCR", availability: "available" },
  { slug: "chennai", name: "Chennai", availability: "available" },
  { slug: "bangalore", name: "Bangalore", availability: "available" },
  { slug: "pune", name: "Pune", availability: "available" },
  { slug: "madurai", name: "Madurai", availability: "available" },
  { slug: "mysore", name: "Mysore", availability: "available" },
  { slug: "indore", name: "Indore", availability: "available" },
  { slug: "mumbai", name: "Mumbai", availability: "available" },
  { slug: "guwahati", name: "Guwahati", availability: "available" },
];

export function getSiteService(slug) {
  return services.find((service) => service.slug === slug) || null;
}

export function getSiteHub(slug) {
  return hubs[slug] || null;
}