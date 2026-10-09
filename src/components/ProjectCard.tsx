import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, Smartphone, Sparkles, Layers, Compass, ClipboardCheck, Mail, NotebookPen, Cpu } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const getIcon = () => {
    switch (project.iconName) {
      case 'NotebookPen':
        return <NotebookPen className="w-5 h-5 text-emerald-400" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 'Bot':
        return <Mail className="w-5 h-5 text-purple-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-pink-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-teal-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200 p-6 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-black/40"
    >
      <div className="space-y-4">
        {/* Top unboxed metadata following zero-pill discipline */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">{project.platform}</span>
            <span aria-hidden="true">·</span>
            <span>{project.updatedDate}</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Created {project.createdDate}</span>
        </div>

        {/* Header with Domain Icon and Title */}
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            {getIcon()}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-1.5">
              <span>{project.name}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </h3>
            <p className="text-xs text-slate-400 font-medium line-clamp-1 mt-0.5">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Short summary */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Clean unboxed tags with subtle separators */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 pt-1">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <React.Fragment key={idx}>
              <span className="font-mono text-[11px]">{tag}</span>
              {idx < 3 && <span aria-hidden="true" className="text-slate-600">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Card Footer with Metrics & Interactive Affordance */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {project.metrics.slice(0, 2).map((m, idx) => (
            <div key={idx} className="text-left">
              <span className="text-[10px] text-slate-500 uppercase font-mono block leading-none">{m.label}</span>
              <span className="text-xs font-bold font-mono text-slate-300">{m.value}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(project);
          }}
          className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1 transition-colors"
        >
          <span>Launch Simulator</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
