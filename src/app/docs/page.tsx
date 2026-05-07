import React from 'react';

export default function DocsPage() {
  return (
    <div className="animate-mystic-reveal p-8 lg:p-16 max-w-5xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-accent-teal/60"></div>
          <span className="font-sans text-[0.6875rem] tracking-[0.25rem] uppercase text-accent-teal font-bold">Divine Manifestation</span>
        </div>
        <h1 className="font-expanded text-5xl lg:text-6xl text-godteal leading-tight">
          Technical <br /> <span className="text-shimmer">Codex</span>
        </h1>
        <p className="font-sans text-lg text-godteal/80 leading-relaxed max-w-2xl">
          Aether is a decoupled, agentic infrastructure designed for the autonomous execution of security payloads. 
          This codex outlines the underlying protocols, architectural invariants, and manifestation rituals of the Aether runtime.
        </p>
      </section>

      {/* Navigation Grid (Quick Links) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-accent-teal/20 py-12">
        {[
          { title: "Core Architecture", desc: "The tripartite system design.", anchor: "#architecture" },
          { title: "Intelligence Engine", desc: "Heuristic skill selection logic.", anchor: "#intelligence" },
          { title: "Hardened Namespaces", desc: "Isolation & ritual containment.", anchor: "#security" },
        ].map((item, i) => (
          <a key={i} href={item.anchor} className="group space-y-2">
            <h3 className="font-expanded text-sm text-godteal group-hover:text-accent-teal transition-colors uppercase tracking-widest">{item.title}</h3>
            <p className="font-sans text-xs text-godteal/60">{item.desc}</p>
          </a>
        ))}
      </div>

      {/* Architecture Section */}
      <section id="architecture" className="space-y-12">
        <div className="space-y-4">
          <h2 className="font-expanded text-3xl text-godteal uppercase tracking-wider">01. Core Architecture</h2>
          <div className="h-1 w-24 bg-accent-teal/40"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-sans text-godteal/80 leading-relaxed">
            <p>
              The Aether runtime operates on a <strong>Tripartite Architecture</strong>, ensuring absolute separation between tactical intent, logical orchestration, and physical execution.
            </p>
            <ul className="space-y-4 list-none">
              <li className="flex gap-4">
                <span className="text-accent-teal font-bold">I.</span>
                <span><strong>The Sentinel Layer:</strong> Handles ingress filtering, authentication, and policy enforcement via the Gateway Sentinel.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent-teal font-bold">II.</span>
                <span><strong>The Weaver Layer:</strong> Orchestrates the lifecycle of security payloads, resolving dependencies through the Registry Vortex.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent-teal font-bold">III.</span>
                <span><strong>The Manifestation Layer:</strong> Isolated execution chambers where binaries interact with targets in ephemeral namespaces.</span>
              </li>
            </ul>
          </div>
          
          <div className="ornamental-border p-6 bg-white/10 backdrop-blur-sm">
            <h4 className="font-expanded text-[0.625rem] tracking-[0.15rem] uppercase mb-4 opacity-60">System Invariants</h4>
            <div className="terminal text-[0.75rem]">
              <div className="terminal-line text-accent-teal opacity-50">// Aether System Manifest</div>
              <div className="terminal-line">DOMAIN: aether.divine.internal</div>
              <div className="terminal-line">MODEL: Event-Driven / Asynchronous</div>
              <div className="terminal-line">ISOLATION: Level 4 Kernel CGroup</div>
              <div className="terminal-line">TELEMETRY: Real-time gRPC Stream</div>
              <div className="terminal-line">STATE: Stateless / Immutable Chambers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Engine Section */}
      <section id="intelligence" className="space-y-12">
        <div className="space-y-4">
          <h2 className="font-expanded text-3xl text-godteal uppercase tracking-wider">02. Intelligence Synthesis</h2>
          <div className="h-1 w-24 bg-accent-teal/40"></div>
        </div>

        <div className="space-y-8 font-sans text-godteal/80 leading-relaxed">
          <p>
            The agent does not merely execute commands; it synthesizes mission-driven payloads using a <strong>Logic Synthesizer</strong>. 
            When a user provides a tactical intent, the Pattern Matcher analyzes the objective against the Grimoire using a weighted heuristic algorithm.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-godteal/[0.03] border border-accent-teal/20 space-y-4 relative overflow-hidden group hover:border-accent-teal/40 transition-colors">
              <div className="absolute top-0 right-0 p-2 font-expanded text-[0.625rem] opacity-20">HEURISTIC-A</div>
              <h3 className="font-expanded text-lg text-godteal uppercase tracking-tighter">Skill Weighting</h3>
              <p className="text-sm">
                Each skill in the registry carries a "Vortex Coefficient"—a dynamic score derived from execution latency, stealth profiles (OPSEC), and success rates across various network topologies.
              </p>
            </div>
            <div className="p-8 bg-godteal/[0.03] border border-accent-teal/20 space-y-4 relative overflow-hidden group hover:border-accent-teal/40 transition-colors">
              <div className="absolute top-0 right-0 p-2 font-expanded text-[0.625rem] opacity-20">SIG-B</div>
              <h3 className="font-expanded text-lg text-godteal uppercase tracking-tighter">Signal Relay</h3>
              <p className="text-sm">
                Structured telemetry (stdout/stderr) from execution chambers is parsed by the <strong>Skill Parser</strong> and fed back into the Intelligence Engine to refine future tool selections in real-time.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <h4 className="font-expanded text-sm uppercase tracking-widest text-godteal">Payload Manifest Protocol</h4>
            <p className="text-sm italic opacity-70">
              The internal communication between the Weaver and Manifestation layers utilizes a strictly-typed JSON manifest:
            </p>
            <div className="terminal text-[0.7rem] leading-tight">
              {`{
  "invocation_id": "uuid-v4",
  "payload_ref": "bin://nmap-v7.92",
  "isolation_profile": "HARDENED_CHAMBER",
  "network_blessing": { "egress": "RESTRICTED", "target": "10.0.0.0/8" },
  "telemetry_hook": "grpc://scribe.internal:9090"
}`}
            </div>
          </div>
        </div>
      </section>

      {/* Security Protocols Section */}
      <section id="security" className="space-y-12">
        <div className="space-y-4">
          <h2 className="font-expanded text-3xl text-godteal uppercase tracking-wider">03. Hardened Rituals</h2>
          <div className="h-1 w-24 bg-accent-teal/40"></div>
        </div>

        <div className="space-y-6 font-sans text-godteal/80 leading-relaxed">
          <p>
            Security is not an afterthought; it is the <strong>Sacred Constant</strong>. All manifestations occur within the Namespace Isolator, 
            providing a zero-trust environment for even the most volatile exploitation scripts.
          </p>
          
          <div className="space-y-4">
            {[
              { label: "Temporal Decay", desc: "Sandbox environments are automatically purged after mission completion or timeout." },
              { label: "Binary Blessing", desc: "All tools are signed and verified against the Binary Oracle before invocation." },
              { label: "Spirit Listening", desc: "Egress traffic is monitored for unauthorized beaconing or data exfiltration." },
            ].map((rule, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border-l-2 border-accent-teal/40 bg-accent-teal/5">
                <div className="font-expanded text-xs text-accent-teal pt-1">{i + 1}.</div>
                <div>
                  <h4 className="font-expanded text-[0.6875rem] uppercase tracking-widest text-godteal mb-1">{rule.label}</h4>
                  <p className="text-sm opacity-70">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference (Compact) */}
      <section className="space-y-8 border-t border-accent-teal/20 pt-24">
        <div className="text-center space-y-4">
          <h2 className="font-expanded text-2xl text-godteal uppercase">Gateway Endpoints</h2>
          <p className="font-sans text-sm opacity-60">Programmatic interfaces for tactical integration.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full font-sans text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-accent-teal/40">
                <th className="py-4 font-expanded text-[0.625rem] uppercase opacity-60">Method</th>
                <th className="py-4 font-expanded text-[0.625rem] uppercase opacity-60">Endpoint</th>
                <th className="py-4 font-expanded text-[0.625rem] uppercase opacity-60">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-accent-teal/10 text-godteal/80">
              <tr>
                <td className="py-4 font-bold text-accent-teal">POST</td>
                <td className="py-4 font-mono">/v1/ritual/invoke</td>
                <td className="py-4 italic">Initialize a skill manifestation.</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-accent-teal">GET</td>
                <td className="py-4 font-mono">/v1/stream/telemetry</td>
                <td className="py-4 italic">Open a real-time signal relay.</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-accent-teal">DELETE</td>
                <td className="py-4 font-mono">/v1/chamber/:id</td>
                <td className="py-4 italic">Immediate purge of execution namespace.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer / Call to Action */}
      <footer className="text-center pt-12 pb-24 border-t border-accent-teal/20">
        <p className="font-sans text-xs uppercase tracking-[0.2rem] opacity-40 mb-8">
          The codex is ever-evolving. Stay vigilant.
        </p>
        <div className="flex justify-center gap-8">
          <a href="/" className="font-expanded text-[0.625rem] tracking-widest uppercase hover:text-accent-teal transition-colors">Return to Temple</a>
          <a href="/catalog" className="font-expanded text-[0.625rem] tracking-widest uppercase hover:text-accent-teal transition-colors">The Grimoire</a>
        </div>
      </footer>
    </div>
  );
}
