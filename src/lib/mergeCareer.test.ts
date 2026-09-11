import { describe, expect, it } from 'vitest';

import { mergeCareer } from './mergeCareer';

import type { CareerAutoEntry, CareerEntry } from '@/types';

const base: CareerEntry[] = [
  {
    org: '(주) 마젤원',
    role: '풀스택 & AI 개발자',
    period: '2026.04 – 재직중',
    description: '설명',
    projects: [
      { name: '한국선급 Navia', summary: '요약', tech: ['React'], highlights: ['기존 A'] },
      { name: 'Teams Personal App', summary: '요약', tech: ['React'], highlights: ['기존 B'] },
    ],
  },
  {
    org: '(주) 마젤원',
    role: '프론트엔드 개발자',
    period: '2024.11 – 2025.07',
    description: '설명',
    projects: [
      { name: '한국선급 LLM 챗봇', summary: '요약', tech: ['React'], highlights: ['기존 C'] },
    ],
  },
  { org: '(주) 비트컴퓨터', role: '풀스택 개발자', period: '2025.08 – 2026.01', description: '설명' },
];

describe('mergeCareer', () => {
  it('매칭되는 프로젝트의 highlights 뒤에 자동 항목을 덧붙인다', () => {
    const auto: CareerAutoEntry[] = [
      {
        org: '(주) 마젤원',
        period: '2026.04 – 재직중',
        project: '한국선급 Navia',
        highlights: ['자동 1', '자동 2'],
        updatedAt: '2026-W37',
      },
    ];

    const merged = mergeCareer(base, auto);

    expect(merged[0].projects?.[0].highlights).toEqual(['기존 A', '자동 1', '자동 2']);
  });

  it('매칭되지 않는 프로젝트는 원본을 그대로 둔다', () => {
    const auto: CareerAutoEntry[] = [
      {
        org: '(주) 마젤원',
        period: '2026.04 – 재직중',
        project: '한국선급 Navia',
        highlights: ['자동 1'],
        updatedAt: '2026-W37',
      },
    ];

    const merged = mergeCareer(base, auto);

    expect(merged[0].projects?.[1].highlights).toEqual(['기존 B']);
  });

  it('org 가 같아도 period 가 다르면 섞지 않는다', () => {
    const auto: CareerAutoEntry[] = [
      {
        org: '(주) 마젤원',
        period: '2024.11 – 2025.07',
        project: '한국선급 LLM 챗봇',
        highlights: ['구 재직기 자동'],
        updatedAt: '2026-W37',
      },
    ];

    const merged = mergeCareer(base, auto);

    expect(merged[1].projects?.[0].highlights).toEqual(['기존 C', '구 재직기 자동']);
    expect(merged[0].projects?.[0].highlights).toEqual(['기존 A']);
  });

  it('projects 가 없는 경력 항목도 안전하게 통과시킨다', () => {
    const merged = mergeCareer(base, []);

    expect(merged[2].projects).toBeUndefined();
    expect(merged).toHaveLength(3);
  });

  it('원본 배열과 객체를 변형하지 않는다', () => {
    const auto: CareerAutoEntry[] = [
      {
        org: '(주) 마젤원',
        period: '2026.04 – 재직중',
        project: '한국선급 Navia',
        highlights: ['자동 1'],
        updatedAt: '2026-W37',
      },
    ];

    mergeCareer(base, auto);

    expect(base[0].projects?.[0].highlights).toEqual(['기존 A']);
  });
});
