# Brand Identity

## 1. Purpose

This document defines the original brand identity for the home healthcare platform.

The brand is **independent and original**. It must never:

* Use the name, logo, colors, taglines, imagery, or text of any reference website
* Copy the visual identity of Apollo, its affiliates, or any other homecare brand
* Imply endorsement, partnership, or affiliation with any hospital network

The identity defined here is the starting point. Final naming, logo artwork, and
copy must be approved by the organization before production.

---

## 2. Working Brand Name

```text
Working name:   CareNest
Formal name:    CareNest Health
Domain example: carenest.in   (to be registered/verified by the organization)
```

"Nest" communicates home, safety, care, and family.

The name is a working placeholder. If the organization prefers another name,
all tokens, copy, and assets must be updated consistently through a brand
configuration file (`src/config/brand.js` or equivalent).

---

## 3. Brand Essence

```text
One sentence:
"Expert healthcare that comes to you."

Emotional promise:
Home is where healing happens best.

Brand personality:
Compassionate   —  we treat patients like family
Expert          —  clinically credible and professional
Calm            —  no fear, no urgency tricks, no noise
Reliable        —  we do what we say, on time
Modern          —  easy digital access to professional care
```

---

## 4. Brand Positioning

```text
For patients and families who need professional healthcare at home,
CareNest is the home healthcare platform that combines
clinically trained professionals, verified caregivers, and hospital-grade
service standards delivered into the comfort of home —
unlike generic aggregators that offer no clinical accountability.
```

---

## 5. Brand Name Usage Rules

1. "CareNest" is written in Title Case in body copy: "CareNest".
2. The logo lockup is: symbol + wordmark "CareNest".
3. The tagline "Expert healthcare that comes to you." may appear under the wordmark in limited contexts (footer, hero).
4. Never write the name in all-caps or lowercase-stylized without approval.
5. Never abbreviate the name.

---

## 6. Logo Concept

```text
Symbol: a simple, calm house silhouette merged with a heart or a leaf,
        drawn with a single continuous stroke — representing care inside home.

Style:   minimal line icon, rounded line ends, no gradients
Color:   secondary (#0B5AA6) on white
Negative: white symbol on primary-900

Wordmark: "Poppins" semibold, neutral-900
```

### Logo rules

1. Clear space around the logo equals the height of the wordmark "e".
2. Minimum logo width: 120px on web.
3. Do not rotate, recolor randomly, add shadows, or place on busy imagery without a solid background.
4. Favicon: symbol only, primary-600 background, white symbol.

---

## 7. Color

The full token values are in `DESIGN_SYSTEM.md`. This section defines the meaning.

### 7.1 Action — Portea Orange (action / booking)

```text
accent  #f25922   (hover #e8470e)
```

Communicates:

* The single action on a section (Book Now, Enquire Now)
* Reserved — one per section, never decorative

### 7.2 Primary — Portea Teal (trust / links / outlines)

```text
primary  #00979e   (hover #00767c)
```

Communicates:

* Trust and clinical reliability
* Links, outline buttons, icon fills, eyebrows, section highlights
* The workhorse of the interface

### 7.3 Dark — #0d2222 (depth)

```text
dark  #0d2222   (gradient end #114143; footer #252835)
```

Used for headings, the How-It-Works band, and the closing CTA band.

### 7.4 Usage proportions

```text
White + Ivory (#faf7f1) + page (#fafafa)   ~70%   (backgrounds, breathing room)
Neutrals (#0d2222/#616f6f)                 ~20%   (text, borders, secondary surfaces)
Portea Teal #00979e                        ~7%    (links, icons, secondary actions)
Portea Orange #f25922                      ~2%    (primary actions only)
```

---

## 8. Typography

```text
Display:  Poppins (600 — the font loaded by apollohomecare.com)
Body:     system-ui sans stack (live-site default)
```

Rationale: Poppins is the live Apollo Homecare display font; the live site
applies no custom body font, so body text inherits the system sans stack.

Full type scale and rules: `DESIGN_SYSTEM.md` section 4.

---

## 9. Imagery

### 9.1 Approved imagery directions

* Indian patients and families in warm home settings
* Professional nurses, doctors, and therapists interacting naturally with patients
* Caregivers supporting elderly family members with dignity
* Home environments: living rooms, bedrooms, small clinics-at-home setups
* Everyday objects: medicine, thermometers, wheelchairs — shot softly, not clinically

### 9.2 Forbidden imagery

* Stock photos with obvious watermarks or staged corporate smiles
* Cold hospital corridors and operating rooms
* Fear-inducing imagery (needles up close, extreme illness)
* Misleading medical imagery implying outcomes (e.g., "cured" metaphors)
* Any imagery copied from reference websites

### 9.3 Photo treatment

```text
Tone:       warm, natural light, soft shadows
Filter:     none or a single consistent warm-white balance preset
Subjects:   always people-centered, respectful, diverse Indian representation
```

---

## 10. Iconography

1. Lucide icons, outline style, 1.5px stroke.
2. Feature icons may sit on a primary-50 rounded tile (radius-md).
3. Icons communicate meaning first; decoration second.

---

## 11. Voice & Tone

```text
Voice:      calm, professional, human, plain-spoken
Tone:       reassuring, never alarming; honest, never promotional
Person:     a trusted care coordinator speaking to a family member
```

### 11.1 Always

* Explain medical terms in plain language
* Address the reader as "you" and the patient naturally ("your parent", "your loved one")
* Be specific: names of services, steps, what happens next
* Acknowledge emotions: "We understand this is a difficult time."

### 11.2 Never

* Never use fear to drive action
* Never promise medical outcomes
* Never use urgency language: "limited slots", "only today", "hurry"
* Never use jargon the organization's own staff wouldn't use on the phone
* Never copy text from other healthcare websites

---

## 12. Tagline & Key Messages

```text
Primary tagline:      "Expert healthcare that comes to you."
Hero message example: "Professional healthcare, delivered in the comfort of home."

Supporting messages:
- "Trained professionals. Verified backgrounds. Clinical standards."
- "Care plans designed around your family's needs."
- "From a nurse visit to ICU-level care at home."
- "Healthcare without the hospital."
```

All final copy must be approved by the organization.
These are examples of direction, not final production copy.

---

## 13. Brand Components

## 13.1 Request a Callback (branded trust action)

```text
Label:      "Talk to a care expert"
Context:    "Tell us a little about your needs and a care expert will call you back."
Fields:     Name, Phone, City, Reason
```

## 13.2 Sticky mobile bar

```text
[Call care team] [Book care]  (bottom sticky bar on mobile)
```

---

## 14. Brand in the Product

1. Every page uses the shared header and footer from `COMPONENT_ARCHITECTURE.md`.
2. The brand name appears in `<title>` and Open Graph tags on every page.
3. Legal pages (privacy, terms) use the formal legal entity name of the organization.
4. The emergency disclaimer uses approved wording from `HEALTHCARE_COMPLIANCE_AND_SAFETY.md`.

---

## 15. Brand Do Not List

```text
[ ] No reference-website colors
[ ] No reference-website logo or name
[ ] No reference-website taglines or copy
[ ] No reference-website imagery
[ ] No claim of hospital affiliation unless the organization authorizes it
[ ] No medical claims without approval
[ ] No invented statistics, ratings, or awards
```

---

## 16. Brand Asset Checklist (before launch)

```text
[ ] Final brand name approved
[ ] Domain registered
[ ] Logo (SVG) + favicon (SVG/ICO) in repo
[ ] Social OG image (1200x630) designed with approved palette
[ ] Brand color tokens in tailwind config
[ ] Fonts loaded (Poppins) with fallbacks
[ ] Legal entity name confirmed for legal pages
[ ] Approved tagline and hero copy
[ ] Approved imagery set (licensed or original photography)
```

---

## 17. Final Brand Rule

The brand is a promise: **competent, compassionate, reliable care at home**.

Every pixel and every word must reinforce trust, calm, and professionalism.

If a design or copy decision weakens trust, it weakens the brand — and must be changed.

END OF BRAND IDENTITY
