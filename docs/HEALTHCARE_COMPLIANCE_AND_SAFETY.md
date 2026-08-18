# Healthcare Compliance and Safety

## 1. Purpose

This document defines the medical safety and compliance requirements for the platform.

The platform is a healthcare SERVICE discovery and booking platform.

It is NOT:

* A diagnostic tool
* A telemedicine treatment system
* A substitute for emergency services
* A source of personalized medical advice

All requirements here are mandatory. Legal counsel and the organization must
review final wording before production.

---

## 2. Medical Disclaimer Standard

### 2.1 Where required

1. Care finder results
2. Condition pages
3. Diagnostic service pages
4. Blog articles with medical content
5. Vaccination pages
6. Footer (general disclaimer)

### 2.2 Standard wording

```text
"This website provides general information about healthcare services.
It is not a substitute for professional medical advice, diagnosis,
or treatment. Always seek the advice of a qualified healthcare
provider with any questions about a medical condition.

For medical emergencies, contact your local emergency service
or visit the nearest emergency department."
```

Exact wording approved by the organization before production.

### 2.3 Rules

1. The emergency message appears on any page describing critical care
   (ICU at home, stroke, heart conditions).
2. Disclaimers are visually distinct but not alarm-styled.
3. Disclaimers never disappear behind toasts or popups.

---

## 3. What the Platform Must Never Do

```text
[ ] Diagnose a user's medical condition
[ ] Guarantee treatment outcomes
[ ] Prescribe or recommend specific medication
[ ] Provide individualized treatment instructions
[ ] Position home care as a replacement for emergency services
[ ] Display unverified clinical statistics
[ ] Display unverified professional credentials
[ ] Collect medical information without a clear care purpose
[ ] Present AI-generated content as medical advice
```

---

## 4. Service-Specific Safety Rules

### 4.1 ICU at Home / critical care

1. Primary CTA: "Talk to a care expert" — never instant "Buy".
2. Page must explain eligibility and the need for clinical assessment.
3. Emergency disclaimer required.

### 4.2 Long-term care

1. Booking is a care assessment request, not a checkout.
2. Never imply immediate availability of a specific caregiver without verification.

### 4.3 Doctor at Home

1. Must state the service is for non-emergency consultations.
2. Must not claim emergency response capability unless true.

### 4.4 Diagnostics

1. Test pages explain what the test measures in plain language.
2. Results interpretation is performed only through appropriate clinical workflows.
3. Pages do not instruct users to change medication based on results.

### 4.5 Vaccination

1. Eligibility is informational; final eligibility determined by a qualified professional.
2. Pages do not guarantee protection.
3. Minors require guardian consent (parent/legal guardian).

### 4.6 Medical equipment

1. Rental/buy pages state that clinical advice for equipment selection
   comes from qualified professionals when offered.
2. Safety instructions accompany equipment where relevant.

### 4.7 Care finder

1. Results are phrased as "services that may be relevant", never "your condition is X".
2. A disclaimer precedes results (section 2.2).

---

## 5. Privacy & Data Protection (India)

### 5.1 Applicable law

Digital Personal Data Protection Act, 2023 (DPDP Act) — India.

Implementation requirements:

```text
Consent:  explicit, informed, specific, for each purpose
Purpose:  data used only for stated purpose (booking, callback, contact)
Access:   users can view the data held about them
Correction: users can update their data
Erasure:  users can request deletion of their data
Grievance: a grievance officer contact published
Security: reasonable security safeguards (see AUTHENTICATION_AND_SECURITY.md)
```

### 5.2 Health data sensitivity

Patient medical notes are sensitive personal data:

1. Collected only when necessary for care.
2. Stored encrypted at rest (Supabase encryption at rest).
3. Access restricted to: the patient, assigned care staff.
4. Never exposed through public pages or analytics.

### 5.3 Privacy notice

Required content (privacy-policy page):

```text
What data we collect
Why we collect it
How we use it
Who we share it with (only as necessary: care team, providers)
How long we keep it
Your rights (access, correction, erasure)
Grievance officer contact
How to contact us
```

### 5.4 Cookie/consent banner

1. Analytics cookies require consent where applicable law requires.
2. The banner offers accept / reject options; rejecting never breaks core functionality.
3. Consent choices are stored and honored.

---

## 6. Content Approval Gates

Content types requiring approval before publication:

```text
Medical claims / statistics       → clinical + legal review
Pricing                          → operations approval
Patient testimonials             → consent + accuracy check
Professional profiles            → credential verification
Accreditations/awards            → document verification
Emergency wording                → organization approval
```

No AI-generated content is published without human review.

---

## 7. Advertising & Marketing Rules

1. No false or misleading advertising (ASCI Code for healthcare where applicable).
2. No before/after medical outcome claims.
3. No fear-based marketing.
4. No unsubstantiated comparative claims about other companies.

---

## 8. Professional Verification Standard

Every listed professional must pass:

```text
Identity verification (government ID)
Qualification verification (degree/registration check)
Registration verification where applicable (e.g. nursing council, MCI/NMC,
state physiotherapy council)
Background check
Interview/clinical assessment by the organization
Ongoing re-verification cadence
```

The verification status is recorded in the database
(see `DATA_MODEL.md` professionals.verification_state).

Only `verified` professionals appear publicly.

---

## 9. Emergency Handling in the Product

1. Never hide emergency contact info.
2. If a user's message indicates a medical emergency, the platform responds with
   emergency guidance (call emergency services) — never delays with forms.
3. The care finder and contact flows include a subtle note when relevant:
   "If this is an emergency, please call your local emergency service immediately."

---

## 10. Accessibility Compliance

Accessibility is a compliance requirement, not a nice-to-have:

```text
WCAG 2.2 AA target for all public pages
(see TESTING_AND_QA.md section 8 for the checklist)
```

---

## 11. Record Keeping

```text
Bookings and leads: retained per organization policy (default 24 months)
Consent records:    retained as required by law
Audit logs:         5 years
Testimonial consent: proof of consent retained with the record
```

---

## 12. Incident & Breach Handling

1. Notify affected individuals without undue delay per DPDP Act.
2. Notify the Data Protection Board of India as required.
3. Follow the incident response process in `AUTHENTICATION_AND_SECURITY.md`.
4. Breach handling includes data deletion confirmation where requested.

---

## 13. Compliance Review Schedule

```text
Pre-launch: full review by qualified legal counsel
Quarterly:  policy and wording review
On change:  any new data collection or medical content triggers a review
Annually:   security and privacy audit
```

---

## 14. Final Compliance Rule

If a feature, page, or claim cannot pass a compliance review,
it does not ship.

END OF HEALTHCARE COMPLIANCE AND SAFETY
