import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, CardContent } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Purchase Complete',
  description: 'Thank you for your purchase.',
};

export default function SuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card variant="bordered" className="text-center">
        <CardContent className="p-8 md:p-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-primary" 
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
          </div>
          
          <h1 className="text-3xl font-semibold text-foreground mb-4">
            Thank You for Your Purchase!
          </h1>
          
          <p className="text-muted mb-8">
            Your payment was successful. You can download your purchase using the 
            link below.
          </p>

          <div className="p-6 bg-primary/5 border border-primary/20 mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Your Download
            </h2>
            <p className="text-sm text-muted mb-4">
              Click the button below to download your PDF.
            </p>
            <Button>
              Download Your Purchase
            </Button>
            <p className="text-xs text-muted mt-3">
              Having trouble? Contact us at hello@selbury.co.uk
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted mb-4">
              A confirmation email has been sent to your email address.
            </p>
            <Link href="/">
              <Button variant="outline">
                Return to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-xs text-muted">
          If you have any questions about your purchase, please contact us at{' '}
          <a href="mailto:hello@selbury.co.uk" className="text-primary hover:underline">
            hello@selbury.co.uk
          </a>
        </p>
      </div>
    </div>
  );
}
