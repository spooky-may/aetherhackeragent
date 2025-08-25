'use client';

import { useState } from 'react';
import Link from 'next/link';
import skillsData from '@/lib/skills.json';

interface Skill {
  id: string;
  name: string;
  category: string;
  overview: {
    short_desc: string;
  };
  technical_specs: {
    difficulty: string;
  };
}

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = Array.from(new Set(skillsData.map(s => s.category))).sort();

  const filteredSkills = skillsData.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          skill.overview.short_desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? skill.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage) || 1;
  const paginatedSkills = filteredSkills.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (cat: string | null) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="w-full relative z-10 flex flex-col lg:flex-row min-h-[80vh]">
      
      {/* Left Sidebar: Filters & Search */}
      <div className="w-full lg:w-1/4 xl:w-1/5 border-b lg:border-b-0 lg:border-r border-accent-teal/40 bg-white/20 p-8 flex flex-col gap-8">
        <div>
          <h1 className="font-expanded text-3xl font-bold text-godteal mb-6">Grimoire</h1>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search rituals..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full bg-white/40 border border-accent-teal/40 p-3 font-sans text-sm text-godteal placeholder:text-godteal/50 focus:outline-none focus:border-accent-teal transition-colors rounded-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-godteal/50 hover:text-godteal"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-sans text-[0.6875rem] tracking-[0.1875rem] uppercase font-bold text-godteal opacity-60 mb-4">
            Categories
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <button 
                onClick={() => handleCategoryChange(null)}
                className={`w-full text-left font-mondwest text-lg transition-colors ${selectedCategory === null ? 'text-accent-teal font-bold' : 'text-godteal opacity-80 hover:opacity-100'}`}
              >
                All Rituals
              </button>
            </li>
            {categories.map(cat => (
              <li key={cat}>
                <button 
                  onClick={() => handleCategoryChange(cat)}
                  className={`w-full text-left font-mondwest text-lg transition-colors ${selectedCategory === cat ? 'text-accent-teal font-bold' : 'text-godteal opacity-80 hover:opacity-100'}`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Main Content: Grid & Pagination */}
      <div className="w-full lg:w-3/4 xl:w-4/5 flex flex-col p-8 lg:p-12">
        
        {/* Results Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-accent-teal/20">
          <h2 className="font-sans text-[0.6875rem] tracking-[0.1875rem] uppercase font-bold text-godteal opacity-60">
            {selectedCategory || 'All Skills'}
          </h2>
          <span className="font-sans text-[0.6875rem] tracking-[0.1875rem] uppercase font-bold text-godteal opacity-60">
            {filteredSkills.length} Found
          </span>
        </div>

        {/* Grid */}
        {paginatedSkills.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 flex-1">
            {paginatedSkills.map((skill: Skill) => (
              <Link key={skill.id} href={`/skill/${skill.id}`} className="block group">
                <div className="skill-card h-full flex flex-col justify-between border border-accent-teal/30 bg-white/40 shadow-sm hover:shadow-lg rounded-sm p-6 lg:p-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-expanded text-2xl font-bold text-godteal group-hover:text-accent-teal transition-colors drop-shadow-sm">
                        {skill.name}
                      </h3>
                      <span className="font-sans text-[0.625rem] border border-accent-teal/40 bg-accent-teal/5 text-godteal px-2 py-1 rounded-sm uppercase tracking-widest opacity-90 font-bold">
                        {skill.technical_specs.difficulty}
                      </span>
                    </div>
                    
                    <p className="font-mondwest text-[1.0625rem] opacity-90 leading-relaxed text-godteal">
                      {skill.overview.short_desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-accent-teal/20 flex items-center justify-between relative overflow-hidden">
                    <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1875rem] text-godteal font-bold group-hover:text-sacred-purple transition-smooth">
                      Inspect Ritual
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sacred-purple font-bold">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center py-24 text-center opacity-60">
            <span className="text-4xl mb-4">🕯️</span>
            <p className="font-mondwest text-xl text-godteal">No rituals match your incantation.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 pt-8 border-t border-accent-teal/20 flex justify-center items-center gap-4">
            <button 
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 border border-accent-teal/40 font-sans text-xs uppercase tracking-widest text-godteal disabled:opacity-30 hover:bg-white/40 transition-colors"
            >
              Previous
            </button>
            <span className="font-sans text-xs font-bold text-godteal uppercase tracking-widest">
              Page {currentPage} of {totalPages}
            </span>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 border border-accent-teal/40 font-sans text-xs uppercase tracking-widest text-godteal disabled:opacity-30 hover:bg-white/40 transition-colors"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  );
}