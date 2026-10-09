import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Share2, ExternalLink, MessageSquare, Sparkles } from 'lucide-react';
import { ANNOUNCEMENT_POSTS, AnnouncementPost } from '../data/announcements';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [selectedPostId, setSelectedPostId] = useState<string>('linkedin');
  const [copied, setCopied] = useState(false);

  const activePost = ANNOUNCEMENT_POSTS.find(p => p.id === selectedPostId) || ANNOUNCEMENT_POSTS[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(activePost.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const wordCount = activePost.content.trim().split(/\s+/).length;
  const charCount = activePost.content.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#0d0f17] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800/80 flex items-start justify-between gap-4 bg-slate-900/40">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
              <Share2 className="w-3.5 h-3.5" />
              <span>Repository Launch &amp; Social Posts</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              GitHub Announcement Post Center
            </h3>
            <p className="text-xs text-slate-400">
              Ready-to-publish social copy and technical releases for your 7-application portfolio.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors shrink-0"
            aria-label="Close share modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Platform Selection Tabs */}
        <div className="px-6 pt-3 pb-2 border-b border-slate-800/60 flex items-center gap-1.5 bg-[#0d0f17] overflow-x-auto">
          {ANNOUNCEMENT_POSTS.map(post => (
            <button
              key={post.id}
              onClick={() => {
                setSelectedPostId(post.id);
                setCopied(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                selectedPostId === post.id
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {post.platform}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {/* Post description banner */}
          <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
            <div className="space-y-0.5">
              <span className="font-semibold text-slate-200">{activePost.title}</span>
              <p className="text-slate-400 text-[11px]">{activePost.description}</p>
            </div>
            <div className="text-right font-mono text-[11px] text-slate-500 shrink-0">
              <span>{wordCount} Words · {charCount} Chars</span>
            </div>
          </div>

          {/* Copyable Post Content Box */}
          <div className="relative">
            <textarea
              readOnly
              value={activePost.content}
              rows={14}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-xs text-slate-200 font-mono leading-relaxed focus:outline-none focus:border-indigo-500/50 resize-none selection:bg-indigo-500/30 selection:text-indigo-200"
            />
          </div>

          {/* Tag Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 text-[11px] font-mono">Suggested tags:</span>
            {activePost.tags.map((t, idx) => (
              <span key={idx} className="font-mono text-[11px] text-indigo-300 bg-indigo-950/30 px-2 py-0.5 rounded border border-indigo-500/30">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-900/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Repository:</span>
            <a
              href="https://github.com/mahatirmahmud688601-wq/mahatirportfolio"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-mono flex items-center gap-1"
            >
              <span>mahatirportfolio</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-none px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm shadow-indigo-600/30"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Post Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
