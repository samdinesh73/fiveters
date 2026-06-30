"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RollingButton from "./RollingButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    title: "Paid Ads & Search Engine Marketing",
    desc: "Scale acquisition with high-intent Meta, Google, and TikTok paid media funnels.",
    image: "/service_conversion.png",
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-white/70 group-hover:text-black/80 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 70 L40 50 L60 60 L80 30" />
        <circle cx="80" cy="30" r="4" fill="currentColor" />
        <path d="M20 80 L80 80" />
        <path d="M20 20 L20 80" />
      </svg>
    ),
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Dominate search engine rankings, capture organic intent, and multiply free pipeline leads.",
    image: "/service_content.png",
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-white/70 group-hover:text-black/80 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="45" cy="45" r="20" />
        <line x1="60" y1="60" x2="80" y2="80" />
        <path d="M35 45 H55" />
        <path d="M45 35 V55" />
      </svg>
    ),
  },
  {
    title: "Website Design & Development",
    desc: "Deploy lightning-fast, conversion-optimized responsive web builds using Next.js and Tailwind.",
    image: "/service_creative.png",
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-white/70 group-hover:text-black/80 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="25" width="60" height="40" rx="4" />
        <path d="M35 75 L65 75" />
        <path d="M50 65 V75" />
        <path d="M28 35 H72" />
      </svg>
    ),
  },
  {
    title: "Custom Software Development",
    desc: "Architect scalable backend engines, SaaS cloud infrastructure, APIs, and headless business systems.",
    image: "/service_email.png",
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-white/70 group-hover:text-black/80 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M35 40 L20 50 L35 60" />
        <path d="M65 40 L80 50 L65 60" />
        <line x1="55" y1="30" x2="45" y2="70" />
      </svg>
    ),
  },
  {
    title: "Creative Copy & Visual Assets",
    desc: "Produce high-converting landing designs, cinematic short-form video ads, and engaging brand copy.",
    image: "/service_content.png",
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-white/70 group-hover:text-black/80 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z" />
        <path d="M50 20 L50 80" />
        <path d="M20 35 L50 50 L80 35" />
      </svg>
    ),
  },
  {
    title: "Email & SMS Retention Campaigns",
    desc: "Automate retention flows, newsletters, and win-back sequences that maximize customer lifetime value.",
    image: "/service_email.png",
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-white/70 group-hover:text-black/80 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="30" width="60" height="40" rx="3" />
        <path d="M20 30 L50 55 L80 30" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const imageRef = useRef(null);
  const [activeImage, setActiveImage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  /* ── Scroll-driven entrance animations ── */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Left column: badge → heading → body → button, each staggered
      gsap.fromTo(
        ".services-left-animate > *",
        { opacity: 0, y: 50, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".services-left-animate",
            start: "top 82%",
            toggleActions: "play none none reset",
          },
        }
      );

      // Each service row gets its OWN ScrollTrigger so it fires
      // only when that individual row enters the viewport — not all at once.
      gsap.utils.toArray(".service-row-animate", el).forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0.4, y: 55, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power4.out",
            scrollTrigger: {
              trigger: row,          // each row is its own trigger
              start: "top 88%",      // fires when row bottom enters viewport
              toggleActions: "play none none reset",  // reset on scroll-back so it re-animates
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  /* ── Cursor-follow floating image ── */
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    gsap.set(imageRef.current, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e) => {
      const rect = list.getBoundingClientRect();
      gsap.to(imageRef.current, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    list.addEventListener("mousemove", onMouseMove);
    return () => list.removeEventListener("mousemove", onMouseMove);
  }, []);

  const handleMouseEnter = (imagePath) => {
    setActiveImage(imagePath);
    setIsHovered(true);
    gsap.to(imageRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(imageRef.current, {
      scale: 0.85,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => { if (!isHovered) setActiveImage(""); },
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-[#07080a] text-white py-28 px-6 md:px-12 border-t border-white/[0.02]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Column – animated children */}
        <div className="services-left-animate lg:col-span-5 lg:sticky lg:top-32 space-y-6">
          <div className="flex items-center gap-2 text-[#9a0002] text-xs font-semibold uppercase tracking-widest">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="animate-pulse">
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.6h7.6z" />
            </svg>
            <span>Our Services</span>
          </div>

          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#9a0002] text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] font-heading max-w-md">
            Marketing solutions that drive results
          </h2>

          <p className="text-sm md:text-base text-white/55 font-light leading-relaxed max-w-sm font-body">
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

        {/* Right Column – service rows */}
        <div ref={listRef} className="lg:col-span-7 relative flex flex-col">

          {/* Floating image card */}
          <div
            ref={imageRef}
            className="hidden md:block pointer-events-none absolute w-56 h-64 rounded-3xl overflow-hidden opacity-0 scale-90 z-30 shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/10"
            style={{ left: 0, top: 0, transform: "translate3d(0,0,0)" }}
          >
            {activeImage && (
              <img
                src={activeImage}
                alt="Service hover visualization"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            )}
          </div>

          {/* Service list */}
          <div className="flex flex-col border-t border-white/[0.04]">
            {SERVICES.map((s, idx) => (
              <div
                key={idx}
                onMouseEnter={() => handleMouseEnter(s.image)}
                onMouseLeave={handleMouseLeave}
                className="service-row-animate group relative flex flex-col sm:flex-row items-start gap-6 p-8 sm:p-10 border-b border-white/[0.04] hover:text-black hover:rounded-3xl cursor-pointer overflow-hidden transition-all duration-300"
              >
                {/* Sliding white background overlay on hover */}
                <div className="absolute inset-0 bg-white transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 p-2 sm:p-3 bg-[#11131a] rounded-2xl border border-white/[0.04] group-hover:bg-[#11131a]/5 group-hover:border-black/5 transition-colors">
                  {s.icon}
                </div>

                {/* Text */}
                <div className="relative z-10 flex-1 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-heading">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-white/50 group-hover:text-black/60 font-light leading-relaxed transition-colors font-body">
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
