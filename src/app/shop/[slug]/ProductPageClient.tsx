'use client';

import Link from 'next/link';
import { Button, Card, CardContent } from '@/components/ui';

export function ProductPageClient() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card variant="bordered" className="bg-primary/5 border-primary/20">
        <CardContent className="p-8 text-center">
          <h1 className="text-3xl font-semibold text-foreground mb-4">Single-resource pages are retired</h1>
          <p className="text-muted mb-6">
            Selbury now uses a subscription model with Core, Complete, and Tailored tiers.
            Compare what each tier includes and choose the right fit for your stage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/pricing">
              <Button>Compare tiers</Button>
            </Link>
            <Link href="/guides">
              <Button variant="outline">Browse guides</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
