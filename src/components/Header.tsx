import { useState } from 'react';
import { Menu, X, ShieldAlert, Github } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#commands', label: 'Commands' },
    { href: '#methodology', label: 'Methodology' },
    { href: '#about', label: 'About' },
    { href: '#contributors', label: 'Contributors' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className="fixed w-full z-50 glass-dark py-4"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative">
              <ShieldAlert className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              <span className="text-white">Bug Bounty</span>
              <span className="gradient-text ml-1">Toolkit</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-zinc-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/LuCyanXsecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
          <nav className="rounded-xl p-2 space-y-1" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/LuCyanXsecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200 text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;