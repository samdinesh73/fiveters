"use client";

import PerspectiveScrollShowcase from "@/components/ui/perspective-scroll-showcase";

const fivetersProjects = [
  {
    title: "Vapor Activewear Funnel",
    tags: ["Paid Ads", "Google/Meta", "3.8x ROAS"],
    bgText: "PAID ADS • PAID ADS • PAID ADS • PAID ADS •",
    src: "https://images.unsplash.com/photo-1676530780285-c3baa83ad200?q=80&w=1600&h=900&fit=crop&auto=format",
  },
  {
    title: "ITech Enterprise SEO",
    tags: ["B2B SEO", "Rank Acceleration", "+180% Leads"],
    bgText: "SEO SCALING • SEO SCALING • SEO SCALING • SEO SCALING •",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&h=900&fit=crop&q=80",
  },
  {
    title: "Aura Cosmetics Scale",
    tags: ["SMS/Email", "Creative Assets", "4.2x Revenue"],
    bgText: "RETENTION SYSTEMS • RETENTION SYSTEMS • RETENTION SYSTEMS •",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&q=80",
  },
  {
    title: "Zenith Web App Platform",
    tags: ["Next.js", "Web Performance", "Shopify Headless"],
    bgText: "HEADLESS APPS • HEADLESS APPS • HEADLESS APPS • HEADLESS APPS •",
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1600&h=900&fit=crop&q=80",
  },
];

export default function PerspectiveProjects() {
  return (
    <section id="portfolio" className="relative w-full overflow-x-clip transition-colors duration-500 bg-background text-foreground font-sans antialiased border-t border-foreground/[0.02]">
      {/* Visual Header */}
      <div className="pt-28 pb-12 flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-6">
        <span className="inline-block text-[10px] uppercase tracking-widest text-[#9a0002] font-bold font-body mb-4 px-3.5 py-1 bg-[#efe6dd] border border-red-500/10 rounded-full">
          Featured Work
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight leading-tight">
          Campaigns that define{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-[#9a0002]">
            our success
          </span>
        </h2>
        <p className="mt-4 text-sm md:text-base text-foreground/50 font-body leading-relaxed">
          Scroll down to interact with our 3D perspective campaign showcase.
        </p>
      </div>

      {/* Main Perspective Scroll Component */}
      <PerspectiveScrollShowcase projects={fivetersProjects} />
    </section>
  );
}
