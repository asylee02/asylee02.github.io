export interface EducationEntry {
  name: string;
  period: string;
  category: '학력' | '교육' | '활동';
  description: string;
  badge?: string;
}

export const educations: EducationEntry[] = [
  {
    name: '명지대학교 융합소프트웨어학과',
    period: '2021 – 졸업예정',
    category: '학력',
    description:
      '융합소프트웨어를 전공하며 캡스톤 디자인(FatPet)을 비롯한 다양한 팀 프로젝트를 진행했습니다.',
  },
  {
    name: '서울청년취업사관학교 (SeSAC)',
    period: '2023.10 – 2024.02',
    category: '교육',
    description:
      'JavaScript 풀스택 개발자 부트캠프. 프론트엔드뿐 아니라 Express · Docker · SQLite · Linux를 다루며 백엔드 기초를 다졌습니다.',
  },
  {
    name: "It's Time — 대학생 연합 IT 동아리",
    period: '2023.08 – 2024.02',
    category: '활동',
    badge: '최우수상 (1등)',
    description:
      '기획 · 디자인 · 프론트엔드 · 백엔드 4개 직군이 모인 연합 동아리에서 팀장 겸 프론트엔드로 UniVey를 제작해 최종 발표회 1등, 최우수상을 수상했습니다.',
  },
  {
    name: '명지대학교 UX Media Laboratory',
    period: '2023.08 – 2023.10',
    category: '활동',
    description:
      '연구실 하계 웹 프로젝트에 프론트엔드로 참여해 React를 처음 학습하고, AI 모의 면접 서비스 ‘면접을 부탁해’를 개발했습니다. WebRTC · WebSocket 실시간 통신과 MediaPipe AI 모델을 경험했습니다.',
  },
  {
    name: 'Coin on Web — 교내 IT 동아리',
    period: '2021.04 – 2022.08 · 2024.03 –',
    category: '활동',
    description:
      'HTML · CSS · JS 웹 기초를 다진 곳입니다. 복학 후 다시 합류해 프론트엔드 직군으로 프로젝트에 참여했습니다.',
  },
];
