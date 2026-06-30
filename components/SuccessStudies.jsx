"use client";
import React from "react";
import CardSwap, { Card } from "./CardSwap";

export default function SuccessStudies() {
  return (
    <section id="results" className="bg-[#07080a] text-white py-32 px-6 md:px-12 relative overflow-hidden border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Brand Case Studies Copy */}
        <div className="lg:col-span-6 space-y-6 relative z-10">
          <span className="px-3.5 py-1 bg-red-950/20 text-[#ef4444] border border-[#ef4444]/15 text-[10px] font-bold rounded-full uppercase tracking-widest inline-block font-heading">
            Results
          </span>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#9a0002] text-3xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight max-w-xl">
            Proven scale for high-growth brands
          </h2>
          <p className="text-sm md:text-base text-white/55 font-light leading-relaxed max-w-lg font-body">
            We don't do guesses. We build high-performance ad funnels, rank high-intent keywords, and design experiences that scale revenue predictably.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-6 pt-6 max-w-md">
            <div className="border-l-2 border-[#9a0002] pl-4 space-y-1">
              <div className="text-2xl md:text-3xl font-extrabold font-heading text-white">4.8x</div>
              <div className="text-xs text-white/40 uppercase tracking-wider font-body">Average ROAS Increase</div>
            </div>
            <div className="border-l-2 border-[#efe6dd]/30 pl-4 space-y-1">
              <div className="text-2xl md:text-3xl font-extrabold font-heading text-white">$15M+</div>
              <div className="text-xs text-white/40 uppercase tracking-wider font-body">Client Revenue Generated</div>
            </div>
          </div>
        </div>

        {/* Right Column: CardSwap Stack Container */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] lg:min-h-[520px] overflow-visible">
          {/* CardSwap widget placed inside relative container */}
          <div className="relative w-full max-w-[420px] h-[430px]">
            <CardSwap
              width={400}
              height={390}
              cardDistance={40}
              verticalDistance={45}
              delay={4000}
              pauseOnHover={true}
              easing="elastic"
              skewAmount={4}
            >
              {/* Card 1 */}
              <Card className="bg-[#0b0c10] border border-white/[0.08] p-6 rounded-[22px] flex flex-col justify-between shadow-2xl h-full w-full">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#9a0002] font-semibold bg-[#9a0002]/10 px-2.5 py-1 rounded-full">
                      E-COMMERCE
                    </span>
                    <span className="text-xs text-white/40 font-body">Case Study 01</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-heading tracking-tight text-white leading-snug">
                    380% Return on Ad Spend Increase
                  </h3>
                  <p className="text-[11px] text-white/55 leading-relaxed font-body">
                    We rebuilt their Meta ad funnel and search retargeting from scratch, scaling search volume while lowering acquisition costs by 42%.
                  </p>
                  <div className="w-full h-24 rounded-xl overflow-hidden bg-neutral-900 border border-white/5 relative">
                    <img
                      src="/service_conversion.png"
                      alt="ROAS growth charts"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
                <div className="text-[10px] font-bold text-white/75 font-heading tracking-wider uppercase pt-3 border-t border-white/[0.04]">
                  Scale Activewear Apparel
                </div>
              </Card>

              {/* Card 2 */}
              <Card className="bg-[#0b0c10] border border-white/[0.08] p-6 rounded-[22px] flex flex-col justify-between shadow-2xl h-full w-full">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#d97706] font-semibold bg-[#d97706]/10 px-2.5 py-1 rounded-full">
                      B2B LEAD GEN
                    </span>
                    <span className="text-xs text-white/40 font-body">Case Study 02</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-heading tracking-tight text-white leading-snug">
                    +180% Demo Signup Conversions
                  </h3>
                  <p className="text-[11px] text-white/55 leading-relaxed font-body">
                    Through intent-focused Google Search campaigns and technical keyword cluster optimization, we captured high-intent pipeline leads.
                  </p>
                  <div className="w-full h-24 rounded-xl overflow-hidden bg-neutral-900 border border-white/5 relative">
                    <img
                      src="/service_content.png"
                      alt="Organic search intent growth"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
                <div className="text-[10px] font-bold text-white/75 font-heading tracking-wider uppercase pt-3 border-t border-white/[0.04]">
                  Logistics Software Group
                </div>
              </Card>

              {/* Card 3 */}
              <Card className="bg-[#0b0c10] border border-white/[0.08] p-6 rounded-[22px] flex flex-col justify-between shadow-2xl h-full w-full">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#2563eb] font-semibold bg-[#2563eb]/10 px-2.5 py-1 rounded-full">
                      D2C GROWTH
                    </span>
                    <span className="text-xs text-white/40 font-body">Case Study 03</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-heading tracking-tight text-white leading-snug">
                    4.2x Revenue Scale via TikTok & SMS
                  </h3>
                  <p className="text-[11px] text-white/55 leading-relaxed font-body">
                    Leveraging high-hook creators combined with technical lifecycle retention flows, we drove customer lifetime value and organic reach.
                  </p>
                  <div className="w-full h-24 rounded-xl overflow-hidden bg-neutral-900 border border-white/5 relative">
                    <img
                      src="/service_creative.png"
                      alt="Social creative dashboard"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
                <div className="text-[10px] font-bold text-white/75 font-heading tracking-wider uppercase pt-3 border-t border-white/[0.04]">
                  Cosmetics Brand Scaling
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>

      </div>
    </section>
  );
}
