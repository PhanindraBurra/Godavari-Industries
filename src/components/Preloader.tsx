'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070D17] overflow-hidden"
          exit={{ opacity: 1 }}
        >
          {/* Top curtain */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#0B131F] z-10 border-b border-primary/20"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          />

          {/* Bottom curtain */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0B131F] z-10 border-t border-primary/20"
            exit={{ y: '100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          />

          {/* Center Logo & Animated SVG Roof Drawing */}
          <div className="relative z-20 flex flex-col items-center justify-center p-6 text-center">
            <svg
              viewBox="0 0 240 100"
              className="w-48 h-20 mb-4 overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Animated Roof Outer Peak (Orange) */}
              <motion.path
                d="M 10,65 L 120,15 L 230,65"
                stroke="#E07A00"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
              {/* Inner Roof Layer (Green) */}
              <motion.path
                d="M 35,68 L 120,28 L 205,68"
                stroke="#007A4D"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
              />
              {/* Chimney Accent */}
              <motion.path
                d="M 170,42 V 22 H 182 V 47"
                stroke="#007A4D"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              {/* House base ground line */}
              <motion.path
                d="M 15,82 L 225,82"
                stroke="#1D5288"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              />
            </svg>

            {/* Brand Title reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-2xl md:text-3xl font-bold font-display tracking-wider text-white">
                GODAVARI <span className="text-primary">ROOFING</span>
              </h1>
              <p className="text-xs md:text-sm tracking-[0.25em] text-secondary-light font-medium uppercase mt-1">
                INDUSTRIES
              </p>
              <span className="text-[10px] text-slate-400 mt-2 border border-slate-700/60 px-2.5 py-0.5 rounded-full bg-slate-900/60">
                AN ISO 9001:2015 CERTIFIED COMPANY
              </span>
            </motion.div>

            {/* Progress bar line */}
            <motion.div
              className="w-36 h-1 bg-slate-800 rounded-full mt-6 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
