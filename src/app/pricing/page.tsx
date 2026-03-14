import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { formatPrice, getSubscriptions } from '@/lib/content';

function ComparisonIcon({ included }: { included: boolean }) {
  return included ? (
    <svg className="w-5 h-5 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg className="w-5 h-5 mx-auto text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Choose the Selbury plan that fits your financial journey. No ads on any tier.',
};

const comparisonRows = [
  {
    label: 'Core guides and articles',
    availability: [true, true, true],
  },
  {
    label: 'Basic calculators',
    availability: [true, true, true],
  },
  {
    label: 'All calculators and tools',
    availability: [false, true, true],
  },
  {
    label: 'Downloadable worksheets and checklists',
    availability: [false, true, true],
  },
  {
    label: 'Saved progress and history',
    availability: [false, true, true],
  },
  {
    label: 'Personalised roadmaps',
    availability: [false, false, true],
  },
  {
    label: 'Roadmap tracking and milestone prompts',
    availability: [false, false, true],
  },
  {
    label: 'Priority updates for rates and rules',
    availability: [false, false, true],
  },
  {
    label: 'Ads',
    availability: ['Never', 'Never', 'Never'],
  },
];

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ billing?: string }>;
}) {
  const { billing: billingParam } = await searchParams;
  const subscriptions = getSubscriptions();
  const billing = billingParam === 'annual' ? 'annual' : 'monthly';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="max-w-3xl mb-10">
        <p className="text-sm font-medium text-accent mb-3">Membership</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Choose your Selbury tier
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          Start free with Core, or unlock Complete and Tailored for deeper tools and personalised support.
          Every tier is ad-free.
        </p>
      </header>

      <div className="inline-flex p-1 bg-card border border-border mb-8">
        <Link
          href="/pricing?billing=monthly"
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            billing === 'monthly' ? 'bg-primary text-background' : 'text-foreground hover:text-primary'
          }`}
        >
          Monthly billing
        </Link>
        <Link
          href="/pricing?billing=annual"
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            billing === 'annual' ? 'bg-primary text-background' : 'text-foreground hover:text-primary'
          }`}
        >
          Annual billing (save 20%)
        </Link>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {subscriptions.map((tier) => {
          const isAnnual = billing === 'annual';
          const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
          const cadence = isAnnual ? '/year' : '/month';

          return (
            <Card
              key={tier.id}
              variant="bordered"
              className={tier.featured ? 'border-primary bg-primary/5' : ''}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <CardTitle>{tier.name}</CardTitle>
                  {tier.featured && (
                    <span className="text-xs font-medium px-2 py-1 bg-primary text-background">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted">{tier.summary}</p>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-foreground mb-5">
                  {tier.monthlyPrice === 0
                    ? 'Free'
                    : `${formatPrice(price, tier.currency)}${cadence}`}
                </p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/success?tier=${tier.id}&billing=${billing}`}>
                  <Button variant={tier.featured ? 'primary' : 'outline'} className="w-full">
                    {tier.monthlyPrice === 0 ? 'Start Core' : `Choose ${tier.name}`}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="border border-border bg-card overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-border bg-primary/5">
              <th className="text-left p-4 text-foreground font-semibold">Feature</th>
              <th className="text-left p-4 text-foreground font-semibold">Core</th>
              <th className="text-left p-4 text-foreground font-semibold">Complete</th>
              <th className="text-left p-4 text-foreground font-semibold">Tailored</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.label} className="border-b border-border last:border-b-0">
                <td className="p-4 text-foreground">{row.label}</td>
                {row.availability.map((cell, index) => (
                  <td key={`${row.label}-${index}`} className="p-4 text-center text-muted">
                    {typeof cell === 'boolean' ? <ComparisonIcon included={cell} /> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
