import type { CareerAutoEntry, CareerEntry } from '@/types';

/**
 * 사람이 관리하는 경력 데이터에 자동 생성 레이어를 병합한다.
 * 자동 항목은 기존 highlights 뒤에 덧붙이며, 원본은 변형하지 않는다.
 * 매칭 키는 org + period + project.name 이다.
 */
export const mergeCareer = (
  base: CareerEntry[],
  auto: CareerAutoEntry[],
): CareerEntry[] =>
  base.map((entry) => ({
    ...entry,
    projects: entry.projects?.map((project) => {
      const extra = auto.find(
        (a) =>
          a.org === entry.org &&
          a.period === entry.period &&
          a.project === project.name,
      );
      if (!extra) return project;
      return { ...project, highlights: [...project.highlights, ...extra.highlights] };
    }),
  }));
