import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onShareClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onShareClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#090a0f] py-8 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-300">Mahatir Mahmud</span>
          <span aria-hidden="true">·</span>
          <span>Mobile Application Developer &amp; Creative Technologist</span>
        </div>

        <div className="flex items-center gap-6">
          {onShareClick && (
            <button
              onClick={onShareClick}
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Share &amp; Launch Post
            </button>
          )}
          <a
            href="https://github.com/mahatirmahmud688601-wq"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:mahatirmahmud839@gmail.com"
            className="hover:text-slate-300 transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
