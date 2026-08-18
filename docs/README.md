# HOMECARE HEALTHCARE PLATFORM — DOCUMENTATION INDEX

## 1. Purpose

This directory is the single source of truth for building the home healthcare platform.

The platform is a modern, full-stack healthcare-at-home service website inspired by the
service breadth of established Indian home healthcare organizations.

The final product MUST be an original product with its own brand, design, code, and content.

It MUST NOT copy the branding, UI, text, images, or code of any reference website.

---

## 2. Document Map

```text
docs/
│
├── README.md                          <- This index
│
├── PROJECT_CONTEXT.md                 <- Foundation: product, users, rules
├── DESIGN_PRINCIPLES.md               <- How design decisions are made
├── BRAND_IDENTITY.md                  <- Original brand: name, palette, voice
├── DESIGN_SYSTEM.md                   <- Concrete UI tokens and components
├── CONTENT_STYLE_GUIDE.md             <- Tone, voice, content templates
│
├── INFORMATION_ARCHITECTURE.md        <- Pages, URLs, navigation, taxonomy
├── USER_JOURNEYS.md                   <- User goals and flows
├── PAGE_SPECIFICATIONS.md             <- Every page type, section by section
├── COMPONENT_ARCHITECTURE.md          <- Frontend component layers
│
├── DATA_MODEL.md                      <- PostgreSQL / Supabase schema
├── API_SPECIFICATION.md               <- REST API contract
├── AUTHENTICATION_AND_SECURITY.md     <- Auth, roles, data protection
├── BACKEND_ARCHITECTURE.md            <- Node.js / Express service design
│
├── DEPLOYMENT_AND_ENVIRONMENTS.md     <- Vercel / Render / Supabase
├── TESTING_AND_QA.md                  <- Test strategy and quality gates
├── SEO_AND_ANALYTICS.md               <- SEO, structured data, analytics
├── HEALTHCARE_COMPLIANCE_AND_SAFETY.md<- Medical safety & privacy rules
│
└── ROADMAP.md                         <- Phased delivery plan
```

---

## 3. Reading Order

### If you are designing the product

```text
PROJECT_CONTEXT.md
→ DESIGN_PRINCIPLES.md
→ BRAND_IDENTITY.md
→ DESIGN_SYSTEM.md
→ INFORMATION_ARCHITECTURE.md
→ USER_JOURNEYS.md
→ PAGE_SPECIFICATIONS.md
```

### If you are building the frontend

```text
BRAND_IDENTITY.md
→ DESIGN_SYSTEM.md
→ COMPONENT_ARCHITECTURE.md
→ PAGE_SPECIFICATIONS.md
→ API_SPECIFICATION.md
```

### If you are building the backend

```text
PROJECT_CONTEXT.md
→ DATA_MODEL.md
→ API_SPECIFICATION.md
→ AUTHENTICATION_AND_SECURITY.md
→ BACKEND_ARCHITECTURE.md
→ HEALTHCARE_COMPLIANCE_AND_SAFETY.md
```

### If you are shipping the product

```text
DEPLOYMENT_AND_ENVIRONMENTS.md
→ TESTING_AND_QA.md
→ SEO_AND_ANALYTICS.md
→ ROADMAP.md
```

---

## 4. Document Rules

1. No document may contradict `PROJECT_CONTEXT.md`.
2. When documents conflict, use this priority:

```text
PROJECT_CONTEXT.md
    ↓
DESIGN_PRINCIPLES.md
    ↓
HEALTHCARE_COMPLIANCE_AND_SAFETY.md
    ↓
AUTHENTICATION_AND_SECURITY.md
    ↓
DESIGN_SYSTEM.md
    ↓
All other documents
```

3. Before implementing any feature, the AI must read the relevant documents listed in section 3.
4. The brand identity is original and must never be replaced with the identity of a reference website.
5. All medical, safety, and privacy content must follow `HEALTHCARE_COMPLIANCE_AND_SAFETY.md`.

---

## 5. Missing Document Procedure

If the AI cannot find the specification it needs:

1. Check every file in this directory.
2. If a genuinely new specification is required, add a new file following the style of the existing documents (numbered sections, plain language, code blocks).
3. Update this index when adding a file.
4. Never embed important specifications only inside conversation memory.

---

## 6. End of Index
