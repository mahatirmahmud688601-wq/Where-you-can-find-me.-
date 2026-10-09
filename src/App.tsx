import React, { useState } from 'react';
import { PROJECTS } from './data/projects';
import { Project } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ShareModal } from './components/ShareModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col">
      {/* Top Navigation */}
      <Header
        onContactClick={handleScrollToContact}
        onShareClick={() => setIsShareModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onExploreProjects={handleScrollToProjects}
          onContactClick={handleScrollToContact}
        />

        <ProjectsSection
          projects={PROJECTS}
          onOpenDetails={(project) => setSelectedProject(project)}
        />

        <ArchitectureSection />

        <SkillsSection />

        <AboutSection onContactClick={handleScrollToContact} />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onShareClick={() => setIsShareModalOpen(true)} />

      {/* Project Deep Modal Viewer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* GitHub Repository Announcement Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
