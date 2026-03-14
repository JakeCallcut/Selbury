import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui';
import { BudgetPlanner } from '@/components/tools';
import { getTierAccessLabel, getToolBySlug } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Budget Planner',
  description: 'Track your monthly income and expenses to understand your cashflow and savings rate.',
};

export default function BudgetPlannerPage() {
  const tool = getToolBySlug('budget-planner');
  const accessLabel = tool ? getTierAccessLabel(tool.tierAccess) : 'Complete';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/tools" className="text-sm text-muted hover:text-primary transition-colors">
          ← Back to Tools
        </Link>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-4">
          Budget Planner
        </h1>
        <p className="text-muted">
          Understand your monthly cashflow by tracking income against expenses. See where 
          your money goes and identify opportunities to save more.
        </p>
      </div>

      <Card variant="bordered" className="mb-8 bg-accent/10 border-accent/30">
        <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <span className="inline-flex text-xs font-medium px-2 py-1 bg-accent/20 text-foreground mb-2">
              {accessLabel}
            </span>
            <p className="text-sm text-muted">Available in higher tiers with worksheet downloads and saved history features.</p>
          </div>
          <Link href="/pricing" className="text-sm text-primary font-medium hover:underline">
            View pricing →
          </Link>
        </CardContent>
      </Card>

      <BudgetPlanner />

      <div className="mt-12 space-y-6">
        <div className="p-6 bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-3">The 50/30/20 Rule</h2>
          <p className="text-sm text-muted mb-4">
            A popular budgeting guideline suggests allocating your after-tax income as follows:
          </p>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <strong className="text-foreground">50% – Needs:</strong> Essential expenses 
              like housing, utilities, transport, food, insurance
            </li>
            <li>
              <strong className="text-foreground">30% – Wants:</strong> Non-essential spending 
              like dining out, entertainment, hobbies, subscriptions
            </li>
            <li>
              <strong className="text-foreground">20% – Savings:</strong> Money set aside for 
              emergency funds, retirement, investments, debt repayment
            </li>
          </ul>
        </div>

        <div className="p-6 bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-3">Tips for Better Budgeting</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>• Review your bank statements to capture all regular expenses</li>
            <li>• Don&apos;t forget annual costs—divide by 12 for monthly equivalent</li>
            <li>• Build an emergency fund covering 3-6 months of essential expenses</li>
            <li>• Track actual spending for a month to validate your estimates</li>
            <li>• Review and adjust your budget quarterly</li>
          </ul>
        </div>

        <div className="p-4 bg-primary/5 border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Privacy note:</strong> Your budget data is not saved anywhere. 
            Everything runs in your browser and disappears when you close the page.
          </p>
        </div>
      </div>
    </div>
  );
}
