export interface Product {
  slug: string;
  title: string;
  price: number; // in pence
  currency: string;
  featured: boolean;
  problem: string;
  includes: string[];
  audience: string;
  stripePriceId: string;
}
