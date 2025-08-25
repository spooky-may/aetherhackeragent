'use client';

import { useEffect, useState } from 'react';

export default function MysticEmbers() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate an array of random particles only on the client
    // to prevent React hydration mismatch errors.
    const newParticles = Array.from({ length: 45 }).map((_, i) => {
      // 80% chance of gold, 20% chance of teal
      const colorClass = Math.random() > 0.8 ? 'text-accent-teal bg-accent-teal' : 'text-divine-gold bg-divine-gold';
      
      return {
        id: i,
        left: `${Math.random() * 100}vw`,
        size: Math.random() * 2.5 + 1, // 1px to 3.5px
        delay: `${Math.random() * 15}s`,
        duration: `${15 + Math.random() * 20}s`, // 15s to 35s
        opacity: Math.random() * 0.3 + 0.1, // Max 0.4 opacity
        drift: `${(Math.random() - 0.5) * 150}px`, // Drift left or right up to 75px
        color: colorClass
      };
    });

    setParticles(newParticles);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
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
            '--ember-opacity': p.opacity,
            '--ember-drift': p.drift,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
