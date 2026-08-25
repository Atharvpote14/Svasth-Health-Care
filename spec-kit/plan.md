# Plan — Long Term Care & Home Visit Vertical

## 1. Tech stack (already decided — do not renegotiate)

```text
Frontend:      Next.js (app router) + JavaScript (ESM) + Tailwind CSS
Icons:         lucide-react
Backend:       Express.js + JavaScript (consumed via REST — see API_SPECIFICATION.md)
Database:      PostgreSQL / Supabase (DATA_MODEL.md)
No extra UI libraries, no animation libraries, no CSS frameworks
```

The scaffold already exists in `frontend/` (jsconfig, tailwind tokens,
layout.jsx, globals.css, component folders).

## 2. Architecture decisions

### 2.1 Templates over one-off pages

Four templates cover all 13 pages (per `docs/COMPONENT_ARCHITECTURE.md` §8):

```text
CategoryHubTemplate        → 2 pages (LTC hub, Home Visit hub)
ServiceDetailTemplate      → 7 pages (Nurse, Attendant, ICU, Elder, Doctor, Physio, Post-Surgical)
ProcedureTemplate          → 5 pages (Ryle's, Foley, IV, Wound Dressing, Tracheostomy)
UtilityTemplate            → 2 pages (FAQ, Pricing) + Patient Charter (content page)
```

Data-driven: pages render from `service_contents`, `faqs`, `services` records
— no hardcoded page copy in components.

### 2.2 Route structure

```text
/services/long-term-care                     (hub)
/services/long-term-care/nurse-at-home
/services/long-term-care/attendant-at-home
/services/long-term-care/icu-at-home
/services/long-term-care/elder-care
/services/home-visits                        (hub)
/services/home-visits/doctor-at-home
/services/home-visits/physiotherapy-at-home
/services/home-visits/post-surgical-care
/services/home-visits/nurse-procedures/ryles-tube-insertion
/services/home-visits/nurse-procedures/foley-catheter-insertion
/services/home-visits/nurse-procedures/iv-infusion-at-home
/services/home-visits/nurse-procedures/wound-dressing-at-home
/services/home-visits/nurse-procedures/tracheostomy-care
/help-center                                (FAQ)
/services/pricing-and-plans
/patient-charter
```

### 2.3 Component inventory (in `src/components/care-services/`)

```text
Sections:     CategoryHero, ServiceGridSection, HowItWorksSection,
              SafetySection, RelatedServicesSection, FAQSection, FinalCTASection

Domain:       ServiceCard, ProcedureCard, AvailabilityBadge, PriceFromNote,
              BookingCTA, StickyMobileBar, SafetyCallout, EmergencyDisclaimer

Utilities:    FAQAccordion, PricingTable, Breadcrumbs (shared ui if missing)
```

All built on shared primitives/UI from `src/components/ui` and
`src/components/primitives` — no duplication (`constitution.md` §2.1).

### 2.4 Data flow

```text
Server component page
    → data service (src/lib/api.js — fetch wrapper per API_SPECIFICATION.md)
    → template
    → sections → components
```

Client components only where interaction is required:
booking forms, FAQ accordion, sticky bar, mobile nav.

### 2.5 Booking/enquiry integration

```text
Service pages   → POST /bookings (assessment type for LTC; instant where flagged)
Procedure pages → POST /enquiries (service id = procedure)
Pricing page    → per-plan CTA to booking or callback
All forms       → server validation via API; errors inline; input preserved
```

### 2.6 SEO per page

```text
Unique title + meta description per page (docs/SEO_AND_ANALYTICS.md §3)
JSON-LD: Service (service pages), FAQPage (FAQ + service pages), BreadcrumbList
Canonical URLs; hreflang not needed (single language MVP)
City variants coordinated with Person C — links only, no duplicate pages
```

## 3. Design direction (from docs/DESIGN_SYSTEM.md + BRAND_IDENTITY.md)

```text
LTC hub            → secondary-led hero (Trust Blue), calm, senior-friendly
Home Visit hub    → lighter hero, quick-booking feel
ICU page          → most subdued; expert-consultation framing
Procedure pages   → minimal, fast-scan, one CTA
Pricing page      → neutral table, primary "most popular" tag, amber "save" badge
FAQ page          → neutral, searchable accordions
```

Palette/type tokens are already in `frontend/tailwind.config.js` — reuse, don't redefine.

## 4. Deliverables order

```text
1. Shared plumbing: src/lib/api.js, data hooks, error/empty state components
2. Primitive/domain components for this vertical
3. Hub pages → detail pages → procedure pages
4. FAQ, Pricing, Patient Charter (+ footer link fix)
5. Tests + Lighthouse/axe verification per constitution §3, §5
```

## 5. Dependencies & coordination

```text
Person C: city-page links from FAQ/service pages; footer component owner
Person B: no overlap (diagnostics/equipment/vaccination pages)
Backend:  needs services, service_contents, faqs, availability, bookings,
          leads endpoints — assumed available per API_SPECIFICATION.md
Content:  approved copy for all 13 pages before launch
```

## 6. Risks & mitigations

```text
Risk: API not ready when pages are built
    → mock data layer clearly labeled SAMPLE behind the same data interface

Risk: pricing varies per city
    → PriceFromNote component + availability endpoint; no hardcoded prices

Risk: ICU content compliance
    → EmergencyDisclaimer + eligibility blocks reviewed before publish
```

## 7. Non-goals

```text
No payments, no portals, no auth-dependent features
No analytics beyond approved GA4 events
No images from reference websites
```

END OF PLAN