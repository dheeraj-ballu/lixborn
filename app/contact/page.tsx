import React, { Suspense } from 'react';
import { ContactForm } from '../../components/sections/ContactForm';
import { FAQSection } from '../../components/sections/FAQSection';
import { companyDetailFields } from '../../lib/content/contact';
import { companyData } from '../../lib/content/company';

export default function ContactPage() {
  return (
    <div className="space-y-0">
      {/* Hero Banner (Extends to top: 0 behind transparent header) */}
      <section className="relative pt-36 sm:pt-44 pb-24 bg-[#070e17] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#070e17] to-[#070e17] opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            <span>COMMERCIAL ENQUIRIES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight font-sans">
            Speak to Our Trading Desk
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
            Whether you require technical specifications, commercial quotes, COA documentation, or long-term supply contract discussions.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-center">Loading Form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#070e17] text-white rounded-2xl p-8 border border-white/10 space-y-6 shadow-xl">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    CORPORATE DETAILS
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {companyData.legalName}
                  </h3>
                  <p className="text-xs text-slate-300 font-light">
                    Official corporate address and commercial contact channels.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {companyDetailFields.map((field) => (
                    <div
                      key={field.key}
                      className="bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1 sm:gap-4"
                    >
                      <span className="text-slate-400 font-semibold uppercase tracking-wider shrink-0">{field.label}:</span>
                      {field.key === 'email' ? (
                        <a href={`mailto:${field.value}`} className="text-emerald-400 hover:underline font-mono font-medium sm:text-right break-all">
                          {field.value}
                        </a>
                      ) : field.key === 'phone' ? (
                        <a href={`tel:${field.value}`} className="text-emerald-400 hover:underline font-mono font-medium sm:text-right">
                          {field.value}
                        </a>
                      ) : field.key === 'website' && field.value.startsWith('http') ? (
                        <a href={field.value} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-mono font-medium sm:text-right break-all">
                          {field.value}
                        </a>
                      ) : (
                        <span className="text-slate-200 font-mono font-medium sm:text-right break-words">{field.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <FAQSection
        badge="FAQS & HELP"
        title="Commercial Inquiry FAQs"
        subtitle="Common questions answered to assist you before contacting our desk."
        className="py-20 bg-white border-t border-slate-200"
      />
    </div>
  );
}
