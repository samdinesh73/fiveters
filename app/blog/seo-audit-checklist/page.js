"use client";
import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import { ExpandableScreen, ExpandableScreenContent } from "../../../components/ui/expandable-screen";
import ConsultationForm from "../../../components/ConsultationForm";
import Link from "next/link";

export default function BlogPostSeo() {
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
              SEO
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight leading-tight">
              The SEO Audit Checklist to Uncover Hidden Search Pipeline
            </h1>
            <div className="flex items-center gap-3 text-xs text-foreground/45">
              <span>By Fiveters Team</span>
              <span>•</span>
              <span>July 8, 2026</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-invert max-w-none text-foreground/80 font-body leading-relaxed space-y-6 text-sm sm:text-base">
            <p>
              Many brands view SEO as a secondary channel, but organic search represents the highest-converting traffic source when structured around user-intent queries.
            </p>
            
            <h2 className="text-lg sm:text-xl font-bold font-heading text-foreground mt-8">Technical Linking Audits</h2>
            <p>
              Broken link paths and poorly mapped hierarchy lead to search crawlers missing your core services. We rebuild site mapping and implement rigid cluster structures to raise search authority.
            </p>
            
            <h2 className="text-lg sm:text-xl font-bold font-heading text-[#9a0002] mt-8">Organization & Service Schemas</h2>
            <p>
              Structured metadata helps AI engines (like Gemini or ChatGPT) and search engines index and cite your business pages. By adding JSON-LD schemas, we maximize organic visibility.
            </p>

            <p className="border-l-4 border-[#9a0002] pl-4 italic text-foreground/60 my-6">
              "Targeting high-intent terms rather than volume led to a +312% organic pipeline boost for our DTC cosmetics partners."
            </p>

            <p>
              For a deep dive into our SEO auditing and keyword ranking blueprints, check out our full{" "}
              <Link href="/services/seo" className="text-[#9a0002] hover:underline font-semibold">
                SEO Service Page
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
