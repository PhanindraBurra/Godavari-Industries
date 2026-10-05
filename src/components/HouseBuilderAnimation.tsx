'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Sun, ArrowRight, ShieldCheck, Home } from 'lucide-react';

export default function HouseBuilderAnimation({ onOpenQuoteModal }: { onOpenQuoteModal: () => void }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 100

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100; // stop at end
        }
        return prev + 1.2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleReplay = () => {
    setProgress(0);
    setIsPlaying(true);
  };

  // Determine stage based on progress percentage
  // 0 - 20: Foundation
  // 20 - 40: Walls & Pillars
  // 40 - 55: Windows & Main Door
  // 55 - 75: Roof Trusses Framing
  // 75 - 90: Godavari Roofing Sheets Slide On
  // 90 - 100: Wall Color Paint Fill & Sun Shine
  const stage = 
    progress < 20 ? 'Foundation' :
    progress < 40 ? 'Walls & Columns' :
    progress < 55 ? 'Doors & Windows' :
    progress < 75 ? 'Roof Trusses' :
    progress < 90 ? 'Roofing Sheets' : 'Protected Dream House';

  return (
    <section id="house-builder" className="py-24 relative bg-[#0B131F] text-white overflow-hidden border-t border-slate-800">
      
      {/* Background Video Slot with Dark Fallback Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://godavariroofing.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-05-at-11.10.16-AM-1024x455.jpeg"
        >
          <source src="/assets/videos/house-building.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F] via-[#0B131F]/80 to-[#0B131F]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Home className="w-4 h-4 text-emerald-400" />
            Interactive House Building Animation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Watch Your Home Come to Life & Get <span className="text-primary">Protected</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Experience how Godavari Roofing Industries transforms raw steel purlins and sheets into a lifetime weather barrier.
          </p>
        </div>

        {/* Animation Box Container */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative">
          
          {/* Top Status & Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-primary animate-ping" />
              <span className="text-sm font-bold text-white font-display uppercase tracking-wider">
                Phase: <span className="text-emerald-400">{stage}</span>
              </span>
            </div>

            {/* Play/Pause/Replay Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-primary" />}
              </button>
              <button
                onClick={handleReplay}
                className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                aria-label="Replay"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SVG Construction Canvas */}
          <div className="w-full h-72 sm:h-96 relative flex items-center justify-center">
            <svg viewBox="0 0 500 350" className="w-full h-full overflow-visible" fill="none">
              
              {/* Sun (Appears at 90%+) */}
              {progress >= 90 && (
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                >
                  <circle cx="420" cy="70" r="30" fill="#F59E0B" />
                  <g stroke="#F59E0B" strokeWidth="3">
                    <line x1="420" y1="25" x2="420" y2="10" />
                    <line x1="420" y1="115" x2="420" y2="130" />
                    <line x1="375" y1="70" x2="360" y2="70" />
                    <line x1="465" y1="70" x2="480" y2="70" />
                  </g>
                </motion.g>
              )}

              {/* Ground & Grass */}
              <line x1="40" y1="300" x2="460" y2="300" stroke="#334155" strokeWidth="6" />

              {/* PHASE 1: Foundation (0 - 20) */}
              {progress >= 5 && (
                <motion.rect
                  x="80"
                  y="280"
                  width="340"
                  height="20"
                  fill="#475569"
                  rx="4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                />
              )}

              {/* PHASE 2: Walls Rise (20 - 40) */}
              {progress >= 20 && (
                <motion.rect
                  x="100"
                  y="160"
                  width="300"
                  height="120"
                  fill={progress >= 90 ? '#1E293B' : '#0F172A'}
                  stroke="#334155"
                  strokeWidth="4"
                  initial={{ height: 0, y: 280 }}
                  animate={{ height: 120, y: 160 }}
                  transition={{ duration: 0.8 }}
                />
              )}

              {/* PHASE 3: Windows & Door (40 - 55) */}
              {progress >= 40 && (
                <g>
                  {/* Door */}
                  <rect x="225" y="210" width="50" height="70" fill="#007A4D" rx="2" />
                  <circle cx="265" cy="248" r="3" fill="#F59E0B" />

                  {/* Window Left */}
                  <rect x="130" y="190" width="50" height="45" fill="#1E3A8A" stroke="#475569" strokeWidth="3" rx="2" />
                  <line x1="155" y1="190" x2="155" y2="235" stroke="#475569" strokeWidth="2" />

                  {/* Window Right */}
                  <rect x="320" y="190" width="50" height="45" fill="#1E3A8A" stroke="#475569" strokeWidth="3" rx="2" />
                  <line x1="345" y1="190" x2="345" y2="235" stroke="#475569" strokeWidth="2" />
                </g>
              )}

              {/* PHASE 4: Roof Frame (55 - 75) */}
              {progress >= 55 && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <polygon points="80,160 250,70 420,160" fill="none" stroke="#1D5288" strokeWidth="8" strokeLinejoin="round" />
                  <line x1="250" y1="70" x2="250" y2="160" stroke="#1D5288" strokeWidth="4" />
                  <line x1="160" y1="115" x2="160" y2="160" stroke="#1D5288" strokeWidth="4" />
                  <line x1="340" y1="115" x2="340" y2="160" stroke="#1D5288" strokeWidth="4" />
                </motion.g>
              )}

              {/* PHASE 5: Roofing Sheets Slide On (75 - 90) */}
              {progress >= 75 && (
                <motion.path
                  d="M 70,162 L 250,65 L 430,162"
                  stroke="#E07A00"
                  strokeWidth="14"
                  strokeLinecap="round"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )}

              {/* PHASE 6: House Complete Banner & Sun Rays (90 - 100) */}
              {progress >= 90 && (
                <motion.path
                  d="M 60,164 L 250,60 L 440,164"
                  stroke="#FF9E2C"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </div>

          {/* Progress Bar Line */}
          <div className="w-full h-2 bg-slate-800 rounded-full mt-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-emerald-500 to-amber-400 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Final Call To Action Banner */}
          {progress >= 95 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 border border-emerald-500/40 text-center flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="text-left">
                <h4 className="text-lg font-bold font-display text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  Your Dream Home, Fully Protected!
                </h4>
                <p className="text-xs text-slate-300">
                  Ready to install long-lasting JSW color-coated metal roofs for your house or complex?
                </p>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-full bg-primary hover:bg-amber-600 text-white font-bold text-xs shadow-lg shadow-primary/30 flex items-center gap-2 flex-shrink-0"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
