'use client';

import { useEffect, useState } from 'react';

export default function MysticEmbers() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate an array of random particles only on the client
    // to prevent React hydration mismatch errors.
    const newParticles = Array.from({ length: 50 }).map((_, i) => {
      // 1 in 5 particles is a large, slow-moving "wisp" (spirit orb)
      const isWisp = i % 5 === 0;
      
      // 80% chance of gold, 20% chance of teal
      const colorClass = Math.random() > 0.8 ? 'text-accent-teal bg-accent-teal' : 'text-divine-gold bg-divine-gold';
      
      return {
        id: i,
        left: `${Math.random() * 100}vw`,
        size: isWisp ? Math.random() * 40 + 20 : Math.random() * 2.5 + 1, // Wisps are 20-60px, embers 1-3.5px
        delay: `${Math.random() * 15}s`,
        duration: isWisp ? `${25 + Math.random() * 30}s` : `${15 + Math.random() * 20}s`, // Wisps move slower
        opacity: isWisp ? Math.random() * 0.1 + 0.05 : Math.random() * 0.3 + 0.1, // Wisps are very faint
        drift: `${(Math.random() - 0.5) * (isWisp ? 300 : 150)}px`, // Wisps drift wider
        blur: isWisp ? 'blur(12px)' : 'none',
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
            filter: p.blur,
            '--ember-opacity': p.opacity,
            '--ember-drift': p.drift,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
