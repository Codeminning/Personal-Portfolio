'use client';

import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { certificationsData } from '@/data/portfolioData';
import { Certification } from '@/types';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            Certifications &amp; <span className="text-gradient-cyan">Credentials</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Professional certifications and specialized engineering workshops verified through industry leaders and academic institutions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 border border-white/10 dark:border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {cert.year}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1 mb-3">
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-300">
                    {cert.issuer}
                  </div>
                </div>

                {/* Score or Duration Pill */}
                {cert.scoreOrDuration && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
                    <Sparkles className="w-3 h-3 shrink-0" />
                    <span>{cert.scoreOrDuration}</span>
                  </div>
                )}

                {/* Skills tags */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">
                    Key Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Completion
                </span>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Verification Info</span>
                    <FileCheck className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Modal / Dialog */}
        {activeCert && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveCert(null)}
          >
            <div
              className="relative w-full max-w-md p-6 bg-slate-900 border border-slate-700 rounded-2xl glass-card space-y-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-cyan-400">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-bold text-sm text-slate-100">Certificate Verification</span>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p className="font-semibold text-slate-100 text-sm">{activeCert.title}</p>
                <p className="text-slate-400">Issued by: <span className="text-slate-200">{activeCert.issuer}</span></p>
                <p className="text-slate-400">Date/Year: <span className="text-slate-200">{activeCert.year}</span></p>
                {activeCert.scoreOrDuration && (
                  <p className="text-emerald-400 font-mono font-medium">{activeCert.scoreOrDuration}</p>
                )}
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                  Official certificate documentation on record with SRMIST / personal credentials portfolio. Direct link placeholder can be linked via <code className="text-cyan-400 font-mono">portfolioData.ts</code>.
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
