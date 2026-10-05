'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before (Old Roof)',
  afterLabel = 'After (Godavari Roofing)',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPosition(pos);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl select-none cursor-ew-resize"
    >
      {/* After Image (Full background) */}
      <Image
        src={afterImage}
        alt={afterLabel}
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 text-xs font-bold z-10">
        {afterLabel}
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute top-0 left-0 bottom-0 overflow-hidden z-10"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full min-w-[300px] sm:min-w-[600px]">
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            className="object-cover filter grayscale contrast-125"
            unoptimized
          />
        </div>
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/90 text-amber-400 border border-slate-700 text-xs font-bold z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Divider Bar */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-2xl cursor-ew-resize flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-9 h-9 rounded-full bg-primary text-white border-2 border-white flex items-center justify-center text-xs font-bold shadow-xl">
          ↔
        </div>
      </div>
    </div>
  );
}
