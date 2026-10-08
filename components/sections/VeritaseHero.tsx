'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Slide {
  number: string;
  kicker: string;
  headlineTitle: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  localImage: string;
  fallbackImage: string;
}

const slides: Slide[] = [
  {
    number: '01',
    kicker: 'GLOBAL ALLIANCES',
    headlineTitle: 'Global Sourcing & Trade',
    subtitle:
      'Connecting global markets with certified industrial raw materials and reliable supply.',
    buttonText: 'EXPLORE',
    buttonLink: '/products',
    localImage: '/images/hero/hero-1.webp',
    fallbackImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80',
  },
  {
    number: '02',
    kicker: 'CORE PRODUCTS',
    headlineTitle: 'Magnesium Oxide & Chemicals',
    subtitle:
      'High-purity agricultural, feed, and technical grades from certified producers.',
    buttonText: 'EXPLORE PRODUCTS',
    buttonLink: '/products#mgo-focus',
    localImage: '/images/hero/hero-2.webp',
    fallbackImage: 'https://images.unsplash.com/photo-1616886307848-7f6635699c43?auto=format&fit=crop&w=2000&q=80',
  },
  {
    number: '03',
    kicker: 'INDUSTRY PIONEERS',
    headlineTitle: 'Industrial Trade Excellence',
    subtitle:
      'Decades of industrial foundation delivering operational reliability and global trade solutions.',
    buttonText: 'WHO WE ARE',
    buttonLink: '/who-we-are',
    localImage: '/images/hero/hero-3.webp',
    fallbackImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80',
  },
];

export const VeritaseHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  // Helper to handle image load errors and try alternative paths/extensions
  const handleImageError = (basePath: string) => {
    setFailedImages((prev) => ({ ...prev, [basePath]: true }));
  };

  return (
    <section className="relative h-screen min-h-screen w-full overflow-hidden bg-navy-950 text-white flex items-center">
      {/* Background Image Carousel with Vibrant Natural Overlay */}
      {slides.map((s, idx) => {
        let imageSrc = s.localImage;
        if (failedImages[s.localImage]) {
          imageSrc = s.fallbackImage;
        }

        const isActive = idx === currentSlide;
        const zoomAnimationClass = idx % 2 === 0 ? 'animate-hero-zoom-in' : 'animate-hero-zoom-out';

        return (
          <div
            key={s.number}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image element with alternating zoom-in / zoom-out animation retriggered on image change */}
            <img
              key={isActive ? `active-hero-zoom-${currentSlide}` : `inactive-hero-${idx}`}
              src={imageSrc}
              alt={s.headlineTitle}
              onError={() => handleImageError(s.localImage)}
              className={`absolute inset-0 h-full w-full object-cover object-center ${
                isActive ? zoomAnimationClass : (idx % 2 === 0 ? 'scale-100' : 'scale-110')
              }`}
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-navy-950/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-navy-950/20" />
          </div>
        );
      })}

      {/* Main Content Container with Retriggered Slide-Up Text Animation */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-28">
        <div key={currentSlide} className="max-w-4xl space-y-6 hero-text-shadow">
          {/* Veritase Line Kicker: ─── 01 / GLOBAL ALLIANCES */}
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 animate-text-slide-up">
            <span className="w-8 h-[1px] bg-slate-300"></span>
            <span>{slide.number} / {slide.kicker}</span>
          </div>

          {/* Clean Display Headline (Short & fully readable, no ellipsis) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight font-sans animate-text-slide-up animate-delay-1">
            {slide.headlineTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-2xl animate-text-slide-up animate-delay-2">
            {slide.subtitle}
          </p>

          {/* Veritase Circular Arrow Button: EXPLORE ( ↗ ) */}
          <div className="pt-4 flex items-center gap-4 animate-text-slide-up animate-delay-3">
            <Link href={slide.buttonLink} className="group inline-flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white group-hover:text-emerald-400 transition-colors">
                {slide.buttonText}
              </span>
              <span className="btn-circle-arrow group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white">
                <span className="text-lg font-mono leading-none">↗</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Right Clean Slide Progress Lines (No capsule container, no numbers) */}
      <div className="absolute bottom-10 right-8 sm:right-16 z-20 flex items-center gap-3 sm:gap-4">
        {slides.map((s, idx) => {
          const isActive = idx === currentSlide;
          const isPast = idx < currentSlide;

          return (
            <button
              type="button"
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className="relative h-[3px] w-10 sm:w-16 bg-white/30 rounded-full overflow-hidden cursor-pointer hover:bg-white/40 transition-colors"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                key={isActive ? `active-${currentSlide}` : `inactive-${idx}`}
                className={`absolute inset-y-0 left-0 rounded-full ${
                  isActive
                    ? 'w-full bg-white animate-hero-progress'
                    : isPast
                    ? 'w-full bg-white'
                    : 'w-0 bg-transparent'
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};


