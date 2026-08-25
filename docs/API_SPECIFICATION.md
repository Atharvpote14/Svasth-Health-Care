# API Specification

## 1. Purpose

This document defines the REST API contract for the home healthcare platform backend.

The backend is Node.js + Express (see `BACKEND_ARCHITECTURE.md`).
The database is PostgreSQL via Supabase (see `DATA_MODEL.md`).

Every frontend feature must consume these endpoints through the service layer.

---

## 2. Conventions

```text
Base URL (prod):     https://api.carenest.in/api/v1
Base URL (dev):      https://dev-api.carenest.in/api/v1
Format:              JSON
Encoding:            UTF-8
IDs:                 uuid
Timestamps:          ISO 8601 (UTC)
Auth:                Bearer <jwt-access-token>
```

## 2.1 Success response envelope

```json
{
  "success": true,
  "data": { }
}
```

## 2.2 Error response envelope

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please check the highlighted fields.",
    "details": [
      { "field": "phone", "message": "Enter a valid 10-digit mobile number." }
    ]
  }
}
```

### Error codes

```text
NOT_FOUND, VALIDATION_ERROR, UNAUTHORIZED, FORBIDDEN,
RATE_LIMITED, CONFLICT, SERVICE_UNAVAILABLE, INTERNAL_ERROR
```

## 2.3 Pagination

```text
Request:   ?page=1&limit=12&sort=created_at:desc
Response:  {
             "data": [...],
             "meta": { "page": 1, "limit": 12, "total": 87, "total_pages": 8 }
           }
```

## 2.4 Filtering

```text
?city=      (city slug)
?category=  (category slug)
?q=         (search text)
?status=    (state filters where public)
```

---

## 3. Public Endpoints (no auth)

## 3.1 Health

```text
GET /health
→ 200 { "status": "ok", "version": "1.0.0" }
```

---

## 3.2 Catalog — Services

```text
GET /services
  Query: category, city, type, q, page, limit
→ 200: { data: [ServiceSummary], meta }

GET /services/:slug
→ 200: { data: ServiceDetail }
→ 404: NOT_FOUND

GET /services/:slug/availability
  Query: city (required)
→ 200: { data: { city, availability: "available"|"limited"|"unavailable", price_from, notes } }

GET /services/:slug/faqs
→ 200: { data: [Faq] }

GET /services/:slug/related
→ 200: { data: [ServiceSummary] }
```

### ServiceSummary

```json
{
  "id": "uuid",
  "slug": "physiotherapy-at-home",
  "name": "Physiotherapy at Home",
  "tagline": "Professional physiotherapy in the comfort of your home.",
  "category": { "slug": "home-visits", "name": "Home Visits" },
  "icon": "url",
  "image": "url",
  "price_from": 799,
  "price_note": "Depends on assessment",
  "availability": "available",
  "type": "visit"
}
```

---

## 3.3 Catalog — Categories

```text
GET /categories
→ 200: { data: [Category] }

Category: {
  "slug": "long-term-care",
  "name": "Long-Term Care",
  "description": "...",
  "icon": "url",
  "service_count": 9
}
```

---

## 3.4 Catalog — Conditions

```text
GET /conditions
  Query: q, page, limit
→ 200: { data: [ConditionSummary], meta }

GET /conditions/:slug
→ 200: { data: ConditionDetail }   // includes recommended services
```

---

## 3.5 Catalog — Locations

```text
GET /locations
→ 200: { data: [LocationSummary] }

GET /locations/:citySlug
→ 200: { data: LocationDetail }    // includes services, areas, contact

GET /locations/:citySlug/services
→ 200: { data: [ServiceSummary] }  // services available in this city

GET /locations/:citySlug/services/:serviceSlug
→ 200: { data: LocationServiceDetail }
```

---

## 3.6 Catalog — Professionals

```text
GET /professionals
  Query: city, type, service, q, page, limit
→ 200: { data: [ProfessionalSummary], meta }

GET /professionals/:slug
→ 200: { data: ProfessionalDetail }
```

Only verified, active professionals are returned to the public API.

---

## 3.7 Catalog — Equipment

```text
GET /equipment
  Query: category, offer, q, page, limit
→ 200: { data: [ProductSummary], meta }

GET /equipment/:slug
→ 200: { data: ProductDetail }

POST /equipment/:slug/availability
  Body: { "city": "pune" }
→ 200: { data: { "available": true, "delivery_note": "..." } }
```

---

## 3.8 Content

```text
GET /articles
  Query: category, q, page, limit
→ 200: { data: [ArticleSummary], meta }

GET /articles/:slug
→ 200: { data: ArticleDetail }

GET /faqs
  Query: category, service, q
→ 200: { data: [Faq] }

GET /testimonials
  Query: service, city, page, limit
→ 200: { data: [Testimonial], meta }
```

Only published testimonials with `consent_obtained = true` are returned.

---

## 3.9 Search

```text
GET /search?q=physio+after+knee+surgery
→ 200: {
  "data": {
    "services":    [...],
    "conditions":  [...],
    "locations":   [...],
    "professionals": [...],
    "articles":    [...],
    "faqs":        [...],
    "equipment":   [...]
  }
}
```

Search must prioritize intent (see `INFORMATION_ARCHITECTURE.md` section 11).

---

## 3.10 Booking availability

```text
GET /availability
  Query: service (slug), city (slug), date (YYYY-MM-DD)
→ 200: {
  "data": {
    "service": "physiotherapy-at-home",
    "city": "pune",
    "date": "2026-08-20",
    "available": true,
    "slots": ["09:00", "11:00", "16:00", "18:30"]
  }
}
→ 200: { "data": { "available": false, "reason": "No slots remaining" } }
```

---

## 4. Public Actions (no auth required to submit)

## 4.1 Enquiry

```text
POST /enquiries
  Body: { name, phone, city, service?, message?, preferred_contact_time? }
→ 201: { data: { reference: "LD-2026-00821", message: "..." } }
→ 422: VALIDATION_ERROR
```

Validation: name ≥ 2 chars, phone = 10 digits (India), city must exist.

## 4.2 Callback request

```text
POST /callbacks
  Body: { name, phone, city, reason }
→ 201: { data: { reference: "CB-2026-00412" } }
```

## 4.3 Contact form

```text
POST /contact
  Body: { name, email, phone?, subject, message }
→ 201: { data: { reference: "CM-2026-00193" } }
```

## 4.4 Partner enquiry

```text
POST /partners/enquiries
  Body: { partner_type, organization?, contact_name, contact_phone, contact_email?, city?, message? }
→ 201: { data: { reference: "PT-2026-00034" } }
```

## 4.5 Equipment order/enquiry

```text
POST /equipment/enquiries
  Body: { product_id, offer: "buy"|"rent", quantity?, duration_months?, city?, address?, contact_name, contact_phone }
→ 201: { data: { reference: "EQ-2026-00231" } }
```

---

## 5. Booking Flow

## 5.1 Create booking

```text
POST /bookings
  Auth: optional (works for visitors; user linked if authenticated)
  Body: {
    service_id, city_id,
    preferred_date, preferred_time?,
    patient: { name, age, gender? },
    contact: { name, phone, email?, relationship },
    notes?
  }
→ 201: {
  "data": {
    "reference": "CN-2026-000231",
    "status": "requested",
    "what_happens_next": "Our care team will confirm availability and contact you."
  }
}
→ 422: VALIDATION_ERROR
→ 409: { "error": { "code": "SERVICE_UNAVAILABLE", "message": "This service is not available in your location." } }
```

### Booking status flow

```text
requested → confirmed → assigned → in_progress → completed
requested → cancelled
confirmed → cancelled
```

## 5.2 View booking (visitor tracking)

```text
GET /bookings/:reference
  Header: X-Booking-Token (returned at creation)
→ 200: { data: Booking }
```

Visitors can track a booking only with the token issued at creation.
Authenticated users can view their own bookings via `GET /me/bookings`.

## 5.3 Cancel booking

```text
POST /bookings/:reference/cancel
  Auth: token (visitor) or user ownership
→ 200: { data: { status: "cancelled" } }
```

---

## 6. Auth Endpoints

```text
POST /auth/otp/request
  Body: { phone }
→ 200: { data: { message: "OTP sent", cooldown_seconds: 60 } }

POST /auth/otp/verify
  Body: { phone, otp, full_name? }
→ 200: { data: { access_token, refresh_token, user } }

POST /auth/google
  Body: { id_token }     // Google OAuth credential
→ 200: { data: { access_token, refresh_token, user } }

POST /auth/refresh
  Body: { refresh_token }
→ 200: { data: { access_token, refresh_token } }

POST /auth/logout
  Auth: required
→ 204

GET /me
  Auth: required
→ 200: { data: { id, full_name, phone, email, role, patient_profile? } }

GET /me/bookings
  Auth: required
→ 200: { data: [Booking], meta }

GET /me/leads
  Auth: required
→ 200: { data: [Lead], meta }
```

### OTP rules

* Rate limit: max 5 OTP requests per phone per 24 hours
* Cooldown between requests: 60 seconds
* OTP expiry: 10 minutes
* Max 5 verify attempts before OTP invalidates
* OTP length: 6 digits
* Never log OTPs

---

## 7. Admin / Staff Endpoints (role-protected)

Prefix: `/admin`

```text
Auth: JWT with role staff | admin | super_admin

GET    /admin/dashboard/summary
GET    /admin/services                  (all statuses)
POST   /admin/services
PATCH  /admin/services/:id
POST   /admin/services/:id/availability
GET    /admin/leads
PATCH  /admin/leads/:id/status
GET    /admin/bookings
PATCH  /admin/bookings/:id/status
POST   /admin/bookings/:id/assign
GET    /admin/professionals
PATCH  /admin/professionals/:id/verify
GET    /admin/cities
POST   /admin/cities
GET    /admin/articles
POST   /admin/articles
PATCH  /admin/articles/:id
GET    /admin/faqs
POST   /admin/faqs
GET    /admin/testimonials
PATCH  /admin/testimonials/:id/status
```

All admin endpoints enforce authorization **server-side**.
The frontend hiding a button is never security.

---

## 8. Rate Limiting

```text
Public reads:      60 req/min per IP
Public writes:     10 req/min per IP
OTP endpoints:     5 req/hour per phone
Booking creation:  5 req/hour per phone
Auth endpoints:    10 req/min per IP
```

Respond with `429` + `Retry-After` header.

---

## 9. Validation Rules

```text
name:           2–80 chars
phone:          10 digits, starts 6–9 (Indian mobile) — normalized to +91
email:          valid format when required
city_id / area_id: must exist in DB
preferred_date: not in the past; within 90 days
slots:          from server-provided list only
patient.age:    0–120
rating:         1–5 (testimonials)
pincode:        6 digits
```

---

## 10. Idempotency

Booking and lead creation accept an optional `Idempotency-Key` header.

Duplicate submission with the same key within 15 minutes returns the original record.

This prevents duplicate bookings from double-taps or retries.

---

## 11. API Versioning

1. Version in URL path: `/api/v1/...`
2. Breaking changes create `/api/v2/...`
3. Deprecated versions are maintained for 6 months with a `Deprecation` header.

---

## 12. Security Headers (all responses)

```text
Strict-Transport-Security: max-age=31536000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: (configured per environment)
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## 13. API Testing Requirements

Every endpoint must have:

1. A happy-path test
2. A validation-failure test
3. An auth-failure test (where auth applies)
4. A not-found test
5. A rate-limit test where applicable

See `TESTING_AND_QA.md`.

---

## 14. Final API Rule

The API never returns:

* OTPs or secrets
* Other users' data
* Unpublished content
* Unverified testimonials
* Internal error details (stack traces)

If a frontend feature needs data, add the endpoint to this document first.

END OF API SPECIFICATION
