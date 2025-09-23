import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ArrowRight, Play } from 'lucide-react'

const socialProof = [
  "Trusted by 500+ UK businesses",
  "SOC 2 Type II compliant",
  "GDPR ready",
  "UK-based support"
]

export function Hero() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight text-balance">
            Stay compliant. Stay confident.
          </h1>
          
          {/* Subheadline */}
          <p className="mt-6 text-xl sm:text-2xl text-gray-600 leading-relaxed text-balance max-w-3xl mx-auto">
            Selbury helps UK small businesses identify, understand and manage legal obligations — 
            without legal jargon or costly consultants.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/signup" className="inline-flex items-center">
                Start free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="#how-it-works" className="inline-flex items-center">
                <Play className="mr-2 h-5 w-5" />
                See how it works
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16">
            <p className="text-sm text-gray-500 font-medium mb-6">
              Trusted by UK small businesses
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
              {socialProof.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}