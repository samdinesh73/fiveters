"use client";
import React, { useEffect, useRef } from "react";
import RollingButton from "./RollingButton";
import Hyperspeed from "./Hyperspeed";
import { gsap } from "gsap";

export default function HeroRun() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Hide initially
    gsap.set(headingRef.current, { opacity: 0, y: 35, scale: 0.98 });
    gsap.set(textRef.current, { opacity: 0, y: 25 });
    gsap.set(buttonsRef.current.children, { opacity: 0 });

    const tl = gsap.timeline({ delay: 1.6 });

    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.85,
      ease: "power3.out"
    })
      .to(textRef.current, {
        opacity: 0.9,
        y: 0,
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.55")
      .fromTo(buttonsRef.current.children[0], {
        opacity: 0,
        x: -50
      }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power4.out"
      }, "-=0.45")
      .fromTo(buttonsRef.current.children[1], {
        opacity: 0,
        x: 50
      }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power4.out"
      }, "<");
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white" style={{ paddingTop: '80px' }}>
      
      {/* Interactive Hyperspeed Shader Background Layer */}
      <div
        className="absolute inset-0 z-20"
        style={{ padding: `var(--space-video-y) var(--space-video-x)` }}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden opacity-45 mix-blend-screen" style={{ borderRadius: 'var(--radius-video)' }}>
          <Hyperspeed
            effectOptions={{
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0x9a0002, 0xe11d48, 0xfecdd3], // Deep Crimson tones & cream
                rightCars: [0xefe6dd, 0xfbbf24, 0xf59e0b], // Warm cream, amber, and gold
                sticks: [0x9a0002, 0xefe6dd, 0x82fa4b] // Crimson, cream, and neon green
              }
            }}
          />
        </div>
      </div>

      <div className="absolute inset-0 mix-blend-multiply pointer-events-none" style={{ padding: `var(--space-video-y) var(--space-video-x)` }}>
        <div className="w-full bg-gradient-to-b from-[rgba(10,12,20,0.4)] to-[rgba(10,12,20,0.65)] h-full rounded-2xl" style={{ borderRadius: 'var(--radius-video)' }} />
      </div>

      {/* Main Responsive Content Container */}
      <div className="relative z-40 max-w-4xl w-full text-center px-6 sm:px-12 py-20 flex flex-col items-center">
        <h1
          ref={headingRef}
          className="font-extrabold drop-shadow-2xl font-heading tracking-tight"
          style={{
            fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
            lineHeight: '1.08',
            letterSpacing: 'var(--ls-tight)',
            marginBottom: '20px'
          }}
        >
          We Scale Brands Through Cinematic Digital Marketing
        </h1>

        <p
          ref={textRef}
          className="text-white/80 max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed font-body"
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)'
          }}
        >
          Fiveters is a premier digital marketing agency driving exponential growth through high-performance ads, SEO, creative design, and automated retention systems.
        </p>

        {/* Buttons responsive stack */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-sm sm:max-w-none">
          <RollingButton
            text="Book a Consultation"
            className="w-full sm:w-auto text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] hover:transition-transform hover:duration-200 btn-shimmer cursor-pointer uppercase tracking-wider text-xs"
            style={{ backgroundColor: 'var(--primary)' }}
          />
          <RollingButton
            text="Explore Services"
            className="w-full sm:w-auto text-[#FBEDD3] font-semibold px-7 py-3.5 rounded-full border hover:bg-white/10 active:scale-[0.98] hover:transition hover:duration-200 btn-shimmer cursor-pointer uppercase tracking-wider text-xs"
            style={{ backgroundColor: 'rgba(251, 237, 211, 0.12)', borderColor: 'rgba(251, 237, 211, 0.25)' }}
          />
        </div>
      </div>

    </section>
  );
}
