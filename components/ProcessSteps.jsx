"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEPS = [
  {
    title: "Kickoff call & brand discovery",
    desc: "We begin by understanding your vision and goals through a detailed discovery call to align on the project's direction.",
  },
  {
    title: "Strategy, wireframes & creative direction",
    desc: "We translate discovery insights into an actionable strategy, mapping out key user journeys and visual design systems.",
  },
  {
    title: "Design & high-fidelity prototyping",
    desc: "We craft custom, premium visual designs and interactive prototypes, refining transitions and aesthetic details.",
  },
  {
    title: "Development & performance optimization",
    desc: "We write clean, responsive frontend code, integrate seamless scroll animations, and optimize for blazing-fast speed.",
  },
];

export default function ProcessSteps() {
  const containerRef = useRef(null);
  const lineFillRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // 1. Central progress line animation linked directly to scroll position
    const lineTrigger = gsap.fromTo(
      lineFillRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 35%",
          end: "bottom 65%",
          scrub: true,
        },
      }
    );

    // 2. Animate step elements individually as they scroll into view
    const animations = [];
    stepsRef.current.forEach((step, idx) => {
      if (!step) return;

      const circle = step.querySelector(".step-circle");
      const dot = step.querySelector(".step-dot");
      const content = step.querySelector(".step-content");
      const num = step.querySelector(".step-number");

      // Set initial state
      gsap.set(content, { opacity: 0.15, y: 15 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: "top 55%",
          end: "bottom 55%",
          toggleActions: "play reverse play reverse",
        },
      })
        .to(circle, {
          borderColor: "#9a0002",
          scale: 1.15,
          boxShadow: "0 0 25px rgba(154, 0, 2, 0.4)",
          backgroundColor: "rgba(154, 0, 2, 0.1)",
          duration: 0.35,
          ease: "power2.out",
        })
        .to(dot, {
          backgroundColor: "#9a0002",
          scale: 1.2,
          duration: 0.25,
          ease: "power2.out",
        }, "<")
        .to(num, {
          color: "#efe6dd",
          duration: 0.2,
        }, "<")
        .to(content, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out",
        }, "-=0.2");

      animations.push(tl);
    });

    return () => {
      lineTrigger.scrollTrigger?.kill();
      animations.forEach(anim => anim.scrollTrigger?.kill());
    };
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-[#07080a] text-white py-32 px-6 md:px-12 relative overflow-hidden border-t border-white/[0.02]"
    >
      {/* Header Info */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-30">
        <span className="px-3.5 py-1 bg-green-950/20 text-[#4ade80] border border-[#4ade80]/15 text-[10px] font-bold rounded-full uppercase tracking-widest mb-4 inline-block font-heading">
          Process
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-6">
          How we'll work together
        </h2>
        <p className="text-sm md:text-base text-white/55 font-light leading-relaxed max-w-2xl mx-auto font-body">
          We follow a process that's transparent, collaborative, and results-driven—built around clear communication and creative problem-solving.
        </p>
      </div>

      {/* Timeline steps container */}
      <div className="max-w-5xl mx-auto relative px-2 md:px-0">

        {/* Core background timeline track */}
        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-white/[0.08]" />

        {/* Coordinated GSAP scroll progress bar */}
        <div
          ref={lineFillRef}
          className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-[#9a0002] origin-top scale-y-0"
        />

        {/* Steps loop */}
        <div className="space-y-16 md:space-y-24 relative">
          {STEPS.map((s, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                ref={(el) => (stepsRef.current[idx] = el)}
                className="process-step-row relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[140px]"
              >
                {/* Visual Circle Indicator */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0a0b10] border-2 border-white/10 flex items-center justify-center z-10 transition-all duration-500 step-circle shadow-[0_0_0_0_transparent]">
                  <div className="step-dot w-2.5 h-2.5 rounded-full bg-white/20 transition-all duration-500" />
                </div>

                {/* Alternating Content Column */}
                <div
                  className={`relative pl-14 md:pl-0 z-10 step-content transition-all duration-500 ${isLeft
                      ? "md:col-span-1 md:text-right md:pr-14"
                      : "md:col-start-2 md:col-span-1 md:pl-14"
                    }`}
                >
                  <div className="step-number text-[11px] font-bold tracking-widest text-[#9a0002] uppercase mb-1.5 transition-colors duration-300">
                    STEP {idx + 1}
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold tracking-tight font-heading text-white">
                    {s.title}
                  </h3>
                  <p
                    className={`text-xs md:text-sm text-white/55 mt-2 leading-relaxed font-body max-w-sm ${isLeft ? "md:ml-auto md:mr-0" : "md:ml-0 md:mr-auto"
                      }`}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
