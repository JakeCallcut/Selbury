import type { Metadata } from 'next';
import Link from 'next/link';
import { StampDutyCalculator } from '@/components/calculators';

export const metadata: Metadata = {
  title: 'Stamp Duty Calculator',
  description: 'Calculate the Stamp Duty Land Tax (SDLT) on property purchases in England and Northern Ireland.',
};

export default function StampDutyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/tools" className="text-sm text-muted hover:text-primary transition-colors">
          ← Back to Tools
        </Link>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-4">
          Stamp Duty Calculator
        </h1>
        <p className="text-muted">
          Calculate the Stamp Duty Land Tax (SDLT) you&apos;ll pay when buying a property in 
          England or Northern Ireland. Includes first-time buyer relief and additional 
          property surcharge calculations.
        </p>
      </div>

      <StampDutyCalculator />

      <div className="mt-12 space-y-6">
        <div className="p-6 bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-3">Current SDLT Rates (England & Northern Ireland)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-muted font-medium">Property value</th>
                  <th className="text-left py-2 text-muted font-medium">Standard rate</th>
                  <th className="text-left py-2 text-muted font-medium">Additional property</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-b border-border">
                  <td className="py-2">Up to £250,000</td>
                  <td className="py-2">0%</td>
                  <td className="py-2">3%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">£250,001 to £925,000</td>
                  <td className="py-2">5%</td>
                  <td className="py-2">8%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">£925,001 to £1,500,000</td>
                  <td className="py-2">10%</td>
                  <td className="py-2">13%</td>
                </tr>
                <tr>
                  <td className="py-2">Over £1,500,000</td>
                  <td className="py-2">12%</td>
                  <td className="py-2">15%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 bg-card border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-3">First-Time Buyer Relief</h2>
          <p className="text-sm text-muted mb-2">
            First-time buyers pay no SDLT on properties up to £425,000. For properties 
            between £425,001 and £625,000, you pay 5% on the amount above £425,000.
          </p>
          <p className="text-sm text-muted">
            Properties over £625,000 do not qualify for first-time buyer relief.
          </p>
        </div>

        <div className="p-4 bg-primary/5 border border-primary/20">
          <p className="text-sm text-foreground">
            <strong>Note:</strong> Scotland uses Land and Buildings Transaction Tax (LBTT). 
            Wales uses Land Transaction Tax (LTT). This calculator covers England and 
            Northern Ireland only.
          </p>
        </div>
      </div>
    </div>
  );
}
