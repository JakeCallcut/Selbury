import { Tier } from './subscription';

export interface GuideSection {
  heading: string;
  content: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  featured: boolean;
  sections: GuideSection[];
  relatedTools: string[];
  tierAccess: Tier[];
  relatedProducts?: string[];
}
