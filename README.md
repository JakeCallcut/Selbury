# Selbury - Compliance Management for UK SMEs

A modern, production-ready promo website for Selbury, a UK-focused compliance SaaS platform for small businesses. Built with Next.js, Tailwind CSS, and optimized for performance and accessibility.

## 🎨 Brand & Design System

### Brand Colors
- **Primary Accent**: `#31782B` - Used for buttons, links, highlights, and key icons
- **Primary Variants**: 
  - `50`: `#f0f9ef`
  - `100`: `#dcf2d8`
  - `700`: `#296427` (hover states)
- **Neutrals**: White backgrounds, cool greys for text and dividers

### Typography
- **Serif**: Source Serif 4, Georgia, Libre Baskerville (headlines, pull quotes)
- **Sans**: Inter, Work Sans, SF Pro (UI, body text, navigation)
- **Pairing**: H1/H2 in serif, H3/UI/body in sans serif

### Design Principles
- Modern SaaS aesthetic with legal trustworthiness
- Clean white backgrounds with subtle separators
- Rounded corners (lg–2xl), soft shadows on cards
- High contrast for accessibility
- Restrained motion and animations

## 🏗️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript for type safety
- **Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Content**: MDX for legal pages and resources
- **Analytics**: Plausible (privacy-focused)
- **Forms**: API routes with validation (ready for Tally/Formspree integration)

## 📁 Project Structure

```
/app
  /(marketing)/          # Marketing pages
    page.tsx             # Home page
    features/page.tsx    # Features deep-dive
    resources/page.tsx   # Templates & guides
    pricing/page.tsx     # Pricing tiers
    contact/page.tsx     # Contact & demo form
    privacy/page.tsx     # Privacy policy
    terms/page.tsx       # Terms of service
    cookies/page.tsx     # Cookie policy
  /api/forms/submit/     # Form submission API
  layout.tsx             # Root layout with SEO
  sitemap.ts             # Dynamic sitemap
  globals.css            # Tailwind & custom styles

/components
  /ui/                   # Reusable UI components
    button.tsx
    card.tsx
    container.tsx
    logo.tsx
  Header.tsx             # Main navigation
  Footer.tsx             # Site footer
  Hero.tsx               # Homepage hero
  FeatureCards.tsx       # Feature grid
  HowItWorks.tsx         # Process steps
  WhySelbury.tsx         # Benefits section
  Testimonials.tsx       # Customer testimonials
  CTA.tsx                # Call-to-action sections

/content                 # MDX content files
  privacy.mdx
  terms.mdx
  cookies.mdx

/public                  # Static assets
  robots.txt
  site.webmanifest
  [favicons and OG images]
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open in browser:**
```
http://localhost:3000
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📝 Content Management

### Editing Copy
- **Homepage sections**: Edit components in `/components/`
- **Page content**: Edit page components in `/app/(marketing)/`
- **Legal pages**: Edit MDX files in `/content/`

### Adding New Resources
1. Add resource data to `/app/(marketing)/resources/page.tsx`
2. Update the `resourceCategories` array
3. Add download links and file paths

### Form Configuration
- **API endpoint**: `/app/api/forms/submit/route.ts`
- **Integration options**: Tally, Formspree, HubSpot, Salesforce
- **Current setup**: Logs submissions (replace with your service)

## 🎯 SEO & Performance

### SEO Features
- **Metadata**: Complete Open Graph and Twitter Card setup
- **Structured Data**: Organization JSON-LD schema
- **Sitemap**: Dynamic sitemap generation
- **Robots.txt**: Search engine directives
- **Canonical URLs**: Prevent duplicate content
- **hreflang**: UK English (en-GB) locale

### Performance Optimizations
- **Static Generation**: All marketing pages are statically generated
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Google Fonts with display swap
- **Bundle Optimization**: Tree shaking, code splitting
- **Core Web Vitals**: Optimized for Lighthouse scores ≥90

### Accessibility
- **WCAG 2.1 AA compliant**: Semantic HTML, proper heading hierarchy
- **Focus management**: Visible focus states, keyboard navigation
- **Color contrast**: All colors meet accessibility standards
- **Screen reader support**: ARIA labels and descriptions
- **Mobile first**: Responsive design, touch-friendly interactions

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect repository:**
   - Import project to Vercel
   - Connect your GitHub repository

2. **Environment variables:**
```bash
# Add any required environment variables
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=selbury.com
```

3. **Domain configuration:**
   - Add `selbury.com` as custom domain
   - Configure DNS records
   - Set up 301 redirect from `selbury.co.uk` → `selbury.com`

4. **Build settings:**
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`

### Alternative Platforms
- **Netlify**: Works with static export
- **AWS Amplify**: Full-stack deployment
- **Railway**: Easy container deployment
- **DigitalOcean App Platform**: Managed hosting

## 🔧 Configuration

### Analytics Setup
1. **Plausible Analytics:**
   - Sign up at [plausible.io](https://plausible.io)
   - Add domain: `selbury.com`
   - Update script in `app/layout.tsx`

2. **Cookie Consent:**
   - Integrate CookieYes or Osano
   - Configure cookie categories
   - Update cookie policy as needed

### Form Integration Options

#### Tally Forms
```bash
# Replace form action in contact page
<form action="https://tally.so/r/your-form-id" method="POST">
```

#### Formspree
```bash
# Add Formspree endpoint
FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

#### Custom Integration
- Modify `/app/api/forms/submit/route.ts`
- Add your CRM/email service integration
- Update error handling and success messages

## 🚦 Production Checklist

### Pre-Launch
- [ ] Update all placeholder content
- [ ] Configure real contact details
- [ ] Set up analytics and tracking
- [ ] Test all forms and integrations
- [ ] Run Lighthouse audits (aim for 90+ scores)
- [ ] Test accessibility with screen readers
- [ ] Verify mobile responsiveness
- [ ] Test contact form submissions

### DNS & Domain
- [ ] Configure DNS records for `selbury.com`
- [ ] Set up 301 redirect from `selbury.co.uk`
- [ ] Configure SSL certificate
- [ ] Test email deliverability

### Legal & Compliance
- [ ] Review and update privacy policy
- [ ] Ensure GDPR compliance
- [ ] Configure cookie consent banner
- [ ] Update terms of service
- [ ] Add proper contact information

### Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error tracking (Sentry)
- [ ] Monitor Core Web Vitals
- [ ] Set up performance alerts

## 🤝 Contributing

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Configured for Next.js and accessibility
- **Prettier**: Consistent code formatting
- **Commit Messages**: Conventional commits format

### Development Workflow
1. Create feature branch from `main`
2. Make changes with proper TypeScript types
3. Test accessibility and mobile responsiveness  
4. Run linting and type checks
5. Submit pull request with description

## 📞 Support

### Technical Support
- **Email**: dev@selbury.com
- **GitHub Issues**: Create issues for bugs or features
- **Documentation**: Check Next.js and Tailwind docs

### Business Inquiries  
- **Email**: hello@selbury.com
- **Phone**: +44 20 1234 5678
- **Address**: 123 Compliance Street, London, EC1A 1BB

---

**Ready to launch?** This codebase provides a complete, production-ready foundation for the Selbury marketing website. All components follow accessibility standards, the design system maintains consistency, and the codebase is optimized for performance and SEO.

Built with ❤️ for UK small businesses.