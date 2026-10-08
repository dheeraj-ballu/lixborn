import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { VeritaseHero } from '../components/sections/VeritaseHero';
import { VeritaseCards } from '../components/sections/VeritaseCards';
import { FAQSection } from '../components/sections/FAQSection';

export const metadata: Metadata = {
  title: 'Global Commodity Sourcing & Physical Supply Trading | Lixbor Auron LLP',
  description:
    'Independent international commodities trading company connecting industrial buyers with certified Magnesium Oxide (MgO), fertilizers, chemicals, and polymers.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lixbor Auron LLP | Global Commodity Sourcing & Physical Supply Trading',
    description:
      'Independent international commodities trading company connecting industrial buyers with certified Magnesium Oxide (MgO), fertilizers, chemicals, and polymers.',
    url: 'https://lixborauron.com',
    siteName: 'Lixbor Auron LLP',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero-1.webp',
        width: 1200,
        height: 630,
        alt: 'Lixbor Auron LLP - Global Commodity Sourcing and Physical Trade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lixbor Auron LLP | Global Commodity Sourcing & Physical Supply Trading',
    description:
      'Independent international commodities trading company connecting industrial buyers with certified Magnesium Oxide (MgO), fertilizers, chemicals, and polymers.',
    images: ['/images/hero/hero-1.webp'],
  },
};

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Veritase Fullscreen Hero Carousel */}
      <VeritaseHero />

      {/* 2. "The Essence of Who We Are" (Veritase Screenshot 3 exact layout) */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Title & Story Paragraphs */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 block">
                DISCOVER LIXBOR AURON
              </span>
              <h2 className="text-4xl sm:text-5xl font-light text-slate-900 leading-tight">
                The Essence of <span className="font-serif-italic font-normal">Who We Are</span>
              </h2>
              <div className="space-y-4 text-base text-slate-600 font-light leading-relaxed">
                <p>
                  Lixbor Auron LLP is an independent international commodities trading enterprise focused on facilitating the efficient movement of industrial raw materials, essential chemicals, fertilizers, and polymers across global markets.
                </p>
                <p>
                  While incorporated in 2026 as a modern trading platform, our business foundation traces back to 1989 in the iron and steel industry. Our vertical integration across logistics, verified sourcing, and physical supply management gives us greater control at each stage of the trade, resulting in consistent, reliable outcomes for our global partners.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Link Rows with Arrows (Veritase Screenshot 3) */}
            <div className="lg:col-span-6 border-t border-slate-200 lg:border-t-0">
              <div className="divide-y divide-slate-200">
                <Link href="/products" className="veritase-row-link group">
                  <span>International Commodity Trading</span>
                  <span className="text-slate-400 group-hover:text-emerald-500 font-mono transition-colors">↗</span>
                </Link>
                <Link href="/products#mgo-focus" className="veritase-row-link group">
                  <span>Magnesium Oxide (MgO) Sourcing Program</span>
                  <span className="text-slate-400 group-hover:text-emerald-500 font-mono transition-colors">↗</span>
                </Link>
                <Link href="/products#chemicals-fertilizers" className="veritase-row-link group">
                  <span>Chemicals & Fertilizers Distribution</span>
                  <span className="text-slate-400 group-hover:text-emerald-500 font-mono transition-colors">↗</span>
                </Link>
                <Link href="/products#polymers" className="veritase-row-link group">
                  <span>Polymer Resins & XLPE Cable Compounds</span>
                  <span className="text-slate-400 group-hover:text-emerald-500 font-mono transition-colors">↗</span>
                </Link>
                <Link href="/who-we-are" className="veritase-row-link group">
                  <span>End-to-End Maritime & Storage Logistics</span>
                  <span className="text-slate-400 group-hover:text-emerald-500 font-mono transition-colors">↗</span>
                </Link>
                <Link href="/contact" className="veritase-row-link group">
                  <span>Commercial Integrity & Trade Discretion</span>
                  <span className="text-slate-400 group-hover:text-emerald-500 font-mono transition-colors">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Driving Value Across Markets" (4 Tall Cards Grid - Veritase Screenshot 3) */}
      <VeritaseCards />

      {/* 4. "Our People & Leadership" (Veritase Screenshot 3 exact layout) */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 block">
                OUR TEAM
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-slate-900 leading-tight">
                Our <span className="font-serif-italic font-normal">People & Heritage</span>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base text-slate-600 font-light leading-relaxed">
              <p className="text-slate-900 font-normal">
                We take a rigorous and selective approach to building our trading matrix, bringing together highly experienced and talented professionals from industrial manufacturing, trade finance, and international logistics.
              </p>
              <p>
                Our group leadership traces its origin back to 1989 in the Indian iron and steel manufacturing sector. Today, we combine deep technical product insight with practical execution capability across global markets, enabling a streamlined structure with a sharply focused ambition to deliver superior B2B outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions Section */}
      <FAQSection
        badge="FAQS & INFORMATION"
        title="Any questions?"
        subtitle="Key insights into our commodities, commercial process, quality standards, and sourcing foundation."
      />
    </div>
  );
}
