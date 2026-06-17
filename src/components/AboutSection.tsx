import { ShieldAlert, Lock, Search, Code, Bug, Target } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: <ShieldAlert className="w-5 h-5" />, label: 'Security Focus', color: 'text-indigo-400' },
    { icon: <Search className="w-5 h-5" />, label: 'Recon Expert', color: 'text-amber-400' },
    { icon: <Lock className="w-5 h-5" />, label: 'Pen Tester', color: 'text-emerald-400' },
    { icon: <Code className="w-5 h-5" />, label: 'Tool Builder', color: 'text-blue-400' },
    { icon: <Bug className="w-5 h-5" />, label: 'Bug Hunter', color: 'text-violet-400' },
    { icon: <Target className="w-5 h-5" />, label: 'Red Team', color: 'text-orange-400' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--border-hover), transparent)' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A passionate bug hunter and cybersecurity enthusiast dedicated to building tools that simplify recon and automation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <div className="md:flex">
              {/* Profile Image */}
              <div className="md:w-1/3 relative group">
                <img
                  src="https://avatars.githubusercontent.com/u/213606152?v=4"
                  alt="LuCyanXsecurity"
                  className="h-full w-full object-cover min-h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent" />
              </div>

              {/* Profile Info */}
              <div className="p-8 md:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white">LuCyanXsecurity</h3>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                    Available
                  </span>
                </div>

                <p className="text-zinc-500 mb-6 leading-relaxed text-sm">
                  Security researcher focused on bug bounty hunting, vulnerability assessment, and ethical hacking.
                  Passionate about discovering security flaws and supporting the cybersecurity community through
                  continuous learning and responsible disclosure.
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://twitter.com/LuCyanXsecurity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-zinc-400 hover:text-white transition-all duration-200"
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    @LuCyanXsecurity
                  </a>
                  <a
                    href="https://github.com/LuCyanXsecurity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-zinc-400 hover:text-white transition-all duration-200"
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    LuCyanXsecurity
                  </a>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg group transition-all duration-200"
                      style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}
                    >
                      <div className={`${skill.color} opacity-50 group-hover:opacity-100 transition-opacity duration-200`}>
                        {skill.icon}
                      </div>
                      <span className="text-zinc-400 text-xs font-medium">{skill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;