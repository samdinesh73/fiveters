"use client";
import React from "react";
import ScrollVelocity from "./ScrollVelocity";

export default function BrandMarquee() {
  return (
    <section className="bg-[#07080a] py-20 overflow-hidden border-t border-b border-white/[0.02] relative z-10">
      <div className="space-y-4 md:space-y-6">
        <ScrollVelocity
          texts={[
            "FIVETERS MEDIA • SCALE YOUR BRAND • DATA DRIVEN ROAS • PERFORMANCE MARKETING •",
            "META ADS EXPERTS • GOOGLE PERFORMANCE MAX • CREATIVE SCALE • ATTRIBUTION FUNNELS •"
          ]}
          velocity={50}
          damping={40}
          stiffness={300}
          className="font-heading font-extrabold tracking-tighter uppercase text-white select-none text-4xl md:text-[5.5rem] leading-[1.1]"
        />
      </div>
    </section>
  );
}
