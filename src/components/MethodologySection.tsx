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

// Get methodology color
const getMethodologyColor = (id: string): string => {
  if (id.includes('bug-hunting') || id.includes('workflow')) return 'from-red-500 to-orange-500';
  if (id.includes('sqli') || id.includes('sql')) return 'from-blue-500 to-cyan-500';
  if (id.includes('xss')) return 'from-purple-500 to-pink-500';
  if (id.includes('lfi') || id.includes('traversal')) return 'from-green-500 to-emerald-500';
  if (id.includes('nuclei')) return 'from-yellow-500 to-amber-500';
  return 'from-gray-500 to-gray-600';
};

const MethodologySection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="methodology" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/80 to-gray-950" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400">Step-by-Step Guides</span>
          </div>
          <h2 className="section-title">
            Advanced <span className="gradient-text-purple">Methodology</span>
          </h2>
          <p className="section-subtitle">
            Detailed workflows and techniques for sophisticated security testing and bug hunting.
          </p>
        </div>

        {/* Methodology Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {advancedMethodologies.map((methodology, index) => (
            <div
              key={methodology.id}
              className="command-card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Methodology Header */}
              <button
                onClick={() => setOpenId(openId === methodology.id ? null : methodology.id)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-800/30 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getMethodologyColor(methodology.id)} flex items-center justify-center text-2xl shadow-lg`}>
                    {getMethodologyIcon(methodology.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                      {methodology.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {methodology.commands.length} steps
                    </p>
                  </div>
                </div>
                <div className={`text-gray-400 transition-transform duration-300 ${openId === methodology.id ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {/* Methodology Steps */}
              <div className={`transition-all duration-500 ease-in-out ${openId === methodology.id ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                <div className="p-5 pt-0 border-t border-gray-800/50">
                  <div className="space-y-4">
                    {methodology.commands.map((cmd, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="relative pl-8 animate-fade-in-up"
                        style={{ animationDelay: `${stepIndex * 50}ms` }}
                      >
                        {/* Step connector line */}
                        {stepIndex < methodology.commands.length - 1 && (
                          <div className="absolute left-3 top-6 w-px h-full bg-gradient-to-b from-gray-700 to-transparent" />
                        )}

                        {/* Step number */}
                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                        </div>

                        {/* Step content */}
                        <div className="glass-dark rounded-xl p-4">
                          <h4 className="text-white font-medium mb-2">{cmd.name}</h4>
                          {cmd.description && (
                            <p className="text-gray-500 text-sm mb-3">{cmd.description}</p>
                          )}
                          <div className="code-block p-3 overflow-x-auto">
                            {cmd.command.map((c, i) => (
                              <pre key={i} className="text-xs text-gray-300 whitespace-pre-wrap break-all">
                                <code>
                                  <span className="text-red-400/60 select-none mr-2">$</span>
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