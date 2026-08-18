# Testing and QA

## 1. Purpose

This document defines the testing strategy and quality gates for the platform.

Quality is verified continuously, not at the end.

---

## 2. Test Pyramid

```text
        ▲  E2E (Playwright)          — critical journeys only
       / \
      /   \  Integration (API)       — every endpoint + DB
     /     \
    /       \  Unit (Vitest)          — services, validators, utils
   /         \
  /  Static checks (lint, typecheck)  — always
```

---

## 3. Tooling

```text
Unit + integration:  Vitest + Supertest
Frontend:            React Testing Library
E2E:                 Playwright
Accessibility:       axe-core (via Testing Library and Playwright)
Coverage:            v8 provider, gate ≥ 80% on services/validators
Linting:             ESLint + TypeScript strict
```

---

## 4. Unit Tests

Cover:

```text
Validators      → accept/reject cases, error messages, phone normalization
Services        → booking rules, availability logic, reference generation
Utils           → pagination, formatting, date helpers
Auth            → token creation, OTP expiry, role checks
```

### Booking service unit tests

```text
[ ] creates booking with valid input
[ ] rejects past dates
[ ] rejects unavailable city/service combination
[ ] generates unique reference
[ ] idempotency key returns original record
[ ] cancellation transitions status and writes booking_event
```

---

## 5. Integration Tests (API)

Every endpoint from `API_SPECIFICATION.md`:

```text
Happy path  → 200/201 with correct envelope
Validation  → 422 with field details
Not found   → 404
Auth        → 401/403 where applicable
Rate limit  → 429
```

### Mandatory integration suites

```text
Public catalog (services, categories, locations, equipment, content)
Search
Booking creation + tracking + cancellation
Leads (enquiry, callback, contact, partner)
Auth (OTP request/verify, refresh, logout)
Admin (role matrix: staff can, visitor cannot)
RLS (unauthorized queries return no rows)
```

Integration tests run against a dedicated test database, recreated per run.

---

## 6. Frontend Component Tests

Prioritize (per `COMPONENT_ARCHITECTURE.md`):

```text
Button (variants, loading, disabled)
Forms (validation, error display, input preservation)
Accordion / FAQ
Modal / Drawer (focus trap, escape)
Header / navigation (desktop + mobile)
Care finder steps
Booking flow components
```

### Component test checklist

```text
[ ] renders with real-like data
[ ] handles long content
[ ] handles missing data (empty states)
[ ] keyboard operable
[ ] error states visible
[ ] aria attributes present
```

---

## 7. E2E Tests (Playwright)

Critical journeys only (they are slow; keep them few):

```text
J1  Browse → service page → enquiry → confirmation
J2  Browse → book care → location/date → submit → confirmation
J3  Care finder → recommendations → enquiry
J4  Search → "physio after knee surgery" → result → service page
J5  Request callback flow
J6  Mobile booking flow (viewport 375x812)
J7  Admin: login → view leads → update status
J8  404 recovery
```

### E2E rules

1. Run against staging, not production.
2. Use seeded, disposable test data.
3. Never assert on real OTPs; mock the SMS provider in test env.
4. Include one accessibility scan per journey (axe).

---

## 8. Accessibility Testing

```text
Automated: axe-core in component tests + E2E
Manual checklist (each major template):
[ ] keyboard-only navigation works end-to-end
[ ] visible focus everywhere
[ ] screen reader (NVDA/VoiceOver) reads headings, forms, dialogs correctly
[ ] contrast AA on all text
[ ] text scales 200% without breakage
[ ] reduced motion respected
[ ] forms announce errors (aria-describedby / role=alert)
```

---

## 9. Performance Testing

```text
Lighthouse CI per PR:  LCP < 2.5s, CLS < 0.1, INP < 200ms
Bundle analysis:       next/bundle-analyzer, catch size regressions
API latency:           load test public reads with k6 (100 concurrent)
Image audit:           all images served responsively
```

---

## 10. Security Testing

Automated:

```text
npm audit / dependabot
gitleaks (secrets in repo)
RLS tests (data isolation)
zap/basic scanner on staging before launch
```

Manual:

```text
Penetration test by a qualified professional before production launch
(especially: booking endpoints, OTP flow, admin panel)
```

---

## 11. Test Data Rules

1. Test fixtures are sample data, never production data.
2. Testimonials in fixtures are labeled SAMPLE.
3. Patient-like data in tests is fabricated and obviously fake.
4. Tests never hit production APIs or send real SMS/email.

---

## 12. Quality Gates (CI)

```text
Gate 1  eslint + tsc (strict)            → must pass
Gate 2  unit tests                       → must pass, coverage ≥ 80% (services)
Gate 3  integration tests                → must pass
Gate 4  component tests                  → must pass
Gate 5  build                            → must pass
Gate 6  security scans                   → no high/critical findings
Gate 7  Lighthouse CI                    → budgets met
Gate 8  E2E (staging, pre-release)       → must pass
```

A PR that fails any gate cannot merge.

---

## 13. Manual QA Checklist (pre-release)

```text
[ ] Home, service, category, location, condition pages render correctly
[ ] Mobile nav + sticky CTA bar work
[ ] Booking flow on mobile (375px) completes
[ ] Form validation messages are friendly and correct
[ ] 404 page recovers
[ ] All links checked (no dead links)
[ ] SEO tags render correctly (view-source)
[ ] Structured data validates (rich results test)
[ ] Cookie/consent banner behaves
[ ] Reduced-motion mode works
[ ] Print/PDF of service pages is reasonable (optional)
```

---

## 14. Bug Reporting Standard

Every bug ticket includes:

```text
Environment (dev/staging/prod, device, browser)
URL
Steps to reproduce
Expected vs actual
Screenshot/video
Severity (critical/major/minor/cosmetic)
```

---

## 15. Final QA Rule

A feature is "done" only when:

```text
Code works
Tests pass
Accessibility verified
Performance budgets met
Content reviewed
Security reviewed
```

END OF TESTING AND QA
