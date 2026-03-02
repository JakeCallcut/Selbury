import Link from 'next/link';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-6xl font-semibold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
      <p className="text-muted mb-8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/guides">
          <Button variant="outline">Browse Guides</Button>
        </Link>
      </div>
    </div>
  );
}
