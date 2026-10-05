'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck, Film, Sparkles } from 'lucide-react';

interface IntroVideoPlayerProps {
  onOpenQuoteModal?: () => void;
}

const videoSources = [
  {
    title: 'JSW Steel Sheet Manufacturing & Installation',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-roof-of-a-building-under-construction-41584-large.mp4',
    poster: 'https://godavariroofing.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-05-at-11.10.16-AM-1024x455.jpeg',
  },
  {
    title: 'Aerial View of Metal Roof Installation',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-workers-on-a-building-under-construction-41586-large.mp4',
    poster: 'https://godavariroofing.com/wp-content/uploads/2024/09/MDP_1678-scaled.jpg',
  },
  {
    title: 'Pre-Engineered Building Steel Truss Erection',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-cranes-and-building-41582-large.mp4',
    poster: 'https://godavariroofing.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-05-at-11.10.20-AM-1-1024x601.jpeg',
  },
];

export default function IntroVideoPlayer({ onOpenQuoteModal }: IntroVideoPlayerProps) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreenModal, setIsFullscreenModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="intro-video" className="py-20 relative bg-[#070D17] text-white border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Film className="w-4 h-4 text-primary" />
            Cinematic Video Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Godavari Roofing <span className="text-primary">In Action</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Watch real footage of our high-precision JSW sheet installation, C/Z purlin erection, and factory roof construction.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden bg-slate-950 border border-slate-700 shadow-2xl group">
          
          {/* Main Video Element */}
          <div className="relative h-72 sm:h-[480px] w-full">
            <video
              ref={videoRef}
              src={videoSources[activeVideoIndex].url}
              poster={videoSources[activeVideoIndex].poster}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Dark Brand Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B131F] via-transparent to-[#0B131F]/40 pointer-events-none" />

            {/* Video Controls Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0B131F]/85 backdrop-blur-md border border-slate-700/80">
              
              {/* Active Video Title */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/20 text-primary border border-primary/30 hidden sm:block">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Now Playing</div>
                  <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                    {videoSources[activeVideoIndex].title}
                  </h3>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-primary" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>

                <button
                  onClick={() => setIsFullscreenModal(true)}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  aria-label="Expand Video"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {onOpenQuoteModal && (
                  <button
                    onClick={onOpenQuoteModal}
                    className="px-4 py-2 rounded-xl bg-primary text-white font-bold text-xs shadow-md"
                  >
                    Get Quote
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Video Selector Tabs Below */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 bg-slate-900 border-t border-slate-800">
            {videoSources.map((vid, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveVideoIndex(idx);
                  setIsPlaying(true);
                }}
                className={`p-3 rounded-xl text-left transition-all border flex items-center gap-3 ${
                  activeVideoIndex === idx
                    ? 'bg-slate-800 border-primary text-white shadow-md'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-slate-800 text-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs font-semibold line-clamp-1">{vid.title}</span>
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Fullscreen Video Modal */}
      {isFullscreenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="relative max-w-5xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            <button
              onClick={() => setIsFullscreenModal(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700"
            >
              ✕
            </button>
            <div className="relative h-[480px] sm:h-[600px] w-full">
              <video
                src={videoSources[activeVideoIndex].url}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
