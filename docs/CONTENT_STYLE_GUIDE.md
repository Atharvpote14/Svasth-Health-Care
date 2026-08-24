# Content Style Guide

## 1. Purpose

This document defines how all public-facing content is written for the platform.

It applies to:

* Website copy (heroes, sections, CTAs)
* Service descriptions
* FAQ answers
* Blog articles and health guides
* Notifications (email, SMS, WhatsApp)
* Form labels and error messages

Brand-level tone is defined in `BRAND_IDENTITY.md`.

This document defines the practical writing rules and templates.

---

## 2. Writing Principles

```text
Plain       → simple words, short sentences
Human       → speak to people, not demographics
Honest      → never overpromise
Calm        → no fear, no urgency, no hype
Useful      → answer the question the user actually asked
Consistent  → same term for the same thing everywhere
```

---

## 3. Plain Language

### 3.1 Prefer

```text
BEFORE:                            AFTER:
"post-operative rehabilitation" → "recovery after surgery"
"ambulatory physiotherapy"      → "physiotherapy at home"
"hepatic support"               → "liver care"
"phlebotomy services"           → "home blood sample collection"
"geriatric assistance"          → "help for older adults"
```

### 3.2 Explaining terms

When a technical term is necessary:

```text
First use:  "Ryle's tube (a thin tube placed through the nose into
            the stomach for feeding)."
Later use:  "Ryle's tube"
```

### 3.3 Reading level

Target: a 9th-grade reading level for most content.

Rules:

* Sentences under 20 words
* One idea per sentence
* Active voice
* Present tense
* No parentheticals when avoidable

---

## 4. Voice

```text
We = the organization's care team ("Our nurses...")
You = the visitor/family member
Patient = "your parent", "your loved one", "the person receiving care"
```

### 4.1 Good examples

```text
"Our trained nurses visit you at home at a time that suits you."

"We understand that arranging care can be stressful. We're here to help."

"Tell us what you need and a care expert will call you back."
```

### 4.2 Bad examples

```text
"Avail of world-class home healthcare services at unmatched prices!"   (hype)
"Don't let your aging parents suffer in silence."                       (fear)
"Our proprietary AI-driven care ecosystem revolutionizes recovery."     (jargon)
```

---

## 5. Medical Content Rules

1. Content describes **services**, not diagnoses.
2. Content never guarantees outcomes.
3. Content never prescribes treatment.
4. Content never claims statistics that are not verified.
5. Emergency content always follows `HEALTHCARE_COMPLIANCE_AND_SAFETY.md`.

### 5.1 Claim language

```text
SAFE:   "Physiotherapy can help improve strength and mobility after surgery."
UNSAFE: "Physiotherapy will restore full mobility in 4 weeks."
```

---

## 6. CTA Copy

```text
Book a service          → "Book care" / "Book a nurse" / "Book physiotherapy"
Request an assessment   → "Request a care assessment"
Enquiry                  → "Enquire" / "Talk to a care expert"
Callback                 → "Request a callback"
Contact                  → "Contact us"
```

### 6.1 CTA rules

1. CTAs state the action: "Book care" — not "Click here".
2. CTAs are sentence case: "Book care", never "BOOK CARE".
3. Long-term care uses "Request a care assessment", not "Buy".
4. ICU at home uses "Talk to a care expert" as the primary action.

---

## 7. Content Templates

## 7.1 Service hero

```text
Eyebrow:  <Service category>
Title:    <Service name>
Lead:     One sentence — benefit + home context.
Meta:     Available in <cities> · Starts at ₹X (where verifiable)
CTA:      Book <service>  /  Request a callback
```

### Example

```text
Eyebrow:  Home Visits
Title:    Physiotherapy at Home
Lead:     Professional physiotherapy in the comfort of your home.
CTA:      Book an assessment
```

---

## 7.2 Section heading pattern

```text
Eyebrow:  short label, e.g. "How it works"
Title:    benefit-oriented, e.g. "Care in four simple steps"
Body:     1–2 sentences of context
```

---

## 7.3 "Who is it for" template

```text
Title:     Who is this for?
Body:      Plain-language situations, as bullets:
           - People recovering after surgery
           - Older adults who find it difficult to travel
           - Families arranging care for a loved one
Note:      "If you are unsure whether this service is right for your
           situation, talk to a care expert."
```

---

## 7.4 "What's included" template

```text
Title:  What's included
Body:   structured list of 4–6 items, each with one-line explanation
Footer: honest limitations, e.g. "Consumables are charged separately."
```

---

## 7.5 FAQ template

```text
Question:  written as the user would ask it
Answer:    2–4 sentences, plain language, no marketing
Format:    <direct answer> + <one supporting sentence> + <next step link>
```

### Example

```text
Q:  How quickly can I get a nurse at home?
A:  In most cities, visits can be arranged within 24–48 hours.
    Availability depends on your location and the type of care needed.
    Book care or request a callback and our team will confirm a time.
```

---

## 7.6 How it works (3–5 steps)

```text
1.  Tell us what you need     — choose a service or ask us to help
2.  Share a few details       — who, where, and when
3.  We confirm the details    — a care expert confirms availability
4.  Care at home              — the professional visits at the agreed time
5.  Follow-up support         — questions answered, progress tracked where relevant
```

---

## 8. Terminology Consistency

Use these terms everywhere:

```text
Book care              (not "Place order", "Purchase")
Care expert            (not "executive", "agent")
Care assessment        (not "free consultation" unless approved)
At home                (not "doorstep" every time)
Older adults / seniors (respectful; never "old people")
Trained professionals  (only when verified)
Verified               (only when a verification process exists)
```

Terms that must be used precisely (see `PROJECT_CONTEXT.md`):

```text
Book Now        → definite scheduling exists
Enquire         → information request
Request callback → team calls back
```

---

## 9. Numbers, Dates, Money

```text
Currency:   ₹ with Indian format (₹1,499 · ₹25,000/month)
Dates:      "Monday, 21 July" or "21 July 2026"
Time:       12-hour with am/pm
Phone:      +91 98765 43210 or 1800 XXX XXXX (toll-free)
```

Numbers follow Indian grouping (lakh, crore) where natural:

```text
"1 lakh+ patients served" — only if verified
```

---

## 10. SEO Copy Rules

1. Titles: under 60 characters, include the service + location where useful.
2. Meta descriptions: 150–160 characters, plain benefit + CTA.
3. One H1 per page containing the primary keyword naturally.
4. Keywords must never be stuffed.
5. SEO copy must read naturally for humans first.
6. Every article/guide must link to at least one relevant service page.

---

## 11. Localization Notes

The platform is Indian-first:

* Indian names, families, cities
* Hindi/regional words used only with translation
* Regional language support may be added later; UI text must be externalized
  (i18n-ready: no hard-coded user-facing strings in components)

---

## 12. Content Review Process

```text
Write
  ↓
Fact check (medical claims, pricing, availability)
  ↓
Clinical/operations review when medical content
  ↓
Legal review for compliance-sensitive content
  ↓
Publish
```

Never publish content that has not been reviewed when it involves:

* Health claims
* Pricing
* Patient experiences
* Organizational credentials

---

## 13. Forbidden Content Checklist

```text
[ ] No unverified statistics
[ ] No invented testimonials
[ ] No guaranteed outcomes
[ ] No emergency service claims ("24/7 emergency ICU" unless true)
[ ] No price claims without approval
[ ] No comparisons attacking other companies
[ ] No fear-based urgency
[ ] No copied text from other websites
```

---

## 14. Final Content Rule

If a sentence could mislead a worried family member, it must be rewritten.

Clarity and honesty are the product.

END OF CONTENT STYLE GUIDE
