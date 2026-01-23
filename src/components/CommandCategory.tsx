import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CommandCategory as CategoryType } from '../types';
import Command from './Command';

interface CommandCategoryProps {
  category: CategoryType;
}

const CommandCategory = ({ category }: CommandCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="command-card overflow-hidden">
      {/* Category Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-white group-hover:text-red-400">
            {category.title}
          </h3>
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
            {category.commands.length} commands
          </span>
        </div>
        <div className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      {/* Commands List */}
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
        <div className="p-4 pt-0 space-y-4 border-t border-gray-800/50">
          {category.commands.map((command, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Command
                name={command.name}
                command={command.command}
                description={command.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandCategory;