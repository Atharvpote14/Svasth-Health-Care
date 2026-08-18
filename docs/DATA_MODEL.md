# Data Model

## 1. Purpose

This document defines the database schema for the home healthcare platform.

Database: PostgreSQL (hosted via Supabase).

The schema is designed to support:

* Public website content (services, locations, articles, FAQs)
* Booking and enquiry workflows
* Authentication and authorization
* Future patient / professional / admin portals
* Future payments and notifications

All content that administrators manage regularly must be stored in the database,
not hard-coded (see `PROJECT_CONTEXT.md`).

---

## 2. Conventions

```text
Tables:       snake_case, plural  (e.g. service_categories)
Columns:      snake_case           (e.g. available_from)
Primary keys: uuid DEFAULT gen_random_uuid()
Foreign keys: <singular_table>_id  (e.g. category_id)
Timestamps:   created_at, updated_at (timestamptz)
Soft delete:  deleted_at nullable
Money:        numeric(12,2) in INR
Status:       text with CHECK constraint or enum type
```

Enums use Postgres `CREATE TYPE` where values are stable.

---

## 3. Enum Types

```sql
CREATE TYPE user_role AS ENUM
  ('visitor', 'patient', 'professional', 'staff', 'admin', 'super_admin');

CREATE TYPE booking_status AS ENUM
  ('draft', 'requested', 'confirmed', 'assigned',
   'in_progress', 'completed', 'cancelled', 'expired');

CREATE TYPE booking_type AS ENUM
  ('instant', 'assessment', 'enquiry');

CREATE TYPE lead_type AS ENUM
  ('enquiry', 'callback', 'contact', 'partner', 'career', 'equipment');

CREATE TYPE service_type AS ENUM
  ('visit', 'long_term', 'diagnostic', 'vaccination', 'rehabilitation');

CREATE TYPE availability_state AS ENUM
  ('available', 'limited', 'unavailable');

CREATE TYPE professional_type AS ENUM
  ('doctor', 'nurse', 'physiotherapist', 'dietitian',
   'speech_therapist', 'occupational_therapist', 'respiratory_therapist',
   'attendant', 'caregiver', 'technician');

CREATE TYPE verification_state AS ENUM
  ('unverified', 'pending', 'verified', 'rejected');

CREATE TYPE article_status AS ENUM
  ('draft', 'review', 'published', 'archived');

CREATE TYPE content_status AS ENUM
  ('draft', 'published', 'archived');

CREATE TYPE payment_status AS ENUM
  ('pending', 'authorized', 'captured', 'failed', 'refunded');

CREATE TYPE equipment_offer AS ENUM
  ('buy', 'rent', 'both');

CREATE TYPE notification_channel AS ENUM
  ('email', 'sms', 'whatsapp', 'push', 'in_app');
```

---

## 4. Core Catalog Tables

## 4.1 cities

```sql
CREATE TABLE cities (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  slug        text NOT NULL UNIQUE,
  state       text NOT NULL,
  region      text,                     -- e.g. "West", "South"
  is_active   boolean DEFAULT true,
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now()
);
```

## 4.2 areas

```sql
CREATE TABLE areas (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  city_id    uuid NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
  name       text NOT NULL,
  pincode    text,
  is_active  boolean DEFAULT true
);
```

## 4.3 service_categories

```sql
CREATE TABLE service_categories (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name         text NOT NULL,
  slug         text NOT NULL UNIQUE,
  description  text,
  icon         text,
  image_url    text,
  sort_order   int DEFAULT 0,
  status       content_status DEFAULT 'published',
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);
```

## 4.4 services

```sql
CREATE TABLE services (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id      uuid REFERENCES service_categories(id),
  name             text NOT NULL,
  slug             text NOT NULL UNIQUE,
  tagline          text,
  description      text,                 -- full page content (markdown/JSON)
  overview         text,
  type             service_type NOT NULL DEFAULT 'visit',
  icon             text,
  image_url        text,
  price_from       numeric(12,2),        -- display "from" price, nullable
  price_note       text,                 -- e.g. "Price depends on assessment"
  is_instant_bookable boolean DEFAULT false,
  booking_type     booking_type DEFAULT 'enquiry',
  seo_title        text,
  seo_description  text,
  status           content_status DEFAULT 'published',
  sort_order       int DEFAULT 0,
  created_at       timestamptz DEFAULT now(),
  updated_at       timestamptz DEFAULT now()
);

CREATE INDEX idx_services_category ON services(category_id);
CREATE INDEX idx_services_status   ON services(status);
```

## 4.5 service_contents

Structured page sections for service detail pages, making content CMS-editable.

```sql
CREATE TABLE service_contents (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id  uuid NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  section_key text NOT NULL,   -- overview | who_its_for | whats_included | how_it_works | benefits | faqs ...
  title       text,
  body        jsonb,           -- structured blocks (paragraphs, lists, steps)
  sort_order  int DEFAULT 0
);
```

## 4.6 service_locations (availability)

```sql
CREATE TABLE service_locations (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id  uuid NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  city_id     uuid NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
  availability availability_state DEFAULT 'available',
  price_override numeric(12,2),
  notes       text,
  UNIQUE (service_id, city_id)
);
```

## 4.7 conditions

```sql
CREATE TABLE conditions (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name            text NOT NULL,
  slug            text NOT NULL UNIQUE,
  description     text,
  common_needs    jsonb,       -- list of care needs
  icon            text,
  image_url       text,
  seo_title       text,
  seo_description text,
  status          content_status DEFAULT 'published',
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);
```

## 4.8 condition_services

```sql
CREATE TABLE condition_services (
  condition_id uuid NOT NULL REFERENCES conditions(id) ON DELETE CASCADE,
  service_id   uuid NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  sort_order   int DEFAULT 0,
  PRIMARY KEY (condition_id, service_id)
);
```

## 4.9 equipment_categories

```sql
CREATE TABLE equipment_categories (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  slug        text NOT NULL UNIQUE,
  description text,
  icon        text,
  image_url   text,
  sort_order  int DEFAULT 0
);
```

## 4.10 equipment_products

```sql
CREATE TABLE equipment_products (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id     uuid REFERENCES equipment_categories(id),
  name            text NOT NULL,
  slug            text NOT NULL UNIQUE,
  description     text,
  specifications  jsonb,
  images          jsonb,           -- array of urls
  offers          equipment_offer DEFAULT 'both',
  buy_price       numeric(12,2),
  rent_price      numeric(12,2),   -- per month
  deposit         numeric(12,2),
  is_available    boolean DEFAULT true,
  delivery_note   text,
  seo_title       text,
  seo_description text,
  status          content_status DEFAULT 'published',
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);
```

---

## 5. People Tables

## 5.1 users (extends Supabase auth.users)

```sql
CREATE TABLE users (
  id              uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name       text NOT NULL,
  phone           text,
  email           text,
  role            user_role DEFAULT 'visitor',
  avatar_url      text,
  preferred_language text DEFAULT 'en',
  is_active       boolean DEFAULT true,
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);
```

## 5.2 patients

```sql
CREATE TABLE patients (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid REFERENCES users(id) ON DELETE SET NULL,
  full_name   text NOT NULL,
  date_of_birth date,
  gender      text,
  blood_group text,
  medical_notes text,
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now()
);
```

## 5.3 patient_addresses

```sql
CREATE TABLE patient_addresses (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id   uuid NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
  address_line text NOT NULL,
  area_id      uuid REFERENCES areas(id),
  city_id      uuid REFERENCES cities(id),
  pincode      text,
  is_primary   boolean DEFAULT false
);
```

## 5.4 professionals

```sql
CREATE TABLE professionals (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          uuid REFERENCES users(id) ON DELETE SET NULL,
  full_name        text NOT NULL,
  slug             text NOT NULL UNIQUE,
  professional_type professional_type NOT NULL,
  specialty        text,
  qualifications   jsonb,          -- array of qualifications
  experience_years int,
  languages        jsonb,
  bio              text,
  photo_url        text,
  verification_state verification_state DEFAULT 'unverified',
  verification_note text,
  is_active        boolean DEFAULT true,
  created_at       timestamptz DEFAULT now(),
  updated_at       timestamptz DEFAULT now()
);
```

## 5.5 professional_services

```sql
CREATE TABLE professional_services (
  professional_id uuid NOT NULL REFERENCES professionals(id) ON DELETE CASCADE,
  service_id      uuid NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  PRIMARY KEY (professional_id, service_id)
);
```

## 5.6 professional_cities

```sql
CREATE TABLE professional_cities (
  professional_id uuid NOT NULL REFERENCES professionals(id) ON DELETE CASCADE,
  city_id         uuid NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
  PRIMARY KEY (professional_id, city_id)
);
```

---

## 6. Transactional Tables

## 6.1 leads (enquiries & callbacks)

```sql
CREATE TABLE leads (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_type     lead_type NOT NULL,
  name          text NOT NULL,
  phone         text NOT NULL,
  email         text,
  city_id       uuid REFERENCES cities(id),
  service_id    uuid REFERENCES services(id),
  product_id    uuid REFERENCES equipment_products(id),
  message       text,
  preferred_contact_time text,
  status        text DEFAULT 'new',   -- new | contacted | qualified | converted | closed
  assigned_to   uuid REFERENCES users(id),
  source        text,                  -- website | phone | referral ...
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_phone  ON leads(phone);
```

## 6.2 bookings

```sql
CREATE TABLE bookings (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reference     text UNIQUE,            -- e.g. CN-2026-000123
  user_id       uuid REFERENCES users(id),
  service_id    uuid NOT NULL REFERENCES services(id),
  city_id       uuid REFERENCES cities(id),
  area_id       uuid REFERENCES areas(id),
  status        booking_status DEFAULT 'requested',
  preferred_date date,
  preferred_time time,
  booking_type  booking_type DEFAULT 'enquiry',
  patient_id    uuid REFERENCES patients(id),
  patient_name  text,
  patient_age   int,
  patient_gender text,
  relationship  text,                    -- self | parent | spouse | child | other
  contact_name  text,
  contact_phone text,
  contact_email text,
  notes         text,
  assigned_professional_id uuid REFERENCES professionals(id),
  price         numeric(12,2),
  payment_status payment_status,
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_city   ON bookings(city_id);
CREATE INDEX idx_bookings_phone  ON bookings(contact_phone);
```

## 6.3 booking_events (audit trail)

```sql
CREATE TABLE booking_events (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id  uuid NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  from_status booking_status,
  to_status   booking_status,
  changed_by  uuid REFERENCES users(id),
  note        text,
  created_at  timestamptz DEFAULT now()
);
```

## 6.4 equipment_orders

```sql
CREATE TABLE equipment_orders (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reference   text UNIQUE,
  user_id     uuid REFERENCES users(id),
  product_id  uuid NOT NULL REFERENCES equipment_products(id),
  offer       equipment_offer NOT NULL,
  quantity    int DEFAULT 1,
  duration_months int,                -- for rental
  city_id     uuid REFERENCES cities(id),
  address     text,
  contact_name text,
  contact_phone text,
  status      text DEFAULT 'enquiry', -- enquiry | ordered | confirmed | delivered | returned | cancelled
  payment_status payment_status,
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now()
);
```

---

## 7. Content Tables

## 7.1 faqs

```sql
CREATE TABLE faqs (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category    text NOT NULL,          -- general | services | booking | diagnostics | equipment | payments
  question    text NOT NULL,
  answer      text NOT NULL,
  service_id  uuid REFERENCES services(id) ON DELETE SET NULL,
  sort_order  int DEFAULT 0,
  status      content_status DEFAULT 'published',
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now()
);
```

## 7.2 testimonials

```sql
CREATE TABLE testimonials (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  city         text,
  service_name text,
  quote        text NOT NULL,
  rating       int CHECK (rating BETWEEN 1 AND 5),
  photo_url    text,
  is_verified  boolean DEFAULT false,
  consent_obtained boolean DEFAULT false,
  status       content_status DEFAULT 'published',
  created_at   timestamptz DEFAULT now()
);
```

## 7.3 articles

```sql
CREATE TABLE articles (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title          text NOT NULL,
  slug           text NOT NULL UNIQUE,
  excerpt        text,
  body           jsonb,                 -- structured content blocks
  cover_image    text,
  author_name    text,
  author_role    text,
  reviewer_name  text,                  -- medical reviewer when required
  published_at   timestamptz,
  status         article_status DEFAULT 'draft',
  seo_title      text,
  seo_description text,
  created_at     timestamptz DEFAULT now(),
  updated_at     timestamptz DEFAULT now()
);
```

## 7.4 article_categories & article_category_links

```sql
CREATE TABLE article_categories (
  id   uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE
);

CREATE TABLE article_category_links (
  article_id  uuid NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  category_id uuid NOT NULL REFERENCES article_categories(id) ON DELETE CASCADE,
  PRIMARY KEY (article_id, category_id)
);
```

---

## 8. Partner & Careers Tables

## 8.1 partner_enquiries

```sql
CREATE TABLE partner_enquiries (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_type  text NOT NULL,          -- doctor | hospital | corporate | organization
  organization  text,
  contact_name  text NOT NULL,
  contact_phone text NOT NULL,
  contact_email text,
  city_id       uuid REFERENCES cities(id),
  message       text,
  status        text DEFAULT 'new',
  created_at    timestamptz DEFAULT now()
);
```

## 8.2 jobs

```sql
CREATE TABLE jobs (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title       text NOT NULL,
  slug        text NOT NULL UNIQUE,
  department  text,
  city        text,
  type        text,                -- full_time | part_time | contract
  description jsonb,
  requirements jsonb,
  is_open     boolean DEFAULT true,
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now()
);
```

## 8.3 job_applications

```sql
CREATE TABLE job_applications (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id         uuid NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  full_name      text NOT NULL,
  email          text NOT NULL,
  phone          text NOT NULL,
  resume_url     text,
  cover_note     text,
  status         text DEFAULT 'received',
  created_at     timestamptz DEFAULT now()
);
```

---

## 9. Care Plan Tables (future portal)

## 9.1 care_plans

```sql
CREATE TABLE care_plans (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id    uuid NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
  professional_id uuid REFERENCES professionals(id),
  booking_id    uuid REFERENCES bookings(id),
  title         text NOT NULL,
  plan_json     jsonb,             -- sessions, exercises, goals
  status        text DEFAULT 'active',   -- active | paused | completed | cancelled
  start_date    date,
  end_date      date,
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);
```

---

## 10. Notification & Audit Tables

## 10.1 notifications

```sql
CREATE TABLE notifications (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid REFERENCES users(id) ON DELETE CASCADE,
  channel    notification_channel NOT NULL,
  template_key text,
  payload    jsonb,
  status     text DEFAULT 'pending',  -- pending | sent | failed
  sent_at    timestamptz,
  created_at timestamptz DEFAULT now()
);
```

## 10.2 audit_logs

```sql
CREATE TABLE audit_logs (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id   uuid REFERENCES users(id),
  action     text NOT NULL,            -- e.g. booking.updated, lead.converted
  entity_type text,
  entity_id  text,
  payload    jsonb,
  ip_address text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX idx_audit_entity ON audit_logs(entity_type, entity_id);
```

---

## 11. Relationship Summary

```text
cities 1─n areas
service_categories 1─n services
services n─n cities        (service_locations)
services n─n conditions    (condition_services)
services 1─n service_contents
services n─n professionals (professional_services)
professionals n─n cities   (professional_cities)
users 1─n patients
patients 1─n patient_addresses
users 1─n bookings
services 1─n bookings
bookings 1─n booking_events
equipment_categories 1─n equipment_products
equipment_products 1─n equipment_orders
articles n─n article_categories
leads / partner_enquiries / job_applications = independent inbound tables
```

---

## 12. Indexing Rules

1. Index every foreign key used in lookups.
2. Index `slug` columns as UNIQUE (they are canonical URLs).
3. Index status columns used for filtering.
4. Use `created_at DESC` indexes for recent-content queries.
5. Full-text search on services/articles may use Postgres tsvector columns when needed.

---

## 13. Row Level Security (Supabase)

Public read access:

```sql
-- Public can read published services and content
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read published services"
  ON services FOR SELECT
  USING (status = 'published');
```

Pattern:

```text
Public tables (services, categories, cities, articles, faqs, testimonials)
→ SELECT only, filtered to published content

User-owned tables (users, patients, bookings, orders)
→ SELECT/UPDATE only own rows (auth.uid() = user_id)

Admin tables (leads, partner_enquiries, job_applications, audit_logs)
→ no public access; staff/admin roles only

Staff tables (bookings, professionals)
→ staff/admin roles only
```

---

## 14. Soft Delete & Audit Rules

1. Content tables use `status` for unpublishing; hard delete is admin-only.
2. Booking cancellations are status transitions recorded in `booking_events`, never hard deletes.
3. Audit logs are append-only.

---

## 15. Data Migration Rules

1. All schema changes use versioned migrations (e.g. `supabase/migrations/0001_init.sql`).
2. Migrations must be idempotent where possible.
3. Seed data is clearly marked as seed, never production data.
4. Never commit secrets or database URLs to the repository.

---

## 16. Mock Data Policy

1. Mock/seed data must be clearly labeled as sample content.
2. Never invent patient numbers, ratings, accreditations, or clinical statistics.
3. Testimonials require `consent_obtained = true` before going live.

---

## 17. Final Data Rule

The database is the source of truth for content.

Pages render from database records through the service layer.

If a page displays content that administrators will manage, that content belongs in these tables.

END OF DATA MODEL
