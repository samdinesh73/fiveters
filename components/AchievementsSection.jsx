"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from "motion/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────────────────────────────────────────
   CIRCULAR TEXT — inlined to avoid blank-file issues
───────────────────────────────────────────── */
const getRotationTransition = (duration, from) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: Infinity,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: { type: "spring", damping: 20, stiffness: 300 },
});

function CircularText({ text, spinDuration = 20, onHover = "speedUp" }) {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({ rotate: start + 360, scale: 1, transition: getTransition(spinDuration, start) });
  }, [spinDuration, text, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    const cfg =
      onHover === "slowDown" ? getTransition(spinDuration * 2, start)
        : onHover === "speedUp" ? getTransition(spinDuration / 4, start)
          : onHover === "goBonkers" ? getTransition(spinDuration / 20, start)
            : getTransition(spinDuration, start);
    controls.start({ rotate: start + 360, scale: 1, transition: cfg });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({ rotate: start + 360, scale: 1, transition: getTransition(spinDuration, start) });
  };

  return (
    <motion.div
      style={{
        rotate: rotation,
        width: 200,
        height: 200,
        position: "relative",
        borderRadius: "50%",
        transformOrigin: "50% 50%",
        cursor: "pointer",
      }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              display: "inline-block",
              left: 0, right: 0, top: 0, bottom: 0,
              fontSize: 11,
              letterSpacing: "0.08em",
              fontWeight: 700,
              textTransform: "uppercase",
              textAlign: "center",
              color: "#efe6dd",
              transform,
              WebkitTransform: transform,
              transition: "all 0.5s cubic-bezier(0,0,0,1)",
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   COUNTER — inlined to avoid blank-file issues
───────────────────────────────────────────── */
function CounterNumber({ mv, number, height }) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) memo -= 10 * height;
    return memo;
  });
  return (
    <motion.span
      style={{
        y,
        position: "absolute",
        top: 0, right: 0, bottom: 0, left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {number}
    </motion.span>
  );
}

function CounterDigit({ place, value, height }) {
  const rounded = Math.floor(value / place);
  const animatedValue = useSpring(rounded, { stiffness: 60, damping: 15 });

  useEffect(() => {
    animatedValue.set(rounded);
  }, [rounded, animatedValue]);

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        width: "1ch",
        height,
        overflow: "hidden",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <CounterNumber key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </span>
  );
}

function Counter({ value, places, fontSize = 36, textColor = "#fff", fontWeight = 900, gradientFrom = "#07080a" }) {
  const height = fontSize;
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ display: "flex", overflow: "hidden", lineHeight: 1, fontSize, fontWeight, color: textColor, gap: 2, direction: "ltr" }}>
        {places.map((place, idx) => (
          <CounterDigit key={idx} place={place} value={value} height={height} />
        ))}
      </span>
      {/* Top & bottom gradient masks */}
      <span style={{ pointerEvents: "none", position: "absolute", inset: 0 }}>
        <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: 8, background: `linear-gradient(to bottom, ${gradientFrom}, transparent)` }} />
        <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 8, background: `linear-gradient(to top, ${gradientFrom}, transparent)` }} />
      </span>
    </span>
  );
}

/* ─────────────────────────────────────────────
   STATS DATA
───────────────────────────────────────────── */
const STATS = [
  {
    value: 150,
    places: [100, 10, 1],
    unit: "+",
    label: "Clients Served",
    sublabel: "Globally",
    circular: "CLIENTS·SERVED·TRUSTED·BY·",
    spinDuration: 22,
    glow: "rgba(154,0,2,0.35)",
  },
  {
    value: 15,
    places: [10, 1],
    unit: "M+",
    label: "Revenue",
    sublabel: "Generated",
    circular: "REVENUE·GENERATED·SCALED·",
    spinDuration: 18,
    glow: "rgba(239,230,221,0.12)",
  },
  {
    value: 4,
    places: [1],
    unit: "×",
    label: "Avg ROAS",
    sublabel: "Increase",
    circular: "AVERAGE·ROAS·ACHIEVED·BY·",
    spinDuration: 20,
    glow: "rgba(154,0,2,0.35)",
  },
  {
    value: 380,
    places: [100, 10, 1],
    unit: "%",
    label: "Max ROAS",
    sublabel: "Boost",
    circular: "MAXIMUM·ROAS·GROWTH·RATE·",
    spinDuration: 16,
    glow: "rgba(239,230,221,0.12)",
  },
];

/* ─────────────────────────────────────────────
   STAT ORB
───────────────────────────────────────────── */
function StatOrb({ stat, counted }) {
  const displayValue = counted ? stat.value : 0;

  return (
    <div className="achieve-orb flex flex-col items-center group">
      <div
        className="relative"
        style={{
          width: 200,
          height: 200,
          filter: `drop-shadow(0 0 24px ${stat.glow}) drop-shadow(0 0 6px ${stat.glow})`,
        }}
      >
        {/* Dashed decorative ring */}
        <div
          className="absolute inset-0 rounded-full border border-dashed border-white/10 group-hover:border-white/20 transition-colors duration-500"
          style={{ margin: 4 }}
        />

        {/* Spinning circular text */}
        <CircularText text={stat.circular} spinDuration={stat.spinDuration} onHover="speedUp" />

        {/* Counter content centred inside the circle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
          <div className="flex items-baseline" style={{ gap: 2 }}>
            <Counter
              value={displayValue}
              places={stat.places}
              fontSize={36}
              textColor="#ffffff"
              fontWeight={900}
              gradientFrom="#07080a"
            />
            <span className="font-heading font-black text-white leading-none" style={{ fontSize: 22 }}>
              {stat.unit}
            </span>
          </div>

          <span className="font-heading font-bold uppercase tracking-widest mt-1 text-[#9a0002]" style={{ fontSize: 9 }}>
            {stat.label}
          </span>
          <span className="font-body uppercase tracking-wider text-white/40" style={{ fontSize: 8 }}>
            {stat.sublabel}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ACHIEVEMENTS SECTION
───────────────────────────────────────────── */
export default function AchievementsSection() {
  const sectionRef = useRef(null);
  const [counted, setCounted] = useState(false);

  /* IntersectionObserver — starts counters when section is visible, resets on leave */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setCounted(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* GSAP scroll entrance animations */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".achieve-heading > *",
        { opacity: 0, y: 40, filter: "blur(6px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 0.9, stagger: 0.12, ease: "power4.out",
          scrollTrigger: { trigger: ".achieve-heading", start: "top 85%", toggleActions: "play none none reset" },
        }
      );

      gsap.utils.toArray(".achieve-orb", el).forEach((orb, i) => {
        gsap.fromTo(
          orb,
          { opacity: 0, y: 70, scale: 0.85 },
          {
            opacity: 1, y: 0, scale: 1, duration: 1, delay: i * 0.08, ease: "power4.out",
            scrollTrigger: { trigger: orb, start: "top 90%", toggleActions: "play none none reset" },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-14 md:py-28 bg-[#07080a] overflow-hidden border-t border-white/[0.03]"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#9a0002]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[#efe6dd]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="achieve-heading text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-[10px] uppercase tracking-widest text-[#9a0002] font-bold font-body mb-4">
            By The Numbers
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Proof that's written{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#9a0002]">
              in results
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/50 font-body leading-relaxed">
            Real numbers from real campaigns. No vanity metrics — just measurable growth.
          </p>
        </div>

        {/* Orbs: 1-col mobile → 2-col tablet → 4-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {STATS.map((stat, i) => (
            <StatOrb key={i} stat={stat} counted={counted} />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-white/20 text-[10px] uppercase tracking-widest font-body">
            Verified metrics from live campaigns
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

      </div>
    </section>
  );
}
