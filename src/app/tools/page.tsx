import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { getTierAccessLabel, getTools } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Tools',
  description: 'UK personal finance tools across Core, Complete, and Tailored tiers.',
};

export default function ToolsPage() {
  const tools = getTools();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">Tools</h1>
        <p className="text-xl text-muted">
          Use Core calculators for essentials, then unlock Complete and Tailored tools for deeper planning.
          All tiers are ad-free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => {
          const accessLabel = getTierAccessLabel(tool.tierAccess);

          return (
            <Link key={tool.slug} href={`/tools/${tool.slug}`}>
              <Card variant="bordered" className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <div className="text-3xl mb-3">{tool.icon}</div>
                  {accessLabel && (
                    <div className="mb-3">
                      <span className="text-xs font-medium px-2 py-1 bg-accent/20 text-foreground">
                        {accessLabel}
                      </span>
                    </div>
                  )}
                  <CardTitle>{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-primary font-medium">Use tool →</span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-card border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-2">Privacy by Design</h2>
        <p className="text-muted">
          All our tools run entirely in your browser. We do not send your inputs
          to any server, and nothing is stored. When you close the page, your data is gone.
        </p>
      </div>
    </div>
  );
}
