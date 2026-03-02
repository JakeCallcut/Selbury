import type { Metadata } from 'next';
import Link from 'next/link';
import { PensionCalculator } from '@/components/calculators';

export const metadata: Metadata = {
  title: 'Pension Growth Calculator',
  description: 'Project your pension pot at retirement based on contributions and expected investment growth.',
};

export default function PensionGrowthPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/tools" className="text-sm text-muted hover:text-primary transition-colors">
          ← Back to Tools
        </Link>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-4">
          Pension Growth Calculator
        </h1>
        <p className="text-muted">
          Project how your pension pot could grow over time based on your current savings, 
          monthly contributions, and expected investment returns. See the power of compound 
          growth over your working years.
        </p>
      </div>

      <PensionCalculator />

      <div className="mt-12 space-y-6">
        <div className="p-6 bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-3">Understanding the Numbers</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <strong className="text-foreground">Monthly contribution:</strong> Include your 
              personal contributions plus any employer match
            </li>
            <li>
              <strong className="text-foreground">Growth rate:</strong> The UK stock market 
              has historically returned around 7% per year on average, though this varies 
              significantly year to year
            </li>
            <li>
              <strong className="text-foreground">Inflation:</strong> This calculator doesn&apos;t 
              adjust for inflation—your future pot will have less purchasing power than today
            </li>
            <li>
              <strong className="text-foreground">Fees:</strong> Investment fees reduce your 
              returns—not accounted for here
            </li>
          </ul>
        </div>

        <div className="p-6 bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-3">Pension Tax Relief</h2>
          <p className="text-sm text-muted mb-2">
            When you contribute to a pension, you receive tax relief. For basic rate taxpayers, 
            a £100 contribution only costs £80 (the government adds £20).
          </p>
          <p className="text-sm text-muted">
            Higher rate taxpayers can claim additional relief through their tax return.
          </p>
        </div>

        <div className="p-4 bg-primary/5 border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Note:</strong> This is a simplified projection. Actual pension values 
            depend on investment performance, which can go down as well as up. Past 
            performance is not a guide to future returns.
          </p>
        </div>
      </div>
    </div>
  );
}
