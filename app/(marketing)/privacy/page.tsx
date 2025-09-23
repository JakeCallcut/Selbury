import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { readFileSync } from 'fs'
import { join } from 'path'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h1 className="font-serif text-4xl font-semibold text-gray-900 mb-8">
                Privacy Policy
              </h1>
              <p className="text-gray-500 mb-8">Last updated: September 21, 2024</p>
              
              <div className="space-y-8 text-gray-700 leading-relaxed">
                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                  <p>
                    Selbury ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our compliance management platform.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                  
                  <h3 className="font-semibold text-lg text-gray-900 mt-6 mb-3">Personal Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contact Information</strong>: Name, email address, phone number, company name</li>
                    <li><strong>Account Information</strong>: Username, password, profile information</li>
                    <li><strong>Business Information</strong>: Industry, company size, compliance requirements</li>
                    <li><strong>Communication Data</strong>: Messages, feedback, support requests</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-gray-900 mt-6 mb-3">Technical Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Device Information</strong>: IP address, browser type, operating system</li>
                    <li><strong>Usage Data</strong>: Pages visited, features used, time spent on platform</li>
                    <li><strong>Cookies and Tracking</strong>: Session data, preferences, analytics information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Provide and maintain our compliance management services</li>
                    <li>Process your account registration and manage your subscription</li>
                    <li>Send you important updates about our services</li>
                    <li>Provide customer support and respond to your enquiries</li>
                    <li>Improve our platform and develop new features</li>
                    <li>Comply with legal obligations and regulatory requirements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
                  <p>We do not sell, trade, or rent your personal information. We may share your information in these circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li><strong>Service Providers</strong>: With trusted third parties who assist in operating our platform</li>
                    <li><strong>Legal Requirements</strong>: When required by law or to protect our rights</li>
                    <li><strong>Business Transfers</strong>: In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Consent</strong>: When you have given us explicit permission</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                  <p>We implement appropriate technical and organisational measures to protect your information, including:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Staff training on data protection</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                  <p>Under UK data protection law, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your information</li>
                    <li>Restrict processing of your information</li>
                    <li>Data portability</li>
                    <li>Object to processing</li>
                    <li>Withdraw consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                  <p>If you have questions about this Privacy Policy, please contact us:</p>
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