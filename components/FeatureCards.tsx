import { Container } from '@/components/ui/container'
import { Card, CardContent } from '@/components/ui/card'
import { Radar, FileText, CheckSquare, FolderOpen } from 'lucide-react'

const features = [
  {
    title: 'Tailored Compliance Radar',
    description: 'A dynamic radar that pinpoints regulations that actually apply to your business — based on your size, sector, and operations.',
    icon: Radar,
  },
  {
    title: 'Plain English Summaries',
    description: 'Understand each requirement at a glance, with clear next steps and links to official guidance.',
    icon: FileText,
  },
  {
    title: 'Compliance Tracker',
    description: 'Assign owners, set due dates, and track progress in one simple dashboard.',
    icon: CheckSquare,
  },
  {
    title: 'Resource Library',
    description: 'Download templates, checklists, and reference links curated for UK SMEs.',
    icon: FolderOpen,
  },
]

export function FeatureCards() {
  return (
    <section className="section-padding">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 text-balance">
            Everything you need to stay compliant
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Built specifically for UK small businesses who need compliance clarity without the complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-soft-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}