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
  icons: {
    icon: '/logo.jpeg',
  },
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
              <div className="w-10 h-10 artifact-ring shrink-0 group-hover:shadow-lg transition-shadow relative">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-godteal/30 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-10"></div>
                  <img src="/refrence/logo.jpeg" alt="Goddess Mascot" className="w-full h-full object-cover grayscale-[0.3] sepia-[0.2] contrast-[1.1] brightness-[0.95]" />
                </div>
              </div>
              <h2 className="font-expanded text-xl tracking-widest text-godteal uppercase font-bold group-hover:text-accent-teal transition-colors">Aether Agent</h2>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/catalog" className="font-sans text-[0.6875rem] tracking-[0.1875rem] uppercase opacity-80 hover:opacity-100 text-godteal font-bold transition-opacity">Grimoire (Skills)</Link>
              <Link href="/docs" className="font-sans text-[0.6875rem] tracking-[0.1875rem] uppercase opacity-80 hover:opacity-100 text-godteal font-bold transition-opacity">Docs</Link>
              <div className="flex items-center gap-4 border-l border-accent-teal/20 pl-8">
                <a href="https://x.com/Aetheragentt" target="_blank" rel="noopener noreferrer" className="text-godteal/60 hover:text-accent-teal transition-colors" title="X (Twitter)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.486h2.039L6.486 3.24H4.298l13.309 17.399z"/>
                  </svg>
                </a>
                <a href="https://github.com/spooky-may/aetherhackeragent" target="_blank" rel="noopener noreferrer" className="text-godteal/60 hover:text-accent-teal transition-colors" title="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </a>
              </div>
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
