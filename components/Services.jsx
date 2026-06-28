"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import RollingButton from "./RollingButton";

const SERVICES = [
  {
    title: "Content marketing strategy",
    desc: "Create compelling content that resonates with your audience and drives engagement.",
    image: "/service_content.png",
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-white/70 group-hover:text-black/80 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 35 L50 20 L75 35 L50 50 Z" />
        <path d="M25 50 L50 35 L75 50 L50 65 Z" opacity="0.8" />
        <path d="M25 65 L50 50 L75 65 L50 80 Z" opacity="0.6" />
        <path d="M25 35 L25 65" />
        <path d="M50 50 L50 80" />
        <path d="M75 35 L75 65" />
      </svg>
    ),
  },
  {
    title: "Conversion rate optimization",
    desc: "Improve landing pages and funnels to increase leads and sales.",
    image: "/service_conversion.png",
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-white/70 group-hover:text-black/80 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Left Column Bar */}
        <path d="M25 60 L37.5 52.5 L50 60 L37.5 67.5 Z" />
        <path d="M25 60 L25 80 L37.5 87.5 L37.5 67.5 Z" />
        <path d="M37.5 67.5 L37.5 87.5 L50 80 L50 60 Z" />
        {/* Right Column Bar */}
        <path d="M50 40 L62.5 32.5 L75 40 L62.5 47.5 Z" />
        <path d="M50 40 L50 80 L62.5 87.5 L62.5 47.5 Z" />
        <path d="M62.5 47.5 L62.5 87.5 L75 80 L75 40 Z" />
      </svg>
    ),
  },
  {
    title: "Creative & production",
    desc: "Design, copy, and creatives built for performance across channels.",
    image: "/service_creative.png",
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-white/70 group-hover:text-black/80 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z" />
        <path d="M50 20 L50 80" />
        <path d="M20 35 L50 50 L80 35" />
        <path d="M20 65 L50 50 L80 65" />
      </svg>
    ),
  },
  {
    title: "Email & SMS marketing",
    desc: "Engage your audience with targeted email and SMS campaigns.",
    image: "/service_email.png",
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-white/70 group-hover:text-black/80 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="50" cy="50" r="30" strokeDasharray="6 6" />
        <path d="M50 20 C65 20, 80 35, 80 50 C80 65, 65 80, 50 80 C35 80, 20 65, 20 50 C20 35, 35 20, 50 20 Z" />
        <path d="M50 20 L50 80" />
        <path d="M20 50 L80 50" />
        <path d="M29 29 L71 71" />
        <path d="M29 71 L71 29" />
      </svg>
    ),
  },
];

export default function Services() {
  const listRef = useRef(null);
  const imageRef = useRef(null);
  const [activeImage, setActiveImage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    // Position the image card at the exact center of the cursor
    gsap.set(imageRef.current, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e) => {
      const rect = list.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Animate the image position smoothly following the mouse
      gsap.to(imageRef.current, {
        x: x,
        y: y,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    list.addEventListener("mousemove", onMouseMove);
    return () => {
      list.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const handleMouseEnter = (imagePath) => {
    setActiveImage(imagePath);
    setIsHovered(true);

    gsap.to(imageRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    gsap.to(imageRef.current, {
      scale: 0.85,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        if (!isHovered) {
          setActiveImage("");
        }
      },
    });
  };

  return (
    <section className="bg-[#07080a] text-white py-28 px-6 md:px-12 border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Column - Sticky Content */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
          <div className="flex items-center gap-2 text-[#9a0002] text-xs font-semibold uppercase tracking-widest">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="animate-pulse">
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.6h7.6z" />
            </svg>
            <span>Our Services</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] font-heading max-w-md">
            Marketing solutions that drive results
          </h2>

          <p className="text-sm md:text-base text-white/55 font-light leading-relaxed max-w-sm" style={{ fontFamily: "var(--font-body)" }}>
            Trusted by 100+ businesses in retail, healthcare, tech, and more.
          </p>

          <RollingButton
            text="Explore all services"
            className="px-5 py-3 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-full flex items-center gap-2.5 transition-all duration-200 hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer font-heading"
          >
            <div className="w-5.5 h-5.5 rounded-full bg-black flex items-center justify-center text-white ml-2.5">
              <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </RollingButton>
        </div>

        {/* Right Column - Services List with Cursor Follow Effect */}
        <div ref={listRef} className="lg:col-span-7 relative flex flex-col">

          {/* Floating image card wrapper */}
          <div
            ref={imageRef}
            className="hidden md:block pointer-events-none absolute w-56 h-64 rounded-3xl overflow-hidden opacity-0 scale-90 z-30 shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/10"
            style={{
              left: 0,
              top: 0,
              transform: "translate3d(0, 0, 0)",
            }}
          >
            {activeImage && (
              <img
                src={activeImage}
                alt="Service hover visualization"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            )}
          </div>

          {/* List layout */}
          <div className="flex flex-col border-t border-white/[0.04]">
            {SERVICES.map((s, idx) => (
              <div
                key={idx}
                onMouseEnter={() => handleMouseEnter(s.image)}
                onMouseLeave={handleMouseLeave}
                className="group relative flex flex-col sm:flex-row items-start gap-6 p-8 sm:p-10 transition-all duration-300 border-b border-white/[0.04] hover:bg-white hover:text-black hover:rounded-3xl cursor-pointer"
              >
                {/* Isometric SVG container */}
                <div className="flex-shrink-0 p-2 sm:p-3 bg-[#11131a] rounded-2xl border border-white/[0.04] group-hover:bg-[#11131a]/5 group-hover:border-black/5 transition-colors">
                  {s.icon}
                </div>

                {/* Content area */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-heading">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/50 group-hover:text-black/60 font-light leading-relaxed transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
