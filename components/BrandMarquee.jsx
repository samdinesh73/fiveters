"use client";
// import { useState } from "react";
import React, { useState, useEffect } from "react";

import ScrollVelocity from "./ScrollVelocity";

export default function BrandMarquee() {
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
  return (
    <section className={`${theme === "light" ? "bg-white" : "bg-[#07080a]"}  py-20 overflow-hidden border-t border-b border-white/[0.02] relative z-10`}>
      <div className="space-y-4 md:space-y-6">
        <ScrollVelocity
          texts={[
            "FIVETERS MEDIA • SCALE YOUR BRAND • DATA DRIVEN ROAS • PERFORMANCE MARKETING •",
            "META ADS EXPERTS • GOOGLE PERFORMANCE MAX • CREATIVE SCALE • ATTRIBUTION FUNNELS •"
          ]}
          velocity={50}
          damping={40}
          stiffness={300}
          className={`font-heading font-extrabold tracking-tighter uppercase ${theme === "light" ? "text-black" : "text-white"} select-none text-4xl md:text-[5.5rem] leading-[1.1]`}
        />
      </div>
    </section>
  );
}
