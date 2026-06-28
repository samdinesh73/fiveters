"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CursorImageTrail() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all elements with class 'flair' inside the container
    const flairs = container.querySelectorAll(".flair");
    if (!flairs.length) return;

    let index = 0;
    const wrapper = gsap.utils.wrap(0, flairs.length);
    const gap = 85; // space out the trail elements in pixels

    let mousePos = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation timeline for each individual flair shape
    const playAnimation = (shape) => {
      const tl = gsap.timeline();

      tl.fromTo(
        shape,
        {
          opacity: 0,
          scale: 0,
          rotation: 0,
          y: 0,
        },
        {
          opacity: 1,
          scale: gsap.utils.random(0.65, 1.25),
          ease: "elastic.out(1, 0.3)",
          duration: 0.5,
        }
      )
        .to(
          shape,
          {
            rotation: gsap.utils.random(-360, 360),
            duration: 0.6,
          },
          "<"
        )
        .to(
          shape,
          {
            y: "115vh",
            opacity: 0,
            ease: "back.in(0.4)",
            duration: 1.3,
          },
          0
        );
    };

    // Calculate mouse velocity and trigger falling animations
    const ImageTrail = () => {
      const travelDistance = Math.hypot(
        lastMousePos.x - mousePos.x,
        lastMousePos.y - mousePos.y
      );

      if (travelDistance > gap) {
        const wrappedIndex = wrapper(index);
        const img = flairs[wrappedIndex];

        gsap.killTweensOf(img);
        gsap.set(img, { clearProps: "all" });

        gsap.set(img, {
          opacity: 0,
          left: mousePos.x,
          top: mousePos.y,
          xPercent: -50,
          yPercent: -50,
          position: "absolute",
        });

        playAnimation(img);

        lastMousePos = { ...mousePos };
        index++;
      }
    };

    gsap.ticker.add(ImageTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(ImageTrail);
      flairs.forEach((img) => gsap.killTweensOf(img));
    };
  }, []);

  // 16 SVG shapes structured in matching brand colors (Crimson, Warm Cream, Accent Green)
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999] overflow-hidden"
    >
      {/* 1: Crimson Sparkle Star */}

      <img className="flair w-20 h-20 text-[#82fa4b] opacity-0 pointer-events-none absolute" src="/images/avatar.jpg" alt="" />
      {/* 2: Warm Cream Ring */}
      <svg className="flair w-7 h-7 text-[#82fa4b] opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      {/* 3: Golden Dot */}
      <div className="flair w-4.5 h-4.5 bg-amber-400 opacity-0 pointer-events-none rounded-full absolute" />
      {/* 4: Neon Green Bolt */}
      <svg className="flair w-7 h-7 text-[#82fa4b] opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      {/* 5: Crimson Triangle */}
      <svg className="flair w-6 h-6 text-[#9a0002] opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polygon points="12,4 20,20 4,20" strokeLinejoin="round" />
      </svg>
      {/* 6: Hollow Square */}
      <svg className="flair w-6 h-6 text-neutral-400 opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
      </svg>
      {/* 7: Plus Sign */}
      <svg className="flair w-6 h-6 text-[#efe6dd] opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
      {/* 8: Digital Grid Hash */}
      <svg className="flair w-6.5 h-6.5 text-neutral-500 opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 3v18M16 3v18M3 8h18M3 16h18" />
      </svg>
      {/* 9: Neon Green Circle Ring */}
      <svg className="flair w-7 h-7 text-[#82fa4b] opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="8" />
      </svg>
      {/* 10: Crimson Hollow Circle */}
      <svg className="flair w-6 h-6 text-[#9a0002] opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="6" />
      </svg>
      {/* 11: Cream Square Dot */}
      <div className="flair w-5 h-5 bg-[#efe6dd] opacity-0 pointer-events-none rounded-[4px] absolute" />
      {/* 12: Diamond Shape */}
      <svg className="flair w-6 h-6 text-neutral-300 opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polygon points="12,3 21,12 12,21 3,12" strokeLinejoin="round" />
      </svg>
      {/* 13: Neon Green Cross */}
      <svg className="flair w-6 h-6 text-[#82fa4b] opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
      {/* 14: Crimson Plus Sign */}
      <svg className="flair w-6 h-6 text-[#9a0002] opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
      {/* 15: Warm Cream Sparkle Star */}
      <svg className="flair w-7 h-7 text-[#efe6dd] opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.2-6.3-4.5-6.3 4.5 2.3-7.2-6-4.4h7.6z" />
      </svg>
      {/* 16: Neon Green Sparkle Star */}
      <svg className="flair w-7 h-7 text-[#82fa4b] opacity-0 pointer-events-none absolute" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.2-6.3-4.5-6.3 4.5 2.3-7.2-6-4.4h7.6z" />
      </svg>
    </div>
  );
}
