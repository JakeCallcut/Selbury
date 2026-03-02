import Link from 'next/link';
import { Card, CardContent } from '@/components/ui';
import { Button } from '@/components/ui';
import { getFeaturedProducts, formatPrice } from '@/lib/content';

export function FeaturedProduct() {
  const products = getFeaturedProducts();
  const product = products[0]; // Get first featured product

  if (!product) return null;

  return (
    <section className="py-12">
      <Card variant="bordered" className="bg-primary/5 border-primary/20">
        <CardContent className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-medium text-accent mb-2">Premium Resource</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                {product.title}
              </h2>
              <p className="text-muted mb-6 leading-relaxed">
                {product.problem.split('.')[0]}.
              </p>
              <ul className="space-y-2 mb-6">
                {product.includes.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <p className="text-3xl font-semibold text-foreground mb-4">
                {formatPrice(product.price, product.currency)}
              </p>
              <Link href={`/shop/${product.slug}`}>
                <Button size="lg">
                  Learn More
                </Button>
              </Link>
              <p className="text-xs text-muted mt-3">
                Instant PDF download after purchase
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
