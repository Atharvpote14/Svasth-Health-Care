# SEO and Analytics

## 1. Purpose

This document defines search engine optimization and analytics requirements for the platform.

SEO must never override usability, accessibility, or trust
(see `DESIGN_PRINCIPLES.md` principle 37).

---

## 2. SEO Principles

1. Every page is built for a human intent first, a search query second.
2. Every page has one primary topic and one H1.
3. Content is unique per page — no thin duplicate pages.
4. Internal links follow `INFORMATION_ARCHITECTURE.md` rules.
5. Structured data is implemented for every applicable page type.

---

## 3. On-Page Metadata

### 3.1 Title

```text
Rules:
- 50–60 characters
- Primary keyword near the front
- Site name suffix where space allows

Examples:
- "Physiotherapy at Home in Pune | CareNest"
- "Doctor at Home | Book a Home Visit | CareNest"
- "Nursing at Home for Seniors | CareNest"
```

### 3.2 Meta description

```text
Rules:
- 150–160 characters
- Plain-language benefit + action
- No keyword stuffing

Example:
"Professional physiotherapy at home by trained physiotherapists.
Book an assessment or request a callback. Available in Pune, Mumbai
and more cities."
```

### 3.3 Canonical

1. Every page defines its canonical URL.
2. Trailing-slash handling consistent site-wide.
3. No duplicate content under query strings (except pagination, which uses rel next/prev or is canonicalized).

---

## 4. Structured Data (JSON-LD)

### 4.1 Organization / MedicalOrganization

On every page via the layout:

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "CareNest",
  "url": "https://carenest.in",
  "logo": "https://carenest.in/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-1800-XXX-XXXX",
    "contactType": "customer service"
  },
  "sameAs": ["<social profiles>"]
}
```

### 4.2 Service

On every service page:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Physiotherapy at Home",
  "serviceType": "Home Physiotherapy",
  "description": "Professional physiotherapy in the comfort of your home.",
  "url": "https://carenest.in/services/physiotherapy-at-home",
  "provider": { "@type": "MedicalOrganization", "name": "CareNest" },
  "areaServed": { "@type": "City", "name": "Pune" },
  "offers": { "@type": "Offer", "price": "799", "priceCurrency": "INR" }
}
```

Only include price when verified.

### 4.3 LocalBusiness / HomeCare service + City

On location pages:

```json
{
  "@type": "HomeAndConstructionBusiness",
  ...
}
```

Use `MedicalBusiness` sub-type where appropriate; include `areaServed` cities and service links.

### 4.4 FAQPage

On service and location pages with real FAQs:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can I get a nurse at home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cities, visits can be arranged within 24–48 hours."
      }
    }
  ]
}
```

### 4.5 Article

On blog pages:

```json
{
  "@type": "Article",
  "headline": "...",
  "datePublished": "...",
  "author": { "@type": "Person", "name": "..." },
  "publisher": { "@type": "Organization", "name": "CareNest" }
}
```

Include `reviewedBy` when a medical reviewer exists.

### 4.6 BreadcrumbList

On every page deeper than the homepage.

### 4.7 Product

On equipment pages with `offers` for buy/rent price.

### 4.8 Validation

1. Validate all structured data with Google Rich Results Test before release.
2. Structured data is generated server-side (SSR) — never client-only.

---

## 5. Technical SEO

### 5.1 sitemap.xml

```text
/sitemap.xml  (or Next.js app/sitemap.js)
Contains: home, services, service categories, service details,
          conditions, locations, location+service, articles, faqs,
          about, contact, legal
Excludes: admin, portal, search results, thank-you pages
```

### 5.2 robots.txt

```text
Allow all public pages.
Disallow /api/, /admin/, /portal/, /search
```

### 5.3 Rendering

All public marketing pages are server-rendered (SSR/SSG) —
see `COMPONENT_ARCHITECTURE.md` section 59.

### 5.4 Images

1. Alt text meaningful per image.
2. Responsive srcset + modern formats.
3. Optimized size (budgets in `DEPLOYMENT_AND_ENVIRONMENTS.md`).

---

## 6. Page-Type SEO Targets

```text
Homepage          → brand + category terms
Service category  → "<category> at home"
Service detail    → "<service> at home" (+ city variants via location pages)
Condition         → "care for <condition> at home"
Location          → "home healthcare services in <city>"
Location+service  → "<service> in <city>" (only with unique content)
Equipment         → "<product> buy/rent"
Article           → informational long-tail queries
```

### Thin page rule

A location+service page exists only when it offers genuinely local content
(see `INFORMATION_ARCHITECTURE.md` section 10).

---

## 7. Internal Linking

Follow `INFORMATION_ARCHITECTURE.md` section 22:

```text
Service page → category, related services, conditions, locations, FAQs
Location page → services, areas, contact
Condition page → services, programs, articles
Article → ≥1 service + ≥1 related resource
```

Every page receives at least one internal link from a relevant page.

---

## 8. Analytics

### 8.1 Provider

GA4 (or approved alternative) + server-side event API.

### 8.2 Events

```text
Page views          page_view (with page_title, path)
Engagement          service_view, condition_view, location_view
Search              search_started, search_result_clicked
Care finder         care_finder_started, care_finder_completed
CTA                 cta_clicked (cta_name, cta_location)
Forms               booking_started, booking_completed,
                    enquiry_started, enquiry_completed,
                    callback_requested, form_error, form_abandoned
Contact             phone_clicked, whatsapp_clicked
```

### 8.3 Rules

1. Never send medical details, names, or phone numbers to analytics.
2. Anonymize IPs.
3. Consent-aware: no tracking until consent given where required
   (see `HEALTHCARE_COMPLIANCE_AND_SAFETY.md`).
4. Event names consistent across client and server events.
5. Server-side events for critical conversions (booking created) —
   client-side tracking is not reliable for these.

---

## 9. Conversion Tracking

```text
Primary conversion:  booking created (server event)
Secondary:           enquiry created, callback requested,
                      phone click, care finder → enquiry
```

Store conversion data in analytics only at aggregate level.

---

## 10. Measurement Plan

```text
Health of discovery:   service page views, bounce rate, search usage
Health of conversion:  booking start → completion rate, form error rate
Trust engagement:      trust section clicks, FAQ opens, call clicks
Location behavior:     location page → service page rate
Content:               article → service page rate
```

---

## 11. A/B Testing (Phase 2)

1. Server-side experiments on hero copy, CTA placement, form length.
2. Minimum sample sizes pre-defined; no premature conclusions.
3. Never A/B test medical information or pricing without operations approval.

---

## 12. Final SEO/Analytics Rule

Every page ships with:

```text
Title + description + canonical
One H1 + logical headings
Structured data where applicable
Internal links
Working analytics events (no PII)
```

END OF SEO AND ANALYTICS
