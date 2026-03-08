export function AboutSection() {
  return (
    <section className="py-12 border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          What is Selbury?
        </h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Most people in the UK leave education without meaningful personal finance 
            training. fewer than one in four adults could 
            answer at least half of a basic financial literacy quiz correctly and 
            86% believe the subject should be part of the school curriculum.
          </p>
          <p>
            Selbury exists to fill that gap. Our guides cover topics like buying your 
            first home, understanding ISAs, and managing tax as a self-employed worker. 
            Our tools help you run the numbers.
          </p>
          <p>
            We are not financial advisors and do not provide personalised advice. What 
            we offer is clear, well-researched educational content to help you make more 
            informed decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
