import React from 'react';
import Link from 'next/link';
import { Product } from '../../lib/types';
import { Icon } from '../ui/Icons';

interface ProductCardProps {
  product: Product;
  detailed?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, detailed = false }) => {
  return (
    <div className={`group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${product.isFlagship ? 'ring-2 ring-sky-500/50' : ''}`}>
      {/* Flagship Badge */}
      {product.isFlagship && (
        <div className="absolute top-4 right-4 z-10 bg-navy-950/90 backdrop-blur-md text-sky-300 border border-sky-500/30 text-[10px] uppercase font-semibold tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse"></span>
          <span>Core Flagship Product</span>
        </div>
      )}

      {/* Card Header Image */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-navy-950">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="bg-sky-500/90 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-md shadow">
            {product.category}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
            {product.name}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed font-light">
            {detailed ? product.fullDescription : product.shortDescription}
          </p>

          {/* MgO Specific Grades Section */}
          {detailed && product.grades && product.grades.length > 0 && (
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Icon name="Layers" size={14} className="text-sky-500" />
                <span>Specialized MgO Grades Available:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.grades.map((grade) => (
                  <div key={grade.code} className="bg-slate-50 border border-slate-200/80 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-900">{grade.name}</span>
                      <span className="text-[10px] font-mono text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">{grade.code}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 font-light leading-snug">{grade.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Applications Tags */}
          <div className="pt-3 space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
              Key Industrial Applications:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.keyApplications.map((app, i) => (
                <span
                  key={i}
                  className="bg-slate-100 border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Specifications (Detailed view) */}
          {detailed && product.specifications && (
            <div className="pt-3 space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                Technical Highlights:
              </span>
              <ul className="space-y-1">
                {product.specifications.map((spec, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <Icon name="CheckCircle2" size={14} className="text-sky-500 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Link to Contact */}
        <div className="pt-4 border-t border-slate-100">
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="w-full btn-pill btn-pill-dark-outline justify-center text-xs"
          >
            <span>Enquire For Specifications & Quote</span>
            <Icon name="ArrowRight" size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
