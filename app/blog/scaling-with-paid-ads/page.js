"use client";
import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import { ExpandableScreen, ExpandableScreenContent } from "../../../components/ui/expandable-screen";
import ConsultationForm from "../../../components/ConsultationForm";
import Link from "next/link";

export default function BlogPostPaidAds() {
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
              Paid Ads
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight leading-tight">
              The Mathematical Formula for Scaling Paid Social Campaigns
            </h1>
            <div className="flex items-center gap-3 text-xs text-foreground/45">
              <span>By Fiveters Team</span>
              <span>•</span>
              <span>July 10, 2026</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-invert max-w-none text-foreground/80 font-body leading-relaxed space-y-6 text-sm sm:text-base">
            <p>
              In media buying, guesswork is a liability. Scaling campaigns past 6-figures requires a systematic approach built on continuous testing and rigorous statistical control.
            </p>
            
            <h2 className="text-lg sm:text-xl font-bold font-heading text-foreground mt-8">Creative-First Architecture</h2>
            <p>
              Modern ad platforms rely heavily on creative messaging to qualify audiences. If your hook rate is under 30%, you are overpaying for reach. We split test dozens of script variables weekly to secure winning assets.
            </p>
            
            <h2 className="text-lg sm:text-xl font-bold font-heading text-foreground mt-8">ROAS & CPA Management</h2>
            <p>
              Every campaign must align with a specific ROAS target. We run systematic bidding strategies that automatically scale budget to winners while cutting lagging creative elements to maintain margins.
            </p>

            <p className="border-l-4 border-[#9a0002] pl-4 italic text-foreground/60 my-6">
              "We cut bad spend within 24 hours of launch. That rigor is why our accounts average a 4.8x ROAS scale."
            </p>

            <p>
              Learn more about how we scale budgets and capture ready-to-buy traffic on our dedicated{" "}
              <Link href="/services/paid-ads" className="text-[#9a0002] hover:underline font-semibold">
                Paid Ads Service Page
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
