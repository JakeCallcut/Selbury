import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { getFeaturedGuides } from '@/lib/content';

export function FeaturedGuides() {
  const guides = getFeaturedGuides();

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Popular Guides</h2>
        <Link 
          href="/guides" 
          className="text-sm text-primary hover:underline font-medium"
        >
          View all guides →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`}>
            <Card variant="bordered" className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm text-primary font-medium">
                  Read guide →
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
