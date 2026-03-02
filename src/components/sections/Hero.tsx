import Link from 'next/link';
import { Button } from '@/components/ui';

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
          Structured guidance for your financial journey
        </h1>
        <p className="text-xl text-muted mb-8 leading-relaxed">
          Clear, practical resources to help you make informed decisions about 
          mortgages, savings, pensions, and more. No jargon. No sales pitches. 
          Just the information you need.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/guides">
            <Button size="lg">
              Browse Guides
            </Button>
          </Link>
          <Link href="/tools">
            <Button variant="outline" size="lg">
              Try Our Calculators
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
