import type { Metadata } from 'next';
import Link from 'next/link';
import { GlossarySearch } from '@/components/calculators/GlossarySearch';
import glossaryData from '@/data/glossary.json';
import { GlossaryTerm } from '@/types/glossary';

export const metadata: Metadata = {
  title: 'UK Financial Terms Glossary',
  description: 'A searchable glossary of UK personal finance terms, from AER to Yield. Understand mortgages, pensions, tax, and investing terminology.',
};

export default function GlossaryPage() {
  const terms: GlossaryTerm[] = glossaryData;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link href="/tools" className="text-sm text-muted hover:text-primary transition-colors">
          ← Back to Tools
        </Link>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-4">
          UK Financial Terms Glossary
        </h1>
        <p className="text-muted">
          A comprehensive glossary of UK personal finance terminology. Search by keyword 
          or browse by category to understand the jargon behind mortgages, pensions, 
          tax, investing, and more.
        </p>
      </div>

      <GlossarySearch terms={terms} />

      <div className="mt-12 p-4 bg-primary/5 border border-primary/20">
        <p className="text-sm text-foreground">
          <strong>Note:</strong> Definitions are for general educational purposes and may 
          not reflect the latest regulatory changes. Tax rules and financial regulations 
          change frequently—always verify current rules with official sources.
        </p>
      </div>
    </div>
  );
}
