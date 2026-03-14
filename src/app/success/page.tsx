import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, CardContent } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Subscription Activated',
  description: 'Welcome to Selbury. Your selected tier setup is underway.',
};

const tierNames: Record<string, string> = {
  core: 'Core',
  complete: 'Complete',
  tailored: 'Tailored',
};

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { tier?: string; billing?: string };
}) {
  const tier = searchParams.tier ?? 'core';
  const billing = searchParams.billing === 'annual' ? 'annual' : 'monthly';
  const selectedTier = tierNames[tier] ?? 'Core';

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card variant="bordered" className="text-center">
        <CardContent className="p-8 md:p-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-semibold text-foreground mb-4">Welcome to {selectedTier}</h1>

          <p className="text-muted mb-8">
            Your {selectedTier} tier interest is confirmed on a {billing} billing preference.
            We&apos;ll send your setup and onboarding details by email.
          </p>

          <div className="p-6 bg-primary/5 border border-primary/20 mb-8 text-left">
            <h2 className="text-lg font-semibold text-foreground mb-3">What happens next</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li>1. We confirm your account and tier access.</li>
              <li>2. You receive your first onboarding checklist.</li>
              <li>3. You can start with guides and calculators immediately.</li>
              <li>4. Complete and Tailored members get enhanced tools and prompts.</li>
            </ul>
            <p className="text-xs text-muted mt-4">Need help? Contact hello@selbury.co.uk</p>
          </div>

          <div className="border-t border-border pt-6 flex flex-wrap justify-center gap-3">
            <Link href="/pricing">
              <Button variant="outline">Review tiers</Button>
            </Link>
            <Link href="/guides">
              <Button>Start with guides</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
