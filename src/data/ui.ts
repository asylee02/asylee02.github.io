import type { Ui } from '@/types/content';

export const ui: Ui = {
  langToggle: 'EN',
  metaTitle: '이상연 · 풀스택 & AI 개발자',
  metaDescription:
    '프론트엔드에서 시작해 백엔드와 AI까지, 서비스 전체를 만드는 개발자 이상연의 포트폴리오. React · TypeScript · C# · FastAPI · Azure OpenAI · OCR.',
  hero: {
    primaryCta: '프로젝트 보기',
    secondaryCta: '연락하기',
    photoAlt: '이상연 프로필 사진',
  },
  sections: {
    career: { eyebrow: 'Career', title: '경력' },
    projects: {
      eyebrow: 'Projects',
      title: '프로젝트',
      description:
        '기획부터 배포까지, 직접 고민하고 만든 프로젝트들입니다. 회사 프로젝트 딥다이브는 경력 섹션의 카드에서 볼 수 있습니다.',
    },
    skills: {
      eyebrow: 'Skills',
      title: '기술',
      description: '막대는 숙련도(하 · 중 · 상)를 나타냅니다.',
    },
    education: { eyebrow: 'Education & Activities', title: '교육 · 활동' },
    contact: {
      eyebrow: 'Contact',
      title: '연락',
      description: '함께 이야기 나누고 싶으시다면 언제든 연락 주세요.',
    },
  },
  career: {
    current: '재직중',
    reflection: '느낀점',
    viewDetails: '자세히 보기',
  },
  detail: {
    workBadge: '회사 프로젝트',
    overview: '프로젝트 소개',
    role: '담당 역할',
    features: '핵심 기능',
    techStack: '기술 스택',
    screens: '화면 소개',
    backToProjects: '프로젝트 목록',
    backToCareer: '경력으로 돌아가기',
    moreProjects: '다른 프로젝트 보기',
    step: 'STEP',
    period: '개발 기간',
    team: '개발 인원',
    teamLabelWork: '소속',
    position: '담당 포지션',
  },
};
