import uniHero from '@/assets/projects/univey/hero.jpg';
import uniMain from '@/assets/projects/univey/main.jpg';
import uniFlow from '@/assets/projects/univey/flow.jpg';
import uniSurveyInfo from '@/assets/projects/univey/survey-info.jpg';
import uniSurveyQuestions from '@/assets/projects/univey/survey-questions.jpg';
import uniQr from '@/assets/projects/univey/qr.jpg';
import uniSurveyList from '@/assets/projects/univey/survey-list.jpg';
import uniParticipate from '@/assets/projects/univey/participate.jpg';
import uniResultBar from '@/assets/projects/univey/result-bar.jpg';
import uniResultMixed from '@/assets/projects/univey/result-mixed.jpg';
import uniResultPie from '@/assets/projects/univey/result-pie.jpg';
import uniTrend from '@/assets/projects/univey/trend.jpg';
import uniMypagePoint from '@/assets/projects/univey/mypage-point.jpg';

import fatHero from '@/assets/projects/fatpet/hero.jpg';
import fatScreens1 from '@/assets/projects/fatpet/screens-1.jpg';
import fatScreens2 from '@/assets/projects/fatpet/screens-2.jpg';

import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'univey',
    name: 'UniVey',
    tagline: '대학생을 위한 설문조사 웹 서비스',
    summary: 'GPT 추천 질문과 다양한 차트로 설문을 쉽게 만들고 분석하는 플랫폼',
    period: '2023.10.01 – 2024.02.03',
    team: '기획 1 · 디자인 1 · 프론트엔드 2 · 백엔드 2',
    role: '프론트엔드',
    accent: 'light',
    thumbnail: uniMain,
    hero: uniHero,
    overview:
      '설문을 만들고 공유하고 참여하는 전 과정을 담은 대학생 대상 설문조사 웹 서비스입니다. GPT API로 문항 작성을 돕고, 설문 결과를 다양한 그래프로 시각화하며, QR 코드를 커스텀해 손쉽게 공유할 수 있습니다.',
    responsibilities: [
      '메인 페이지 · 마이페이지 개발',
      '설문 결과 차트 생성',
      'QR 코드 커스텀 기능',
      '트렌드 추천 페이지 · 설문 목록 조회 페이지',
      '메인 · 트렌드 페이지 슬라이드 이미지',
    ],
    features: [
      'GPT API를 이용한 추천 질문 생성',
      '설문 결과를 사용자에 맞춘 다양한 차트화',
      'QR 코드 커스텀을 이용한 설문조사 공유',
    ],
    techStack: [
      {
        label: 'Frontend',
        items: ['HTML5', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'React Query', 'Recoil', 'Amplify'],
      },
      { label: 'Backend', items: ['Spring', 'Amazon EC2', 'MySQL'] },
      { label: 'Etc', items: ['Figma', 'GitHub'] },
    ],
    screenshots: [
      { src: uniMain, caption: '메인 화면', description: 'AI 문항 가이드와 이달의 인기 설문 트렌드를 한눈에.' },
      { src: uniFlow, caption: '설문 생성 플로우', description: '정보 입력 → 문항 작성 → QR 생성의 3단계 흐름.' },
      { src: uniSurveyInfo, caption: '설문 정보 입력', description: '설문 조사에 필요한 기본 정보를 입력합니다.' },
      { src: uniSurveyQuestions, caption: '설문 문항 작성', description: '직접 작성하거나 AI 추천 질문을 활용해 문항을 구성합니다.' },
      { src: uniQr, caption: 'QR 생성', description: '원하는 형태로 커스텀한 QR 코드를 생성해 공유합니다.' },
      { src: uniSurveyList, caption: '설문 보기 & 검색', description: '카테고리 · 진행 여부 · 최신순 필터로 설문을 조회합니다.' },
      { src: uniParticipate, caption: '설문 참여', description: '설문에 참여하면 포인트를 획득하는 구조입니다.' },
      { src: uniResultBar, caption: '설문 결과 — 막대 그래프', description: '문항별 응답을 다양한 그래프로 확인합니다.' },
      { src: uniResultPie, caption: '설문 결과 — 원형 차트', description: '응답 비율을 원형 차트와 추이 그래프로 시각화합니다.' },
      { src: uniResultMixed, caption: '설문 결과 — 종합 차트', description: '차트 유형을 선택해 결과를 다각도로 분석합니다.' },
      { src: uniTrend, caption: '트렌드', description: '최근 가장 인기 있는 설문조사를 모아 보여줍니다.' },
      { src: uniMypagePoint, caption: '마이페이지 — 포인트', description: '만든 설문 · 참여한 설문 · 포인트를 조회합니다.' },
    ],
    links: [
      { label: '서비스 바로가기', url: 'https://www.univey.net' },
      { label: 'GitHub', url: 'https://github.com/asylee02/Univey_Front' },
    ],
  },
  {
    slug: 'fatpet',
    name: 'FatPet',
    tagline: 'XGBoost와 ChatGPT를 활용한 반려동물 비만도 진단 및 관리 서비스',
    summary: 'AI로 반려동물의 비만도를 측정하고 맞춤 솔루션을 제공하는 서비스',
    period: '2024.03 – 2024.06',
    team: '프론트엔드 1 · 백엔드 1 · AI 2',
    role: '프론트엔드',
    accent: 'dark',
    thumbnail: fatHero,
    hero: fatHero,
    overview:
      '반려동물의 비만도를 AI로 측정하고 관리하는 서비스입니다. XGBoost 모델로 비만도를 진단하고, ChatGPT로 종·무게·비만도에 맞는 솔루션을 제공하며, 결과를 저장하고 차트로 확인할 수 있습니다.',
    responsibilities: [
      '프론트엔드 전반 개발',
      'AI 진단 결과 · 솔루션 화면 구성',
      '검사 결과 차트 시각화',
      'React Hook Form 기반 진단 정보 입력 폼',
    ],
    features: [
      'AI 모델을 통한 반려동물 비만도 측정',
      '검사 결과에 동일 종 평균 무게 · 적정 일일 칼로리 제공',
      '종 · 무게 · 비만도에 따른 맞춤 솔루션 제공',
      '결과와 솔루션을 저장하고 차트화해 제공',
    ],
    techStack: [
      {
        label: 'Frontend',
        items: ['HTML5', 'CSS', 'JavaScript', 'TypeScript', 'React', 'TailwindCSS', 'React Hook Form', 'Amplify'],
      },
      {
        label: 'Backend',
        items: ['Kotlin', 'SpringBoot', 'MySQL', 'Swagger', 'GitHub Actions', 'Docker', 'Amazon EC2'],
      },
      { label: 'AI', items: ['Python', 'Flask', 'Amazon EC2'] },
      { label: 'Etc', items: ['Figma', 'GitHub'] },
    ],
    screenshots: [
      { src: fatHero, caption: '서비스 소개', description: '“혹시, 우리 집 강아지도 비만일까?” — 반려동물 비만도를 진단해 보세요.' },
      { src: fatScreens1, caption: '회원가입 · 펫 등록 · 대시보드', description: '로그인 후 반려동물을 등록하고 대시보드에서 관리합니다.' },
      { src: fatScreens2, caption: '진단 정보 입력 · AI 진단 결과', description: '체중 · 둘레 정보를 입력하면 AI가 비만도와 솔루션을 진단합니다.' },
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/asylee02/fatpet-client' }],
  },
  {
    slug: 'document-analyzer',
    name: 'Document Analyzer',
    tagline: '비정형 문서를 정형 문서로 — OCR 모델 라우팅 파이프라인',
    summary: '문서 특성을 분류해 최적의 OCR 모델로 라우팅하고, 한국어 손글씨는 직접 학습시킨 모델로 처리',
    period: '2026.04 – 진행중',
    team: '(주) 마젤원 · 사내 프로젝트',
    role: '풀스택 · AI (PDF 정형화 파이프라인 담당)',
    accent: 'dark',
    kind: 'work',
    overview:
      '비정형 문서를 정형 문서로 변환하는 사내 문서 처리 시스템입니다. 이 중 PDF를 정형 문서로 변환하는 파이프라인을 담당했습니다. PDF는 일반 텍스트 문서와 스캔본으로 나뉘고, 다시 한국어 여부 · 손글씨 여부에 따라 특성이 달라지기 때문에, 단일 OCR 모델로는 모든 케이스에서 좋은 품질을 내기 어렵습니다. 문서 특성을 분류한 뒤 여러 OCR 모델 중 최적의 모델을 선택하는 라우팅 알고리즘을 설계했습니다.',
    responsibilities: [
      'PDF → 정형 문서 변환 파이프라인 설계 · 개발',
      '문서 분류 및 OCR 모델 라우팅 알고리즘 개발',
      'Chandra OCR 로컬 구축 및 한국어 손글씨 데이터 학습',
    ],
    features: [
      '일반 문서 · 스캔본 자동 분류',
      '한국어 · 손글씨 여부에 따른 OCR 모델 라우팅',
      '한국어 손글씨 특화 커스텀 OCR 모델',
    ],
    techStack: [
      { label: 'AI · Backend', items: ['Python', 'FastAPI', 'Azure Document Intelligence', 'Chandra OCR', 'Docker'] },
    ],
    pipeline: {
      title: 'PDF 정형화 파이프라인',
      steps: [
        { label: '문서 입력', desc: 'PDF 업로드' },
        { label: '문서 분류', desc: '일반 문서 vs 스캔본, 한국어 · 손글씨 여부 판별' },
        { label: 'OCR 라우팅', desc: '문서 특성에 맞는 최적 OCR 모델 선택' },
        { label: '텍스트 추출', desc: 'Azure DI · Chandra OCR 등 모델별 처리' },
        { label: '정형화', desc: '구조화된 정형 문서로 변환 · 출력' },
      ],
    },
    details: [
      {
        heading: '문제 — 하나의 OCR로는 부족하다',
        body: [
          '실무에서 들어오는 PDF는 형태가 제각각입니다. 텍스트 레이어가 있는 일반 문서, 이미지뿐인 스캔본, 영문 인쇄체, 한국어 문서, 그리고 가장 까다로운 한국어 손글씨까지. 특정 유형에 강한 OCR 모델이 다른 유형에서는 크게 무너지는 문제가 있었습니다.',
        ],
      },
      {
        heading: '접근 — 분류하고, 라우팅하고, 부족하면 직접 학습시킨다',
        body: [
          '문서를 먼저 일반 문서 / 스캔본으로 나누고, 한국어 여부와 손글씨 여부까지 판별한 뒤, 각 조합에 가장 성능이 좋은 OCR 모델로 라우팅하는 알고리즘을 개발했습니다.',
          '특히 한국어 손글씨는 기존 상용 모델의 성능이 충분하지 않아, Chandra OCR을 로컬 환경에 직접 구축하고 한국어 손글씨 데이터를 학습시켜 해당 케이스의 인식 품질을 끌어올렸습니다.',
        ],
      },
    ],
    screenshots: [],
    links: [],
  },
  {
    slug: 'druginfo-chatbot',
    name: '드럭인포 약품 식별 챗봇',
    tagline: '사진 한 장으로 약품을 식별하는 OCR + LLM 챗봇',
    summary: '알약 사진에서 색상 · 각인 · 모양을 추출해 DB와 매칭하고, LLM이 설명과 대체 약품을 안내',
    period: '2025.08 – 2026.01',
    team: '(주) 비트컴퓨터 · 사내 프로젝트',
    role: '풀스택 개발자',
    accent: 'dark',
    kind: 'work',
    overview:
      '포장이 없는 낱알 약품은 일반인이 무슨 약인지 식별하기 어렵습니다. 사용자가 약품 사진을 찍으면 Azure Document Intelligence OCR로 색상 · 각인 문자 · 모양 등의 물리적 특징을 추출하고, 이를 드럭인포 DB의 약품 정보와 매칭해 어떤 약품인지 판별합니다. 이어서 Azure OpenAI 기반 챗봇이 해당 약품의 효능 · 주의사항 설명과 대체 약품 안내까지 제공합니다.',
    responsibilities: [
      '약품 사진 → OCR 특징 추출 → DB 매칭 식별 로직 개발',
      'Azure OpenAI 기반 약품 안내 챗봇 개발',
      '드럭인포 웹 서비스와의 연동',
    ],
    features: [
      '사진 기반 약품 식별 (색상 · 각인 · 모양 · 문자 매칭)',
      '식별된 약품의 효능 · 주의사항 안내',
      '대체 약품 추천',
    ],
    techStack: [
      { label: 'AI', items: ['Azure OpenAI', 'Azure Document Intelligence'] },
      { label: 'Backend', items: ['C#', '.NET 4.8', 'Azure'] },
    ],
    pipeline: {
      title: '약품 식별 파이프라인',
      steps: [
        { label: '사진 촬영', desc: '사용자가 약품 사진 업로드' },
        { label: 'OCR 추출', desc: 'Azure DI로 색상 · 각인 · 모양 · 문자 추출' },
        { label: 'DB 매칭', desc: '드럭인포 약품 DB와 특징 대조' },
        { label: '약품 식별', desc: '후보 약품 판별' },
        { label: 'LLM 안내', desc: 'Azure OpenAI 챗봇이 설명 · 대체 약품 안내' },
      ],
    },
    details: [
      {
        heading: '문제 — 포장 없는 약, 뭔지 알 수 없다',
        body: [
          '약포지에 담긴 낱알 약품이나 보관 중 포장이 사라진 약은 일반인이 식별할 방법이 마땅치 않습니다. 잘못 복용하면 안전 문제로 직결되는 의료 도메인 특성상, 정확한 식별과 신뢰할 수 있는 안내가 핵심 과제였습니다.',
        ],
      },
      {
        heading: '접근 — 물리적 특징을 데이터로 바꿔 매칭한다',
        body: [
          '약품의 물리적 특징(색상 · 각인 문자 · 모양)을 Azure Document Intelligence OCR로 추출해 구조화된 데이터로 만들고, 드럭인포가 보유한 약품 DB와 매칭하는 식별 로직을 개발했습니다.',
          '식별 이후에는 Azure OpenAI 기반 챗봇이 약품 설명과 대체 약품을 안내하되, 근거 데이터는 DB에서 가져와 의료 정보의 정확성을 지키도록 설계했습니다.',
        ],
      },
    ],
    screenshots: [],
    links: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
