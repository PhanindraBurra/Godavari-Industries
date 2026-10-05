'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, Send, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import siteData from '@/content/site-data.json';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [sheetType, setSheetType] = useState('Color Coated Roofing Sheets');
  const [areaSqFt, setAreaSqFt] = useState<number>(1000);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Price estimate calculator logic (Approx ₹45-85 per sq ft depending on profile)
  const pricePerSqFt = 
    sheetType === 'Color Coated Roofing Sheets' ? 52 :
    sheetType === 'Mangalore Tile Profile Sheets' ? 68 :
    sheetType === 'Polycarbonate Skylight Sheets' ? 75 : 85;

  const estimatedCost = areaSqFt * pricePerSqFt;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.5 } });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#0B131F] border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          Instant Cost Estimator
        </div>

        <h3 className="text-2xl font-bold font-display text-white mb-6">
          Get Instant <span className="text-primary">Roofing Estimate</span>
        </h3>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-white">Estimate Request Sent!</h4>
            <p className="text-slate-300 text-sm">
              We received your estimate for <span className="text-amber-400 font-bold">{areaSqFt} Sq. Ft.</span> of {sheetType}. Our engineer will call <span className="text-emerald-400">{phone}</span> shortly.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-primary text-white font-bold text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Sheet Type Select */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                Select Roofing Profile
              </label>
              <select
                value={sheetType}
                onChange={(e) => setSheetType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-primary focus:outline-none text-sm"
              >
                <option value="Color Coated Roofing Sheets">JSW Indradhanush+ Color Coated Sheets</option>
                <option value="Mangalore Tile Profile Sheets">Mangalore Tile Profile Roof Sheets</option>
                <option value="Polycarbonate Skylight Sheets">Polycarbonate Skylight Sheets</option>
                <option value="C & Z Structural Steel Purlins">C & Z Structural Steel Shed</option>
              </select>
            </div>

            {/* Sq Ft Slider & Input */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-300 uppercase mb-2">
                <span>Estimated Area (Sq. Ft.)</span>
                <span className="text-primary font-bold text-sm">{areaSqFt} sq ft</span>
              </div>
              <input
                type="range"
                min={200}
                max={10000}
                step={100}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer"
              />
            </div>

            {/* Estimated Price Range Box */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 block">Estimated Material Cost</span>
                <span className="text-xs text-emerald-400 font-semibold">Includes JSW Quality Guarantee</span>
              </div>
              <div className="text-right">
                <span className="text-xl sm:text-2xl font-bold font-display text-amber-400">
                  ₹{estimatedCost.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-500 block">*Approximate</span>
              </div>
            </div>

            {/* User Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit Mobile"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-amber-600 text-white font-bold text-sm shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Request Formal Detailed Quotation
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
