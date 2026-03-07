# Selbury

A lean UK personal finance website built with Next.js. Provides educational content, client-side tools, and paid digital products.

## Features

- **Static Content Pages**: About, Guides, Legal pages
- **Client-Side Tools**: Mortgage affordability, stamp duty, pension growth, budget planner
- **Digital Products**: Paid downloadable resources
- **Dark/Light Theme**: User preference with persistence
- **SEO Optimised**: Static generation, semantic HTML, meta tags

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel (free tier compatible)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/selbury.git
   cd selbury
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Edit `.env.local` with your settings:
   ```
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_BASE_URL` (your production URL)
4. Deploy

### Manual Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── guides/
│   ├── tools/
│   ├── shop/
│   ├── success/
│   ├── disclaimer/
│   └── privacy/
├── components/
│   ├── tools/              # Tool components
│   ├── layout/             # Header, Footer, Theme
│   ├── sections/           # Page sections
│   └── ui/                 # Reusable UI components
├── data/
│   ├── guides.json         # Guide content
│   └── products.json       # Product definitions
├── lib/
│   ├── calculations/       # Tool logic
│   ├── content.ts          # Content helpers
│   └── utils.ts            # Utilities
└── types/                  # TypeScript types
```

## Adding Content

### Guides

Edit `src/data/guides.json`:

```json
{
  "slug": "your-guide-slug",
  "title": "Your Guide Title",
  "description": "Brief description",
  "featured": true,
  "sections": [
    {
      "heading": "Section Heading",
      "content": "Section content..."
    }
  ],
  "relatedTools": ["mortgage-affordability"],
  "relatedProducts": ["first-time-buyer-roadmap"]
}
```

### Products

Edit `src/data/products.json`:

```json
{
  "slug": "your-product-slug",
  "title": "Product Title",
  "price": 2900,
  "currency": "GBP",
  "featured": true,
  "problem": "Problem statement...",
  "includes": ["Feature 1", "Feature 2"],
  "audience": "Who it's for..."
}
```

## Tools

All tools run client-side with no data storage:

- **Mortgage Affordability**: 4.5x income multiplier
- **Stamp Duty**: SDLT bands for England/NI with FTB relief
- **Pension Growth**: Compound interest projection
- **Budget Planner**: Income vs expenses tracking

## Colour Palette

- Primary (Forest Green): `#1E3A32`
- Background (Ivory): `#F4F1E8`
- Text (Charcoal): `#2B2B2B`
- Accent (Muted Brass): `#B89C5A`

## Phase 2 Considerations

- Payment integration
- Email collection with provider integration
- Additional tools
- More guide content
- Blog functionality

## License

All rights reserved.
