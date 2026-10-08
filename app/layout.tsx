import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HashScrollHandler } from '../components/ui/HashScrollHandler';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['italic', 'normal'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lixborauron.com'),
  title: {
    default: 'Lixbor Auron LLP | Global Commodity Sourcing & Physical Supply Trading',
    template: '%s | Lixbor Auron LLP',
  },
  description:
    'A global independent trading company connecting markets with essential industrial raw materials, Magnesium Oxide (MgO), fertilizers, chemicals, and polymers.',
  keywords: [
    'Lixbor Auron LLP',
    'Magnesium Oxide supplier',
    'MgO grades',
    'Urea trading',
    'Granular Sulphur',
    'Melamine supplier',
    'XLPE compounds',
    'ABS polymer',
    'LDPE trading',
    'international commodity trading India',
  ],
  authors: [{ name: 'Lixbor Auron LLP' }],
  openGraph: {
    title: 'Lixbor Auron LLP | Global Sourcing. Industrial Expertise. Reliable Supply.',
    description: 'Import • Export • Trading • Sourcing • Supply of Chemicals, Fertilizers & Polymers.',
    url: 'https://lixborauron.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'Lixbor Auron LLP',
    images: [
      {
        url: '/images/hero/hero-1.webp',
        width: 1200,
        height: 630,
        alt: 'Lixbor Auron LLP - Global Commodity Sourcing & Physical Supply Trading',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lixbor Auron LLP | Global Commodity Sourcing & Physical Supply Trading',
    description: 'Import • Export • Trading • Sourcing • Supply of Chemicals, Fertilizers & Polymers.',
    images: ['/images/hero/hero-1.webp'],
  },
  icons: {
    icon: '/logo/logo-svg.svg',
    shortcut: '/logo/logo-svg.svg',
    apple: '/logo/logo-png.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-slate-900 font-sans antialiased">
        <HashScrollHandler />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
