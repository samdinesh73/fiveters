"use client";
import React from "react";
import RollingButton from "./RollingButton";

export default function Footer() {
  return (
    <footer className="relative bg-[#07080a] border-t border-white/[0.04] text-white pt-24 pb-12 overflow-hidden">
      {/* Background glow effects - soft orange/bronze gradient matching screenshot */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle 1000px at bottom right, rgba(210, 121, 59, 0.12), rgba(154, 0, 2, 0.03) 40%, transparent 70%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle 600px at bottom center, rgba(210, 79, 59, 0.44), transparent 65%)" }}
      />

      {/* Large background watermark text */}
      <div className="absolute bottom-8 inset-x-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-heading font-extrabold text-[12vw] tracking-[0.38em] text-white/[0.12] leading-none uppercase pl-[0.38em]">
          fiveters
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main top columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          {/* Logo & Info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" width="20" height="20" className="text-black" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 17l5-5-5-5" />
                  <path d="M6 17l5-5-5-5" opacity="0.35" />
                </svg>
              </div>
              <span className="font-heading font-bold text-white tracking-tight text-xl">
                fiveters
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>
                  Address:
                </h4>
                <p className="text-sm text-white/70 max-w-sm font-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  30 ,Address , State 000000
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>
                  Contact:
                </h4>
                <p className="text-sm text-white/70 font-light" style={{ fontFamily: "var(--font-body)" }}>
                  +91 63821 18130
                </p>
                <p className="text-sm text-white/70 font-light hover:text-white transition duration-200 mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                  <a href="mailto:hola@fivetersmedia.com">hola@fivetersmedia.com</a>
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:scale-105 transition-all duration-200">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:scale-105 transition-all duration-200">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter X" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:scale-105 transition-all duration-200">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:scale-105 transition-all duration-200">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:scale-105 transition-all duration-200">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns - 7 cols on lg */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column Company */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-wider font-heading">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm text-white/55 font-light" style={{ fontFamily: "var(--font-body)" }}>
                <li><a href="#" className="hover:text-white transition duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Career</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Contact us</a></li>
              </ul>
            </div>

            {/* Column Support */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-wider font-heading">
                Support
              </h3>
              <ul className="space-y-2.5 text-sm text-white/55 font-light" style={{ fontFamily: "var(--font-body)" }}>
                <li><a href="#" className="hover:text-white transition duration-200">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Tutorial</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">404 Page</a></li>
              </ul>
            </div>

            {/* Column Legal Policies */}
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h3 className="text-sm font-semibold text-white tracking-wider font-heading">
                Legal Policies
              </h3>
              <ul className="space-y-2.5 text-sm text-white/55 font-light" style={{ fontFamily: "var(--font-body)" }}>
                <li><a href="#" className="hover:text-white transition duration-200 whitespace-nowrap">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">GDPR Compliance</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Affiliate Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/[0.04] mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/40 font-light" style={{ fontFamily: "var(--font-body)" }}>
            © 2026 fivetersmedia. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-white/40 font-light" style={{ fontFamily: "var(--font-body)" }}>
            <a href="#" className="hover:text-white transition duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition duration-200">Cookie Settings</a>
          </div>

          {/* Action button matching neon green accent badge */}
          <div className="md:-mt-2">
            <RollingButton
              text="Follow Us"
              className="px-5 py-2.5 bg-[blue] hover:bg-[blue] text-white font-bold text-xs tracking-wider uppercase rounded-full flex items-center gap-2 transition duration-200 shadow-md hover:scale-[1.03] active:scale-[0.98] cursor-pointer font-bold"
            >
              {/* <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#fff] ml-2">
                <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div> */}
            </RollingButton>
          </div>
        </div>
      </div>

      {/* Floating Vertical Badge "46+ Pre built demos" */}
      {/* <div className="fixed right-0 top-[60%] -translate-y-1/2 z-40 flex items-center gap-2 bg-[#9a0002] hover:bg-[#b50003] text-white px-3 py-4 rounded-l-2xl shadow-[0_15px_30px_rgba(154,0,2,0.3)] cursor-pointer transition-all duration-300 group border-y border-l border-white/10" style={{ writingMode: 'vertical-rl' }}>
        <div className="flex items-center gap-2 rotate-180">
          <svg viewBox="0 0 24 24" width="15" height="15" className="text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="9" />
            <rect x="14" y="3" width="7" height="5" />
            <rect x="14" y="12" width="7" height="9" />
            <rect x="3" y="16" width="7" height="5" />
          </svg>
          <span className="font-heading font-semibold text-xs tracking-wider" style={{ letterSpacing: '0.1em' }}>
            Consultation
          </span>
        </div>
      </div> */}
    </footer>
  );
}
