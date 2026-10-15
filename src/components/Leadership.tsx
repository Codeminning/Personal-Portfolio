'use client';

import React from 'react';
import {
  Shield,
  Crosshair,
  Award,
  BookOpen,
  CheckCircle2,
  Users,
  Compass,
  Trophy
} from 'lucide-react';
import { leadershipData } from '@/data/portfolioData';

const leadershipIcons: Record<string, React.ReactNode> = {
  'ncc-cadet': <Shield className="w-5 h-5 text-cyan-400" />,
  'iei-membership': <Compass className="w-5 h-5 text-blue-400" />,
  'rifle-shooting': <Crosshair className="w-5 h-5 text-purple-400" />,
  'technical-learning': <BookOpen className="w-5 h-5 text-emerald-400" />
};

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>DISCIPLINE &amp; LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            Leadership &amp; <span className="text-gradient-cyan">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            High-discipline extracurricular engagements cultivating leadership, mental focus, technical collaboration, and team cohesion.
          </p>
        </div>

        {/* 2x2 Grid of Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 dark:border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header with Icon & Category */}
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                    {leadershipIcons[item.id] || <Award className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    {item.category}
                  </span>
                </div>

                {/* Title & Organization */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-300">
                    {item.organization}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Status Tag */}
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="text-emerald-400/90 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified Record
                </span>
                <span>SRMIST &amp; Extracurricular</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
