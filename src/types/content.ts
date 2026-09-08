import type { CareerEntry, Project, SkillGroup } from '@/types';
import type { EducationEntry } from '@/data/education';

export type Lang = 'ko' | 'en';

export interface Contact {
  label: string;
  value: string;
  href: string;
}

export interface Strength {
  title: string;
  desc: string;
}

export interface Profile {
  name: string;
  greeting: string;
  headline: string;
  role: string;
  photo: string;
  intro: string[];
  strengths: Strength[];
  birth: string;
  contacts: Contact[];
}

export interface NavItem {
  label: string;
  hash: string;
}

export interface Ui {
  /** 다른 언어로 전환하는 버튼 라벨 */
  langToggle: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    primaryCta: string;
    secondaryCta: string;
    photoAlt: string;
  };
  sections: {
    career: { eyebrow: string; title: string };
    projects: { eyebrow: string; title: string; description: string };
    skills: { eyebrow: string; title: string; description: string };
    education: { eyebrow: string; title: string };
    contact: { eyebrow: string; title: string; description: string };
  };
  career: {
    current: string;
    reflection: string;
    viewDetails: string;
  };
  detail: {
    workBadge: string;
    overview: string;
    role: string;
    features: string;
    techStack: string;
    screens: string;
    backToProjects: string;
    backToCareer: string;
    moreProjects: string;
    step: string;
    period: string;
    team: string;
    teamLabelWork: string;
    position: string;
  };
}

export interface Content {
  profile: Profile;
  navItems: NavItem[];
  careers: CareerEntry[];
  educations: EducationEntry[];
  skillGroups: SkillGroup[];
  levelLabel: Record<string, string>;
  projects: Project[];
  ui: Ui;
}
