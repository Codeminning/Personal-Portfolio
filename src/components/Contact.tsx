'use client';

import React, { useState } from 'react';
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Loader2,
  MessageSquare
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { personalInfo } from '@/data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setServerMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setServerMessage(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
        setServerMessage(data.error || 'Failed to send message. Please try again.');
        if (data.details) {
          setErrors(data.details);
        }
      }
    } catch {
      setStatus('error');
      setServerMessage('Network error occurred. Please check your connection and retry.');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.emailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project opportunity, research inquiry, or looking to collaborate? Send a message or connect through professional networks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Verified Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 dark:border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-slate-100">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Currently based at SRM Institute of Science and Technology, Kattankulathur. Open to on-site, hybrid, and remote software engineering and AI/ML opportunities.
              </p>

              {/* Direct Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    Email (Placeholder)
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-sm font-mono text-slate-200">
                  {personalInfo.emailPlaceholder}
                </div>
                <p className="text-[10px] text-slate-500 italic">
                  *Editable in config (no personal contact data fabricated)
                </p>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  Campus Location
                </span>
                <div className="text-sm text-slate-200">
                  {personalInfo.location}
                </div>
                <div className="text-xs text-slate-400">
                  SRM Institute of Science and Technology, KTR Campus
                </div>
              </div>

              {/* Verified Networks */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Professional Profiles:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-400 transition-all group"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <div className="text-xs">
                      <span className="block font-semibold">LinkedIn</span>
                      <span className="text-[10px] text-slate-500">Connect</span>
                    </div>
                  </a>

                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-400 transition-all group"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <div className="text-xs">
                      <span className="block font-semibold">GitHub</span>
                      <span className="text-[10px] text-slate-500">@Codeminning</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Functional Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 dark:border-white/10">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      disabled={status === 'loading'}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900/90 border ${
                        errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                      } text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-300">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      disabled={status === 'loading'}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900/90 border ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                      } text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-300">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Internship Opportunity"
                    disabled={status === 'loading'}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900/90 border ${
                      errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                    } text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-300">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here... Describe the opportunity or questions you have."
                    disabled={status === 'loading'}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900/90 border ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                    } text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Server Feedback Banner */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2.5 animate-fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{serverMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2.5 animate-fade-in">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{serverMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
