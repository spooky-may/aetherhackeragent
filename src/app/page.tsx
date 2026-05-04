import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Zap, Shield, Cpu, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full relative z-10 flex flex-col pb-16">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center gap-8 py-32 text-center border-b border-accent-teal/40 bg-gradient-to-b from-white/0 to-accent-teal/10">
        <div className="w-40 h-40 artifact-ring mb-4 shadow-2xl relative group">
           {/* Halo glow behind mascot */}
           <div className="absolute inset-0 bg-divine-green/20 blur-3xl rounded-full z-[-1]"></div>
           <div className="w-full h-full rounded-full overflow-hidden relative">
             {/* Creepy Theme Overlay - Lightened */}
             <div className="absolute inset-0 bg-godteal/30 mix-blend-multiply z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-100"></div>
             <Image src="/logo.jpeg" alt="Goddess Mascot" fill className="object-cover grayscale-[0.3] sepia-[0.2] contrast-[1.1] brightness-[0.95] transition-transform duration-700 group-hover:scale-105" />
           </div>
        </div>
        <div>
          <small className="font-sans text-[0.6875rem] tracking-[0.1875rem] mb-6 opacity-60 uppercase block text-godteal font-bold">
            Technical Arsenal • Autonomous Infrastructure
          </small>
          <span className="font-expanded block text-5xl md:text-7xl font-bold text-shimmer leading-[1.1]">
            Manifest Technical<br/>Supremacy.
          </span>
        </div>
        <div className="max-w-[700px] mt-2 px-4">
          <p className="text-xl font-mondwest leading-relaxed opacity-90 text-godteal">
            Aether Hacker is not a chatbot—it is an autonomous agent providing a curated Grimoire of enterprise-grade security tools. We provide the substance: ready-to-execute skills, stateful inspection rituals, and automated exploitation scripts designed for the modern operative.
          </p>
        </div>
        <div className="flex gap-6 mt-4">
          <Link href="/catalog" className="btn-divine shadow-lg px-8">
            Access the Grimoire
          </Link>
          <a href="#" className="px-6 py-3 border border-accent-teal/40 text-godteal font-sans uppercase text-[0.6875rem] tracking-[0.1875rem] hover:bg-accent-teal/10 transition-smooth cursor-pointer bg-white/30">
            Deploy Local Node
          </a>
        </div>
      </div>

      {/* NEW: THE AGENT PRESENCE SECTION */}
      <section className="w-full py-24 border-b border-accent-teal/40 bg-white/40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <Image src="/logo.jpeg" alt="Agent Backdrop" fill className="object-cover" />
        </div>
        
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-left">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-accent-teal"></span>
                <span className="label-text text-accent-teal font-bold">Divine Infrastructure</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-expanded mb-8 leading-tight text-godteal">
                UNLEASH THE POWER OF<br/>THE ARCHITECT
              </h2>
              
              <p className="text-xl font-mondwest leading-relaxed mb-8 text-godteal/90">
                Aether is the sentient heart of your tactical operations. Beyond simple automation, she provides specialized tools and arcane skills tailored to every security use case. She is the agent that equips the modern hacker with technical mastery, bridging the void between intent and execution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="flex gap-4 p-6 bg-white/30 border border-accent-teal/20 shadow-sm">
                  <div className="mt-1 text-accent-teal"><Zap size={24} /></div>
                  <div>
                    <h4 className="font-expanded font-bold mb-2 uppercase text-sm text-godteal">Arcane Provision</h4>
                    <p className="text-sm text-godteal/70">I provide ready-to-manifest scripts directly to your theatre of operation.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/30 border border-accent-teal/20 shadow-sm">
                  <div className="mt-1 text-accent-teal"><Shield size={24} /></div>
                  <div>
                    <h4 className="font-expanded font-bold mb-2 uppercase text-sm text-godteal">Sentinel Insight</h4>
                    <p className="text-sm text-godteal/70">Context-aware monitoring that evolves with your project's digital topology.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/30 border border-accent-teal/20 shadow-sm">
                  <div className="mt-1 text-accent-teal"><Cpu size={24} /></div>
                  <div>
                    <h4 className="font-expanded font-bold mb-2 uppercase text-sm text-godteal">Autonomous Agency</h4>
                    <p className="text-sm text-godteal/70">Dispatch specialized sub-agents to execute complex rituals in parallel.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/30 border border-accent-teal/20 shadow-sm">
                  <div className="mt-1 text-accent-teal"><Sparkles size={24} /></div>
                  <div>
                    <h4 className="font-expanded font-bold mb-2 uppercase text-sm text-godteal">Divine Skillsets</h4>
                    <p className="text-sm text-godteal/70">Access my ever-growing Grimoire of enterprise-grade security capabilities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Orbital Rings */}
                <div className="absolute inset-0 rounded-full border border-accent-teal/30 animate-pulse"></div>
                <div className="absolute -inset-4 rounded-full border border-accent-teal/10 animate-ping duration-[3000ms]"></div>
                
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-double border-accent-teal/60 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-godteal/10 mix-blend-color z-10"></div>
                  <Image src="/logo.jpeg" alt="Aether Agent Presence" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Features Grid */}
      <div className="w-full">
        <div className="p-6 border-b border-accent-teal/40 bg-white/20">
          <h2 className="font-expanded text-xl font-bold uppercase tracking-widest text-godteal">
            Operational Substance
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-accent-teal/40">
          
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Cross-Realm Execution</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Bridge the gap between intention and impact. Issue complex security directives via Discord, Telegram, or secure CLI. The agent handles the technical heavy lifting across your entire server infrastructure.
            </p>
          </div>

          <div className="p-8 lg:p-12 border-b md:border-b-0 lg:border-r border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Persistent Intelligence</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Equipped with deep project topology mapping. Our agent remembers every vulnerability, every network node, and every successful exploit, growing more capable with every ritual performed.
            </p>
          </div>

          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r lg:border-r-0 border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Hardened Namespaces</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Reliability is our priority. Every tool in the Grimoire runs within isolated, hardened namespaces. Execute high-risk scripts with total confidence, knowing the host server remains untainted.
            </p>
          </div>

        </div>
      </div>

      {/* Call to Action */}
      <div className="p-16 text-center border-t border-accent-teal/20 mt-12 bg-accent-teal/5">
        <Link href="/catalog" className="inline-flex items-center gap-2 font-sans text-[1.125rem] tracking-[0.1875rem] uppercase text-godteal font-bold hover:text-accent-teal transition-colors group">
          Explore the Grimoire of Skills
          <ChevronRight className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

    </div>
  );
}
