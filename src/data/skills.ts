import type { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', level: 'high' },
      { name: 'TypeScript', level: 'high' },
      { name: 'React', level: 'high' },
      { name: 'TailwindCSS', level: 'high' },
      { name: 'TanStack Query', level: 'mid' },
      { name: 'Zustand', level: 'mid' },
      { name: 'Next.js', level: 'low' },
      { name: 'MSW', level: 'mid' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'C# (.NET 4.8)', level: 'mid' },
      { name: 'FastAPI', level: 'mid' },
    ],
  },
  {
    category: 'AI',
    skills: [
      { name: 'Azure OpenAI', level: 'mid' },
      { name: 'Azure Document Intelligence', level: 'mid' },
      { name: 'OCR 파이프라인', level: 'mid' },
    ],
  },
  {
    category: 'Infra · Tools',
    skills: [
      { name: 'Git', level: 'high' },
      { name: 'Docker', level: 'mid' },
      { name: 'Azure', level: 'mid' },
      { name: 'AWS', level: 'low' },
      { name: 'Figma', level: 'low' },
    ],
  },
];

export const levelLabel: Record<string, string> = {
  low: '하',
  mid: '중',
  high: '상',
};
