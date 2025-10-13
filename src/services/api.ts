import { data } from "@/db/data";
import type { Profile, SkillCategories, TimelineItem, Project } from "@/types";

export const api = {
  getProfile: async (): Promise<Profile> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return data.profile;
  },

  getSkills: async (): Promise<SkillCategories> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return data.skillCategories;
  },

  getTimeline: async (): Promise<TimelineItem[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return data.timeline;
  },

  getProjects: async (): Promise<Project[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return data.projects;
  },

  getTechEvolution: async (): Promise<string[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return data.techEvolution;
  },

  getGames: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return data.games;
  },
};
