"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function BrandReveal() {
  return (
    <section className="bg-background text-foreground py-28 md:py-36 px-6 md:px-12 relative overflow-hidden border-t border-foreground/[0.02]">
      {/* Subtle background red gradient spot */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#9a0002]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center flex justify-center">
        {/* <div className="flex items-center justify-center gap-2 text-[#9a0002] text-[10px] font-bold uppercase tracking-widest mb-8 font-heading">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9a0002] animate-ping" />
          <span>Our Digital Philosophy</span>
        </div> */}

        <ScrollReveal
          baseOpacity={0.08}
          enableBlur={true}
          baseRotation={2}
          blurStrength={8}
          containerClassName="text-center font-heading max-w-4xl mx-auto"
          textClassName="font-extrabold tracking-tight text-foreground"
          rotationEnd="bottom 90%"
          wordAnimationEnd="bottom 75%"
        >
          Generic sites are dead. We build custom Next.js web applications and scale high-ROAS paid media engines. No noise, just straight growth.
        </ScrollReveal>
      </div>
    </section>
  );
}
