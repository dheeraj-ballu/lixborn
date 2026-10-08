import React from 'react';
import Link from 'next/link';
import { FAQSection } from '../../components/sections/FAQSection';

export const metadata = {
  title: 'Frequently Asked Questions | Lixbor Auron LLP',
  description: 'Find clear answers to questions about Lixbor Auron LLP products, business experience, inquiry handling, quality standards, and quotation process.',
};

export default function FAQPage() {
  return (
    <div className="space-y-0">
      {/* Hero Banner (Extends to top: 0 behind transparent header) */}
      <section className="relative pt-36 sm:pt-44 pb-24 bg-[#070e17] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#070e17] to-[#070e17] opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            <span>KNOWLEDGE BASE & CLEAR ANSWERS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight font-sans">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
            Everything you need to know about our industrial commodities, sourcing heritage, quality assurance, and inquiry handling.
          </p>
        </div>
      </section>

      {/* Main FAQ Accordion Component with Search enabled */}
      <FAQSection
        badge="FAQS & INFORMATION"
        title="Commercial & Technical Insights"
        subtitle="Search or browse our verified responses to common partner questions."
        showSearch={true}
        showCategoryBadge={true}
        className="py-24 bg-slate-50"
      />

      {/* Contact CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 block">
            STILL HAVE QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900">
            Connect directly with our <span className="font-serif-italic font-normal">Trading Desk</span>
          </h2>
          <p className="text-base text-slate-600 font-light max-w-xl mx-auto leading-relaxed">
            Our specialized team is available to assist with product specifications, custom bulk quotations, and technical compliance queries.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="btn-veritase inline-block px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase">
              SPEAK TO OUR DESK
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
