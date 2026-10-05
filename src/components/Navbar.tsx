'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Sun, Moon, ShieldCheck, ArrowRight } from 'lucide-react';
import siteData from '@/content/site-data.json';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({
  onOpenQuoteModal,
  isDarkMode,
  toggleTheme,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Video Showcase', href: '#intro-video' },
    { name: 'Installation', href: '#installation' },
    { name: 'House Builder', href: '#house-builder' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Header Contact Bar */}
      <div className="bg-[#070D17] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden lg:block z-40 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-secondary font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              {siteData.company.certification}
            </span>
            <span className="text-slate-400">
              📍 {siteData.contact.address.split(',')[0]}, Ravulapalem
            </span>
            <span className="text-slate-400">
              🕒 {siteData.contact.workingHours.split('|')[0]}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {siteData.contact.phone}
            </a>
            <span className="text-xs bg-emerald-950/80 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800/40 font-semibold">
              JSW Authorised Partner
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'top-0 py-2.5 bg-slate-900/95 dark:bg-[#0B131F]/95 backdrop-blur-md shadow-2xl border-b border-slate-800 dark:border-white/10'
            : 'top-0 lg:top-8 py-3.5 bg-gradient-to-b from-slate-900/90 dark:from-[#0B131F]/90 via-transparent to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Dynamic Brand Logo */}
          <Link href="#hero" className="group">
            <BrandLogo />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons & Clean Dark/Light Mode Switcher */}
          <div className="hidden md:flex items-center gap-3">
            {/* Clean Light / Dark Mode Toggle Button (Moon / Sun) */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-slate-800/90 dark:bg-slate-800/80 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700 shadow-md flex items-center justify-center"
              aria-label="Toggle Light and Dark Theme"
              title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600 fill-indigo-600/20" />
              )}
            </button>

            {/* Pulsing Get Free Quote CTA */}
            <button
              onClick={onOpenQuoteModal}
              className="shimmer-btn relative group px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-amber-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-primary/30 hover:shadow-primary/60 hover:scale-105 transition-all duration-300 animate-pulse-glow flex items-center gap-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-800/90 text-slate-200 border border-slate-700 shadow-md flex items-center justify-center"
              aria-label="Toggle Light and Dark Theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800/90 text-white border border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#0B131F]/98 dark:bg-[#0B131F]/98 backdrop-blur-xl md:hidden flex flex-col justify-between p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <BrandLogo />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-slate-800 text-slate-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-3 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-200 hover:text-primary py-2 px-3 rounded-lg hover:bg-slate-800/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 text-amber-400 font-bold border border-amber-500/30 text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Us: {siteData.contact.phone}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-amber-600 text-white font-bold shadow-lg shadow-primary/30 text-center text-sm"
              >
                Get Free Quote Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
