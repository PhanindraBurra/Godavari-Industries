'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ArrowUp, Phone, MapPin, Mail } from 'lucide-react';
import siteData from '@/content/site-data.json';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050A12] text-slate-400 text-sm border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white p-1 rounded-xl flex-shrink-0">
                <Image
                  src="https://godavariroofing.com/wp-content/uploads/2024/09/GODAVARI.png"
                  alt="Godavari Roofing"
                  fill
                  className="object-contain p-0.5"
                  unoptimized
                />
              </div>
              <div>
                <div className="text-xl font-bold font-display text-white">GODAVARI <span className="text-primary">ROOFING</span></div>
                <div className="text-xs text-emerald-400 font-semibold tracking-wider uppercase">INDUSTRIES</div>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {siteData.company.about.short}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              {siteData.company.certification}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home Intro</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Roofing Services</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products Catalog</a></li>
              <li><a href="#installation" className="hover:text-primary transition-colors">7-Step Installation</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects Gallery</a></li>
            </ul>
          </div>

          {/* Sheet Products */}
          <div>
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#products" className="hover:text-primary transition-colors">Color Coated Sheets</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Tile Profile Sheets</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">C & Z Purlins</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Polycarbonate Sheets</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Wind Turbo Ventilators</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">PPGL Coils</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider mb-4">Location</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{siteData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`} className="font-semibold text-white hover:text-primary">
                  {siteData.contact.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {siteData.company.legalName}. All rights reserved. JSW Official Roofing Partner.
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900 hover:bg-primary text-white border border-slate-800 transition-colors flex items-center gap-2"
            aria-label="Back to top"
          >
            <span className="text-[11px] font-semibold">Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
