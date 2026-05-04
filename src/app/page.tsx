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
             <Image src="/logo.jpeg" alt="Goddess Mascot" fill priority className="object-cover grayscale-[0.3] sepia-[0.2] contrast-[1.1] brightness-[0.95] transition-transform duration-700 group-hover:scale-105" />
           </div>
        </div>
        <div>
          <small className="font-sans text-[0.6875rem] tracking-[0.1875rem] mb-6 opacity-60 uppercase block text-godteal font-bold">
            AI Agent • Security Tools • Hacker Arsenal
          </small>
          <span className="font-expanded block text-5xl md:text-7xl font-bold text-shimmer leading-[1.1]">
            An Agent That<br/>Provides Tools.
          </span>
        </div>
        <div className="max-w-[800px] mt-2 px-4">
          <p className="text-xl font-mondwest leading-relaxed opacity-90 text-godteal mb-6">
            <span className="font-bold text-accent-teal">Aether Hacker is an autonomous AI agent</span> designed to provide hackers, penetration testers, and security professionals with a <span className="font-bold text-accent-teal">constantly-evolving arsenal of tools and skills</span>.
          </p>
          <p className="text-lg font-mondwest leading-relaxed opacity-85 text-godteal">
            Whether you need network reconnaissance, vulnerability scanning, exploitation, post-exploitation, or malware analysis—the agent understands your use case and delivers the exact tools you need. No bloat. No unnecessary features. Just substance: ready-to-execute scripts, automated workflows, and specialized security capabilities organized by purpose and capability level.
          </p>
        </div>
        <div className="flex gap-6 mt-6">
          <Link href="/catalog" className="btn-divine shadow-lg px-8">
            Browse Tools & Skills
          </Link>
          <a href="#" className="px-6 py-3 border border-accent-teal/40 text-godteal font-sans uppercase text-[0.6875rem] tracking-[0.1875rem] hover:bg-accent-teal/10 transition-smooth cursor-pointer bg-white/30">
            Deploy Agent Node
          </a>
        </div>
      </div>

      {/* THE AGENT'S TOOLKIT SECTION */}
      <section className="w-full py-24 border-b border-accent-teal/40 bg-white/40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <Image src="/logo.jpeg" alt="Agent Backdrop" fill className="object-cover" />
        </div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-left">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-accent-teal"></span>
                <span className="label-text text-accent-teal font-bold">Agent-Driven Capabilities</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-expanded mb-8 leading-tight text-godteal">
                The Agent Provides<br/>Tools You Actually Need
              </h2>

              <p className="text-xl font-mondwest leading-relaxed mb-8 text-godteal/90">
                Aether is not a generic chatbot—it's an intelligent agent built to understand security workflows and deliver precisely-tailored tools for your mission. Whether conducting reconnaissance, exploiting vulnerabilities, or analyzing malware, the agent recognizes your objective and provisions the exact skills required. Every tool is documented, executable, and aligned to a specific use case.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="flex gap-4 p-6 bg-white/30 border border-accent-teal/20 shadow-sm">
                  <div className="mt-1 text-divine-green"><Zap size={24} /></div>
                  <div>
                    <h4 className="font-expanded font-bold mb-2 uppercase text-sm text-godteal">Ready-to-Execute Tools</h4>
                    <p className="text-sm text-godteal/70">Every tool comes with deployment scripts, pre-configured payloads, and execution examples.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/30 border border-accent-teal/20 shadow-sm">
                  <div className="mt-1 text-divine-green"><Shield size={24} /></div>
                  <div>
                    <h4 className="font-expanded font-bold mb-2 uppercase text-sm text-godteal">Purpose-Driven Skills</h4>
                    <p className="text-sm text-godteal/70">Tools organized by use case: reconnaissance, scanning, exploitation, post-exploitation, analysis.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/30 border border-accent-teal/20 shadow-sm">
                  <div className="mt-1 text-divine-green"><Cpu size={24} /></div>
                  <div>
                    <h4 className="font-expanded font-bold mb-2 uppercase text-sm text-godteal">Autonomous Execution</h4>
                    <p className="text-sm text-godteal/70">Dispatch the agent to run tools autonomously or delegate to specialized sub-agents for parallel workflows.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/30 border border-accent-teal/20 shadow-sm">
                  <div className="mt-1 text-divine-green"><Sparkles size={24} /></div>
                  <div>
                    <h4 className="font-expanded font-bold mb-2 uppercase text-sm text-godteal">Living Arsenal</h4>
                    <p className="text-sm text-godteal/70">A constantly-growing Grimoire of enterprise-grade security tools, regularly updated with emerging techniques.</p>
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
                  <Image src="/logo.jpeg" alt="Aether Agent Arsenal" fill priority className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENT PROVIDES TOOLS & SKILLS SECTION */}
      <section className="w-full py-24 border-b border-accent-teal/40 bg-gradient-to-r from-godteal/5 to-accent-teal/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-divine-green"></span>
              <span className="label-text text-divine-green font-bold uppercase tracking-[0.1875rem]">The Agent Model</span>
              <span className="w-8 h-[2px] bg-divine-green"></span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-expanded mb-6 leading-tight text-godteal">
              An Agent That<br/>Provides Tools & Skills
            </h2>
            <p className="max-w-3xl mx-auto text-xl font-mondwest leading-relaxed text-godteal/90">
              This is not a generic knowledge base or chatbot. <span className="font-bold text-accent-teal">Aether is an intelligent, autonomous agent</span> built specifically to curate and deliver <span className="font-bold text-divine-green">ready-to-execute security tools and skills</span> tailored to hackers, penetration testers, and security professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Card 1: Understands Your Objective */}
            <div className="p-8 border border-accent-teal/30 bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 group">
              <div className="mb-6 text-4xl font-expanded text-divine-green opacity-60 group-hover:opacity-100 transition-opacity">⚔️</div>
              <h3 className="text-lg font-bold font-expanded uppercase tracking-wide text-godteal mb-4">
                Understands Your Mission
              </h3>
              <p className="font-mondwest text-godteal/80 leading-relaxed">
                Tell the agent what you need to accomplish—reconnaissance, vulnerability scanning, exploitation, lateral movement, or analysis—and it recognizes the objective and selects the perfect toolset.
              </p>
            </div>

            {/* Card 2: Delivers Precise Tools */}
            <div className="p-8 border border-accent-teal/30 bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 group">
              <div className="mb-6 text-4xl font-expanded text-divine-green opacity-60 group-hover:opacity-100 transition-opacity">🔧</div>
              <h3 className="text-lg font-bold font-expanded uppercase tracking-wide text-godteal mb-4">
                Delivers Precise Tools
              </h3>
              <p className="font-mondwest text-godteal/80 leading-relaxed">
                No bloat. No guessing. The agent provisions the exact tools you need—Nmap for reconnaissance, SQLMap for SQL injection testing, Ghidra for reverse engineering. Every tool is documented and immediately executable.
              </p>
            </div>

            {/* Card 3: Executes Autonomously */}
            <div className="p-8 border border-accent-teal/30 bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 group">
              <div className="mb-6 text-4xl font-expanded text-divine-green opacity-60 group-hover:opacity-100 transition-opacity">⚡</div>
              <h3 className="text-lg font-bold font-expanded uppercase tracking-wide text-godteal mb-4">
                Executes Autonomously
              </h3>
              <p className="font-mondwest text-godteal/80 leading-relaxed">
                Deploy the agent and let it handle the execution. Run scanning campaigns, execute exploit frameworks, or analyze malware samples automatically. Scale your operations without manual intervention.
              </p>
            </div>
          </div>

          <div className="mt-16 p-10 border-2 border-divine-green/40 bg-divine-green/5 text-center">
            <h3 className="text-2xl font-bold font-expanded text-godteal mb-4">
              The Grimoire: A Living Arsenal of Skills
            </h3>
            <p className="max-w-2xl mx-auto text-lg font-mondwest text-godteal/90 leading-relaxed mb-6">
              Browse categories of pre-vetted, enterprise-grade security tools organized by use case. Information Gathering, Vulnerability Scanning, Exploitation, Post-Exploitation, Reverse Engineering, Cryptography, Network Analysis, and Malware Analysis. Each tool includes deployment scripts, technical documentation, and sandbox demos.
            </p>
            <Link href="/catalog" className="inline-flex items-center gap-2 font-expanded font-bold uppercase text-sm text-divine-green hover:text-accent-teal transition-colors px-6 py-3 border border-divine-green/50 hover:border-accent-teal/50 bg-divine-green/10 hover:bg-accent-teal/10">
              Explore the Grimoire
              <ChevronRight size={18} />
            </Link>
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
