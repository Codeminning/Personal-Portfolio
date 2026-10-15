'use client';

import React from 'react';
import {
  ArrowUp,
  ExternalLink,
  Heart,
  Code2,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/70 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80 items-center">
          {/* Brand & Headline (6 cols) */}
          <div className="md:col-span-6 space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-cyan-400">DV</span>
                </div>
              </div>
              <span className="text-base font-bold text-slate-100">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Computer Science Engineering Student at SRM Institute of Science and Technology, Kattankulathur.
            </p>
            <p className="text-xs text-cyan-400/90 font-mono italic">
              &ldquo;{personalInfo.headline}&rdquo;
            </p>
          </div>

          {/* Quick Links & Back to Top (6 cols) */}
          <div className="md:col-span-6 flex flex-col md:flex-row items-center justify-center md:justify-end gap-6">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl glass-panel border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all duration-200 group"
              aria-label="Back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.liveProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>EduTime Pro</span>
            </a>
          </div>

          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Engineered with Next.js &amp; Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
