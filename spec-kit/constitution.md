# Constitution — Atharv (Long Term Care & Home Visit Vertical)

## 1. Purpose

This constitution governs all development performed for the Long Term Care and
Home Visit verticals of the CareNest home healthcare platform.

It defines non-negotiable principles for:

- Code quality
- Testing standards
- User experience consistency
- Performance requirements

These principles apply to every task in `plan.md` and `tasks.md`.
They cannot be overridden by convenience, speed, or visual preference.

Source of truth hierarchy (highest first):

```text
docs/PROJECT_CONTEXT.md
docs/DESIGN_PRINCIPLES.md
docs/HEALTHCARE_COMPLIANCE_AND_SAFETY.md
docs/AUTHENTICATION_AND_SECURITY.md
docs/DESIGN_SYSTEM.md
this constitution
```

---

## 2. Code Quality

### 2.1 Language and structure

1. JavaScript (modern ESM) — no TypeScript. See `docs/PROJECT_CONTEXT.md` §23.
2. Frontend: Next.js app router, Tailwind CSS, Lucide icons.
3. No component may be created if a shared component already covers the need
   (`docs/COMPONENT_ARCHITECTURE.md` §41, §69).
4. Components live in `src/components/care-services/` for this vertical.
   Shared UI lives in `src/components/ui/` and primitives in `src/components/primitives/`.
5. No giant files. A component file that exceeds ~200 lines must be split
   into sections/compositions.
6. Every component receives data through props — no hardcoded service copy
   inside reusable components.
7. Business rules never live in frontend components. They live in the backend
   service layer (`docs/BACKEND_ARCHITECTURE.md`).

### 2.2 Naming

1. Component files: PascalCase (`ServiceCard.jsx`).
2. Functions/hooks: camelCase (`useBookingAvailability`).
3. CSS classes: Tailwind utilities only — no ad-hoc custom CSS files.
4. Folders: kebab-case (`care-services/`, `diagnostics-equipment/`).

### 2.3 Linting and static checks

1. `npm run lint` (ESLint + eslint-config-next) must pass with zero errors.
2. No `console.log` left in committed code (use structured logging server-side only).
3. No unused imports or variables.
4. No `any`-style escape hatches exist in JavaScript — document shapes in
   JSDoc blocks at the top of shared modules.

### 2.4 Data contracts

1. Page data shapes follow `docs/API_SPECIFICATION.md` exactly.
2. API responses are never consumed with implicit assumptions —
   field names come from the contract, not from memory.
3. Optional fields are handled with fallbacks (`price_from` may be null).

---

## 3. Testing Standards

### 3.1 Minimum coverage per deliverable

1. Every reusable component has a component test (React Testing Library)
   covering: render, empty state, long-content state, and interaction.
2. Every page smoke test verifies: H1 present, primary CTA present,
   no console errors, no layout overflow on mobile viewport (375px).
3. Integration tests cover the booking/enquiry flows used by this vertical's
   CTAs (see `docs/TESTING_AND_QA.md` §7 journeys J1, J2, J5).
4. Accessibility scan (axe) included in every page E2E test.

### 3.2 Quality gates (cannot merge without passing)

```text
Gate 1   eslint → zero errors
Gate 2   component tests → pass
Gate 3   integration tests (API) → pass
Gate 4   build (next build) → pass
Gate 5   Lighthouse budgets → met (see section 5)
Gate 6   axe scans → no critical violations
```

### 3.3 Test data

1. Test fixtures use clearly fake sample data (labeled SAMPLE).
2. No real patient names, phones, or medical details in tests.
3. Never hit production APIs from tests.

---

## 4. User Experience Consistency

### 4.1 Design token discipline

1. Only token values from `docs/DESIGN_SYSTEM.md` are allowed
   (colors, spacing, radii, shadows, type scale).
2. No hex values inside component code — use Tailwind token classes
   (`bg-primary-600`, `shadow-sm`, `rounded-md`).
3. Fonts: Poppins (600) for display, system-ui stack for body — already wired in `layout.jsx`.

### 4.2 Page-level consistency

1. One H1 per page; logical heading hierarchy; no skipped levels.
2. One primary CTA per view — never two visually equal CTAs
   (`docs/DESIGN_PRINCIPLES.md` §8, §9).
3. CTA vocabulary is fixed:
   `Book care` / `Book an assessment` / `Request a callback` / `Talk to a care expert`.
   - ICU at Home primary CTA: **"Talk to a care expert"** (never "Buy").
   - Long-term care primary CTA: **"Request a care assessment"**.
4. Every transactional page has: breadcrumbs, hero, pricing/price-note,
   FAQs, related services, final CTA, mobile sticky action bar.
5. Empty/unavailable states are designed, never blank
   (`docs/DESIGN_SYSTEM.md` §19).
6. All copy follows `docs/CONTENT_STYLE_GUIDE.md` — plain language, no
   fear-based urgency, honest pricing notes ("Consumables are charged separately").

### 4.3 Accessibility

1. WCAG 2.2 AA minimum on every page of this vertical.
2. Touch targets ≥ 44px; visible focus rings everywhere.
3. Forms: visible labels, `aria-describedby` errors, input preserved on failure.
4. `prefers-reduced-motion` respected (global CSS already handles this).
5. Emergency disclaimer blocks are static text — never in toasts or popups.

### 4.4 Mobile-first

1. Every page is designed mobile-first; desktop is the enhancement.
2. Mobile bottom bar `[Call care team] [Book care]` on all 13 pages.
3. No horizontal scrolling at any breakpoint.

---

## 5. Performance Requirements

### 5.1 Budgets (enforced in CI via Lighthouse)

```text
LCP (mobile 4G):        < 2.5s
INP:                    < 200ms
CLS:                    < 0.1
JavaScript per page:    < 300KB gzipped
Hero images:            < 150KB
Card images:            < 60KB
```

### 5.2 Rules

1. All public pages are server-rendered (SSR/SSG) — no client-only rendering
   for content pages.
2. Images: `next/image` with responsive sizes, WebP/AVIF, `loading="lazy"`
   below the fold.
3. No animation libraries beyond the animation tokens in
   `docs/DESIGN_SYSTEM.md` §12 unless explicitly approved.
4. No third-party scripts on content pages except approved analytics.
5. Fonts: next/font with `display: swap` (already configured in `layout.jsx`).
6. List rendering is paginated server-side; client never loads more than
   the visible grid needs.

### 5.3 Failure behavior

1. If the API is down, pages show a designed error state with
   `[Try again]` and `[Contact support]` — never a blank page.
2. Booking/enquiry failures preserve user input and offer alternatives
   (`docs/USER_JOURNEYS.md` §24).

---

## 6. Medical Safety (non-negotiable)

1. No page in this vertical diagnoses, guarantees outcomes, or prescribes
   treatment (`docs/HEALTHCARE_COMPLIANCE_AND_SAFETY.md` §3).
2. ICU at Home and critical-care content include the approved emergency disclaimer.
3. Only verified professionals, prices, and availability are displayed.
4. Any claim (statistics, accreditations, outcomes) must be pre-approved
   and never invented.

---

## 7. Definition of Done

A task from `tasks.md` is done only when ALL of these hold:

```text
[ ] Code follows section 2 (lint passes, no duplication, data-driven)
[ ] Tests from section 3 pass
[ ] UX rules from section 4 verified (one CTA, tokens, a11y, mobile)
[ ] Performance budgets from section 5 met
[ ] Content reviewed against CONTENT_STYLE_GUIDE.md
[ ] No medical/compliance violations (section 6)
```

---

## 8. Final Rule

When a decision is ambiguous, resolve it in this order:

```text
Patient safety → Accessibility → Clarity → Trust → Usability → Performance → Conversion → Visual novelty
```

END OF CONSTITUTION