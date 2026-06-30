"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltedCard from "./TiltedCard";

// Ensure ScrollTrigger is registered client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TEAM_MEMBERS = [
  {
    name: "Alex Rivera",
    role: "Co-Founder & CEO",
    image: "/images/team_ceo.png",
    caption: "Strategic Lead",
    tagline: "Scales campaigns to 8-figures through predictive analytics.",
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    whatsapp: "#",
  },
  {
    name: "Elena Rostova",
    role: "Head of Performance",
    image: "/images/team_performance.png",
    caption: "Media Buyer",
    tagline: "Optimizes Meta & Google funnel acquisition at scale.",
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    whatsapp: "#",
  },
  {
    name: "Marcus Vance",
    role: "Creative Director",
    image: "/images/team_creative.png",
    caption: "Visual Director",
    tagline: "Translates core marketing hooks into cinematic visual assets.",
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    whatsapp: "#",
  },
  {
    name: "Siddharth Mehta",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400",
    caption: "Systems Engineer",
    tagline: "Engineers ultra-fast headless Next.js digital platforms.",
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    whatsapp: "#",
  },
  {
    name: "Chloe Dubois",
    role: "Retention Lead",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400",
    caption: "Lifecycle Lead",
    tagline: "Maximizes client retention using automated SMS & email flows.",
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    whatsapp: "#",
  },
];

export default function TeamSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use GSAP Context for scoping and clean cleanup on unmount
    const ctx = gsap.context(() => {
      // 1. Header reveal
      gsap.fromTo(
        ".team-header-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=15%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Staggered card entrance
      gsap.fromTo(
        ".team-card-animate",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top bottom-=15%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => {
      ctx.revert(); // Safely reverts GSAP ScrollTriggers
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-28 md:py-36 bg-[#0a0a0a] overflow-hidden border-t border-white/5"
    >
      {/* Premium Ambient Lighting Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9a0002]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#efe6dd]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="team-header-animate text-center md:text-left md:flex md:items-end md:justify-between mb-20">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-widest text-[#9a0002] font-semibold mb-3 font-body">
              The Talents
            </span>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#9a0002] text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Meet the minds behind <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#9a0002]">
                fivetersmedia
              </span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-[#efe6dd]/60 font-body text-base md:text-lg max-w-md md:text-left leading-relaxed">
            A high-performance collective of strategic marketers, visual storytellers, and systems engineers dedicated to scaling your business.
          </p>
        </div>

        {/* Responsive, Properly Gapped Grid */}
        <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-4 lg:gap-6 xl:gap-8 justify-center justify-items-center mt-12">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="team-card-animate flex flex-col items-center group w-full max-w-[280px]"
            >
              {/* 3D TiltedCard Container */}
              <div className="relative w-full aspect-[4/5] rounded-[15px] overflow-visible mb-5 bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-300 group-hover:border-white/10 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <TiltedCard
                  imageSrc={member.image}
                  altText={`${member.name} - ${member.role}`}
                  captionText={member.caption}
                  containerWidth="100%"
                  containerHeight="100%"
                  imageWidth="100%"
                  imageHeight="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent rounded-[15px] flex flex-col justify-end p-4 text-left pointer-events-none">
                      {/* Name and Position inside the Image, sliding up on hover */}
                      <div className="transform translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300 ease-out">
                        <h3 className="text-white font-heading font-bold text-sm md:text-base tracking-wide leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-[#9a0002] text-[10px] font-bold uppercase tracking-widest mt-1 font-body">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  }
                />
              </div>

              {/* Bio & Socials (Below the card) */}
              <div className="text-center w-full px-1">
                <p className="text-[#efe6dd]/60 text-[13px] font-body leading-relaxed mb-4 min-h-[50px] line-clamp-3">
                  {member.tagline}
                </p>

                {/* Social Links — Instagram, Facebook, LinkedIn, WhatsApp */}
                <div className="flex justify-center items-center gap-4">

                  {/* Instagram */}
                  <a
                    href={member.instagram}
                    className="text-[#efe6dd]/35 hover:text-[#E1306C] transform hover:scale-110 transition-all duration-200"
                    aria-label={`${member.name} Instagram`}
                    target="_blank" rel="noreferrer"
                  >
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href={member.facebook}
                    className="text-[#efe6dd]/35 hover:text-[#1877F2] transform hover:scale-110 transition-all duration-200"
                    aria-label={`${member.name} Facebook`}
                    target="_blank" rel="noreferrer"
                  >
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    className="text-[#efe6dd]/35 hover:text-[#0A66C2] transform hover:scale-110 transition-all duration-200"
                    aria-label={`${member.name} LinkedIn`}
                    target="_blank" rel="noreferrer"
                  >
                    <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={member.whatsapp}
                    className="text-[#efe6dd]/35 hover:text-[#25D366] transform hover:scale-110 transition-all duration-200"
                    aria-label={`${member.name} WhatsApp`}
                    target="_blank" rel="noreferrer"
                  >
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
