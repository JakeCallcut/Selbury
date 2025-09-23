import { Container } from '@/components/ui/container'
import { CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Tell us about your business',
    description: 'Share your industry, size, and key operations. Takes just 2 minutes.',
  },
  {
    number: '02',
    title: 'Get your tailored compliance radar',
    description: 'We identify relevant regulations and requirements specific to your business.',
  },
  {
    number: '03',
    title: 'Track and manage tasks with ease',
    description: 'Assign responsibilities, set deadlines, and monitor your compliance progress.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 text-balance">
            How it works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get up and running with Selbury in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-2xl font-bold text-xl">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <h3 className="font-semibold text-xl text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8 -z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-primary bg-primary/10 px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>No credit card required • 14-day free trial</span>
          </div>
        </div>
      </Container>
    </section>
  )
}