import React from 'react';

interface HeaderProps {
  onContactClick: () => void;
  onShareClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick, onShareClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#090a0f]/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-indigo-300 transition-colors"
        >
          Mahatir Mahmud
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <a
            href="#projects"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Applications
          </a>
          <a
            href="#architecture"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Architecture
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Capabilities
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          {onShareClick && (
            <button
              onClick={onShareClick}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-indigo-400 font-medium"
            >
              Announce Post
            </button>
          )}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onContactClick}
            className="px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-indigo-600/20"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
};
