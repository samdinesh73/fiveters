"use client";
import React from "react";
import FaqAccordion from "@/components/ui/faq-accordion";

const FAQ_ITEMS = [
  {
    question: "How fast will we see results?",
    answer: "Paid channels typically show signal within 2–3 weeks. SEO and email compound over 90+ days. We'll tell you which applies to your goal before you commit."
  },
  {
    question: "Do you work with our existing in-house team?",
    answer: "Yes — we plug into existing marketing teams as often as we replace the need for one."
  },
  {
    question: "What makes Fiveters different?",
    answer: "One accountable team — strategy, creative, and media — measured against one number you agree to before we start."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-background text-foreground py-28 px-6 md:px-12 relative overflow-hidden border-t border-foreground/[0.02]">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#9a0002]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-foreground/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[10px] uppercase tracking-widest text-[#9a0002] font-bold font-body mb-4 px-3.5 py-1 bg-[#efe6dd] border border-red-500/10 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-[#9a0002]">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-foreground/50 font-body leading-relaxed">
            Get quick answers to how we partner with brands and structure our growth campaigns.
          </p>
        </div>

        {/* FAQ Accordion Component */}
        <FaqAccordion items={FAQ_ITEMS} />

      </div>
    </section>
  );
}
