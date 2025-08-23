# 3X Prep - Deployment Guide

## Overview
Premium test prep site built with React + TypeScript + Vite. Includes lead capture, location-based tutoring, and diagnostic test gating.

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS with premium design tokens
- **Components**: shadcn/ui + CVA for consistent design system
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod validation
- **SEO**: React Helmet Async

## Build & Deploy

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Environment Variables
Create `.env` file for production:
```env
# Optional: Webhook URL for lead capture (Zapier/CRM integration)
WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/your-webhook-id

# Optional: Support email for notifications
SUPPORT_EMAIL=support@3xprep.com
```

### Production Deployment

#### Option 1: Static Hosting (Vercel/Netlify)
```bash
npm run build
# Deploy /dist folder
```

#### Option 2: Self-Hosted with Nginx
```bash
# Build the app
npm run build

# Copy nginx config
sudo cp ops/nginx.conf /etc/nginx/sites-available/3xprep
sudo ln -s /etc/nginx/sites-available/3xprep /etc/nginx/sites-enabled/

# Update paths in nginx.conf to point to your /dist folder
# Restart nginx
sudo systemctl reload nginx
```

#### Option 3: Docker
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY ops/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### API Endpoints
- `POST /api/leads` - Lead capture (consultation + diagnostic)
- `GET /health` - Health check (returns JSON)

### SEO & Performance
- Sitemap: `/sitemap.xml` (auto-generated)
- Robots: `/robots.txt`
- Meta tags: Per-page with React Helmet
- Images: Lazy loading enabled
- Code splitting: Route-level with React Suspense

### Lead Capture Flow
1. User clicks "Book Free Consultation" or "Free Diagnostic Test"
2. Form modal opens with validation
3. Successful submit → Confirmation with "Call Now" CTA
4. For diagnostic: Reveals external test links only after form completion
5. Data sent to `/api/leads` and optional webhook

### Premium Features Enabled
- Skeleton loading states for all major components
- Premium background patterns (grid/dots/gradients)
- Scroll-based navbar effects (blur + shadow)
- Gold "highlighter" effects on key text
- Responsive design (320px → 1440px+)
- Accessibility (WCAG AA contrast, keyboard navigation)

### Monitoring & Analytics
- Health check: `GET /health`
- Console logging in development
- Lead data captured to JSON (dev) + webhook (prod)
- Performance: Lighthouse targets ≥90 for all metrics

### Customization
- **Colors**: Edit `src/index.css` and `tailwind.config.ts`
- **Content**: Update `src/data/site.ts`
- **Locations**: Add new cities to `LOCATIONS` array
- **Pricing**: Update `PACKAGES` object per test type
- **Backgrounds**: Tune opacity in CSS custom properties

### Troubleshooting
- **Blank page**: Check browser console for JS errors
- **API 404**: Ensure API routes are properly configured on your server
- **Slow loading**: Enable gzip compression in nginx
- **Form not submitting**: Check network tab for CORS issues

For support: support@3xprep.com