"use client";
import React from "react";

export default function RollingButton({
  text,
  className = "",
  style = {},
  children,
  ...props
}) {
  return (
    <button
      className={`group relative overflow-hidden inline-flex items-center justify-center transition-all duration-300 ${className}`}
      style={style}
      {...props}
    >
      {/* Outer sliding text container */}
      <span className="relative block overflow-hidden h-[1.3em] leading-none select-none">
        {/* Primary original text */}
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-full">
          {text}
        </span>
        {/* Absolute replica text below it */}
        <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:translate-y-0">
          {text}
        </span>
      </span>
      {children}
    </button>
  );
}
