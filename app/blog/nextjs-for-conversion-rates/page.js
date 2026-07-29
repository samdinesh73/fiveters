"use client";
import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import { ExpandableScreen, ExpandableScreenContent } from "../../../components/ui/expandable-screen";
import ConsultationForm from "../../../components/ConsultationForm";
import Link from "next/link";

export default function BlogPostNextJs() {
  return (
    <ExpandableScreen triggerRadius="9999px" contentRadius="24px" lockScroll={true}>
      <div className="bg-background text-foreground min-h-screen flex flex-col justify-between">
        <ThemeSwitcher />
        <Header />
        
        <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto w-full relative z-10">
          {/* Breadcrumbs */}
          <div className="flex gap-4 mb-8">
            <Link href="/blog" className="text-xs uppercase tracking-widest text-[#9a0002] font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <div className="space-y-4 mb-8 font-body">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#9a0002] bg-[#9a0002]/10 px-2.5 py-1 rounded-full">
              Web Dev
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight leading-tight">
              Why Headless Next.js and Page Speed Direct Conversion Rates
            </h1>
            <div className="flex items-center gap-3 text-xs text-foreground/45">
              <span>By Fiveters Team</span>
              <span>•</span>
              <span>July 5, 2026</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-invert max-w-none text-foreground/80 font-body leading-relaxed space-y-6 text-sm sm:text-base">
            <p>
              Slow websites kill marketing conversion rates. If a page takes more than 2 seconds to load, user dropoff increases by 40%.
            </p>
            
            <h2 className="text-lg sm:text-xl font-bold font-heading text-foreground mt-8">The Next.js Speed Advantage</h2>
            <p>
              By statically rendering pages and pre-fetching routes, Next.js provides sub-second page loads. Combined with Tailwind CSS utility styling, we keep bundle sizes minimal and ensure layout stability.
            </p>
            
            <h2 className="text-lg sm:text-xl font-bold font-heading text-[#9a0002] mt-8">CRO and Mobile Performance</h2>
            <p>
              Most ad traffic is mobile. WebGL and canvas elements must fall back to lightweight static images on mobile screen formats to prevent lagging frame rates. That is why we optimize our scroll animations with strict fallback conditions.
            </p>

            <p className="border-l-4 border-[#9a0002] pl-4 italic text-foreground/60 my-6">
              "A 100/100 Core Web Vitals score directly protects paid ad conversion margins."
            </p>

            <p>
              Read more about our frontend stack, Next.js templates, and speed optimization audits on our{" "}
              <Link href="/services/web-development" className="text-[#9a0002] hover:underline font-semibold">
                Web Development Service Page
              </Link>.
            </p>
          </article>
        </main>

        <Footer />

        <ExpandableScreenContent className="bg-black/95 text-white mx-auto rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col justify-center overflow-y-auto">
          <ConsultationForm onClose={() => {}} />
        </ExpandableScreenContent>
      </div>
    </ExpandableScreen>
  );
}
