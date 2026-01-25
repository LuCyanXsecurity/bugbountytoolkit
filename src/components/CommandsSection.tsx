import { useState, useMemo } from 'react';
import { Search, Filter, X, ChevronDown, ChevronUp, Star, StarOff } from 'lucide-react';
import { commandCategories } from '../data';
import CommandCategory from './CommandCategory';

// Category type mapping for badges
const getCategoryType = (categoryId: string): string => {
  if (categoryId.includes('subdomain') || categoryId.includes('url') || categoryId.includes('network') || categoryId.includes('js')) return 'recon';
  if (categoryId.includes('xss') || categoryId.includes('lfi') || categoryId.includes('sqli')) return 'injection';
  if (categoryId.includes('sensitive') || categoryId.includes('directory') || categoryId.includes('hidden') || categoryId.includes('git')) return 'discovery';
  if (categoryId.includes('cors') || categoryId.includes('redirect')) return 'config';
  if (categoryId.includes('wordpress')) return 'cms';
  if (categoryId.includes('payload') || categoryId.includes('dork') || categoryId.includes('header')) return 'payloads';
  if (categoryId.includes('sqlmap') || categoryId.includes('ghauri') || categoryId.includes('waf')) return 'waf';
  return 'other';
};

// Category icons
const getCategoryIcon = (categoryId: string): string => {
  if (categoryId.includes('subdomain')) return '🔍';
  if (categoryId.includes('url')) return '🔗';
  if (categoryId.includes('network')) return '🌐';
  if (categoryId.includes('js')) return '📜';
  if (categoryId.includes('xss')) return '💉';
  if (categoryId.includes('lfi')) return '📁';
  if (categoryId.includes('sqli')) return '🗄️';
  if (categoryId.includes('sensitive')) return '🔐';
  if (categoryId.includes('directory')) return '📂';
  if (categoryId.includes('hidden')) return '🕵️';
  if (categoryId.includes('git')) return '📦';
  if (categoryId.includes('cors')) return '🔄';
  if (categoryId.includes('redirect')) return '↪️';
  if (categoryId.includes('wordpress')) return '🔧';
  if (categoryId.includes('payload')) return '💣';
  if (categoryId.includes('dork')) return '🔎';
  if (categoryId.includes('header')) return '📋';
  if (categoryId.includes('sqlmap')) return '🛡️';
  if (categoryId.includes('ghauri')) return '⚔️';
  if (categoryId.includes('waf')) return '🧱';
  return '⚡';
};

const filterOptions = [
  { id: 'all', label: 'All', icon: '📚' },
  { id: 'recon', label: 'Recon', icon: '🔍' },
  { id: 'injection', label: 'Injection', icon: '💉' },
  { id: 'discovery', label: 'Discovery', icon: '🔐' },
  { id: 'config', label: 'Config', icon: '⚙️' },
  { id: 'cms', label: 'CMS', icon: '🔧' },
  { id: 'payloads', label: 'Payloads', icon: '💣' },
  { id: 'waf', label: 'WAF Bypass', icon: '🛡️' },
];

const CommandsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('command-favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Filter and search logic
  const filteredCategories = useMemo(() => {
    return commandCategories.filter(category => {
      // Filter by category type
      if (activeFilter !== 'all') {
        const categoryType = getCategoryType(category.id);
        if (categoryType !== activeFilter) return false;
      }

      // Filter by favorites
      if (showFavoritesOnly && !favorites.includes(category.id)) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = category.title.toLowerCase().includes(query);
        const matchesCommands = category.commands.some(
          cmd => cmd.name.toLowerCase().includes(query) ||
            cmd.command.some(c => c.toLowerCase().includes(query)) ||
            (cmd.description && cmd.description.toLowerCase().includes(query))
        );
        return matchesTitle || matchesCommands;
      }

      return true;
    });
  }, [searchQuery, activeFilter, favorites, showFavoritesOnly]);

  // Toggle favorite
  const toggleFavorite = (categoryId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId];
      localStorage.setItem('command-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  // Count commands
  const totalCommands = commandCategories.reduce((acc, cat) => acc + cat.commands.length, 0);
  const filteredCommands = filteredCategories.reduce((acc, cat) => acc + cat.commands.length, 0);

  return (
    <section id="commands" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            Command <span className="gradient-text">Library</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive collection of security commands organized by category for efficient bug hunting and penetration testing.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-5xl mx-auto mb-10">
          {/* Search Input */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search commands, tools, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-search pl-12 pr-12"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filter Toggle & Stats */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="filter-btn flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`filter-btn flex items-center gap-2 ${showFavoritesOnly ? 'active' : ''}`}
              >
                {showFavoritesOnly ? <Star className="w-4 h-4 fill-current" /> : <StarOff className="w-4 h-4" />}
                Favorites ({favorites.length})
              </button>
            </div>

            <div className="text-base text-gray-500">
              Showing <span className="text-red-400 font-medium">{filteredCommands}</span> of {totalCommands} commands
              in <span className="text-red-400 font-medium">{filteredCategories.length}</span> categories
            </div>
          </div>

          {/* Filter Buttons */}
          {showFilters && (
            <div className="flex flex-wrap gap-2 p-4 glass rounded-xl animate-scale-in">
              {filterOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id)}
                  className={`filter-btn ${activeFilter === option.id ? 'active' : ''}`}
                >
                  <span className="mr-1">{option.icon}</span>
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Command Categories */}
        <div className="max-w-5xl mx-auto">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 glass rounded-xl">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-white mb-2">No commands found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredCategories.map((category, index) => (
              <div
                key={category.id}
                className="mb-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <button
                    onClick={() => toggleFavorite(category.id)}
                    className={`favorite-btn ${favorites.includes(category.id) ? 'favorited' : 'text-gray-600'}`}
                    title={favorites.includes(category.id) ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Star className={`w-4 h-4 ${favorites.includes(category.id) ? 'fill-current' : ''}`} />
                  </button>
                  <span className="text-xl">{getCategoryIcon(category.id)}</span>
                  <span className={`badge-${getCategoryType(category.id)} px-2 py-0.5 rounded-full text-xs font-medium`}>
                    {getCategoryType(category.id).toUpperCase()}
                  </span>
                </div>
                <CommandCategory category={category} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CommandsSection;