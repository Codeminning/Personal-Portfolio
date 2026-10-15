'use client';

import React from 'react';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { educationData } from '@/data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            Education &amp; <span className="text-gradient-cyan">Coursework</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous computer science curriculum combining theoretical computing principles with hands-on systems programming.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 dark:border-white/10 relative overflow-hidden"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="space-y-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-mono">
                    Undergraduate Engineering
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {edu.degree}
                  </h3>
                  <div className="text-base font-semibold text-cyan-300">
                    {edu.institution}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {edu.campus}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {edu.duration} (Editable placeholder)
                    </span>
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="sm:text-right shrink-0">
                  <div className="inline-flex flex-col items-center sm:items-end p-3 rounded-xl bg-slate-950/80 border border-emerald-500/30">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Cumulative GPA
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                      {edu.cgpa}
                    </span>
                    <span className="text-[10px] text-emerald-300/80 flex items-center gap-1 mt-0.5">
                      <Award className="w-3 h-3" /> Verified SRMIST
                    </span>
                  </div>
                </div>
              </div>

              {/* Relevant Coursework Badges */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Key Coursework &amp; Core Subjects</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Academic Highlights:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
