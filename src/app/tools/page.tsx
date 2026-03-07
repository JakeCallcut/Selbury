import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tools',
  description: 'Free UK personal finance tools for mortgages, stamp duty, pensions, and budgeting.',
};

const tools = [
  {
    slug: 'mortgage-affordability',
    title: 'Mortgage Affordability Calculator',
    description: 'Estimate how much you could borrow for a mortgage based on your income, debts, and deposit. Uses standard UK lending criteria.',
    icon: '🏠',
  },
  {
    slug: 'stamp-duty',
    title: 'Stamp Duty Calculator',
    description: 'Calculate the Stamp Duty Land Tax (SDLT) you\'ll pay on a property purchase in England or Northern Ireland.',
    icon: '📋',
  },
  {
    slug: 'pension-growth',
    title: 'Pension Growth Calculator',
    description: 'Project your pension pot at retirement based on your contributions and expected investment growth.',
    icon: '📈',
  },
  {
    slug: 'budget-planner',
    title: 'Budget Planner',
    description: 'Track your monthly income against your expenses to understand your cashflow and savings rate.',
    icon: '💰',
  },
  {
    slug: 'glossary',
    title: 'Financial Terms Glossary',
    description: 'A searchable A-Z of UK personal finance terms. Understand the jargon behind mortgages, pensions, tax, and more.',
    icon: '📖',
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">Tools</h1>
        <p className="text-xl text-muted">
          Free tools to help you plan and make informed decisions. 
          All calculations run in your browser—we don&apos;t store any of your data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link key={tool.slug} href={`/tools/${tool.slug}`}>
            <Card variant="bordered" className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <div className="text-3xl mb-3">{tool.icon}</div>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm text-primary font-medium">
                  Use tool →
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-card border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-2">Privacy by Design</h2>
        <p className="text-muted">
          All our tools run entirely in your browser. We don&apos;t send your inputs 
          to any server, and nothing is stored. When you close the page, your data is gone.
        </p>
      </div>
    </div>
  );
}
