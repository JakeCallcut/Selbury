'use client';

import { useState, useMemo } from 'react';
import { Input, Card, CardContent } from '@/components/ui';
import { GlossaryTerm } from '@/types/glossary';

interface GlossarySearchProps {
  terms: GlossaryTerm[];
}

const CATEGORIES = [
  'All',
  'Borrowing',
  'General',
  'Investing',
  'Mortgages',
  'Pensions',
  'Property',
  'Savings',
  'Tax',
];

export function GlossarySearch({ terms }: GlossarySearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTerms = useMemo(() => {
    return terms.filter((item) => {
      const matchesSearch = searchQuery === '' || 
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || 
        item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [terms, searchQuery, selectedCategory]);

  const groupedTerms = useMemo(() => {
    const groups: { [key: string]: GlossaryTerm[] } = {};
    
    filteredTerms.forEach((term) => {
      const firstLetter = term.term[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(term);
    });
    
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredTerms]);

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="sticky top-20 z-10 bg-background py-4 border-b border-border -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <Input
            type="search"
            placeholder="Search terms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-lg"
          />
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-background'
                    : 'bg-card border border-border text-foreground hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted">
        {filteredTerms.length} {filteredTerms.length === 1 ? 'term' : 'terms'} found
        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        {searchQuery && ` matching "${searchQuery}"`}
      </p>

      {/* Glossary Terms */}
      {filteredTerms.length === 0 ? (
        <Card variant="bordered">
          <CardContent className="py-12 text-center">
            <p className="text-muted">
              No terms found. Try adjusting your search or filter.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          {groupedTerms.map(([letter, letterTerms]) => (
            <div key={letter}>
              <h2 className="text-2xl font-semibold text-primary mb-4 sticky top-36 bg-background py-2">
                {letter}
              </h2>
              <div className="space-y-4">
                {letterTerms.map((item) => (
                  <Card key={item.term} variant="bordered" className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {highlightMatch(item.term, searchQuery)}
                        </h3>
                        <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-muted leading-relaxed">
                        {highlightMatch(item.definition, searchQuery)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query) return text;
  
  const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => 
    regex.test(part) ? (
      <mark key={index} className="bg-accent/30 text-foreground px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
