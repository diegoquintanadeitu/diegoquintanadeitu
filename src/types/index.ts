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
  company?: string;
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

export interface Education {
  period: string;
  title: string;
  institution?: string;
  description: string;
  type: "formal" | "autodidactic" | "certification" | "course";
  achievements?: string[];
}

export interface RoadmapProject {
  id: string;
  title: string;
  description: string;
  category: "audio" | "web" | "mobile" | "desktop" | "ai" | "infrastructure";
  technologies: string[];
  status: "not-started" | "in-progress" | "completed" | "paused";
  priority: "low" | "medium" | "high";
  estimatedDuration: string;
  startDate?: string;
  endDate?: string;
  repository?: string;
  learningGoals: string[];
  dependencies?: string[];
  milestones?: {
    title: string;
    description: string;
    completed: boolean;
    dueDate?: string;
  }[];
}
