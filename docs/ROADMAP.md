# Roadmap

## 1. Purpose

This document defines the phased delivery plan for the platform.

Each phase ends with something usable, tested, and deployable.

The MVP focuses on the journeys marked P0 in `USER_JOURNEYS.md`.

---

## 2. Guiding Rule

```text
Phase 1 = a website that converts
Phase 2 = a platform that manages
Phase 3 = a network that grows
```

Never delay Phase 1 to build Phase 3 features.

---

## 3. Phase 0 — Foundation (Week 1–2)

### Deliverables

```text
[ ] Repo setup (frontend + backend + docs)
[ ] Brand tokens, fonts, base layout
[ ] Design system primitives (Button, Card, Input, etc.)
[ ] Header + footer + navigation shell
[ ] Database schema + migrations
[ ] Backend skeleton (config, middleware, error handling, /health)
[ ] CI pipeline (lint, typecheck, test, build)
[ ] Environments: local + dev deployed
```

### Exit criteria

```text
Dev environment serves an empty branded shell
Health endpoint responds
CI is green on every PR
```

---

## 4. Phase 1 — MVP: Discovery & Conversion (Week 3–6)

### Frontend

```text
[ ] Homepage (hero, services, trust, locations, CTA)
[ ] Service category pages
[ ] Service detail pages (data-driven)
[ ] Location pages + location selector in header
[ ] Search (basic)
[ ] Enquiry + callback forms with confirmation
[ ] Booking flow (service → location → schedule → patient → review → confirm)
[ ] Contact page
[ ] About / why-us pages
[ ] FAQs
[ ] Legal pages (privacy, terms)
[ ] 404 page
[ ] Mobile sticky action bar
```

### Backend

```text
[ ] Catalog APIs (services, categories, locations, content)
[ ] Lead APIs (enquiry, callback, contact)
[ ] Booking APIs (create, track, cancel) with idempotency
[ ] Availability API
[ ] Search API (basic)
[ ] Auth (OTP + Google) — optional at this phase if not blocking bookings
[ ] Admin: leads + bookings view, status updates
```

### Content

```text
[ ] All MVP service pages with reviewed copy
[ ] Verified FAQ content
[ ] Privacy + terms drafted by legal
[ ] Approved emergency disclaimer
```

### Exit criteria

```text
A visitor can go from landing to booking/enquiry in every major city flow
P0 journeys pass E2E tests
Staging passes manual QA checklist
```

---

## 5. Phase 2 — Growth: Discovery Depth (Week 7–10)

### Deliverables

```text
[ ] Care finder (guided experience) with disclaimers
[ ] Condition pages (stroke, dementia, diabetes, cancer care, post-surgery,
    neuro, orthopedic)
[ ] Location + service pages (only with unique content)
[ ] Search v2 (intent-aware, grouped results)
[ ] Blog / health guides with editorial workflow
[ ] Professional profiles (verified)
[ ] Equipment catalog (buy/rent/enquire)
[ ] Vaccination catalog with eligibility info
[ ] Testimonials section (verified + consented)
[ ] Admin: full content management (services, FAQs, articles, testimonials)
[ ] Notifications: booking confirmation SMS/email, reminders
```

### Exit criteria

```text
All discovery paths (A–E from INFORMATION_ARCHITECTURE.md) work
Content can be updated by staff without code changes
SEO: all page types indexed with structured data
```

---

## 6. Phase 3 — Platform: Accounts & Payments (Week 11–14)

### Deliverables

```text
[ ] Patient portal (login, dashboard, bookings, documents)
[ ] Booking payments (Razorpay) for instant-bookable services
[ ] Order flow for equipment (buy/rent) with payment
[ ] Appointment management + rescheduling
[ ] Notifications hub (email/SMS/WhatsApp preference)
[ ] Care plans (basic)
[ ] Audit & analytics dashboard for admins
```

### Exit criteria

```text
Patients can complete a paid booking end-to-end
Refunds work through the gateway with audit trail
Portal passes security review
```

---

## 7. Phase 4 — Network: Portals & Scale (Week 15+)

### Deliverables

```text
[ ] Professional portal (schedules, assignments, notes)
[ ] Staff operations dashboard (dispatch, availability management)
[ ] Partner program pages (doctors, hospitals, corporates)
[ ] Careers site section + application flow
[ ] Advanced analytics (funnel, conversion, location demand)
[ ] A/B testing framework
[ ] Mobile app consideration (PWA first, native later)
[ ] Regional language support
```

### Exit criteria

```text
Operations can run the entire service lifecycle from the platform
Partnerships can be onboarded digitally
```

---

## 8. Release Checklist (per phase)

```text
[ ] All gates from TESTING_AND_QA.md pass
[ ] Compliance review for new content/features
[ ] Backup verified
[ ] Rollback plan documented
[ ] Monitoring alerts configured
[ ] Release notes published
```

---

## 9. Metrics to Watch

```text
Phase 1:  enquiry → booking rate, form abandonment, phone call rate
Phase 2:  care finder → enquiry, SEO traffic growth, service page conversions
Phase 3:  online payment completion, repeat bookings
Phase 4:  staff productivity, partner-sourced bookings
```

---

## 10. Prioritization Rule

Work in this order:

```text
1.  Anything blocking bookings/enquiries (P0 journeys)
2.  Trust content (verification, testimonials, safety)
3.  Discovery depth (conditions, locations, care finder)
4.  Convenience (payments, portal)
5.  Scale (portals, partnerships, languages)
```

---

## 11. Final Roadmap Rule

The roadmap is a plan, not a contract.

When new information arrives (user feedback, data, operations needs),
priorities may change — but only with an explicit decision,
never by accident.

END OF ROADMAP
