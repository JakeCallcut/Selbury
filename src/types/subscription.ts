export type Tier = 'core' | 'complete' | 'tailored';

export interface SubscriptionTier {
  id: Tier;
  name: string;
  monthlyPrice: number; // in pence
  annualPrice: number; // in pence
  currency: string;
  featured?: boolean;
  summary: string;
  features: string[];
}
