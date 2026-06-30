"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RollingButton from "./RollingButton";
import DotField from "./DotField";

export default function CtaSection() {
  const containerRef = useRef(null);
  const avatarsRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Avatars staggered pop-in with alternating top/bottom starts
      gsap.fromTo(
        avatarsRef.current.children,
        {
          opacity: 0,
          y: (index) => (index % 2 === 0 ? -50 : 50),
          scale: 0.8,
          filter: "blur(8px)"
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Title slide up
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3. Sub-content fade/slide up
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 4. Parallax subtle motion on heading badges during scroll
      // gsap.to(".capsule-pill", {
      //   x: 18,
      //   rotation: 4,
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: "top bottom",
      //     end: "bottom top",
      //     scrub: 1.2,
      //   },
      // });

      gsap.to(".capsule-box", {
        y: -12,
        rotation: -6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#07080a] text-white py-28 px-6 flex flex-col items-center justify-center overflow-hidden border-t border-white/[0.02]"
    >
      {/* DotField background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-85">
        <DotField
          dotRadius={2.8}
          dotSpacing={16}
          bulgeStrength={75}
          glowRadius={240}
          sparkle={true}
          waveAmplitude={4}
          gradientFrom="rgba(239, 230, 221, 0.35)"
          gradientTo="rgba(154, 0, 2, 0.48)"
          glowColor="rgba(154, 0, 2, 0.2)"
        />
      </div>

      {/* Background soft glowing blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Avatars Container */}
      <div
        ref={avatarsRef}
        className="flex items-center justify-center -space-x-4 mb-10"
      >
        {/* Avatar 1 */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#07080a] overflow-hidden shadow-2xl relative hover:z-10 hover:scale-105 hover:border-indigo-400 transition-all duration-300">
          <img src="/images/team_ceo.png" alt="" />
        </div>

        {/* Avatar 2 */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#07080a] overflow-hidden shadow-2xl relative hover:z-10 hover:scale-105 hover:border-amber-400 transition-all duration-300">
          <img src="/images/team_creative.png" alt="" />
        </div>

        {/* Avatar 3 */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#07080a] overflow-hidden shadow-2xl relative hover:z-10 hover:scale-105 hover:border-red-400 transition-all duration-300">
          <img src="/images/team_performance.png" alt="" />
        </div>

        {/* Avatar 4 */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#07080a] overflow-hidden shadow-2xl relative hover:z-10 hover:scale-105 hover:border-cyan-400 transition-all duration-300">
          <img src="/images/team_ceo.png" alt="" />
        </div>

        {/* Avatar 5 */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#07080a] overflow-hidden shadow-2xl relative hover:z-10 hover:scale-105 hover:border-cyan-400 transition-all duration-300">
          <img src="/images/team_creative.png" alt="" />
        </div>
      </div>

      {/* Main Title Heading */}
      <div ref={titleRef} className="text-center mb-8 relative z-10">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#9a0002] text-[32px] sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.12] max-w-4xl mx-auto font-heading">
          Turn clicks{" "}
          <span className="capsule-pill inline-flex items-center justify-center w-[62px] sm:w-[84px] md:w-[110px] h-[28px] sm:h-[38px] md:h-[50px] rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-orange-400 mx-1 md:mx-2 overflow-hidden align-middle border border-white/10 shadow-lg relative group transition-transform duration-300 hover:scale-105">
            <img src="/images/marketing_showcase.png" alt="" />
          </span>{" "}
          Into customers
          <br />
          <span className="capsule-box inline-flex items-center justify-center w-[40px] sm:w-[50px] md:w-[68px] h-[40px] sm:h-[50px] md:h-[68px] rounded-[14px] sm:rounded-[18px] bg-teal-400 mx-1.5 md:mx-2.5 overflow-hidden align-middle border border-white/10 shadow-lg rotate-[-12deg] relative group transition-transform duration-300 hover:scale-105 hover:rotate-[0deg]">
            <img src="/images/avatar.jpg" alt="" />
          </span>{" "}
          the smarter way
        </h2>
      </div>

      {/* Description & Action Section */}
      <div
        ref={contentRef}
        className="flex flex-col items-center text-center relative z-10"
      >
        <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed mb-10" style={{ fontFamily: "var(--font-body)" }}>
          No guesswork. We use AI + proven marketing systems to scale ads, SEO, and conversion.
        </p>

        {/* Strategy Call Button */}
        <RollingButton
          text="Book a strategy call"
          className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-semibold text-xs sm:text-sm rounded-[20px] flex items-center gap-3 transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.03] active:scale-[0.97] shadow-xl hover:shadow-[0_15px_30px_rgba(255,255,255,0.08)] cursor-pointer font-heading tracking-wide"
        >
          <div className="w-5.5 h-5.5 rounded-full bg-black flex items-center justify-center text-white ml-3">
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </RollingButton>

        {/* Sub-note with curved indicator arrow */}
        <div className="flex items-center justify-center mt-6 relative h-10 w-48">
          {/* Curved dashed arrow pointing up-right to the text */}
          <svg
            viewBox="0 0 100 45"
            className="text-white/35 transform -scale-x-100 rotate-[-15deg] absolute -left-12 -top-2 w-14 h-9 hidden md:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M10 40 C 35 15, 60 15, 85 30" strokeDasharray="3 3" />
            <path d="M85 30 L74 27 M85 30 L80 18" />
          </svg>

          <span
            className="text-white/50 text-[17px] tracking-wide font-light italic"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            No sign up required
          </span>
        </div>
      </div>
    </section>
  );
}
