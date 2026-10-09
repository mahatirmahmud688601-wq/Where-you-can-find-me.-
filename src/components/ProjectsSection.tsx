import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { Search, Smartphone, Bot, Code2, Layers, Compass, Check, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenDetails: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onOpenDetails }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  // Distinct primary languages across the repository
  const languagesList = ['Kotlin', 'Dart', 'TypeScript', 'GLSL', 'SQL'];

  // Categorical counts for quick stats navigation
  const counts = useMemo(() => {
    return {
      total: projects.length,
      android: projects.filter(p => p.platformType === 'android' || p.category === 'android').length,
      flutter: projects.filter(p => p.platformType === 'flutter' || p.category === 'flutter').length,
      ai: projects.filter(p => p.category === 'ai' || p.tags.some(t => t.toLowerCase().includes('ai'))).length,
      threeD: projects.filter(p => p.category === '3d').length,
      travel: projects.filter(p => p.category === 'travel').length,
    };
  }, [projects]);

  const filterTabs: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: counts.total },
    { id: 'android', label: 'Android Native', count: counts.android },
    { id: 'flutter', label: 'Flutter', count: counts.flutter },
    { id: 'ai', label: 'AI Agent', count: counts.ai },
    { id: '3d', label: '3D Spatial Web', count: counts.threeD },
    { id: 'travel', label: 'Travel & Lifestyle', count: counts.travel },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Category filter matching
      let matchesCategory = true;
      if (activeCategory === 'android') {
        matchesCategory = project.platformType === 'android' || project.category === 'android';
      } else if (activeCategory === 'flutter') {
        matchesCategory = project.platformType === 'flutter' || project.category === 'flutter';
      } else if (activeCategory === 'ai') {
        matchesCategory = project.category === 'ai' || project.tags.some(t => t.toLowerCase().includes('ai'));
      } else if (activeCategory === '3d') {
        matchesCategory = project.category === '3d';
      } else if (activeCategory === 'travel') {
        matchesCategory = project.category === 'travel';
      }

      // Language filter matching (if user clicks a language chip)
      const matchesLanguage =
        !selectedLanguage
          ? true
          : project.tags.some(t => t.toLowerCase().includes(selectedLanguage.toLowerCase())) ||
            project.architecture.frontend.toLowerCase().includes(selectedLanguage.toLowerCase()) ||
            project.architecture.backendOrStorage.toLowerCase().includes(selectedLanguage.toLowerCase());

      // Search text query matching
      const matchesSearch =
        searchQuery.trim() === ''
          ? true
          : project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesLanguage && matchesSearch;
    });
  }, [projects, activeCategory, selectedLanguage, searchQuery]);

  const handleSelectCategory = (cat: ProjectCategory) => {
    setActiveCategory(cat);
    setSelectedLanguage(null);
  };

  const handleToggleLanguage = (lang: string) => {
    if (selectedLanguage === lang) {
      setSelectedLanguage(null);
    } else {
      setSelectedLanguage(lang);
    }
  };

  return (
    <section id="projects" className="py-16 lg:py-24 max-w-7xl mx-auto px-6 space-y-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider font-mono">
            Full Production Registry
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Featured Applications &amp; Repositories
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Complete suite of native Android, Flutter, and AI workspace applications built by Mahatir Mahmud with interactive simulators.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by tech, keyword, platform..."
            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/60"
          />
        </div>
      </div>

      {/* QUICK-STATS BAR FOR SEAMLESS NAVIGATION */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-semibold uppercase tracking-wider text-[11px] font-mono text-slate-400">
            Quick Navigation &amp; Technology Metrics
          </span>
          {(activeCategory !== 'all' || selectedLanguage || searchQuery) && (
            <button
              onClick={() => {
                setActiveCategory('all');
                setSelectedLanguage(null);
                setSearchQuery('');
              }}
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors text-[11px] flex items-center gap-1"
            >
              <span>Reset to All Projects</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Quick Stats Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {/* Tile 1: Total Projects */}
          <button
            type="button"
            onClick={() => handleSelectCategory('all')}
            className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between group ${
              activeCategory === 'all' && !selectedLanguage
                ? 'bg-indigo-950/30 border-indigo-500/60 shadow-lg shadow-indigo-950/20'
                : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/60'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Total</span>
              <Code2 className={`w-4 h-4 ${activeCategory === 'all' && !selectedLanguage ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-400'}`} />
            </div>
            <div className="mt-2 space-y-0.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                {counts.total}
              </div>
              <p className="text-xs font-medium text-slate-300">All Projects</p>
              <p className="text-[11px] text-slate-500 font-mono">100% production ready</p>
            </div>
          </button>

          {/* Tile 2: Android Native Category */}
          <button
            type="button"
            onClick={() => handleSelectCategory('android')}
            className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between group ${
              activeCategory === 'android'
                ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-950/20'
                : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/60'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Category</span>
              <Smartphone className={`w-4 h-4 ${activeCategory === 'android' ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-400'}`} />
            </div>
            <div className="mt-2 space-y-0.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                {counts.android}
              </div>
              <p className="text-xs font-medium text-slate-300">Android</p>
              <p className="text-[11px] text-slate-500 font-mono">Kotlin &amp; Compose</p>
            </div>
          </button>

          {/* Tile 3: Flutter Category */}
          <button
            type="button"
            onClick={() => handleSelectCategory('flutter')}
            className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between group ${
              activeCategory === 'flutter'
                ? 'bg-cyan-950/30 border-cyan-500/60 shadow-lg shadow-cyan-950/20'
                : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/60'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Category</span>
              <Layers className={`w-4 h-4 ${activeCategory === 'flutter' ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-400'}`} />
            </div>
            <div className="mt-2 space-y-0.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 tabular-nums">
                {counts.flutter}
              </div>
              <p className="text-xs font-medium text-slate-300">Flutter</p>
              <p className="text-[11px] text-slate-500 font-mono">Dart &amp; 120Hz Motion</p>
            </div>
          </button>

          {/* Tile 4: AI Agent Category */}
          <button
            type="button"
            onClick={() => handleSelectCategory('ai')}
            className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between group ${
              activeCategory === 'ai'
                ? 'bg-purple-950/30 border-purple-500/60 shadow-lg shadow-purple-950/20'
                : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/60'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Category</span>
              <Bot className={`w-4 h-4 ${activeCategory === 'ai' ? 'text-purple-400' : 'text-slate-500 group-hover:text-slate-400'}`} />
            </div>
            <div className="mt-2 space-y-0.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-purple-400 tabular-nums">
                {counts.ai}
              </div>
              <p className="text-xs font-medium text-slate-300">AI Agent</p>
              <p className="text-[11px] text-slate-500 font-mono">Gemini 2.5 Systems</p>
            </div>
          </button>

          {/* Tile 5: Languages Used Summary & Quick Filter */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Languages</span>
              <span className="text-[11px] font-mono text-indigo-400">{languagesList.length} Stacks</span>
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="flex flex-wrap gap-1">
                {languagesList.map(lang => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => handleToggleLanguage(lang)}
                    className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      selectedLanguage === lang
                        ? 'bg-indigo-600 text-white font-semibold'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-slate-500 font-mono">
                {selectedLanguage ? `Filtering by ${selectedLanguage}` : 'Click language to filter'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Segmented Category Filter Bar */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-900/60 border border-slate-800 rounded-xl overflow-x-auto">
        {filterTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleSelectCategory(tab.id)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeCategory === tab.id && !selectedLanguage
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700/80'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
            }`}
          >
            <span>{tab.label}</span>
            <span className="font-mono text-[10px] text-slate-500 bg-slate-950/60 px-1.5 py-0.2 rounded">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Active Filter Pill Status if any filter is active */}
      {(selectedLanguage || activeCategory !== 'all') && (
        <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
          <span>Active Filter:</span>
          {activeCategory !== 'all' && (
            <span className="font-mono text-slate-200 font-medium">Category: {activeCategory}</span>
          )}
          {selectedLanguage && (
            <>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="font-mono text-indigo-300 font-medium">Language: {selectedLanguage}</span>
            </>
          )}
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-500 font-mono">Showing {filteredProjects.length} of {projects.length}</span>
        </div>
      )}

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/20 border border-slate-800 rounded-2xl p-8 space-y-3">
          <p className="text-sm font-semibold text-slate-300">No applications found matching your criteria</p>
          <p className="text-xs text-slate-500">Try clearing the search query or selecting another category.</p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSelectedLanguage(null);
              setSearchQuery('');
            }}
            className="px-3.5 py-1.5 bg-slate-800 text-slate-200 rounded-lg text-xs font-medium hover:bg-slate-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
};
