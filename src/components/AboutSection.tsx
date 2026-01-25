import { ShieldAlert, Lock, Search, Code, Bug, Target } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: <ShieldAlert className="w-6 h-6" />, label: 'Security Focus', color: 'text-red-500' },
    { icon: <Search className="w-6 h-6" />, label: 'Recon Expert', color: 'text-yellow-500' },
    { icon: <Lock className="w-6 h-6" />, label: 'Pen Tester', color: 'text-green-500' },
    { icon: <Code className="w-6 h-6" />, label: 'Tool Builder', color: 'text-blue-500' },
    { icon: <Bug className="w-6 h-6" />, label: 'Bug Hunter', color: 'text-purple-500' },
    { icon: <Target className="w-6 h-6" />, label: 'Red Team', color: 'text-orange-500' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      <div className="absolute -left-32 top-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute -right-32 top-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A passionate bug hunter and cybersecurity enthusiast dedicated to building tools that simplify recon and automation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-2xl overflow-hidden glow-red-hover">
            <div className="md:flex">
              {/* Profile Image */}
              <div className="md:w-1/3 relative group">
                <img
                  src="https://avatars.githubusercontent.com/u/213606152?v=4"
                  alt="LuCyanXsecurity"
                  className="h-full w-full object-cover min-h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Profile Info */}
              <div className="p-10 md:w-2/3">
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="text-3xl font-bold text-white">LuCyanXsecurity</h3>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    Available
                  </span>
                </div>

                <p className="text-gray-400 mb-8 leading-relaxed text-lg">
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
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    @LuCyanXsecurity
                  </a>
                  <a
                    href="https://github.com/LuCyanXsecurity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/50 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:text-white transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    LuCyanXsecurity
                  </a>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-200 group"
                    >
                      <div className={`${skill.color} group-hover:scale-110 transition-transform duration-200`}>
                        {skill.icon}
                      </div>
                      <span className="text-gray-300 text-base font-medium">{skill.label}</span>
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