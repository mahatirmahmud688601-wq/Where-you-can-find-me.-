import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('android');
  const [message, setMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const developerEmail = 'mahatirmahmud839@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerEmail);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setIsSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-t border-slate-800/80 max-w-7xl mx-auto px-6 space-y-12">
      <div className="space-y-3 max-w-2xl">
        <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider font-mono">
          Commission &amp; Collaboration
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Let&apos;s Build Exceptional Software
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Whether you need a full-lifecycle Android or Flutter mobile application, an encrypted offline-first architecture, or an autonomous AI agent system, let&apos;s connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info & Email Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-5">
            <h3 className="text-sm font-bold text-white tracking-tight">
              Direct Communication Channel
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Reach out directly via email for project inquiries, technical advisory, or code reviews. Responses guaranteed within 24 hours.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 truncate">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="font-mono text-xs text-slate-200 truncate">{developerEmail}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0 text-xs flex items-center gap-1"
                title="Copy email to clipboard"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[11px] hidden sm:inline">{isCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <a
                href="https://github.com/mahatirmahmud688601-wq"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub Repositories</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={`mailto:${developerEmail}?subject=Project%20Inquiry%20from%20Portfolio`}
                className="hover:text-indigo-300 transition-colors"
              >
                Open in Email Client
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-4 text-xs"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-slate-400 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/60"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400 font-medium">Your Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/60"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-400 font-medium">Project Scope / Discipline</label>
              <select
                value={projectType}
                onChange={e => setProjectType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500/60"
              >
                <option value="android">Android Native (Kotlin &amp; Jetpack Compose)</option>
                <option value="flutter">Flutter &amp; Cross-Platform Mobile</option>
                <option value="ai">AI Agent &amp; Gemini Multimodal System</option>
                <option value="3d">3D WebGL / Spatial Web Showcase</option>
                <option value="consulting">Architecture &amp; Security Consultation</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-400 font-medium">Project Overview &amp; Requirements</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Describe your vision, target timeline, or core requirements..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 resize-none"
              />
            </div>

            {isSent ? (
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-center text-emerald-300 font-medium flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Message Received! Mahatir will reply shortly at {email || 'your email'}.</span>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm shadow-indigo-600/30"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Message</span>
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
