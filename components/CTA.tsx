import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-primary-700">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white text-balance">
            Simplify compliance today.
          </h2>
          <p className="mt-6 text-xl text-primary-100 text-balance">
            Join hundreds of UK businesses who trust Selbury to keep them compliant and confident.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup" className="inline-flex items-center">
                Start your free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" asChild>
              <Link href="/contact">
                Book a demo
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-sm text-primary-100">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </Container>
    </section>
  )
}