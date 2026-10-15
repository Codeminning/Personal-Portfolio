'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  FileText,
  Mail,
  ExternalLink,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '@/data/portfolioData';
import ResumeModal from './ResumeModal';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Academic & Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-cyan-400 font-semibold font-mono text-[11px] uppercase tracking-wider">
                SRMIST Kattankulathur
              </span>
              <span className="text-slate-600 dark:text-slate-500">•</span>
              <span className="text-slate-300">CGPA 8.15</span>
            </div>

            {/* Main Name & Animated Roles */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100">
                Hi, I&apos;m{' '}
                <span className="text-gradient-cyan">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Dynamic Animated Role Banner */}
              <div className="h-9 sm:h-10 flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300">
                <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="font-mono text-cyan-400">
                  {personalInfo.roles[currentRoleIndex]}
                </span>
              </div>
            </div>

            {/* Headline */}
            <p className="text-lg sm:text-xl font-medium text-slate-200 tracking-wide">
              &ldquo;{personalInfo.headline}&rdquo;
            </p>

            {/* Concise Introduction */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              {/* Primary CTA */}
              <a
                href="#projects"
                id="hero-explore-projects-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-95"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary CTA: Resume */}
              <button
                type="button"
                id="hero-download-resume-btn"
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel border border-slate-700/80 hover:border-cyan-400/60 text-slate-200 hover:text-cyan-400 font-semibold text-sm transition-all duration-300 active:scale-95 group"
              >
                <FileText className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* Tertiary CTA: Contact */}
              <a
                href="#contact"
                id="hero-contact-me-btn"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-400 hover:text-white font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Social & Live Links */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">
                Verified Profiles:
              </span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dhyanesh Visakan LinkedIn Profile"
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dhyanesh Visakan GitHub Profile"
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
                title="GitHub Profile (@Codeminning)"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.liveProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-xs text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200"
                title="EduTime Pro Live Web App"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>EduTime Pro Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: High-tech Visual Card / Replaceable Avatar (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer Glowing Neon Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 animate-pulse-slow" />

              {/* Main Card Frame */}
              <div className="relative glass-card rounded-2xl p-6 border border-white/10 dark:border-white/15 overflow-hidden">
                {/* Visual Avatar with fallback / replaceable path */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group">
                  <img
                    src="/images/avatar.svg"
                    alt="Dhyanesh Visakan Developer Profile Illustration"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Corner Tech Badges */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                    <Cpu className="w-3 h-3" /> AI & Web Stack
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-purple-500/30 text-[10px] font-mono text-purple-400 flex items-center gap-1">
                    <GraduationCap className="w-3 h-3" /> B.Tech CSE
                  </div>
                </div>

                {/* Subtitle & Quick Highlights */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold text-slate-100">Dhyanesh Visakan</span>
                    <span className="font-mono text-emerald-400 text-[11px]">SRMIST KTR</span>
                  </div>
                  <p className="text-[12px] text-slate-400 leading-snug">
                    Full-Stack Engineer & AI/ML Enthusiast exploring practical computer vision & scalable web systems.
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center">
                    <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <span className="block text-xs font-bold text-cyan-400">8.15</span>
                      <span className="text-[10px] text-slate-500">CGPA</span>
                    </div>
                    <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <span className="block text-xs font-bold text-purple-400">6+</span>
                      <span className="text-[10px] text-slate-500">Projects</span>
                    </div>
                    <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <span className="block text-xs font-bold text-emerald-400">91.3%</span>
                      <span className="text-[10px] text-slate-500">C# Score</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </section>
  );
}
