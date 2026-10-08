import React from 'react';
import { physicalTradingModelData, sourcingProcessData } from '../../lib/content/who-we-are';
import { Icon } from '../ui/Icons';

export const ProcessFlow: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 1. End-to-End Physical Trading Model */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            OUR OPERATIONAL MODEL
          </span>
          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Physical Trading Workflow
          </h3>
          <p className="text-sm text-slate-600 font-light">
            End-to-end physical commodity trading model managing every phase of international supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {physicalTradingModelData.map((item, idx) => (
            <div
              key={item.step}
              className="relative group bg-white border border-slate-200 rounded-xl p-5 hover:border-sky-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold font-mono text-sky-500/40 group-hover:text-sky-500 transition-colors">
                    0{item.step}
                  </span>
                  {idx < physicalTradingModelData.length - 1 && (
                    <Icon name="ChevronRight" size={16} className="hidden lg:block text-slate-300 group-hover:text-sky-500" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                <span className="text-[11px] font-semibold uppercase text-sky-600 tracking-wider block">
                  {item.action}
                </span>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. 5-Step Sourcing Process */}
      <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
        <div className="relative z-10 space-y-8">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              5-STEP SOURCING METHODOLOGY
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-white">
              How We Deliver Dependable Supply
            </h3>
            <p className="text-sm text-slate-300 font-light">
              From requirement analysis to long-term partner development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {sourcingProcessData.map((step) => (
              <div
                key={step.step}
                className="bg-navy-900/90 border border-white/10 rounded-xl p-5 backdrop-blur-md space-y-3 hover:border-sky-400/50 transition-colors"
              >
                <div className="h-8 w-8 rounded-lg bg-sky-500/20 text-sky-400 font-mono font-bold flex items-center justify-center text-sm">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-white">{step.title}</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
