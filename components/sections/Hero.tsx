import React from 'react';
import Link from 'next/link';
import { Icon } from '../ui/Icons';

interface HeroProps {
  kicker?: string;
  title: string;
  subHeadline?: string;
  description: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  backgroundImage?: string;
  compact?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  kicker,
  title,
  subHeadline,
  description,
  ctaPrimaryText = 'Explore Products',
  ctaPrimaryLink = '/products',
  ctaSecondaryText = 'Contact Desk',
  ctaSecondaryLink = '/contact',
  backgroundImage = 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80',
  compact = false,
}) => {
  return (
    <section className={`relative overflow-hidden bg-navy-950 text-white ${compact ? 'pt-32 pb-20' : 'pt-36 sm:pt-44 pb-24 sm:pb-32'}`}>
      {/* Background Image with Slow Zoom Effect & Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-hero-zoom opacity-30"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Radial & Linear Dark Gradient Overlays (Veritase-style) */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-950/20 via-transparent to-navy-950/90" />
      </div>

      {/* Decorative Grid Accent */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Kicker Badge */}
          {kicker && (
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                {kicker}
              </span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15]">
            {title}
          </h1>

          {/* Sub Headline */}
          {subHeadline && (
            <p className="text-base sm:text-xl font-medium tracking-wide text-sky-400 uppercase font-sans">
              {subHeadline}
            </p>
          )}

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* Action CTAs */}
          {(ctaPrimaryText || ctaSecondaryText) && (
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {ctaPrimaryText && (
                <Link href={ctaPrimaryLink} className="btn-pill btn-pill-primary">
                  <span>{ctaPrimaryText}</span>
                  <Icon name="ArrowRight" size={16} />
                </Link>
              )}
              {ctaSecondaryText && (
                <Link href={ctaSecondaryLink} className="btn-pill btn-pill-outline">
                  <span>{ctaSecondaryText}</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
