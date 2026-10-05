'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Wrench, Sun, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import siteData from '@/content/site-data.json';

const iconMap: Record<string, any> = {
  Home: Home,
  Building2: Building2,
  Wrench: Wrench,
  Sun: Sun,
};

interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  short: string;
  details: string;
}

export default function ServicesGrid({ onOpenQuoteModal }: { onOpenQuoteModal: () => void }) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 relative bg-[#070D17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Our Comprehensive Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            End-to-End <span className="text-primary">Roofing & Engineering</span> Services
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From residential villa roofs to massive pre-engineered factory sheds, we deliver precision craftsmanship tailored to your structural needs.
          </p>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Home;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-3xl p-8 bg-slate-900/80 border border-slate-800 hover:border-primary/60 transition-all duration-300 flex flex-col justify-between shadow-xl overflow-hidden"
              >
                {/* Glowing Top Accent Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Animated Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-amber-500/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6 group-hover:scale-110">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>

                  {/* Short description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.short}
                  </p>
                </div>

                {/* Card Action Link */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-amber-400 transition-colors pt-4 border-t border-slate-800/80"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Drawer Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0B131F] border border-slate-700 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white font-display mb-3">
              {selectedService.name}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.details}
            </p>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 mb-6 space-y-2">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Service Guarantee</div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Check className="w-4 h-4 text-emerald-400" /> Complete Structural Load Calculation
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Check className="w-4 h-4 text-emerald-400" /> Original JSW / Tata Steel Material Sourcing
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Check className="w-4 h-4 text-emerald-400" /> On-Time Project Handover Guarantee
              </div>
            </div>

            <div className="flex justify-between items-center gap-4">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenQuoteModal();
                }}
                className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-bold shadow-lg shadow-primary/30"
              >
                Book Free Site Inspection
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
