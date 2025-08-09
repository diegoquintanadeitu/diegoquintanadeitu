export interface Profile {
  name: string;
  role: string;
  bio: string[];
}

export interface Skill {
  name: string;
  details: string[];
}

export interface SkillCategories {
  technical: string[];
  frameworks: string[];
  tools: string[];
  soft: Record<string, string>;
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  year?: number;
}
