import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full relative z-10 flex flex-col pb-16">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center gap-8 py-32 text-center border-b border-accent-teal/40 bg-gradient-to-b from-white/0 to-accent-teal/10">
        <div>
          <small className="font-sans text-[0.6875rem] tracking-[0.1875rem] mb-6 opacity-60 uppercase block text-godteal font-bold">
            Open Source • MIT License
          </small>
          <span className="font-expanded block text-5xl md:text-7xl font-bold text-shimmer leading-[1.1]">
            An Agent That<br/>Grows With You.
          </span>
        </div>
        <div className="max-w-[640px] mt-2 px-4">
          <p className="text-xl font-mondwest leading-relaxed opacity-90 text-godteal">
            Not just a chatbot or a simple wrapper. Aether Hacker is an autonomous, mystical entity that resides on your server, masters complex security rituals, and manifests capabilities directly into your workflows.
          </p>
        </div>
        <div className="flex gap-6 mt-4">
          <Link href="/catalog" className="btn-divine shadow-lg">
            Enter the Grimoire
          </Link>
          <a href="#" className="px-6 py-3 border border-accent-teal/40 text-godteal font-sans uppercase text-[0.6875rem] tracking-[0.1875rem] hover:bg-accent-teal/10 transition-smooth cursor-pointer bg-white/30">
            Installation Ritual
          </a>
        </div>
      </div>

      {/* Promotional Features Grid */}
      <div className="w-full">
        <div className="p-6 border-b border-accent-teal/40 bg-white/20">
          <h2 className="font-expanded text-xl font-bold uppercase tracking-widest text-godteal">
            Divine Capabilities
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-accent-teal/40">
          
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Omnipresent</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Integrates natively with Telegram, Discord, and secure CLI terminals. Issue commands from anywhere, and the execution echoes across realms.
            </p>
          </div>

          <div className="p-8 lg:p-12 border-b md:border-b-0 lg:border-r border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Arcane Memory</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              It learns the topologies of your projects. Persistent memory ensures it never forgets a vulnerability discovered or a spell successfully cast.
            </p>
          </div>

          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r lg:border-r-0 border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Isolated Chambers</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Every skill invocation runs within hardened namespaces. True sandboxing prevents corrupted magic from breaching the host server.
            </p>
          </div>

          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r lg:border-t border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Autonomous Delegation</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Dispatches complex tasks to isolated sub-agents. Parallel execution pipelines run with zero context-cost interference.
            </p>
          </div>

          <div className="p-8 lg:p-12 border-b md:border-b-0 lg:border-r lg:border-t border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Eternal Cron</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Translate natural language into scheduled automations. Reports, audits, and network blessings run perpetually without mortal oversight.
            </p>
          </div>

          <div className="p-8 lg:p-12 lg:border-t border-accent-teal/40 bg-white/20 hover:bg-white/40 transition-colors group">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4 group-hover:text-accent-teal transition-colors">Expanding Grimoire</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Constantly growing repository of enterprise-grade security tools, fully documented and ready to be summoned into your local environment.
            </p>
          </div>

        </div>
      </div>

      {/* Ritual Process / How it Works */}
      <div className="w-full border-b border-accent-teal/40 bg-white/10">
        <div className="p-6 border-b border-accent-teal/40 bg-white/20">
          <h2 className="font-expanded text-xl font-bold uppercase tracking-widest text-godteal">
            The Ritual of Invocation
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-accent-teal/40 flex flex-col items-center text-center group hover:bg-white/20 transition-colors">
            <span className="font-expanded text-4xl text-godteal mb-4 opacity-50 group-hover:text-accent-teal transition-colors">I</span>
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Install the Core</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Summon the agent into your realm using our secured installation scripture. It integrates seamlessly into your host server.
            </p>
          </div>
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-accent-teal/40 flex flex-col items-center text-center group hover:bg-white/20 transition-colors">
            <span className="font-expanded text-4xl text-godteal mb-4 opacity-50 group-hover:text-accent-teal transition-colors">II</span>
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Attune the Conduits</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Link your communication channels—Discord, Telegram, or CLI. The agent will listen and respond across all attuned platforms.
            </p>
          </div>
          <div className="p-8 lg:p-12 flex flex-col items-center text-center group hover:bg-white/20 transition-colors">
            <span className="font-expanded text-4xl text-godteal mb-4 opacity-50 group-hover:text-accent-teal transition-colors">III</span>
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Invoke Skills</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed">
              Browse the Grimoire, extract specific capabilities, and command the agent to execute them autonomously in hardened chambers.
            </p>
          </div>
        </div>
      </div>

      {/* Community / Echoes of the Void */}
      <div className="w-full border-b border-accent-teal/40">
        <div className="p-6 border-b border-accent-teal/40 bg-white/20">
          <h2 className="font-expanded text-xl font-bold uppercase tracking-widest text-godteal">
            Echoes of the Void
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-accent-teal/40 bg-white/30 flex flex-col justify-center hover:bg-white/40 transition-colors">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Join the Coven</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed mb-6">
              Aether Hacker is an open-source entity. Join our Discord sanctuary to share new scripts, report arcane anomalies, and shape the future of the agent.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-sans text-[0.6875rem] tracking-[0.1875rem] uppercase text-godteal font-bold opacity-80 hover:opacity-100 transition-opacity">
              Enter Sanctuary <span className="text-accent-teal">→</span>
            </a>
          </div>
          <div className="p-8 lg:p-12 bg-white/30 flex flex-col justify-center hover:bg-white/40 transition-colors">
            <h3 className="font-sans text-[0.875rem] tracking-[0.1875rem] uppercase font-bold text-godteal mb-4">Contribute to the Grimoire</h3>
            <p className="font-mondwest text-lg opacity-90 text-godteal leading-relaxed mb-6">
              The Grimoire expands through mortal contributions. Submit your own security skills via GitHub and let the agent master new domains.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-sans text-[0.6875rem] tracking-[0.1875rem] uppercase text-godteal font-bold opacity-80 hover:opacity-100 transition-opacity">
              View Repository <span className="text-accent-teal">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="p-16 text-center">
        <Link href="/catalog" className="inline-flex items-center gap-2 border-none bg-transparent font-sans text-[0.9375rem] tracking-[0.1875rem] uppercase text-godteal font-bold opacity-80 hover:opacity-100 transition-opacity">
          Explore The Skills Grimoire
          <span className="text-accent-teal">→</span>
        </Link>
      </div>

    </div>
  );
}
