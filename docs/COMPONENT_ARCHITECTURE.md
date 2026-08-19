# Component Architecture

## 1. Purpose

This document defines the reusable frontend component architecture for the healthcare platform.

The objective is to create a scalable component system where:

```text
Design System
      ↓
Components
      ↓
Page Templates
      ↓
Pages
      ↓
User Journeys
```

Components must be:

* Reusable
* Accessible
* Responsive
* Data-driven
* Composable
* Contract-consistent (follows the data shapes defined in `API_SPECIFICATION.md`)
* Maintainable
* Consistent with `DESIGN_SYSTEM.md`

---

# 2. Core Architecture Principle

Do not build pages as large monolithic components.

Bad:

```text
HomePage.jsx
├── 1000 lines
├── Hero
├── Services
├── Testimonials
├── FAQ
├── Footer
└── Everything else
```

Preferred:

```text
HomePage
├── Header
├── HeroSection
├── TrustStats
├── ServiceGrid
├── CareCategories
├── CareFinderCTA
├── HowItWorks
├── ProfessionalSection
├── Testimonials
├── LocationGrid
├── ResourceGrid
├── FAQSection
├── FinalCTA
└── Footer
```

---

# 3. Component Hierarchy

The frontend should conceptually follow:

```text
Primitives
    ↓
UI Components
    ↓
Domain Components
    ↓
Sections
    ↓
Page Templates
    ↓
Pages
```

---

# 4. Component Layers

## Layer 1 — Primitives

Smallest reusable UI elements.

Examples:

```text id="f6s2m9"
Button
Icon
Text
Heading
Link
Badge
Divider
Container
Stack
Grid
Spinner
Skeleton
```

These components must have minimal domain knowledge.

---

# 5. Layer 2 — UI Components

Generic interface components.

Examples:

```text id="2x7q4m"
Card
Modal
Dialog
Drawer
Accordion
Tabs
Dropdown
Tooltip
Select
Input
Textarea
Checkbox
Radio
DatePicker
Pagination
Breadcrumb
Toast
Alert
```

These components should not know anything about healthcare services.

---

# 6. Layer 3 — Domain Components

Healthcare-specific reusable components.

Examples:

```text id="8m3r7q"
ServiceCard
ServiceBadge
ConditionCard
ProfessionalCard
LocationCard
EquipmentCard
TestimonialCard
ArticleCard
CareCategoryCard
BookingSummary
AvailabilityBadge
CareTypeBadge
```

These components understand the application's domain.

---

# 7. Layer 4 — Sections

Large reusable page sections.

Examples:

```text id="5q9x2m"
HeroSection
TrustSection
ServiceGridSection
ProfessionalSection
HowItWorksSection
TestimonialSection
LocationSection
FAQSection
RelatedServicesSection
FinalCTASection
```

Sections combine domain and UI components.

---

# 8. Layer 5 — Page Templates

Templates define complete page structures.

Examples:

```text id="7v4m1q"
ServicePageTemplate
ConditionPageTemplate
LocationPageTemplate
ProfessionalPageTemplate
ArticlePageTemplate
ProductPageTemplate
DiagnosticPageTemplate
```

Templates receive data and render the appropriate structure.

---

# 9. Layer 6 — Pages

Pages connect:

```text id="3x8q6m"
Route
+
Data
+
Template
```

Example:

```text id="9m2r7v"
/services/physiotherapy-at-home
        ↓
Service data
        ↓
ServicePageTemplate
```

---

# 10. Recommended Folder Structure

The exact framework may vary, but the architecture should conceptually follow:

```text id="k4v8m2"
src/
│
├── app/
│   ├── routes/
│   └── ...
│
├── components/
│   ├── primitives/
│   ├── ui/
│   ├── domain/
│   ├── sections/
│   └── templates/
│
├── features/
│   ├── booking/
│   ├── enquiry/
│   ├── search/
│   ├── care-finder/
│   ├── authentication/
│   └── patient-portal/
│
├── lib/
│
├── hooks/
│
├── services/
│
├── types/
│
└── config/
```

Feature-specific components should live with their feature when appropriate.

---

# 11. Component Naming

Use descriptive names.

Good:

```text id="0q7m5x"
ServiceCard
BookingForm
LocationSelector
ProfessionalCard
CareFinderStep
```

Bad:

```text id="8v2r4n"
Card1
Box
Thing
CustomCard
Section2
NewCard
```

Component names must describe their purpose.

---

# 12. Avoid Component Duplication

Before creating a component:

1. Search the component library.
2. Determine whether an existing component can support the requirement.
3. Add a variant if necessary.
4. Only create a new component if the semantic purpose is genuinely different.

Do not create:

```text id="4m8q2v"
ServiceCard
ServiceCard2
ServiceCardNew
ServiceCardPremium
ServiceCardLarge
```

Prefer:

```text id="6x3r9m"
ServiceCard
variant="default"
variant="featured"
variant="compact"
```

Only create variants when they represent meaningful design differences.

---

# 13. Button Architecture

Buttons must use the shared Button component.

Supported conceptual variants:

```text id="9q5m2v"
Primary
Secondary
Tertiary
Destructive
Link
```

Buttons must support:

```text id="2x7r8m"
Default
Hover
Focus
Active
Disabled
Loading
```

---

# 14. Button Rules

Primary CTA:

```text id="5v1q8m"
<Button variant="primary">
  Book Care
</Button>
```

Loading:

```text id="8m4r2x"
<Button loading>
  Submitting...
</Button>
```

Never create a custom button purely for one page.

---

# 15. Link vs Button

Use a link when navigation occurs.

```text id="7q3m9x"
<Link href="/services/physiotherapy-at-home">
  Learn more
</Link>
```

Use a button when an action occurs.

```text id="4v8r1m"
<Button>
  Open booking
</Button>
```

Do not use clickable `<div>` elements as substitutes.

---

# 16. Card Architecture

Cards should represent entities.

Supported conceptual card types:

```text id="3m7q9x"
ServiceCard
ConditionCard
LocationCard
ProfessionalCard
ArticleCard
EquipmentCard
TestimonialCard
```

Each card must have:

* Clear hierarchy
* Clear interaction
* Accessible link/action
* Responsive behavior

---

# 17. ServiceCard

Recommended structure:

```text id="5x2r8m"
Icon / Image
Service Name
Short Description
Optional metadata
CTA / Link
```

Example data:

```text id="9q4m7v"
{
  title,
  description,
  slug,
  image,
  category,
  availability
}
```

The card should not contain business logic.

---

# 18. ProfessionalCard

Fields may include:

```text id="2m8q4x"
Photo
Name
Role
Specialty
Qualification
Location
Experience
CTA
```

Only display verified data.

---

# 19. LocationCard

Fields:

```text id="7v3r9m"
City
Region
Availability
Number of services
Image
CTA
```

Avoid displaying unsupported availability information.

---

# 20. ArticleCard

Fields:

```text id="4q8m2x"
Title
Excerpt
Image
Category
Author
Published date
Reading time
URL
```

The card should link to the canonical article page.

---

# 21. Hero Architecture

Use a reusable Hero component.

Possible variants:

```text id="6m9q3v"
HomepageHero
ServiceHero
ConditionHero
LocationHero
ArticleHero
```

Prefer one base component with controlled variants over completely independent implementations.

---

# 22. Hero Requirements

Hero should support:

```text id="3r7m8q"
Eyebrow
Heading
Description
Primary CTA
Secondary CTA
Image
Trust indicator
Background
```

Not every hero needs every field.

---

# 23. Section Architecture

Every major section should use a common structure where appropriate:

```text id="8q2m5v"
Section
├── Eyebrow
├── Heading
├── Description
├── Content
└── Optional CTA
```

This creates consistency across the platform.

---

# 24. Section Heading Component

Use a reusable section heading.

```text id="5m7r2x"
<SectionHeading
  eyebrow="Home Healthcare"
  title="Care designed around you"
  description="..."
/>
```

This avoids inconsistent heading structures.

---

# 25. Container Architecture

All major page content must use a shared container system.

Conceptual API:

```text id="7q4m9x"
<Container size="default">
  ...
</Container>
```

Possible sizes:

```text id="3x8r2m"
sm
md
lg
xl
full
```

Exact values must come from `DESIGN_SYSTEM.md`.

Do not define arbitrary max-widths throughout individual pages.

---

# 26. Grid Architecture

Use shared responsive grid primitives.

Example:

```text id="9m2q7v"
<Grid
  columns={{
    mobile: 1,
    tablet: 2,
    desktop: 3
  }}
>
```

The implementation can vary by framework.

The principle is that layout behavior must be centralized.

---

# 27. Form Architecture

Forms are a major part of the application.

Create reusable:

```text id="4v7m2q"
Form
FormField
FormLabel
FormDescription
FormError
Input
PhoneInput
Select
Textarea
Checkbox
RadioGroup
DatePicker
TimePicker
SubmitButton
```

---

# 28. Form Rules

Every form field must support:

```text id="8q3m9x"
Label
Required state
Description
Input
Validation
Error
Disabled
Loading
```

Errors must be accessible to screen readers.

---

# 29. Booking Components

Booking is a domain feature.

Create reusable components such as:

```text id="2m7r5v"
BookingFlow
BookingStep
ServiceSelector
LocationSelector
DateSelector
TimeSelector
PatientDetails
ContactDetails
BookingReview
BookingConfirmation
```

---

# 30. Booking Flow Architecture

Conceptually:

```text id="6q9x3m"
BookingFlow
│
├── StepIndicator
│
├── ServiceSelection
│
├── LocationSelection
│
├── ScheduleSelection
│
├── PatientDetails
│
├── ContactDetails
│
├── Review
│
└── Confirmation
```

The flow should support different booking types without duplicating the entire system.

---

# 31. Enquiry Components

Reusable components:

```text id="7m4r8q"
EnquiryForm
CallbackForm
ContactForm
LeadForm
```

These should use the shared form system.

---

# 32. Care Finder Architecture

The care finder should be implemented as a feature rather than a collection of page-specific components.

Structure:

```text id="3q8m5v"
CareFinder
│
├── ProgressIndicator
├── CareFinderStep
├── AnswerOption
├── RecommendationCard
└── CareFinderSummary
```

---

# 33. Search Architecture

Components:

```text id="9v2m6q"
SearchInput
SearchResults
SearchResultCard
SearchFilters
SearchSuggestions
SearchEmptyState
SearchError
```

Search results must follow consistent shapes defined in `API_SPECIFICATION.md`.

Example categories:

```text id="4x7r8m"
service
condition
location
professional
article
faq
equipment
```

---

# 34. Navigation Architecture

Components:

```text id="6m3q9v"
Header
DesktopNavigation
MobileNavigation
MegaMenu
LocationSelector
Breadcrumbs
Footer
```

Navigation components should not contain page-specific business logic.

---

# 35. Header Architecture

Conceptual structure:

```text id="2q8m4x"
Header
├── Logo
├── DesktopNavigation
├── LocationSelector
├── PrimaryCTA
└── MobileMenuTrigger
```

The header must remain accessible at all breakpoints.

---

# 36. Footer Architecture

Conceptual structure:

```text id="7r3m9q"
Footer
├── Brand
├── ServiceLinks
├── CompanyLinks
├── ResourceLinks
├── LocationLinks
├── PartnerLinks
├── Contact
└── LegalLinks
```

Footer data should be configuration-driven.

---

# 37. Modal Architecture

Use a shared modal/dialog system.

Required behavior:

* Focus trap
* Escape support
* Correct ARIA attributes
* Scroll locking
* Mobile adaptation
* Screen reader support

Do not implement ad-hoc modal logic.

---

# 38. Drawer Architecture

Mobile navigation and some complex flows may use drawers.

Requirements:

* Accessible focus management
* Keyboard support
* Backdrop
* Close control
* Scroll behavior

---

# 39. Toast Architecture

Use toasts for non-critical feedback.

Examples:

```text id="8m4q2v"
Saved
Copied
Updated
Request submitted
```

Do not use toasts for critical medical information.

Important errors must remain visible in context.

---

# 40. Alert Architecture

Use alerts for meaningful state information.

Variants:

```text id="5q9m3x"
Information
Success
Warning
Error
```

Do not use red alerts merely for visual emphasis.

---

# 41. Loading Architecture

Reusable:

```text id="3v7r8m"
Skeleton
Spinner
LoadingButton
LoadingOverlay
ProgressIndicator
```

Prefer skeletons when the layout is known.

---

# 42. Empty State Architecture

Reusable:

```text id="6m2q9v"
EmptyState
NoSearchResults
NoAvailability
NoBookings
NoArticles
```

Each empty state should explain:

* What happened
* What the user can do next

---

# 43. Error State Architecture

Reusable:

```text id="9q4m7x"
ErrorState
NetworkError
ServerError
ValidationError
UnavailableState
```

Error messages should be actionable.

---

# 44. Skeleton Architecture

Skeletons must resemble the final layout.

Do not create a single generic full-page spinner for everything.

Use:

```text id="4m8r2q"
ServiceCardSkeleton
ProfessionalCardSkeleton
ArticleSkeleton
PageSkeleton
```

where appropriate.

---

# 45. Data Fetching

Components should not independently implement arbitrary API requests.

Prefer:

```text id="7x3m9q"
Page / Feature
      ↓
Service / Data Layer
      ↓
API
```

This keeps networking logic separate from presentation.

---

# 46. Component Data Flow

Preferred:

```text id="2q8v4m"
Server / API
      ↓
Data Layer
      ↓
Page
      ↓
Template
      ↓
Section
      ↓
Component
```

Components should receive data through props or appropriate application state.

---

# 47. Avoid Hidden Business Logic

Do not put business rules inside visual components.

Bad:

```text id="6m9r2x"
<ServiceCard>
  if city === "Pune" ...
  if service === "nurse" ...
  if userType === ...
</ServiceCard>
```

Business rules belong in:

* Services
* Domain logic
* Backend
* Feature modules

depending on the rule.

---

# 48. Component State

Interactive components must explicitly support relevant states.

Example:

```text id="3q7m8v"
Button:
default
hover
focus
disabled
loading

Form:
idle
editing
validating
submitting
success
error

Booking:
initial
loading
available
unavailable
submitting
confirmed
failed
```

---

# 49. Accessibility Requirements

Every reusable component must define accessibility behavior.

At minimum:

* Semantic HTML
* Keyboard support
* Focus behavior
* Screen-reader behavior
* ARIA only where necessary
* Visible focus states
* Sufficient touch targets

Accessibility must be implemented at the component level.

---

# 50. Responsive Requirements

Components must be designed for:

```text id="9m4q7x"
Mobile
Tablet
Desktop
Large desktop
```

A component must not assume desktop dimensions.

---

# 51. Component API Design

Component APIs should be:

* Explicit
* Small
* Predictable
* Documented (JSDoc where helpful)

Avoid huge prop interfaces containing dozens of unrelated options.

Bad:

```text id="7x2m8q"
<Card
  showImage
  showIcon
  showBadge
  showButton
  compact
  large
  blue
  green
  ...
/>
```

Prefer semantic variants.

---

# 52. Variant Architecture

Use variants only for meaningful differences.

Example:

```text id="3m8q5v"
<ServiceCard variant="default" />
<ServiceCard variant="featured" />
<ServiceCard variant="compact" />
```

Avoid arbitrary styling props that allow every page to visually diverge.

---

# 53. Composition Over Configuration

When components become too configurable, prefer composition.

Instead of:

```text id="6q4m9x"
<Card
  showHeader
  showFooter
  showIcon
  showImage
  ...
/>
```

prefer:

```text id="2m7r8q"
<Card>
  <CardHeader />
  <CardContent />
  <CardFooter />
</Card>
```

when the underlying design actually requires flexible composition.

---

# 54. Domain Separation

Healthcare-specific components must remain separate from generic UI components.

Good:

```text id="8v3q7m"
ui/
  Card
  Button
  Modal

domain/
  ServiceCard
  ProfessionalCard
  BookingSummary
```

This prevents healthcare-specific concepts from contaminating the generic design system.

---

# 55. Feature Architecture

Complex functionality should be organized by feature.

Example:

```text id="4q9m2x"
features/
│
├── booking/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   └── validation/
│
├── care-finder/
│
├── search/
│
├── enquiry/
│
└── authentication/
```

---

# 56. Component Testing

Important reusable components must have tests.

Prioritize:

```text id="7m3q8v"
Forms
Buttons
Navigation
Booking
Search
Care Finder
Modals
Accessibility-critical components
```

Test:

* Rendering
* Interaction
* Validation
* Keyboard behavior
* Error states
* Loading states

---

# 57. Storybook / Component Documentation

If the project uses Storybook or another component documentation system, document important reusable components.

Each component should demonstrate:

```text id="5q8m2x"
Default
Loading
Disabled
Error
Empty
Mobile
Long content
```

This makes visual regression and development significantly easier.

---

# 58. Component Performance

Avoid unnecessary re-renders.

Do not optimize prematurely, but pay attention to:

* Large lists
* Search results
* Booking flows
* Interactive forms
* Patient portal
* Data-heavy dashboards

Use appropriate framework-specific optimization patterns.

---

# 59. Server vs Client Components

If the chosen framework supports server/client component boundaries:

Prefer server-rendered components for:

* Static content
* SEO content
* Service pages
* Article pages
* Location pages
* Condition pages

Use client-side components when interaction requires them:

* Booking
* Search interaction
* Care Finder
* Forms
* Date/time selection
* Account dashboard

Do not make the entire application client-rendered unnecessarily.

---

# 60. Component Security

Never trust client-side component state for authorization.

For example:

```text id="8m4q1v"
if user.role === "admin"
```

in frontend code is not sufficient security.

Authorization must be enforced server-side.

---

# 61. Component Analytics

Components may expose semantic events.

Example:

```text id="3q7m9x"
ServiceCard
→ service_clicked

BookingCTA
→ booking_started

CareFinder
→ care_finder_started
```

Analytics should not contain sensitive medical information.

---

# 62. Component Naming Rules

Use:

```text id="6m2r8q"
PascalCase
```

Examples:

```text id="7q4m9v"
BookingForm
ServiceCard
LocationSelector
ProfessionalProfile
```

Hooks/functions should follow the conventions of the chosen framework.

---

# 63. Component File Rules

Avoid files that contain multiple unrelated components.

Prefer:

```text id="4v8m2q"
ServiceCard/
├── ServiceCard.jsx
├── ServiceCard.test.jsx
└── index.js
```

for sufficiently complex components.

Small components may remain single files.

---

# 64. Component Dependency Rules

Dependency direction should generally be:

```text id="9m3q7v"
Primitives
   ↓
UI
   ↓
Domain
   ↓
Sections
   ↓
Templates
   ↓
Pages
```

Lower-level components must not import higher-level page components.

For example:

```text id="5q8m1x"
Button
```

must never import:

```text id="3m7r9q"
BookingPage
```

---

# 65. No Circular Dependencies

Avoid:

```text id="7x4m9q"
ServiceCard
→ ServiceSection
→ ServiceCard
```

Components should have clear dependency direction.

---

# 66. Design System Integration

All components must use the tokens and primitives defined in:

`DESIGN_SYSTEM.md`

Do not introduce:

* Random colors
* Random font sizes
* Random spacing
* Random radii
* Random shadows

inside individual components.

---

# 67. Content Integration

Components should accept structured content.

Example:

```text id="2m8q5v"
<ServiceCard
  service={service}
/>
```

rather than:

```text id="6q4r9m"
<ServiceCard
  title="Physiotherapy"
  description="..."
  ...
/>
```

when the service already exists as a domain entity.

---

# 68. API Integration

Components should not directly call backend APIs unless the architecture explicitly requires it.

Prefer:

```text id="8v3m7q"
Component
↓
Feature hook / action
↓
Service layer
↓
API
```

---

# 69. Final Component Rule

Before creating a new component, the AI must ask:

```text id="4q7m9x"
Does this already exist?
        ↓
Can an existing component support it?
        ↓
Can a semantic variant solve it?
        ↓
Is the difference genuinely meaningful?
        ↓
If yes → create new component
```

The goal is not to have the largest component library.

The goal is to have the **smallest coherent component library capable of expressing the entire product**.

---

# 70. Final Architecture

The finished frontend should conceptually look like:

```text id="7m2q8v"
DESIGN SYSTEM
      ↓
PRIMITIVES
      ↓
UI COMPONENTS
      ↓
DOMAIN COMPONENTS
      ↓
SECTIONS
      ↓
PAGE TEMPLATES
      ↓
FEATURES
      ↓
PAGES
      ↓
USER JOURNEYS
      ↓
BACKEND / DATA
```

Every layer should have a clear responsibility.

If a piece of code does not clearly belong to a layer, stop and determine where it belongs before implementing it.
