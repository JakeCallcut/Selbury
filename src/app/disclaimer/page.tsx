import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Important information about the content provided on Selbury.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-semibold text-foreground mb-8">Disclaimer</h1>
      
      <div className="space-y-8 text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Educational Content Only
          </h2>
          <p>
            The content provided on Selbury, including all articles, guides, calculators, 
            and downloadable products, is for general educational and informational purposes 
            only. It is not intended to be, and should not be construed as, financial, tax, 
            legal, or investment advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Not Financial Advice
          </h2>
          <p>
            Selbury is not authorised or regulated by the Financial Conduct Authority (FCA) 
            or any other regulatory body to provide financial advice. The information we 
            provide does not take into account your individual circumstances, financial 
            situation, or objectives.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            No Personalised Recommendations
          </h2>
          <p>
            We do not provide personalised recommendations. Our content is general in nature 
            and may not be suitable for your specific circumstances. Before making any 
            financial decisions, you should consider seeking advice from a qualified, 
            regulated financial adviser who can assess your individual needs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Seek Professional Advice
          </h2>
          <p>
            For matters relating to mortgages, pensions, investments, tax planning, or any 
            other financial products and services, we strongly recommend that you consult 
            with appropriately qualified professionals, including:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Independent Financial Advisers (IFAs) regulated by the FCA</li>
            <li>Qualified accountants for tax matters</li>
            <li>Solicitors for legal matters</li>
            <li>Mortgage brokers for mortgage advice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Calculator Limitations
          </h2>
          <p>
            Our calculators are designed to provide estimates and illustrations only. They 
            use simplified assumptions and may not reflect your actual circumstances. 
            Results should be used as a starting point for further research and should 
            not be relied upon for making financial decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Accuracy of Information
          </h2>
          <p>
            While we strive to ensure the accuracy of the information provided, we make 
            no representations or warranties of any kind, express or implied, about the 
            completeness, accuracy, reliability, or suitability of the information. Tax 
            rules, regulations, and financial products change frequently, and information 
            may become outdated.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            No Liability
          </h2>
          <p>
            To the fullest extent permitted by law, Selbury shall not be liable for any 
            loss or damage arising from your use of, or reliance on, the information 
            provided on this website or in our products.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            External Links
          </h2>
          <p>
            Our website may contain links to external websites. We are not responsible 
            for the content or privacy practices of these external sites.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm">
            Last updated: March 2026
          </p>
          <p className="text-sm mt-2">
            If you have any questions about this disclaimer, please contact us at{' '}
            <a href="mailto:hello@selbury.co.uk" className="text-primary hover:underline">
              hello@selbury.co.uk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
