# Page Specifications

## 1. Purpose

This document defines the functional, structural, content, UX, SEO, and conversion requirements for every major page type in the healthcare platform.

This is the source of truth for page construction.

The AI must not create pages purely from visual inspiration.

Every page must have:

* A defined purpose
* A target user
* A defined journey
* A primary CTA
* Required content
* Required states
* SEO requirements
* Responsive behavior
* Accessibility requirements

---

# 2. Page Specification Standard

Every page specification must contain:

```text id="fjk4v6"
Page ID
Page name
URL
Page type
Purpose
Primary user
User intent
Primary journey
Primary CTA
Secondary CTA
Required sections
Optional sections
Required components
Data requirements
SEO requirements
Accessibility requirements
Responsive requirements
Loading state
Empty state
Error state
Success state
Analytics events
```

---

# 3. Page Types

The platform should support these primary page types:

```text id="3kw8uq"
1. Homepage
2. Service Category
3. Service Detail
4. Condition
5. Location
6. Location + Service
7. Professional Profile
8. Equipment/Product
9. Diagnostic Service
10. Vaccination
11. Care Finder
12. Search
13. Resource Listing
14. Article
15. FAQ
16. About
17. Contact
18. Booking
19. Enquiry
20. Confirmation
21. Patient Portal
22. Partner
23. Careers
24. Legal
25. Error
```

---

# 4. Homepage

## Page ID

```text id="3m6h1p"
HOME-001
```

## URL

```text id="18v4ka"
/ 
```

## Purpose

Introduce the organization, help users understand available care, establish trust, and direct users into the appropriate service journey.

The homepage is a **gateway**, not a complete service catalog.

---

## Primary users

* Patients
* Family members
* Caregivers
* First-time visitors
* Returning users

---

## Primary user intent

```text id="j7bl6n"
"I need healthcare at home and want to understand what my options are."
```

---

## Primary CTA

```text id="3qv0h6"
Find Care
```

---

## Secondary CTAs

Depending on business requirements:

```text id="3b6n0f"
Book Care
Call
Request Callback
```

---

## Required sections

### 1. Header

Must contain:

* Logo
* Primary navigation
* Location selector
* Primary CTA
* Mobile navigation

---

### 2. Hero

Must immediately communicate:

* What the organization does
* Who it helps
* Main benefit
* Primary action

Example structure:

```text id="1t3bfa"
Healthcare at home,
designed around you.

Professional healthcare services
delivered at home by trained professionals.

[Find Care]
```

Do not overload the hero with multiple messages.

---

### 3. Trust introduction

Possible content:

* Years of experience
* Number of patients served
* Professional network
* Clinical expertise
* Accreditations

All statistics must be verified before publication.

---

### 4. Popular services

Display a curated set of high-demand services.

Example:

```text id="jz5xod"
Doctor at Home
Physiotherapy
Nursing
Elder Care
Diagnostics
Medical Equipment
```

Do not display the entire service catalog.

---

### 5. Care categories

Allow users to discover services by need.

Example:

```text id="2xq2ng"
Recovery
Long-Term Care
Senior Care
Medical Care
Diagnostics
Rehabilitation
```

---

### 6. Care Finder

Provide an alternative for users who do not know which service they need.

CTA:

```text id="w1f1yw"
Not sure what care you need?
Find the right care
```

---

### 7. How it works

Recommended:

```text id="qj9mcb"
Tell us what you need
        ↓
Choose your service
        ↓
We arrange your care
```

Keep this section simple.

---

### 8. Why choose us

Should communicate concrete differentiators.

Avoid generic claims such as:

> "We care about you."

Prefer evidence-backed claims.

---

### 9. Professionals / clinical expertise

Show relevant professionals or clinical capabilities.

Examples:

* Doctors
* Nurses
* Physiotherapists
* Dietitians
* Therapists

---

### 10. Patient experiences

Use verified testimonials only.

Each testimonial must have appropriate consent and attribution requirements satisfied.

---

### 11. Locations

Show major service locations.

CTA:

```text id="r0l4oc"
Find services near you
```

---

### 12. Resources

Show a limited number of relevant:

* Guides
* Articles
* FAQs

---

### 13. Final CTA

Clear closing action.

Example:

```text id="y7v1v6"
Need help choosing the right care?

[Talk to a Care Expert]
```

---

### 14. Footer

Use the global footer architecture defined in `INFORMATION_ARCHITECTURE.md`.

---

# 5. Service Category Page

## Page ID

```text id="5t0y4c"
SERVICE-CATEGORY-001
```

## Example URL

```text id="a3zj8x"
/services
```

or:

```text id="1u7q9n"
/services/rehabilitation
```

---

## Purpose

Help users understand a group of related healthcare services.

---

## Required sections

```text id="t7r5kc"
Hero
↓
Category explanation
↓
Service grid
↓
Who these services are for
↓
How to choose
↓
Trust / clinical information
↓
FAQs
↓
CTA
```

---

## Service cards

Each card should contain:

* Service name
* Short description
* Optional supporting information
* Link

Avoid excessive information.

---

# 6. Service Detail Page

## Page ID

```text id="q3x6bz"
SERVICE-001
```

## Example URL

```text id="9sl0n4"
/services/physiotherapy-at-home
```

---

## Purpose

Convert users searching for a specific service into an informed booking or enquiry.

---

## Primary CTA

```text id="9w7l8c"
Book Service
```

---

## Required sections

```text id="o9i1dn"
Breadcrumb
↓
Hero
↓
Service overview
↓
Who it's for
↓
Conditions / use cases
↓
What's included
↓
How it works
↓
Professionals
↓
Why choose us
↓
Safety / quality
↓
Pricing information
↓
FAQs
↓
Related services
↓
CTA
```

---

## Hero requirements

The hero must communicate:

* Service name
* Main benefit
* Short explanation
* Location availability
* Primary CTA

Example:

```text id="t0r8u2"
Physiotherapy at Home

Get professional physiotherapy support
without leaving home.

Available in selected locations.

[Book Assessment]
```

---

## Service overview

Answer:

> What is this service?

Keep it concise.

---

## Who it's for

Examples:

* Post-surgery recovery
* Mobility challenges
* Sports injury recovery
* Neurological rehabilitation

Only include medically reviewed use cases.

---

## What's included

Use a structured list.

Example:

```text id="5t9zby"
Assessment
Personalized plan
Home sessions
Progress tracking
Professional guidance
```

Do not promise services that are not operationally available.

---

## How it works

Use a simple 3–5 step process.

```text id="9p7w4r"
1. Book an assessment
2. Professional assessment
3. Care plan
4. Home sessions
5. Progress review
```

---

## Professional section

Show relevant professionals where data is available.

Possible fields:

* Name
* Qualification
* Specialty
* Experience
* Profile

---

## Pricing

Pricing should be transparent where possible.

If pricing depends on assessment, location, duration, or service requirements, explain the reason rather than displaying misleading fixed pricing.

---

## FAQ

FAQs must answer actual user questions.

Avoid using FAQs solely for SEO.

---

# 7. Condition Page

## Page ID

```text id="7m9y3q"
CONDITION-001
```

## Example URL

```text id="4u1r7d"
/conditions/stroke
```

---

## Purpose

Help users who know the patient's condition but do not know which home healthcare service they need.

---

## Required sections

```text id="1g3v5c"
Condition overview
↓
Common care needs
↓
Available services
↓
Professionals
↓
Recovery / support options
↓
FAQs
↓
Resources
↓
CTA
```

---

## Medical safety requirement

Condition pages must not:

* Diagnose users
* Claim guaranteed outcomes
* Replace medical consultation
* Give unsafe individualized treatment instructions

---

# 8. Location Page

## Page ID

```text id="6y4p1x"
LOCATION-001
```

## Example URL

```text id="2q7b9a"
/locations/pune
```

---

## Purpose

Help users discover healthcare services available in their city.

---

## Required sections

```text id="2m8n4r"
Location hero
↓
Services available
↓
Popular services
↓
Areas served
↓
Local professionals / facilities
↓
How care works
↓
FAQs
↓
Contact
↓
CTA
```

---

## SEO requirement

Location pages must contain genuinely useful local information.

Do not generate duplicate pages by replacing only the city name.

---

# 9. Location + Service Page

## Page ID

```text id="1k8z4p"
LOCATION-SERVICE-001
```

## Example

```text id="x3t6n7"
/locations/pune/physiotherapy-at-home
```

---

## Purpose

Serve users with a specific service + location intent.

---

## Required sections

```text id="z2v5m8"
Location + service hero
↓
Service details
↓
Local availability
↓
Local process
↓
Professionals
↓
FAQs
↓
CTA
```

Content must contain meaningful local differences.

---

# 10. Professional Profile

## Page ID

```text id="9v3k7m"
PROFESSIONAL-001
```

## Example URL

```text id="7f2r9x"
/professionals/[slug]
```

---

## Purpose

Build trust and help users understand who provides the care.

---

## Fields

```text id="5q6n8w"
Name
Photo
Role
Qualifications
Specializations
Experience
Location
Languages
Availability
Bio
```

Only publish verified professional information.

---

# 11. Equipment / Product Page

## Page ID

```text id="4m8x2z"
PRODUCT-001
```

## Example URL

```text id="6p9v1c"
/equipment/[slug]
```

---

## Required sections

```text id="t5j9s2"
Product hero
↓
Images
↓
Description
↓
Specifications
↓
Use cases
↓
Buy / Rent
↓
Availability
↓
Delivery information
↓
Support
↓
FAQs
↓
CTA
```

---

# 12. Diagnostic Service Page

## Page ID

```text id="8r3m6v"
DIAGNOSTIC-001
```

---

## Required information

* Test name
* What it is
* Why it may be ordered
* Preparation requirements
* Sample collection
* Expected process
* Result delivery
* Location availability
* Pricing where applicable
* FAQs

Medical interpretation must not be provided unless explicitly handled by an appropriate clinical workflow.

---

# 13. Vaccination Page

## Page ID

```text id="5k7p3d"
VACCINATION-001
```

---

## Required sections

```text id="x4b7n9"
Vaccine overview
↓
Who it may be recommended for
↓
General information
↓
Availability
↓
Booking
↓
FAQs
↓
CTA
```

Eligibility and medical advice must be handled appropriately by qualified professionals.

---

# 14. Care Finder

## Page ID

```text id="2m7q9x"
CARE-FINDER-001
```

## URL

```text id="8v4r2n"
/find-care
```

---

## Purpose

Help users who do not know which service they need.

---

## UX

Use a step-by-step experience.

Example:

```text id="5p9x3r"
Step 1
Who needs care?

Step 2
What kind of help is needed?

Step 3
Where are they located?

Step 4
Recommended options
```

---

## Result page

Results must include:

* Recommended services
* Why they may be relevant
* Relevant conditions
* Option to speak with a professional

The system must not present results as medical diagnosis.

---

# 15. Search Page

## Page ID

```text id="7x3m5q"
SEARCH-001
```

## URL

```text id="9k4r1v"
/search
```

---

## Search categories

Results should support:

* Services
* Conditions
* Locations
* Professionals
* Resources
* FAQs
* Equipment

---

## States

Must support:

```text id="4b7q2m"
Initial
Loading
Results
No results
Error
```

---

# 16. Resource Listing Page

## Page ID

```text id="3p8m6x"
RESOURCE-LIST-001
```

## Example

```text id="9x2v4c"
/resources
```

---

## Required sections

```text id="7q1m8z"
Hero
↓
Featured resources
↓
Categories
↓
Search / filter
↓
Resource grid
```

---

# 17. Article Page

## Page ID

```text id="6m4x8q"
ARTICLE-001
```

## Example URL

```text id="1v7p3z"
/resources/blog/[slug]
```

---

## Required sections

```text id="5n2q9w"
Title
↓
Author / reviewer
↓
Published / updated date
↓
Featured image
↓
Article
↓
Related resources
↓
Relevant service
↓
CTA
```

---

## Medical content

Medical content should include appropriate authorship/review information where required.

---

# 18. FAQ Page

## Page ID

```text id="8q4m1x"
FAQ-001
```

---

## Requirements

FAQs should support:

* Category
* Search
* Accordion interaction
* Deep linking where appropriate

FAQ content must be useful to humans first.

---

# 19. Contact Page

## Page ID

```text id="2x7m5q"
CONTACT-001
```

---

## Required sections

```text id="4v9r1n"
Contact options
↓
Phone
↓
Location
↓
General enquiry
↓
Service enquiry
↓
Partner enquiry
```

The user should not have to navigate multiple pages to find contact information.

---

# 20. Booking Page

## Page ID

```text id="7m3q9x"
BOOKING-001
```

---

## Required flow

```text id="6v1r8p"
Service
↓
Location
↓
Date / Time
↓
Patient information
↓
Contact information
↓
Review
↓
Submit
```

---

## Requirements

* Clear progress indicator
* Validation
* Error recovery
* Preserve entered data
* Mobile-friendly fields
* Accessible labels
* Clear privacy messaging

---

# 21. Enquiry Page

## Page ID

```text id="9q2m6v"
ENQUIRY-001
```

---

## Required fields

Start with the minimum:

```text id="5x8r1k"
Name
Phone
Location
Service
Message / requirement
```

Additional fields should only appear when necessary.

---

# 22. Confirmation Page

## Page ID

```text id="4m7x9q"
CONFIRMATION-001
```

---

## Required information

```text id="2v6p8n"
Success state
Reference number
What happens next
Expected response time
Support contact
Relevant next action
```

---

# 23. About Page

## Page ID

```text id="8x3m5v"
ABOUT-001
```

---

## Required sections

```text id="1q7r9m"
Company introduction
↓
Mission
↓
Healthcare philosophy
↓
Clinical capabilities
↓
Leadership / team
↓
Quality
↓
Safety
↓
Trust indicators
```

---

# 24. Why Choose Us Page

## Page ID

```text id="5m9x2q"
WHY-US-001
```

---

## Requirements

Claims must be supported by evidence.

Preferred structure:

```text id="7v4r1p"
Claim
↓
Evidence
↓
Explanation
```

Avoid empty marketing statements.

---

# 25. Partner Page

## Page ID

```text id="2q8m6x"
PARTNER-001
```

---

## Partner types

```text id="5v3r9n"
Doctors
Hospitals
Corporates
Healthcare Organizations
```

Each partner type should have a dedicated value proposition.

---

# 26. Careers Page

## Page ID

```text id="7m1x4q"
CAREERS-001
```

---

## Required sections

```text id="8v2p6r"
Why work here
↓
Culture
↓
Open positions
↓
Hiring process
↓
Benefits
↓
FAQ
```

---

# 27. Patient Portal

## Page ID

```text id="3q9m5x"
PORTAL-001
```

The portal is authenticated and must be treated as a separate application layer.

Potential sections:

```text id="6v4r8p"
Dashboard
Appointments
Bookings
Care Plans
Reports
Documents
Payments
Profile
Support
```

All patient data must be protected by appropriate authentication and authorization.

---

# 28. Legal Pages

Required:

```text id="2m7x9q"
Privacy Policy
Terms of Service
Cookie Policy
Accessibility Statement
Patient Charter
```

Legal content must be approved by the appropriate organization/legal stakeholders.

---

# 29. Error Pages

Required:

```text id="8q3v5m"
404
500
Network Error
Service Unavailable
```

Each must provide recovery actions.

---

# 30. Global Page Requirements

Every page must include:

### Metadata

* Page title
* Meta description
* Canonical URL
* Open Graph metadata
* Social sharing metadata where relevant

### Accessibility

* One clear H1
* Logical heading hierarchy
* Keyboard navigation
* Accessible interactive controls
* Alt text
* Form labels

### Navigation

* Header
* Breadcrumbs where appropriate
* Footer

### Analytics

Relevant page and CTA events.

---

# 31. Page State Requirements

Interactive pages must define:

```text id="7p3m9x"
Default
Loading
Success
Empty
Error
Unavailable
Offline
```

Not every state applies to every page, but every state that can realistically occur must be designed.

---

# 32. Responsive Requirements

Every page must be explicitly tested at:

```text id="1q5v8m"
Mobile
Tablet
Desktop
Large desktop
```

Responsive behavior must follow `RESPONSIVE_BEHAVIOR.md`.

---

# 33. SEO Requirements

Search-indexable pages must define:

```text id="6m2x9q"
Primary keyword / intent
Title
Meta description
Canonical
Structured data
Internal links
Breadcrumbs
Related content
```

SEO must never override usability.

---

# 34. Data-Driven Pages

Service, condition, location, professional, product, article, and FAQ pages should be driven by structured data wherever practical.

Do not duplicate page components for every service.

Preferred architecture:

```text id="4v7r1n"
Page Template
+
Structured Content
=
Individual Page
```

Example:

```text id="m2x8q6"
Service Template
+
Physiotherapy data
=
Physiotherapy page
```

---

# 35. CMS Compatibility

The architecture should support a future CMS or admin system.

Content such as:

* Services
* FAQs
* Articles
* Professionals
* Locations
* Testimonials

should not require code changes for ordinary content updates.

---

# 36. Page Performance

Every page should minimize:

* Unnecessary JavaScript
* Large images
* Render-blocking resources
* Third-party scripts
* Excessive animations

Content should load progressively where appropriate.

---

# 37. Page Security

Public pages must never expose:

* Private patient data
* Internal APIs
* Credentials
* Admin information
* Sensitive operational data

Authenticated pages must enforce authorization server-side.

---

# 38. Page Creation Checklist

Before adding a new page:

* [ ] Define page ID
* [ ] Define URL
* [ ] Define user intent
* [ ] Define target user
* [ ] Define primary journey
* [ ] Define primary CTA
* [ ] Define required sections
* [ ] Define data requirements
* [ ] Define SEO requirements
* [ ] Define accessibility requirements
* [ ] Define loading state
* [ ] Define empty state
* [ ] Define error state
* [ ] Define analytics
* [ ] Check for duplicate pages
* [ ] Check internal linking
* [ ] Check mobile behavior

---

# 39. AI Implementation Rule

When an AI agent is asked:

> "Build the [page name] page."

It must first locate the relevant page specification in this document.

If the page does not exist:

1. Determine whether an existing page type can support it.
2. Do not immediately invent a new page structure.
3. If a genuinely new page type is required, update this document first.
4. Then implement the page.

---

# 40. Final Principle

A page is not considered complete because it looks correct.

A page is complete when:

```text id="9m4x7q"
Content
+
UX
+
Accessibility
+
Responsive behavior
+
SEO
+
Data
+
Error handling
+
Analytics
+
Conversion
+
Security
```

are all properly defined and implemented.
