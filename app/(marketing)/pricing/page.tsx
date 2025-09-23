import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for UK small businesses. Start with our free trial.',
}

const plans = [
  {
    name: 'Starter',
    price: '£29',
    period: 'per month',
    description: 'Perfect for small businesses just getting started with compliance',
    features: [
      'Compliance radar for up to 10 regulations',
      'Plain English summaries',
      'Basic task tracking',
      'Email support',
      'Resource library access',
    ],
    cta: 'Start free trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '£79',
    period: 'per month',
    description: 'Ideal for growing businesses with more complex compliance needs',
    features: [
      'Unlimited compliance radar',
      'Advanced task management',
      'Team collaboration tools',
      'Priority email support',
      'Custom templates',
      'Compliance calendar',
      'Regulatory change alerts',
    ],
    cta: 'Start free trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored solutions for larger organisations with specific requirements',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced reporting',
      'Priority phone support',
      'Custom training sessions',
      'SLA guarantees',
    ],
    cta: 'Contact sales',
    popular: false,
  },
]

const faqs = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All plans come with a 14-day free trial. No credit card required to get started.',
  },
  {
    question: 'Can I change my plan at any time?',
    answer: 'Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your account settings.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes, we offer a 20% discount when you pay annually. Contact us to set up annual billing.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards, as well as direct debit for UK customers.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take security seriously. All data is encrypted in transit and at rest, and we are SOC 2 Type II compliant.',
  },
  {
    question: 'What happens if I cancel?',
    answer: 'You can cancel anytime. Your account remains active until the end of your billing period, and you can export your data.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-gray-900 text-balance">
              Simple, transparent pricing
            </h1>
            <p className="mt-6 text-xl text-gray-600 text-balance">
              Choose the plan that fits your business. All plans include a 14-day free trial.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${
                  plan.popular 
                    ? 'border-primary shadow-soft-lg scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <h3 className="font-serif text-2xl font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-600">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular ? 'bg-primary hover:bg-primary-700' : ''
                    }`}
                    variant={plan.popular ? 'primary' : 'secondary'}
                    asChild
                  >
                    <Link 
                      href={plan.cta === 'Contact sales' ? '/contact' : '/signup'}
                      className="inline-flex items-center justify-center"
                    >
                      {plan.cta}
                      {plan.cta !== 'Contact sales' && (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
              Have questions about pricing?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to help you choose the right plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Start free trial</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}