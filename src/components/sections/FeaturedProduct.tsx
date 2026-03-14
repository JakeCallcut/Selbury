import Link from 'next/link';
import { Button, Card, CardContent } from '@/components/ui';
import { formatPrice, getSubscriptions } from '@/lib/content';

export function FeaturedProduct() {
  const subscriptions = getSubscriptions();

  return (
    <section className="py-12">
      <Card variant="bordered" className="bg-primary/5 border-primary/20">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-accent mb-2">Membership Tiers</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Start with Core, scale with Complete or Tailored
              </h2>
              <p className="text-muted leading-relaxed">
                Choose a tier that matches your stage, then move up when you need advanced tools,
                personalised roadmaps, and milestone prompts. No ads on any tier.
              </p>
            </div>
            <Link href="/pricing">
              <Button size="lg">See Full Comparison</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subscriptions.map((tier) => (
              <div key={tier.id} className={`p-5 border ${tier.featured ? 'border-primary bg-card' : 'border-border bg-background'}`}>
                <p className="text-sm font-medium text-muted mb-2">{tier.name}</p>
                <p className="text-2xl font-semibold text-foreground mb-3">
                  {tier.monthlyPrice === 0 ? 'Free' : `${formatPrice(tier.monthlyPrice, tier.currency)}/month`}
                </p>
                <p className="text-sm text-muted">{tier.summary}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
