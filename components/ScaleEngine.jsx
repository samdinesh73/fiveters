"use client";

import React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const STEPS = [
  {
    phase: "PHASE 01",
    num: "01",
    title: "Deep-Dive Audit & Account Alignment",
    tagline: "Pinpointing bottlenecks, mapping direct avenues to scale.",
    desc: "We analyze your historical ad accounts, pixel health, keyword density, and competitor funnels. Our technical audit identifies leakages and sets a precise baseline for your growth metrics.",
    metric: "120+ Datapoints Audited",
    color: "from-neutral-900 to-neutral-950",
    border: "border-white/[0.08] hover:border-[#9a0002]/40",
    badgeColor: "bg-[#9a0002]/10 text-primary border-[#9a0002]/20",
    icon: (
      <svg className="w-8 h-8 text-[#9a0002]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    phase: "PHASE 02",
    num: "02",
    title: "Precision Paid Ads & Funnel Architecture",
    tagline: "Multi-channel media engines designed for conversions.",
    desc: "We build and launch high-intent ad funnels across Meta, Google, and TikTok. By matching targeted creative hooks with optimized search intent bidding, we capture ready-to-buy audiences and drop your acquisition costs.",
    metric: "Meta & Google Partner",
    color: "from-neutral-900 to-neutral-950",
    border: "border-white/[0.08] hover:border-[#9a0002]/40",
    badgeColor: "bg-[#9a0002]/10 text-primary border-[#9a0002]/20",
    icon: (
      <svg className="w-8 h-8 text-[#9a0002]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 00-2-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M12 9v6" />
      </svg>
    )
  },
  {
    phase: "PHASE 03",
    num: "03",
    title: "Next.js Conversion Engineering",
    tagline: "Sub-second web performance. Impeccable frontend detail.",
    desc: "Slow websites kill marketing margins. We code lightweight, SEO-friendly Next.js web instances optimized for Core Web Vitals. Combined with smooth Lenis scrolling and GSAP animations, users remain locked in and conversion rates surge.",
    metric: "100/100 Web Vitals",
    color: "from-neutral-900 to-neutral-950",
    border: "border-white/[0.08] hover:border-[#9a0002]/40",
    badgeColor: "bg-[#9a0002]/10 text-primary border-[#9a0002]/20",
    icon: (
      <svg className="w-8 h-8 text-[#9a0002]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    phase: "PHASE 04",
    num: "04",
    title: "Automated Lifecycles & Retention Campaigns",
    tagline: "Turn one-time buyers into active, lifetime brand advocates.",
    desc: "We deploy automated email flows, cart recovery schedules, and retention-focused SMS sequences. By segmenting your customer cohorts, we deliver targeted messaging that raises customer LTV and boosts organic brand loyalty.",
    metric: "30%+ Revenue Share",
    color: "from-neutral-900 to-neutral-950",
    border: "border-white/[0.08] hover:border-[#9a0002]/40",
    badgeColor: "bg-[#9a0002]/10 text-primary border-[#9a0002]/20",
    icon: (
      <svg className="w-8 h-8 text-[#9a0002]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9 6 9-6" />
      </svg>
    )
  }
];

export default function ScaleEngine() {
  return (
    <section id="scale-engine" className="bg-[#07080a] text-white py-28 md:py-36 relative overflow-hidden border-t border-white/[0.02]">
      {/* Background Decorative Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#9a0002]/5 rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="px-3.5 py-1 bg-[#efe6dd] text-[#9a0002] border border-[#9a0002]/15 text-[10px] font-bold rounded-full uppercase tracking-widest inline-block font-heading mb-4">
            Our Scale Engine
          </span>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#9a0002] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#9a0002] text-3xl md:text-5xl font-extrabold tracking-tight font-heading leading-[1.1] mb-6">
            The systematic formula <br className="hidden md:inline" />
            for revenue expansion.
          </h2>
          <p className="text-sm md:text-base text-white/55 font-light leading-relaxed max-w-xl mx-auto font-body">
            We merge analytics, paid media funnels, speed optimization, and lifecycle retention into a continuous growth loop.
          </p>
        </div>

        {/* ScrollStack Component rendering in the Window scroll environment */}
        <ScrollStack
          useWindowScroll={true}
          itemDistance={120}
          itemScale={0.03}
          itemStackDistance={35}
          stackPosition="18%"
          scaleEndPosition="10%"
          baseScale={0.92}
          rotationAmount={0}
          blurAmount={0.8}
        >
          {STEPS.map((step, idx) => (
            <ScrollStackItem
              key={idx}
              itemClassName={`bg-gradient-to-br ${step.color} border ${step.border} p-8 md:p-12 flex flex-col justify-between overflow-hidden shadow-2xl group transition-colors duration-300 relative min-h-[360px]`}
            >
              {/* Decorative background step number */}
              <div className="absolute -bottom-8 -right-4 text-[10rem] md:text-[14rem] font-extrabold text-white/[0.02] select-none pointer-events-none font-heading transition-colors duration-300 group-hover:text-[#9a0002]/[0.03]">
                {step.num}
              </div>

              {/* Left vertical brand accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#9a0002]/30 group-hover:bg-[#9a0002] transition-colors duration-300" />

              {/* Top Row Header Info */}
              <div className="space-y-4 md:space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] md:text-xs font-bold tracking-widest font-heading px-3 py-1 rounded-full border ${step.badgeColor} transition-colors duration-300`}>
                    {step.phase}
                  </span>
                  <div className="p-2.5 bg-white/5 border border-white/10 rounded-2xl group-hover:border-[#9a0002]/30 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-3xl font-extrabold tracking-tight font-heading text-[#efe6dd] leading-snug transition-colors duration-300 group-hover:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#9a0002] font-semibold tracking-wide uppercase font-body">
                    {step.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Row Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 md:pt-8 border-t border-white/[0.04] items-end relative z-10">

                {/* Left Column Description */}
                <div className="md:col-span-8">
                  <p className="text-xs md:text-sm text-white/50 leading-relaxed font-body group-hover:text-white/70 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>

                {/* Right Column Metric */}
                <div className="md:col-span-4 flex md:justify-end">
                  <div className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] group-hover:border-[#9a0002]/20 rounded-xl text-center md:text-right w-full md:w-auto transition-all duration-300">
                    <div className="text-[9px] uppercase tracking-wider text-white/40 font-body">Key Benchmark</div>
                    <div className="text-xs md:text-sm font-extrabold text-[#efe6dd] font-heading">{step.metric}</div>
                  </div>
                </div>

              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
}
