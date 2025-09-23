import { Container } from '@/components/ui/container'
import { Shield, PoundSterling, Heart, Target, BookOpen, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Reduce risk',
    description: 'Stay ahead of regulatory changes and avoid costly compliance failures.',
  },
  {
    icon: PoundSterling,
    title: 'Save on consultancy costs',
    description: 'Get expert guidance without the hefty consultant fees.',
  },
  {
    icon: Heart,
    title: 'Peace of mind',
    description: 'Sleep better knowing your business is compliant and protected.',
  },
  {
    icon: Target,
    title: 'Built for UK SMEs',
    description: 'Designed specifically for small and medium businesses in the UK.',
  },
]

const differentiators = [
  {
    icon: BookOpen,
    title: 'Plain English',
    description: 'No legal jargon — just clear, actionable guidance you can understand.',
  },
  {
    icon: Target,
    title: 'Tailored to your business',
    description: 'Get regulations that actually apply to your specific industry and size.',
  },
  {
    icon: Zap,
    title: 'Action-ready tasks',
    description: 'Turn compliance requirements into manageable tasks with clear next steps.',
  },
]

export function WhySelbury() {
  return (
    <section className="section-padding">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 text-balance">
            Why Selbury?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Built specifically for UK small businesses who need compliance clarity without the complexity.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* What Makes Us Different */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900">
              What makes us different
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}