# Authentication and Security

## 1. Purpose

This document defines authentication, authorization, and security requirements for the platform.

Security is not a feature — it is a baseline requirement.

Patient data is sensitive. Every decision in this document prioritizes
the protection of patient information.

---

## 2. Roles

```text
visitor        → unauthenticated public user
patient        → authenticated individual (browser of services, books care)
professional   → verified healthcare professional (portal)
staff          → organization operations team (leads, bookings, content)
admin          → full content + operations management
super_admin    → system configuration, user management, audit access
```

### Role rules

1. Roles are stored server-side and enforced server-side.
2. Frontend role checks are UI conveniences only.
3. Default role for a new account: `patient`.
4. `professional` and above require explicit authorization by an admin.

---

## 3. Authentication Methods

```text
Phase 1 (MVP):
├── Phone + OTP        (primary — Indian users)
├── Google OAuth       (secondary)

Phase 2 (later):
└── Email + password   (portal users)
```

### 3.1 OTP flow

```text
User enters phone (+91 normalization)
    ↓
POST /auth/otp/request   (rate limited, cooldown 60s)
    ↓
SMS with 6-digit OTP (expires in 10 min)
    ↓
POST /auth/otp/verify
    ↓
JWT issued (access 15 min, refresh 30 days)
```

### 3.2 OTP security rules

1. Never log OTPs.
2. OTP attempts: max 5 before invalidation.
3. OTP requests: max 5 per phone per 24 hours.
4. Use a generic message: "Your CareNest verification code is XXXXXX."
5. OTP delivery via approved SMS provider only.

### 3.3 Google OAuth

1. Validate the ID token on the server (issuer, audience, signature, expiry).
2. Never trust a client-side "signed in" claim.
3. Link existing phone-based accounts when email matches, with user consent.

---

## 4. Tokens

```text
Access token:   JWT, HS256 or RS256, 15 min expiry
Refresh token:  opaque random string, 30 days, stored hashed in DB
Scopes:         role embedded in claims
```

### 4.1 Token claims

```json
{
  "sub": "user-uuid",
  "role": "patient",
  "iss": "https://api.carenest.in",
  "aud": "carenest-web",
  "exp": 1699999999,
  "iat": 1699999099
}
```

### 4.2 Refresh token handling

1. Stored hashed (sha256) in the database.
2. Rotated on every use.
3. Revoked on logout, password change, or suspected compromise.
4. Refresh tokens never leave the server in logs.

---

## 5. Password Policy (Phase 2)

1. Minimum 10 characters.
2. Stored with argon2id or bcrypt (cost ≥ 12).
3. Password reset via email OTP link, expiring in 30 minutes.
4. Lockout after 10 failed attempts (15-minute window) with progressive delay.

---

## 6. Session & Cookie Policy

1. Web frontend stores access token in memory (React state), not localStorage, where feasible.
2. Refresh token in httpOnly, Secure, SameSite=Lax cookie where feasible.
3. Fallback: refresh token in memory; re-login on refresh failure.
4. Clear tokens on logout from both client and server.

---

## 7. Authorization Matrix (server-side)

```text
Resource                     visitor  patient  professional  staff  admin
────────────────────────────────────────────────────────────────────────────
Read public content            ✓        ✓          ✓           ✓      ✓
Create enquiry/callback        ✓        ✓          ✓           ✓      ✓
Create booking                 ✓        ✓          ✓           ✓      ✓
View own bookings               –        ✓          ✓           ✓      ✓
Update own profile              –        ✓          ✓           ✓      ✓
View all leads                  –        –          –           ✓      ✓
Manage bookings                 –        –          –           ✓      ✓
Manage content (services etc)   –        –          –           ✓      ✓
Manage users/roles              –        –          –           –      ✓
Audit logs                      –        –          –           –      ✓
```

Every endpoint re-checks authorization against the user's role and resource ownership.

---

## 8. Row Level Security (Supabase)

Apply the RLS patterns from `DATA_MODEL.md`:

```text
Public tables   → SELECT where status = 'published'
Owned tables    → auth.uid() = user_id
Staff tables    → role in ('staff','admin','super_admin')
```

RLS policies are tested with automated tests before deployment.

---

## 9. Data Protection (Privacy)

### 9.1 Personal data collected

* Name, phone, email (contact)
* Patient details: age, gender, medical notes (only when relevant to care)
* Booking history, enquiry history

### 9.2 Data minimization

1. Collect only what the workflow needs (see `DESIGN_PRINCIPLES.md` principle 17).
2. Medical notes are optional and only requested when clinically relevant.
3. Never collect data "just in case".

### 9.3 Handling rules

1. Phone/email never exposed in public API responses.
2. PII redacted in logs (mask phone: +91 98•••••210).
3. Patient medical notes visible only to authorized care staff and the patient.
4. Data retention: leads 24 months (configurable), audit logs 5 years,
   account data on request deletion per DPDP (see `HEALTHCARE_COMPLIANCE_AND_SAFETY.md`).
5. Right to erasure: implement account + data deletion workflow.

---

## 10. Input Security

1. Validate all input server-side (zod schemas).
2. Parameterized queries only — no string-built SQL.
3. Escape/encode all output (React does this by default; never use dangerouslySetInnerHTML with untrusted content).
4. Sanitize rich text content (allowlist of tags).
5. File uploads: whitelist extensions, size limits, virus scanning, private storage buckets.

---

## 11. Common Attack Defenses

```text
CSRF:      cookies SameSite=Lax/Strict; state-changing endpoints require
           Content-Type: application/json (blocks form CSRF)
XSS:       framework encoding, CSP, no eval, sanitized rich text
SQLi:      parameterized queries only
IDOR:      ownership checks on every object access (booking/:id etc.)
Brute force: rate limiting + lockouts on auth endpoints
Clickjacking: X-Frame-Options DENY
Open redirect: validate all redirect targets
SSTI:     no server-side template injection surfaces
DoS:      rate limits, payload size limits (1MB), timeouts
```

---

## 12. Secrets Management

1. All secrets in environment variables or a vault.
2. `.env.example` committed; real `.env` never committed.
3. Rotate secrets on team member departure.
4. Database, SMS, email, payment credentials are never client-side.
5. Supabase service-role key is server-only (never in Next.js client bundle).

---

## 13. Audit Logging

1. Audit significant actions: booking status changes, lead conversions,
   profile changes, role changes, content publishes, refunds.
2. Audit records: actor, action, entity, timestamp, IP.
3. Logs are append-only.
4. Never log: OTPs, passwords, tokens, full medical notes.

---

## 14. Payment Security (Phase 2+)

1. Payment gateway: Razorpay (or approved equivalent).
2. Never store card details — gateway handles them.
3. Payment confirmation verified server-side (webhook signature check).
4. Amounts validated server-side from the order record.
5. Refunds through the gateway API with audit records.

---

## 15. Notifications Security

1. SMS/email templates are server-side; user content never injected into
   template code without escaping.
2. Links in notifications use short-lived signed tokens, not raw IDs.
3. Users can opt out of non-transactional communications.

---

## 16. Security Testing

Include in `TESTING_AND_QA.md`:

```text
Unit:      validation, token logic
Integration: role matrix, ownership checks
E2E:       login, booking, authorization negative tests
Automated scans: dependency audit (npm audit), secrets scan (gitleaks),
            container/base image scan
Manual:    penetration test before public launch
```

---

## 17. Incident Response

```text
1. Detect & confirm (monitoring, alerts)
2. Contain (revoke keys, disable access)
3. Notify (affected users, authorities per law)
4. Investigate (audit logs, forensics)
5. Recover (rotate secrets, patch)
6. Post-mortem (document, prevent recurrence)
```

Runbooks must exist before launch.

---

## 18. Final Security Rule

When in doubt between convenience and security:

```text
CHOOSE SECURITY.
```

Patient trust is the product. A breach destroys it permanently.

END OF AUTHENTICATION AND SECURITY
