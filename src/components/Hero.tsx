import React from 'react';
import { ArrowRight, Smartphone, Sparkles, Shield, Terminal } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800/80 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Split-screen layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase font-mono">
              Flutter &amp; Mobile App Developer · AI Systems Engineer
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Architecting native mobile systems, encrypted vaults, and agentic workspace intelligence.
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              I build production-grade Android and Flutter applications that combine uncompromising offline-first privacy, fluid 120Hz motion physics, and context-aware Gemini AI integrations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProjects}
                className="px-5 py-3 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-lg shadow-white/5"
              >
                <span>Explore All 7 Applications</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:text-white transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Column: High-Craft Interactive Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono text-slate-300">mahatir_stack_runtime.kt</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">STATUS: PRODUCTION</span>
              </div>

              {/* Code / Visual Highlights */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
                  <span className="text-slate-500 text-[11px]">01 // Mobile Core</span>
                  <p className="text-slate-300 font-medium">Jetpack Compose + Flutter 3.24</p>
                  <p className="text-[11px] text-slate-400">Zero-jank UI, customized shaders, MVI unidirectional flow.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
                  <span className="text-slate-500 text-[11px]">02 // Security &amp; Storage</span>
                  <p className="text-slate-300 font-medium">AES-256-GCM + SQLCipher Room</p>
                  <p className="text-[11px] text-slate-400">Hardware Keystore backing with zero unsolicited network telemetry.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
                  <span className="text-slate-500 text-[11px]">03 // Agentic Intelligence</span>
                  <p className="text-slate-300 font-medium">Gemini 2.5 Pro Multimodal Pipeline</p>
                  <p className="text-[11px] text-slate-400">Document triage, calendar defragmentation, and approval queues.</p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <Shield className="w-3.5 h-3.5" /> High-Consequence Engineering
                </span>
                <span>Active 2026 Builds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI metrics strip placed below the hero split */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">7</p>
            <p className="text-xs text-slate-400 font-medium">Featured Applications</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">Android &amp; Web</p>
            <p className="text-xs text-slate-400 font-medium">Target Platforms</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">AES-256</p>
            <p className="text-xs text-slate-400 font-medium">Hardware-Encrypted Vaults</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-white">100% Live</p>
            <p className="text-xs text-slate-400 font-medium">Interactive Simulators</p>
          </div>
        </div>
      </div>
    </section>
  );
};
