import { Hero } from '@/components/Hero'
import { FeatureCards } from '@/components/FeatureCards'
import { HowItWorks } from '@/components/HowItWorks'
import { WhySelbury } from '@/components/WhySelbury'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stay compliant. Stay confident.',
  description: 'Selbury helps UK small businesses identify, understand and manage legal obligations — without legal jargon or costly consultants.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <WhySelbury />
      <Testimonials />
      <CTA />
    </>
  )
}