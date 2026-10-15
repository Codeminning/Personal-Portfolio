'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Lightbulb
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '@/data/portfolioData';
import { Project } from '@/types';
import ProjectModal from './ProjectModal';

type FilterType = 'all' | 'ai-cv' | 'gen-ai' | 'fullstack' | 'web';

const filterTabs: Array<{ id: FilterType; label: string }> = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-cv', label: 'AI & Computer Vision' },
  { id: 'gen-ai', label: 'Generative AI & RAG' },
  { id: 'fullstack', label: 'Full-Stack Systems' },
  { id: 'web', label: 'Web Applications' }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.filterCategory === activeFilter;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED ENGINEERING PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical software implementations combining deep learning, computer vision, retrieval architectures, and scalable web platforms.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                  : 'glass-panel text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                {/* Thumbnail Header */}
                <div className="relative aspect-video w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                      {project.category.split('/')[0].trim()}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-md border ${
                        project.status === 'Completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : project.status === 'In Progress'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                      }`}
                    >
                      {project.status === 'Completed' ? '✓ Completed' : project.status === 'In Progress' ? '⚡ In Progress' : '✦ Planned'}
                    </span>
                  </div>

                  {/* Benchmark metric tag if present */}
                  {project.reportedMetrics && project.reportedMetrics.length > 0 && (
                    <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-slate-950/90 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 backdrop-blur-sm">
                      <BarChart3 className="w-3 h-3 text-cyan-400" />
                      <span>{project.reportedMetrics[0].label}: {project.reportedMetrics[0].value} (Reported)</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 py-4 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Case Study &amp; Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                      title="Launch Live Demo"
                      aria-label={`Launch live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                      title="View GitHub Repository"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal Deep-Dive */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
