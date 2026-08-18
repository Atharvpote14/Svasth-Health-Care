# Design System

## 1. Purpose

This document defines the concrete UI tokens and component rules for the healthcare platform.

It translates `DESIGN_PRINCIPLES.md` into exact, usable values.

All colors, fonts, spacing, radii, shadows, motion, and component behaviors used anywhere in the
product MUST come from this document.

`BRAND_IDENTITY.md` defines the strategic meaning behind these choices.
`COMPONENT_ARCHITECTURE.md` defines how components are organized.

---

## 2. Design Tokens

Tokens are the single source of truth for visual values.

Tokens are consumed as CSS variables / Tailwind theme values.

No hard-coded hex values, font sizes, or spacing values are allowed inside components.

---

# 3. Color System

## 3.1 Brand Palette

```text
Primary
├── primary-50   #F0F7F5
├── primary-100  #DCEFE9
├── primary-200  #B8DFD4
├── primary-300  #8CCAB8
├── primary-400  #55B096
├── primary-500  #2E9678   (brand primary)
├── primary-600  #1F7C63
├── primary-700  #1A6A54
├── primary-800  #155549
├── primary-900  #0F433A
└── primary-950  #0A2E28
```

The primary color is a deep, calm teal-green. It communicates health, growth, calm,
and clinical trust without feeling corporate or cold.

---

## 3.2 Accent Palette

```text
Accent (warm amber — human warmth, CTAs needing attention)
├── accent-50   #FEF7EC
├── accent-100  #FCECCC
├── accent-200  #F9D99A
├── accent-300  #F5C060
├── accent-400  #F0A63B
├── accent-500  #E58F1F   (accent primary)
├── accent-600  #C47318
├── accent-700  #9C5A15
├── accent-800  #7E4814
└── accent-900  #683C14
```

The accent is used sparingly for emphasis: small highlights, active states, or
attention-grabbing elements. It must never dominate the interface.

---

## 3.3 Neutral Palette

```text
Neutral (warm grays — human, calm, readable)
├── neutral-0    #FFFFFF   (white)
├── neutral-50   #FAFAF8
├── neutral-100  #F4F4F1
├── neutral-200  #E7E7E2
├── neutral-300  #D3D3CC
├── neutral-400  #A8A89F
├── neutral-500  #7F7F76
├── neutral-600  #5C5C55
├── neutral-700  #42423D
├── neutral-800  #2E2E2A
├── neutral-900  #1C1C19
└── neutral-950  #121210
```

Neutrals are warm, never pure gray, to keep the product feeling human.

---

## 3.4 Semantic Colors

```text
Success
├── success-500  #2F855A
└── success-100  #E3F2EA

Warning
├── warning-500  #C05621
└── warning-100  #FBEEDD

Error
├── error-500    #C0392B
└── error-100    #FBEAE8

Info
├── info-500     #2B6CB0
└── info-100     #E3EEF7
```

Semantic colors are used for states only:

* Success: confirmed bookings, saved states
* Warning: items requiring attention
* Error: validation failures, failures
* Info: neutral explanatory messages

Never use error red for decoration.

---

## 3.5 Color Rules

1. Text on primary-600 or darker surfaces must be white.
2. Text on primary-100 or lighter surfaces must be primary-900.
3. Body text uses neutral-800; secondary text uses neutral-600.
4. Links use primary-700 with underline on hover.
5. Never use color alone to communicate meaning (accessibility).
6. All text/background pairs must meet WCAG AA contrast (4.5:1 body, 3:1 large text).

---

# 4. Typography

## 4.1 Font Families

```text
Display / Headings:  "Lora" (serif, warm, premium, human)
Body / UI:           "Inter" (neutral, highly readable)
Mono (rare):         "JetBrains Mono" or system mono
```

Rationale:

* Serif headings give a premium, editorial, healthcare-institution feel.
* Sans body text maximizes readability for older users.

Fallback stacks must be defined.

---

## 4.2 Type Scale

```text
text-xs     12px / 16px   letter-spacing 0.01em
text-sm     14px / 20px
text-base   16px / 24px
text-lg     18px / 28px
text-xl     20px / 30px
text-2xl    24px / 32px
text-3xl    30px / 38px
text-4xl    36px / 44px
text-5xl    48px / 56px
text-6xl    60px / 68px
```

## 4.3 Heading Styles

```text
H1  →  text-4xl → text-6xl (responsive), Lora, neutral-900
H2  →  text-3xl → text-4xl, Lora, neutral-900
H3  →  text-2xl, Lora, neutral-900
H4  →  text-xl, Inter, neutral-900, semibold
Eyebrow → text-sm, Inter, semibold, uppercase, letter-spacing 0.08em, primary-700
Body → text-base, Inter, neutral-800
Lead → text-lg → text-xl, Inter, neutral-600
Caption → text-sm, Inter, neutral-500
```

## 4.4 Typography Rules

1. One H1 per page.
2. Heading hierarchy must be logical (never skip levels).
3. Maximum line length for body text: 70 characters.
4. Font sizes must scale on mobile without breaking layout.
5. Do not use font-weight below 400 for body text.
6. Numbers use tabular figures where alignment matters (pricing, stats).

---

# 5. Spacing System

Base unit: 4px.

```text
space-0    0px
space-1    4px
space-2    8px
space-3    12px
space-4    16px
space-5    20px
space-6    24px
space-8    32px
space-10   40px
space-12   48px
space-16   64px
space-20   80px
space-24   96px
space-32   128px
```

## 5.1 Section Spacing

```text
Mobile:      section padding-top/bottom = space-12 (48px)
Tablet:      space-16 (64px)
Desktop:     space-20 → space-24 (80–96px)
```

Section spacing is consistent. Do not invent new values per page.

---

# 6. Layout

## 6.1 Container Widths

```text
container-sm   640px
container-md   768px
container-lg   1024px
container-xl   1200px
container-full 100% (edge to edge)
```

Default page container: `container-xl` with `space-6` horizontal padding on mobile.

## 6.2 Breakpoints

```text
sm   640px   mobile landscape / small tablet
md   768px   tablet
lg   1024px  laptop
xl   1280px  desktop
2xl  1536px  large desktop
```

All layouts are mobile-first (base styles = mobile, breakpoints only add).

## 6.3 Grid

```text
Mobile:   1 column
Tablet:   2 columns
Desktop:  3–4 columns depending on card density
```

Column counts must come from the grid primitive, not per-component hacks.

---

# 7. Border Radius

```text
radius-none   0px    (images? none — see rule)
radius-sm     4px    (small controls, chips)
radius-md     8px    (default — inputs, cards)
radius-lg     12px   (larger cards, images)
radius-xl     16px   (featured cards, modals)
radius-full   999px  (pills, avatars, buttons)
```

## 7.1 Radius Rules

1. Default radius for most surfaces: `radius-md` (8px).
2. Hero images: `radius-lg` (12px) or `radius-xl` for featured content.
3. Buttons: `radius-md` (8px) for primary; `radius-full` only for pill variants if used consistently.
4. Do not round every surface. Keep the interface professional and calm.
5. Never mix more than two radius sizes within one view.

---

# 8. Borders

```text
border-thin    1px solid neutral-200
border-default  1px solid neutral-300
border-strong  1.5px solid neutral-400
border-focus   2px solid primary-600  (+ 3px primary-100 ring)
```

## 8.1 Border Rules

1. Cards use `border-thin` by default; borders may be removed when shadow is present (never both).
2. Focus rings are mandatory on all interactive elements.
3. Form inputs use `border-default` and switch to `primary-600` on focus.

---

# 9. Shadows

```text
shadow-xs     0 1px 2px rgba(18,18,16,0.04)
shadow-sm     0 1px 3px rgba(18,18,16,0.06), 0 1px 2px rgba(18,18,16,0.04)
shadow-md     0 4px 8px rgba(18,18,16,0.06), 0 2px 4px rgba(18,18,16,0.04)
shadow-lg     0 10px 20px rgba(18,18,16,0.08), 0 4px 8px rgba(18,18,16,0.04)
shadow-xl     0 20px 40px rgba(18,18,16,0.10), 0 8px 16px rgba(18,18,16,0.06)
```

## 9.1 Shadow Rules

1. Default card elevation: `shadow-sm` or `shadow-xs`.
2. Hover elevation increases by exactly one step.
3. Modals/drawers: `shadow-xl`.
4. Never use glow or colored shadows.
5. If a card has a border, it does not also need a large shadow.

---

# 10. Icons

1. Use one icon set consistently: Lucide Icons (outline, 1.5px stroke default).
2. Icon sizes: 16px (inline), 20px (list items), 24px (buttons/standalone), 32px (feature icons).
3. Icons must have `aria-hidden="true"` unless they carry meaning.
4. Feature icons in cards: 24px within a `space-4` padded container on primary-50, radius-md.

---

# 11. Imagery

## 11.1 Image Tokens

```text
aspect-4-3  4:3  (default cards)
aspect-16-9 16:9 (hero, articles)
aspect-1-1  1:1  (professional photos, avatars)
```

## 11.2 Image Rules

1. All images must be real, licensed, and appropriate (see `BRAND_IDENTITY.md`).
2. Every `<img>` requires meaningful alt text.
3. Images lazy-load below the fold (`loading="lazy"`).
4. Decorative images use empty alt.
5. Provide WebP/AVIF with responsive sizes.
6. Never stretch or distort images.

---

# 12. Motion

## 12.1 Durations & Easing

```text
duration-fast    150ms
duration-base    250ms
duration-slow    400ms

ease-standard    cubic-bezier(0.4, 0, 0.2, 1)
ease-emphasized  cubic-bezier(0.2, 0, 0, 1)
```

## 12.2 Motion Rules

1. Hover states: `duration-fast` on color/transform.
2. Modals/drawers: `duration-base`, `ease-emphasized`.
3. Page-level reveals: `duration-slow`, fade + 12px translate, staggered by section.
4. Respect `prefers-reduced-motion`: remove all non-essential animation.
5. No looping or flashing animations.
6. Motion must never delay essential information.

---

# 13. Components

## 13.1 Button

```text
Sizes
├── sm    height 36px, px-3, text-sm
├── md    height 44px, px-5, text-base
└── lg    height 52px, px-6, text-base

Variants
├── primary    bg primary-600, text white, hover primary-700
│              radius-md, shadow-sm
├── secondary  bg white, border border-strong, text neutral-800,
│              hover border primary-600 + text primary-700
├── tertiary   transparent, text primary-700, underline on hover
├── accent     bg accent-500, text white (rare, high-emphasis only)
├── destructive bg error-500, text white
└── link       text primary-700 inline with underline
```

### Button states

```text
Default / Hover / Focus (visible ring) / Active / Disabled (opacity 50%) / Loading (spinner)
```

### Button rules

1. Primary CTA appears once per screen (see `DESIGN_PRINCIPLES.md`).
2. Minimum touch target: 44px height.
3. Labels are sentence case ("Book care"), never all caps.
4. Loading state must preserve button width (spinner + label).

---

## 13.2 Link

```text
Inline links:   primary-700, underline on hover, focus ring
Card links:     stretch the entire card (after pseudo-element), with
                an accessible "Learn more" visually-hidden label
```

---

## 13.3 Card

```text
Structure
├── CardHeader (optional)
├── CardMedia  (optional)
├── CardContent
└── CardFooter (optional)

Base style
├── bg white, radius-md, border-thin, shadow-xs
├── hover: border primary-300, shadow-md (for interactive cards)
└── padding: space-6
```

### Card rules

1. Cards represent entities (service, professional, location, article).
2. Interactive cards have a single accessible link covering the card.
3. Cards must work with long and short content (see `DESIGN_PRINCIPLES.md`).
4. No card nesting without a clear reason.

---

## 13.4 Inputs

```text
Structure
├── Label (text-sm, neutral-700, required marker *)
├── Description (text-sm, neutral-500)
├── Control
│   ├── height 44px, radius-md, border-default, bg white
│   ├── padding x-3
│   ├── focus: border primary-600 + focus ring
│   └── disabled: bg neutral-100, opacity 60%
└── Error (text-sm, error-500, with error icon)

States: idle / focus / filled / invalid / disabled / loading
```

### Input rules

1. Every input has a visible label (placeholder is never the label).
2. Errors appear below the field, linked with `aria-describedby`.
3. Preserve user input on validation failure.
4. Use `inputmode`/`type` correctly for phone, numeric, email fields.
5. Phone input: +91 prefix, 10-digit validation, digit grouping.

---

## 13.5 Select

Native `<select>` enhanced visually, or custom accessible select with:

* Keyboard navigation (arrows, type-ahead, enter, escape)
* ARIA combobox pattern
* Full focus management

Dropdown menus: `shadow-lg`, `radius-md`, max-height with scroll.

---

## 13.6 Checkbox / Radio

```text
Checkbox: 20px box, radius-sm, primary-600 checked state,
          visible focus ring, min touch target 44px total
Radio:    20px circle, primary-600 checked dot
```

Labels are clickable; use proper `<label for>` association.

---

## 13.7 Accordion (FAQ)

```text
Trigger
├── full-width button, py-4, text-base semibold neutral-800
├── chevron icon rotates on open
└── aria-expanded + aria-controls

Panel:  smooth expand/collapse (grid-template-rows technique),
        text neutral-700, pb-4
```

Only one panel open at a time in FAQ contexts.

---

## 13.8 Tabs

Used sparingly (e.g., diagnostics categories, service detail sections).

* Buttons styled as tabs, `aria-selected`, `role="tablist"` pattern
* Focus management and keyboard arrow support

---

## 13.9 Modal / Dialog

```text
Backdrop: rgba(18,18,16,0.5), blur 4px
Panel:    white, radius-xl, shadow-xl, max-width 560px, p-6/8
Behavior: focus trap, Escape close, scroll lock, aria-modal
Mobile:   full-width bottom sheet or full-height panel
```

Never implement ad-hoc modal behavior (see `COMPONENT_ARCHITECTURE.md`).

---

## 13.10 Drawer

Used for mobile navigation and some booking steps.

```text
Width: 320px (nav) or 100% (flows)
Behavior: slide-in with ease-emphasized, backdrop, focus trap
```

---

## 13.11 Toast

```text
Position: bottom center (mobile) / bottom right (desktop)
Duration: 4 seconds, auto-dismiss, dismiss button
Variants: success / error / info (semantic colors)
Max:      1 visible toast at a time
```

Toasts never carry critical medical information.

---

## 13.12 Alert

```text
Variants: info / success / warning / error
Structure: icon + title (optional) + message + optional action
Usage: contextual, inline, non-dismissable when critical
```

---

## 13.13 Badge

```text
Sizes: sm (text-xs, px-2, py-0.5), md (text-sm, px-3, py-1)
Variants: neutral / primary / accent / success / warning / error
Radius: radius-full
Usage: availability, categories, status, tags
```

---

## 13.14 Breadcrumb

```text
Structure: nav[aria-label="Breadcrumb"] > ol > li > Link
Separator: chevron icon 16px, neutral-400
Current page: aria-current="page", neutral-800
```

---

## 13.15 Skeleton

```text
Base: bg neutral-200, subtle pulse (only if reduced-motion allows)
Shape: matches final content (text lines, image boxes, avatars)
```

---

## 13.16 Progress / Step Indicator

```text
Booking & care finder flows
├── numbered steps 1..n
├── current: primary-600 filled circle, white number
├── completed: primary-600 with check icon
└── upcoming: neutral-300 circle, neutral-600 number
```

Labels under steps on desktop; icon-only on mobile.

---

## 13.17 Avatar

```text
Sizes: sm 32px, md 40px, lg 56px, xl 80px
Shape: radius-full
Fallback: initials on primary-100 with primary-800 text
```

---

## 13.18 Stat / Trust Item

```text
Icon or image + value (Lora, text-3xl/4xl) + label (text-sm neutral-600)
Used for: patients served, professionals, ratings, years
Only verified statistics may be displayed
```

---

# 14. Form Patterns

## 14.1 Enquiry Form (standard)

```text
Fields: Name, Phone, Location (select), Service (select),
        Preferred contact time (optional), Message (optional)
Actions: [Submit request] (primary, loading state)
```

## 14.2 Callback Request

```text
Fields: Name, Phone, Location, Reason
Action: [Request callback]
```

## 14.3 Booking Flow Fields

```text
Step 1  Service selection (cards or select)
Step 2  Location (city + area/pincode)
Step 3  Date (datepicker) + time slot (radio chips)
Step 4  Patient details (name, age, gender, optional notes)
Step 5  Contact (name, phone, email optional, patient relationship)
Step 6  Review (summary card + privacy note)
Step 7  Submit → confirmation
```

---

## 14.4 Form Validation Rules

1. Validate on blur and submit; show inline field errors.
2. Error text is specific: "Enter a valid 10-digit mobile number."
3. Never clear form data on failure.
4. Explain why sensitive fields are collected (see `DESIGN_PRINCIPLES.md`).
5. Submit button shows "Submitting your request..." with disabled state.

---

# 15. Header

```text
Desktop
├── Sticky top bar (white, border-bottom thin)
├── Row 1 (optional): contact, cities, links (text-sm)
├── Row 2: Logo | Services ▾ | Conditions ▾ | Locations | Why Us | Resources |
│          [Location selector] [Book care] (primary, sm)
└── Mega-menu on "Services": category columns + featured services

Mobile
├── Sticky header: Logo | search icon | call icon | [Book care] | menu icon
└── Drawer: navigation links, location selector, contact actions, CTA
```

---

# 16. Footer

```text
Structure (desktop: 4–5 columns)
├── Brand column: logo, tagline, contact, socials
├── Services column
├── Company column
├── Resources column
└── Locations column

Bottom bar: legal links + copyright
Mobile: stacked columns, accordion for lists if needed
```

Footer data is configuration-driven (see `COMPONENT_ARCHITECTURE.md`).

---

# 17. Navigation States

```text
Active:  primary-700, 2px underline (offset)
Hover:   neutral-800
Focus:   visible focus ring
```

---

# 18. Component Spacing Standards

```text
Section heading to content:     space-8
Card grid gap:                  space-6 (desktop), space-4 (mobile)
Card content padding:           space-6
Button icon spacing:            space-2
Form field vertical gap:        space-5
```

---

# 19. Empty / Error / Loading Standards

```text
EmptyState
├── icon (neutral-400, 40px)
├── title (text-lg semibold)
├── message (text-base neutral-600)
└── action (primary or secondary)

ErrorState
├── message that explains what happened
├── what to try next
└── [Try again] + [Contact support] secondary actions
```

Loading standards follow `COMPONENT_ARCHITECTURE.md` (skeletons preferred).

---

# 20. Accessibility Tokens

```text
Focus ring: 2px primary-600 + 3px primary-100 offset
Touch target: minimum 44x44px for interactive elements
Contrast: AA minimum (4.5:1 body)
Reduced motion: remove transform/animation via media query
Screen reader text: .sr-only utility for visually hidden labels
```

---

# 21. Implementation Notes

## 21.1 Tailwind Theme Mapping

The tokens above map 1:1 into `tailwind.config`:

```text
colors.primary.*   ← brand palette
colors.accent.*    ← accent palette
colors.neutral.*   ← neutral palette
colors.success/warning/error/info
fontFamily.display ← Lora
fontFamily.sans   ← Inter
spacing            ← 4px base
borderRadius       ← radius tokens
boxShadow          ← shadow tokens
```

## 21.2 CSS Variables

Expose the same tokens as CSS custom properties for non-Tailwind code.

---

# 22. Do Not

1. Do not introduce colors outside the palette.
2. Do not use pure black (#000) for text — use neutral-900.
3. Do not invent new spacing values.
4. Do not use random border radii.
5. Do not use glow shadows or heavy glassmorphism.
6. Do not use all-caps for sentences or body text.
7. Do not use emoji as interface icons.
8. Do not animate essential information.
9. Do not use images without alt text.
10. Do not use gradients as backgrounds for text containers without checking contrast.

---

# 23. Visual Quality Checklist

Before considering a page complete:

```text
[ ] Every color value comes from the token palette
[ ] Typography follows the type scale
[ ] One primary CTA per view
[ ] Focus rings visible on all interactive elements
[ ] Touch targets ≥ 44px
[ ] No horizontal scroll on mobile
[ ] Text contrast passes AA
[ ] Images have alt text and correct aspect ratios
[ ] Spacing uses the token system
[ ] Reduced-motion preference respected
[ ] Page works at all 4 breakpoints
```

---

# 24. Final Design System Rule

If a value is not defined in this document, it does not exist in the product.

Add new tokens here before using them anywhere.

END OF DESIGN SYSTEM
