'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Target, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import siteData from '@/content/site-data.json';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<'story' | 'mission' | 'vision'>('story');

  const highlights = [
    'Authorised Partner for JSW Indradhanush+ Color Coated Sheets',
    'ISO 9001:2015 Quality & Safety Management Certified',
    'Custom Cold-Rolled C & Z Galvanized Steel Purlin Fabrication',
    '2,500+ Completed Projects Across Residential & PEB Structures',
    '15+ Years Product Weathering & Anti-Corrosion Guarantee',
    'Expert In-House Structural Framing & Certified Welding Crew',
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0B131F] text-white overflow-hidden">
      {/* Decorative Background Mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image Reveal Mask Stack with JSW Stamp */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 group">
              {/* Image Reveal Mask Animation */}
              <motion.div
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                className="relative h-[420px] sm:h-[480px] w-full"
              >
                <Image
                  src="https://godavariroofing.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-05-at-11.10.16-AM-1024x455.jpeg"
                  alt="Godavari Roofing Factory & Products"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F]/90 via-transparent to-transparent" />
              </motion.div>

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#070D17]/85 backdrop-blur-md border border-slate-700/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">JSW Indradhanush+ Partner</div>
                  <div className="text-xs text-slate-300">Certified Official Roofing Supplier</div>
                </div>
                <Award className="w-8 h-8 text-amber-400" />
              </div>
            </div>

            {/* Secondary Floating Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-56 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-2xl border-2 border-primary z-20 hidden sm:block"
            >
              <Image
                src="https://godavariroofing.com/wp-content/uploads/2024/09/MDP_1663-1024x681.jpg"
                alt="Steel Roofing Sheets"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>

            {/* ISO Badge floating */}
            <div className="absolute -top-6 -left-4 sm:-left-6 px-4 py-2.5 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 text-xs font-bold shadow-xl flex items-center gap-2 z-20">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              ISO 9001:2015 CERTIFIED
            </div>
          </div>

          {/* RIGHT: Text Content & Tabs */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              About Godavari Roofing Industries
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white leading-tight mb-6"
            >
              Elevating South India&apos;s Roofing Standards with <span className="text-primary">Precision & Durability</span>
            </motion.h2>

            {/* Tab Selector Buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 mb-6">
              <button
                onClick={() => setActiveTab('story')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'story'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Award className="w-4 h-4" /> Our Story
              </button>

              <button
                onClick={() => setActiveTab('mission')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'mission'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Target className="w-4 h-4" /> Mission
              </button>

              <button
                onClick={() => setActiveTab('vision')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'vision'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-4 h-4" /> Vision
              </button>
            </div>

            {/* Tab Content Panes */}
            <div className="min-h-[120px] mb-8">
              {activeTab === 'story' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-slate-300 text-sm sm:text-base leading-relaxed"
                >
                  {siteData.company.about.short} Built on over a decade of structural engineering expertise, we partner with industry leaders like JSW Steel to deliver weather-defying roofing systems designed for homes, commercial complexes, and industrial warehouses.
                </motion.p>
              )}

              {activeTab === 'mission' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-slate-300 text-sm sm:text-base leading-relaxed"
                >
                  {siteData.company.about.mission}
                </motion.p>
              )}

              {activeTab === 'vision' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-slate-300 text-sm sm:text-base leading-relaxed"
                >
                  {siteData.company.about.vision}
                </motion.p>
              )}
            </div>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
