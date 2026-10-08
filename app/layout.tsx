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
  title: 'Lixbor Auron LLP | Global Independent Commodities & Industrial Trading',
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
    type: 'website',
    locale: 'en_US',
    siteName: 'Lixbor Auron LLP',
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
