import React from 'react';
import Link from 'next/link';
import { Icon } from '../ui/Icons';
import { homeCTAData } from '../../lib/content/home';

export const CTASection: React.FC = () => {
  return (
    <section className="relative bg-navy-950 text-white py-20 overflow-hidden border-t border-b border-white/10">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-navy-950 to-navy-950" />
      <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            START A CONVERSATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
            {homeCTAData.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto">
            {homeCTAData.description}
          </p>
        </div>

        <div>
          <Link href={homeCTAData.buttonHref} className="btn-pill btn-pill-primary text-sm py-4 px-8">
            <span>{homeCTAData.buttonText}</span>
            <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
