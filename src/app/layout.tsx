import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Selbury | UK Personal Finance Guides & Tools",
    template: "%s | Selbury",
  },
  description: "Structured guidance for your financial journey. Clear, practical resources for mortgages, savings, pensions, and more.",
  keywords: ["personal finance", "UK", "mortgage calculator", "stamp duty", "pension", "ISA", "first-time buyer"],
  authors: [{ name: "Selbury" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Selbury",
    title: "Selbury | UK Personal Finance Guides & Tools",
    description: "Structured guidance for your financial journey.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
