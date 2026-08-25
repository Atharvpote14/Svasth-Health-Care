# Backend Architecture

## 1. Purpose

This document defines the backend architecture for the platform.

Stack (from `PROJECT_CONTEXT.md`):

```text
Runtime:       Node.js (LTS, JavaScript — modern ESM)
Framework:     Express.js
Database:      PostgreSQL via Supabase
Validation:    zod
Auth:          JWT + Supabase Auth (or equivalent)
Jobs:          BullMQ + Redis (or a simple cron worker at MVP)
Email/SMS:     Resend / Twilio or approved providers
Payments:      Razorpay (Phase 2)
Deployment:    Render (see DEPLOYMENT_AND_ENVIRONMENTS.md)
```

---

## 2. High-Level Architecture

```text
Next.js (Vercel)
    │  HTTPS
    ▼
Express API (Render)
    │
    ├── Auth (JWT / OTP / OAuth)
    ├── Routers (public, auth, admin)
    ├── Services (business logic)
    ├── Repositories (data access)
    ├── Validators (zod)
    ├── Integrations (Supabase, SMS, Email, Storage)
    └── Workers (notifications, reminders)
        │
        ▼
PostgreSQL (Supabase)   +   Object Storage (images)   +   Redis (queues/cache)
```

---

## 3. Folder Structure

```text
server/
│
├── src/
│   ├── index.js                  # entry point
│   ├── app.js                    # express app assembly
│   ├── config/
│   │   ├── env.js                # env validation at boot
│   │   └── constants.js
│   │
│   ├── routes/
│   │   ├── v1/
│   │   │   ├── services.routes.js
│   │   │   ├── categories.routes.js
│   │   │   ├── conditions.routes.js
│   │   │   ├── locations.routes.js
│   │   │   ├── professionals.routes.js
│   │   │   ├── equipment.routes.js
│   │   │   ├── search.routes.js
│   │   │   ├── availability.routes.js
│   │   │   ├── bookings.routes.js
│   │   │   ├── leads.routes.js        # enquiries, callbacks, contact, partners
│   │   │   ├── content.routes.js      # articles, faqs, testimonials
│   │   │   ├── auth.routes.js
│   │   │   └── me.routes.js
│   │   └── admin/
│   │       └── ...
│   │
│   ├── controllers/              # HTTP layer: parse, validate, respond
│   │   └── ...
│   │
│   ├── services/                 # business logic layer
│   │   ├── booking.service.js
│   │   ├── lead.service.js
│   │   ├── availability.service.js
│   │   ├── search.service.js
│   │   ├── auth.service.js
│   │   └── ...
│   │
│   ├── repositories/             # data access layer
│   │   ├── booking.repo.js
│   │   ├── service.repo.js
│   │   └── ...
│   │
│   ├── middleware/
│   │   ├── authenticate.js
│   │   ├── authorize.js          # role checks
│   │   ├── validate.js           # zod schema runner
│   │   ├── rateLimit.js
│   │   ├── errorHandler.js
│   │   ├── notFound.js
│   │   ├── requestLogger.js
│   │   └── securityHeaders.js
│   │
│   ├── validators/
│   │   ├── booking.schema.js
│   │   ├── lead.schema.js
│   │   └── ...
│   │
│   ├── types/                    # shared JS object shapes (JSDoc-documented)
│   │   ├── api.js
│   │   └── domain.js
│   │
│   ├── integrations/
│   │   ├── supabase.js
│   │   ├── sms.js
│   │   ├── email.js
│   │   ├── storage.js
│   │   └── payments.js
│   │
│   ├── workers/
│   │   ├── notification.worker.js
│   │   └── booking.reminder.js
│   │
│   └── utils/
│       ├── reference.js          # CN-2026-000123 generation
│       ├── pagination.js
│       └── logger.js
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
│
├── prisma/ or supabase/migrations/
├── .env.example
└── package.json
```

---

## 4. Layering Rules

```text
routes → controllers → services → repositories → database
                    ↘        ↘
              validators   integrations
```

### 4.1 Controllers

* Parse HTTP request (query, params, body)
* Call validation
* Call exactly one service
* Return the API envelope
* No business logic

### 4.2 Services

* All business rules live here
* Transactional orchestration (bookings, leads)
* Call repositories and integrations
* Throw structured domain errors (NotFoundError, ValidationError, ConflictError)

### 4.3 Repositories

* SQL / Supabase queries only
* Return domain types
* No HTTP concerns

### 4.4 Rules

1. Controllers never write SQL.
2. Services never parse HTTP.
3. Repositories never format responses.
4. Business rules never live in components (frontend) or routes (backend).

---

## 5. Error Handling

### 5.1 Domain errors

```javascript
class AppError extends Error {
  constructor(
    public statusCode: number,
    public code: string,      // NOT_FOUND, VALIDATION_ERROR ...
    message: string,
    public details?: FieldError[]
  ) { super(message); }
}
```

### 5.2 Error handler

```text
ValidationError   → 422 with field details
NotFoundError     → 404
ConflictError     → 409
UnauthorizedError → 401
ForbiddenError    → 403
RateLimit         → 429 + Retry-After
Unknown           → 500, logged with request id, generic message to client
```

Every 500 response includes a `X-Request-Id` for support tracing.

---

## 6. Validation

1. Every public endpoint validates with a zod schema.
2. Schemas live in `validators/`.
3. Error messages are user-friendly (see `CONTENT_STYLE_GUIDE.md`).
4. Phone normalization happens in the schema: `+91 9876543210` → `9876543210`.

---

## 7. Booking Service Logic

```text
POST /bookings
    ↓
validate inputs
    ↓
check service exists + published
    ↓
check availability (city + date + slot)
    ↓
create booking (status: requested)
    ↓
generate reference (CN-YYYY-NNNNNN)
    ↓
create booking token (visitor tracking) or link to user
    ↓
notify care team (internal) + confirmation SMS/email to user
    ↓
respond 201
```

### Idempotency

`Idempotency-Key` header: if a completed booking exists for the key within 15 minutes, return it.

---

## 8. Lead Service Logic

```text
POST /enquiries | /callbacks | /contact | /partners/enquiries
    ↓
validate + normalize phone
    ↓
rate limit per phone
    ↓
insert lead (status: new)
    ↓
notify staff (email/CRM webhook)
    ↓
respond 201 with reference
```

---

## 9. Availability Service

1. Reads `service_locations` for the service + city.
2. For instant services: checks an availability/slots table or provider feed.
3. Returns slot list or unavailable state with reason.
4. Results may be cached for 5 minutes (Redis) for hot services.

---

## 10. Search Service

1. Normalizes query (lowercase, trim, transliteration where supported).
2. Matches against: services, conditions, locations, professionals, articles, faqs, equipment.
3. Uses PostgreSQL full-text search (tsvector) for content, ILIKE + ranking for catalog.
4. Returns grouped results with relevance scores.
5. Logs anonymized search terms for improvement.

---

## 11. Background Jobs

```text
Booking reminder        → 24h / 2h before visit (sms/email)
Lead follow-up reminder → 48h after lead creation if uncontacted (staff)
Lead assignment         → route new leads to staff queue
Notification worker     → consumes notification rows from DB
Content cache warm      → refresh popular pages (optional)
```

At MVP a simple cron worker (node-cron) is acceptable.
Migrate to BullMQ when volume requires queues.

---

## 12. Integrations

### 12.1 Supabase

* Client used server-side only for DB + storage
* Service-role key never exposed to frontend
* RLS always enabled (defense in depth)

### 12.2 SMS

* Provider: approved Indian SMS provider
* Templates approved for OTP, booking confirmation, reminders
* Never send marketing without consent

### 12.3 Email

* Transactional email (booking confirmation, callback summary)
* Provider: Resend/SES
* From: care@<domain>

### 12.4 Object storage

* Public bucket: service images, article images (optimized, CDN)
* Private bucket: resumes, patient documents (Phase 2+)

### 12.5 Payments (Phase 2)

* Razorpay orders + webhooks
* Webhook signature verification mandatory
* Idempotent webhook handling

---

## 13. Logging & Monitoring

1. Structured JSON logs with `request_id`.
2. Log levels: info / warn / error; PII masked.
3. Sentry (or equivalent) for error tracking.
4. Uptime checks on `/health`.
5. Alerting: API error rate > 1%, 5xx spikes, SMS/email provider failures.

---

## 14. Performance

1. Database indexes per `DATA_MODEL.md`.
2. Paginate every list endpoint (default limit 12, max 50).
3. N+1 queries forbidden — always eager-load or join.
4. Response time budget: p95 < 400ms for public reads.
5. Redis cache for hot catalog data (cache-aside, 5–15 min TTL).

---

## 15. Testing

See `TESTING_AND_QA.md`:

* Unit tests for services/validators
* Integration tests with a test database for routes
* Every endpoint covered for happy path + errors

---

## 16. API Versioning & Docs

1. Versioned under `/api/v1`.
2. OpenAPI spec generated from validators (zod-to-openapi).
3. Spec published at `/api/docs` (dev) and in repo.

---

## 17. Environment Configuration

See `DEPLOYMENT_AND_ENVIRONMENTS.md` for the full variable list.

At boot, `config/env.js` validates all required variables and fails fast with a clear message.

---

## 18. Final Backend Rule

The backend is the only place where business rules and data access live.

If the frontend needs a new behavior, it goes through this architecture —
never around it.

END OF BACKEND ARCHITECTURE
