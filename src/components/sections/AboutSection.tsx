export function AboutSection() {
  return (
    <section className="py-12 border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          What is Selbury?
        </h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Selbury provides structured, practical guidance on personal finance topics 
            that matter to people in the UK. We focus on clarity over complexity, 
            helping you understand the fundamentals without overwhelming jargon.
          </p>
          <p>
            Our guides break down topics like buying your first home, understanding 
            ISAs, and managing tax as a self-employed worker. Our calculators help 
            you run the numbers—entirely in your browser, with no data stored.
          </p>
          <p>
            We&apos;re not financial advisers and don&apos;t provide personalised advice. 
            What we offer is clear, well-researched educational content to help 
            you make more informed decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
