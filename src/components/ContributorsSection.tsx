import { contributors } from '../data';
import { Twitter, Github, Youtube, Instagram, Users } from 'lucide-react';

const ContributorsSection = () => {
  return (
    <section id="contributors" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/80 to-gray-950" />

      {/* Decorative Elements */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Users className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-400">Community</span>
          </div>
          <h2 className="section-title">
            Credits & <span className="gradient-text">Contributors</span>
          </h2>
          <p className="section-subtitle max-w-3xl">
            A special thank you to CoffinXP and all the other incredible individuals whose tools, knowledge, and support have been a tremendous source of inspiration.
          </p>
        </div>

        {/* Contributors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 rounded-lg text-xs font-medium glass text-white">
                    Contributor
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {contributor.username}
                </h3>
                {contributor.description && (
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{contributor.description}</p>
                )}

                {/* Social Links */}
                <div className="flex gap-2">
                  {contributor.socialLinks.twitter && (
                    <a
                      href={contributor.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-800/50 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {contributor.socialLinks.github && (
                    <a
                      href={contributor.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {contributor.socialLinks.youtube && (
                    <a
                      href={contributor.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-800/50 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-200"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  )}
                  {contributor.socialLinks.instagram && (
                    <a
                      href={contributor.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-800/50 text-pink-400 hover:bg-pink-500/20 hover:text-pink-300 transition-all duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
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