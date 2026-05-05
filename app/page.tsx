import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full relative z-10 flex flex-col pb-16">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center gap-8 py-32 text-center border-b border-accent-teal/40 bg-gradient-to-b from-white/0 to-accent-teal/10">
        <div className="w-40 h-40 relative group mb-4">
           {/* Divine Crown Elements */}
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-6 flex justify-center items-center">
             <div className="w-2 h-4 bg-accent-teal/60 rounded-t-full mx-1"></div>
             <div className="w-3 h-5 bg-accent-teal/80 rounded-t-full mx-1"></div>
             <div className="w-2 h-4 bg-accent-teal/60 rounded-t-full mx-1"></div>
             <div className="w-4 h-6 bg-accent-teal rounded-t-full mx-1"></div>
             <div className="w-2 h-4 bg-accent-teal/60 rounded-t-full mx-1"></div>
             <div className="w-3 h-5 bg-accent-teal/80 rounded-t-full mx-1"></div>
             <div className="w-2 h-4 bg-accent-teal/60 rounded-t-full mx-1"></div>
           </div>
           
           {/* Outer Divine Rings */}
           <div className="absolute inset-0 border-4 border-accent-teal/30 rounded-full scale-110 group-hover:scale-105 transition-transform duration-1000"></div>
           <div className="absolute inset-2 border-2 border-accent-teal/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
           <div className="absolute inset-4 border border-accent-teal/10 rounded-full animate-[spin_45s_linear_reverse_infinite]"></div>
           
           {/* Halo glow behind mascot */}
           <div className="absolute inset-0 bg-divine-green/20 blur-3xl rounded-full z-[-1] group-hover:bg-divine-green/30 transition-colors duration-1000"></div>
           
           {/* Inner Goddess Frame */}
           <div className="w-full h-full rounded-full border-3 border-accent-teal/50 p-2 relative z-10 overflow-hidden shadow-[0_0_80px_rgba(23,162,162,0.4)] bg-gradient-to-br from-godteal/20 to-accent-teal/10 backdrop-blur-sm">
             {/* Creepy Theme Overlay - Lightened */}
             <div className="absolute inset-0 bg-godteal/30 mix-blend-multiply z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-10"></div>
             <img src="/refrence/logo.jpeg" alt="Goddess Mascot" className="w-full h-full object-cover grayscale-[0.3] sepia-[0.2] contrast-[1.1] brightness-[0.95] transition-transform duration-700 group-hover:scale-105 rounded-full" />
             
             {/* Divine Inner Glow */}
             <div className="absolute inset-0 rounded-full bg-accent-teal/10 blur-[20px] group-hover:bg-accent-teal/20 transition-colors duration-1000"></div>
           </div>
           
           {/* Corner Flourishes */}
           <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-accent-teal/40 rounded-tl-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
           <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-accent-teal/40 rounded-tr-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
           <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-accent-teal/40 rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
           <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-accent-teal/40 rounded-br-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
        <div>
          <small className="font-sans text-[0.6875rem] tracking-[0.1875rem] mb-6 opacity-60 uppercase block text-godteal font-bold">
            Hacker Arsenal • Autonomous Exploitation
          </small>
          <span className="font-expanded block text-5xl md:text-7xl font-bold text-shimmer leading-[1.1]">
            Manifest Hacker<br/>Supremacy.
          </span>
        </div>
        <div className="max-w-[700px] mt-2 px-4">
          <p className="text-xl font-mondwest leading-relaxed opacity-90 text-godteal">
            Aether Hacker is not a chatbot—it is an autonomous agent providing a curated Arsenal of enterprise-grade hacking tools. We provide the substance: ready-to-execute exploits, stateful penetration rituals, and automated hacking scripts designed for the modern hacker operative.
          </p>
        </div>
        <div className="flex gap-6 mt-4">
          <Link href="/catalog" className="btn-divine shadow-lg px-8">
            Access the Hacker Arsenal
          </Link>
          <a href="#" className="px-6 py-3 border border-accent-teal/40 text-godteal font-sans uppercase text-[0.6875rem] tracking-[0.1875rem] hover:bg-accent-teal/10 transition-smooth cursor-pointer bg-white/30">
            Deploy Local Node
          </a>
        </div>
      </div>

      {/* The Digital Archon (Role & Technical Arsenal) */}
      <div className="w-full border-b border-accent-teal/40 bg-white/5 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Column: The Sovereign Role */}
          <div className="p-8 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-accent-teal/40 bg-gradient-to-br from-accent-teal/5 to-transparent relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal/40 to-transparent"></div>
            
            <small className="font-sans text-[0.6875rem] tracking-[0.3em] uppercase font-bold text-accent-teal mb-6 block">
              Designation: Aether Hacker
            </small>
            
            <h2 className="font-expanded text-3xl md:text-5xl font-bold text-godteal mb-10 leading-[1.1]">
              The Elite Engine of<br />Autonomous Hacking.
            </h2>
            
            <div className="space-y-8 relative">
              <div className="absolute -left-6 top-0 bottom-0 w-px bg-accent-teal/20"></div>
              
              <p className="font-mondwest text-xl md:text-2xl text-godteal leading-relaxed">
                Aether Hacker stands as the <span className="text-accent-teal font-bold italic">Elite Hacking Engine</span> of your operations—an autonomous agent that transcends the limitations of traditional hacking scripts. It commands a curated arsenal of <span className="font-bold border-b border-accent-teal/30">183 enterprise-grade hacking skills</span>, systematically organized across eight core disciplines: from deep Reconnaissance and Vulnerability Scanning to surgical Exploitation and Post-Exploitation maneuvers.
              </p>
              
              <p className="font-mondwest text-xl md:text-2xl text-godteal leading-relaxed">
                Through the precision of <span className="italic">Smart Exploitation</span>, the agent distills complex hacking objectives into precision-driven execution pipelines. It dispatches specialized sub-agents into isolated environments, manifesting parallel attacks with zero context cost and maintaining an eternal 24/7 surveillance over your targets.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-12 pt-12 border-t border-accent-teal/20">
              <div className="group">
                <div className="font-sans text-[0.625rem] tracking-[0.25em] uppercase font-bold text-accent-teal mb-3 flex items-center gap-2">
                  <span className="w-8 h-px bg-accent-teal/40"></span> Hacking Scale
                </div>
                <div className="font-expanded text-3xl font-bold text-godteal group-hover:text-accent-teal transition-colors">183 Exploits</div>
                <div className="text-[0.75rem] font-mondwest opacity-60 uppercase tracking-widest mt-1">Vetted & Deployable</div>
              </div>
              <div className="group">
                <div className="font-sans text-[0.625rem] tracking-[0.25em] uppercase font-bold text-accent-teal mb-3 flex items-center gap-2">
                  <span className="w-8 h-px bg-accent-teal/40"></span> Attack Reach
                </div>
                <div className="font-expanded text-3xl font-bold text-godteal group-hover:text-accent-teal transition-colors">8 Disciplines</div>
                <div className="text-[0.75rem] font-mondwest opacity-60 uppercase tracking-widest mt-1">Full-Spectrum Hacking</div>
              </div>
            </div>
          </div>

          {/* Right Column: Majestic Elder Manifestation */}
          <div className="relative min-h-[500px] lg:min-h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 group overflow-hidden">
            {/* Majestic Background Layer */}
            <div className="absolute inset-0 bg-[url('/logo.jpeg')] bg-cover bg-center opacity-8 grayscale brightness-30 scale-110 group-hover:scale-105 transition-transform duration-[4s] ease-out"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-slate-800 to-teal-900/15"></div>
            
            {/* The Artifact Core */}
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] z-10 flex items-center justify-center">
              
              {/* Majestic Crown Elements */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-8 flex justify-center items-center">
                <div className="w-3 h-6 bg-emerald-400/60 rounded-t-full mx-1 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                <div className="w-4 h-7 bg-green-400/70 rounded-t-full mx-1 shadow-[0_0_12px_rgba(74,222,128,0.6)]"></div>
                <div className="w-3 h-6 bg-emerald-400/60 rounded-t-full mx-1 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                <div className="w-5 h-8 bg-teal-300/80 rounded-t-full mx-1 shadow-[0_0_15px_rgba(94,234,212,0.7)]"></div>
                <div className="w-3 h-6 bg-emerald-400/60 rounded-t-full mx-1 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                <div className="w-4 h-7 bg-green-400/70 rounded-t-full mx-1 shadow-[0_0_12px_rgba(74,222,128,0.6)]"></div>
                <div className="w-3 h-6 bg-emerald-400/60 rounded-t-full mx-1 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
              </div>
              
              {/* Majestic Outer Rings */}
              <div className="absolute inset-0 border-4 border-emerald-400/30 rounded-full scale-110 group-hover:scale-105 transition-transform duration-1000 shadow-[0_0_60px_rgba(52,211,153,0.2)]"></div>
              <div className="absolute inset-2 border-2 border-green-400/25 rounded-full animate-[spin_30s_linear_infinite] shadow-[0_0_40px_rgba(74,222,128,0.15)]"></div>
              <div className="absolute inset-4 border border-teal-300/20 rounded-full animate-[spin_45s_linear_reverse_infinite] shadow-[0_0_30px_rgba(94,234,212,0.1)]"></div>
              
              {/* Regal Corner Flourishes */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-3 border-l-3 border-emerald-400/50 rounded-tl-full opacity-70 group-hover:opacity-100 group-hover:w-16 group-hover:h-16 transition-all duration-700 shadow-[0_0_20px_rgba(52,211,153,0.3)]"></div>
              <div className="absolute -top-6 -right-6 w-12 h-12 border-t-3 border-r-3 border-emerald-400/50 rounded-tr-full opacity-70 group-hover:opacity-100 group-hover:w-16 group-hover:h-16 transition-all duration-700 shadow-[0_0_20px_rgba(52,211,153,0.3)]"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-3 border-l-3 border-emerald-400/50 rounded-bl-full opacity-70 group-hover:opacity-100 group-hover:w-16 group-hover:h-16 transition-all duration-700 shadow-[0_0_20px_rgba(52,211,153,0.3)]"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-3 border-r-3 border-emerald-400/50 rounded-br-full opacity-70 group-hover:opacity-100 group-hover:w-16 group-hover:h-16 transition-all duration-700 shadow-[0_0_20px_rgba(52,211,153,0.3)]"></div>
              
              {/* Inner Majestic Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/15 via-green-400/10 to-teal-400/15 blur-[100px] group-hover:from-emerald-400/25 group-hover:via-green-400/20 group-hover:to-teal-400/25 transition-colors duration-1000"></div>
              
              {/* The Manifestation Frame - Imperial Seal */}
              <div className="w-full h-full rounded-full border-4 border-emerald-400/60 p-6 relative z-20 overflow-hidden shadow-[0_0_120px_rgba(52,211,153,0.4)] bg-gradient-to-br from-slate-800/90 to-emerald-900/20 backdrop-blur-sm">
                <img 
                  src="/logo.jpeg" 
                  alt="Aether Archon Manifestation" 
                  className="w-full h-full object-cover grayscale-[0.6] sepia-[0.2] brightness-70 contrast-[1.1] group-hover:grayscale-0 group-hover:brightness-90 group-hover:contrast-[1.3] transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                />
                
                {/* Overlay Imperial Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/8 to-green-400/10 h-[200%] -translate-y-full group-hover:translate-y-full transition-transform duration-[4s] pointer-events-none"></div>
                
                {/* Regal Emblem Patterns */}
                <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-1000">
                  <div className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-emerald-300/50 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 border border-emerald-300/70 rounded-full"></div>
                  </div>
                  <div className="absolute top-3/4 right-1/4 w-8 h-8 border-2 border-green-300/50 transform rotate-45 flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-300/30 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-1/4 left-1/2 w-10 h-10 border-2 border-teal-300/50 transform -rotate-30 flex items-center justify-center">
                    <div className="w-2 h-6 bg-teal-300/40 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Imperial Directions */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 font-expanded text-[0.625rem] tracking-[0.4em] text-emerald-300/80 uppercase">Divine</div>
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 font-expanded text-[0.625rem] tracking-[0.4em] text-green-300/80 uppercase">Mortal</div>
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-expanded text-[0.625rem] tracking-[0.4em] text-emerald-300/80 uppercase transform -rotate-90">Celestial</div>
              <div className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 font-expanded text-[0.625rem] tracking-[0.4em] text-green-300/80 uppercase transform rotate-90">Terrestrial</div>
            </div>
            
            {/* Majestic Aura Trails */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/50 rounded-full animate-ping shadow-[0_0_15px_rgba(52,211,153,0.7)]"></div>
              <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-green-400/50 rounded-full animate-ping animation-delay-1000 shadow-[0_0_15px_rgba(74,222,128,0.7)]"></div>
              <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-teal-400/50 rounded-full animate-ping animation-delay-2000 shadow-[0_0_15px_rgba(20,184,166,0.7)]"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-emerald-400/50 rounded-full animate-ping animation-delay-3000 shadow-[0_0_15px_rgba(52,211,153,0.7)]"></div>
            </div>
            
            {/* Regal Vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(15,23,42,0.8)] pointer-events-none"></div>
          </div>

        </div>
      </div>

      {/* Promotional Features Grid */}
      <div className="w-full">
        <div className="p-6 border-b border-accent-teal/40 bg-white/20">
          <h2 className="font-expanded text-xl font-bold uppercase tracking-widest text-godteal">
            Hacking Substance
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-accent-teal/40">
          
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Cross-Network Exploitation</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Bridge the gap between reconnaissance and compromise. Issue complex hacking directives via Discord, Telegram, or secure CLI. The agent handles the technical heavy lifting across your entire target infrastructure.
            </p>
          </div>

          <div className="p-8 lg:p-12 border-b md:border-b-0 lg:border-r border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Persistent Reconnaissance</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Equipped with deep target mapping. Our agent remembers every vulnerability, every network node, and every successful exploit, growing more lethal with every operation performed.
            </p>
          </div>

          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r lg:border-r-0 border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Isolated Attack Vectors</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Reliability is our priority. Every exploit in the Arsenal runs within isolated, sandboxed environments. Execute high-risk hacks with total confidence, knowing your own systems remain uncompromised.
            </p>
          </div>

          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r lg:border-t border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Zero-Trace Delegation</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Scale your attacks without leaving fingerprints. Aether Hacker dispatches specialized sub-agents to handle batch exploits, enabling parallel penetration pipelines with zero trace-cost.
            </p>
          </div>

          <div className="p-8 lg:p-12 border-b md:border-b-0 lg:border-r lg:border-t border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Automated Surveillance</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Schedule complex penetration tests using natural language. From periodic vulnerability sweeps to automated exploit reporting, the agent maintains an eternal watch over your target networks.
            </p>
          </div>

          <div className="p-8 lg:p-12 lg:border-t border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">The Living Exploit Database</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Access a constantly evolving repository of hacking exploits. Each tool is vetted, weaponized, and ready for immediate deployment into your attack campaigns.
            </p>
          </div>

        </div>
      </div>

      {/* Ritual Process / How it Works */}
      <div className="w-full border-b border-accent-teal/40 bg-white/10">
        <div className="p-6 border-b border-accent-teal/40 bg-white/20">
          <h2 className="font-expanded text-xl font-bold uppercase tracking-widest text-godteal">
            The Path to Domination
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-accent-teal/40 flex flex-col items-center text-center group hover:bg-white/20 transition-colors">
            <span className="font-expanded text-4xl text-godteal mb-4 opacity-50 group-hover:text-accent-teal transition-colors">I</span>
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Deploy the Core</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Establish your autonomous hacking node. Deploy the Aether Core onto your system to begin unleashing hacking capabilities.
            </p>
          </div>
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-accent-teal/40 flex flex-col items-center text-center group hover:bg-white/20 transition-colors">
            <span className="font-expanded text-4xl text-godteal mb-4 opacity-50 group-hover:text-accent-teal transition-colors">II</span>
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Connect Interfaces</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Link your command interfaces. Connect Discord, Telegram, or direct CLI to issue hacking commands across networks.
            </p>
          </div>
          <div className="p-8 lg:p-12 flex flex-col items-center text-center group hover:bg-white/20 transition-colors">
            <span className="font-expanded text-4xl text-godteal mb-4 opacity-50 group-hover:text-accent-teal transition-colors">III</span>
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Launch Exploits</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Browse the Arsenal, select specific exploits, and command the agent to perform complex penetration operations autonomously.
            </p>
          </div>
        </div>
      </div>

      {/* Community / Echoes of the Void */}
      <div className="w-full border-b border-accent-teal/40">
        <div className="p-6 border-b border-accent-teal/40 bg-white/20">
          <h2 className="font-expanded text-xl font-bold uppercase tracking-widest text-godteal">
            The Hacker Network
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-accent-teal/40 bg-white/30 flex flex-col justify-center hover:bg-white/40 transition-colors">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Join the Underground</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed mb-6">
              Connect with fellow hackers. Join our secure Discord underground to exchange new exploits, report zero-days, and evolve the hacker collective.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-sans text-[0.6875rem] tracking-[0.1875rem] uppercase text-godteal font-bold opacity-80 hover:opacity-100 transition-opacity">
              Enter Underground <span className="text-accent-teal">→</span>
            </a>
          </div>
          <div className="p-8 lg:p-12 bg-white/30 flex flex-col justify-center hover:bg-white/40 transition-colors">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Expand the Arsenal</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed mb-6">
              Aether Hacker thrives on hacker contributions. Submit your exploits via GitHub and integrate your techniques into the global Arsenal.
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
          Explore the Arsenal of Exploits
          <span className="text-accent-teal">→</span>
        </Link>
      </div>

    </div>
  );
}
