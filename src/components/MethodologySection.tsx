import { useState } from 'react';
import { advancedMethodologies } from '../data';
import { ChevronDown, BookOpen, CheckCircle } from 'lucide-react';

// Get methodology icon
const getMethodologyIcon = (id: string): string => {
  if (id.includes('bug-hunting') || id.includes('workflow')) return '🎯';
  if (id.includes('sqli') || id.includes('sql')) return '🗄️';
  if (id.includes('xss')) return '💉';
  if (id.includes('lfi') || id.includes('traversal')) return '📁';
  if (id.includes('nuclei')) return '⚛️';
  return '📚';
};

const MethodologySection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="methodology" className="py-24 relative overflow-hidden">
      {/* Subtle ambient */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: 'rgba(139, 92, 246, 0.08)', border: '1px solid rgba(139, 92, 246, 0.15)' }}>
            <BookOpen className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs text-violet-400 font-medium">Step-by-Step Guides</span>
          </div>
          <h2 className="section-title">
            Advanced <span className="gradient-text-purple">Methodology</span>
          </h2>
          <p className="section-subtitle">
            Detailed workflows and techniques for sophisticated security testing and bug hunting.
          </p>
        </div>

        {/* Methodology Cards */}
        <div className="max-w-3xl mx-auto space-y-3">
          {advancedMethodologies.map((methodology, index) => (
            <div
              key={methodology.id}
              className="command-card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Methodology Header */}
              <button
                onClick={() => setOpenId(openId === methodology.id ? null : methodology.id)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-800/20 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
                    {getMethodologyIcon(methodology.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {methodology.title}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      {methodology.commands.length} steps
                    </p>
                  </div>
                </div>
                <div className={`text-zinc-600 transition-transform duration-300 ${openId === methodology.id ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Methodology Steps */}
              <div className={`transition-all duration-500 ease-in-out ${openId === methodology.id ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                <div className="p-5 pt-0" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="space-y-3">
                    {methodology.commands.map((cmd, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="relative pl-8 animate-fade-in-up"
                        style={{ animationDelay: `${stepIndex * 50}ms` }}
                      >
                        {/* Step connector line */}
                        {stepIndex < methodology.commands.length - 1 && (
                          <div className="absolute left-3 top-6 w-px h-full" style={{ background: 'linear-gradient(to bottom, var(--border-hover), transparent)' }} />
                        )}

                        {/* Step number */}
                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
                          <CheckCircle className="w-3 h-3 text-emerald-500/70" />
                        </div>

                        {/* Step content */}
                        <div className="rounded-xl p-4" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}>
                          <h4 className="text-white font-medium text-sm mb-2">{cmd.name}</h4>
                          {cmd.description && (
                            <p className="text-zinc-600 text-xs mb-3">{cmd.description}</p>
                          )}
                          <div className="code-block p-3 overflow-x-auto">
                            {cmd.command.map((c, i) => (
                              <pre key={i} className="text-xs text-zinc-400 whitespace-pre-wrap break-all font-mono">
                                <code>
                                  <span className="text-zinc-700 select-none mr-2">$</span>
                                  {c}
                                </code>
                              </pre>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;