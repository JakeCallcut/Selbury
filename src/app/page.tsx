import { Hero, FeaturedGuides, FeaturedTools, FeaturedProduct, EmailSignup, AboutSection } from '@/components/sections';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <AboutSection />
      <FeaturedGuides />
      <FeaturedTools />
      <FeaturedProduct />
      <EmailSignup />
    </div>
  );
}
