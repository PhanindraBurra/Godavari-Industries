'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, Compass, Grid, ShieldCheck, Layers, Hammer, CheckCircle2, ChevronRight } from 'lucide-react';
import siteData from '@/content/site-data.json';

const iconComponents: Record<string, any> = {
  Ruler: Ruler,
  Compass: Compass,
  Grid: Grid,
  ShieldCheck: ShieldCheck,
  Layers: Layers,
  Hammer: Hammer,
  CheckCircle2: CheckCircle2,
};

export default function RoofBuildSteps() {
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto step progress interval or click selection
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev % 7) + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const steps = siteData.installationSteps;

  return (
    <section id="installation" className="py-24 relative bg-[#070D17] text-white overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Hammer className="w-4 h-4 text-amber-400" />
            7-Step Precision Installation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            How Your <span className="text-primary">Roof Is Built</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Watch our step-by-step structural assembly process from initial laser measurement to final leak proofing and warranty handover.
          </p>
        </div>

        {/* Main Interactive Assembly Layout */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: SVG Animated Interactive Roof Assembly Visualization */}
          <div className="lg:col-span-6 relative bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px]">
            {/* Step Indicator Header */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary animate-ping" />
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Step {activeStep} of 7
              </span>
            </div>

            {/* SVG Assembly Canvas */}
            <div className="w-full max-w-md h-64 sm:h-72 relative my-6">
              <svg viewBox="0 0 400 280" className="w-full h-full overflow-visible" fill="none">
                
                {/* STEP 1: Site Inspection & Grid lines */}
                {activeStep >= 1 && (
                  <g className="transition-all duration-500">
                    <line x1="40" y1="220" x2="360" y2="220" stroke="#334155" strokeWidth="4" strokeDasharray="6 6" />
                    <line x1="60" y1="220" x2="60" y2="150" stroke="#007A4D" strokeWidth="4" />
                    <line x1="340" y1="220" x2="340" y2="150" stroke="#007A4D" strokeWidth="4" />
                    {/* Laser measure line */}
                    <motion.line
                      x1="60"
                      y1="150"
                      x2="340"
                      y2="150"
                      stroke="#E07A00"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                  </g>
                )}

                {/* STEP 2 & 3: Structural Steel Purlins */}
                {activeStep >= 3 && (
                  <g className="transition-all duration-500">
                    {/* Rafters (Triangle) */}
                    <line x1="50" y1="150" x2="200" y2="60" stroke="#1D5288" strokeWidth="8" strokeLinecap="round" />
                    <line x1="350" y1="150" x2="200" y2="60" stroke="#1D5288" strokeWidth="8" strokeLinecap="round" />
                    {/* Horizontal C/Z Purlins */}
                    <line x1="80" y1="132" x2="320" y2="132" stroke="#475569" strokeWidth="5" />
                    <line x1="120" y1="108" x2="280" y2="108" stroke="#475569" strokeWidth="5" />
                    <line x1="160" y1="84" x2="240" y2="84" stroke="#475569" strokeWidth="5" />
                  </g>
                )}

                {/* STEP 4: Underlayment Waterproof Felt */}
                {activeStep >= 4 && (
                  <motion.path
                    d="M 45,152 L 200,58 L 355,152"
                    stroke="#10B981"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                )}

                {/* STEP 5: Color Coated Sheets Sliding In */}
                {activeStep >= 5 && (
                  <g className="transition-all duration-700">
                    <motion.path
                      d="M 40,150 L 200,54 L 360,150"
                      stroke="#E07A00"
                      strokeWidth="12"
                      strokeLinecap="round"
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Corrugation lines */}
                    <path d="M 60,140 L 200,56 L 340,140" stroke="#FF9E2C" strokeWidth="2" />
                  </g>
                )}

                {/* STEP 6: Ridge Cap & Fastener Screws */}
                {activeStep >= 6 && (
                  <g className="transition-all duration-500">
                    {/* Ridge Cap */}
                    <path d="M 180,64 L 200,48 L 220,64" stroke="#007A4D" strokeWidth="8" strokeLinecap="round" />
                    {/* Fastener Screw dots */}
                    <circle cx="90" cy="122" r="4" fill="#F59E0B" />
                    <circle cx="150" cy="87" r="4" fill="#F59E0B" />
                    <circle cx="250" cy="87" r="4" fill="#F59E0B" />
                    <circle cx="310" cy="122" r="4" fill="#F59E0B" />
                  </g>
                )}

                {/* STEP 7: Completed & Sun Seal */}
                {activeStep === 7 && (
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                  >
                    <circle cx="200" cy="130" r="32" fill="#007A4D" />
                    <path d="M 188,130 L 196,138 L 214,120" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.g>
                )}
              </svg>
            </div>

            {/* Active Step Caption */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold font-display text-white mb-1">
                  {steps[activeStep - 1].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  {steps[activeStep - 1].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Step Timeline List */}
          <div className="lg:col-span-6 space-y-3">
            {steps.map((st) => {
              const Icon = iconComponents[st.icon] || Ruler;
              const isActive = activeStep === st.step;
              const isPast = activeStep > st.step;

              return (
                <button
                  key={st.step}
                  onClick={() => setActiveStep(st.step)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-slate-900 to-slate-800 border-primary shadow-lg shadow-primary/20 scale-[1.02]'
                      : isPast
                      ? 'bg-slate-900/60 border-emerald-900/40 text-slate-300'
                      : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                        isActive
                          ? 'bg-primary text-white shadow-md'
                          : isPast
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {st.step}
                    </div>

                    <div>
                      <h4 className={`text-sm sm:text-base font-bold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                        {st.title}
                      </h4>
                      {isActive && (
                        <p className="text-xs text-slate-300 mt-1 line-clamp-1">{st.desc}</p>
                      )}
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-primary translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
