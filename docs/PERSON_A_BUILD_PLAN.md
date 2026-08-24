# Person A — Build Plan (Long Term Care & Home Visit)

Owner: **Atharv** · Brand: **CareNest** · Created: 2026-08-22

Canonical scope: `docs/PERSON_A_SITEMAP.md` · SEO rules: `docs/SEO_AND_ANALYTICS.md`

---

## 0. Where the project actually stands

### 0.1 De-branding (done — 2026-08-22)

All Apollo references were removed from `frontend/` before planning, because
`docs/PROJECT_CONTEXT.md` §7 forbids Apollo branding/logos/text and
`docs/BRAND_IDENTITY.md` §1 forbids implying affiliation with any hospital network.

| What | Before | After |
|---|---|---|
| Brand name | Apollo Homecare | CareNest |
| Domain / metadataBase | apollohomecare.com | carenest.in |
| Email | care@apollohomecare.com | care@carenest.in |
| Helpline | 1800 108 8586 (Apollo's real line) | `1800 000 0000` `[PLACEHOLDER]` |
| WhatsApp | +91 7075448283 (Apollo's real line) | `+91 00000 00000` `[PLACEHOLDER]` |
| Package name | apollo-homecare-web | carenest-web |
| Body copy | "Apollo assesses…", "Apollo's nurses…" | "Our team assesses…", "our nurses…" |
| Referral text | "visit a nearest Apollo hospital" | "call our care team or book through this website" |

12 files changed. Verified: zero `apollo` matches left in shipping code.
Remaining mentions live only in `docs/PROJECT_CONTEXT.md`,
`docs/BRAND_IDENTITY.md`, `docs/INFORMATION_ARCHITECTURE.md` (they *prohibit* or
*analyse* the reference site) and the sitemap PDF filename — correctly left alone.

There were **no external Apollo hyperlinks** anywhere. The problem was branding,
scraped copy, and live contact details — not `<a href>` tags.

### 0.2 Route status

Built (3): `/` · `/long-term-care/` · `/home-visit/` — both hubs are thin
(hero + one grid, no FAQ/pricing/breadcrumbs/schema).

Missing (16 of your 19 pages):

```text
Service detail  (7)  /long-term-care/nurse-at-home/
                     /long-term-care/attendant-at-home/
                     /long-term-care/icu-at-home/
                     /long-term-care/elder-care/
                     /home-visit/doctor-at-home/
                     /home-visit/physiotherapy-at-home/
                     /home-visit/post-surgical-care/
Procedures      (5)  /procedures/ryles-tube-insertion/
                     /procedures/foley-catheter-care/
                     /procedures/iv-infusion-at-home/
                     /procedures/wound-dressing-at-home/
                     /procedures/tracheostomy-care/
Utility         (2)  /faq/   /pricing/
Hub upgrades    (2)  /long-term-care/   /home-visit/
```

### 0.3 What you can build on

Content for **all 9 services and all 5 procedures already exists** in
`src/lib/site-content.js` (intro, who_it_is_for, what_included, how_it_works,
price_note, related). `pricingPlans` exists. So most phases are template +
wiring work, not content-from-scratch.

Components ready: `CategoryHero`, `ServiceGridSection`, `FAQSection`,
`FAQAccordion`, `PricingTable`, `Breadcrumbs`, `RelatedServicesSection`,
`SafetySection`, `HowItWorksSection`, `EmergencyDisclaimer`, `SafetyCallout`,
`BookingCTA`, `StickyMobileBar`, `AvailabilityBadge`, `PriceFromNote`,
`ServiceCard`, `ProcedureCard`, `FinalCTASection`, `CityCoverageSection`.

Missing and needed: a **service-detail template**, a **procedure template**, and
an **SEO/schema helper** — that is Phase 0.

### 0.4 Blockers and decisions needed

1. **Footer currently 404s.** `/faq/` and `/pricing/` are already linked from the
   live footer but do not exist. Consider pulling Phases 4–5 forward.
2. **Patient Charter is already fixed.** `src/lib/site.js` points to
   `/about/patient-charter/`, not `/account/`. Per the sitemap that page belongs
   to **Person C** — your note is stale. Action: confirm Person C is building it,
   otherwise the link stays broken.
3. **"Section 5 of the sitemap doc" doesn't hold the SEO template.**
   `SEO_AND_ANALYTICS.md` §5 is Technical SEO (sitemap.xml, robots.txt,
   rendering, images). The per-page template is §3 (title 50–60 chars,
   description 150–160, canonical) + §4 (JSON-LD) + §6 (page-type targets).
   This plan implements both.
4. **`spec-kit/tasks.md` paths are stale** (`/services/long-term-care`,
   `/help-center`, `/services/pricing-and-plans`). The sitemap and `site.js`
   both use `/long-term-care/`, `/faq/`, `/pricing/`. Recommend: follow the
   sitemap, update `tasks.md`.
5. **Procedures are double-homed.** `hubs["home-visits"].services` lists the 4
   procedure slugs, but the sitemap says procedures are reached from Nurse at
   Home. Recommend: keep them discoverable on the hub as a separate "Nursing
   procedures" grid *and* link from Nurse at Home.
6. **FAQ content gap.** Only 14 FAQs exist and 7 are ICU-specific. A real Help
   Center needs roughly 30–40 spread across booking, pricing, safety, services,
   and locations. Also `data.js` declares categories
   (`booking/services/pricing/safety/locations`) that don't match the data
   (`booking/icu/procedures/trust`) — a real bug.
7. **Copy is still reference-shaped.** `site-content.js` is flagged
   `[REWRITE PENDING]`; it needs original CareNest voice before production.
8. **Placeholder contact details** must be replaced with real client numbers.

---

## Phase 0 — Foundation (unblocks every later phase)

Build the three shared pieces once instead of 16 times.

1. `src/page-components/care-services/ServiceDetailTemplate.jsx` — breadcrumbs,
   hero, intro, who-it-is-for, what's-included, how-it-works, pricing note,
   safety callout, FAQ, related services, final CTA, sticky mobile bar.
2. `src/page-components/care-services/ProcedureDetailTemplate.jsx` — tighter
   variant: what it is, when it's needed, how it's done at home, consumables
   pricing callout, safety/escalation, FAQ, related.
3. `src/lib/seo.js` — `buildMetadata()` (title, description, canonical,
   OpenGraph) and schema builders: `MedicalOrganization`, `Service`, `FAQPage`,
   `BreadcrumbList`, plus a `<JsonLd>` component.
4. Fix the FAQ category mismatch in `src/lib/data.js`.
5. Add `getProcedurePage` wiring checks and a `/procedures/[slug]/` route shell.

Done when: templates render from `site-content.js` for one sample service and one
sample procedure, with valid JSON-LD and a canonical URL.

## Phase 1 — Long Term Care vertical

1. Upgrade `/long-term-care/` hub — breadcrumbs, FAQ block, pricing CTA, schema.
2. `/long-term-care/nurse-at-home/` — links out to the 4 procedure pages.
3. `/long-term-care/attendant-at-home/` — include a nurse-vs-attendant comparison.
4. `/long-term-care/elder-care/` — senior-first, family-decision framing.
5. `/long-term-care/icu-at-home/` — **last in this phase**: eligibility criteria,
   emergency disclaimer, "Talk to a care expert" (no instant booking).

## Phase 2 — Home Visit vertical

1. Upgrade `/home-visit/` hub — split services vs. nursing procedures grids.
2. `/home-visit/doctor-at-home/` — explicit non-emergency positioning.
3. `/home-visit/physiotherapy-at-home/` — conditions list, "Book an assessment".
4. `/home-visit/post-surgical-care/` — recovery framing, cross-links to physio
   and nurse.

## Phase 3 — Procedure pages

1. `/procedures/ryles-tube-insertion/`
2. `/procedures/foley-catheter-care/`
3. `/procedures/iv-infusion-at-home/`
4. `/procedures/wound-dressing-at-home/`
5. `/procedures/tracheostomy-care/` — linked from ICU at Home.
6. Per page: unique title/H1/meta, `Service` + `FAQPage` + `BreadcrumbList`
   schema, consumables pricing callout, local keyword variants.
7. Verify inbound links from Nurse at Home and ICU at Home resolve.

## Phase 4 — Pricing & Plans (`/pricing/`)

1. Side-by-side Long Term Care vs. Home Visit comparison via `PricingTable`.
2. Transparent "from" pricing with an honest "what changes the price" note.
3. Per-plan CTAs, "most popular" tag on the Advanced Medical plan.
4. Link back to every service page; wire the hub pricing CTAs.
5. Clears one of the two live footer 404s.

## Phase 5 — FAQ / Help Center (`/faq/`)

1. Category navigation, search, accessible deep-linkable accordion.
2. Expand FAQ content from ~14 to 30–40 across booking, pricing, safety,
   services, locations.
3. `FAQPage` schema (top-level only, to avoid duplicate-schema penalties).
4. Coordinate with **Person C** on city-specific outbound links.
5. Clears the second footer 404.

## Phase 6 — Technical SEO layer

1. `src/app/sitemap.js` covering all Person A routes.
2. `src/app/robots.js`.
3. Canonicals audited on every page; consistent trailing slashes.
4. `MedicalOrganization` schema in the root layout.
5. Local keyword variants for the 11 supported cities, coordinated with Person C
   so you don't duplicate their city pages.
6. Validate all JSON-LD; enforce the thin-page rule from §6.

## Phase 7 — Quality, compliance, handoff

1. Titles 50–60 chars, descriptions 150–160, one H1 per page.
2. Accessibility: axe scan per page, keyboard nav, focus states, contrast.
3. Responsive audit at 375/768/1024/1440 px; sticky mobile bar behaviour.
4. Compliance review against `HEALTHCARE_COMPLIANCE_AND_SAFETY.md` — ICU claims,
   emergency disclaimers, no invented statistics or fake testimonials.
5. Rewrite remaining reference-shaped copy in original CareNest voice.
6. Replace placeholder phone/WhatsApp/email with real client details.
7. Lighthouse budgets: LCP < 2.5 s, CLS < 0.1, INP < 200 ms, JS < 300 KB.
8. Handoff notes to Person C (FAQ links, footer, city variants).

---

## Suggested sequencing

```text
Phase 0  Foundation              ← blocks everything
Phase 1  Long Term Care    (5)
Phase 2  Home Visit        (4)
Phase 3  Procedures        (7)
Phase 4  Pricing           (5)   ← fixes footer 404
Phase 5  FAQ / Help Center (5)   ← fixes footer 404
Phase 6  Technical SEO     (6)
Phase 7  QA & handoff      (8)
```

Phase 0 must come first. Phases 1–3 are ordered by dependency: procedures are
linked from Nurse at Home (Phase 1), so they follow it. Phases 4–5 can be pulled
ahead of Phase 1 if closing the live footer 404s matters more than depth.
Phase 6 needs all routes to exist. ICU at Home and the procedure pages are the
compliance-sensitive ones — they get the most review.
