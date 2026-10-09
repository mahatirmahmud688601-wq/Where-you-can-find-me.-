import React, { useState } from 'react';
import { Smartphone, Zap, Code, Layout, Layers, Check } from 'lucide-react';

export const FlutterPortfolioSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'skills' | 'motion'>('architecture');
  const [fpsCounter] = useState(120);

  const skills = [
    { name: 'Flutter & Dart UI Toolkit', level: 95, detail: 'Custom RenderObjects, BLoC, Freezed' },
    { name: 'Android Native (Kotlin & Compose)', level: 92, detail: 'Coroutines, Room, Keystore, CameraX' },
    { name: 'Agentic AI & Gemini Pro', level: 88, detail: 'Workspace APIs, On-device Nano, Triage' },
    { name: 'Clean Architecture & Testing', level: 94, detail: 'TDD, Decoupled Domain/Data, CI/CD' }
  ];

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-slate-200">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-slate-100">Flutter Cinematic Portfolio Deck</h4>
            <p className="text-xs text-slate-400">Single-Screen Architecture &amp; Performance Inspection</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded">
          <Zap className="w-3.5 h-3.5" />
          <span>{fpsCounter} FPS (Zero Stutter)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Mobile Device Mockup Frame */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-[230px] rounded-[28px] border-4 border-slate-800 bg-slate-950 p-3 shadow-2xl relative overflow-hidden flex flex-col justify-between h-[360px]">
            {/* Camera notch pill */}
            <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-800" />
            </div>

            {/* Simulated Flutter Canvas */}
            <div className="flex-1 space-y-3 p-1">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono text-cyan-400">Mobile Architect</span>
                <h5 className="font-bold text-sm text-slate-100 leading-tight">Mahatir Mahmud</h5>
                <p className="text-[11px] text-slate-400">Flutter · Android Native · AI Systems</p>
              </div>

              <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-[10px] space-y-1">
                <span className="text-slate-400 font-semibold">Active Pipeline</span>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Fieldnote v2.4</span>
                  <span className="text-emerald-400">Shipped</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>SiteCheck Pro</span>
                  <span className="text-cyan-400">Enterprise</span>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-[10px] space-y-1">
                <span className="text-cyan-300 font-medium">Platform Channels</span>
                <p className="text-slate-400 text-[9px] font-mono">Biometric hardware bridge verified.</p>
              </div>
            </div>

            {/* Bottom bar indicator */}
            <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
          </div>
        </div>

        {/* Interactive Breakdown Controls */}
        <div className="md:col-span-7 space-y-4 text-xs">
          {/* Tab selector */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex-1 py-1.5 rounded text-center transition-colors font-medium ${
                activeTab === 'architecture' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400'
              }`}
            >
              Architecture
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex-1 py-1.5 rounded text-center transition-colors font-medium ${
                activeTab === 'skills' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400'
              }`}
            >
              Skill Matrix
            </button>
            <button
              onClick={() => setActiveTab('motion')}
              className={`flex-1 py-1.5 rounded text-center transition-colors font-medium ${
                activeTab === 'motion' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400'
              }`}
            >
              Motion Physics
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'architecture' && (
            <div className="space-y-2.5">
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                  <Layout className="w-3.5 h-3.5" />
                  <span>BLoC Pattern &amp; Clean Layers</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Strict isolation between Data Providers, Domain UseCases, and Reactive Presentation Blocks. Zero leakage of UI logic into business layers.
                </p>
              </div>
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Native JNI / Platform Channel Bridge</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  High-throughput binary method channels directly to native Android Kotlin services for hardware cryptographic keys and CameraX image stream.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-2.5">
              {skills.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span className="font-medium">{s.name}</span>
                    <span className="font-mono text-cyan-400">{s.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-cyan-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-500">{s.detail}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'motion' && (
            <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>Spring &amp; Damping Curves</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                No linear interpolation. All UI transitions utilize physical mass, stiffness, and friction parameters (Cubic Hermite splines) calibrated for human eye tracking.
              </p>
              <div className="pt-2 flex items-center gap-3 text-slate-400 font-mono text-[11px]">
                <span className="flex items-center gap-1 text-emerald-400"><Check className="w-3.5 h-3.5" /> 60Hz Base</span>
                <span className="flex items-center gap-1 text-cyan-400"><Check className="w-3.5 h-3.5" /> 120Hz ProMotion</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
