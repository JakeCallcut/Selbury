import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Selbury and our mission to provide structured, practical personal finance guidance for the UK.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-semibold text-foreground mb-8">About Selbury</h1>
      
      <div className="prose prose-lg max-w-none space-y-6 text-foreground">
        <p className="text-xl text-muted leading-relaxed">
          Selbury provides structured, practical guidance on personal finance topics 
          that matter to people in the United Kingdom.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Our Approach</h2>
        <p className="text-muted leading-relaxed">
          We believe financial information should be accessible, clear, and free from 
          unnecessary complexity. Our guides break down topics into structured, actionable 
          steps. Our tools help you run the numbers with complete privacy—everything 
          happens in your browser.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">What We Cover</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted">
          <li>Buying your first home in the UK</li>
          <li>Understanding mortgages and affordability</li>
          <li>Tax-efficient saving with ISAs</li>
          <li>Building a pension for retirement</li>
          <li>Budgeting and financial planning</li>
          <li>Self-employment and tax basics</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4">What We Don&apos;t Do</h2>
        <p className="text-muted leading-relaxed">
          Selbury is an educational resource, not a financial advisory service. We do not:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted">
          <li>Provide personalised financial advice</li>
          <li>Recommend specific products or providers</li>
          <li>Make investment decisions on your behalf</li>
          <li>Store any of your personal financial data</li>
        </ul>
        <p className="text-muted leading-relaxed">
          For decisions about your specific circumstances, we always recommend consulting 
          a qualified, regulated financial adviser.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Privacy First</h2>
        <p className="text-muted leading-relaxed">
          We take privacy seriously. Our tools run entirely in your browser—no data 
          is sent to our servers or stored anywhere. When you close the page, your inputs 
          are gone. We don&apos;t track you across the web or sell your information.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Get in Touch</h2>
        <p className="text-muted leading-relaxed">
          Have a question or suggestion? We&apos;d love to hear from you.
        </p>
        <p className="text-muted">
          Email: <a href="mailto:hello@selbury.co.uk" className="text-primary hover:underline">hello@selbury.co.uk</a>
        </p>
      </div>
    </div>
  );
}
