'use client';

import { useEffect, useState } from 'react';

export default function MysticEmbers() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Subtle, Elder Scrolls-like dust motes and faint ancient wisps.
    // Reduced count and removed neon colors for a mature aesthetic.
    const newParticles = Array.from({ length: 25 }).map((_, i) => {
      const isWisp = i % 5 === 0;
      
      // Muted, ancient gold/ash tones only. No bright teal.
      const colorClass = Math.random() > 0.5 ? 'text-divine-gold bg-divine-gold' : 'text-parchment bg-parchment';
      
      return {
        id: i,
        left: `${Math.random() * 100}vw`,
        size: isWisp ? Math.random() * 30 + 15 : Math.random() * 1.5 + 0.5, // Much smaller embers, softer wisps
        delay: `${Math.random() * 20}s`,
        duration: isWisp ? `${40 + Math.random() * 40}s` : `${20 + Math.random() * 30}s`, // Very slow drifting
        opacity: isWisp ? Math.random() * 0.05 + 0.02 : Math.random() * 0.15 + 0.05, // Barely visible
        drift: `${(Math.random() - 0.5) * (isWisp ? 150 : 80)}px`, // Gentle sway
        blur: isWisp ? 'blur(16px)' : 'blur(0.5px)', // Softened edges
        color: colorClass
      };
    });

    setParticles(newParticles);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-70">
      {particles.map(p => (
        <div
          key={p.id}
          className={`absolute bottom-0 rounded-full animate-ember ${p.color}`}
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.duration,
            filter: p.blur,
            '--ember-opacity': p.opacity,
            '--ember-drift': p.drift,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
