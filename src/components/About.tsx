'use client';

import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Target,
  Brain,
  Code2,
  Cpu,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineering student blending full-stack software development with applied machine learning and computer vision.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10 dark:border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                Hi, I&apos;m Dhyanesh Visakan
              </h3>

              {personalInfo.extendedBio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-slate-300 text-sm sm:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Full-Stack &amp; AI Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>YOLOv8 Computer Vision Pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Enterprise RAG &amp; Vector Databases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Disciplined Engineering Execution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Feature Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Card 1: Academic Foundation */}
            <div className="glass-card rounded-xl p-5 border border-white/10 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-100">Academic Foundation</h4>
                  <p className="text-xs text-cyan-300 font-mono">
                    SRMIST Kattankulathur • CGPA 8.15
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    B.Tech in Computer Science and Engineering with rigor across Data Structures, Algorithms, Operating Systems, and DBMS.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Technical Interests */}
            <div className="glass-card rounded-xl p-5 border border-white/10 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-100">Technical Interests</h4>
                  <p className="text-xs text-purple-300 font-mono">
                    AI, CV, RAG &amp; Scalable Systems
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    Passionate about practical computer vision (real-time telemetry), grounded RAG pipelines with ChromaDB &amp; Gemini, and modern web apps.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Engineering Goals */}
            <div className="glass-card rounded-xl p-5 border border-white/10 hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-100">Engineering Goals</h4>
                  <p className="text-xs text-emerald-300 font-mono">
                    Impactful Software &amp; Innovation
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    Aspiring to contribute to high-reliability software teams, deploy resilient applications, and engineer technologies that solve real civic and business challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
