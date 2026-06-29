"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.5,
    });

    // Synchronize ScrollTrigger with Lenis scroll ticks
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Feed Lenis raf to GSAP ticker
    const rafHandler = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafHandler);

    // Disable lag smoothing for optimal synchronization
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafHandler);
    };
  }, []);

  return null;
}
