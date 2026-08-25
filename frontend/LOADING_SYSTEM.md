# Loading System Documentation

## Overview

A comprehensive loading system for Svasth Homecare that provides visual feedback during async operations, route transitions, and data fetching.

## Components Created

### 1. Core Loaders

#### PageLoader
- **Location:** `components/loaders/PageLoader.jsx`
- **Purpose:** Full-page overlay for route transitions
- **When to use:** Automatic on route changes via `RouteLoadingIndicator`
- **Features:**
  - Animated teal ring + orange pulse
  - Loading text with bouncing dots
  - Blocks interaction during loading

#### SectionLoader
- **Location:** `components/loaders/SectionLoader.jsx`
- **Purpose:** Inline loading for page sections
- **When to use:** Async content within a page
- **Props:**
  - `message` (string) - Optional loading message
  - `size` (sm|md|lg) - Spinner size
- **Usage:**
```jsx
import { SectionLoader } from "@/components/loaders";

<SectionLoader message="Loading services..." size="md" />
```

#### ButtonLoader
- **Location:** `components/loaders/ButtonLoader.jsx`
- **Purpose:** Small spinner for button loading states
- **When to use:** Inside buttons during form submission
- **Props:**
  - `size` (sm|md|lg) - Spinner size
- **Usage:**
```jsx
import { ButtonLoader } from "@/components/loaders";

<Button loading={isLoading}>
  Submit
</Button>
```

### 2. Skeleton Components

#### SkeletonCard
- **Location:** `components/loaders/SkeletonCard.jsx`
- **Purpose:** Skeleton for service cards
- **Variants:**
  - `default` - Standard service card
  - `procedure` - Compact procedure card
  - `vertical` - Vertical card layout
- **Usage:**
```jsx
import { SkeletonCard } from "@/components/loaders";

<SkeletonCard variant="default" />
```

#### SkeletonSection
- **Location:** `components/loaders/SkeletonSection.jsx`
- **Purpose:** Full section with grid of skeleton cards
- **Props:**
  - `columns` (3|4) - Number of columns
  - `variant` (default|procedure|vertical)
  - `count` (number) - Number of cards
- **Usage:**
```jsx
import { SkeletonSection } from "@/components/loaders";

<SkeletonSection columns={3} variant="default" count={6} />
```

### 3. Providers

#### LoadingProvider
- **Location:** `components/providers/LoadingProvider.jsx`
- **Purpose:** Global loading state management
- **Usage:**
```jsx
import { LoadingProvider, useLoading } from "@/components/providers";

// In a component:
const { isLoading, setLoading } = useLoading();

// Trigger loading:
setLoading(true);
// ... async operation
setLoading(false);
```

#### RouteLoadingIndicator
- **Location:** `components/providers/RouteLoadingIndicator.jsx`
- **Purpose:** Automatic loading on route changes
- **Implementation:** Already integrated in `app/layout.jsx`

## Implementation Status

### ✅ Completed

1. **Core Components Created:**
   - PageLoader with branded animation
   - SectionLoader for inline loading
   - ButtonLoader for button states
   - SkeletonCard with 3 variants
   - SkeletonSection with grid layouts

2. **Providers Implemented:**
   - LoadingProvider with context
   - RouteLoadingIndicator for navigation
   - Integrated into root layout

3. **Route-Specific Loading States:**
   - Homepage (`app/loading.jsx`)
   - Long-term care hub (`app/long-term-care/loading.jsx`)
   - Home visit hub (`app/home-visit/loading.jsx`)
   - Service detail pages (`app/long-term-care/[slug]/loading.jsx`)
   - Home visit services (`app/home-visit/[slug]/loading.jsx`)
   - Procedures (`app/procedures/[slug]/loading.jsx`)

4. **Button Component Enhanced:**
   - Added `loading` prop
   - Integrated ButtonLoader
   - Disabled state during loading

## How It Works

### Automatic Route Loading

When a user navigates to a new page:

1. `RouteLoadingIndicator` detects URL change
2. Shows `PageLoader` overlay
3. New page loads in background
4. Route-specific `loading.jsx` shows skeleton UI
5. Once loaded, skeleton is replaced with real content
6. `PageLoader` overlay fades out

### Manual Loading States

For forms, buttons, or async operations:

```jsx
"use client";

import { useState } from "react";
import { useLoading } from "@/components/providers";
import Button from "@/components/Button";

export default function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitEnquiry(data);
      // Success
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <Button type="submit" loading={isSubmitting}>
        Submit Enquiry
      </Button>
    </form>
  );
}
```

## Design Tokens

All loaders use the Svasth design system colors:

- **Primary (Teal):** `#00979e` - Main spinner color
- **Accent (Orange):** `#f25922` - Pulse/highlight color
- **Neutral:** Gray scale for skeleton backgrounds

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Respects `prefers-reduced-motion` for animations

## Performance Considerations

1. **Skeleton UI:** Prevents layout shift, improves perceived performance
2. **Lazy Loading:** Only shows when needed (>100ms delay)
3. **No Extra Bundles:** Uses built-in CSS animations
4. **Server Components:** Most loaders are client-side only when needed

## Next Steps (Future Enhancements)

### When Backend API is Ready:

1. **Add SectionLoader to async components:**
```jsx
import { SectionLoader } from "@/components/loaders";

export default async function ServicesSection() {
  const services = await getServices();
  
  if (!services) {
    return <SectionLoader message="Loading services..." />;
  }
  
  return <ServiceGrid services={services} />;
}
```

2. **Add to form submissions:**
   - Enquiry form
   - Booking flow
   - Callback requests

3. **Add to search:**
   - Search input with loading state
   - Results with skeleton

4. **Add to infinite scroll/pagination:**
   - "Load More" button with loader
   - Skeleton cards while fetching

## Testing

Test the loading system:

1. **Route transitions:** Navigate between pages
2. **Slow network:** Chrome DevTools → Network → Slow 3G
3. **Button states:** Click submit buttons
4. **Skeleton UI:** Check that layouts don't shift

## Troubleshooting

### Loading state stuck?

Check that you're calling `setLoading(false)` in:
- Success callback
- Error callback  
- `finally` block

### Skeleton not showing?

Ensure the `loading.jsx` file is in the correct route folder:
```
app/
  [route]/
    loading.jsx  ← Must be here
    page.jsx
```

### Button loader not showing?

Make sure you're using the updated Button component:
```jsx
<Button loading={isSubmitting}>Submit</Button>
```

## Summary

The loading system is now fully implemented across the Svasth Homecare site, providing:

✅ Smooth route transitions with branded loader  
✅ Skeleton UI preventing layout shift  
✅ Button loading states for forms  
✅ Inline loaders for async content  
✅ Global loading state management  
✅ Consistent design system integration  

Users will never see a blank screen or feel stuck during navigation or async operations.
