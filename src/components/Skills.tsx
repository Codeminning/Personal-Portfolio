'use client';

import React, { useState, useMemo } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Wrench,
  Search,
  Sparkles,
  Terminal,
  Layers
} from 'lucide-react';
import { skillsData } from '@/data/portfolioData';

const categoryIcons: Record<string, React.ReactNode> = {
  languages: <Code2 className="w-5 h-5 text-cyan-400" />,
  frontend: <Layout className="w-5 h-5 text-blue-400" />,
  backend: <Server className="w-5 h-5 text-indigo-400" />,
  databases: <Database className="w-5 h-5 text-purple-400" />,
  aiml: <Cpu className="w-5 h-5 text-pink-400" />,
  tools: <Wrench className="w-5 h-5 text-emerald-400" />
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return skillsData
      .map((cat) => {
        // Category filter
        if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
          return null;
        }

        // Search query filter
        if (!searchQuery.trim()) {
          return cat;
        }

        const filteredSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );

        if (filteredSkills.length === 0) return null;

        return {
          ...cat,
          skills: filteredSkills
        };
      })
      .filter(Boolean) as typeof skillsData;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            Skills &amp; <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Curated toolkit across software engineering, artificial intelligence, computer vision, and modern web architectures.
          </p>
        </div>

        {/* Controls: Search & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                  : 'glass-panel text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              All Skills
            </button>
            {skillsData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                    : 'glass-panel text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Realtime Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python, YOLO)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-900/80 border border-slate-700/80 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card rounded-2xl p-6 border border-white/10 dark:border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800">
                    {categoryIcons[category.id] || <Code2 className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 shadow-sm"
                    >
                      <span className="text-xs font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                            skill.level === 'Core'
                              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                              : skill.level === 'Proficient'
                              ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{category.skills.length} technologies</span>
                <span className="text-cyan-500/70">Modular &amp; Scalable</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl border border-dashed border-slate-800 space-y-3">
            <p className="text-slate-400 text-sm">
              No matching skills found for &quot;<span className="text-cyan-400">{searchQuery}</span>&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-cyan-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
