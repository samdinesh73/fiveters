"use client";
import React, { useEffect, useRef, useState } from "react";
import RollingButton from "./RollingButton";
import FloatingLines from "./FloatingLines";
import { gsap } from "gsap";
import { ExpandableScreenTrigger } from "./ui/expandable-screen";

export default function Hero() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const eyebrowRef = useRef(null);
  const proofRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Hide initially
    gsap.set(eyebrowRef.current, { opacity: 0, y: 15 });
    gsap.set(headingRef.current, { opacity: 0, y: 35, scale: 0.98 });
    gsap.set(proofRef.current, { opacity: 0, y: 15 });
    gsap.set(textRef.current, { opacity: 0, y: 25 });
    gsap.set(buttonsRef.current.children, { opacity: 0 });

    const tl = gsap.timeline({ delay: 1.6 });

    tl.to(eyebrowRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    })
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        ease: "power3.out"
      }, "-=0.25")
      .to(proofRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4")
      .to(textRef.current, {
        opacity: 0.9,
        y: 0,
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.4")
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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground" style={{ paddingTop: '80px' }}>
      {/* Video wrapper with side spacing */}
      {/* <div className="absolute inset-0 w-full h-full" style={{ padding: `var(--space-video-y) var(--space-video-x)` }}>
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
      </div> */}

      {/* Interactive Floating Lines Shader Layer or Mobile Static Fallback */}
      {isMounted && !isMobile ? (
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ padding: `var(--space-video-y) var(--space-video-x)` }}
        >
          <div className={`w-full h-full rounded-2xl overflow-hidden ${theme === "light" ? "" : "opacity-40"}  mix-blend-screen`} style={{ borderRadius: 'var(--radius-video)' }}>
            <FloatingLines
              linesGradient={['#9a0002', '#efe6dd', '#9a0002']}
              enabledWaves={['top', 'middle', 'bottom']}
              lineCount={[10, 15, 12]}
              lineDistance={[8, 5, 6]}
              bendRadius={6.0}
              bendStrength={-1}
              interactive={true}
              parallax={true}
              parallaxStrength={0.12}
            // mixBlendMode="screen"
            />
          </div>
        </div>
      ) : (
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ padding: `var(--space-video-y) var(--space-video-x)` }}
        >
          <div className="w-full h-full rounded-2xl overflow-hidden opacity-40
          
           " style={{ borderRadius: 'var(--radius-video)' }} />
        </div>
      )}

      {/*  */}
      {/* <div className="absolute inset-0 mix-blend-multiply" style={{ padding: `var(--space-video-y) var(--space-video-x)` }}>
        <div className="w-full bg-gradient-to-b from-[rgba(10,12,20,0.15)] to-[rgba(10,12,20,0.35)] h-full rounded-2xl" style={{ borderRadius: 'var(--radius-video)' }} />
      </div> */}

      {/* Main Responsive Content Container */}
      <div className="relative z-40 max-w-4xl w-full text-center px-6 sm:px-12 py-20 flex flex-col items-center">
        {/* Eyebrow */}
        <span
          ref={eyebrowRef}
          className="inline-block text-[9px] sm:text-[10px] uppercase tracking-widest text-[#9a0002] font-bold font-body mb-6 px-3.5 py-1 bg-[#efe6dd] border border-red-500/10 rounded-full"
        >
          CREATIVE DIGITAL MARKETING AGENCY
        </span>

        {/* Headline */}
        <h1
          ref={headingRef}
          className="font-extrabold drop-shadow-2xl font-heading tracking-tight text-foreground"
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 4.25rem)',
            lineHeight: '1.08',
            letterSpacing: 'var(--ls-tight)',
            marginBottom: '20px'
          }}
        >
          Your Brand Deserves More Than Marketing.<br className="hidden sm:inline" />

        </h1>

        <h2 style={{
          fontSize: 'clamp(1.25rem, 4vw, 3.25rem)',
          lineHeight: '1.08',
          letterSpacing: 'var(--ls-tight)',
          marginBottom: '20px'
        }} className="font-extrabold drop-shadow-2xl font-heading tracking-tight text-foreground">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-[#9a0002]">
            It Deserves an Experience.
          </span></h2>

        {/* Proof Line */}
        <div
          ref={proofRef}
          className="text-foreground/70 font-body uppercase tracking-wider text-[10px] sm:text-xs mb-8 flex flex-wrap items-center justify-center gap-2"
        >
          {/* <span>$15M+ generated for clients</span>
          <span className="text-[#9a0002] font-bold">•</span>
          <span>150+ campaigns scaled</span>
          <span className="text-[#9a0002] font-bold">•</span>
          <span>4x avg ROAS</span>
           */}
          <p>It Deserves an Experience.</p>
        </div>

        {/* Subheading */}
        <p
          ref={textRef}
          className="text-foreground/80 max-w-3xl mx-auto mb-10 opacity-90 leading-relaxed font-body"
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)'
          }}
        >
          We combine storytelling, performance marketing, web development, SEO, and AI automation to create campaigns that customers remember—and businesses profit from.
        </p>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-sm sm:max-w-none">
          <ExpandableScreenTrigger className="w-full sm:w-auto">
            <RollingButton
              text="Request Your Free Scale Audit"
              className="w-full text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] hover:transition-transform hover:duration-200 btn-shimmer cursor-pointer uppercase tracking-wider text-xs"
              style={{ backgroundColor: 'var(--primary)' }}
            />
          </ExpandableScreenTrigger>
          <a
            href="#scale-engine"
            className="w-full sm:w-auto text-foreground font-semibold px-7 py-3.5 text-center hover:opacity-80 transition-opacity cursor-pointer uppercase tracking-wider text-xs font-body"
          >
            See how we work →
          </a>
        </div>
      </div>
    </section>
  );
}
