import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { getGuides, getTierAccessLabel } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Structured UK personal finance guides across Core, Complete, and Tailored tiers.',
};

export default function GuidesPage() {
  const guides = getGuides();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">Guides</h1>
        <p className="text-xl text-muted">
          Practical, structured guidance for key financial decisions. Start with Core and unlock
          deeper walkthroughs in Complete and Tailored.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => {
          const accessLabel = getTierAccessLabel(guide.tierAccess);

          return (
            <Link key={guide.slug} href={`/guides/${guide.slug}`}>
              <Card variant="bordered" className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  {accessLabel && (
                    <div className="mb-3 inline-flex items-center gap-2">
                      <span className="text-xs font-medium px-2 py-1 bg-accent/20 text-foreground">
                        {accessLabel}
                      </span>
                    </div>
                  )}
                  <CardTitle>{guide.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">{guide.sections.length} sections</span>
                    <span className="text-sm text-primary font-medium">Read guide →</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
