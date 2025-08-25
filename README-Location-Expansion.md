# 3X Prep Location & Exam-Based Expansion

## Overview

This implementation adds fully dynamic, SEO-optimized, location-specific and exam-specific tutoring pages to expand 3X Prep's reach. The expansion includes two new page types with reusable components and dynamic content injection.

## New Pages

### 1. Location Landing Page
**Route:** `/mcat-lsat-sat-prep-tutoring-{location}`
- **Examples:** 
  - `/mcat-lsat-sat-prep-tutoring-san-diego`
  - `/mcat-lsat-sat-prep-tutoring-orange-county`

**Features:**
- Hero section with location-specific content
- Test cards grid (LSAT, MCAT, SAT) with navigation to exam-specific pages
- Tutoring packages section with pricing
- Social proof and CTA sections
- Full SEO optimization with dynamic meta tags

### 2. Exam + Location Detail Page
**Route:** `/{exam}-prep-tutoring-{location}`
- **Examples:**
  - `/lsat-prep-tutoring-san-diego`
  - `/mcat-prep-tutoring-riverside`
  - `/sat-prep-tutoring-los-angeles`

**Features:**
- Exam and location-specific hero section
- "How It Works" 4-step process
- "Why 3X Prep?" benefits section
- Parent testimonial section
- Dynamic FAQ generation based on exam and location
- Tutoring packages with exam-specific pricing
- Full SEO optimization

## New Components

### `TestCardsGrid.tsx`
Displays three test cards (LSAT, MCAT, SAT) with:
- Test-specific icons and descriptions
- Location-aware content
- Navigation to exam-specific pages
- Hover effects and animations

**Props:**
- `location: string` - The city name for content personalization

### `TutoringPackages.tsx`
Reusable pricing component featuring:
- Four package tiers (5, 10, 20 hours, Custom)
- "Most Popular" badge on 10-hour package
- Payment plan options
- Study plan calculator CTA
- Booking integration

**Props:**
- `onBookingClick?: () => void` - Callback for booking actions
- `test?: TestType` - Optional test type for future customization
- `city?: string` - Optional city for content personalization

### `FAQGenerator.tsx`
Dynamic FAQ component that generates relevant questions based on:
- Base FAQs for all locations
- Exam-specific FAQs (LSAT, MCAT, SAT)
- Location-aware content injection
- Expandable accordion interface

**Props:**
- `exam?: TestType` - Test type for exam-specific FAQs
- `location?: string` - City name for location-aware content

## Supported Locations

Current locations (expandable):
1. **San Diego** - `/mcat-lsat-sat-prep-tutoring-san-diego`
2. **Riverside** - `/mcat-lsat-sat-prep-tutoring-riverside`  
3. **Orange County** - `/mcat-lsat-sat-prep-tutoring-orange-county`
4. **Los Angeles** - `/mcat-lsat-sat-prep-tutoring-los-angeles`

## Supported Exams

All three standardized tests:
1. **LSAT** - Law School Admission Test
2. **MCAT** - Medical College Admission Test  
3. **SAT** - Scholastic Assessment Test

## SEO Features

### Dynamic Meta Tags
- Location and exam-specific titles
- Optimized meta descriptions
- Open Graph properties
- Canonical URLs

### Content Optimization
- H1 tags with location and exam keywords
- Semantic HTML structure
- Image alt attributes with relevant keywords
- Internal linking between location and exam pages

### Performance
- Lazy loading for images
- Skeleton loading states
- Responsive design
- Clean, crawlable URLs

## How to Add New Locations

1. **Update `src/data/site.ts`:**
```typescript
export const LOCATIONS = [
  // ... existing locations
  {
    id: 5,
    city: "New City Name",
    slug: "mcat-lsat-sat-prep-tutoring-new-city-name",
    phone: "+1-XXX-XXX-XXXX",
    seo: {
      title: "3X Prep of New City Name — SAT · LSAT · MCAT Tutoring",
      description: "Elite 1:1 tutoring in New City Name. Book a free consultation or take a free diagnostic test."
    }
  }
];
```

2. **The pages will automatically work** - no additional coding required!

## How to Add New Exams

1. **Update `src/data/site.ts`:**
```typescript
export const TESTS = ["SAT", "LSAT", "MCAT", "NEW_EXAM"] as const;
```

2. **Update `TestCardsGrid.tsx`:**
```typescript
const testData: Record<TestType, {...}> = {
  // ... existing tests
  NEW_EXAM: {
    title: "New Exam Prep",
    description: "Description of the new exam prep...",
    icon: "📚"
  }
};
```

3. **Update `FAQGenerator.tsx`:**
```typescript
const examSpecificFAQs = {
  // ... existing exams
  NEW_EXAM: [
    {
      question: "Exam-specific question?",
      answer: "Exam-specific answer..."
    }
  ]
};
```

## Modifying Content

### Per-City Customization
Content is automatically personalized using the `{location}` variable throughout the pages. To customize specific cities further:

1. Create conditional content in components based on `city` prop
2. Add city-specific data to `LOCATIONS` array in `site.ts`

### Per-Exam Customization  
Exam-specific content is handled in the `examData` object in `ExamLocationPage.tsx`. To modify:

1. Update the `examData` object with new content
2. Modify exam-specific FAQs in `FAQGenerator.tsx`
3. Add exam-specific testimonials or features as needed

### FAQ Management
FAQs are dynamically generated but can be customized:

1. **Base FAQs:** Apply to all locations and exams
2. **Exam-specific FAQs:** Unique to each test type
3. **Location FAQs:** Can be added by extending the `generateFAQs` function

## Technical Implementation

### Routing Structure
```
/ (home)
├── /tutoring-locations (location hub)
├── /mcat-lsat-sat-prep-tutoring-{city} (location landing)
└── /{exam}-prep-tutoring-{city} (exam + location detail)
```

### Component Hierarchy
```
LocationLandingPage
├── TestCardsGrid
├── TutoringPackages
└── LeadDialog

ExamLocationPage  
├── TutoringPackages
├── FAQGenerator
└── LeadDialog
```

### Data Flow
1. URL parameters are parsed to extract `exam` and `city`
2. Location data is matched from `LOCATIONS` array
3. Exam data is retrieved from predefined `examData`
4. Content is dynamically injected throughout components
5. SEO meta tags are generated based on parsed data

## Future Enhancements

Potential expansions include:
- State-level landing pages
- Subject-specific test prep (e.g., Math SAT, Biology MCAT)
- Tutor profile pages per location
- Local event and workshop pages
- Multi-language support for locations

## Performance Considerations

- All images use lazy loading
- Skeleton components provide immediate visual feedback
- Components are lightweight and focused
- No unnecessary re-renders or heavy computations
- SEO-friendly static generation ready

This implementation provides a scalable foundation for geographic and exam-based expansion while maintaining consistent user experience and SEO best practices.
