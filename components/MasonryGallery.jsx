"use client";
import React from "react";

const items = [
  { title: "hotjar", text: "We easily converted scripts into natural voices and scaled our ad campaigns faster than ever.", badge: "Creative Director, Sonic Ads" },
  { title: "stripe", text: "The voice clarity and tone customization blew us away!", badge: "Carlos M. — Business Owner" },
  { title: "Notion", text: "We instantly localize our campaigns with natural accents — no extra cost, no delays.", badge: "Nora Kim — Marketing Lead, AdPulse Global" },
  { title: "scapic", text: "Our explainer videos now sound professional without hiring multiple voice actors.", badge: "Liam Brooks — Video Producer, BrightMotion" },
  { title: "50%", text: "less time spent on dubbing compared to traditional workflows.", badge: "" },
  { title: "Case study", text: "SoundWave Studios boosts video output by 40% using AI-generated voices.", badge: "Read now" },
];

export default function MasonryGallery() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-[32px] p-6 shadow-2xl backdrop-blur-lg border border-white/10" style={{ backgroundColor: 'var(--panel)', color: 'var(--foreground)', minHeight: idx === 4 ? '320px' : idx === 5 ? '280px' : 'auto' }}>
              <div className="mb-4 uppercase tracking-[0.10em]"><h3  className="text-bold" style={{ color: 'var(--primary)' }}>{item.title}</h3></div>
              <p className="text-base leading-7 mb-6" style={{ color: 'var(--foreground)' }}>{item.text}</p>
              {item.badge ? <div className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>{item.badge}</div> : null}
            </div>
          ))}</div>
      </div>
    </section>
  );
}
