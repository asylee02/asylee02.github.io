export type SkillLevel = 'low' | 'mid' | 'high';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface CareerProject {
  name: string;
  summary: string;
  tech: string[];
  highlights: string[];
  /** 상세 페이지가 있는 경우 /projects/:slug 로 연결 */
  detailSlug?: string;
}

export interface CareerEntry {
  org: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  projects?: CareerProject[];
  reflection?: string;
}

export interface ProjectScreenshot {
  src: string;
  caption: string;
  description?: string;
}

export interface TechGroup {
  label: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface PipelineStep {
  label: string;
  desc: string;
}

export interface Pipeline {
  title: string;
  steps: PipelineStep[];
}

export interface DetailSection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  period: string;
  team: string;
  role: string;
  overview: string;
  /** 없으면 목록에서 타이포 타일로 표시 */
  thumbnail?: string;
  hero?: string;
  accent: 'light' | 'dark';
  /** 'work' = 회사 프로젝트 딥다이브 (경력 카드에서 진입) */
  kind?: 'personal' | 'work';
  responsibilities: string[];
  features: string[];
  techStack: TechGroup[];
  screenshots: ProjectScreenshot[];
  links: ProjectLink[];
  pipeline?: Pipeline;
  details?: DetailSection[];
}
