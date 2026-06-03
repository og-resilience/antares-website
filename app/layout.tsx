import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { SERVICE_LINES, SITE } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const ogImage = {
  url: "/images/home/main-page-hero.jpg",
  width: 2560,
  height: 1136,
  alt: "Electrical infrastructure planning visual for Antares Resilience",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Electrical preconstruction advisory",
  classification: "Electrical estimating, preconstruction advisory, infrastructure risk review",
  keywords: [
    "electrical estimating",
    "electrical estimate review",
    "independent estimate review",
    "electrical preconstruction",
    "scope reconciliation",
    "critical power feasibility",
    "infrastructure advisory",
    "electrical contractor estimate review",
    "general contractor preconstruction support",
    "Pacific Northwest",
    "Snohomish Washington",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1d24",
  width: "device-width",
  initialScale: 1,
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: `${SITE.name} LLC`,
  url: SITE.url,
  logo: `${SITE.url}/images/brand/antares-resilience-logo-v01.png`,
  image: `${SITE.url}/images/home/main-page-hero.jpg`,
  description: SITE.description,
  email: SITE.contactEmail,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.locality,
    addressRegion: SITE.state,
    addressCountry: SITE.country,
  },
  founder: {
    "@type": "Person",
    name: "Oliver Gribble",
    jobTitle: "Founder",
  },
  areaServed: [SITE.region, SITE.state, "United States"],
  knowsAbout: [
    ...SERVICE_LINES,
    "Division 26 electrical scope review",
    "Division 27 communications scope review",
    "Division 28 electronic safety and security scope review",
    "NEC and NFPA context",
  ],
  makesOffer: SERVICE_LINES.map((name) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[var(--color-accent)] focus:text-[var(--color-accent-fg)] focus:px-3 focus:py-2 focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {plausibleDomain ? (
          <Script
            strategy="afterInteractive"
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
      </body>
    </html>
  );
}
