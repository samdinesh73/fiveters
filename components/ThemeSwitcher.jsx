"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = window.localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    // Apply attributes
    document.documentElement.dataset.theme = nextTheme;
    document.body.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);

    // Dispatch global event for other components to sync
    window.dispatchEvent(new Event("themechange"));
  };

  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme = window.localStorage.getItem("theme") || "dark";
      setTheme(currentTheme);
    };
    window.addEventListener("themechange", handleThemeChange);
    return () => window.removeEventListener("themechange", handleThemeChange);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center">
      {/* Tooltip & Button Container */}
      <div className="relative group flex items-center justify-center">
        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg text-[10px] font-heading font-semibold tracking-wider uppercase bg-[#0c0d12]/90 border border-white/[0.08] text-white opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl whitespace-nowrap">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>

        {/* Floating Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-2xl border transition-all duration-300 backdrop-blur-xl"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "rgba(255, 255, 255, 0.08)",
            boxShadow: "var(--shadow)",
          }}
          aria-label="Toggle visual mode theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              // Moon Icon (Active during Dark mode, switches to Light mode)
              <motion.svg
                key="moon"
                initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-5.5 h-5.5 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </motion.svg>
            ) : (
              // Sun Icon (Active during Light mode, switches to Dark mode)
              <motion.svg
                key="sun"
                initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-5.5 h-5.5 text-[#9a0002] fill-none stroke-current"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
