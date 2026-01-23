import { useState } from 'react';
import { Terminal } from 'lucide-react';

const Hero = () => {
  const [target, setTarget] = useState('');

  // Update all commands when target changes
  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTarget(value);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('targetChange', { detail: value }));
  };

  // Generate particles for background - reduced for better performance
  const particles = Array.from({ length: 12 }, (_, i) => (
    <div key={i} className="particle" />
  ));

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4"
      style={{
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0a1a 25%, #0f1a1a 50%, #1a1a0f 75%, #0f0f1a 100%)',
      }}
    >
      {/* Animated Background Particles - GPU optimized */}
      <div className="particles-bg">
        {particles}
      </div>

      {/* Gradient Orbs - Optimized with slower animation and GPU acceleration */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/8 rounded-full blur-2xl"
        style={{
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          transform: 'translateZ(0)',
          willChange: 'opacity'
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-2xl"
        style={{
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          animationDelay: '1.5s',
          transform: 'translateZ(0)',
          willChange: 'opacity'
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"
        style={{
          animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          animationDelay: '2.5s',
          transform: 'translateZ(0)',
          willChange: 'opacity'
        }}
      />

      <div className="container mx-auto text-center relative z-10">
        {/* Title with Gradient */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-white">Bug Bounty </span>
          <span className="gradient-text">Toolkit</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto">
          A comprehensive collection of security tools and commands for efficient bug hunting and penetration testing.
        </p>

        {/* Stats Preview */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">100+</div>
            <div className="text-gray-500 text-sm">Commands</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text-purple">15+</div>
            <div className="text-gray-500 text-sm">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text-cyan">5</div>
            <div className="text-gray-500 text-sm">Methodologies</div>
          </div>
        </div>

        {/* Target Input Card */}
        <div className="max-w-2xl mx-auto glass rounded-2xl p-8 glow-red-hover">
          <div className="mb-6">
            <label htmlFor="target" className="block text-gray-300 text-lg mb-4 flex items-center justify-center">
              <span className="mr-2 text-2xl">🎯</span> Enter your target domain or IP:
            </label>
            <input
              type="text"
              id="target"
              value={target}
              onChange={handleTargetChange}
              placeholder="example.com"
              className="input-search text-lg"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#commands"
              className="btn-primary flex items-center text-lg"
            >
              <Terminal className="mr-2 w-5 h-5" />
              Explore Commands
            </a>
            <a
              href="#methodology"
              className="btn-secondary flex items-center text-lg"
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