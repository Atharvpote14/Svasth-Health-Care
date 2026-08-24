# Information Architecture

## 1. Purpose

This document is the source of truth for the information architecture of the home healthcare platform.

It defines:

* Website hierarchy
* Page types
* Navigation
* URL structure
* Service taxonomy
* Location architecture
* Content relationships
* User-facing discovery paths
* Internal linking structure

The website must be designed around **user intent and healthcare needs**, not around the internal organization of the company.

The user should be able to answer three questions quickly:

1. **What kind of care do I need?**
2. **Is this service available where I live?**
3. **How do I get started?**

---

# 2. Core Information Architecture Principles

## 2.1 User intent comes first

Users should not be expected to understand healthcare terminology or the company's internal service categories.

The architecture must allow users to enter through:

* A specific service
* A health condition
* A type of care
* A location
* A healthcare professional
* A direct booking/enquiry action

---

## 2.2 Minimize cognitive load

Healthcare decisions can happen under stress.

Do not expose the entire service catalog immediately.

Use progressive disclosure:

```text
Need care?
    ↓
Choose care category
    ↓
Choose service
    ↓
Understand service
    ↓
Check availability
    ↓
Book / Enquire
```

---

## 2.3 Every important page must have a clear next action

A page must never leave the user wondering:

> "What do I do now?"

Every transactional page should have one primary CTA.

Examples:

* Book a Doctor
* Book Physiotherapy
* Request a Nurse
* Book a Diagnostic Test
* Request a Callback
* Talk to a Care Expert

---

# 3. Primary Website Structure

The top-level architecture should be:

```text
Home
│
├── Services
│   ├── Long-Term Care
│   ├── Home Visits
│   ├── Rehabilitation
│   ├── Diagnostics
│   ├── Medical Equipment
│   ├── Vaccination
│   └── Specialized Care
│
├── Conditions
│   ├── Stroke
│   ├── Dementia & Alzheimer's
│   ├── Diabetes
│   ├── Cancer Care
│   ├── Post-Surgery Recovery
│   ├── Neurological Conditions
│   ├── Orthopedic Recovery
│   └── Other Conditions
│
├── Locations
│   ├── City
│   │   ├── Services
│   │   ├── Areas Served
│   │   └── Contact
│   └── ...
│
├── About
│   ├── About Us
│   ├── Our Team
│   ├── Why Choose Us
│   ├── Quality & Safety
│   └── Patient Charter
│
├── Resources
│   ├── Health Guides
│   ├── Blog
│   ├── FAQs
│   ├── Videos
│   └── Downloads
│
├── For Partners
│   ├── Doctors
│   ├── Hospitals
│   ├── Corporates
│   └── Other Partners
│
└── Contact
```

This hierarchy may evolve as the product is implemented, but new pages must not be added to the top-level navigation without a clear information-architecture reason.

---

# 4. Primary Navigation

The desktop navigation should prioritize discovery and conversion.

Recommended structure:

```text
Logo

Services
Conditions
Locations
Why Us
Resources

[Select Location]

[Book Care]
```

The header should not contain every service as a separate navigation item.

---

# 5. Services Architecture

Services are the core of the platform.

Services must be organized into meaningful categories rather than one extremely large list.

## 5.1 Long-Term Care

```text
Long-Term Care
│
├── Nurse at Home
├── Specialized Nurse at Home
├── Attendant / Caregiver at Home
├── Senior Care
├── ICU at Home
├── Palliative Care
├── Chronic Care
├── Mother & Child Care
└── Travel Nurse
```

---

## 5.2 Home Visits

```text
Home Visits
│
├── Doctor at Home
├── Physiotherapist at Home
├── Dietitian at Home
├── Speech Therapist at Home
├── Respiratory Therapist at Home
├── Nursing Procedures
├── Medical Procedures
└── Other Professional Visits
```

The current Apollo site uses a broad Home Visit category containing doctors, physiotherapists, nurses, respiratory therapists, dietitians and other services. The redesigned architecture should retain this useful grouping while making discovery and comparison easier.

---

## 5.3 Rehabilitation

```text
Rehabilitation
│
├── Physiotherapy
├── Neuro Rehabilitation
├── Stroke Rehabilitation
├── Post-Surgical Rehabilitation
├── Orthopedic Rehabilitation
├── Speech Therapy
├── Occupational Therapy
└── Specialized Rehab Programs
```

---

## 5.4 Diagnostics

```text
Diagnostics
│
├── Blood Tests
├── Health Checkups
├── ECG
├── Holter Monitoring
├── Sleep Study
├── ABPM
├── X-Ray
├── Advanced Diagnostics
└── Diagnostic Packages
```

The existing website already has a large at-home diagnostics catalog including urinalysis, thyroid screening, sleep studies, ABPM, Holter monitoring and ECG.

---

## 5.5 Medical Equipment

```text
Medical Equipment
│
├── CPAP
├── BiPAP
├── Wheelchairs
├── Hospital Beds
├── Oxygen Equipment
├── Mobility Equipment
├── Monitoring Equipment
└── Other Equipment
```

Each equipment item should support:

* Buy
* Rent
* Availability
* Delivery information
* Installation information
* Usage/support information
* Enquiry

---

## 5.6 Vaccination

```text
Vaccination
│
├── Adult Vaccination
├── Flu Vaccine
├── HPV Vaccine
├── Pneumococcal Vaccine
├── Shingles Vaccine
├── Typhoid Vaccine
└── Other Vaccinations
```

---

# 6. Service Page Architecture

Every major service should have its own canonical page.

Example:

```text
/services/physiotherapy-at-home
/services/doctor-at-home
/services/nurse-at-home
/services/elderly-care
/services/icu-at-home
/services/diagnostics-at-home
```

A service page should generally contain:

```text
Hero
↓
Service overview
↓
Who is this for?
↓
Conditions / use cases
↓
What is included?
↓
How it works
↓
Healthcare professionals
↓
Why choose us
↓
Safety / clinical standards
↓
Pricing or pricing explanation
↓
FAQs
↓
Related services
↓
Primary CTA
```

---

# 7. Transactional Service Architecture

Highly specific procedures should not clutter the primary navigation.

Examples:

```text
/services/home-nursing
/services/home-nursing/wound-dressing
/services/home-nursing/foley-catheter-insertion
/services/home-nursing/ryles-tube-insertion
/services/home-nursing/iv-infusion
```

These pages should be discoverable through:

* Search
* Service pages
* Related services
* Location pages
* Internal links
* Healthcare professional recommendations

The current website contains a very large collection of individual nursing and medical procedures.

The new architecture must prevent this large catalog from overwhelming first-time users.

---

# 8. Conditions Architecture

Users often know the patient's condition but do not know which service they need.

Therefore conditions are a separate discovery layer.

Example:

```text
/conditions/stroke
/conditions/dementia
/conditions/alzheimers
/conditions/diabetes
/conditions/cancer
/conditions/post-surgery-recovery
/conditions/neurological-disorders
/conditions/orthopedic-recovery
```

A condition page should explain:

```text
Condition
↓
Common care needs
↓
Recommended services
↓
Relevant professionals
↓
At-home care options
↓
When professional help is needed
↓
How to get started
```

Condition pages should link into service pages rather than attempting to replace medical consultation.

---

# 9. Location Architecture

Location is a first-class entity.

The website must support city-specific experiences.

Structure:

```text
/locations
/locations/pune
/locations/mumbai
/locations/hyderabad
/locations/bangalore
...
```

A location page should contain:

```text
City Hero
↓
Services available in this city
↓
Popular services
↓
Areas served
↓
Local healthcare professionals
↓
Local contact information
↓
How booking works
↓
FAQs
↓
CTA
```

The current Apollo site already uses city-specific pages for cities including Pune, Mumbai, Hyderabad, Chennai, Bangalore, Kolkata, Delhi, Mysore, Madurai, Indore and Guwahati.

The redesigned site should make this architecture systematic.

---

# 10. Location + Service Pages

Where useful, create location-specific service pages.

Example:

```text
/locations/pune/physiotherapy-at-home
/locations/pune/doctor-at-home
/locations/pune/nurse-at-home

/locations/mumbai/physiotherapy-at-home
/locations/mumbai/doctor-at-home
```

However:

**Do not generate thousands of thin pages.**

A location-service page should only exist when:

* The service is actually available
* There is meaningful local information
* The page has unique useful content
* The page satisfies a real search intent

---

# 11. Search Architecture

The website should have global search.

Search should understand:

```text
Services
Conditions
Locations
Professionals
Resources
FAQs
Equipment
```

Example:

```text
User types:
"physio after knee surgery"

Results:

Physiotherapy at Home
Post-Surgery Rehabilitation
Knee Rehabilitation
Pune Physiotherapy
Related FAQs
```

Search should prioritize intent rather than exact keyword matching.

---

# 12. Service Discovery

A user who does not know the correct service should have an alternative path.

Recommended CTA:

> Not sure what care you need?

This opens a guided care finder:

```text
What do you need help with?

[Recovery after surgery]
[Elderly care]
[Long-term condition]
[Mobility]
[Medical procedure]
[Diagnostics]
[Something else]
```

Then:

```text
Need
↓
Patient situation
↓
Location
↓
Recommended services
↓
Talk to care expert
```

The care finder should never present itself as a medical diagnosis tool.

---

# 13. Booking Architecture

Booking should be a consistent system across services.

Example:

```text
Service
↓
Location
↓
Date / availability
↓
Patient information
↓
Contact information
↓
Review
↓
Confirmation
```

If online booking is unavailable for a particular service:

```text
Service
↓
Location
↓
Contact information
↓
Request callback
↓
Confirmation
```

The UI must clearly distinguish:

* Book Now
* Enquire
* Request Callback
* Contact Care Team

Do not use these terms interchangeably.

---

# 14. Enquiry Architecture

Every enquiry should capture only the minimum information necessary.

Initial form:

```text
Name
Phone
Location
Service
Preferred contact time
```

Additional information can be collected after initial lead creation.

Avoid asking for excessive medical information in the first conversion step.

---

# 15. About Architecture

```text
/about
/about/why-us
/about/quality-and-safety
/about/our-team
/about/patient-charter
```

The About section should answer:

* Who are we?
* Why should I trust you?
* Who provides the care?
* How is quality maintained?
* What standards do you follow?
* How is patient safety handled?

---

# 16. Resources Architecture

```text
/resources
/resources/blog
/resources/health-guides
/resources/faqs
/resources/videos
/resources/downloads
```

Resources should support both:

* User education
* Organic search

Educational content must not be used as a substitute for professional medical advice.

---

# 17. Blog Architecture

Blog URLs:

```text
/resources/blog/[slug]
```

Categories may include:

```text
Senior Care
Recovery
Physiotherapy
Nutrition
Diagnostics
Preventive Care
Home Healthcare
Caregiver Education
```

Blog content should link to relevant service and condition pages.

Example:

```text
Blog:
"How to care for someone recovering from a stroke"

↓
Stroke condition page

↓
Neuro Rehabilitation

↓
Physiotherapy at Home

↓
Book Assessment
```

---

# 18. Partner Architecture

```text
/partners
/partners/doctors
/partners/hospitals
/partners/corporates
```

Partner journeys must be separate from patient journeys.

The patient navigation should not be overloaded with corporate/partner information.

---

# 19. Careers Architecture

```text
/careers
/careers/open-positions
/careers/life-at-company
/careers/hiring-process
```

Careers content should remain outside the primary healthcare conversion flow.

---

# 20. Utility Pages

Required utility pages:

```text
/contact
/privacy-policy
/terms
/cookie-policy
/accessibility
/patient-charter
/thank-you
/404
```

---

# 21. URL Rules

URLs must:

* Be lowercase
* Use hyphens
* Be human-readable
* Avoid unnecessary IDs
* Avoid query parameters for canonical content
* Reflect the site's hierarchy

Good:

```text
/services/physiotherapy-at-home
/locations/pune
/conditions/stroke
/resources/blog/home-care-for-seniors
```

Bad:

```text
/service?id=183
/page/12345
/services?cat=4&id=81
```

---

# 22. Internal Linking Rules

Every service page should link to:

* Parent category
* Related services
* Relevant conditions
* Relevant locations
* FAQs
* Educational resources

Every location page should link to:

* Available services
* Popular services
* Relevant service-location pages

Every condition page should link to:

* Relevant services
* Relevant rehabilitation programs
* Relevant educational content

Every blog article should link to:

* At least one relevant service
* At least one relevant condition or guide where appropriate
* A clear conversion path

---

# 23. Breadcrumb Architecture

All deep pages should use breadcrumbs.

Example:

```text
Home
→ Services
→ Home Visits
→ Physiotherapy at Home
```

Location example:

```text
Home
→ Locations
→ Pune
→ Physiotherapy at Home
```

Condition example:

```text
Home
→ Conditions
→ Stroke
→ Rehabilitation
```

Breadcrumbs must use semantic structured data where applicable.

---

# 24. Navigation Rules for AI

When implementing the website:

1. Do not create a new top-level category without updating this document.
2. Do not create duplicate service pages.
3. Do not create a page solely because a keyword exists.
4. Do not create thin location pages.
5. Every page must have a defined user intent.
6. Every transactional page must have a primary CTA.
7. Every service must belong to a service category.
8. Every location must be represented by a location entity.
9. Related services must use internal links.
10. Canonical URLs must remain stable after launch.

---

# 25. Primary User Paths

## Path A — Knows the service

```text
Google
↓
Service page
↓
Trust / details
↓
Location
↓
Book / Enquire
```

## Path B — Knows the problem

```text
Google
↓
Condition page
↓
Recommended care
↓
Service page
↓
Book / Enquire
```

## Path C — Doesn't know the service

```text
Homepage
↓
Care Finder
↓
Recommended services
↓
Care Expert
↓
Booking / Enquiry
```

## Path D — Knows the location

```text
Google
↓
Location page
↓
Services available
↓
Service page
↓
Booking
```

## Path E — Returning user

```text
Homepage
↓
Quick Action
↓
Book / Contact
```

---

# 26. Homepage Information Architecture

The homepage should not attempt to display every service.

Recommended structure:

```text
Header
↓
Hero
↓
Primary care finder / booking action
↓
Trust signals
↓
Popular services
↓
Care categories
↓
How it works
↓
Why choose us
↓
Professionals / clinical expertise
↓
Patient stories
↓
Locations
↓
Health resources
↓
FAQs
↓
Final CTA
↓
Footer
```

The homepage is a **gateway**, not the entire website.

---

# 27. Footer Architecture

Footer should contain:

```text
Services
    Long-Term Care
    Home Visits
    Rehabilitation
    Diagnostics
    Medical Equipment
    Vaccination

Company
    About
    Why Us
    Our Team
    Careers

Resources
    Blog
    Health Guides
    FAQs

Locations
    Pune
    Mumbai
    Hyderabad
    Bangalore
    Chennai
    etc.

Partners
    Doctors
    Hospitals
    Corporates

Support
    Contact
    Request Callback

Legal
    Privacy
    Terms
    Accessibility
    Patient Charter
```

---

# 28. Final Architecture Rule

The website should feel simple even though the underlying platform is complex.

The internal system may contain:

```text
Hundreds of services
Hundreds of procedures
Many conditions
Many professionals
Many cities
Many resources
```

But the user should experience:

```text
What do you need?
        ↓
Where are you?
        ↓
Here are the best options.
        ↓
Here's why you can trust us.
        ↓
Let's get you started.
```

**Complexity belongs in the system.
Simplicity belongs in the interface.**
