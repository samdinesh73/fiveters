"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import { ExpandableScreen, ExpandableScreenContent } from "../../components/ui/expandable-screen";
import ConsultationForm from "../../components/ConsultationForm";
import Link from "next/link";

const BLOG_POSTS = [
  {
    slug: "scaling-with-paid-ads",
    title: "The Mathematical Formula for Scaling Paid Social Campaigns",
    excerpt: "Learn how we balance creative hooks, buyer intent search, and budget scaling to drive consistent 4x average ROAS.",
    date: "July 10, 2026",
    readTime: "5 min read",
    tag: "Paid Ads"
  },
  {
    slug: "seo-audit-checklist",
    title: "The SEO Audit Checklist to Uncover Hidden Search Pipeline",
    excerpt: "How we structured Aura Cosmetics' linking architecture and content hubs to drive +312% organic traffic increase.",
    date: "July 8, 2026",
    readTime: "7 min read",
    tag: "SEO"
  },
  {
    slug: "nextjs-for-conversion-rates",
    title: "Why Headless Next.js and Page Speed Direct Conversion Rates",
    excerpt: "Discover the technical core behind sub-second page loads, mobile responsiveness, and custom interactive transitions.",
    date: "July 5, 2026",
    readTime: "6 min read",
    tag: "Web Dev"
  }
];

export default function BlogListing() {
  return (
    <ExpandableScreen triggerRadius="9999px" contentRadius="24px" lockScroll={true}>
      <div className="bg-background text-foreground min-h-screen flex flex-col justify-between">
        <ThemeSwitcher />
        <Header />
        
        <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto w-full relative z-10">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#9a0002]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

          {/* Header */}
          <div className="space-y-6 text-center max-w-2xl mx-auto mb-16">
            <span className="px-3.5 py-1 bg-[#efe6dd] text-[#9a0002] border border-[#9a0002]/15 text-[10px] font-bold rounded-full uppercase tracking-widest inline-block font-heading">
              Pillar Guides
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight leading-tight">
              The Fiveters Journal
            </h1>
            <p className="text-sm sm:text-base text-foreground/50 font-body leading-relaxed">
              Analytical insights, detailed marketing blueprints, and speed-optimization guides engineered to scale your digital pipeline.
            </p>
          </div>

          {/* Blog List */}
          <div className="space-y-8 font-body">
            {BLOG_POSTS.map((post, idx) => (
              <Link
                key={idx}
                href={`/blog/${post.slug}`}
                className="block group border border-foreground/10 hover:border-foreground/20 rounded-[24px] p-6 sm:p-8 bg-surface/30 hover:bg-surface/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#9a0002] bg-[#9a0002]/10 px-2.5 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-xs text-foreground/45">{post.date}</span>
                  <span className="text-xs text-foreground/30">•</span>
                  <span className="text-xs text-foreground/45">{post.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground group-hover:text-[#9a0002] transition-colors duration-300 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-foreground/60 leading-relaxed mt-3">
                  {post.excerpt}
                </p>
                <div className="text-xs font-bold text-[#9a0002] font-heading mt-5 flex items-center gap-1">
                  Read Article →
                </div>
              </Link>
            ))}
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
