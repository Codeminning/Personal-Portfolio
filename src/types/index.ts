export interface PersonalInfo {
  name: string;
  tagline: string;
  headline: string;
  bio: string;
  extendedBio: string[];
  institution: string;
  campus: string;
  degree: string;
  cgpa: string;
  roles: string[];
  emailPlaceholder: string;
  phonePlaceholder: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  liveProjectUrl: string;
  resumeFileName: string;
  status: string;
}

export type ProjectStatus = 'Completed' | 'In Progress' | 'Planned';

export type ProjectCategory = 'All' | 'AI / Computer Vision' | 'Generative AI' | 'Full-Stack Development' | 'Web Applications';

export interface ProjectMetric {
  label: string;
  value: string;
  note?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  filterCategory: 'ai-cv' | 'gen-ai' | 'fullstack' | 'web';
  status: ProjectStatus;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyFeatures: string[];
  reportedMetrics?: ProjectMetric[];
  implementationNotes?: string;
  image: string;
  githubUrl?: string; // empty or undefined if not public yet
  liveUrl?: string; // live demo link
  architectureDetails?: string[];
  safetyNotes?: string;
}

export interface SkillItem {
  name: string;
  level?: 'Core' | 'Proficient' | 'Familiar';
  icon?: string;
}

export interface SkillCategory {
  title: string;
  id: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  campus: string;
  location: string;
  cgpa: string;
  duration: string;
  status: string;
  coursework: string[];
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  scoreOrDuration?: string;
  badge?: string;
  skillsLearned: string[];
  credentialUrl?: string; // editable placeholder
  isVerified: boolean;
}

export interface LeadershipAchievement {
  id: string;
  title: string;
  organization: string;
  category: 'Leadership' | 'Honor' | 'Sports' | 'Technical';
  description: string;
  highlights: string[];
  verified: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Workshop / Training' | 'Academic' | 'Upcoming';
  description: string;
  responsibilities: string[];
  technologies: string[];
  outcomes?: string[];
}
