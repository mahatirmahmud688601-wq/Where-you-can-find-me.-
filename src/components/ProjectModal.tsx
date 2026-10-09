import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, Layers, Cpu, CheckCircle2, Calendar, Smartphone, ExternalLink, Github, Sparkles } from 'lucide-react';
import { FieldnoteSimulator } from './simulators/FieldnoteSimulator';
import { SiteCheckSimulator } from './simulators/SiteCheckSimulator';
import { AeroSchedSimulator } from './simulators/AeroSchedSimulator';
import { SmartEmailSimulator } from './simulators/SmartEmailSimulator';
import { AuroraGlowSimulator } from './simulators/AuroraGlowSimulator';
import { FlutterPortfolioSimulator } from './simulators/FlutterPortfolioSimulator';
import { KaptaiCampingSimulator } from './simulators/KaptaiCampingSimulator';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'architecture' | 'features'>('simulator');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderSimulator = () => {
    switch (project.demoType) {
      case 'notes':
        return <FieldnoteSimulator />;
      case 'inspection':
        return <SiteCheckSimulator />;
      case 'schedule':
        return <AeroSchedSimulator />;
      case 'email':
        return <SmartEmailSimulator />;
      case 'digitaltwin':
        return <AuroraGlowSimulator />;
      case 'portfolio':
        return <FlutterPortfolioSimulator />;
      case 'camping':
        return <KaptaiCampingSimulator />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#0d0f17] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-5 border-b border-slate-800/80 flex items-start justify-between gap-4 bg-slate-900/40">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">{project.platform}</span>
              <span aria-hidden="true">·</span>
              <span>Updated {project.updatedDate}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-mono">Created {project.createdDate}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <span>{project.name}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 pb-2 border-b border-slate-800/60 flex items-center gap-2 bg-[#0d0f17]">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Live Interactive Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
              activeTab === 'features'
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Key Capabilities &amp; Specs</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>System Architecture</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <div className="p-3 bg-indigo-950/20 border border-indigo-500/20 rounded-lg text-xs text-indigo-200 flex items-center justify-between">
                <span>
                  Interactive sandbox for <strong>{project.name}</strong>. Feel free to interact with controls, toggle states, and preview workflows.
                </span>
                <span className="font-mono text-[11px] text-indigo-400 shrink-0 hidden sm:inline">60 FPS Native Emulation</span>
              </div>
              {renderSimulator()}
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-6">
              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Project Overview</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Metrics strip */}
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <p className="text-lg font-bold font-mono text-white">{m.value}</p>
                    <p className="text-[11px] text-slate-400">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Engineering Features</h4>
                <div className="space-y-2">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Technologies &amp; Libraries</h4>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-5">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">System Architecture &amp; Data Pipeline</h4>
                <p className="text-xs text-slate-400">
                  Engineered with separation of concerns, zero-latency caching, and offline-first resiliency.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">Presentation Layer</span>
                  <p className="text-sm font-medium text-slate-200">{project.architecture.frontend}</p>
                  <p className="text-xs text-slate-500">Zero jank, reactive declarative components with smooth 60fps interaction budgets.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">Storage &amp; Persistence</span>
                  <p className="text-sm font-medium text-slate-200">{project.architecture.backendOrStorage}</p>
                  <p className="text-xs text-slate-500">Hardware-level encryption keys and reliable offline-first transaction logging.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">State Management</span>
                  <p className="text-sm font-medium text-slate-200">{project.architecture.stateManagement}</p>
                  <p className="text-xs text-slate-500">Immutable unidirectional state flow preventing race conditions and UI flickering.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider">Hardware &amp; AI Integration</span>
                  <p className="text-sm font-medium text-slate-200">{project.architecture.specialTech}</p>
                  <p className="text-xs text-slate-500">Deep OS-level device capabilities paired with context-rich agentic reasoning.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3.5 border-t border-slate-800/80 bg-slate-900/30 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Repository Status:</span>
            <span className="text-emerald-400 font-medium">Production Codebase Available</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
