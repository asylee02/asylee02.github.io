import type { CareerEntry } from '@/types';

export const careers: CareerEntry[] = [
  {
    org: '(주) 마젤원',
    role: '풀스택 & AI 개발자',
    period: '2026.04 – 재직중',
    current: true,
    description:
      '풀스택 & AI 개발자로 복귀해 AI 에이전트와 문서 처리 파이프라인 등 회사의 핵심 AI 제품을 프론트엔드부터 백엔드, 모델 연동까지 전 구간에 걸쳐 개발하고 있습니다.',
    projects: [
      {
        name: 'Outlook Agent 개발',
        summary: 'M365 Agents Toolkit 기반 Outlook 내장 AI 에이전트',
        tech: ['TypeScript', 'React', 'M365 Agents Toolkit', 'Azure AOAI'],
        highlights: [
          'VS Code의 M365 Agents Toolkit을 이용한 Outlook Agent 설계 · 개발',
          '메일 초안 작성 · 번역 · 반복 업무 자동화 등 에이전트 기능 구현',
          '프론트엔드와 백엔드를 모두 담당하는 end-to-end 개발',
        ],
      },
      {
        name: 'Document Analyzer',
        summary: '비정형 문서를 정형 문서로 변환하는 문서 처리 시스템',
        detailSlug: 'document-analyzer',
        tech: ['Python', 'FastAPI', 'Azure Document Intelligence', 'Chandra OCR', 'Docker'],
        highlights: [
          'PDF → 정형 문서 변환 파이프라인 담당',
          '일반 문서 · 스캔본, 한국어 · 손글씨 여부에 따라 문서를 분류하고 여러 OCR 모델 중 최적 모델을 선택하는 라우팅 알고리즘 개발',
          'Chandra OCR을 로컬 환경에 구축하고 한국어 손글씨 데이터를 학습시켜 인식률 개선',
        ],
      },
      {
        name: '한국선급 Navia',
        summary: 'MCP · A2A 기반 AI 에이전트 플랫폼',
        tech: ['TypeScript', 'React', 'MCP', 'A2A', 'FastAPI'],
        highlights: [
          'MCP(Model Context Protocol) 및 A2A(Agent-to-Agent) 아키텍처 분석 · 설계 · 개발',
          '에이전트 간 협업 구조를 서비스에 적용',
        ],
      },
      {
        name: 'Teams Personal App',
        summary: 'Microsoft Teams 내장 사내 애플리케이션',
        tech: ['TypeScript', 'React', 'Teams Toolkit'],
        highlights: ['사내 서비스를 Teams 안에서 바로 사용할 수 있는 Personal App 개발'],
      },
    ],
  },
  {
    org: '(주) 비트컴퓨터',
    role: '풀스택 개발자',
    period: '2025.08 – 2026.01',
    description:
      '국내 대표 의약품 정보 서비스 ‘드럭인포’ 웹사이트와 병원 대상 프로그램을 담당했습니다. C# .NET 기반 레거시 시스템을 유지보수하며, 의료 도메인의 신규 기능과 AI 서비스를 개발했습니다.',
    projects: [
      {
        name: 'DUR 복약 지도 · 투여 감사 시스템',
        summary: '심평원 DUR API 기반 처방 안전성 검증 기능',
        tech: ['C#', '.NET 4.8', 'Azure'],
        highlights: [
          '심평원 DUR API를 활용한 복약 지도문 · 스크리닝 · 투여 감사 기능 신규 개발',
          '환자가 투여받은 약품 간 호환성(병용 금기 등) 검사 로직 구현',
          '환자 정보에 따라 투약 약품이 정상 처방되었는지 검증하는 감사 시스템 구축',
        ],
      },
      {
        name: '드럭인포 약품 식별 챗봇',
        summary: 'OCR + LLM으로 사진 한 장으로 약품을 식별하는 AI 챗봇',
        detailSlug: 'druginfo-chatbot',
        tech: ['Azure AOAI', 'Azure Document Intelligence', 'C#', '.NET 4.8'],
        highlights: [
          'Azure Document Intelligence OCR로 약품 사진에서 색상 · 각인 · 모양 · 문자를 추출해 DB의 약품 정보와 매칭하는 식별 기능 개발',
          'Azure OpenAI 기반 챗봇으로 식별된 약품의 설명과 대체 약품 안내 제공',
        ],
      },
      {
        name: '드럭인포 웹 서비스 유지보수',
        summary: '의약품 정보 웹사이트 및 병원 대상 프로그램 운영',
        tech: ['C#', '.NET 4.8', 'Azure'],
        highlights: [
          '드럭인포 웹사이트 유지보수 및 신규 기능 추가',
          'Azure 리소스 기반 인프라 운영',
        ],
      },
    ],
  },
  {
    org: '(주) 마젤원',
    role: '프론트엔드 개발자',
    period: '2024.11 – 2025.07',
    description:
      '사내 유일 프론트엔드 개발자로서 RAG 기반 LLM 챗봇, 백오피스, Office Add-in 등 전 프로젝트의 프론트엔드를 담당했습니다. 레거시 마이그레이션과 성능 최적화로 사용자 경험을 개선했습니다.',
    projects: [
      {
        name: '한국선급 LLM 챗봇',
        summary: '사내 자체 RAG 기반 한국선급 전용 커스텀 챗봇',
        tech: ['TypeScript', 'React', 'Angular', 'TanStack Query', 'MSW', 'Azure'],
        highlights: [
          'Angular → React 전면 마이그레이션',
          'SSE 스트리밍 통신 파싱 및 연결 최적화',
          '50,000개 이상의 사내 문서 트리 구조 재구성',
          'TanStack Query 및 로직 재구성으로 리소스 최적화, Auth 로직 재구성',
          'Lighthouse 기반 웹 성능 최적화, Azure Pipeline CI/CD 구축',
        ],
      },
      {
        name: 'M365 계정 생성 플랫폼',
        summary: '공공기관 대상 Microsoft 계정 생성 백오피스',
        tech: ['TypeScript', 'React', 'TanStack Query', 'Azure'],
        highlights: [
          '라이선스 할당 · 사원 DB 업로드 · 직원 및 관리자 CRUD 등 백오피스 전반 개발',
        ],
      },
      {
        name: 'Outlook Add-in',
        summary: 'Outlook Copilot을 사내 RAG LLM으로 대체한 Add-in',
        tech: ['TypeScript', 'React', 'Vite', 'teams-toolkit'],
        highlights: [
          '사내 RAG 기반 LLM 챗봇 · 문서 요약 기능을 Outlook에 제공',
          'JS + Webpack 레거시 세팅을 TS + React + Vite로 마이그레이션',
        ],
      },
      {
        name: 'GPT Clone · Document Analyzer 뷰어',
        summary: '기관별 맞춤 GPT 인터페이스와 문서 분석 뷰어',
        tech: ['TypeScript', 'React', 'react-konva', 'Azure TTS/STT'],
        highlights: [
          '기관별 맞춤 인터페이스의 GPT Clone 개발 (TTS/STT · 캔버스 편집 · 글자 애니메이션 · SSE 파싱)',
          '문서 분석기 결과를 Markdown 파싱 · 재가공해 보여주는 뷰어 개발',
        ],
      },
    ],
  },
];
