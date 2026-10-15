'use client';

import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch {
      // fallback gracefully if canvas fails
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-lg font-bold text-slate-100">
                Dhyanesh Visakan — Engineering Resume
              </h3>
              <p className="text-xs text-slate-400">
                Updated Curriculum Vitae • SRMIST CSE (CGPA: 8.15)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close resume preview"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
                Verified Document
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Ready for Download
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              This verified PDF covers all technical competencies in full-stack web systems, computer vision (YOLOv8), RAG architectures, academic credentials at SRM Institute of Science and Technology, and verified certifications (Microsoft C# 91.3%, IIT Madras embedded systems).
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-slate-400">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-500 block">Degree:</span>
                <span className="text-slate-200 font-medium">B.Tech CSE</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-500 block">Academic Standing:</span>
                <span className="text-emerald-400 font-semibold">8.15 CGPA</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-slate-500 block">File:</span>
                <span className="text-slate-200 font-mono text-[11px]">Dhyanesh_Visakan_Resume.pdf</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href="/Dhyanesh_Visakan_Resume.pdf"
              download="Dhyanesh_Visakan_Resume.pdf"
              onClick={handleDownload}
              className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all duration-300 shadow-lg shadow-cyan-500/25 active:scale-98"
            >
              <Download className="w-4 h-4" /> Download PDF Resume
            </a>
            <a
              href="/Dhyanesh_Visakan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-all duration-300 active:scale-98"
            >
              <ExternalLink className="w-4 h-4" /> View in Browser Tab
            </a>
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 border-t border-slate-800/80 bg-slate-950/40 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Editable placeholder fields configured for custom updates.</span>
          <button onClick={onClose} className="hover:text-slate-200 underline">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
