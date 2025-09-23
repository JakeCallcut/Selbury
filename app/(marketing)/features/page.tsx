import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Radar, FileText, CheckSquare, FolderOpen, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Discover all the features that make Selbury the perfect compliance solution for UK small businesses.',
}

const features = [
  {
    icon: Radar,
    title: 'Tailored Compliance Radar',
    description: 'A dynamic radar that pinpoints regulations that actually apply to your business — based on your size, sector, and operations.',
    benefits: [
      'Industry-specific regulation identification',
      'Business size-appropriate requirements',
      'Real-time regulatory change alerts',
      'Automated compliance calendar updates',
    ],
    details: 'Our intelligent system analyzes your business profile and maps it against the UK regulatory landscape. No more guessing which rules apply to you — get a personalized compliance radar that grows with your business.',
  },
  {
    icon: FileText,
    title: 'Plain English Summaries',
    description: 'Understand each requirement at a glance, with clear next steps and links to official guidance.',
    benefits: [
      'Legal jargon translated to plain English',
      'Clear action steps for each requirement',
      'Links to official government guidance',
      'Context-aware explanations',
    ],
    details: 'Every regulation is broken down into simple, actionable language. We explain what it means for your business, what you need to do, and provide direct links to official sources when you need more detail.',
  },
  {
    icon: CheckSquare,
    title: 'Compliance Tracker',
    description: 'Assign owners, set due dates, and track progress in one simple dashboard.',
    benefits: [
      'Task assignment and ownership',
      'Deadline tracking and reminders',
      'Progress monitoring dashboard',
      'Team collaboration tools',
    ],
    details: 'Turn compliance requirements into manageable tasks. Assign responsibilities to team members, set realistic deadlines, and track progress with our intuitive dashboard. Never miss a compliance deadline again.',
  },
  {
    icon: FolderOpen,
    title: 'Resource Library',
    description: 'Download templates, checklists, and reference links curated for UK SMEs.',
    benefits: [
      'Ready-to-use compliance templates',
      'Curated checklists and guides',
      'Regular content updates',
      'Industry-specific resources',
    ],
    details: 'Access our growing library of templates, checklists, and guides — all tailored for UK small businesses. From privacy policy templates to health and safety checklists, we have got you covered.',
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-gray-900 text-balance">
              Everything you need for compliance
            </h1>
            <p className="mt-6 text-xl text-gray-600 text-balance">
              Powerful features designed specifically for UK small businesses who need to stay compliant without the complexity.
            </p>
          </div>
        </Container>
      </section>

      {/* Features Detail */}
      <section className="section-padding">
        <Container>
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900">
                      {feature.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.details}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Placeholder */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0">
                    <CardContent className="p-12 text-center">
                      <feature.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                      <div className="text-gray-500">
                        Feature demonstration
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 text-balance">
              Ready to simplify your compliance?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start your free trial today and see how Selbury can transform your approach to compliance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup" className="inline-flex items-center">
                  Start free trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Book a demo</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}