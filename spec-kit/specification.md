# Specification — Long Term Care & Home Visit Vertical

## 1. What we are building

A set of 13 pages for the CareNest home healthcare platform covering two
service verticals: **Long Term Care** and **Home Visit**.

Owner of this scope: **Atharv**

These pages exist to help patients and family members:

1. Understand the care services available at home
2. Determine whether a service fits their situation
3. Trust the organization enough to act
4. Book care, request an assessment, or request a callback

## 2. Why we are building it

Market analysis and content-gap review show:

- The existing reference category pages mix too many service types without
  guidance, making first-time visitors guess which service fits.
- Individual procedures (Ryle's tube, Foley catheter, IV infusion, wound
  dressing, tracheostomy care) are buried inside one generic page, hurting
  both usability and search discovery.
- Pricing is unclear — users abandon at the enquiry step because they cannot
  tell whether the service fits their budget.
- FAQ content is scattered; there is no single help center.
- A footer link ("Patient Charter") points to an unrelated account page — a
  trust-damaging bug.

Success is measured by:

```text
Enquiry/callback rate from service pages
FAQ page self-service rate (FAQ → no further contact)
Procedure pages ranking for their procedure names
Pricing page reducing "how much does it cost" abandonment
```

## 3. Pages in scope

### 3.1 Long Term Care vertical (hub + 4 services)

```text
1.  Long Term Care — hub page
2.  Nurse at Home
3.  Attendant / Caregiver at Home
4.  ICU at Home
5.  Elder Care
```

### 3.2 Home Visit vertical (hub + 3 services)

```text
6.  Home Visit — hub page
7.  Doctor at Home
8.  Physiotherapy at Home
9.  Post-Surgical Care
```

### 3.3 New pages added by this scope

```text
10. FAQ / Help Center (site-wide, content sourced from these two verticals)
11. Pricing & Plans Comparison (LTC + Home Visit packages side by side)
12. Individual procedure pages:
    - Ryle's Tube Insertion / Care
    - Foley Catheter Insertion / Care
    - IV Infusion at Home
    - Wound Dressing at Home
    - Tracheostomy Care
13. Patient Charter (fixes the broken footer link pointing to /account/)
```

## 4. What each page must do

### 4.1 Hub pages (Long Term Care, Home Visit)

Purpose: orient the visitor, explain the difference between services, and
route them to the right service page.

Must answer:

```text
What is this category of care?
Which services are inside it?
Which one fits my situation?
Where is it available?
How do I get started?
```

### 4.2 Service detail pages (Nurse, Attendant, ICU, Elder Care, Doctor, Physio, Post-Surgical)

Purpose: convert a specific search intent into a booking, assessment request,
or callback.

Each page answers:

```text
What is this service?
Who is it for?
What is included?
How does it work?
Who provides the care?
How much does it cost (or why price varies)?
What happens after I book?
```

Service-specific requirements:

```text
Nurse at Home        → CTA: "Request a care assessment"
Attendant at Home    → clarify difference vs nurse; "Request a care assessment"
ICU at Home          → CTA: "Talk to a care expert"; eligibility info;
                       emergency disclaimer; never instant-book
Elder Care           → respectful senior language; family-decision-maker framing
Doctor at Home       → CTA: "Book a doctor"; non-emergency positioning
Physiotherapy        → CTA: "Book an assessment"; conditions/use-cases list
Post-Surgical Care   → recovery-framed; links to physio + nurse + rehab services
```

### 4.3 Procedure pages (5 pages)

Purpose: quick, trustworthy answers for users searching a specific procedure.

Must include:

```text
What happens during the visit (3–5 steps)
Who performs it (trained nurse/technician)
What prep/care is needed
Pricing note ("Consumables are charged separately" where applicable)
3–5 FAQs
Book CTA + call alternative
```

### 4.4 FAQ / Help Center

Purpose: self-service answers; reduces calls for common questions.

Requirements:

```text
Grouped categories (booking, services, pricing, locations, safety)
Searchable
Accordion interaction with deep-linkable questions
Links out to city-specific service pages (coordinate with Person C)
```

### 4.5 Pricing & Plans Comparison

Purpose: transparent cost expectations; reduces enquiry abandonment.

Requirements:

```text
Side-by-side comparison: Long Term Care plans vs Home Visit packages
"From ₹X" pricing with clear note when price depends on assessment
Explanation of what changes the price (duration, location, consumables)
CTA per plan: "Request a care assessment" / "Book care"
No fake urgency, no hidden conditions
```

### 4.6 Patient Charter

Purpose: restore trust; fix broken footer link.

Requirements:

```text
Real page at /patient-charter
Rights & responsibilities of patients and the organization
Plain language; link from footer and privacy page
Content approved by the organization
```

## 5. What is NOT in scope

```text
Diagnostics / Vaccination / Equipment pages      → Person B
About / Careers / News / City pages + SEO        → Person C
Payments, patient portal, care plans
Backend development beyond what these pages consume
```

## 6. Acceptance criteria

```text
[ ] All 13 pages render server-side with real data shapes from the API contract
[ ] Each page has exactly one primary CTA with correct vocabulary
[ ] Procedure pages are individually findable (unique H1, title, meta)
[ ] Pricing page shows transparent "from" pricing with explanations
[ ] FAQ page is searchable and links to city pages
[ ] Patient Charter is live at /patient-charter and footer link fixed
[ ] No copied branding/copy from any reference website
[ ] Medical disclaimers present where required
[ ] Mobile sticky action bar works on all 13 pages
```

END OF SPECIFICATION