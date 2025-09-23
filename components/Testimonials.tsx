import { Container } from '@/components/ui/container'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Selbury transformed how we handle compliance. What used to take weeks of research now takes minutes.",
    author: "Sarah Mitchell",
    role: "Director, Mitchell & Co Accounting",
    company: "London",
    rating: 5,
  },
  {
    quote: "Finally, compliance guidance that doesn't require a law degree to understand. The plain English summaries are brilliant.",
    author: "James Thompson",
    role: "Managing Director",
    company: "Thompson Construction Ltd",
    rating: 5,
  },
  {
    quote: "The tailored compliance radar is exactly what our growing business needed. It only shows us what's relevant.",
    author: "Emma Rodriguez",
    role: "Operations Manager",
    company: "Digital Marketing Solutions",
    rating: 5,
  },
]

const pullQuote = {
  quote: "Selbury gave us confidence that we're doing things right. It's like having a compliance expert on tap, but without the consultant fees.",
  author: "David Chen",
  role: "Founder & CEO, TechStart Solutions",
}

export function Testimonials() {
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 text-balance">
            What our customers say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join hundreds of UK businesses who trust Selbury for their compliance needs.
          </p>
        </div>

        {/* Pull Quote */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white border-0 shadow-soft-lg">
            <CardContent className="p-8 lg:p-12 text-center">
              <Quote className="w-8 h-8 text-primary mx-auto mb-6" />
              <blockquote className="font-serif text-xl lg:text-2xl text-gray-900 leading-relaxed mb-6">
                "{pullQuote.quote}"
              </blockquote>
              <div className="text-gray-600">
                <div className="font-semibold">{pullQuote.author}</div>
                <div className="text-sm">{pullQuote.role}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 text-gray-900 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}