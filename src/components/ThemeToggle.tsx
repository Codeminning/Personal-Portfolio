'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Check saved theme or preference
    const savedTheme = localStorage.getItem('dhyanesh_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else if (savedTheme === 'dark' || systemPrefersDark || !savedTheme) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('dhyanesh_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('dhyanesh_theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 opacity-60"
        aria-label="Theme toggle loading"
      >
        <span className="w-4 h-4 rounded-full bg-slate-500 animate-pulse" />
      </button>
    );
  }

  return (
    <button
      type="button"
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative p-2.5 rounded-xl glass-panel border border-white/10 dark:border-white/15 text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>
    </button>
  );
}
