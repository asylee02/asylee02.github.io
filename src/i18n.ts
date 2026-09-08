import { useLocation } from 'react-router-dom';

import type { Lang } from '@/types/content';

export const LANGS: Lang[] = ['ko', 'en'];

/** 경로 앞부분으로 현재 언어 판별 (/en 이하 → en) */
export const langFromPath = (pathname: string): Lang =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ko';

/** 언어 접두사를 제거한 논리 경로 반환 ('/en/projects/x' → '/projects/x') */
export const stripLang = (pathname: string): string => {
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3);
  return pathname;
};

/**
 * 논리 경로를 해당 언어의 실제 경로로 변환.
 * path 예: '/', '/projects/univey', '/#career'
 */
export const localePath = (lang: Lang, path: string): string => {
  if (lang === 'ko') return path;
  if (path === '/') return '/en';
  if (path.startsWith('/#')) return `/en${path.slice(1)}`; // '/#career' → '/en#career'
  return `/en${path}`;
};

export const useLang = (): Lang => langFromPath(useLocation().pathname);
