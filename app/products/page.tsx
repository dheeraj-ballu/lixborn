import React from 'react';
import Link from 'next/link';
import { productsData, mgoFlagshipGrades } from '../../lib/content/products';

export default function ProductsPage() {
  const chemicalsAndFertilizers = productsData.filter((p) => p.category === 'Chemicals & Fertilizers');
  const polymers = productsData.filter((p) => p.category === 'Polymers');

  return (
    <div className="space-y-0">
      {/* 1. Page Hero (Extends to top: 0 behind transparent header) */}
      <section className="relative pt-36 sm:pt-44 pb-24 bg-[#070e17] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#070e17] to-[#070e17] opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            <span>INDUSTRIAL PORTFOLIO</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight font-sans">
            Chemicals, Fertilizers & Polymers
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
            Certified raw materials sourced directly from verified international producers, engineered for high-performance processing.
          </p>
        </div>
      </section>

      {/* 2. Flagship MgO Program */}
      <section id="mgo-focus" className="py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 block">
              CORE PRODUCT FOCUS
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 leading-tight font-sans">
              Magnesium Oxide (MgO) Program
            </h2>
            <p className="text-base text-slate-600 font-light max-w-2xl">
              Lixbor Auron LLP’s primary core product focus. We source and supply high-purity MgO across three distinct grades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mgoFlagshipGrades.map((grade) => (
              <div key={grade.code} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-emerald-500 transition-colors">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block">{grade.code}</span>
                  <h3 className="text-xl font-bold text-slate-900">{grade.name}</h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">{grade.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-2">Key Applications:</span>
                  <ul className="space-y-1">
                    {grade.applications.map((app, i) => (
                      <li key={i} className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Chemicals & Fertilizers */}
      <section id="chemicals-fertilizers" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 block">
              CATEGORY 01
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 leading-tight font-sans">
              Chemicals & Fertilizers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chemicalsAndFertilizers.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between hover:border-emerald-500 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest">{p.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{p.fullDescription}</p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">Applications:</span>
                    <div className="flex flex-wrap gap-2">
                      {p.keyApplications.map((app, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <Link href={`/contact?product=${encodeURIComponent(p.name)}`} className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-emerald-600 transition-colors">
                    <span>Enquire For Specifications</span>
                    <span className="btn-circle-arrow-dark group-hover:bg-slate-900 group-hover:text-white">↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Polymers & Resins */}
      <section id="polymers" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 block">
              CATEGORY 02
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 leading-tight font-sans">
              Polymers & Resins
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {polymers.map((p) => (
              <div key={p.id} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between hover:border-emerald-500 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest">{p.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{p.fullDescription}</p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">Applications:</span>
                    <div className="flex flex-wrap gap-2">
                      {p.keyApplications.map((app, idx) => (
                        <span key={idx} className="bg-white text-slate-700 border border-slate-200 text-xs px-2.5 py-1 rounded-md font-medium">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex justify-end">
                  <Link href={`/contact?product=${encodeURIComponent(p.name)}`} className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-emerald-600 transition-colors">
                    <span>Enquire For Specifications</span>
                    <span className="btn-circle-arrow-dark group-hover:bg-slate-900 group-hover:text-white">↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
