'use client';

import { useEffect, useState } from 'react';

export default function MysticEmbers() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Dragon-fire embers and thick volcanic ash
    // Increased count and visibility for the "Elder Scrolls Dragon" vibe.
    const newParticles = Array.from({ length: 65 }).map((_, i) => {
      const isWisp = i % 5 === 0;
      
      // Mix of fiery orange, deep crimson, and ancient gold
      const rand = Math.random();
      let colorClass = 'text-divine-gold bg-divine-gold';
      if (rand > 0.7) colorClass = 'text-dragon-fire bg-dragon-fire';
      else if (rand > 0.4) colorClass = 'text-dragon-blood bg-dragon-blood';
      
      return {
        id: i,
        left: `${Math.random() * 100}vw`,
        size: isWisp ? Math.random() * 20 + 10 : Math.random() * 3 + 1, // Noticeable embers
        delay: `${Math.random() * 10}s`,
        duration: isWisp ? `${15 + Math.random() * 20}s` : `${10 + Math.random() * 15}s`, // Faster, like rising heat
        opacity: isWisp ? Math.random() * 0.15 + 0.05 : Math.random() * 0.4 + 0.2, // Much more visible
        drift: `${(Math.random() - 0.5) * (isWisp ? 200 : 100)}px`, // Sway in the thermal updraft
        blur: isWisp ? 'blur(8px)' : 'blur(0.5px)', // Sharper embers, distinct wisps
        color: colorClass
      };
    });

    setParticles(newParticles);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-100">
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
