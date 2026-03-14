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
          Clear, practical resources for personal finance in the UK. Start free,
          then move to Complete or Tailored as you need more depth. No ads on any tier.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/pricing">
            <Button size="lg">
              Compare Tiers
            </Button>
          </Link>
          <Link href="/guides">
            <Button variant="outline" size="lg">
              Explore Guides
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
