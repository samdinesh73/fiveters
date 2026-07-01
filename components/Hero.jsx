"use client";
import React, { useEffect, useRef } from "react";
import RollingButton from "./RollingButton";
import FloatingLines from "./FloatingLines";
import { gsap } from "gsap";

export default function Hero() {
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

      {/* Interactive Floating Lines Shader Layer */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ padding: `var(--space-video-y) var(--space-video-x)` }}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden opacity-40 mix-blend-screen" style={{ borderRadius: 'var(--radius-video)' }}>
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
            mixBlendMode="screen"
          />
        </div>
      </div>
      {/*  */}
      <div className="absolute inset-0 mix-blend-multiply" style={{ padding: `var(--space-video-y) var(--space-video-x)` }}>
        <div className="w-full bg-gradient-to-b from-[rgba(10,12,20,0.15)] to-[rgba(10,12,20,0.35)] h-full rounded-2xl" style={{ borderRadius: 'var(--radius-video)' }} />
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
          className="text-foreground/80 max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed font-body"
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)'
          }}
        >
          Fiveters is a premier digital marketing agency driving exponential growth through high-performance ads, SEO, creative design, and automated retention systems.
        </p>


        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-sm sm:max-w-none">
          <RollingButton
            text="Book a Consultation"
            className="w-full sm:w-auto text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] hover:transition-transform hover:duration-200 btn-shimmer cursor-pointer uppercase tracking-wider text-xs"
            style={{ backgroundColor: 'var(--primary)' }}
          />
          <RollingButton
            text="Explore Services"
            className="w-full sm:w-auto text-foreground font-semibold px-7 py-3.5 rounded-full border border-foreground/20 hover:bg-foreground/5 active:scale-[0.98] hover:transition hover:duration-200 btn-shimmer cursor-pointer uppercase tracking-wider text-xs bg-foreground/3"
          />
        </div>
      </div>


    </section>
  );
}
