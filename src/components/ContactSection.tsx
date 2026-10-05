'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';
import siteData from '@/content/site-data.json';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: 'Color Coated Roofing Sheets',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    if (!formData.location.trim()) errs.location = 'City / Location is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070D17] text-white border-t border-slate-800">
      
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${siteData.contact.whatsappNumber}?text=Hello%20Godavari%20Roofing,%20I%20would%20like%20a%20free%20quote%20for%20my%20roofing%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-all flex items-center justify-center animate-bounce"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Phone className="w-4 h-4 text-emerald-400" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Request a <span className="text-primary">Free Quote & Site Visit</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Connect directly with our structural engineering team for pricing, sheet sample catalogs, and laser measurement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">Quote Request Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <span className="text-primary font-semibold">{formData.name}</span>. Our structural roofing expert will contact you within 2 hours at <span className="text-emerald-400">{formData.phone}</span>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white text-xs font-bold"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Varma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-primary focus:outline-none"
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9888686555"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-primary focus:outline-none"
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ravulapalem / Rajahmundry"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-primary focus:outline-none"
                    />
                    {errors.location && <p className="text-xs text-red-400 mt-1">{errors.location}</p>}
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Required Service / Product
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-primary focus:outline-none"
                    >
                      <option value="Color Coated Roofing Sheets">Color Coated Roofing Sheets</option>
                      <option value="Tile Profile Sheets">Mangalore Tile Profile Roof</option>
                      <option value="PEB Shed & Structural Steel">PEB Shed & Structural Steel</option>
                      <option value="Polycarbonate Skylight">Polycarbonate Skylight</option>
                      <option value="Turbo Ventilators">Turbo Ventilators</option>
                      <option value="Roof Renovation & Repair">Roof Renovation & Leak Repair</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Message / Roof Dimensions (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your estimated square footage or structural requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-amber-500 to-amber-600 text-white font-bold text-base shadow-xl shadow-primary/30 hover:shadow-primary/60 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: Contact Details & Google Map Embed */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold font-display text-white">Contact Information</h3>

              <div className="space-y-4 text-sm">
                <a
                  href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-4 p-3 rounded-2xl bg-slate-950 hover:border-primary/50 border border-slate-800 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-amber-400 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs text-slate-400">Call Us Anytime</div>
                    <div className="font-bold text-white text-base">{siteData.contact.phone}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Factory & Office Address</div>
                    <div className="font-medium text-slate-200 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {siteData.contact.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Business Hours</div>
                    <div className="font-medium text-slate-200 text-xs mt-0.5">
                      {siteData.contact.workingHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 h-64 shadow-2xl relative">
              <iframe
                src={siteData.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Godavari Roofing Location Map"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
