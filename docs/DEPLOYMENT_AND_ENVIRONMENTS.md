# Deployment and Environments

## 1. Purpose

This document defines the deployment architecture, environments, and configuration for the platform.

```text
Frontend:  Next.js → Vercel
Backend:   Node.js/Express → Render
Database:  PostgreSQL + Storage → Supabase
Queue:     Redis (Upstash or Render Redis) — optional at MVP
Monitoring: Sentry + uptime checks
```

---

## 2. Environments

```text
local        → developer machines
development  → dev.carenest.in      (auto-deploy from main, connects to dev DB)
staging      → staging.carenest.in  (release candidate, prod-like data shape)
production   → carenest.in          (approved releases only)
```

### Rules

1. Each environment has its own database, storage bucket, and secrets.
2. Production data is never used in dev or staging.
3. Staging uses production-like seed content, clearly marked sample.
4. No manual production changes without a documented release.

---

## 3. Frontend Deployment (Vercel)

### 3.1 Setup

```text
Project:      carenest-web
Framework:    Next.js
Build:        npm run build
Install:      npm ci
```

### 3.2 Vercel configuration (vercel.json)

```json
{
  "framework": "nextjs",
  "regions": ["bom1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

Region: India (bom1 = Mumbai) for low latency.

### 3.3 Preview deployments

1. Every PR creates a preview deployment.
2. Preview deployments use the development environment variables.
3. Preview deployments must never access production data.

---

## 4. Backend Deployment (Render)

```text
Service:     carenest-api
Build:       npm ci && npm run build
Start:       npm run start
Instance:    Starter (scale as needed)
Health path: /health
```

### 4.1 Production hardening

1. HTTPS enabled (default on Render).
2. CORS allowlist: production domain only (+ staging, dev).
3. Trust proxy enabled for correct rate-limit IPs.
4. Restart on crash enabled; deploy on main push only through CI.

---

## 5. Database (Supabase)

```text
Project:       carenest-db-<env>
Migrations:    supabase/migrations/*.sql (versioned)
Backups:       PITR enabled on production
RLS:           enabled on all tables
```

### 5.1 Migration workflow

```text
Local:   supabase start  (or use a local Postgres)
Write:   migration SQL
Test:    apply to local + staging
Release: supabase db push --linked --env staging
         → verify
         → apply to production
```

Never edit production schema directly.

---

## 6. Environment Variables

### 6.1 Frontend (Next.js)

```text
NEXT_PUBLIC_API_BASE_URL        # https://api.carenest.in/api/v1
NEXT_PUBLIC_SITE_URL            # https://carenest.in
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_GOOGLE_CLIENT_ID
NEXT_PUBLIC_PHONE_NUMBER        # display contact
NEXT_PUBLIC_WHATSAPP_NUMBER
NEXT_PUBLIC_ANALYTICS_ID        # GA4 measurement id (if client-side)
```

### 6.2 Backend (Express)

```text
NODE_ENV
PORT
DATABASE_URL                    # Supabase connection string (server-only)
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY       # server-only, never exposed
JWT_ACCESS_SECRET
JWT_REFRESH_SECRET
JWT_ISSUER
SMS_PROVIDER_KEY
SMS_SENDER_ID
EMAIL_PROVIDER_KEY
EMAIL_FROM
REDIS_URL                       # optional
RAZORPAY_KEY_ID                 # Phase 2
RAZORPAY_KEY_SECRET             # Phase 2
CORS_ALLOWLIST
RATE_LIMIT_WINDOW_MS
RATE_LIMIT_MAX
```

### 6.3 Rules

1. `.env.example` is committed with placeholder values.
2. Real values live in the deployment platform's secret store.
3. `NEXT_PUBLIC_*` variables are visible in the client bundle — never put secrets there.
4. Validate at boot (see `BACKEND_ARCHITECTURE.md`).

---

## 7. CI/CD (GitHub Actions)

```text
Pull request:
├── lint
├── typecheck
├── unit tests
├── integration tests (against test database)
├── build (frontend + backend)
└── security scan (npm audit, gitleaks)

Push to main:
└── deploy backend to development → deploy frontend to development

Release (tag vX.Y.Z):
├── deploy backend to staging → run smoke tests → manual approval
└── deploy backend + frontend to production
```

---

## 8. Releases

### 8.1 Release checklist

```text
[ ] All tests green on main
[ ] Staging smoke tests pass (home, service page, booking, enquiry)
[ ] Database migrations applied and verified
[ ] Release notes written
[ ] Backend deployed → frontend deployed (backend first)
[ ] Post-deploy smoke test on production
[ ] Sentry error rate monitored for 24h
```

### 8.2 Rollback

1. Frontend: redeploy previous build (Vercel instant).
2. Backend: Render redeploy previous image.
3. Database: restore from PITR only if a migration is defective;
   prefer forward-fix migrations.
4. Feature flags used for risky features.

---

## 9. Domains & DNS

```text
carenest.in              → Vercel (frontend)
www.carenest.in          → redirect to apex
api.carenest.in          → Render (backend)
dev.carenest.in          → dev frontend
staging.carenest.in      → staging frontend
```

CNAME records only; no DNS in code.

---

## 10. Monitoring & Alerts

```text
Uptime:      /health check every minute (UptimeRobot or Render)
Errors:      Sentry (frontend + backend), alert on new issues
Logs:        structured JSON, searchable (Render logs / Papertrail)
Metrics:     API p95 latency, 5xx rate, booking creation rate
Alerts:      email + Slack channel for:
             - 5xx rate > 1% (10 min window)
             - availability service errors
             - SMS/email provider failures
             - backup failures
```

---

## 11. Performance Budgets

```text
LCP (mobile):           < 2.5s
INP:                    < 200ms
CLS:                    < 0.1
Total JS bundle (page): < 300KB gzipped for key pages
Image weight:           hero images < 150KB, cards < 60KB
```

Budgets enforced in CI with Lighthouse CI where feasible.

---

## 12. Backup & Recovery

```text
Database:  continuous backups (Supabase PITR), daily snapshots kept 30 days
Storage:   bucket versioning where supported
Recovery drill: quarterly restore test to a scratch project
```

---

## 13. Final Deployment Rule

Never ship to production without:

```text
Migrations applied on staging
Smoke tests passed
Secrets rotated if changed
Rollback plan confirmed
```

END OF DEPLOYMENT AND ENVIRONMENTS
