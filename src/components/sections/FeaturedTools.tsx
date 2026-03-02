import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

const tools = [
  {
    slug: 'mortgage-affordability',
    title: 'Mortgage Affordability',
    description: 'Calculate how much you could borrow based on your income and deposit.',
    icon: '🏠',
  },
  {
    slug: 'stamp-duty',
    title: 'Stamp Duty Calculator',
    description: 'Work out the stamp duty you\'ll pay on a property in England.',
    icon: '📋',
  },
  {
    slug: 'pension-growth',
    title: 'Pension Growth',
    description: 'Project your pension pot at retirement with compound growth.',
    icon: '📈',
  },
  {
    slug: 'glossary',
    title: 'Financial Glossary',
    description: 'Search our A-Z of UK personal finance terms and definitions.',
    icon: '📖',
  },
];

export function FeaturedTools() {
  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Free Calculators</h2>
        <Link 
          href="/tools" 
          className="text-sm text-primary hover:underline font-medium"
        >
          View all tools →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <Link key={tool.slug} href={`/tools/${tool.slug}`}>
            <Card variant="bordered" className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <div className="text-2xl mb-2">{tool.icon}</div>
                <CardTitle className="text-lg">{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm text-primary font-medium">
                  Use calculator →
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
