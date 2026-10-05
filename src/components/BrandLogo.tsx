'use client';

import React from 'react';

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export default function BrandLogo({ className = '', showSubtitle = true }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dynamic SVG Roof Logo vector responding to --primary & --secondary CSS variables */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-slate-900/90 border border-slate-700/80 p-1.5 rounded-xl shadow-lg flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          {/* Outer Roof Ridge (Primary Color) */}
          <path
            d="M 10,65 L 50,20 L 90,65"
            stroke="var(--primary)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner Arch (Secondary Color) */}
          <path
            d="M 22,68 L 50,34 L 78,68"
            stroke="var(--secondary)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Chimney Accent */}
          <path
            d="M 68,42 V 26 H 76 V 46"
            stroke="var(--secondary)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* House Window */}
          <rect x="42" y="52" width="16" height="16" stroke="var(--secondary)" strokeWidth="4" fill="none" rx="1" />
          <line x1="50" y1="52" x2="50" y2="68" stroke="var(--secondary)" strokeWidth="2" />
          <line x1="42" y1="60" x2="58" y2="60" stroke="var(--secondary)" strokeWidth="2" />
          {/* Base Ground Line */}
          <path d="M 12,82 L 88,82" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>

      {/* Brand Name Text */}
      <div className="flex flex-col">
        <div className="text-base sm:text-lg md:text-xl font-extrabold font-display tracking-tight text-white flex items-center gap-1">
          GODAVARI <span style={{ color: 'var(--primary)' }}>ROOFING</span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--secondary)' }}>
            INDUSTRIES
          </span>
        )}
      </div>
    </div>
  );
}
