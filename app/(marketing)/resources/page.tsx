import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Download, ExternalLink, BookOpen, Shield, Users, Building } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access templates, guides, and official UK government resources to help your business stay compliant.',
}

const resourceCategories = [
  {
    icon: FileText,
    title: 'Templates & Documents',
    description: 'Ready-to-use templates for common compliance requirements',
    resources: [
      { name: 'Privacy Policy Template', type: 'Template', format: 'DOCX' },
      { name: 'Terms of Service Template', type: 'Template', format: 'DOCX' },
      { name: 'Cookie Policy Template', type: 'Template', format: 'DOCX' },
      { name: 'Data Breach Response Plan', type: 'Template', format: 'PDF' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Guides & Checklists',
    description: 'Step-by-step guides to help you understand and implement compliance',
    resources: [
      { name: 'GDPR Compliance Checklist', type: 'Checklist', format: 'PDF' },
      { name: 'Small Business Health & Safety Guide', type: 'Guide', format: 'PDF' },
      { name: 'Employment Law Essentials', type: 'Guide', format: 'PDF' },
      { name: 'Financial Reporting Requirements', type: 'Checklist', format: 'PDF' },
    ],
  },
  {
    icon: Shield,
    title: 'Industry-Specific Resources',
    description: 'Tailored guidance for specific industries and sectors',
    resources: [
      { name: 'Retail Compliance Handbook', type: 'Guide', format: 'PDF' },
      { name: 'Professional Services Compliance', type: 'Guide', format: 'PDF' },
      { name: 'Manufacturing Safety Standards', type: 'Checklist', format: 'PDF' },
      { name: 'Hospitality Licensing Guide', type: 'Guide', format: 'PDF' },
    ],
  },
]

const officialLinks = [
  {
    title: 'Companies House',
    description: 'Official UK company registration and filing requirements',
    url: 'https://www.gov.uk/government/organisations/companies-house',
  },
  {
    title: 'Information Commissioner\'s Office (ICO)',
    description: 'Data protection and privacy regulations guidance',
    url: 'https://ico.org.uk/',
  },
  {
    title: 'Health and Safety Executive (HSE)',
    description: 'Workplace health and safety regulations and guidance',
    url: 'https://www.hse.gov.uk/',
  },
  {
    title: 'HM Revenue and Customs (HMRC)',
    description: 'Tax obligations and business registration requirements',
    url: 'https://www.gov.uk/government/organisations/hm-revenue-customs',
  },
  {
    title: 'GOV.UK Business Guidance',
    description: 'Comprehensive business guidance and regulations',
    url: 'https://www.gov.uk/browse/business',
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-gray-900 text-balance">
              Compliance resources for UK businesses
            </h1>
            <p className="mt-6 text-xl text-gray-600 text-balance">
              Access our curated collection of templates, guides, and official government resources to help your business stay compliant.
            </p>
          </div>
        </Container>
      </section>

      {/* Resource Categories */}
      <section className="section-padding">
        <Container>
          <div className="space-y-16">
            {resourceCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-gray-900">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.resources.map((resource, idx) => (
                    <Card key={idx} className="hover:shadow-soft-lg transition-shadow duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <FileText className="w-8 h-8 text-primary" />
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {resource.format}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {resource.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {resource.type}
                        </p>
                        <Button size="sm" className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Official Government Resources */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
              Official UK Government Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Direct links to official government agencies and their guidance for UK businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officialLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-soft-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Building className="w-8 h-8 text-primary" />
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {link.description}
                  </p>
                  <Button variant="secondary" size="sm" className="w-full" asChild>
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      Visit Official Site
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding">
        <Container>
          <div className="bg-primary rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="font-serif text-3xl font-semibold text-white mb-4">
              Stay updated with new resources
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Get notified when we add new templates, guides, and resources to help your business stay compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-primary-300 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" className="px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-primary-200 text-sm mt-4">
              No spam, unsubscribe anytime
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}