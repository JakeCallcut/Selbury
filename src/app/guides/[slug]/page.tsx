import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button, Card, CardContent } from '@/components/ui';
import { getGuideBySlug, getGuideSlugs, getProductBySlug } from '@/lib/content';

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  
  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: guide.title,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  
  if (!guide) {
    notFound();
  }

  const relatedProduct = guide.relatedProducts[0] 
    ? getProductBySlug(guide.relatedProducts[0]) 
    : null;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/guides" className="text-sm text-muted hover:text-primary transition-colors">
          ← Back to Guides
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">{guide.title}</h1>
        <p className="text-xl text-muted">{guide.description}</p>
      </header>

      {/* Table of Contents */}
      <Card variant="bordered" className="mb-12">
        <CardContent className="p-6">
          <h2 className="text-sm font-medium text-muted mb-3">In this guide</h2>
          <nav>
            <ul className="space-y-2">
              {guide.sections.map((section, index) => (
                <li key={index}>
                  <a 
                    href={`#section-${index}`}
                    className="text-primary hover:underline"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>

      {/* Content */}
      <div className="space-y-12">
        {guide.sections.map((section, index) => (
          <section key={index} id={`section-${index}`} className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {section.heading}
            </h2>
            <div className="text-muted leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      {/* Related Tools */}
      {guide.relatedTools.length > 0 && (
        <Card variant="bordered" className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Related Tools
            </h3>
            <p className="text-sm text-muted mb-4">
              Try these calculators to help with your planning:
            </p>
            <div className="flex flex-wrap gap-3">
              {guide.relatedTools.map((tool) => (
                <Link key={tool} href={`/tools/${tool}`}>
                  <Button variant="outline" size="sm">
                    {tool.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Related Product CTA */}
      {relatedProduct && (
        <Card variant="bordered" className="mt-8 bg-accent/10 border-accent/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {relatedProduct.title}
            </h3>
            <p className="text-sm text-muted mb-4">
              Get our comprehensive roadmap with step-by-step checklists, templates, and more.
            </p>
            <Link href={`/shop/${relatedProduct.slug}`}>
              <Button>
                Learn More →
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Disclaimer */}
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-xs text-muted">
          This guide is for educational purposes only and does not constitute financial advice. 
          Always seek professional advice for decisions about your specific circumstances.
        </p>
      </div>
    </article>
  );
}
