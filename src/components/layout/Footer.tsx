import Link from 'next/link';

const footerLinks = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/privacy', label: 'Privacy Policy' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-semibold text-primary">
              Selbury
            </Link>
            <p className="mt-2 text-sm text-muted">
              Structured guidance for your financial journey with no ads on any tier.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Contact</h4>
            <a
              href="mailto:hello@selbury.co.uk"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              hello@selbury.co.uk
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted text-center">
            © {currentYear} Selbury. All rights reserved.
          </p>
          <p className="text-xs text-muted text-center mt-2">
            Content is for educational purposes only and does not constitute financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
