'use client';

import React, { useState } from 'react';

export default function ContractAddress() {
  const [copied, setCopied] = useState(false);
  const ca = '0x0000000000000000000000000000000000000000'; // Placeholder CA

  const handleCopy = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full py-12 border-b border-accent-teal/40 bg-godteal/5 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-teal/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[800px] w-full px-4 flex flex-col items-center relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-accent-teal/40"></span>
          <small className="font-sans text-[0.6875rem] tracking-[0.3em] uppercase font-bold text-accent-teal">
            Divine Protocol — Contract Address
          </small>
          <span className="w-8 h-px bg-accent-teal/40"></span>
        </div>
        
        <div className="relative group w-full max-w-2xl">
          {/* Animated glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-teal/20 via-divine-green/20 to-sacred-purple/20 rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative px-4 py-3 md:px-8 md:py-5 bg-[#ffe6cb]/90 border border-accent-teal/30 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(23,162,162,0.1)]">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[0.625rem] font-mondwest uppercase tracking-widest text-godteal/50 mb-1">Deployment Artifact</span>
              <code className="font-courier text-sm md:text-lg text-godteal break-all text-center md:text-left">
                {ca}
              </code>
            </div>
            
            <button 
              onClick={handleCopy}
              className={`btn-divine text-[0.6875rem] px-6 py-3 shrink-0 min-w-[140px] transition-all duration-300 ${copied ? 'bg-divine-green text-godteal' : ''}`}
            >
              {copied ? 'Protocol Synced' : 'Copy Protocol'}
            </button>
          </div>
        </div>
        
        <p className="mt-6 font-mondwest text-[0.625rem] md:text-xs uppercase tracking-[0.2em] opacity-50 text-godteal flex items-center gap-2">
          <span className="w-1 h-1 bg-accent-teal rounded-full animate-pulse"></span>
          Verify the artifact on-chain before deployment
          <span className="w-1 h-1 bg-accent-teal rounded-full animate-pulse"></span>
        </p>
      </div>
    </div>
  );
}
