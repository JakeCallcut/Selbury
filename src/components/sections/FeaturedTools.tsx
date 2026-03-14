import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { getTierAccessLabel, getTools } from '@/lib/content';

export function FeaturedTools() {
  const tools = getTools().filter((tool) => tool.slug !== 'budget-planner');

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Tools by Tier</h2>
        <Link
          href="/tools"
          className="text-sm text-primary hover:underline font-medium"
        >
          View all tools →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => {
          const accessLabel = getTierAccessLabel(tool.tierAccess);

          return (
            <Link key={tool.slug} href={`/tools/${tool.slug}`}>
              <Card variant="bordered" className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  {accessLabel && (
                    <div className="mb-3">
                      <span className="text-xs font-medium px-2 py-1 bg-accent/20 text-foreground">
                        {accessLabel}
                      </span>
                    </div>
                  )}
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-primary font-medium">
                    Use tool →
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
