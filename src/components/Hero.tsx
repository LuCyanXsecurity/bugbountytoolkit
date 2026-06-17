import { useState } from 'react';
import { Terminal, ShieldAlert } from 'lucide-react';

const Hero = () => {
  const [target, setTarget] = useState('');

  // Update all commands when target changes
  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTarget(value);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('targetChange', { detail: value }));
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99, 102, 241, 0.06) 0%, var(--bg-primary) 70%)',
      }}
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)' }} />

      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <ShieldAlert className="w-16 h-16 text-indigo-400/80 animate-float" />
          </div>
        </div>

        {/* Title with Gradient */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight" style={{ letterSpacing: '-0.04em' }}>
          <span className="text-white">Bug Bounty </span>
          <span className="gradient-text">Toolkit</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-500 mb-4 max-w-2xl mx-auto leading-relaxed">
          A comprehensive collection of security tools and commands for efficient bug hunting and penetration testing.
        </p>

        {/* Stats Preview */}
        <div className="flex flex-wrap justify-center gap-10 mb-14">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">100+</div>
            <div className="text-zinc-600 text-sm mt-1">Commands</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text-purple">15+</div>
            <div className="text-zinc-600 text-sm mt-1">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text-cyan">5</div>
            <div className="text-zinc-600 text-sm mt-1">Methodologies</div>
          </div>
        </div>

        {/* Target Input Card */}
        <div className="max-w-2xl mx-auto rounded-2xl p-8" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
          <div className="mb-6">
            <label htmlFor="target" className="block text-zinc-400 text-base mb-4 flex items-center justify-center">
              <span className="mr-2 text-xl">🎯</span> Enter your target domain or IP:
            </label>
            <input
              type="text"
              id="target"
              value={target}
              onChange={handleTargetChange}
              placeholder="example.com"
              className="input-search text-base"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#commands"
              className="btn-primary flex items-center text-sm"
            >
              <Terminal className="mr-2 w-4 h-4" />
              Explore Commands
            </a>
            <a
              href="#methodology"
              className="btn-secondary flex items-center text-sm"
            >
              📚 View Methodologies
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;