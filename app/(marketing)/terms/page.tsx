import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using the Selbury compliance platform.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h1 className="font-serif text-4xl font-semibold text-gray-900 mb-8">
                Terms of Service
              </h1>
              <p className="text-gray-500 mb-8">Last updated: September 21, 2024</p>
              
              <div className="space-y-8 text-gray-700 leading-relaxed">
                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
                  <p>
                    By accessing or using Selbury's compliance management platform, you agree to be bound by these Terms of Service and our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
                  <p>Selbury provides a compliance management platform that helps UK small businesses identify, understand, and manage their legal obligations. Our services include:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Compliance radar and tracking</li>
                    <li>Plain English regulatory summaries</li>
                    <li>Task management and collaboration tools</li>
                    <li>Resource library and templates</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Account Registration</h2>
                  <p>To use our services, you must:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Be at least 18 years old or have legal capacity to enter contracts</li>
                    <li>Represent a legitimate business entity</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Professional Advice Disclaimer</h2>
                  <p>
                    Our platform provides general information and tools for compliance management. It does not constitute legal advice. You should consult with qualified professionals for specific legal guidance.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                  <p>If you have questions about these Terms of Service:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Email: legal@selbury.com</li>
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