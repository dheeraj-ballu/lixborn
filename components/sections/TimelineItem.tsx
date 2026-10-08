import React from 'react';
import { Milestone } from '../../lib/types';

interface TimelineProps {
  milestones: Milestone[];
}

export const Timeline: React.FC<TimelineProps> = ({ milestones }) => {
  return (
    <div className="relative border-l-2 border-sky-500/30 ml-4 sm:ml-32 space-y-12 my-8">
      {milestones.map((item, index) => (
        <div key={index} className="relative pl-8 sm:pl-12 group">
          {/* Timeline Node Dot */}
          <div
            className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
              item.highlight
                ? 'bg-sky-500 border-navy-950 ring-4 ring-sky-500/30'
                : 'bg-navy-900 border-sky-400'
            }`}
          />

          {/* Year Label (Left on larger screens) */}
          <div className="sm:absolute sm:-left-32 sm:top-0 text-left sm:text-right sm:w-24 mb-2 sm:mb-0">
            <span className={`text-2xl font-extrabold tracking-tight font-mono ${item.highlight ? 'text-sky-500' : 'text-slate-400'}`}>
              {item.year}
            </span>
          </div>

          {/* Milestone Card */}
          <div className={`rounded-xl p-6 border transition-all duration-300 ${
            item.highlight
              ? 'bg-navy-900/90 border-sky-500/40 text-white shadow-lg shadow-sky-500/10'
              : 'bg-white border-slate-200 text-slate-900 hover:shadow-md'
          }`}>
            <h4 className="text-lg font-bold tracking-tight mb-2">
              {item.title}
            </h4>
            <p className={`text-sm font-light leading-relaxed ${item.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
