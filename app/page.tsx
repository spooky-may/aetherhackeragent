import Link from 'next/link';

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
             <div className="absolute inset-0 bg-godteal/30 mix-blend-multiply z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-10"></div>
             <img src="/refrence/logo.jpeg" alt="Goddess Mascot" className="w-full h-full object-cover grayscale-[0.3] sepia-[0.2] contrast-[1.1] brightness-[0.95] transition-transform duration-700 group-hover:scale-105" />
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

          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r lg:border-t border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Zero-Context Delegation</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Scale your operations without mental fatigue. Aether Hacker dispatches specialized sub-agents to handle batch tasks, enabling parallel execution pipelines with zero context-cost.
            </p>
          </div>

          <div className="p-8 lg:p-12 border-b md:border-b-0 lg:border-r lg:border-t border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Automated Vigilance</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Schedule complex security audits using natural language. From periodic port sweeps to automated reporting, the agent maintains an eternal watch over your digital perimeters.
            </p>
          </div>

          <div className="p-8 lg:p-12 lg:border-t border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">The Living Grimoire</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Access a constantly evolving repository of technical skills. Each tool is vetted, documented, and ready for immediate deployment into your operational theatre.
            </p>
          </div>

        </div>
      </div>

      {/* Ritual Process / How it Works */}
      <div className="w-full border-b border-accent-teal/40 bg-white/10">
        <div className="p-6 border-b border-accent-teal/40 bg-white/20">
          <h2 className="font-expanded text-xl font-bold uppercase tracking-widest text-godteal">
            The Path to Manifestation
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-accent-teal/40 flex flex-col items-center text-center group hover:bg-white/20 transition-colors">
            <span className="font-expanded text-4xl text-godteal mb-4 opacity-50 group-hover:text-accent-teal transition-colors">I</span>
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Summon the Core</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Establish your autonomous node. Deploy the Aether Core onto your server to begin manifesting technical capabilities.
            </p>
          </div>
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-accent-teal/40 flex flex-col items-center text-center group hover:bg-white/20 transition-colors">
            <span className="font-expanded text-4xl text-godteal mb-4 opacity-50 group-hover:text-accent-teal transition-colors">II</span>
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Attune Conduits</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Connect your tactical interfaces. Link Discord, Telegram, or direct CLI to issue commands across realms.
            </p>
          </div>
          <div className="p-8 lg:p-12 flex flex-col items-center text-center group hover:bg-white/20 transition-colors">
            <span className="font-expanded text-4xl text-godteal mb-4 opacity-50 group-hover:text-accent-teal transition-colors">III</span>
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Execute Skills</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Browse the Grimoire, extract specific tools, and command the agent to perform complex security rituals autonomously.
            </p>
          </div>
        </div>
      </div>

      {/* Community / Echoes of the Void */}
      <div className="w-full border-b border-accent-teal/40">
        <div className="p-6 border-b border-accent-teal/40 bg-white/20">
          <h2 className="font-expanded text-xl font-bold uppercase tracking-widest text-godteal">
            The Operative Network
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-accent-teal/40 bg-white/30 flex flex-col justify-center hover:bg-white/40 transition-colors">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Join the Sanctuary</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed mb-6">
              Connect with fellow operatives. Join our secure Discord sanctuary to exchange new skills, report anomalies, and evolve the agent collective.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-sans text-[0.6875rem] tracking-[0.1875rem] uppercase text-godteal font-bold opacity-80 hover:opacity-100 transition-opacity">
              Enter Sanctuary <span className="text-accent-teal">→</span>
            </a>
          </div>
          <div className="p-8 lg:p-12 bg-white/30 flex flex-col justify-center hover:bg-white/40 transition-colors">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Expand the Grimoire</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed mb-6">
              Aether Hacker thrives on technical contributions. Submit your security tools via GitHub and integrate your expertise into the global Grimoire.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-sans text-[0.6875rem] tracking-[0.1875rem] uppercase text-godteal font-bold opacity-80 hover:opacity-100 transition-opacity">
              Access Repository <span className="text-accent-teal">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="p-16 text-center">
        <Link href="/catalog" className="inline-flex items-center gap-2 border-none bg-transparent font-sans text-[0.9375rem] tracking-[0.1875rem] uppercase text-godteal font-bold opacity-80 hover:opacity-100 transition-opacity">
          Explore the Grimoire of Skills
          <span className="text-accent-teal">→</span>
        </Link>
      </div>

    </div>
  );
}
