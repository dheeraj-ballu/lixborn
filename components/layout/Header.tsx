'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../ui/Logo';
import { Icon } from '../ui/Icons';
import { mainNavLinks } from '../../lib/content/company';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top subtle vignette gradient at the very top for contrast */}
      {!isScrolled && (
        <div className="fixed top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#070e17]/60 via-[#070e17]/20 to-transparent pointer-events-none z-40 transition-opacity duration-300" />
      )}

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'top-2 sm:top-2.5 px-3 sm:px-5 flex flex-col items-center pointer-events-none'
            : 'top-0 pointer-events-auto'
        }`}
      >
        {/* Top Utility Bar (Desktop only, smooth height & opacity collapse) */}
        <div
          className={`w-full max-w-7xl mx-auto hidden md:block overflow-hidden transition-all duration-300 ease-in-out pointer-events-auto ${
            isScrolled
              ? 'max-h-0 opacity-0 pb-0 mb-0 -translate-y-2 pointer-events-none'
              : 'max-h-10 opacity-100 pt-2.5 pb-1.5 mb-0.5 px-4 sm:px-6 lg:px-8 border-b border-white/15'
          }`}
        >
          <div className="flex items-center justify-end gap-8 text-[11px] font-medium tracking-[0.18em] text-slate-300 uppercase">
            <Link href="/who-we-are" className="hover:text-white transition-colors">
              Company Profile
            </Link>
          </div>
        </div>

        {/* Main Navbar Pill / Row */}
        <div
          className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ease-in-out pointer-events-auto ${
            isScrolled
              ? 'py-1.5 sm:py-2 px-4 sm:px-6 bg-white/75 backdrop-blur-[24px] backdrop-saturate-200 border border-white/80 rounded-full shadow-[0_10px_30px_-8px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.95)] relative overflow-hidden'
              : 'py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8 bg-transparent border border-transparent rounded-none'
          }`}
        >
          {/* Liquid Glass Natural Specular Sheen inside the pill */}
          {isScrolled && (
            <div className="pointer-events-none absolute inset-0 rounded-full overflow-hidden -z-10" aria-hidden="true">
              {/* Top specular reflection edge */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
              {/* Natural liquid glass gradient sheen */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-transparent" />
            </div>
          )}

          {/* Brand Logo */}
          <div className="shrink min-w-0">
            <Logo variant={isScrolled ? 'dark' : 'light'} compact={isScrolled} />
          </div>

          {/* Desktop Nav & Action Button (Grouped on the right side) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <nav className="flex items-center gap-6 lg:gap-8">
              {mainNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={
                      isScrolled
                        ? `relative text-xs font-semibold uppercase tracking-[0.2em] transition-colors py-0.5 ${
                            isActive
                              ? 'text-emerald-600 after:w-full'
                              : 'text-slate-700 hover:text-emerald-600 after:w-0'
                          } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full`
                        : `veritase-nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className={
                isScrolled
                  ? 'rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] bg-slate-900 text-white hover:bg-emerald-600 transition-all duration-300 shadow-sm'
                  : 'btn-veritase-outline !py-1.5 !px-5'
              }
            >
              GET QUOTE
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden shrink-0 rounded-lg p-1.5 transition-colors focus:outline-none cursor-pointer ${
              isScrolled
                ? 'text-slate-800 hover:bg-slate-100/60 active:bg-slate-200/60'
                : 'text-white hover:bg-white/10 active:bg-white/20'
            }`}
            aria-label="Open Mobile Navigation"
          >
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer / Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#070e17] text-white flex flex-col justify-between p-6 min-h-screen overflow-y-auto">
          <div>
            {/* Top Bar: Brand Logo & Close Button */}
            <div className="flex items-center justify-between gap-3 pb-5 border-b border-white/10">
              <div onClick={() => setIsMobileMenuOpen(false)} className="shrink min-w-0">
                <Logo variant="light" />
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="shrink-0 rounded-lg p-2 text-white hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close Mobile Navigation"
              >
                <Icon name="X" size={28} />
              </button>
            </div>

            {/* Navigation Menu */}
            <div className="flex flex-col space-y-6 pt-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Navigation Menu
              </div>
              {mainNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-semibold uppercase tracking-[0.15em] py-1 transition-colors ${
                      isActive ? 'text-emerald-400 pl-3 border-l-2 border-emerald-400' : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="space-y-4 pt-8 border-t border-white/10 mt-auto">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-veritase-outline w-full text-center justify-center py-3.5 text-xs font-semibold tracking-[0.2em]"
            >
              GET QUOTE
            </Link>
            <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-widest pt-2">
              <span>Lixbor Auron LLP</span>
              <span>2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
