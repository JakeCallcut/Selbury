import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { getProducts, formatPrice } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Premium UK personal finance resources, guides, and templates.',
};

export default function ShopPage() {
  const products = getProducts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">Shop</h1>
        <p className="text-xl text-muted">
          Premium resources to help you take action. Detailed roadmaps, templates, 
          and checklists—delivered instantly as downloadable PDFs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.slug} href={`/shop/${product.slug}`}>
            <Card variant="bordered" className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {product.problem.split('.')[0]}.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-foreground">
                    {formatPrice(product.price, product.currency)}
                  </span>
                  <span className="text-sm text-primary font-medium">
                    View details →
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="p-6 bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-2">Instant Download</h3>
          <p className="text-sm text-muted">
            Access your purchase immediately after payment. No waiting.
          </p>
        </div>
        <div className="p-6 bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-2">Secure Payment</h3>
          <p className="text-sm text-muted">
            All payments processed securely. We never see your card details.
          </p>
        </div>
        <div className="p-6 bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-2">UK Focused</h3>
          <p className="text-sm text-muted">
            All content tailored for the UK market and regulations.
          </p>
        </div>
      </div>
    </div>
  );
}
