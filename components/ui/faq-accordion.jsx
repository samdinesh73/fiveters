"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_ITEMS = [
  { question: "What is Vengeance UI?", answer: "Vengeance UI is a high-performance, dark-mode first component library designed for the next generation of web applications." },
  { question: "Can I use it with Tailwind CSS?", answer: "Yes! All components are built on top of Tailwind CSS and highly customizable using utility classes." },
  { question: "Are the components accessible?", answer: "Accessibility is a core focus. We ensure proper ARIA attributes, keyboard navigation, and semantic HTML structure." },
  { question: "Do I need to install a heavy npm package?", answer: "No. Vengeance UI provides a CLI that lets you copy and paste only the components you need directly into your project." },
  { question: "Is it compatible with React and Next.js?", answer: "Absolutely. The library is built with React in mind and perfectly supports Next.js Server Components and client-side rendering." },
];

export function FaqAccordion({
  items = DEFAULT_ITEMS,
  title = "",
  className,
  ...props
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className={cn("w-full max-w-3xl mx-auto py-8 relative font-body", className)}
      {...props}>
      {title && (
        <h2
          className="text-center font-bold font-heading text-2xl md:text-3xl mb-10 text-foreground">
          {title}
        </h2>
      )}
      <ul className="w-full mx-auto list-none p-0 flex flex-col">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <li
              key={index}
              className={cn(
                "w-full relative transition-all duration-300 ease-in-out",
                "border-b border-foreground/10",
                "last:border-b-0",
                isActive ? "border-b border-foreground/20" : ""
              )}>
              <button
                className={cn(
                  "flex flex-row items-center justify-start w-full min-h-[60px] py-5 relative m-0 px-4 pl-14 cursor-pointer",
                  "border-l-[4px] md:border-l-[6px] transition-all duration-300 text-left outline-none text-base md:text-lg font-heading font-bold",
                  isActive 
                    ? "border-l-primary bg-primary/[0.03] text-foreground" 
                    : "border-l-foreground/10 bg-transparent text-foreground/70 hover:border-l-primary/50 hover:text-foreground hover:bg-foreground/[0.01]"
                )}
                onClick={() => toggleItem(index)}
                aria-expanded={isActive}>
                {/* Plus/Minus Icon */}
                <span
                  className={cn(
                    "absolute left-4 md:left-5 top-1/2 -translate-y-1/2 transition-all duration-300 leading-none font-light select-none",
                    isActive ? "text-[28px] md:text-[36px] text-primary" : "text-[20px] md:text-[26px] text-foreground/45"
                  )}>
                  {isActive ? "−" : "+"}
                </span>
                
                <span className="pr-8">{item.question}</span>
                
                {/* Chevron */}
                <span
                  className={cn(
                    "absolute right-6 block w-2 h-2 border-t-[2px] border-r-[2px] transition-transform duration-300 ease-in-out",
                    isActive ? "rotate-[-45deg] border-primary" : "rotate-[135deg] border-foreground/40"
                  )} />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out w-full",
                  "border-l-[4px] md:border-l-[6px]",
                  isActive 
                    ? "grid-rows-[1fr] border-l-primary bg-primary/[0.03]" 
                    : "grid-rows-[0fr] border-l-foreground/10 bg-transparent"
                )}>
                <div className="overflow-hidden">
                  <div
                    className="flex flex-row items-start justify-start w-full px-4 pl-14 pb-6 pt-2 text-base md:text-lg font-normal text-foreground/75 font-body leading-relaxed">
                    <span>{item.answer}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FaqAccordion;
