import Link from 'next/link';
import Image from 'next/image';

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
            Whether you need network reconnaissance, vulnerability scanning, exploitation, post-exploitation, or malware analysis—the agent understands your use case and delivers the exact tools you need. No bloat. No guessing. Just substance: ready-to-execute scripts, automated workflows, and specialized security capabilities organized by purpose and capability level.
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
                  <div className="mt-1 text-divine-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 14.5 12 3v9h8L12 21v-9H4z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-expanded font-bold mb-2 uppercase text-sm text-godteal">Ready-to-Execute Tools</h4>
                    <p className="text-sm text-godteal/70">Every tool comes with deployment scripts, pre-configured payloads, and execution examples.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/30 border border-accent-teal/20 shadow-sm">
                  <div className="mt-1 text-divine-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-expanded font-bold mb-2 uppercase text-sm text-godteal">Purpose-Driven Skills</h4>
                    <p className="text-sm text-godteal/70">Tools organized by use case: reconnaissance, scanning, exploitation, post-exploitation, analysis.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/30 border border-accent-teal/20 shadow-sm">
                  <div className="mt-1 text-divine-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 9h6v6H9z"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-expanded font-bold mb-2 uppercase text-sm text-godteal">Autonomous Execution</h4>
                    <p className="text-sm text-godteal/70">Dispatch the agent to run tools autonomously or delegate to specialized sub-agents for parallel workflows.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/30 border border-accent-teal/20 shadow-sm">
                  <div className="mt-1 text-divine-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
                    </svg>
                  </div>
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

      {/* AGENT PROVIDES TOOLS & SKILLS - PROMINENT HERO SECTION */}
      <section className="w-full py-32 border-b-2 border-divine-green/40 bg-gradient-to-b from-divine-green/10 to-accent-teal/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-divine-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="label-text text-divine-green font-bold uppercase tracking-[0.1875rem] mb-4 block">
              ⌈ Agent-Driven Architecture ⌉
            </span>
            <h2 className="text-6xl md:text-7xl font-bold font-expanded mb-8 leading-tight text-godteal">
              Agent Provides<br/><span className="text-divine-green">183 Tools & Skills</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg font-mondwest text-godteal/85 leading-relaxed">
              Aether is not a generic AI. It's an autonomous agent engineered to understand security objectives, curate precision tools, and execute complex workflows. Every tool is vetted, documented, and immediately deployable.
            </p>
          </div>

          {/* Three Major Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {/* Card 1: 183 Skills Across 8 Categories */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-divine-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 border-2 border-divine-green/60 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6 inline-block">
                  <div className="p-4 bg-divine-green/20 rounded-lg">
                    <span className="text-3xl">📚</span>
                  </div>
                </div>
                {/* Stat */}
                <div className="mb-4">
                  <div className="text-5xl font-bold font-expanded text-divine-green">183</div>
                  <p className="text-sm font-sans text-divine-green/70 uppercase tracking-wider mt-1">Enterprise-Grade Skills</p>
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold font-expanded text-godteal mb-4 uppercase tracking-wide">
                  Curated Arsenal
                </h3>
                {/* Description */}
                <p className="font-mondwest text-godteal/80 leading-relaxed flex-grow">
                  Information Gathering, Vulnerability Scanning, Exploitation, Post-Exploitation, Reverse Engineering, Cryptography, Network Analysis, Malware Analysis—all organized by discipline and difficulty level.
                </p>
                {/* Technical specs */}
                <div className="mt-6 pt-6 border-t border-accent-teal/30 flex gap-4 text-xs font-courier text-godteal/60">
                  <span>8 Categories</span>
                  <span>•</span>
                  <span>Documented</span>
                  <span>•</span>
                  <span>Deployable</span>
                </div>
              </div>
            </div>

            {/* Card 2: Intelligent Provisioning */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 border-2 border-accent-teal/60 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6 inline-block">
                  <div className="p-4 bg-accent-teal/20 rounded-lg">
                    <span className="text-3xl">⚙️</span>
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold font-expanded text-godteal mb-4 uppercase tracking-wide">
                  Smart Provisioning
                </h3>
                {/* Description */}
                <p className="font-mondwest text-godteal/80 leading-relaxed flex-grow">
                  Define your objective—reconnaissance, exploitation, analysis—and the agent automatically selects the perfect toolset. No manual configuration. No guesswork. Just precision delivery of what you actually need.
                </p>
                {/* Technical specs */}
                <div className="mt-6 pt-6 border-t border-accent-teal/30">
                  <p className="font-courier text-sm text-accent-teal/80 mb-3">$ agent exec --scan network_recon</p>
                  <div className="flex gap-3 text-xs font-courier text-godteal/60">
                    <span>→ Nmap</span>
                    <span>→ Shodan</span>
                    <span>→ DNS enum</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Autonomous Execution */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-divine-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 border-2 border-divine-green/60 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6 inline-block">
                  <div className="p-4 bg-divine-green/20 rounded-lg">
                    <span className="text-3xl">⚡</span>
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold font-expanded text-godteal mb-4 uppercase tracking-wide">
                  Autonomous Execution
                </h3>
                {/* Description */}
                <p className="font-mondwest text-godteal/80 leading-relaxed flex-grow">
                  Deploy once, execute infinitely. The agent runs scanning campaigns, exploit frameworks, and malware analysis pipelines 24/7. Process results in isolation. Scale without manual overhead or operational fatigue.
                </p>
                {/* Technical specs */}
                <div className="mt-6 pt-6 border-t border-divine-green/30 flex gap-4 text-xs font-courier text-godteal/60">
                  <span>Parallel Execution</span>
                  <span>•</span>
                  <span>Zero Context Cost</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <Link href="/catalog" className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-divine-green to-accent-teal text-white font-bold font-expanded uppercase text-sm tracking-wider hover:shadow-2xl transition-all duration-300 border border-divine-green/80 hover:border-divine-green">
              Browse 183 Skills in the Grimoire
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </Link>
      </div>

    </div>
  );
}
