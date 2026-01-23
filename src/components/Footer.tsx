import { Github, Twitter, Youtube, Heart, ExternalLink } from 'lucide-react';

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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950" />

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      {/* Decorative Orbs */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <span className="text-xl">🛡️</span>
              </div>
              <span className="text-xl font-bold text-white">Bug Bounty Toolkit</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A comprehensive resource for security researchers and bug bounty hunters. Built with ❤️ for the cybersecurity community.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/LuCyanXsecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/LuCyanXsecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-red-500 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
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
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Follow for the latest security tools and techniques.
            </p>
            <a
              href="https://github.com/LuCyanXsecurity/Bug-Bounty-Toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-medium hover:from-red-500 hover:to-red-400 transition-all duration-200 glow-red-hover"
            >
              <Github className="w-4 h-4" />
              Star on GitHub
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Bug Bounty Toolkit. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by
              <a href="https://github.com/LuCyanXsecurity" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">
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
