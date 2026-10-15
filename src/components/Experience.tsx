'use client';

import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { experienceData } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL EXPERIENCE &amp; TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            Experience &amp; <span className="text-gradient-cyan">Training</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on technical training, engineering workshops, and practical software development projects.
          </p>
        </div>

        {/* Timeline Entries */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((item, idx) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 dark:border-white/10 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {item.type}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-300">
                    {item.organization}
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs text-slate-400 shrink-0">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2 mb-4">
                <span className="text-xs font-mono uppercase text-slate-400 block tracking-wider">
                  Key Responsibilities &amp; Focus:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {item.outcomes && item.outcomes.length > 0 && (
                  <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                    ✓ {item.outcomes[0]}
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Tasteful "Open for Opportunities" Banner */}
          <div className="p-6 rounded-2xl glass-panel border border-dashed border-cyan-500/40 text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UPCOMING OPPORTUNITIES</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-100">
              Open to Software Engineering &amp; AI/ML Internships
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              Seeking opportunities to contribute to high-impact software systems, apply machine learning models, and collaborate with engineering teams.
            </p>
            <div className="pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
              >
                <span>Get in touch for roles &amp; collaborations</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
