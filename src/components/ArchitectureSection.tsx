import React from 'react';
import { Shield, Zap, Lock, Cpu } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const principles = [
    {
      icon: Lock,
      title: '01. Offline-First Sovereign Data',
      description: 'Applications are engineered to operate seamlessly with zero network connectivity. Local Room databases and SQLCipher ensure zero data loss during high-stress field conditions.',
      metric: '100% Offline Capable'
    },
    {
      icon: Zap,
      title: '02. Sub-16ms Interaction Budget',
      description: 'Unidirectional MVI and BLoC architectures guarantee smooth 60fps to 120fps display rates. Layout calculations and complex data transforms never block the UI thread.',
      metric: '<16ms Frame Times'
    },
    {
      icon: Shield,
      title: '03. Hardware-Backed Encryption',
      description: 'Sensitive user records, notes, and audit checkpoints are secured with AES-256-GCM using hardware-backed Android Keystore keys with biometric gating.',
      metric: 'Zero Unsolicited Telemetry'
    },
    {
      icon: Cpu,
      title: '04. Grounded Agentic AI',
      description: 'AI assistants (Gemini 2.5 Flash/Pro) operate through structured JSON contracts and local caching, eliminating hallucinations and ensuring deterministic application state.',
      metric: 'Deterministic State Flow'
    }
  ];

  return (
    <section id="architecture" className="py-16 lg:py-24 border-t border-slate-800/80 bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider font-mono">
            Engineering Rigor &amp; Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Architectural Invariants
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Every mobile and full-stack application in this portfolio is crafted against strict foundational principles for reliability, security, and human responsiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-4 hover:border-slate-700/80 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-indigo-300 font-semibold bg-indigo-950/40 border border-indigo-500/30 px-2.5 py-1 rounded">
                    {p.metric}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
