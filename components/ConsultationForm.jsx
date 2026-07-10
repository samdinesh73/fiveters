"use client";

import React, { useState } from "react";

export default function ConsultationForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    focus: "Paid Ads",
    budget: "$5k - $10k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const focuses = ["Paid Ads", "SEO & Search", "Custom Web & SaaS", "UI/UX & Brand"];
  const budgets = ["Under $5k", "$5k - $10k", "$10k - $25k", "$25k+"];

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 space-y-6">
        <div className="w-16 h-16 bg-[#9a0002]/10 text-[#9a0002] rounded-full flex items-center justify-center animate-bounce">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold font-heading text-white">Proposal Request Received!</h3>
          <p className="text-sm text-neutral-400 max-w-sm leading-relaxed font-body">
            Thank you, {formData.name}. Our strategy team will analyze your website ({formData.website}) and reach out within 24 hours.
          </p>
        </div>
        <button
          onClick={onClose}
          className="px-6 py-2.5 bg-neutral-800 text-white rounded-xl hover:bg-neutral-700 transition duration-200 font-heading text-xs font-semibold uppercase tracking-wider cursor-pointer"
        >
          Close Screen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8 max-w-xl mx-auto">
      {/* Header Info */}
      <div className="space-y-2.5 text-center">
        <span className="inline-block text-[10px] font-bold text-[#9a0002] bg-[#9a0002]/10 px-3.5 py-1 rounded-full uppercase tracking-widest font-heading">
          Free Strategy Consultation
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-white tracking-tight">
          Request Your Free Scale Audit
        </h2>
        <p className="text-xs md:text-sm text-neutral-400 font-body max-w-md mx-auto">
          Provide your website details, and our analytics team will audit your SEO & Paid Ad channels.
        </p>
      </div>

      <div className="space-y-5">
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-heading font-semibold uppercase tracking-wider text-neutral-400">Name</label>
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#9a0002] focus:ring-1 focus:ring-[#9a0002] transition duration-200 font-body"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-heading font-semibold uppercase tracking-wider text-neutral-400">Business Email</label>
            <input
              type="email"
              required
              placeholder="e.g. john@brand.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#9a0002] focus:ring-1 focus:ring-[#9a0002] transition duration-200 font-body"
            />
          </div>
        </div>

        {/* Row 2: Website URL */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-heading font-semibold uppercase tracking-wider text-neutral-400">Website URL</label>
          <input
            type="url"
            required
            placeholder="e.g. https://brand.com"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#9a0002] focus:ring-1 focus:ring-[#9a0002] transition duration-200 font-body"
          />
        </div>

        {/* Row 3: Primary Focus selector */}
        <div className="space-y-2">
          <label className="text-[11px] font-heading font-semibold uppercase tracking-wider text-neutral-400 block">Primary Focus</label>
          <div className="grid grid-cols-2 gap-2">
            {focuses.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFormData({ ...formData, focus: f })}
                className={`py-2 px-3 rounded-lg text-xs font-semibold font-heading tracking-wide border transition duration-200 cursor-pointer ${
                  formData.focus === f
                    ? "bg-[#9a0002] border-[#9a0002] text-white"
                    : "bg-neutral-900 border-white/10 text-neutral-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Row 4: Monthly Budget */}
        <div className="space-y-2">
          <label className="text-[11px] font-heading font-semibold uppercase tracking-wider text-neutral-400 block">Monthly Ad Budget</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {budgets.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setFormData({ ...formData, budget: b })}
                className={`py-2 px-1 rounded-lg text-[10px] sm:text-xs font-semibold font-heading tracking-wide border transition duration-200 cursor-pointer text-center ${
                  formData.budget === b
                    ? "bg-[#9a0002] border-[#9a0002] text-white"
                    : "bg-neutral-900 border-white/10 text-neutral-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Row 5: Message */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-heading font-semibold uppercase tracking-wider text-neutral-400">Brief Note (Optional)</label>
          <textarea
            placeholder="Tell us about your brand challenges..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full h-20 bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#9a0002] focus:ring-1 focus:ring-[#9a0002] transition duration-200 font-body resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-xl transition duration-200 hover:bg-neutral-100 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none cursor-pointer flex items-center justify-center gap-2 font-heading"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Preparing Audit...
            </>
          ) : (
            "Request Free Strategy Call"
          )}
        </button>
      </div>
    </form>
  );
}
