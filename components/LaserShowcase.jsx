"use client";
import React, { useRef } from "react";
import LaserFlow from "./LaserFlow";

export default function LaserShowcase() {
  const revealImgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const el = revealImgRef.current;
    if (el) {
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    }
  };

  const handleMouseLeave = () => {
    const el = revealImgRef.current;
    if (el) {
      el.style.setProperty("--mx", "-9999px");
      el.style.setProperty("--my", "-9999px");
    }
  };

  return (
    <section
      className="relative md:h-[650px] h-[950px] w-full bg-background overflow-hidden cursor-crosshair border-b border-foreground/[0.02] flex items-center justify-center px-6"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. LaserFlow Shader Background */}
      <div className="absolute inset-0 z-0 flowposition">
        <LaserFlow
          horizontalBeamOffset={0.0} // Centered horizontally
          verticalBeamOffset={-0.05} // Shifted slightly down to land perfectly on top edge of card
          horizontalSizing={0.65}
          verticalSizing={1.8} // Decreased vertical sizing factor to shorten the beam height
          wispDensity={4}
          wispIntensity={15}
          flowStrength={0.75}
          color="#9a0002" // Deep Crimson brand color!
        />
      </div>

      {/* 2. Interactive Mockup Image (revealed by radial mask) */}
      <img
        ref={revealImgRef}
        src="/images/marketing_showcase.png"
        alt="Analytics Reveal Showcase"
        className="absolute inset-0 w-full h-full object-cover z-10 select-none pointer-events-none opacity-35 mix-blend-lighten"
        style={{
          "--mx": "-9999px",
          "--my": "-9999px",
          WebkitMaskImage: "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.9) 60px, rgba(255,255,255,0.55) 130px, rgba(255,255,255,0.2) 200px, rgba(255,255,255,0) 280px)",
          maskImage: "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.9) 60px, rgba(255,255,255,0.55) 130px, rgba(255,255,255,0.2) 200px, rgba(255,255,255,0) 280px)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat"
        }}
      />

      {/* 3. Foreground Overlay Box: Digital Marketing copy */}
      <div className="flowboxposition relative z-20 w-full max-w-4xl bg-gradient-to-br border rounded-2xl from-background/92 to-background/96 backdrop-blur-[24px] border border-foreground/[0.08] shadow-[0_0_50px_-12px_rgba(154,0,2,0.3)] overflow-hidden p-8 md:p-12">

        {/* Laser contact splash top glowing line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ef4444] to-transparent shadow-[0_2px_12px_rgba(239,68,68,0.6)]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Context Copy */}
          <div className="lg:col-span-7 text-left space-y-5">
            <span className="px-3.5 py-1 bg-[#efe6dd] text-[#ef4444] border border-[#ef4444]/15 text-[10px] font-bold rounded-full uppercase tracking-widest inline-block font-heading">
              Interactive Showcase
            </span>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-[#9a0002] text-3xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight">
              Reveal the data that drives growth
            </h2>
            <p className="text-xs md:text-sm text-foreground/60 font-light leading-relaxed font-body">
              Hover and scrape the dark space to illuminate our custom real-time campaign performance dashboard. We build clarity directly into your scale metrics.
            </p>

            <div className="pt-2">
              <button className="cursor-target px-6 py-3 bg-[#9a0002] hover:bg-[#b50003] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(154,0,2,0.35)] hover:shadow-[0_0_25px_rgba(154,0,2,0.6)]">
                Launch Campaign Tracker
              </button>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Widget */}
          <div className="lg:col-span-5">
            <div className="bg-surface border border-foreground/[0.06] rounded-2xl p-5 space-y-4 shadow-inner relative overflow-hidden text-left">
              {/* Subtle grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

              {/* Widget Header */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-bold tracking-wider text-green-500 uppercase font-heading">
                    LIVE ACCELERATION
                  </span>
                </div>
                <span className="text-[9px] text-foreground/30 font-mono">ID: 5TR-880</span>
              </div>

              {/* Big Metric */}
              <div className="space-y-0.5 relative z-10">
                <div className="text-3xl md:text-4xl font-extrabold font-heading text-foreground tracking-tight">
                  4.8x <span className="text-xs font-semibold text-green-500 font-body ml-2">+24%</span>
                </div>
                <div className="text-[10px] text-foreground/45 uppercase tracking-widest font-body">
                  Average Campaign ROAS
                </div>
              </div>

              {/* Channel bars */}
              <div className="space-y-3 relative z-10 pt-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] text-foreground/50 font-bold uppercase tracking-wider">
                    <span>Meta Ads</span>
                    <span className="text-[#ef4444]">82%</span>
                  </div>
                  <div className="h-1.5 w-full bg-foreground/[0.04] rounded-full overflow-hidden">
                    <div className="h-full bg-[#9a0002] rounded-full" style={{ width: "82%" }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] text-foreground/50 font-bold uppercase tracking-wider">
                    <span>Google Search</span>
                    <span className="text-foreground/80">64%</span>
                  </div>
                  <div className="h-1.5 w-full bg-foreground/[0.04] rounded-full overflow-hidden">
                    <div className="h-full bg-foreground/30 rounded-full" style={{ width: "64%" }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] text-foreground/50 font-bold uppercase tracking-wider">
                    <span>TikTok Creative</span>
                    <span className="text-green-500">45%</span>
                  </div>
                  <div className="h-1.5 w-full bg-foreground/[0.04] rounded-full overflow-hidden">
                    <div className="h-full bg-green-500/50 rounded-full" style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
