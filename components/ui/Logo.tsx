import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', compact = false, className = '' }) => {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={`group inline-flex items-center gap-2 sm:gap-2.5 transition-opacity max-w-full ${className}`}>
      {/* Primary SVG Logo Symbol */}
      <div className={`relative flex items-center justify-center shrink-0 transition-all duration-300 ${compact ? 'h-7 w-7 sm:h-8 sm:w-8' : 'h-8 w-8 sm:h-9 sm:w-9'}`}>
        <img
          src="/logo/logo-svg.svg"
          alt="Lixbor Auron LLP Logo"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Styled Wordmark */}
      <div className="flex flex-col min-w-0">
        <span className={`transition-all duration-300 ${compact ? 'text-xs sm:text-base md:text-lg' : 'text-sm sm:text-lg md:text-xl'} font-bold tracking-[0.12em] sm:tracking-[0.16em] leading-none font-sans uppercase truncate ${isLight ? 'text-white' : 'text-slate-900'}`}>
          LIXBOR AURON <span className="text-emerald-500 font-extrabold">LLP</span>
        </span>
      </div>
    </Link>
  );
};
