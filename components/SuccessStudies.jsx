"use client";
import React, { useEffect, useRef, useState } from "react";
import CardSwap, { Card } from "./CardSwap";

export default function SuccessStudies() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const syncTheme = () => {
      const currentTheme = document.documentElement.dataset.theme || "dark";
      setTheme(currentTheme);
    };
    syncTheme();
    window.addEventListener("themechange", syncTheme);
    return () => window.removeEventListener("themechange", syncTheme);
  }, []);
  return (
    <section id="results" className="bg-background text-foreground py-32 px-6 md:px-12 relative overflow-hidden border-t border-foreground/[0.02]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Brand Case Studies Copy */}
        <div className="lg:col-span-6 space-y-6 relative z-10">
          <span className="px-3.5 py-1 bg-[#efe6dd] text-[#9a0002] border border-[#9a0002]/15 text-[10px] font-bold rounded-full uppercase tracking-widest inline-block font-heading">
            Results
          </span>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-[#9a0002] text-3xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight max-w-xl">
            Proven scale for high-growth brands
          </h2>
          <p className="text-sm md:text-base text-foreground/60 font-light leading-relaxed max-w-lg font-body">
            We don't do guesses. We build high-performance ad funnels, rank high-intent keywords, and design experiences that scale revenue predictably.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-6 pt-6 max-w-md">
            <div className="border-l-2 border-[#9a0002] pl-4 space-y-1">
              <div className="text-2xl md:text-3xl font-extrabold font-heading text-foreground">4.8x</div>
              <div className="text-xs text-foreground/45 uppercase tracking-wider font-body">Average ROAS Increase</div>
            </div>
            <div className="border-l-2 border-foreground/20 pl-4 space-y-1">
              <div className="text-2xl md:text-3xl font-extrabold font-heading text-foreground">$15M+</div>
              <div className="text-xs text-foreground/45 uppercase tracking-wider font-body">Client Revenue Generated</div>
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
              <Card className={`border border-[#9a0002]/[0.08] p-7 rounded-[22px] flex flex-col justify-between shadow-2xl h-full w-full
                ${theme === "light" ? "bg-white" : "bg-black"}
              `}>
                <div className="space-y-4 flex flex-col h-full justify-between">
                  <div className="space-y-1">
                    <div className="text-5xl font-black font-heading text-[#9a0002] tracking-tight leading-none">
                      +312%
                    </div>
                    <div className="text-xs font-semibold text-foreground tracking-wide uppercase font-body mt-2">
                      organic traffic in 90 days
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-foreground/45 uppercase tracking-wider font-heading">
                      Aura Cosmetics — DTC Cosmetics
                    </div>
                    <p className="text-[11px] text-foreground/60 leading-relaxed font-body mt-2 line-clamp-3">
                      Aura came to us with strong products and flat organic growth. We rebuilt their content architecture around buyer-intent search terms and rewired internal linking — turning search into their top acquisition channel.
                    </p>
                  </div>

                  <div className="text-[10px] font-bold text-[#9a0002] font-heading flex items-center gap-1 cursor-pointer hover:underline pt-3 border-t border-foreground/[0.04]">
                    View the full breakdown →
                  </div>
                </div>
              </Card>

              {/* Card 2 */}
              <Card className={`border border-foreground/[0.08] p-7 rounded-[22px] flex flex-col justify-between shadow-2xl h-full w-full
                ${theme === "light" ? "bg-white" : "bg-black"}
              `}>
                <div className="space-y-4 flex flex-col h-full justify-between">
                  <div className="space-y-1">
                    <div className="text-5xl font-black font-heading text-[#d97706] tracking-tight leading-none">
                      +180%
                    </div>
                    <div className="text-xs font-semibold text-foreground tracking-wide uppercase font-body mt-2">
                      demo signup conversions
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-foreground/45 uppercase tracking-wider font-heading">
                      Logistics Software Group — B2B Lead Gen
                    </div>
                    <p className="text-[11px] text-foreground/60 leading-relaxed font-body mt-2 line-clamp-3">
                      Through intent-focused Google Search campaigns and technical keyword cluster optimization, we captured high-intent pipeline leads and decreased customer acquisition cost by 42%.
                    </p>
                  </div>

                  <div className="text-[10px] font-bold text-[#d97706] font-heading flex items-center gap-1 cursor-pointer hover:underline pt-3 border-t border-foreground/[0.04]">
                    View the full breakdown →
                  </div>
                </div>
              </Card>

              {/* Card 3 */}
              <Card className={`border border-foreground/[0.08] p-7 rounded-[22px] flex flex-col justify-between shadow-2xl h-full w-full
                ${theme === "light" ? "bg-white" : "bg-black"}
              `}>
                <div className="space-y-4 flex flex-col h-full justify-between">
                  <div className="space-y-1">
                    <div className="text-5xl font-black font-heading text-[#2563eb] tracking-tight leading-none">
                      4.2x
                    </div>
                    <div className="text-xs font-semibold text-foreground tracking-wide uppercase font-body mt-2">
                      revenue scale via TikTok & SMS
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-foreground/45 uppercase tracking-wider font-heading">
                      Scale Activewear — E-Commerce
                    </div>
                    <p className="text-[11px] text-foreground/60 leading-relaxed font-body mt-2 line-clamp-3">
                      Leveraging high-hook creators combined with technical lifecycle retention flows, we drove customer lifetime value and organic reach while maintaining target ROAS.
                    </p>
                  </div>

                  <div className="text-[10px] font-bold text-[#2563eb] font-heading flex items-center gap-1 cursor-pointer hover:underline pt-3 border-t border-foreground/[0.04]">
                    View the full breakdown →
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>

      </div>
    </section>
  );
}
