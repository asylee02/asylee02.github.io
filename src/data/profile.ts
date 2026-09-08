import profileImg from '@/assets/profile.jpg';

import type { Profile } from '@/types/content';

export const profile: Profile = {
  name: '이상연',
  greeting: '안녕하세요, 이상연입니다.',
  headline: '프론트엔드에서 시작해 백엔드와 AI까지, 서비스 전체를 만드는 개발자입니다.',
  role: '풀스택 · AI 개발자',
  photo: profileImg,
  intro: [
    'React · TypeScript 기반의 프론트엔드로 커리어를 시작해, C# · FastAPI 백엔드와 RAG 챗봇 · AI 에이전트 · OCR 문서 처리까지 영역을 넓혀 왔습니다. 화면에서 서버, 그리고 AI 모델 연동까지 서비스의 전 구간을 직접 설계하고 구현합니다.',
    '스스로 고민하여 답을 찾고, 그렇게 찾은 답에 책임을 다하는 ‘믿을만한 사람’이 되기 위해 노력합니다. 내가 아는 것, 부족한 것, 해야 할 것을 스스로 파악하고 계획하며 탐구하는 과정을 즐깁니다.',
  ],
  strengths: [
    {
      title: '프론트엔드 엔지니어링',
      desc: 'React · TypeScript UI 개발, Angular→React 등 레거시 마이그레이션, SSE 스트리밍 처리와 Lighthouse 기반 성능 최적화',
    },
    {
      title: '백엔드 · 풀스택',
      desc: 'C# .NET과 FastAPI로 API 설계부터 인증 · 비즈니스 로직까지, 프론트와 백엔드를 오가는 end-to-end 개발',
    },
    {
      title: 'AI · LLM 서비스',
      desc: 'RAG 챗봇, MCP · A2A 기반 AI 에이전트 설계, Azure OpenAI를 활용한 도메인 특화 LLM 서비스 구축',
    },
    {
      title: '문서 처리 · OCR',
      desc: 'Azure Document Intelligence와 Chandra OCR 커스텀 학습으로 한국어 · 손글씨까지 아우르는 비정형 문서 정형화',
    },
  ],
  birth: '2002.03.26',
  contacts: [
    { label: '이메일', value: 'asylee02@naver.com', href: 'mailto:asylee02@naver.com' },
    { label: '전화', value: '010-3815-8255', href: 'tel:+821038158255' },
    {
      label: 'GitHub',
      value: 'github.com/asylee02',
      href: 'https://github.com/asylee02',
    },
    {
      label: 'Velog',
      value: 'velog.io/@asylee02',
      href: 'https://velog.io/@asylee02/posts',
    },
  ],
};
