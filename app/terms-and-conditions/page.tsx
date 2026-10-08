import React from 'react';

export default function TermsAndConditionsPage() {
  return (
    <div className="space-y-0">
      <section className="relative pt-36 sm:pt-44 pb-24 bg-[#070e17] text-white overflow-hidden border-b border-white/10">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            <span>LEGAL GOVERNANCE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight font-sans">
            Terms & Conditions
          </h1>
          <p className="text-base text-slate-300 font-light max-w-2xl">
            General B2B commercial terms governing access to Lixbor Auron LLP website services and product inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 font-light text-sm leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Commercial Terms</h2>
            <p>
              By accessing or using the website of <strong>Lixbor Auron LLP</strong>, you agree to comply with and be bound by these Terms and Conditions. These terms apply to all visitors, buyers, suppliers, and trade partners requesting commercial quotes or technical documentation.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Product Specifications & Non-Binding Quotes</h2>
            <p>
              All product specifications, purity percentages, mesh sizes, Certificate of Analysis (COA) excerpts, and application descriptions presented on this website are provided for informational purpose only. Quotations provided via commercial inquiries are non-binding until confirmed in a formal proforma invoice or international trade sales contract signed by authorized signatories of Lixbor Auron LLP.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Trade Discretion & Confidentiality</h2>
            <p>
              Lixbor Auron LLP enforces strict non-disclosure practices across all commercial inquiries, protecting buyer purchasing volumes, target pricing, and proprietary application requirements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Intellectual Property</h2>
            <p>
              The text, layout design, branding, and content structure contained within this website remain the property of Lixbor Auron LLP. Unauthorized copying or redistribution without written consent is strictly prohibited.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
