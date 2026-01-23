import { useState, useEffect } from 'react';
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
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative">
              <ShieldAlert className="w-9 h-9 text-red-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-red-500/20 blur-lg group-hover:blur-xl transition-all duration-300" />
            </div>
            <span className="text-xl font-bold">
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
                className="relative px-4 py-2 text-gray-400 hover:text-white transition-all duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://github.com/LuCyanXsecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 p-2 rounded-lg bg-gray-800/50 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-800/50 text-white hover:bg-gray-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
          <nav className="glass rounded-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/LuCyanXsecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;