import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Selbury handles your data and protects your privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-semibold text-foreground mb-8">Privacy Policy</h1>

      <div className="space-y-8 text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Our Commitment to Privacy</h2>
          <p>
            Selbury is committed to protecting your privacy. This policy explains what information we collect,
            how we use it, and your rights regarding your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Tool Data</h3>
          <p>
            Our tools run entirely in your browser. We do not collect, store, or transmit any data you enter into our
            tools. When you close the page, your inputs are gone.
          </p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Subscription and Contact Information</h3>
          <p>
            When you join a Selbury tier or contact us, we may receive limited details such as your email address,
            chosen tier, and billing preference. We use this information to provide onboarding, account support, and
            service updates.
          </p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Website Analytics</h3>
          <p>
            We may use basic analytics to understand how our website is used. This data is aggregated and does not
            identify individual users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Information</h2>
          <p>We use the limited information we collect to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Set up and support your selected subscription tier</li>
            <li>Respond to customer support enquiries</li>
            <li>Improve our website and content</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Data Sharing</h2>
          <p>We do not sell your personal information. We may share information with:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              <strong>Service providers:</strong> Who help us deliver subscriptions and communications under their own
              privacy policies
            </li>
            <li>
              <strong>Legal authorities:</strong> If required by law
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Cookies</h2>
          <p>
            We use minimal cookies to remember your theme preference (light/dark mode). We do not use tracking
            cookies or third-party advertising cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
          <p>Under UK data protection law (UK GDPR), you have rights including:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>The right to access information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to object to processing of your information</li>
          </ul>
          <p className="mt-3">To exercise these rights, please contact us at the email address below.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
          <p>
            We implement appropriate security measures to protect any personal information we hold. However, no method
            of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this page with an
            updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or how we handle your data, please contact us at:
          </p>
          <p className="mt-2">
            <a href="mailto:hello@selbury.co.uk" className="text-primary hover:underline">
              hello@selbury.co.uk
            </a>
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
