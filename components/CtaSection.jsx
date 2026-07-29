"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RollingButton from "./RollingButton";
import DotField from "./DotField";
import { ExpandableScreenTrigger } from "./ui/expandable-screen";
import { MaskedAvatars } from "./ui/masked-avatars";

const CTA_AVATARS = [
  { avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200", name: "Alex Rivera" },
  { avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200", name: "Marcus Vance" },
  { avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200", name: "Elena Rostova" },
  { avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200", name: "Siddharth Mehta" },
  { avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200", name: "Chloe Dubois" },
];

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
      className="relative w-full bg-background text-foreground py-28 px-6 flex flex-col items-center justify-center overflow-hidden border-t border-foreground/[0.02]"
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
        className="flex items-center justify-center mb-10"
      >
        <MaskedAvatars avatars={CTA_AVATARS} size={60} border={3} column={36} ringed={false} />
      </div>

      {/* Main Title Heading */}
      <div ref={titleRef} className="text-center mb-8 relative z-10">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-[#9a0002] text-[32px] sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.12] max-w-4xl mx-auto font-heading">
          Ready to see what scale <br className="hidden sm:inline" />
          actually looks like?
        </h2>
      </div>

      {/* Description & Action Section */}
      <div
        ref={contentRef}
        className="flex flex-col items-center text-center relative z-10"
      >
        <p className="text-foreground/60 text-xs sm:text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed mb-10 font-body">
          Get a free audit of your SEO and paid channels — no obligation, no generic report, just what's actually working.
        </p>

        {/* Strategy Call Button */}
        <ExpandableScreenTrigger>
          <RollingButton
            text="Request Your Free Scale Audit"
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#9a0002] text-white font-semibold text-xs sm:text-sm rounded-[20px] flex items-center gap-3 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-xl cursor-pointer font-heading tracking-wide"
          >
            <div className="w-5.5 h-5.5 rounded-full bg-white flex items-center justify-center text-[#9a0002] ml-3">
              <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </RollingButton>
        </ExpandableScreenTrigger>

        {/* Sub-note with curved indicator arrow */}
        <div className="flex items-center justify-center mt-6 relative h-10 w-48">
          {/* Curved dashed arrow pointing up-right to the text */}
          <svg
            viewBox="0 0 100 45"
            className="text-foreground/35 transform -scale-x-100 rotate-[-15deg] absolute -left-12 -top-2 w-14 h-9 hidden md:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M10 40 C 35 15, 60 15, 85 30" strokeDasharray="3 3" />
            <path d="M85 30 L74 27 M85 30 L80 18" />
          </svg>

          <span
            className="text-foreground/50 text-[17px] tracking-wide font-light italic"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            No sign up required
          </span>
        </div>
      </div>
    </section>
  );
}
