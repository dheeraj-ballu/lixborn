import React from 'react';

export default function PrivacyNoticePage() {
  return (
    <div className="space-y-0">
      <section className="relative pt-36 sm:pt-44 pb-24 bg-[#070e17] text-white overflow-hidden border-b border-white/10">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            <span>DATA PRIVACY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight font-sans">
            Privacy Notice
          </h1>
          <p className="text-base text-slate-300 font-light max-w-2xl">
            How Lixbor Auron LLP collects, handles, and protects commercial user data and business contact information.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 font-light text-sm leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Information Collection</h2>
            <p>
              When you submit a commercial inquiry through our website, Lixbor Auron LLP collects business contact details including your full name, company name, corporate email address, phone number, and inquiry message details.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Commercial Use of Data</h2>
            <p>
              Information submitted via inquiry forms is strictly used to evaluate procurement requirements, prepare technical spec sheets or price quotes, and communicate regarding potential B2B commodity transactions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Non-Disclosure & Third-Party Sharing</h2>
            <p>
              We do not sell, rent, or trade your corporate information to third-party marketers. Data may only be shared with logistics partners, customs clearance brokers, or lab testing facilities when strictly necessary to execute a trade transaction.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Data Security</h2>
            <p>
              Lixbor Auron LLP employs industry-standard technical safeguards to protect your business information against unauthorized access, loss, or misuse.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Notice or your trade data, please contact our trade desk using the official email address listed on our contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
