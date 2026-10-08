import React from 'react';
import Link from 'next/link';

interface CardItem {
  kicker: string;
  title: string;
  link: string;
  image: string;
}

const cards: CardItem[] = [
  {
    kicker: 'CHEMICALS & FERTILIZERS',
    title: 'High-grade MgO, Urea, Sulphur, and Melamine for agricultural and industrial processing.',
    link: '/products#chemicals-fertilizers',
    image: '/images/cards/card-1.webp',
  },
  {
    kicker: 'POLYMERS & RESINS',
    title: 'XLPE compounds, semiconductive compounds, ABS, and LDPE engineered for power cable & packaging sectors.',
    link: '/products#polymers',
    image: '/images/cards/card-2.webp',
  },
  {
    kicker: 'OUR SOURCING MODEL',
    title: 'End-to-end physical trading & 5-step sourcing methodology: Understand → Source → Verify → Execute.',
    link: '/who-we-are',
    image: '/images/cards/card-3.webp',
  },
  {
    kicker: 'SPEAK TO OUR EXPERTS',
    title: 'Get tailored commercial quotes and technical specifications from our experienced export team.',
    link: '/contact',
    image: '/images/cards/card-4.webp',
  },
];

export const VeritaseCards: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 block">
              EXPLORE MORE
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 leading-tight">
              Driving Value <span className="font-serif-italic font-normal">Across Markets</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-sm text-slate-600 font-light leading-relaxed">
            From direct manufacturer sourcing to end-user delivery, discover how we build reliable supply chain solutions across international commodity markets.
          </div>
        </div>

        {/* 4 Tall Vertical Image Cards Grid (Exact Veritase Screenshot 3 layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <Link
              key={i}
              href={card.link}
              className="group relative h-[420px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 text-white"
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-navy-950/20 group-hover:from-navy-950/95 transition-colors duration-300" />

              {/* Card Top Kicker */}
              <div className="relative z-10">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400 font-mono">
                  {card.kicker}
                </span>
              </div>

              {/* Card Bottom Title & Circular Arrow Button */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-lg font-bold leading-snug text-white group-hover:text-emerald-300 transition-colors">
                  {card.title}
                </h3>
                <div className="flex justify-end pt-2">
                  <span className="btn-circle-arrow group-hover:bg-white group-hover:text-navy-950 group-hover:border-white">
                    <span className="text-base font-mono leading-none">↗</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
