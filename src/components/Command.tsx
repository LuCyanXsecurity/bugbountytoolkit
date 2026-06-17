import { useState, useEffect } from 'react';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface CommandProps {
  name: string;
  command: string[];
  description?: string;
}

const Command = ({ name, command, description }: CommandProps) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [displayCommands, setDisplayCommands] = useState(command);

  // Listen for target changes
  useEffect(() => {
    const handleTargetChange = (e: CustomEvent) => {
      const target = e.detail || '{target}';
      setDisplayCommands(command.map(cmd =>
        cmd.replace(/{target}/g, target || '{target}')
          .replace(/example\.com/g, target || 'example.com')
          .replace(/target\.com/g, target || 'target.com')
      ));
    };

    window.addEventListener('targetChange', handleTargetChange as EventListener);
    return () => window.removeEventListener('targetChange', handleTargetChange as EventListener);
  }, [command]);

  const copyToClipboard = async () => {
    const textToCopy = displayCommands.join('\n');
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isMultiCommand = command.length > 1 || command.some(c => c.includes('\n'));

  return (
    <div className="group">
      {/* Command Header */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex-1">
          <h4 className="text-white font-medium text-sm group-hover:text-indigo-400 transition-colors">
            {name}
          </h4>
          {description && (
            <p className="text-zinc-600 text-xs mt-1 line-clamp-2">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {isMultiCommand && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-1.5 rounded-md text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/50 transition-all"
              title={expanded ? 'Collapse' : 'Expand'}
            >
              {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          )}
          <button
            onClick={copyToClipboard}
            className={`p-1.5 rounded-md transition-all duration-200 ${copied
                ? 'text-emerald-400 bg-emerald-500/10'
                : 'text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/50'
              }`}
            title="Copy command"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Command Code Block */}
      <div className={`code-block overflow-hidden transition-all duration-300 ${!expanded && isMultiCommand ? 'max-h-24' : 'max-h-[500px]'
        }`}>
        <div className="p-3 overflow-x-auto">
          {displayCommands.map((cmd, idx) => (
            <pre key={idx} className="text-zinc-400 text-xs leading-relaxed whitespace-pre-wrap break-all font-mono">
              <code>
                {cmd.split('\n').map((line, lineIdx) => (
                  <div key={lineIdx} className="hover:bg-zinc-800/30 px-1 -mx-1 rounded">
                    <span className="text-zinc-700 select-none mr-2">$</span>
                    {line}
                  </div>
                ))}
              </code>
            </pre>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Command;
