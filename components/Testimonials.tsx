"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Fiveters didn't just run our ads — they rebuilt the landing pages driving them. Our CPA dropped 34% in the first quarter and hasn't crept back up.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Sarah Jenkins",
    role: "VP of Growth, Aura Cosmetics",
  },
  {
    text: "Their SEO strategy turned search into our primary customer acquisition channel. We saw a +312% increase in organic traffic in just 90 days.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
    name: "David Chen",
    role: "Founder, Apex SaaS",
  },
  {
    text: "The cinematic ad creatives they produced doubled our conversion rate on paid social. A true game-changer for our brand's scale.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Elena Rostova",
    role: "Marketing Director, Lux Apparel",
  },
  {
    text: "Scale audits usually give generic advice, but Fiveters provided an exact step-by-step roadmap that helped us scale spend 3x while maintaining ROAS.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Marcus Thorne",
    role: "CEO, Delta E-Commerce",
  },
  {
    text: "Our email and SMS channel went from 12% to 38% of our total revenue in under 4 months. The automated retention sequences are incredibly detailed.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Chloe Dubois",
    role: "Head of Lifecycle, Horizon Brands",
  },
  {
    text: "Deploying their Next.js headless conversion engine improved our mobile page speed score to 100. Bounce rates dropped instantly by 28%.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Siddharth Mehta",
    role: "Lead Developer, TechFlow",
  },
  {
    text: "They are rigorous with testing. We run dozens of ad variations weekly, and their media buying team cuts losing assets before they burn budget.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Amanda Ross",
    role: "Acquisition Lead, Bright Care",
  },
  {
    text: "Fiveters plugged directly into our existing marketing team. They took over the technical media buying and creative hooks with zero onboarding delay.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Jonathan Vance",
    role: "Director of Marketing, Aero Logistics",
  },
  {
    text: "We scaled our B2B lead generation pipeline by 180% using their high-intent search cluster strategy. Highly recommend their systematic approach.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    name: "Robert Kyle",
    role: "VP of Sales, SecureNet SaaS",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {

  const sectionRef = useRef(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Left column: badge → heading → body → button, each staggered
      gsap.fromTo(
        ".testimonialanimation > *",
        { opacity: 0, x: 500, filter: "blur(4px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonialanimationbox",
            start: "top 82%",
            toggleActions: "play none none reset",
          },
        }
      );

      // Each service row gets its OWN ScrollTrigger so it fires
      // only when that individual row enters the viewport — not all at once.

    }, el);

    return () => ctx.revert();
  }, []);



  return (
    <section className="testimonialanimationbox bg-background py-28 relative overflow-hidden border-t border-foreground/[0.02]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#9a0002]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-foreground/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center"
        >
          <span className="inline-block text-[10px] uppercase tracking-widest text-[#9a0002] font-bold font-body mb-4 px-3.5 py-1 bg-[#efe6dd] border border-red-500/10 rounded-full">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight leading-tight">
            What our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-[#9a0002]">
              users say
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-foreground/50 font-body leading-relaxed max-w-md">
            See what our customers have to say about our scaling results.
          </p>
        </motion.div>

        {/* Scrolling testimonial grid columns with gradient mask overlay */}
        <div className=" relative flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} className="testimonialanimation" duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="testimonialanimation hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="testimonialanimation hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
