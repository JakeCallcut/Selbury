'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button, Input, Card, CardContent, Select } from '@/components/ui';

export function EmailSignup() {
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState('core');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-12">
      <Card variant="bordered" className="bg-card">
        <CardContent className="p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-2 text-center">
            Join Selbury
          </h2>
          <p className="text-muted mb-6 text-center">
            Choose your starting tier and join the sign-up list. We&apos;ll send setup steps as soon as your access is ready.
          </p>

          {submitted ? (
            <div className="p-4 bg-primary/10 border border-primary/20 text-center">
              <p className="text-foreground mb-3">
                Thanks. We&apos;ve saved your interest for the {tier.charAt(0).toUpperCase() + tier.slice(1)} tier.
              </p>
              <Link href={`/success?tier=${tier}&billing=monthly`}>
                <Button>Continue to onboarding</Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
              <Select
                label="Preferred tier"
                value={tier}
                onChange={(e) => setTier(e.target.value)}
                options={[
                  { value: 'core', label: 'Core - Free' },
                  { value: 'complete', label: 'Complete - £4/month' },
                  { value: 'tailored', label: 'Tailored - £8/month' },
                ]}
              />
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Join Sign-Up List
              </Button>
            </form>
          )}

          <p className="text-xs text-muted mt-4 text-center">
            No ads, no spam, and you can unsubscribe anytime.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
