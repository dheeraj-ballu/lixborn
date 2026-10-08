'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { faqList, FAQItem } from '../../lib/content/faq';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  showSearch?: boolean;
  showCategoryBadge?: boolean;
  limit?: number;
  className?: string;
  items?: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Any questions?',
  subtitle = 'Key insights into our commodities, commercial process, quality standards, and sourcing foundation.',
  badge = 'FAQS & INFORMATION',
  showSearch = false,
  showCategoryBadge = false,
  limit,
  className = 'py-24 bg-white border-t border-slate-200',
  items = faqList,
}) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredItems = items.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      (item.category && item.category.toLowerCase().includes(query))
    );
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const renderTitle = () => {
    const words = title.trim().split(/\s+/);
    if (words.length <= 1) {
      return <span>{title}</span>;
    }
    return (
      <>
        <span className="block">{words[0]}</span>
        <span className="font-serif-italic font-normal block text-slate-800">
          {words.slice(1).join(' ')}
        </span>
      </>
    );
  };

  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            {badge && (
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                <span className="w-8 h-[1px] bg-emerald-500"></span>
                <span>{badge}</span>
              </div>
            )}

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.08] tracking-tight">
              {renderTitle()}
            </h2>

            {subtitle && (
              <p className="text-base text-slate-600 font-light leading-relaxed max-w-md">
                {subtitle}
              </p>
            )}

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 hover:text-emerald-700 transition-colors group"
              >
                <span>Have a commercial inquiry?</span>
                <span className="font-mono transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            </div>
          </div>

          {/* Right Column: FAQ List & Optional Search */}
          <div className="lg:col-span-7">
            {/* Optional Search */}
            {showSearch && (
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions by keyword or topic..."
                    className="w-full pl-11 pr-16 py-3.5 rounded-lg border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                  <svg
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Accordion List with full-width dividers */}
            {displayedItems.length > 0 ? (
              <div className="border-t border-slate-200">
                {displayedItems.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <div key={item.id} className="border-b border-slate-200 transition-colors">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full text-left py-6 sm:py-7 flex items-start gap-4 sm:gap-5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        aria-expanded={isOpen}
                      >
                        {/* Plus / Minus Indicator on the LEFT (Reference design) */}
                        <span
                          className="shrink-0 w-5 h-5 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors select-none mt-1"
                          aria-hidden="true"
                        >
                          {isOpen ? (
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          ) : (
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            >
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          )}
                        </span>

                        <div className="flex-1 flex items-baseline justify-between gap-4">
                          <h3 className="text-lg sm:text-xl font-medium text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                            {item.question}
                          </h3>

                          {showCategoryBadge && item.category && (
                            <span className="hidden sm:inline-block text-[10px] font-semibold tracking-wider uppercase bg-slate-100 text-slate-500 px-2.5 py-1 rounded border border-slate-200 shrink-0">
                              {item.category}
                            </span>
                          )}
                        </div>
                      </button>

                      {/* Expanded Content indented flush with question text */}
                      {isOpen && (
                        <div className="pl-9 sm:pl-10 pb-7 pr-4 text-slate-600 font-light text-base leading-relaxed space-y-3">
                          <p>{item.answer}</p>
                          {(item.id === 'inquiries' || item.id === 'quotation-process') && (
                            <div className="pt-2">
                              <Link
                                href="/contact"
                                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-emerald-600 hover:text-emerald-700 gap-1.5"
                              >
                                <span>Submit a commercial inquiry</span>
                                <span className="font-mono">→</span>
                              </Link>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-16 text-center border-t border-b border-slate-200 space-y-3">
                <p className="text-slate-600">No questions found matching &quot;{searchQuery}&quot;.</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-semibold text-emerald-600 hover:underline uppercase tracking-wider cursor-pointer"
                >
                  Reset Search Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
