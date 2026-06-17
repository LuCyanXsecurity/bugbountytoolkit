import { contributors } from '../data';
import { Twitter, Github, Youtube, Instagram, Users } from 'lucide-react';

const ContributorsSection = () => {
  return (
    <section id="contributors" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: 'rgba(251, 191, 36, 0.08)', border: '1px solid rgba(251, 191, 36, 0.15)' }}>
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs text-amber-400 font-medium">Community</span>
          </div>
          <h2 className="section-title">
            Credits & <span className="gradient-text">Contributors</span>
          </h2>
          <p className="section-subtitle max-w-3xl">
            A special thank you to CoffinXP and all the other incredible individuals whose tools, knowledge, and support have been a tremendous source of inspiration.
          </p>
        </div>

        {/* Contributors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {contributors.map((contributor, index) => (
            <div
              key={index}
              className="group command-card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={contributor.imageUrl}
                  alt={contributor.username}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 rounded-md text-[10px] font-medium text-zinc-400" style={{ background: 'rgba(9, 9, 11, 0.7)', backdropFilter: 'blur(8px)', border: '1px solid var(--border)' }}>
                    Contributor
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {contributor.username}
                </h3>
                {contributor.description && (
                  <p className="text-zinc-600 text-xs mb-4 line-clamp-2 leading-relaxed">{contributor.description}</p>
                )}

                {/* Social Links */}
                <div className="flex gap-1.5">
                  {contributor.socialLinks.twitter && (
                    <a
                      href={contributor.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md text-zinc-600 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {contributor.socialLinks.github && (
                    <a
                      href={contributor.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md text-zinc-600 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {contributor.socialLinks.youtube && (
                    <a
                      href={contributor.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {contributor.socialLinks.instagram && (
                    <a
                      href={contributor.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md text-zinc-600 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;