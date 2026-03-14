import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui';
import { MortgageCalculator } from '@/components/tools';
import { getTierAccessLabel, getToolBySlug } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Mortgage Affordability Calculator',
  description: 'Calculate how much you could borrow for a UK mortgage based on your income, debts, and deposit.',
};

export default function MortgageAffordabilityPage() {
  const tool = getToolBySlug('mortgage-affordability');
  const accessLabel = tool ? getTierAccessLabel(tool.tierAccess) : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/tools" className="text-sm text-muted hover:text-primary transition-colors">
          ← Back to Tools
        </Link>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-4">
          Mortgage Affordability Calculator
        </h1>
        <p className="text-muted">
          Estimate how much you could borrow for a mortgage based on your household income,
          existing debts, and available deposit. This calculator uses a standard 4.5x income
          multiplier commonly used by UK lenders.
        </p>
      </div>

      {accessLabel && (
        <Card variant="bordered" className="mb-8 bg-primary/5 border-primary/20">
          <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <span className="inline-flex text-xs font-medium px-2 py-1 bg-accent/20 text-foreground mb-2">
                {accessLabel}
              </span>
              <p className="text-sm text-muted">Core members can use this tool, with deeper tracking available in higher tiers.</p>
            </div>
            <Link href="/pricing" className="text-sm text-primary font-medium hover:underline">
              View pricing →
            </Link>
          </CardContent>
        </Card>
      )}

      <MortgageCalculator />

      <div className="mt-12 space-y-6">
        <div className="p-6 bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-3">How it works</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>• Most UK lenders will offer 4 to 4.5 times your annual household income</li>
            <li>• Your existing debts reduce the amount you can borrow</li>
            <li>• Your deposit is added to the borrowing amount to give maximum property price</li>
            <li>• Actual amounts depend on your credit score, employment, and lender criteria</li>
          </ul>
        </div>

        <div className="p-4 bg-primary/5 border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Note:</strong> This is an estimate only. Lenders will assess your full
            financial circumstances including credit history, employment status, and regular
            outgoings. Consider getting an Agreement in Principle for a more accurate figure.
          </p>
        </div>
      </div>
    </div>
  );
}
