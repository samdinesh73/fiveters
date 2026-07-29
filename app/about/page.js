"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import RollingButton from "../../components/RollingButton";
import { ExpandableScreen, ExpandableScreenContent, ExpandableScreenTrigger } from "../../components/ui/expandable-screen";
import ConsultationForm from "../../components/ConsultationForm";
import Link from "next/link";

export default function AboutPage() {
  return (
    <ExpandableScreen triggerRadius="9999px" contentRadius="24px" lockScroll={true}>
      <div className="bg-background text-foreground min-h-screen flex flex-col justify-between">
        <ThemeSwitcher />
        <Header />
        
        <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto w-full relative z-10">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#9a0002]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/" className="text-xs uppercase tracking-widest text-[#9a0002] font-semibold hover:underline">
              ← Back to Home
            </Link>
          </div>

          {/* Hero */}
          <div className="space-y-6 max-w-3xl">
            <span className="px-3.5 py-1 bg-[#efe6dd] text-[#9a0002] border border-[#9a0002]/15 text-[10px] font-bold rounded-full uppercase tracking-widest inline-block font-heading">
              Our Agency
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight leading-tight">
              About Fiveters Media
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed font-body">
              Fiveters is a premier performance marketing agency engineered like a production set and measured with the mathematical rigor of a trading desk.
            </p>
          </div>

          {/* Approach & Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 font-body">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-foreground">The Fiveters DNA</h2>
              <p className="text-sm text-foreground/60 leading-relaxed">
                We believe that modern brand scaling requires both cinematic storytelling and technical precision. We don't separate creative design from media buying. Instead, our visual designers, copywriters, and media buyers plug into one unified account team aligned on a single target ROAS.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-foreground">No Vanity Metrics</h2>
              <p className="text-sm text-foreground/60 leading-relaxed">
                We don't sell impressions or abstract organic rankings. We measure our performance against client revenue, lifetime value, and cost-per-acquisition. If we don't hit the agreed benchmarks before spending, we cut/adjust the creative assets instantly.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="border-t border-foreground/10 pt-16">
            <h2 className="text-3xl font-heading font-extrabold text-foreground text-center mb-12">
              Our Scaling Pillars
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center font-body">
              <div className="space-y-3">
                <div className="text-xl font-bold text-[#9a0002] font-heading">01. cinematic style</div>
                <p className="text-xs text-foreground/50 leading-relaxed">
                  Every ad asset is treated like a cinematic storyboard to capture attention in the first 3 seconds.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-xl font-bold text-foreground font-heading">02. speed optimized</div>
                <p className="text-xs text-foreground/50 leading-relaxed">
                  Sub-second page speeds and conversion engineering using Next.js protect ad budgets from bounce rates.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-xl font-bold text-foreground font-heading">03. math led</div>
                <p className="text-xs text-foreground/50 leading-relaxed">
                  Decisions are made based on cohort models, lifetime value maps, and ROAS calculations.
                </p>
              </div>
            </div>
          </div>

          {/* Action box */}
          <div className="bg-[#9a0002]/5 border border-[#9a0002]/20 rounded-[32px] p-8 sm:p-12 text-center space-y-6 my-16">
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground">
              Ready to scaling your business?
            </h3>
            <p className="text-sm sm:text-base text-foreground/75 max-w-xl mx-auto font-body">
              Get in touch with an expert growth analyst for a comprehensive scale audit of your current digital metrics.
            </p>
            <ExpandableScreenTrigger>
              <RollingButton
                text="Request Your Free Scale Audit"
                className="px-7 py-3.5 bg-[#9a0002] text-white font-bold text-xs rounded-full shadow-lg uppercase tracking-wider cursor-pointer font-heading"
              />
            </ExpandableScreenTrigger>
          </div>
        </main>

        <Footer />

        <ExpandableScreenContent className="bg-black/95 text-white mx-auto rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col justify-center overflow-y-auto">
          <ConsultationForm onClose={() => {}} />
        </ExpandableScreenContent>
      </div>
    </ExpandableScreen>
  );
}
