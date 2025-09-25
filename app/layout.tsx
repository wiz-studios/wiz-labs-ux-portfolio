import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Wiz Labs | Premium UI/UX Design Solutions",
    template: "%s | Wiz Labs",
  },
  description:
    "Freelance UI/UX designer specializing in premium digital experiences, product design, and user interface solutions. Contact a freelance UI/UX designer today for conversion-focused designs.",
  keywords: [
    "UI/UX design",
    "product design",
    "user interface design",
    "user experience design",
    "freelance UI designer",
    "freelance UX designer",
    "digital design",
    "web design",
    "mobile app design",
    "conversion optimization",
    "design systems",
    "prototyping",
    "user research",
    "branding",
    "responsive design",
  ],
  authors: [{ name: "Wiz Labs", url: "https://your-domain.com" }],
  creator: "Wiz Labs",
  publisher: "Wiz Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Wiz Labs | Premium UI/UX Design Solutions",
    description:
      "Freelance UI/UX designer specializing in premium digital experiences, product design, and user interface solutions. Contact a freelance UI/UX designer today.",
    siteName: "Wiz Labs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wiz Labs - Premium UI/UX Design Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiz Labs | Premium UI/UX Design Solutions",
    description:
      "Freelance UI/UX designer specializing in premium digital experiences, product design, and user interface solutions.",
    images: ["/og-image.jpg"],
    creator: "@uxdesigner",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
  category: "Design",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.jpg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wiz Labs",
              jobTitle: "Freelance UI/UX Designer",
              description:
                "Freelance UI/UX designer specializing in premium digital experiences, product design, and user interface solutions.",
              url: "https://your-domain.com",
              email: "wiz.labs1@gmail.com",
              sameAs: [
                "https://linkedin.com/in/ux-designer",
                "https://dribbble.com/ux-designer",
                "https://behance.net/ux-designer",
              ],
              knowsAbout: [
                "UI Design",
                "UX Design",
                "Product Design",
                "User Research",
                "Prototyping",
                "Design Systems",
                "Conversion Optimization",
              ],
              offers: {
                "@type": "Service",
                serviceType: "UI/UX Design Services",
                description: "Professional UI/UX design services for web and mobile applications",
                provider: {
                  "@type": "Person",
                  name: "Wiz Labs",
                },
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
