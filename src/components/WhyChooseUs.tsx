'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Zap, Clock, DollarSign, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'ISO 9001:2015 Certified',
      desc: 'Certified manufacturing & structural framing processes ensuring strict compliance with Indian standard codes.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
    },
    {
      title: 'Official JSW Steel Partner',
      desc: 'Direct partnership with JSW Steel Ltd guaranteeing authentic JSW Indradhanush+ color-coated sheets.',
      icon: Award,
      color: 'text-amber-400',
    },
    {
      title: 'Trained & Certified Crew',
      desc: 'In-house certified welders, structural riggers, and crest-fastening specialists for safe execution.',
      icon: Users,
      color: 'text-blue-400',
    },
    {
      title: '3x Anti-Rust Durability',
      desc: 'Galvalume 55% Al-Zn alloy coating layer providing superior corrosion resistance against heavy monsoon rains.',
      icon: Zap,
      color: 'text-purple-400',
    },
    {
      title: 'Rapid Project Handover',
      desc: 'Streamlined fabrication & delivery ensures fast installation (most residential projects completed in 3-5 days).',
      icon: Clock,
      color: 'text-orange-400',
    },
    {
      title: 'Direct Factory Pricing',
      desc: 'Transparent pricing with no middleman markup, giving you maximum structural value for your budget.',
      icon: DollarSign,
      color: 'text-green-400',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 relative bg-[#0B131F] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            The Godavari Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Why Property Owners <span className="text-primary">Trust Us</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We combine high-grade materials with expert engineering to build roofs that stand strong for decades.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                <div className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center ${feat.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-primary transition-colors">
                  {feat.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
