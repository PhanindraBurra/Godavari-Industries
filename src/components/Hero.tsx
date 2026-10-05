'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown, ShieldCheck, Award } from 'lucide-react';
import RainSunCanvas from './RainSunCanvas';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

const slides = [
  {
    id: 1,
    image: 'https://godavariroofing.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-05-at-11.10.16-AM-1024x455.jpeg',
    title: 'PREMIUM COLOR COATED ROOFING',
    subtitle: 'Engineered for extreme durability, weatherproofing, and architectural beauty.',
    badge: 'JSW Indradhanush+ Certified',
    transition: 'ken-burns',
  },
  {
    id: 2,
    image: 'https://godavariroofing.com/wp-content/uploads/2024/09/MDP_1678-scaled.jpg',
    title: 'INDUSTRIAL & PEB SHED STRUCTURES',
    subtitle: 'High-tensile C & Z purlins engineered for warehouses and manufacturing units.',
    badge: 'ISO 9001:2015 Certified',
    transition: 'clip-path',
  },
  {
    id: 3,
    image: 'https://godavariroofing.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-05-at-11.10.20-AM-1-1024x601.jpeg',
    title: 'ARCHITECTURAL TILE PROFILE ROOFS',
    subtitle: 'Classic clay tile aesthetic meets modern prepainted metal strength.',
    badge: '15+ Years Warranty',
    transition: 'crossfade',
  },
  {
    id: 4,
    image: 'https://godavariroofing.com/wp-content/uploads/2024/09/rooding-sheets-2-1024x1024.png',
    title: 'POLYCARBONATE & TURBO VENTILATION',
    subtitle: 'Natural daylighting solutions paired with zero-electricity heat exhaust systems.',
    badge: 'Energy Saving Roofing',
    transition: 'diagonal',
  },
];

const rotatingTaglines = [
  'Strong. Durable. Weatherproof.',
  'Precision Framing. Zero Leakage.',
  'Certified JSW Quality Guarantee.',
  'Built to Protect Your Dream Space.',
];

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);

  // Slide Auto-play timer (5s)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    const taglineTimer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % rotatingTaglines.length);
    }, 3200);

    return () => {
      clearInterval(slideTimer);
      clearInterval(taglineTimer);
    };
  }, []);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#070D17]">
      {/* Background Slideshow with Transition Variants */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover object-center"
            unoptimized
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Brand Gradient Overlay for Maximum Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F] via-[#0B131F]/70 to-[#0B131F]/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B131F]/90 via-[#0B131F]/60 to-transparent z-10" />

      {/* Canvas Rain Drop & Sun Rays Floating Overlay */}
      <RainSunCanvas />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-44 sm:py-32 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold tracking-wide mb-6 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            {slides[currentSlide].badge}
          </motion.div>

          {/* Animated Headline Word-by-Word */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              key={currentSlide}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.15]"
            >
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? 'text-primary' : 'text-white'}>
                  {word}{' '}
                </span>
              ))}
            </motion.h1>
          </div>

          {/* Rotating Tagline */}
          <div className="h-8 overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={taglineIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl font-semibold text-emerald-400 flex items-center gap-2"
              >
                <Award className="w-5 h-5 text-amber-400" />
                <span>{rotatingTaglines[taglineIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          {/* CTAs with Magnetic Hover Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onOpenQuoteModal}
              className="shimmer-btn group px-8 py-4 rounded-full bg-gradient-to-r from-primary via-amber-500 to-amber-600 text-white font-bold text-base shadow-xl shadow-primary/40 hover:shadow-primary/70 hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>Get Free Instant Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <a
              href="#projects"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
            >
              View Our Completed Roofs
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation Controls & Progress Bars (Positioned cleanly on mobile without collision) */}
      <div className="absolute bottom-16 sm:bottom-10 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center gap-4">
        {/* Slide Progress indicators */}
        <div className="flex items-center gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: currentSlide === index ? '36px' : '12px' }}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-full h-full ${
                  currentSlide === index ? 'bg-primary' : 'bg-slate-600/60'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrev}
            className="p-2.5 sm:p-3 rounded-full bg-slate-900/90 hover:bg-primary text-white backdrop-blur-md border border-slate-700/80 transition-colors shadow-lg"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2.5 sm:p-3 rounded-full bg-slate-900/90 hover:bg-primary text-white backdrop-blur-md border border-slate-700/80 transition-colors shadow-lg"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Bouncing Scroll-Down Indicator (Hidden on mobile to avoid overlap, visible on sm+) */}
      <a
        href="#trust-bar"
        className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 text-slate-400 hover:text-white transition-colors hidden sm:flex flex-col items-center gap-1 animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-primary" />
      </a>
    </section>
  );
}
