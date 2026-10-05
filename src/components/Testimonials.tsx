'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import siteData from '@/content/site-data.json';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = siteData.testimonials;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  return (
    <section id="testimonials" className="py-24 relative bg-[#070D17] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquareQuote className="w-4 h-4 text-amber-400" />
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Real reviews from home owners, factory managers, and commercial complex builders across Andhra Pradesh.
          </p>
        </div>

        {/* Carousel Box */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="max-w-4xl mx-auto bg-slate-900/90 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative"
        >
          <Quote className="absolute top-6 right-8 w-20 h-20 text-slate-800/40 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6 text-amber-400">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Comment text */}
              <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-medium italic mb-8">
                &ldquo;{testimonials[currentIndex].comment}&rdquo;
              </p>

              {/* Author Details */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                <div>
                  <h4 className="text-lg font-bold font-display text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="p-2.5 rounded-full bg-slate-800 hover:bg-primary text-white transition-colors"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                    className="p-2.5 rounded-full bg-slate-800 hover:bg-primary text-white transition-colors"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
