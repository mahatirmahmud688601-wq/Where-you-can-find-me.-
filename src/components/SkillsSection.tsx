import React from 'react';
import { SKILL_CATEGORIES } from '../data/projects';
import { CheckCircle } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 lg:py-24 border-t border-slate-800/80 max-w-7xl mx-auto px-6 space-y-12">
      <div className="space-y-3 max-w-2xl">
        <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider font-mono">
          Technical Capabilities
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Specialized Skill Matrix
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Deep, battle-tested proficiencies spanning cross-platform Flutter development, native Android Kotlin architectures, multimodal AI agents, and 3D web graphics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/80 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white tracking-tight">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800/60">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="font-mono text-[11px]">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
