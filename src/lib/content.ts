import { Guide, Product, SubscriptionTier, Tier } from '@/types';
import guidesData from '@/data/guides.json';
import productsData from '@/data/products.json';
import subscriptionsData from '@/data/subscriptions.json';

export interface ToolSummary {
  slug: string;
  title: string;
  description: string;
  icon: string;
  tierAccess: Tier[];
}

const tierOrder: Record<Tier, number> = {
  core: 0,
  complete: 1,
  tailored: 2,
};

// Type assertions for JSON imports
const guides: Guide[] = guidesData as Guide[];
const products: Product[] = productsData as Product[];
const subscriptions: SubscriptionTier[] = subscriptionsData as SubscriptionTier[];

const tools: ToolSummary[] = [
  {
    slug: 'mortgage-affordability',
    title: 'Mortgage Affordability Calculator',
    description: 'Estimate how much you could borrow based on income, debts, and deposit.',
    icon: '🏠',
    tierAccess: ['core', 'complete', 'tailored'],
  },
  {
    slug: 'stamp-duty',
    title: 'Stamp Duty Calculator',
    description: 'Calculate SDLT for property purchases in England and Northern Ireland.',
    icon: '📋',
    tierAccess: ['core', 'complete', 'tailored'],
  },
  {
    slug: 'pension-growth',
    title: 'Pension Growth Calculator',
    description: 'Project your pension pot with compound growth assumptions over time.',
    icon: '📈',
    tierAccess: ['complete', 'tailored'],
  },
  {
    slug: 'budget-planner',
    title: 'Budget Planner',
    description: 'Track monthly cashflow and compare spending against savings goals.',
    icon: '💰',
    tierAccess: ['complete', 'tailored'],
  },
  {
    slug: 'glossary',
    title: 'Financial Terms Glossary',
    description: 'Search an A-Z of UK personal finance terms and definitions.',
    icon: '📖',
    tierAccess: ['core', 'complete', 'tailored'],
  },
];

// Guide functions
export function getGuides(): Guide[] {
  return guides;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getFeaturedGuides(): Guide[] {
  return guides.filter((guide) => guide.featured);
}

export function getGuideSlugs(): string[] {
  return guides.map((guide) => guide.slug);
}

// Product functions (legacy data retained while routes migrate to subscription model)
export function getProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductSlugs(): string[] {
  return products.map((product) => product.slug);
}

// Subscription functions
export function getSubscriptions(): SubscriptionTier[] {
  return subscriptions;
}

export function getSubscriptionById(id: Tier): SubscriptionTier | undefined {
  return subscriptions.find((tier) => tier.id === id);
}

export function getFeaturedSubscription(): SubscriptionTier | undefined {
  return subscriptions.find((tier) => tier.featured);
}

export function getTools(): ToolSummary[] {
  return tools;
}

export function getToolBySlug(slug: string): ToolSummary | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getTierAccessLabel(tiers: Tier[]): string | null {
  const sorted = [...tiers].sort((a, b) => tierOrder[a] - tierOrder[b]);

  if (sorted.includes('complete') && !sorted.includes('core')) {
    return 'Complete';
  }

  if (sorted.length === 1 && sorted[0] === 'tailored') {
    return 'Tailored';
  }

  return null;
}

// Price formatting
export function formatPrice(priceInPence: number, currency: string = 'GBP'): string {
  const priceInPounds = priceInPence / 100;
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
    maximumFractionDigits: priceInPounds % 1 === 0 ? 0 : 2,
  }).format(priceInPounds);
}
