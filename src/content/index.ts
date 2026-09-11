import { profile } from '@/data/profile';
import { navItems } from '@/data/nav';
import { careers } from '@/data/career';
import { careerAuto } from '@/data/career.auto';
import { educations } from '@/data/education';
import { skillGroups, levelLabel } from '@/data/skills';
import { projects } from '@/data/projects';
import { ui } from '@/data/ui';
import { enContent } from '@/content/en';
import { enCareerAuto } from '@/content/en.auto';
import { mergeCareer } from '@/lib/mergeCareer';
import { useLang } from '@/i18n';

import type { Content, Lang } from '@/types/content';

const koContent: Content = {
  profile,
  navItems,
  careers: mergeCareer(careers, careerAuto),
  educations,
  skillGroups,
  levelLabel,
  projects,
  ui,
};

const bundles: Record<Lang, Content> = {
  ko: koContent,
  en: { ...enContent, careers: mergeCareer(enContent.careers, enCareerAuto) },
};

export const getContent = (lang: Lang): Content => bundles[lang];

export const useContent = (): Content => getContent(useLang());
