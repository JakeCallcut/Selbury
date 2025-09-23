import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'

const footerNavigation = {
  main: [
    { name: 'Features', href: '/features' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Logo />
              <p className="mt-4 text-gray-600 max-w-md">
                Selbury helps UK small businesses identify, understand and manage 
                legal obligations — without legal jargon or costly consultants.
              </p>
              <div className="mt-6 space-y-2 text-sm text-gray-500">
                <p>© 2024 Selbury. All rights reserved.</p>
                <p>Registered in England and Wales.</p>
              </div>
            </div>

            {/* Main Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              Made in the UK for UK businesses
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="mailto:hello@selbury.com"
                className="text-sm text-gray-500 hover:text-primary transition-colors duration-200"
              >
                hello@selbury.com
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}