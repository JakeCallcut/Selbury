'use client';

import Link from 'next/link';
import { Button, Card, CardContent } from '@/components/ui';
import { Product } from '@/types';
import { formatPrice } from '@/lib/content';

interface BuyButtonProps {
  product: Product;
}

export function BuyButton({ product }: BuyButtonProps) {
  return (
    <div>
      <Button 
        size="lg" 
        disabled
        className="w-full sm:w-auto"
      >
        {`Buy Now – ${formatPrice(product.price, product.currency)}`}
      </Button>
      <p className="mt-2 text-sm text-muted">Coming soon</p>
    </div>
  );
}

interface ProductPageClientProps {
  product: Product;
}

export function ProductPageClient({ product }: ProductPageClientProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/shop" className="text-sm text-muted hover:text-primary transition-colors">
          ← Back to Shop
        </Link>
      </nav>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-semibold text-foreground mb-4">
              {product.title}
            </h1>
            <p className="text-muted leading-relaxed">
              {product.problem}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              What&apos;s Included
            </h2>
            <ul className="space-y-3">
              {product.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Who It&apos;s For
            </h2>
            <p className="text-muted leading-relaxed">
              {product.audience}
            </p>
          </div>
        </div>

        {/* Purchase Card */}
        <div className="md:col-span-1">
          <Card variant="bordered" className="sticky top-24">
            <CardContent className="p-6">
              <p className="text-3xl font-semibold text-foreground mb-4">
                {formatPrice(product.price, product.currency)}
              </p>
              
              <BuyButton product={product} />
              
              <ul className="mt-6 space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Instant PDF download
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  One-time purchase
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-xs text-muted">
          This product is for educational purposes only and does not constitute financial advice. 
          For decisions about your specific circumstances, please consult a qualified financial adviser.
        </p>
      </div>
    </div>
  );
}
