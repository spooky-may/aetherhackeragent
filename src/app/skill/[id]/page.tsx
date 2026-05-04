import Link from 'next/link';
import TerminalSandbox from '../../components/TerminalSandbox';
import DownloadButton from '../../components/DownloadButton';
import skills from '../../../lib/skills.json';

interface SkillParams {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return skills.map((skill) => ({
    id: skill.id,
  }));
}

export default async function SkillPage({ params }: SkillParams) {
  const { id } = await params;
  const skill = skills.find((s) => s.id === id);

  if (!skill) {
    return (
      <div className="w-full text-center py-24 space-y-6">
        <h1 className="text-5xl font-expanded font-bold text-shimmer">Skill Not Found</h1>
        <p className="font-mondwest text-xl opacity-70 text-godteal">
          The mystical knowledge you seek is not recorded in our archives.
        </p>
        <div className="pt-8">
          <Link href="/catalog" className="btn-divine inline-block">
            Return to Grimoire
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full relative z-10 flex flex-col lg:flex-row min-h-screen">
      
      {/* Left Column: Scrollable Content */}
      <div className="w-full lg:w-[60%] xl:w-[65%] border-b lg:border-b-0 lg:border-r border-accent-teal/40 flex flex-col">
        
        {/* Navigation Bar */}
        <div className="w-full p-6 border-b border-accent-teal/40 bg-white/20">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 font-sans text-[0.6875rem] text-godteal opacity-60 hover:opacity-100 transition-smooth uppercase tracking-[0.1875rem] font-bold"
          >
            ← Grimoire
          </Link>
        </div>

        {/* Hero */}
        <div className="p-8 lg:p-16 xl:p-24 border-b border-accent-teal/40 bg-gradient-to-b from-white/0 to-white/20">
          <span className="font-sans text-[0.6875rem] text-accent-teal uppercase tracking-[0.1875rem] font-bold mb-6 block">
            {skill.category}
          </span>
          <h1 className="text-5xl lg:text-7xl font-expanded font-bold text-godteal mb-8 leading-tight drop-shadow-sm">
            {skill.name}
          </h1>
          <p className="text-2xl font-mondwest opacity-90 leading-relaxed text-godteal max-w-3xl">
            {skill.overview.short_desc}
          </p>
        </div>

        {/* Overview */}
        <div className="p-8 lg:p-16 border-b border-accent-teal/40 bg-white/20">
          <h2 className="text-sm font-sans tracking-[0.1875rem] uppercase opacity-60 mb-8 text-godteal font-bold">Overview</h2>
          <div className="space-y-6 font-mondwest text-[1.25rem] opacity-90 leading-relaxed text-godteal">
            {skill.overview.long_desc.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="p-8 lg:p-16 border-b border-accent-teal/40">
          <h2 className="text-sm font-sans tracking-[0.1875rem] uppercase opacity-60 mb-8 text-godteal font-bold">Capabilities</h2>
          <ul className="flex flex-col gap-4">
            {skill.overview.features.map((feature, idx) => (
              <li
                key={idx}
                className="font-mondwest text-xl opacity-90 text-godteal flex items-start gap-4 p-6 border border-accent-teal/40 bg-white/40 shadow-sm"
              >
                <span className="text-accent-teal text-lg mt-0.5">✦</span>
                <span className="leading-relaxed">{feature}</span>
              </li>            ))}
          </ul>
        </div>

        {/* Footer Metadata */}
        <div className="p-8 lg:p-16 bg-white/40 flex flex-wrap gap-8 justify-between items-center">
          <div className="flex flex-col gap-4">
             <h2 className="text-sm font-sans tracking-[0.1875rem] uppercase opacity-60 text-godteal font-bold">Arcane Sigils (Tags)</h2>
            <div className="flex gap-2 flex-wrap">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-courier text-[0.6875rem] text-godteal px-3 py-1.5 border border-accent-teal/40 bg-accent-teal/10 uppercase tracking-widest font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 font-courier text-xs opacity-60 uppercase tracking-widest text-godteal font-bold mt-8 md:mt-0">
            <p>Recorded: {new Date(skill.created_at).toLocaleDateString()}</p>
            <p>Scribe: {skill.author}</p>
          </div>
        </div>
      </div>

      {/* Right Column: Sticky Sidebar Panel */}
      <div className="w-full lg:w-[40%] xl:w-[35%] bg-accent-teal/5 relative">
        <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto flex flex-col border-l border-accent-teal/10">
          
          {/* Tech Specs */}
          <div className="p-8 lg:p-12 border-b border-accent-teal/40 grid grid-cols-2 gap-8 bg-white/30 backdrop-blur-sm">
            <div className="col-span-2">
              <p className="font-sans text-[0.6875rem] opacity-60 uppercase tracking-[0.1875rem] mb-2 text-godteal font-bold">Language Focus</p>
              <p className="font-courier text-sm text-godteal font-bold">{skill.technical_specs.language}</p>
            </div>
            <div>
              <p className="font-sans text-[0.6875rem] opacity-60 uppercase tracking-[0.1875rem] mb-2 text-godteal font-bold">License</p>
              <p className="font-courier text-sm text-godteal font-bold">{skill.technical_specs.license}</p>
            </div>
            <div>
              <p className="font-sans text-[0.6875rem] opacity-60 uppercase tracking-[0.1875rem] mb-2 text-godteal font-bold">Difficulty</p>
              <p className="font-sans text-[0.75rem] text-sacred-purple font-bold tracking-widest uppercase">{skill.technical_specs.difficulty}</p>
            </div>
          </div>

          {/* Execution Chamber (Terminal) */}
          <div className="p-8 lg:p-12 border-b border-accent-teal/40">
            <h2 className="text-sm font-sans tracking-[0.1875rem] uppercase opacity-60 mb-6 text-godteal font-bold">Execution Chamber</h2>
            <TerminalSandbox
              command={skill.sandbox_simulation.trigger_command}
              output={skill.sandbox_simulation.mock_output}
            />
          </div>

          {/* Manifestation Script */}
          <div className="p-8 lg:p-12 flex flex-col gap-6 bg-white/20 flex-1">
            <div>
              <h2 className="text-sm font-sans tracking-[0.1875rem] uppercase opacity-60 mb-3 text-godteal font-bold">Manifestation Script</h2>
              <p className="font-mondwest text-lg opacity-80 mb-6 text-godteal leading-relaxed">
                Intrigued by the invocation? Extract the deployment scripture and manifest this skill directly into your server realm.
              </p>
              <DownloadButton
                filename={skill.download_script.filename}
                content={skill.download_script.content}
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}