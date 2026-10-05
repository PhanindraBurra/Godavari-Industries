'use client';

import { useEffect, useRef } from 'react';

export default function RainSunCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Rain drop objects
    const dropCount = 45;
    const drops: { x: number; y: number; length: number; speed: number; opacity: number }[] = [];

    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 6 + 4,
        opacity: Math.random() * 0.4 + 0.15,
      });
    }

    // Sun Ray effect parameters
    let sunAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle Sun Rays in top right corner
      sunAngle += 0.005;
      const sunX = width * 0.85;
      const sunY = height * 0.15;
      const numRays = 8;

      ctx.save();
      for (let i = 0; i < numRays; i++) {
        const angle = sunAngle + (i * Math.PI * 2) / numRays;
        const rayGradient = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 350);
        rayGradient.addColorStop(0, 'rgba(255, 200, 100, 0.15)');
        rayGradient.addColorStop(0.5, 'rgba(224, 122, 0, 0.05)');
        rayGradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.moveTo(sunX, sunY);
        ctx.arc(sunX, sunY, 400, angle - 0.15, angle + 0.15);
        ctx.closePath();
        ctx.fillStyle = rayGradient;
        ctx.fill();
      }
      ctx.restore();

      // 2. Draw Falling Rain drops
      ctx.strokeStyle = 'rgba(180, 220, 255, 0.35)';
      ctx.lineWidth = 1.2;

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 2, d.y + d.length);
        ctx.stroke();

        d.y += d.speed;
        d.x -= 0.5;

        // Splashing rain drops reset
        if (d.y > height) {
          d.y = -20;
          d.x = Math.random() * width;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}
