import React from 'react';
import { ValueItem, WhyChooseUsItem } from '../../lib/types';
import { Icon } from '../ui/Icons';

interface ValueCardProps {
  item: ValueItem | WhyChooseUsItem;
  variant?: 'light' | 'dark';
}

export const ValueCard: React.FC<ValueCardProps> = ({ item, variant = 'light' }) => {
  const isLight = variant === 'light';
  const subtitle = 'subtitle' in item ? item.subtitle : null;

  return (
    <div
      className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
        isLight
          ? 'bg-white border-slate-200 hover:border-sky-400 hover:shadow-xl'
          : 'bg-navy-900/80 backdrop-blur-md border-white/10 hover:border-sky-500/50 hover:bg-navy-900'
      }`}
    >
      {/* Top Accent Line on Hover */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="space-y-4">
        {/* Icon Emblem */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
          <Icon name={item.iconName} size={24} />
        </div>

        {/* Subtitle tag if available */}
        {subtitle && (
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-500 block">
            {subtitle}
          </span>
        )}

        {/* Title */}
        <h3 className={`text-xl font-semibold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
          {item.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed font-light ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
          {item.description}
        </p>
      </div>
    </div>
  );
};
