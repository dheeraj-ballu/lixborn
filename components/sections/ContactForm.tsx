'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Icon } from '../ui/Icons';
import { productsData } from '../../lib/content/products';

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
  const [submissionId, setSubmissionId] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      // Generate a local reference ID embedded in the email subject line
      const refId = `LA-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      const productLabel = formData.product || 'General Inquiry';
      const nameLabel = formData.fullName.trim();
      data.set(
        'subject',
        `New Commercial RFQ: ${productLabel} — ${nameLabel} [${refId}]`
      );

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setSubmitStatus('success');
        setResponseMessage(
          json.message || 'Thank you! Your quote request has been submitted successfully.'
        );
        setSubmissionId(json.data?.submissionId ?? refId);
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
        setSubmissionId(null);
        setResponseMessage(json.message || 'Something went wrong. Please try again later.');
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
          <div className="text-sm space-y-1.5">
            <h4 className="font-bold">Quote Request Submitted</h4>
            <p className="font-light">{responseMessage}</p>
            {submissionId && (
              <p className="mt-2 text-xs text-emerald-700">
                <span className="font-semibold uppercase tracking-wide">Submission ID:&nbsp;</span>
                <span className="font-mono bg-emerald-100 border border-emerald-300 rounded px-1.5 py-0.5 select-all">
                  {submissionId}
                </span>
              </p>
            )}
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
        {/* Web3Forms hidden fields */}
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
        />
        {/* Suppresses Web3Forms default thank-you page redirect */}
        <input type="hidden" name="redirect" value="false" />

        {/* Honeypot — invisible to real users, catches bots */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: 'none' }}
          tabIndex={-1}
          aria-hidden="true"
        />

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

          {/* Product Interested In — grouped dropdown */}
          <div className="space-y-2">
            <label htmlFor="product" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Product Interested In
            </label>
            <div className="relative">
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 pl-4 pr-10 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all appearance-none cursor-pointer"
              >
                <option value="">— Select a product —</option>
                {/* Build grouped options from the canonical products data */}
                {Array.from(new Set(productsData.map((p) => p.category))).map((category) => (
                  <optgroup key={category} label={category}>
                    {productsData
                      .filter((p) => p.category === category)
                      .map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.isFlagship ? `★ ${p.name}` : p.name}
                        </option>
                      ))}
                  </optgroup>
                ))}
                <option value="Other / Multiple Products">Other / Multiple Products</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
                <Icon name="ChevronDown" size={16} />
              </div>
            </div>
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
