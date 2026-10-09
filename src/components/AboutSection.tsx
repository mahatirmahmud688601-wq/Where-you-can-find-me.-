import React from 'react';
import { Mail, Github, Globe, Terminal, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-16 lg:py-24 border-t border-slate-800/80 bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider font-mono">
              About The Developer
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Crafting robust digital tools that empower human autonomy.
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                I am <strong>Mahatir Mahmud</strong>, a mobile application developer and creative technologist specializing in Flutter, native Android (Kotlin / Jetpack Compose), and autonomous AI agent architectures.
              </p>
              <p>
                Over the past several years, I have architected mission-critical field tools, local cryptographic vaults, executive scheduling intelligence, and bespoke 3D textile digital twins. My development philosophy is rooted in privacy-by-design, zero-bloat state management, and crafting UI micro-interactions that feel like natural extensions of human thought.
              </p>
              <p>
                When building mobile apps, I obsess over cold-start latency, memory profiling, offline-first sync consistency, and fluid 120Hz rendering pipelines that respect device battery life and user attention.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-500 transition-colors flex items-center gap-2"
              >
                <span>Initiate Direct Discussion</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://github.com/mahatirmahmud688601-wq"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-xs hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Facts & Contact Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-5">
              <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>Developer Dossier</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Primary Focus</span>
                  <span className="font-semibold text-slate-200">Flutter &amp; Android Native</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Specialization</span>
                  <span className="font-semibold text-slate-200">Offline-First &amp; AI Agents</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Location</span>
                  <span className="font-semibold text-slate-200">Available Globally (Remote)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Direct Email</span>
                  <a
                    href="mailto:mahatirmahmud839@gmail.com"
                    className="font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    mahatirmahmud839@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">GitHub Handle</span>
                  <span className="font-mono text-slate-300">mahatirmahmud688601-wq</span>
                </div>
              </div>

              <div className="p-3 bg-indigo-950/20 border border-indigo-500/20 rounded-xl text-xs text-indigo-200/90 leading-relaxed">
                Open for high-impact mobile development, contract architecture, and AI agent integration projects.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
