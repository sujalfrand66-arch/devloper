import type { Metadata, Viewport } from 'next';
import { Syne, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { site } from '@/data/site';

const display = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const url = 'https://lusuxweb.com';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${site.name} — Creative Code. Powerful Technology.`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'web development',
    'web design studio',
    'UI UX design',
    'full stack development',
    'Next.js developer',
    'Suratgarh web design',
    'Lusux Web',
    'premium website design',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    title: `${site.name} — Creative Code. Powerful Technology.`,
    description: site.description,
    url,
    siteName: site.name,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Creative Code. Powerful Technology.`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: url },
};

export const viewport: Viewport = {
  themeColor: '#070708',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description: site.description,
    url,
    telephone: `+91${site.phones[0]}`,
    address: { '@type': 'PostalAddress', addressLocality: site.location },
    sameAs: [site.instagram, site.whatsappLink],
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="grain font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
