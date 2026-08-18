# User Journeys

## 1. Purpose

This document defines the primary user journeys for the home healthcare platform.

The website must be designed around **real user goals**, not simply around individual pages.

Every major feature, page, component, form, CTA, and navigation decision should support one or more journeys defined here.

The core principle is:

> A user should be able to arrive with a problem, understand their options, trust the platform, and take the appropriate next step with minimal effort.

---

# 2. Primary User Types

The platform primarily serves the following audiences.

## 2.1 Patient

A person looking for healthcare services for themselves.

Examples:

* Doctor at home
* Physiotherapy
* Diagnostics
* Vaccination
* Medical equipment
* Nursing procedures

---

## 2.2 Family Member / Caregiver

A person arranging healthcare for someone else.

This is one of the most important user types.

Examples:

* Adult child arranging care for a parent
* Spouse arranging post-operative care
* Family arranging long-term nursing
* Family arranging ICU-level care at home

The interface must not assume that the person making the booking is the patient.

---

## 2.3 Elderly User

An older person looking for healthcare assistance.

The interface should prioritize:

* Large readable typography
* Simple language
* Clear CTAs
* Minimal steps
* Easy phone/contact access
* High contrast
* Low cognitive load

---

## 2.4 Healthcare Professional

A doctor, therapist, nurse, or other healthcare professional interacting with the platform.

Typical goals:

* Understand available services
* Refer a patient
* Understand clinical capabilities
* Contact the organization

---

## 2.5 Corporate / Institutional Partner

Organizations looking for healthcare partnerships.

Examples:

* Hospitals
* Corporates
* Insurance organizations
* Healthcare partners

This journey must remain separate from the primary patient journey.

---

# 3. Journey Design Principles

All journeys should follow these principles.

## 3.1 Minimize uncertainty

At every stage the user should understand:

* Where they are
* What they are looking at
* What happens next
* Whether they need to provide information
* Whether they are making a booking or simply requesting information

---

## 3.2 Minimize unnecessary steps

Do not force users through multiple pages when a shorter path is possible.

Bad:

```text
Homepage
→ Services
→ Category
→ Subcategory
→ Service
→ Contact
→ Form
→ Confirmation
```

Preferred:

```text
Homepage
→ Service
→ Location
→ Enquiry / Booking
→ Confirmation
```

---

## 3.3 Trust before commitment

Healthcare users may hesitate before sharing personal information.

Before asking for a significant commitment, provide appropriate:

* Clinical information
* Professional information
* Service details
* Safety information
* Trust signals
* FAQs

---

## 3.4 One primary action

Every major screen should have one dominant next action.

Examples:

```text
Service page:
Book Service

Condition page:
Explore Care Options

Location page:
View Services

Professional page:
Book Appointment

Equipment page:
Enquire Now
```

---

# 4. Core Journey: Service Known

## Scenario

The user already knows exactly what they want.

Example:

> "I need a physiotherapist at home."

### Journey

```text id="kqfjdn"
Search / Homepage
        ↓
Service Page
        ↓
Understand Service
        ↓
Select Location
        ↓
Check Availability
        ↓
Book / Enquire
        ↓
Confirmation
```

### Required experience

The service page must immediately communicate:

* What the service is
* Who it is for
* What is included
* Where it is available
* Why the organization is trustworthy
* How to start

### Primary CTA

```text
Book [Service]
```

### Secondary CTA

```text
Talk to a Care Expert
```

---

# 5. Core Journey: Problem Known, Service Unknown

## Scenario

The user knows the problem but does not know which service is appropriate.

Example:

> "My father had a stroke and needs help at home."

### Journey

```text id="c7ujk4"
Search
        ↓
Condition Page
        ↓
Understand Care Needs
        ↓
Recommended Services
        ↓
Service Page
        ↓
Talk to Care Expert / Enquire
```

### Important rule

The website must not imply that it can diagnose the patient.

It may explain:

* Common care needs
* Available healthcare services
* Rehabilitation options
* Professional support

But clinical diagnosis and treatment decisions must remain with qualified healthcare professionals.

---

# 6. Core Journey: User Has No Idea What Service They Need

## Scenario

The user knows they need help but does not know which service to choose.

Example:

> "My mother is becoming increasingly dependent at home. What kind of care do we need?"

### Journey

```text id="a4x8d8"
Homepage
        ↓
Care Finder
        ↓
Describe Situation
        ↓
Choose Patient Type / Need
        ↓
Choose Location
        ↓
Recommended Service Categories
        ↓
Care Expert
        ↓
Enquiry
```

### Care Finder

The care finder should ask simple questions.

Example:

```text
Who needs care?

[Myself]
[Parent]
[Spouse]
[Child]
[Someone else]
```

Then:

```text
What kind of help are you looking for?

[Daily care]
[Recovery]
[Medical care]
[Physiotherapy]
[Diagnostics]
[Long-term support]
[I'm not sure]
```

The system should then present suitable options.

---

# 7. Core Journey: Doctor at Home

## Scenario

The user needs a doctor to visit their home.

### Journey

```text id="m9v5ak"
Doctor at Home
        ↓
Service Information
        ↓
Location
        ↓
Select Preferred Time
        ↓
Patient Information
        ↓
Contact Information
        ↓
Review
        ↓
Confirm Request
        ↓
Confirmation
```

### Primary CTA

```text
Book Doctor
```

### Important information

The page should clearly explain:

* Service availability
* Types of consultations
* Expected process
* What happens after booking
* Any limitations
* What happens in urgent situations

The service must not be positioned as an emergency replacement for emergency medical services.

---

# 8. Core Journey: Physiotherapy at Home

## Scenario

The user wants physiotherapy after injury, surgery, or for rehabilitation.

### Journey

```text id="x5b4uj"
Search
        ↓
Physiotherapy Page
        ↓
Select Need / Condition
        ↓
Understand Assessment
        ↓
Book Assessment
        ↓
Location
        ↓
Patient Details
        ↓
Confirmation
```

### Important content

The page should answer:

* Who can benefit?
* What conditions are supported?
* What does the assessment involve?
* What happens during sessions?
* How frequently may sessions occur?
* Who provides the care?
* How is progress handled?

---

# 9. Core Journey: Long-Term Nursing

## Scenario

A family needs ongoing nursing support at home.

### Journey

```text id="n6cy78"
Long-Term Care
        ↓
Nursing at Home
        ↓
Care Requirements
        ↓
Select Duration / Schedule
        ↓
Location
        ↓
Family / Patient Information
        ↓
Care Assessment
        ↓
Enquiry
        ↓
Care Team Contact
```

### Important UX rule

Long-term care may require consultation rather than instant booking.

The interface should not pretend that every long-term care situation can be solved through a simple checkout flow.

Use:

```text
Request Care Assessment
```

when appropriate.

---

# 10. Core Journey: Elder Care

## Scenario

An adult child is arranging care for an elderly parent.

### Journey

```text id="ysf7g5"
Search / Homepage
        ↓
Elder Care
        ↓
Understand Care Options
        ↓
Choose Care Type
        ↓
View Caregiver / Nursing Options
        ↓
Location
        ↓
Request Consultation
        ↓
Care Team Contact
```

### UX considerations

The website should communicate with both:

* The family member making the decision
* The person receiving care

Avoid language that makes the patient feel like a burden.

Use respectful language such as:

* Older adult
* Senior
* Parent
* Family member
* Person receiving care

---

# 11. Core Journey: ICU / Critical Care at Home

## Scenario

A family is considering hospital-level care at home.

### Journey

```text id="v69k1k"
ICU at Home
        ↓
Clinical Capabilities
        ↓
Eligibility / Suitability Information
        ↓
Care Team Consultation
        ↓
Patient Assessment
        ↓
Care Plan
        ↓
Enquiry / Admission Process
```

### Critical rule

Do not treat this as a standard e-commerce booking.

The system should encourage professional assessment.

Primary CTA:

```text
Talk to a Care Expert
```

Secondary CTA:

```text
Request Assessment
```

---

# 12. Core Journey: Diagnostics

## Scenario

The user wants a diagnostic test performed at home.

### Journey

```text id="4n4xwv"
Diagnostics
        ↓
Search / Select Test
        ↓
Test Information
        ↓
Location
        ↓
Select Date / Time
        ↓
Patient Details
        ↓
Booking
        ↓
Sample Collection
        ↓
Results
```

Where technically supported, the system may later integrate:

```text
Booking
→ Collection
→ Processing
→ Results
→ Result Access
```

---

# 13. Core Journey: Medical Equipment

## Scenario

The user needs medical equipment.

### Journey

```text id="9r2yfl"
Medical Equipment
        ↓
Equipment Category
        ↓
Product
        ↓
Specifications
        ↓
Buy / Rent
        ↓
Location
        ↓
Availability
        ↓
Order / Enquiry
```

Product pages must clearly distinguish:

```text
Buy
Rent
Enquire
Unavailable
```

---

# 14. Core Journey: Vaccination

## Scenario

The user wants a vaccination service.

### Journey

```text id="jj48po"
Vaccination
        ↓
Vaccine
        ↓
Eligibility / Information
        ↓
Location
        ↓
Schedule
        ↓
Patient Details
        ↓
Booking
        ↓
Confirmation
```

Medical eligibility information must be informational and should not replace professional advice.

---

# 15. Core Journey: Location First

## Scenario

The user starts with:

> "Home healthcare services in Pune."

### Journey

```text id="b9p4os"
Search
        ↓
Pune Location Page
        ↓
Available Services
        ↓
Choose Service
        ↓
Service Details
        ↓
Book / Enquire
```

Location pages must never be empty SEO pages.

They should provide genuinely useful local information.

---

# 16. Core Journey: Service + Location Search

## Scenario

The user searches:

> "Physiotherapist at home in Pune."

### Journey

```text id="h1s5as"
Search
        ↓
Pune Physiotherapy Page
        ↓
Service Details
        ↓
Availability
        ↓
Book Assessment
```

If a location-specific service page exists, it should provide localized information.

---

# 17. Core Journey: Returning User

Returning users should have a faster path.

Example:

```text id="b1j7u4"
Homepage
        ↓
Quick Actions
        ↓
Book Again / Contact Care Team
```

Potential quick actions:

```text
Book Care
Call Us
Request Callback
Find a Service
```

---

# 18. Core Journey: Search

## Search behavior

Global search should support:

* Services
* Conditions
* Locations
* Resources
* FAQs
* Equipment

Example:

```text
Search:
"stroke"

Results:

Stroke Care
Stroke Rehabilitation
Physiotherapy at Home
Stroke Recovery Guide
Stroke FAQs
```

---

# 19. Core Journey: Contact

The contact journey should be intentionally simple.

```text id="swyfzh"
Contact
        ↓
Choose reason
        ↓
Contact option
```

Possible reasons:

```text
Book a Service
Existing Patient
General Enquiry
Partner Enquiry
Career
Other
```

---

# 20. Core Journey: Request Callback

The callback flow should require minimal information.

```text id="w3t5y6"
Request Callback
        ↓
Name
Phone
Location
Reason
        ↓
Submit
        ↓
Confirmation
```

Do not require a user to create an account simply to request a callback.

---

# 21. Form UX Journey

Every form must follow:

```text id="4h0s2a"
Start
↓
Input
↓
Validation
↓
Review
↓
Submit
↓
Success
```

Errors should be shown next to the relevant field.

Example:

```text
Phone number
[___________]

Please enter a valid phone number.
```

Do not clear the entire form after a validation error.

---

# 22. Form Abandonment

If the platform supports analytics, track:

```text id="2szkfl"
Form opened
Field interaction
Form validation error
Form submitted
Form abandoned
```

Do not collect unnecessary sensitive medical information merely for analytics.

---

# 23. Confirmation Journey

After successful booking or enquiry:

```text id="n4j6t8"
Success
↓
Confirmation number / reference
↓
What happens next
↓
Expected contact / service timing
↓
Support contact
```

Example:

```text
Request received.

Our care team will contact you regarding your request.

Reference:
AHC-XXXXX
```

The confirmation screen should provide reassurance and clear next steps.

---

# 24. Failed Booking Journey

If a booking cannot be completed:

```text id="h5j5s6"
Booking failure
↓
Explain problem
↓
Preserve entered information
↓
Offer alternative
```

Possible alternatives:

```text
Try another time
Request callback
Talk to care team
Call support
```

Never simply display:

> Something went wrong.

---

# 25. Service Unavailable Journey

If a service is not available in the user's location:

```text id="d0j9x2"
Service
↓
Location
↓
Unavailable
↓
Explain availability
↓
Alternative service
↓
Request notification / callback
```

Example:

> This service is currently unavailable in your location.

Then provide:

```text
Explore available services
Request a callback
```

---

# 26. 404 Journey

A missing page should help users recover.

Structure:

```text id="x9x3b1"
404
↓
Page not found
↓
Search
↓
Popular services
↓
Go Home
```

Do not create a dead-end 404 page.

---

# 27. Mobile User Journey

Mobile users should have persistent access to primary actions.

Recommended bottom action bar:

```text id="8u0m2d"
Call
Book
WhatsApp / Contact
```

The exact actions depend on the available communication channels.

The bottom navigation must not obstruct:

* Forms
* Keyboard
* Cookie controls
* Important content
* Accessibility controls

---

# 28. Accessibility Journey

Users navigating with:

* Keyboard
* Screen reader
* Larger text
* Reduced motion
* Touch-only interaction

must be able to complete the same core journeys.

A user must never be forced to use:

* Hover-only interactions
* Drag-only interactions
* Tiny controls
* Color-only instructions

---

# 29. Authentication Journey

The initial version should avoid mandatory account creation unless there is a clear product requirement.

Users should be able to:

* Browse services
* Search
* Read resources
* Request a callback
* Make an enquiry

without creating an account.

Authentication should be introduced when needed for functionality such as:

```text
Patient Portal
Bookings
Appointments
Reports
Orders
Care Plans
Payment History
```

---

# 30. Patient Portal Journey

If a patient portal is implemented:

```text id="5uq0ur"
Login
↓
Dashboard
├── Upcoming appointments
├── Bookings
├── Reports
├── Care plans
├── Payments
├── Documents
└── Profile
```

Sensitive patient information must never be exposed through public pages.

---

# 31. Healthcare Professional Journey

Healthcare professionals should have a separate experience.

```text id="w8ubj1"
Professional
↓
For Professionals
↓
Understand Services
↓
Referral / Partnership
↓
Submit Enquiry
↓
Professional Contact
```

Do not mix professional workflows into the patient booking experience.

---

# 32. Partner Journey

```text id="t6x5m8"
Partner
↓
For Partners
↓
Choose Partner Type
↓
Understand Offering
↓
Submit Partnership Enquiry
↓
Confirmation
```

---

# 33. Content Discovery Journey

Example:

```text id="m8j5as"
Google
↓
Health Article
↓
Related Condition
↓
Relevant Service
↓
Trust Information
↓
CTA
```

Educational content should naturally connect users to relevant services without becoming aggressive advertising.

---

# 34. Cross-Sell / Related Service Journey

Related services should be contextually relevant.

Example:

```text id="d3t7r2"
Physiotherapy
    ↓
Related:
    Occupational Therapy
    Speech Therapy
    Neuro Rehabilitation
```

Do not display unrelated services simply to increase page density.

---

# 35. Journey Priority

The following journeys have the highest priority for MVP.

### P0 — Must work

```text id="t7r4y0"
Service discovery
Service page
Location selection
Enquiry
Callback
Booking
Confirmation
Mobile experience
Search
```

### P1 — Important

```text id="1e5p4s"
Care Finder
Condition discovery
Location pages
Diagnostics booking
Equipment enquiry
Professional profiles
```

### P2 — Later

```text id="x9j3u1"
Patient portal
Advanced personalization
Care plans
Online payments
Order tracking
Advanced recommendations
```

---

# 36. Analytics Events

The system should be designed to track major journey events.

Suggested events:

```text id="8q6y0n"
page_view
service_view
condition_view
location_view
search_started
search_result_clicked
care_finder_started
care_finder_completed
cta_clicked
booking_started
booking_completed
enquiry_started
enquiry_completed
callback_requested
phone_clicked
form_error
form_abandoned
```

Do not send unnecessary sensitive medical information to analytics platforms.

---

# 37. Journey Success Metrics

Each journey should have a measurable outcome.

Examples:

| Journey           | Primary Success             |
| ----------------- | --------------------------- |
| Service discovery | Service page reached        |
| Booking           | Booking completed           |
| Enquiry           | Lead created                |
| Callback          | Callback request created    |
| Care Finder       | Recommendation → enquiry    |
| Diagnostics       | Appointment booked          |
| Equipment         | Enquiry/order created       |
| Resources         | Relevant service discovered |
| Location          | Service selected            |

---

# 38. Global Journey Principle

The entire platform should follow this mental model:

```text id="i0s2h8"
USER NEED
    ↓
UNDERSTAND
    ↓
TRUST
    ↓
CHOOSE
    ↓
ACT
    ↓
CONFIRM
```

The website should never force the user to understand the company's organizational structure before they can receive help.

The user's mental model is more important than the company's internal hierarchy.

---

# 39. AI Implementation Rule

When implementing any new page or feature, the AI must answer these questions first:

1. Which user type is this for?
2. Which journey does it support?
3. What is the user's intent?
4. What information does the user need?
5. What is the user's next action?
6. What is the primary CTA?
7. What happens after the CTA?
8. What happens if the action fails?
9. What happens if the service is unavailable?
10. How does the user recover from an error?

If these questions cannot be answered, the feature is not ready for implementation.

---

# 40. Final Principle

The platform should not behave like a collection of webpages.

It should behave like a **guided healthcare service platform**.

The user should always feel:

> "I know where I am, I understand my options, I know what happens next, and I can easily get help."

That is the standard for every future page, component, API, and workflow.
