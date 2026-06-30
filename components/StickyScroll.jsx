"use client";
import React from "react";

export default function StickyScroll() {
  const slides = [
    { title: "Write or paste script", body: "Quickly draft your message or drop in your ready-to-go text to get started instantly." },
    { title: "Refine tone & pacing", body: "Choose style, speed, and voice so your message sounds exactly right." },
    { title: "Preview & iterate", body: "Listen, tweak, and polish with instant previews and micro-edits." },
    { title: "Export high-quality audio", body: "Download broadcast-ready files or share directly with your team." },
  ];

  return (
    <section className="container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative" style={{ height: 'calc(4 * 100vh)' }}>
          <div className="grid md:grid-cols-2 h-full items-stretch">
            {/* Left: sticky heading */}
            <div className="md:col-span-1">
              <div className="sticky" style={{ top: '120px', height: 'calc(100vh - 120px)', display: 'flex', alignItems: 'center' }}>
                <div>
                  <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#9a0002] text-3xl md:text-5xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)' }}>
                    Create stunning voiceover
                    <br />
                    <span className="text-[var(--secondary)]">in 4 simple steps</span>
                  </h2>
                  <p className="mt-6 text-base text-white/80 max-w-md" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)' }}>
                    Follow the steps to craft and export polished audio quickly — mobile-first workflow with instant previews.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: scrollable slides area */}
            <div className="md:col-span-1">
              <div className="h-full">
                <div style={{ height: 'calc(4 * 100vh)' }}>
                  {slides.map((s, idx) => (
                    <div key={idx} className="h-screen flex items-center justify-center">
                      <div className="w-full max-w-md bg-white/6 backdrop-blur rounded-2xl p-8 shadow-lg">
                        <div className="text-sm text-white/70 mb-2">Step {idx + 1}</div>
                        <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
                        <p className="text-base text-white/80" style={{ fontFamily: 'var(--font-body)' }}>{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
