'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Icon } from '../ui/Icons';

export const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams?.get('product') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    product: prefilledProduct || '',
    estimatedQuantity: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        product: prev.product || prefilledProduct,
      }));
    }
  }, [prefilledProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus('success');
        setResponseMessage(data.message || 'Thank you! Your quote request has been submitted successfully.');
        setFormData({
          fullName: '',
          email: '',
          country: '',
          product: '',
          estimatedQuantity: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setResponseMessage(data.message || 'Something went wrong. Please try again later.');
      }
    } catch {
      setSubmitStatus('error');
      setResponseMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xl">
      <div className="space-y-2 mb-8">
        <h3 className="text-2xl font-bold text-slate-900">Get Quote Inquiry Form</h3>
        <p className="text-sm text-slate-600 font-light">
          Submit your product interested in, target volume, or trade specifications to receive a commercial quote.
        </p>
      </div>

      {/* Submission Success Alert */}
      {submitStatus === 'success' && (
        <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-4 flex items-start gap-3">
          <Icon name="CheckCircle2" size={20} className="text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <h4 className="font-bold">Quote Request Submitted</h4>
            <p className="mt-1 font-light">{responseMessage}</p>
          </div>
        </div>
      )}

      {/* Submission Error Alert */}
      {submitStatus === 'error' && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 flex items-start gap-3">
          <Icon name="X" size={20} className="text-red-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <h4 className="font-bold">Submission Failed</h4>
            <p className="mt-1 font-light">{responseMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name* */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Full Name <span className="text-emerald-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-slate-50/50'
              }`}
            />
            {errors.fullName && <p className="text-xs text-red-500 font-medium">{errors.fullName}</p>}
          </div>

          {/* Email* */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Email <span className="text-emerald-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@company.com"
              className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-slate-50/50'
              }`}
            />
            {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Country* */}
          <div className="space-y-2">
            <label htmlFor="country" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Country <span className="text-emerald-600">*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="e.g. India / United Arab Emirates"
              className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                errors.country ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-slate-50/50'
              }`}
            />
            {errors.country && <p className="text-xs text-red-500 font-medium">{errors.country}</p>}
          </div>

          {/* Product Interested In */}
          <div className="space-y-2">
            <label htmlFor="product" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Product Interested In
            </label>
            <input
              type="text"
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="e.g. Magnesium Oxide (MgO) / XLPE / Urea"
              className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* Estimated Quantity */}
        <div className="space-y-2">
          <label htmlFor="estimatedQuantity" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
            Estimated Quantity
          </label>
          <input
            type="text"
            id="estimatedQuantity"
            name="estimatedQuantity"
            value={formData.estimatedQuantity}
            onChange={handleChange}
            placeholder="e.g. 500 MT / Full Container Load (FCL)"
            className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />
        </div>

        {/* Message* */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
            Message <span className="text-emerald-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail your target specifications, packaging preferences, or port of destination..."
            className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
              errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-slate-50/50'
            }`}
          />
          {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-veritase-outline !bg-emerald-600 hover:!bg-emerald-700 !border-emerald-600 justify-center text-xs py-4 disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2 text-white">
              <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
              <span>Submitting Quote Request...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2 text-white font-bold">
              <span>GET QUOTE</span>
              <Icon name="ArrowRight" size={16} />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};
