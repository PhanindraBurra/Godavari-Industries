'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Building, Smile, Layers, ShieldAlert } from 'lucide-react';
import siteData from '@/content/site-data.json';

function CounterNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = Math.max(1, Math.floor(end / (duration / 16)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  const stats = [
    {
      label: 'Years of Excellence',
      value: siteData.company.stats.yearsExperience,
      suffix: '+ Years',
      icon: Calendar,
      color: 'text-amber-400',
    },
    {
      label: 'Projects Completed',
      value: siteData.company.stats.projectsCompleted,
      suffix: '+ Roofs',
      icon: Building,
      color: 'text-emerald-400',
    },
    {
      label: 'Satisfied Customers',
      value: siteData.company.stats.happyCustomers,
      suffix: '+ Clients',
      icon: Smile,
      color: 'text-blue-400',
    },
    {
      label: 'Roof Sheet Varieties',
      value: siteData.company.stats.sheetTypesAvailable,
      suffix: '+ Profiles',
      icon: Layers,
      color: 'text-orange-400',
    },
  ];

  return (
    <section id="trust-bar" className="relative z-30 py-12 bg-gradient-to-r from-[#070D17] via-[#101A2B] to-[#070D17] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center shadow-lg"
              >
                <div className={`p-3 rounded-xl bg-slate-800/80 mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <CounterNumber value={stat.value} suffix={stat.suffix} />
                <span className="text-xs sm:text-sm font-medium text-slate-300 mt-2">
                  {stat.label}
                </span>

                {/* Subtle Glow corner */}
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/30 transition-all" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
