'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import ResumeModal from './ResumeModal';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Active section calculation
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'leadership', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-panel border-b border-white/10 dark:border-white/10 shadow-lg shadow-black/20 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg p-1"
              aria-label="Dhyanesh Visakan Home"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-mono text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    DV
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                  Dhyanesh Visakan
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider font-mono">
                  SRMIST • CSE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons (Resume + Theme + Mobile Menu) */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Resume Button */}
              <button
                type="button"
                id="nav-resume-btn"
                onClick={() => setResumeModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 shadow-sm hover:shadow-cyan-500/20 active:scale-95"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl glass-panel md:hidden text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div
            className="md:hidden glass-panel border-b border-slate-800/80 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl"
            role="dialog"
            aria-label="Mobile Navigation"
          >
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                );
              })}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setResumeModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/20"
                >
                  <FileText className="w-4 h-4" /> Download Resume (PDF)
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}
