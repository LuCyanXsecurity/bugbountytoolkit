import { Github, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#commands', label: 'Commands' },
    { href: '#methodology', label: 'Methodology' },
    { href: '#about', label: 'About' },
    { href: '#contributors', label: 'Contributors' },
    { href: '#contact', label: 'Contact' },
  ];

  const resources = [
    { href: 'https://github.com/coffinxp', label: 'CoffinXP Tools', external: true },
    { href: 'https://github.com/tomnomnom', label: 'TomNomNom Tools', external: true },
    { href: 'https://github.com/projectdiscovery', label: 'ProjectDiscovery', external: true },
  ];

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--border-hover), transparent)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-muted)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                <span className="text-base">🛡️</span>
              </div>
              <span className="text-base font-semibold text-white">Bug Bounty Toolkit</span>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed mb-6">
              A comprehensive resource for security researchers and bug bounty hunters. Built for the cybersecurity community.
            </p>
            <div className="flex gap-2">
              <a
                href="https://twitter.com/LuCyanXsecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-600 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/LuCyanXsecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-600 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-600 hover:text-zinc-300 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-zinc-300 text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Stay Updated
            </h3>
            <p className="text-zinc-600 text-sm mb-4">
              Follow for the latest security tools and techniques.
            </p>
            <a
              href="https://github.com/LuCyanXsecurity/bugbountytoolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)' }}
            >
              <Github className="w-4 h-4" />
              Star on GitHub
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-xs">
              © {currentYear} Bug Bounty Toolkit. All rights reserved.
            </p>
            <p className="text-zinc-600 text-xs flex items-center gap-1">
              Made by
              <a href="https://github.com/LuCyanXsecurity" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                LuCyanXsecurity
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
