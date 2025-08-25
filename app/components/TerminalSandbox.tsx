'use client';

import { useEffect, useRef, useState } from 'react';

interface TerminalSandboxProps {
  command: string;
  output: string[];
}

export default function TerminalSandbox({ command, output }: TerminalSandboxProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const startDemo = () => {
    setHasStarted(true);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!hasStarted) return;

    const renderOutput = async () => {
      const renderedLines: string[] = [];

      for (const line of output) {
        const match = line.match(/\[DELAY-(\d+)\]\s*(.*)/);

        if (match) {
          const delayMs = parseInt(match[1], 10);
          const text = match[2];

          // Wait for the delay
          await new Promise(resolve => setTimeout(resolve, delayMs));
          renderedLines.push(text);
        } else {
          renderedLines.push(line);
        }

        setLines([...renderedLines]);
      }

      setIsRunning(false);
      setIsComplete(true);
    };

    renderOutput();
  }, [hasStarted, output]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="space-y-3">
      {/* Terminal Window Header */}
      <div className="terminal border-b-0 rounded-t-sm bg-black/80">
        <div className="flex items-center justify-between pb-2 border-b border-accent-teal/30">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-divine-green opacity-60"></span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-divine-green/40"></span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-divine-green/20"></span>
            </div>
            <span className="text-xs font-courier text-divine-green/70">Aether Conduit</span>
          </div>
          {!hasStarted && (
            <button 
              onClick={startDemo}
              className="text-[0.625rem] font-sans tracking-widest uppercase bg-divine-green/10 text-divine-green px-2 py-1 rounded-sm border border-divine-green/30 hover:bg-divine-green/20 transition-colors"
            >
              Invoke Ritual
            </button>
          )}
        </div>

        {/* Command Line */}
        <div className="text-xs font-courier text-divine-green mt-3 break-all">
          $ {command}
        </div>
      </div>

      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="terminal rounded-b-sm h-64 overflow-y-auto space-y-0 relative bg-black/80"
      >
        {!hasStarted ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
             <p className="font-courier text-xs text-divine-green/70 mb-4 text-center px-4">
               The conduit is attuned. Awaiting your directive to manifest the skill.
             </p>
             <button 
               onClick={startDemo}
               className="btn-divine shadow-lg"
             >
               Commence Invocation
             </button>
          </div>
        ) : (
          <>
            {lines.map((line, idx) => (
              <div key={idx} className="terminal-line text-xs font-courier">
                {line}
              </div>
            ))}

            {/* Blinking cursor */}
            {isRunning && (
              <div className="terminal-line inline">
                <span className="terminal-cursor"></span>
              </div>
            )}
          </>
        )}
      </div>

      {/* Status */}
      <div className="flex justify-between items-center px-2">
        <div className="text-[0.6875rem] font-sans tracking-widest uppercase text-godteal opacity-60 font-bold">
          {!hasStarted ? 'Conduit Dormant' : isRunning ? 'Channeling Skill...' : 'Invocation Complete'}
        </div>
      </div>
    </div>
  );
}
