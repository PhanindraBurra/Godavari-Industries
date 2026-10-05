'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ChevronRight, ChevronLeft, CheckCircle2, Shield, Info } from 'lucide-react';
import siteData from '@/content/site-data.json';

interface ProductHorizontalGalleryProps {
  onOpenQuoteModal: () => void;
}

export default function ProductHorizontalGallery({ onOpenQuoteModal }: ProductHorizontalGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProductModal, setActiveProductModal] = useState<any>(null);

  const categories = ['All', 'Color Coated', 'Tile Profile', 'Structural Steel', 'Polycarbonate', 'Ventilation'];

  const filteredProducts = selectedCategory === 'All'
    ? siteData.products
    : siteData.products.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 relative bg-[#0B131F] text-white overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-4 h-4 text-primary" />
              Roofing Sheet & Steel Catalog
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Explore Our Premium <span className="text-primary">Sheet Profiles</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Card Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod, idx) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex-shrink-0 w-[300px] sm:w-[360px] rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-primary/50 overflow-hidden shadow-xl flex flex-col justify-between group"
              >
                {/* Product Image */}
                <div className="relative h-56 w-full bg-slate-950 p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-800 text-[10px] font-bold">
                    {prod.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-display text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-2">
                      {prod.description}
                    </p>

                    {/* Specs Pills */}
                    <div className="flex flex-wrap gap-2 mb-4 text-[11px]">
                      <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                        Gauge: {prod.thickness}
                      </span>
                      <span className="bg-amber-950/60 text-amber-300 px-2.5 py-1 rounded-md border border-amber-800/40">
                        {prod.colors.length} Color Options
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProductModal(prod)}
                      className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1"
                    >
                      <Info className="w-3.5 h-3.5 text-primary" /> View Specs
                    </button>

                    <button
                      onClick={onOpenQuoteModal}
                      className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold hover:bg-amber-600 transition-colors shadow-md"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Product Spec Modal */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0B131F] border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative shadow-2xl overflow-hidden"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{activeProductModal.category}</span>
                <h3 className="text-2xl font-bold font-display text-white">{activeProductModal.name}</h3>
              </div>
              <button
                onClick={() => setActiveProductModal(null)}
                className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="relative h-48 w-full bg-slate-950 rounded-2xl mb-6 p-4">
              <Image
                src={activeProductModal.image}
                alt={activeProductModal.name}
                fill
                className="object-contain p-2"
                unoptimized
              />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">{activeProductModal.description}</p>

            <div className="space-y-3 mb-6">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Key Specifications</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block">Thickness Range:</span>
                  <span className="text-amber-400 font-semibold">{activeProductModal.thickness}</span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block">Available Shades:</span>
                  <span className="text-emerald-400 font-semibold">{activeProductModal.colors.join(', ')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Features</div>
              {activeProductModal.features.map((feat: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setActiveProductModal(null);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/30"
            >
              Request Custom Pricing for {activeProductModal.name}
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
