"use client";
import React, { useEffect, useRef, useState } from "react";
import RollingButton from "./RollingButton";
import { gsap } from "gsap";

const MENU = [
  {
    label: "Services",
    key: "services",
    children: [
      { title: "Paid Ads & SEM", desc: "Scale Google, Meta, and TikTok ad funnels", href: "#" },
      { title: "Search Engine Optimization", desc: "Dominate search results and drive organic traffic", href: "#" },
      { title: "Creative & Production", desc: "High-converting design, visual assets, and copy", href: "#" },
      { title: "Email & SMS Marketing", desc: "Automated retention sequences that drive repeat sales", href: "#" },
    ],
  },
  {
    label: "Case Studies",
    key: "case-studies",
    children: [
      { title: "E-Commerce Growth", desc: "3x return-on-ad-spend for retail brands", href: "#" },
      { title: "B2B Lead Generation", desc: "Scale pipeline with targeted organic & paid strategies", href: "#" },
      { title: "Local SEO Triumphs", desc: "Dominate local maps and geographical keywords", href: "#" },
    ],
  },
  {
    label: "Agency",
    key: "agency",
    children: [
      { title: "About Us", desc: "Our team, marketing systems, and vision", href: "#" },
      { title: "Careers", desc: "Join the fiveters remote marketing team", href: "#" },
      { title: "Contact Us", desc: "Speak directly to an expert growth consultant", href: "#" },
    ],
  },
  {
    label: "Resources",
    key: "resources",
    children: [
      {
        title: "Blog",
        desc: "Latest marketing articles and insights",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.83 20.013a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        ),
        href: "#",
      },
      {
        title: "Marketing Guides",
        desc: "E-books, whitepapers, and reports",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        ),
        href: "#",
      },
      {
        title: "Growth Calculator",
        desc: "Calculate your ad spend return on investment",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5l3 3m0 0l3-3m-3 3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        href: "#",
      },
      {
        title: "Video Tutorials",
        desc: "Step-by-step agency guide walks",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l-4.5 3v-6l4.5 3z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        href: "#",
      },
    ],
  },
  { label: "Pricing", href: "#" },
];


export default function Header() {
  const [openKey, setOpenKey] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const rootRef = useRef(null);
  const menuRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    // Shrunk nav pill state
    gsap.set(rootRef.current, { width: "80px", overflow: "hidden", whiteSpace: "nowrap" });
    gsap.set(menuRef.current, { opacity: 0, scale: 0.9, pointerEvents: "none" });
    gsap.set(actionsRef.current, { opacity: 0, scale: 0.9, pointerEvents: "none" });

    const tl = gsap.timeline({ delay: 0.8 });

    // 1. Expand nav to full width
    tl.to(rootRef.current, {
      width: "100%",
      duration: 1.0,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set(rootRef.current, { overflow: "visible", whiteSpace: "normal" });
      }
    })
      // 2. Fade in action button ("Try now") first on the right
      .to(actionsRef.current, {
        opacity: 1,
        scale: 1,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.35")
      // 3. Subsequently fade in central navigation links
      .to(menuRef.current, {
        opacity: 1,
        scale: 1,
        pointerEvents: "auto",
        duration: 0.6,
        ease: "power3.out"
      }, "+=0.1");
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    function onDoc(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpenKey(null);
    }
    document.addEventListener("pointerdown", onDoc);
    return () => document.removeEventListener("pointerdown", onDoc);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-48px)] max-w-7xl z-50">
      {/* Radial glow centered directly behind the active dropdown item */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 -top-12 w-[400px] h-[150px] bg-purple-600/15 blur-[50px] rounded-full pointer-events-none -z-10 transition-opacity duration-500 ${openKey ? "opacity-100" : "opacity-0"
          }`}
      />

      <nav
        ref={rootRef}
        className="mx-auto flex items-center justify-between gap-6 px-6 py-3.5 rounded-full backdrop-blur-xl border shadow-2xl transition-all duration-300"
        style={{
          backgroundColor: "rgb(159 159 159 / 28%)",
          borderColor: "rgba(255, 255, 255, 0.08)",
        }}
        aria-label="Main navigation"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full  flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-200">
            <img src="/logo/logo1.png" alt="" />
          </div>
          {/* <span className="font-heading font-bold text-white tracking-tight text-lg">
            fiveters
          </span> */}
        </div>

        {/* Desktop Navigation Links */}
        <ul ref={menuRef} className="hidden md:flex items-center gap-8">
          {MENU.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenKey(item.key)}
              onMouseLeave={() => setOpenKey(null)}
            >
              {item.children ? (
                <>
                  <button
                    onClick={() => setOpenKey(openKey === item.key ? null : item.key)}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-white/80 hover:text-white transition duration-200 py-2 cursor-pointer ${openKey === item.key ? "text-white" : ""
                      }`}
                    aria-expanded={openKey === item.key}
                  >
                    <span>{item.label}</span>
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transform transition-transform duration-300 ${openKey === item.key ? "rotate-180 text-purple-400" : "text-white/40"
                        }`}
                      aria-hidden
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {/* Dropdown Box */}
                  <div
                    className={`absolute left-1/2 top-full mt-3 -translate-x-1/2 w-80 rounded-[22px] bg-[#0c0d13]/95 backdrop-blur-2xl border border-white/[0.07] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] p-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${openKey === item.key
                      ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                      : "opacity-0 -translate-y-4 pointer-events-none scale-95"
                      }`}
                  >
                    <div className="flex flex-col divide-y divide-white/[0.04]">
                      {item.children.map((c) => (
                        <a
                          key={c.title}
                          href={c.href}
                          className="flex items-center gap-3.5 p-3 transition-all duration-200 hover:bg-white/[0.04] first:rounded-t-[16px] last:rounded-b-[16px] group/item"
                        >
                          {c.icon ? (
                            <div className="w-9 h-9 rounded-xl bg-[#171a25]/90 border border-white/[0.08] flex items-center justify-center text-white/70 group-hover/item:text-purple-400 group-hover/item:border-purple-500/30 transition-colors">
                              {c.icon}
                            </div>
                          ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60 ml-2 group-hover/item:bg-primary transition-colors" />
                          )}
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-white/90 group-hover/item:text-white transition-colors tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                              {c.title}
                            </div>
                            <div className="text-[11px] text-white/45 mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                              {c.desc}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold tracking-wide text-white/80 hover:text-white transition duration-200 py-2"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Action Button & Settings */}
        <div ref={actionsRef} className="flex items-center gap-4">


          <RollingButton
            text="Try now"
            className="hidden md:inline-flex px-5 py-2.5 bg-white text-black font-semibold text-xs tracking-wide uppercase rounded-full shadow-lg hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] transition duration-200 cursor-pointer"
          />

          {/* Mobile Hamburguer Menu */}
          <button
            className="md:hidden p-2.5 rounded-full border border-white/[0.08] text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden absolute top-[72px] left-0 w-full rounded-[24px] bg-[#0c0d13]/98 backdrop-blur-2xl border border-white/[0.07] shadow-2xl overflow-hidden transition-all duration-300 z-40 ${mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto scale-100" : "opacity-0 -translate-y-4 pointer-events-none scale-95"
          }`}
      >
        <div className="px-6 py-6 overflow-y-auto max-h-[calc(100vh-140px)] flex flex-col gap-6">
          {MENU.map((item) => (
            <div key={item.label} className="border-b border-white/[0.04] pb-4">
              {item.children ? (
                <div>
                  <div className="text-xs font-semibold text-white/35 tracking-widest uppercase mb-3">
                    {item.label}
                  </div>
                  <div className="grid grid-cols-1 gap-4 pl-1">
                    {item.children.map((c) => (
                      <a key={c.title} href={c.href} className="flex items-center gap-3.5 group">
                        {c.icon ? (
                          <div className="w-8 h-8 rounded-lg bg-[#171a25]/90 border border-white/[0.08] flex items-center justify-center text-white/60">
                            {c.icon}
                          </div>
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 ml-2" />
                        )}
                        <div>
                          <div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">{c.title}</div>
                          <div className="text-[11px] text-white/40">{c.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a href={item.href} className="text-base font-semibold text-white hover:text-primary transition-colors block">
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <div className="mt-2">
            <RollingButton
              text="Try now"
              className="w-full py-3 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-neutral-100 active:scale-[0.98] transition cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header >
  );
}
