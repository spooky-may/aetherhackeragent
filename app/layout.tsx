import type { Metadata } from 'next';
import { Cinzel_Decorative, Cormorant_Garamond, Fira_Code } from 'next/font/google';
import Link from 'next/link';
import MysticEmbers from './components/MysticEmbers';
import './globals.css';

const cinzelDecorative = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel-decorative',
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'Aether Hacker Agent — Divine Security Toolkit',
  description: 'A mystical, agent-driven security toolkit inspired by Greek goddess mythology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cinzelDecorative.variable} ${cormorantGaramond.variable} ${firaCode.variable}`}>
        
        {/* Ambient Noise */}
        <div className="bg-noise"></div>

        {/* Radial Gradients overlay */}
        <div className="pointer-events-none fixed inset-0 z-0" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(23, 162, 162, 0.08) 0%, rgba(255, 230, 203, 0) 70%)',
          mixBlendMode: 'multiply'
        }}></div>

        {/* Softened Vignette overlay for an aged parchment edge vibe */}
        <div className="pointer-events-none fixed inset-0 z-0" style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(27,49,37,0.15) 80%, rgba(15,30,20,0.6) 100%)',
          mixBlendMode: 'multiply'
        }}></div>

        {/* Background Mural Overlay */}
        <div className="pointer-events-none fixed inset-0 z-0" style={{ mixBlendMode: 'multiply', opacity: 0.15 }}>
          <img 
            alt="background mural" 
            className="h-[150dvh] w-auto min-w-[100dvw] object-cover object-top-left" 
            src="https://hermes-agent.nousresearch.com/_next/static/media/filler-bg0.7368f8a1.jpg" 
          />
        </div>

        {/* Floating Particles */}
        <MysticEmbers />
        
        {/* Main Content */}
        <main className="relative z-10 w-full min-h-screen border-x border-accent-teal/40 mx-auto max-w-[1600px] flex flex-col">
          {/* Global Header */}
          <header className="w-full border-b border-accent-teal/40 p-6 flex justify-between items-center backdrop-blur-sm bg-white/20">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-sm overflow-hidden ornamental-border shrink-0 group-hover:shadow-lg transition-shadow relative">
                <div className="absolute inset-0 bg-godteal/30 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-10"></div>
                <img src="/refrence/logo.jpeg" alt="Goddess Mascot" className="w-full h-full object-cover grayscale-[0.3] sepia-[0.2] contrast-[1.1] brightness-[0.95]" />
              </div>
              <h2 className="font-expanded text-xl tracking-widest text-godteal uppercase font-bold group-hover:text-accent-teal transition-colors">Aether Agent</h2>
            </Link>
            <div className="flex gap-8">
              <Link href="/catalog" className="font-sans text-[0.6875rem] tracking-[0.1875rem] uppercase opacity-80 hover:opacity-100 text-godteal font-bold transition-opacity">Grimoire (Skills)</Link>
              <a href="#" className="font-sans text-[0.6875rem] tracking-[0.1875rem] uppercase opacity-60 hover:opacity-100 transition-opacity">Docs</a>
            </div>
          </header>

          <div className="flex-1 w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
