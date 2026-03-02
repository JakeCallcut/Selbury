import { Guide, Product } from '@/types';
import guidesData from '@/data/guides.json';
import productsData from '@/data/products.json';

// Type assertions for JSON imports
const guides: Guide[] = guidesData as Guide[];
const products: Product[] = productsData as Product[];

// Guide functions
export function getGuides(): Guide[] {
  return guides;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(guide => guide.slug === slug);
}

export function getFeaturedGuides(): Guide[] {
  return guides.filter(guide => guide.featured);
}

export function getGuideSlugs(): string[] {
  return guides.map(guide => guide.slug);
}

// Product functions
export function getProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductSlugs(): string[] {
  return products.map(product => product.slug);
}

// Price formatting
export function formatPrice(priceInPence: number, currency: string = 'GBP'): string {
  const priceInPounds = priceInPence / 100;
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
  }).format(priceInPounds);
}
