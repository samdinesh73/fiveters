"use client";
import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import RollingButton from "../../../components/RollingButton";
import { ExpandableScreen, ExpandableScreenContent, ExpandableScreenTrigger } from "../../../components/ui/expandable-screen";
import ConsultationForm from "../../../components/ConsultationForm";
import Link from "next/link";

export default function SeoService() {
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
              Search Optimization
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight leading-tight">
              Search Engine Optimization (SEO)
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed font-body">
              Capture search intent and generate free pipeline leads. We design high-performing content hubs and optimize technical structures to rank you at the top.
            </p>
          </div>

          {/* Metric block */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12 border-y border-foreground/10 py-10">
            <div>
              <div className="text-4xl sm:text-5xl font-black font-heading text-[#9a0002]">+312%</div>
              <div className="text-xs text-foreground/50 uppercase tracking-wider font-body mt-2">Average Organic Traffic Increase</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black font-heading text-foreground">90 Days</div>
              <div className="text-xs text-foreground/50 uppercase tracking-wider font-body mt-2">Average Scale Timeline</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black font-heading text-foreground">1M+</div>
              <div className="text-xs text-foreground/50 uppercase tracking-wider font-body mt-2">Monthly Organic Impressions Driven</div>
            </div>
          </div>

          {/* Strategy Details */}
          <div className="space-y-12 my-12">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground">
              Our Organic SEO Blueprint
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body">
              <div className="p-8 rounded-[24px] border border-foreground/10 bg-surface/30">
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">1. Technical Keyword Clustering</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  We don't target random keywords. We group buyer-intent terms into clusters and engineer solid internal linking structures to build site authority.
                </p>
              </div>
              <div className="p-8 rounded-[24px] border border-foreground/10 bg-surface/30">
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">2. Structured Schema & SEO Architecture</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  We embed rich Organization, Service, and Review schemas into every page code to ensure search engines and AI search platforms parse your business details correctly.
                </p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-[#9a0002]/5 border border-[#9a0002]/20 rounded-[32px] p-8 sm:p-12 text-center space-y-6 my-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground">
              Ready to scale your organic search?
            </h3>
            <p className="text-sm sm:text-base text-foreground/75 max-w-xl mx-auto font-body">
              Book a free Scale Audit. We'll crawl your site structure, review keyword rankings, and uncover primary opportunities to build search pipeline.
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
