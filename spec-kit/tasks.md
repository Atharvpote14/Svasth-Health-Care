# Tasks — Long Term Care & Home Visit Vertical (Atharv)

Status legend: `[ ]` pending · `[~]` in progress · `[x]` done

All tasks must satisfy the Definition of Done in `constitution.md` §7.

---

## Phase 0 — Foundation

- [ ] 0.1 Create `src/lib/api.js` — typed-with-JSDoc fetch wrapper matching `API_SPECIFICATION.md` (services, availability, bookings, enquiries)
- [ ] 0.2 Create SAMPLE mock data layer behind the same interface (clearly labeled, swappable when API is live)
- [ ] 0.3 Create shared error / empty / loading state components (if missing in `src/components/ui/`)
- [ ] 0.4 Create `Breadcrumbs` shared component if not present
- [ ] 0.5 Verify lint + build pipeline runs (`npm run lint`, `npm run build`)

## Phase 1 — Components (care-services)

- [ ] 1.1 `CategoryHero` (eyebrow, title, lead, meta, primary CTA, image)
- [ ] 1.2 `ServiceCard` (icon, name, description, availability badge, CTA)
- [ ] 1.3 `ProcedureCard` (compact variant of ServiceCard)
- [ ] 1.4 `AvailabilityBadge` (available / limited / unavailable states)
- [ ] 1.5 `PriceFromNote` (price + "price varies" explanation)
- [ ] 1.6 `BookingCTA` (primary CTA + call alternative, per-context label)
- [ ] 1.7 `StickyMobileBar` (`[Call care team] [Book care]`)
- [ ] 1.8 `SafetyCallout` + `EmergencyDisclaimer` (approved wording, static)
- [ ] 1.9 `FAQAccordion` (accessible, deep-linkable, one-open-at-a-time)
- [ ] 1.10 `PricingTable` (comparison rows, "Most popular" tag, save badge)
- [ ] 1.11 `RelatedServices` section component
- [ ] 1.12 Section heading + grid primitives verified/reused from design system
- [ ] 1.13 Component tests for each of the above (render, empty, long-content)

## Phase 2 — Hub pages

- [ ] 2.1 Long Term Care hub page (`/services/long-term-care`)
- [ ] 2.2 Home Visit hub page (`/services/home-visits`)
- [ ] 2.3 Hub page tests + axe scan

## Phase 3 — Service detail pages

- [ ] 3.1 Nurse at Home (`/services/long-term-care/nurse-at-home`) — CTA: care assessment
- [ ] 3.2 Attendant / Caregiver at Home — vs-nurse comparison block
- [ ] 3.3 Elder Care — senior-first language, family decision framing
- [ ] 3.4 Doctor at Home — non-emergency positioning, Book a doctor
- [ ] 3.5 Physiotherapy at Home — Book an assessment, conditions list
- [ ] 3.6 Post-Surgical Care — recovery framing, links to physio/nurse/rehab
- [ ] 3.7 ICU at Home — LAST: eligibility, emergency disclaimer, "Talk to a care expert", no instant book
- [ ] 3.8 Service detail template tests + axe scan (repeat per page)

## Phase 4 — Procedure pages

- [ ] 4.1 Ryle's Tube Insertion / Care
- [ ] 4.2 Foley Catheter Insertion / Care
- [ ] 4.3 IV Infusion at Home
- [ ] 4.4 Wound Dressing at Home
- [ ] 4.5 Tracheostomy Care
- [ ] 4.6 Each page: unique title/H1/meta + Service + FAQPage schema
- [ ] 4.7 Consumables pricing callout reviewed per page
- [ ] 4.8 Procedure page tests + axe scan

## Phase 5 — Utility pages

- [ ] 5.1 FAQ / Help Center (`/help-center`) — categories, search, accordion, city-page links (coordinated with Person C)
- [ ] 5.2 Pricing & Plans Comparison (`/services/pricing-and-plans`) — LTC vs Home Visit tables, transparent "from" pricing, per-plan CTAs
- [ ] 5.3 Patient Charter (`/patient-charter`) + fix footer link currently pointing to `/account/`
- [ ] 5.4 Utility page tests + axe scan

## Phase 6 — Integration & quality

- [ ] 6.1 All 13 pages wired to real data shapes (swap mock → API)
- [ ] 6.2 Booking/enquiry forms integrated (POST /bookings, /enquiries) with inline errors + input preservation
- [ ] 6.3 SEO audit: titles, descriptions, canonicals, JSON-LD, breadcrumbs
- [ ] 6.4 Mobile audit at 375/768/1024/1440px — no overflow, sticky bar works
- [ ] 6.5 Lighthouse budgets (LCP < 2.5s, CLS < 0.1, INP < 200ms, JS < 300KB)
- [ ] 6.6 Content review against `CONTENT_STYLE_GUIDE.md` + compliance check (ICU, disclaimers)
- [ ] 6.7 Full regression: lint, unit, integration, E2E journeys J1/J2/J5
- [ ] 6.8 Handoff notes to Person C (FAQ links, footer, city variants)

END OF TASKS