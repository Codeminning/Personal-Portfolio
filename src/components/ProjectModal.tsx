'use client';

import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  AlertTriangle,
  BarChart3,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Banner with Image */}
        <div className="relative aspect-video sm:aspect-[21/9] w-full bg-slate-950 overflow-hidden border-b border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700/80 shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Status & Category overlay on top image */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-slate-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
              {project.category}
            </span>
            <span
              className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${
                project.status === 'Completed'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : project.status === 'In Progress'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-purple-500/20 text-purple-300 border-purple-500/40'
              }`}
            >
              ● {project.status}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Title & Full Description */}
          <div>
            <h3 id="modal-project-title" className="text-2xl font-extrabold text-slate-100 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Reported Experimental Metrics (e.g. YOLOv8 benchmark) */}
          {project.reportedMetrics && project.reportedMetrics.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase">
                <BarChart3 className="w-4 h-4" />
                <span>Reported Experimental Benchmark Results</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.reportedMetrics.map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block font-mono">{metric.label}</span>
                    <span className="text-lg font-extrabold text-cyan-400 font-mono">{metric.value}</span>
                    {metric.note && (
                      <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">{metric.note}</span>
                    )}
                  </div>
                ))}
              </div>
              {project.implementationNotes && (
                <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800/80">
                  {project.implementationNotes}
                </p>
              )}
            </div>
          )}

          {/* Safety Notes (e.g., Medical Concept) */}
          {project.safetyNotes && (
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-200/90 leading-relaxed">
                <span className="font-bold text-amber-300 block mb-0.5">Safety &amp; Compliance Protocol:</span>
                {project.safetyNotes}
              </div>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Key Features &amp; Capabilities</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Details if present */}
          {project.architectureDetails && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>Architecture &amp; Data Pipeline</span>
              </h4>
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5 font-mono text-[11px] text-slate-300">
                {project.architectureDetails.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">0{idx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs tracking-wide shadow-md shadow-cyan-500/20 transition-all"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 text-slate-400 border border-slate-800 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                <span>Institutional / Academic Codebase</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
