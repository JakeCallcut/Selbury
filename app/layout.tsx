import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Selbury - Stay compliant. Stay confident.',
    template: '%s | Selbury'
  },
  description: 'Selbury helps UK small businesses identify, understand and manage legal obligations — without legal jargon or costly consultants.',
  keywords: ['compliance', 'UK business', 'SME', 'legal obligations', 'regulations', 'small business'],
  authors: [{ name: 'Selbury' }],
  creator: 'Selbury',
  publisher: 'Selbury',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://selbury.com',
    siteName: 'Selbury',
    title: 'Selbury - Stay compliant. Stay confident.',
    description: 'Selbury helps UK small businesses identify, understand and manage legal obligations — without legal jargon or costly consultants.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Selbury - Stay compliant. Stay confident.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selbury - Stay compliant. Stay confident.',
    description: 'Selbury helps UK small businesses identify, understand and manage legal obligations — without legal jargon or costly consultants.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://selbury.com',
    languages: {
      'en-GB': 'https://selbury.com',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Selbury",
              "url": "https://selbury.com",
              "logo": "https://selbury.com/logo.png",
              "description": "Selbury helps UK small businesses identify, understand and manage legal obligations — without legal jargon or costly consultants.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hello@selbury.com"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}