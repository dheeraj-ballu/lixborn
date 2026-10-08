'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '../ui/Logo';
import { Icon } from '../ui/Icons';
import { companyData, mainNavLinks, footerLegalLinks } from '../../lib/content/company';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      {/* Veritase Dark Full-Width Contact Banner above Footer */}
      <div className="bg-navy-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-white/10">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl sm:text-6xl font-serif-italic font-normal text-white">
            Contact Us
          </h2>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <span>➔ Speak with our trade team</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Clean White Footer Grid (Exact Veritase Screenshot 3 Layout) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-200">
          {/* Column 1: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-emerald-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/who-we-are" className="hover:text-emerald-600 transition-colors">
                  Our History (1989 - 2026)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Site Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              SITE INFORMATION
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              {footerLegalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-emerald-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Business */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              OUR BUSINESS
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <Link href="/products#mgo-focus" className="hover:text-emerald-600 transition-colors">
                  Magnesium Oxide (MgO) Program
                </Link>
              </li>
              <li>
                <Link href="/products#chemicals-fertilizers" className="hover:text-emerald-600 transition-colors">
                  Chemicals & Fertilizers
                </Link>
              </li>
              <li>
                <Link href="/products#polymers" className="hover:text-emerald-600 transition-colors">
                  Polymers & XLPE Compounds
                </Link>
              </li>
              <li>
                <Link href="/who-we-are" className="hover:text-emerald-600 transition-colors">
                  End-to-End Maritime Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Enquiries */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              BUSINESS ENQUIRIES
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div>
                <span className="text-[10px] text-slate-400 uppercase block font-sans">General Contact:</span>
                <a href={`mailto:${companyData.placeholders.email}`} className="text-slate-800 font-mono font-medium hover:text-emerald-600 transition-colors">
                  {companyData.placeholders.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block font-sans">Phone / WhatsApp:</span>
                <a href={`tel:${companyData.placeholders.phone}`} className="text-slate-800 font-mono font-medium hover:text-emerald-600 transition-colors">
                  {companyData.placeholders.phone}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block font-sans">Corporate Office:</span>
                <span className="text-slate-800 font-sans leading-tight block">{companyData.placeholders.registeredOffice}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block font-sans">LLPIN / PAN / TAN:</span>
                <span className="text-slate-800 font-mono text-[11px] block">{companyData.placeholders.llpin} · PAN: {companyData.placeholders.pan} · TAN: {companyData.placeholders.tan}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light relative">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Lixbor Auron LLP. All rights reserved.</p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-500 transition-all duration-200 hover:shadow-md active:scale-95 bg-white cursor-pointer"
          >
            <Icon name="ArrowUp" size={16} />
          </button>

          <div className="flex items-center gap-3">
            <Logo variant="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
};
