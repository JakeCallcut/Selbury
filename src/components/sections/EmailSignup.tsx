'use client';

import { useState } from 'react';
import { Button, Input, Card, CardContent } from '@/components/ui';

export function EmailSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no actual email collection in Phase 1
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-12">
      <Card variant="bordered" className="bg-card">
        <CardContent className="p-8 text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Stay Updated
          </h2>
          <p className="text-muted mb-6">
            Get notified when we publish new guides and tools. No spam, unsubscribe anytime.
          </p>
          
          {submitted ? (
            <div className="p-4 bg-primary/10 border border-primary/20">
              <p className="text-foreground">
                Thanks for your interest! Email signup coming soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="text-xs text-muted mt-4">
            We respect your privacy. See our privacy policy for details.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
