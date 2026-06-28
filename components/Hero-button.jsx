"use client";
import React from "react";
import RollingButton from "./RollingButton";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white" style={{ paddingTop: '80px' }}>
      {/* Video wrapper with side spacing */}
      <div className="absolute inset-0 w-full h-full" style={{ padding: `var(--space-video-y) var(--space-video-x)` }}>
        <div className="w-full h-full rounded-2xl overflow-hidden" style={{ borderRadius: 'var(--radius-video)' }}>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/poster.jpg"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>

      <div className="absolute inset-0 mix-blend-multiply" style={{ padding: `var(--space-video-y) var(--space-video-x)` }}>
        <div className="w-full bg-gradient-to-b from-[rgba(10,12,20,0.45)] to-[rgba(10,12,20,0.65)] h-full rounded-2xl" style={{ borderRadius: 'var(--radius-video)' }} />
      </div>

      {/* Main Responsive Content Container */}
      <div className="relative z-40 max-w-4xl w-full text-center px-6 sm:px-12 py-20 flex flex-col items-center">
        <h1 
          className="font-extrabold drop-shadow-2xl font-heading tracking-tight" 
          style={{ 
            fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', 
            lineHeight: '1.08', 
            letterSpacing: 'var(--ls-tight)', 
            marginBottom: '20px' 
          }}
        >
          Crafting Digital Products with Cinematic Design
        </h1>
        
        <p 
          className="text-white/80 max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed font-body" 
          style={{ 
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)'
          }}
        >
          We build premium experiences — elegant, performant, and meticulously crafted for modern teams.
        </p>

        {/* Buttons responsive stack */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-sm sm:max-w-none">
          <RollingButton
            text="Get Started"
            className="w-full sm:w-auto text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform btn-shimmer cursor-pointer uppercase tracking-wider text-xs"
            style={{ backgroundColor: 'var(--primary)' }}
          />
          <RollingButton
            text="Learn More"
            className="w-full sm:w-auto text-[#FBEDD3] font-semibold px-7 py-3.5 rounded-full border hover:bg-white/10 active:scale-[0.98] transition btn-shimmer cursor-pointer uppercase tracking-wider text-xs"
            style={{ backgroundColor: 'rgba(251, 237, 211, 0.12)', borderColor: 'rgba(251, 237, 211, 0.25)' }}
          />
        </div>
      </div>

      <div className="hidden lg:block absolute right-[8%] bottom-[12%] w-64 h-32 rounded-2xl bg-white/6 backdrop-blur-[18px] border border-white/8 shadow-2xl z-45" aria-hidden />
    </section>
  );
}
