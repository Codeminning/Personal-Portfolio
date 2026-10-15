import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Terminal, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#060911] text-slate-100 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center space-y-6 glass-card p-8 sm:p-10 rounded-2xl border border-slate-800">
        <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-sm uppercase tracking-widest text-cyan-400">
            Error 404 • Destination Not Found
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-100">
            Lost in Cyberspace
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The page or route you are looking for does not exist or has been relocated within Dhyanesh Visakan&apos;s portfolio.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-cyan-500/20 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
