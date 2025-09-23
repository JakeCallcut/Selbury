import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how we use cookies on the Selbury website.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h1 className="font-serif text-4xl font-semibold text-gray-900 mb-8">
                Cookie Policy
              </h1>
              <p className="text-gray-500 mb-8">Last updated: September 21, 2024</p>
              
              <div className="space-y-8 text-gray-700 leading-relaxed">
                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and allow us to understand how you use our site.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
                  <p>We use cookies for the following purposes:</p>
                  
                  <h3 className="font-semibold text-lg text-gray-900 mt-6 mb-3">Essential Cookies</h3>
                  <p>These cookies are necessary for our website to function properly. They enable core functionality such as:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Security and authentication</li>
                    <li>Session management</li>
                    <li>Load balancing</li>
                    <li>Access to secure areas</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-gray-900 mt-6 mb-3">Analytics Cookies</h3>
                  <p>We use analytics cookies to understand how visitors interact with our website. This helps us improve our services. We use:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li><strong>Plausible Analytics</strong>: A privacy-focused analytics service that doesn't use cookies for tracking</li>
                    <li>First-party analytics data to understand user behaviour</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
                  
                  <h3 className="font-semibold text-lg text-gray-900 mt-6 mb-3">Browser Settings</h3>
                  <p>You can control cookies through your browser settings:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li><strong>Chrome</strong>: Settings {'>'} Privacy and Security {'>'} Cookies</li>
                    <li><strong>Firefox</strong>: Preferences {'>'} Privacy & Security {'>'} Cookies</li>
                    <li><strong>Safari</strong>: Preferences {'>'} Privacy {'>'} Cookies</li>
                    <li><strong>Edge</strong>: Settings {'>'} Cookies and Site Permissions</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-gray-900 mt-6 mb-3">Our Cookie Consent Manager</h3>
                  <p>When you first visit our website, you'll see a cookie consent banner where you can:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customise your preferences</li>
                    <li>Learn more about each cookie category</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                  <p>If you have questions about our use of cookies:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Email: privacy@selbury.com</li>
                    <li>Address: 123 Compliance Street, London, EC1A 1BB, United Kingdom</li>
                    <li>Phone: +44 20 1234 5678</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}