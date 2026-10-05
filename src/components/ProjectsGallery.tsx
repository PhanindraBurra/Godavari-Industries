'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Eye, X, Filter, Sparkles } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

const galleryItems = [
  {
    id: 1,
    title: 'Modern Villa Tile Profile Roof',
    category: 'Residential',
    location: 'Rajahmundry',
    image: 'https://godavariroofing.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-05-at-11.10.16-AM-1024x455.jpeg',
    desc: 'Installed JSW Indradhanush+ terracotta tile profile metal sheets with custom ridge capping.',
  },
  {
    id: 2,
    title: '15,000 Sq Ft PEB Warehouse Shed',
    category: 'Industrial',
    location: 'Ravulapalem',
    image: 'https://godavariroofing.com/wp-content/uploads/2024/09/MDP_1678-scaled.jpg',
    desc: 'Heavy-duty C&Z purlin framing with stainless steel wind-driven turbo ventilators.',
  },
  {
    id: 3,
    title: 'Commercial Complex Skylight Canopy',
    category: 'Commercial',
    location: 'Kakinada',
    image: 'https://godavariroofing.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-05-at-11.10.20-AM-1-1024x601.jpeg',
    desc: 'Polycarbonate multiwall daylighting sheets over structural steel arches.',
  },
  {
    id: 4,
    title: 'Color Coated Shed Addition',
    category: 'Residential',
    location: 'Amalapuram',
    image: 'https://godavariroofing.com/wp-content/uploads/2024/09/19-939x1024.png',
    desc: 'Royal Blue color coated JSW steel sheets over steel truss porch.',
  },
  {
    id: 5,
    title: 'Factory Roof Renovation',
    category: 'Industrial',
    location: 'Rajahmundry',
    image: 'https://godavariroofing.com/wp-content/uploads/2024/09/11-939x1024.png',
    desc: 'Replaced old corrugated asbestos with heat-reflective PPGL sheets.',
  },
  {
    id: 6,
    title: 'Agricultural Storage Godown',
    category: 'Industrial',
    location: 'Tanuku',
    image: 'https://godavariroofing.com/wp-content/uploads/2024/09/18-939x1024.png',
    desc: 'Full PEB structural steel erection with leakproof crest fastening.',
  },
];

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<any>(null);

  const filters = ['All', 'Residential', 'Industrial', 'Commercial'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-[#070D17] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-4 h-4 text-primary" />
            Our Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Completed <span className="text-primary">Roofing Projects</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Browse through our residential villas, commercial complexes, and industrial PEB sheds delivered across Andhra Pradesh.
          </p>
        </div>

        {/* Before / After Showcase Section */}
        <div className="mb-20">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              Roof Renovation Transformation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Drag Slider to Compare Old vs New Godavari Metal Roof
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="https://godavariroofing.com/wp-content/uploads/2024/09/MDP_1663-1024x681.jpg"
              afterImage="https://godavariroofing.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-05-at-11.10.16-AM-1024x455.jpeg"
              beforeLabel="Old Leaky Asbestos Roof"
              afterLabel="New JSW Indradhanush+ Tile Roof"
            />
          </div>
        </div>

        {/* Gallery Filter Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-primary/50 shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 text-emerald-400 border border-slate-700 text-xs font-bold backdrop-blur-md">
                    {item.category}
                  </span>

                  {/* Hover Lightbox Icon */}
                  <button
                    onClick={() => setLightboxImage(item)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="View Lightbox"
                  >
                    <div className="p-4 rounded-full bg-primary text-white shadow-xl scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-6 h-6" />
                    </div>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs text-amber-400 font-semibold mb-1">📍 {item.location}</div>
                  <h3 className="text-lg font-bold font-display text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full bg-[#0B131F] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-96 sm:h-[480px] w-full">
              <Image
                src={lightboxImage.image}
                alt={lightboxImage.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            <div className="p-6 bg-slate-900 border-t border-slate-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{lightboxImage.category} • {lightboxImage.location}</span>
              <h3 className="text-xl font-bold font-display text-white mt-1">{lightboxImage.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{lightboxImage.desc}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
