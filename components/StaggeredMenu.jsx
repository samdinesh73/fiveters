"use client";

import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './StaggeredMenu.css';

export const StaggeredMenu = ({
  position = 'right',
  colors = ['#0c0d12', '#9a0002'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl = '',
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  accentColor = '#9a0002',
  changeMenuColorOnOpen = true,
  isFixed = true,
  closeOnClickAway = true,
  isOpen = false,
  onClose,
  hideHeader = true
}) => {
  const openRef = useRef(false);
  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);
  const plusHRef = useRef(null);
  const plusVRef = useRef(null);
  const iconRef = useRef(null);
  const textInnerRef = useRef(null);
  const textWrapRef = useRef(null);
  const [textLines, setTextLines] = useState(['Menu', 'Close']);
  const [expandedKey, setExpandedKey] = useState(null);

  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const spinTweenRef = useRef(null);
  const textCycleAnimRef = useRef(null);
  const colorTweenRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;
      if (!panel) return;

      let preLayers = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1 });
      if (preContainer) {
        gsap.set(preContainer, { xPercent: 0, opacity: 1 });
      }
      if (plusH) gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      if (plusV) gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      if (icon) gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      if (textInner) gsap.set(textInner, { yPercent: 0 });
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const socialTitle = panel.querySelector('.sm-socials-title');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

    const offscreen = position === 'left' ? -100 : 100;
    const layerStates = layers.map(el => ({ el, start: offscreen }));
    const panelStart = offscreen;

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    }
    if (socialTitle) {
      gsap.set(socialTitle, { opacity: 0 });
    }
    if (socialLinks.length) {
      gsap.set(socialLinks, { y: 25, opacity: 0 });
    }

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });
    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;
    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: { each: 0.1, from: 'start' }
        },
        itemsStart
      );
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;
      if (socialTitle) {
        tl.to(
          socialTitle,
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
          },
          socialsStart
        );
      }
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power3.out',
            stagger: { each: 0.08, from: 'start' },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: 'opacity' });
            }
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [position]);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();
    const offscreen = position === 'left' ? -100 : 100;
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
        setExpandedKey(null);
        busyRef.current = false;
      }
    });
  }, [position]);

  // Sync with external isOpen transitions
  React.useEffect(() => {
    if (isOpen === openRef.current) return;
    openRef.current = isOpen;
    if (isOpen) {
      playOpen();
    } else {
      playClose();
    }
  }, [isOpen, playOpen, playClose]);

  React.useEffect(() => {
    if (!closeOnClickAway || !isOpen) return;

    const handleClickOutside = event => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        !event.target.closest('.md\\:hidden') // don't close when clicking header mobile hamburger toggle
      ) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickAway, isOpen, onClose]);

  return (
    <div
      className={(className ? className + ' ' : '') + 'staggered-menu-wrapper' + (isFixed ? ' fixed-wrapper' : '')}
      style={accentColor ? { ['--sm-accent']: accentColor } : undefined}
      data-position={position}
      data-open={isOpen || undefined}
    >
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {(() => {
          const raw = colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c'];
          let arr = [...raw];
          if (arr.length >= 3) {
            const mid = Math.floor(arr.length / 2);
            arr.splice(mid, 1);
          }
          return arr.map((c, i) => <div key={i} className="sm-prelayer" style={{ background: c }} />);
        })()}
      </div>

      {!hideHeader && (
        <header className="staggered-menu-header" aria-label="Main navigation header">
          <div className="sm-logo" aria-label="Logo">
            <img
              src={logoUrl || ''}
              alt="Logo"
              className="sm-logo-img"
              draggable={false}
              width={110}
              height={24}
            />
          </div>
        </header>
      )}

      <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!isOpen}>
        <div className="sm-panel-inner">
          
          {/* 1. Panel Header with Close Button and Brand logo */}
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-2">
            <span className="font-heading font-extrabold tracking-tight text-white text-xl">
              fiveters<span className="text-[#9a0002]">media</span>
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/[0.08] text-white/70 hover:text-white bg-white/[0.02] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer hover:border-white/20"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* 2. Menu Navigation Accordions */}
          <div className="flex flex-col gap-5 w-full text-left py-4">
            {items && items.map((item) => (
              <div key={item.label} className="border-b border-white/[0.04] pb-4 last:border-0 last:pb-0">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setExpandedKey(expandedKey === item.key ? null : item.key)}
                      className="flex items-center justify-between w-full text-left py-2 font-semibold text-white hover:text-[#9a0002] transition-colors cursor-pointer sm-panel-itemLabel"
                    >
                      <span className="text-xl font-bold tracking-tight uppercase font-heading">
                        {item.label}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={`transform transition-transform duration-300 text-white/40 ${expandedKey === item.key ? "rotate-180 text-[#9a0002]" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Accordion dropdown body using smooth height transition */}
                    <div 
                      className="transition-all duration-300 ease-in-out overflow-hidden"
                      style={{
                        maxHeight: expandedKey === item.key ? "450px" : "0px",
                        opacity: expandedKey === item.key ? 1 : 0
                      }}
                    >
                      <div className="grid grid-cols-1 gap-3 pl-1.5 mt-3">
                        {item.children.map((c) => (
                          <a 
                            key={c.title} 
                            href={c.href} 
                            onClick={onClose}
                            className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300 group/sub text-left"
                          >
                            {c.icon && (
                              <div className="w-8 h-8 rounded-lg bg-[#171a25]/90 border border-white/[0.08] flex items-center justify-center text-white/60 group-hover/sub:text-[#9a0002] group-hover/sub:border-[#9a0002]/30 transition-colors shrink-0">
                                {c.icon}
                              </div>
                            )}
                            <div className="flex-1 space-y-0.5">
                              <div className="text-xs font-semibold text-white/90 group-hover/sub:text-[#9a0002] transition-colors tracking-wide font-heading">
                                {c.title}
                              </div>
                              <div className="text-[10px] text-white/40 font-body leading-relaxed font-light">
                                {c.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a 
                    href={item.href} 
                    onClick={onClose}
                    className="text-xl font-bold text-white hover:text-[#9a0002] transition-colors block py-2 tracking-tight uppercase sm-panel-itemLabel font-heading"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* 3. Panel Socials footer */}
          {displaySocials && socialItems && socialItems.length > 0 && (
            <div className="sm-socials" aria-label="Social links">
              <h3 className="sm-socials-title">Socials</h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="sm-socials-link">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default StaggeredMenu;
