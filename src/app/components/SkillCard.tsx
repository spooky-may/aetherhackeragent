import Link from "next/link";
import Image from "next/image";

export interface SkillOverview {
  short_desc: string;
  long_desc: string;
  features: string[];
}

export interface SkillSpecs {
  language: string;
  license: string;
  difficulty: string;
}

export interface SandboxSim {
  trigger_command: string;
  mock_output: string[];
}

export interface DownloadScript {
  filename: string;
  content: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  overview: SkillOverview;
  technical_specs: SkillSpecs;
  sandbox_simulation: SandboxSim;
  download_script: DownloadScript;
  tags: string[];
  author: string;
  created_at: string;
  updated_at: string;
}

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <Link href={`/skill/${skill.id}`} className="group relative block h-full overflow-hidden">
      <div className="flex flex-col gap-4 p-6 h-full bg-godteal hover-glow border border-transparent group-hover:border-accent-teal transition-all duration-250 relative z-10">
        
        {/* Logo Watermark inside Card */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none mix-blend-screen overflow-hidden">
          <Image src="/logo.jpeg" alt="Card Logo Watermark" fill className="object-cover rounded-bl-full" />
        </div>

        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-parchment opacity-30 group-hover:opacity-100 group-hover:border-accent-teal transition-all"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-parchment opacity-30 group-hover:opacity-100 group-hover:border-accent-teal transition-all"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-parchment opacity-30 group-hover:opacity-100 group-hover:border-accent-teal transition-all"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-parchment opacity-30 group-hover:opacity-100 group-hover:border-accent-teal transition-all"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold font-expanded text-parchment flex items-center gap-2">
              <span className="text-accent-teal opacity-50 group-hover:opacity-100 transition-opacity">⌈</span>
              {skill.name}
              <span className="text-accent-teal opacity-50 group-hover:opacity-100 transition-opacity">⌉</span>
            </h3>
          </div>
          
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="text-[0.7rem] uppercase tracking-widest font-mondwest bg-parchment text-godteal px-2 py-0.5">
              {skill.category}
            </span>
            <span className="text-[0.7rem] uppercase tracking-widest font-mondwest border border-parchment text-parchment px-2 py-0.5">
              {skill.technical_specs.difficulty}
            </span>
          </div>
        </div>

        <p className="text-parchment/60 text-sm flex-grow relative z-10">
          {skill.overview.short_desc}
        </p>

        <div className="mt-4 pt-4 border-t border-goddess flex items-center justify-between text-accent-teal group-hover:text-divine-green transition-colors font-bold label-text text-sm relative z-10">
          <span>View Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </div>
      </div>
      <span className="absolute inset-1 bg-accent-teal pointer-events-none transition-opacity duration-250 group-hover:opacity-[0.05] opacity-0"></span>
    </Link>
  );
}
