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
          '대량 목록 요청에서 서브에이전트→루트에이전트 근거 전달이 출력 한도로 깨지던 구조를, Agents SDK run context 기반 근거 저장소와 번호(alias) 참조 방식으로 전환',
          '근거 저장 테이블을 nullable 하위호환 마이그레이션으로 추가해, 다음 턴에서 직전에 보여준 근거를 최근 4턴 범위로 복원',
          'Agents SDK가 Chat Completions 응답을 Responses 형식으로 변환하며 finish_reason을 누락하는 구조를 규명하고, 모델 가로채기 구현 후 SDK 내부 의존 위험을 근거로 철회 결정',
          '웹검색 간헐 미호출 원인을 루트 · 검색 에이전트 · Bing grounding 에이전트의 3단 LLM 판단 체인으로 규명하고, 하위 단계를 강제 검색으로 바꿔 판단 지점을 한 곳으로 축소',
          '되돌림 커밋으로 되살아난 로컬 텍스트 추출기가 HWP를 UTF-8로 읽어 업로드 전체가 500이 되던 회귀를 규명 · 복구하고 회귀 테스트 추가',
          'GHG · GA 에이전트를 인용 규칙이 다른 전용 플러그인으로 분리하고, 구 · 신 대화방이 함께 조회되도록 category 호환 처리',
          '레거시 대화의 출처 링크 깨짐을 조사해 PostgreSQL 통계(pg_stat)로 citation 테이블 과거 행 삭제를 확인',
          '외부 고객 포털 연계 SSO 구현 — form POST 연계 토큰의 서명 · iss · aud · 만료 검증, jti 1회 사용 기록, 1회용 인가 코드 교환으로 토큰을 URL에 남기지 않는 로그인 흐름, 미가입 외부 회원 자동 가입',
          '근거 저장소를 Root가 필요할 때만 DB에서 run context로 올리고 하위 에이전트가 항상 이를 참조하도록 재설계해, 이어보기 · 번호 지정 후속 질문에서 재검색 제거',
          '같은 문서를 다시 읽으면 앞 발췌를 덮어쓰던 근거 저장소를 문서별 발췌 누적 구조로 바꾸고, 포함 관계인 중복 발췌는 제거',
          '단독 답변자와 상위 에이전트의 조사원 역할을 구분해 단일 KB 플러그인(HR · Sage · GHG · GPT Clone)에 근거 저장소 확대 적용',
          'Convention · IMO · GHG · Rule 4개 KB 하위 에이전트를 한 채팅에서 동시 선택하는 신규 외부 고객용 서비스의 슈퍼 에이전트 플러그인 구축',
          '문서 단위 IMO 색인을 청킹 · 벡터 필드 · 시맨틱 리랭킹 인덱스로 재설계하고, 전체 색인 전 원본 API로 38,317건 · 616,762페이지를 전수 점검해 규모와 비용 산정',
          '벡터라이저 401/403 원인을 임시 인덱스 실험으로 규명하고, IMO 전용 청킹 대신 공통 문서 파싱 파이프라인으로 전환',
          '고객사가 별도 저장소에서 공용 모듈을 우회해 만든 법령 에이전트를 핵심 파일 영향 없이 단독 에이전트로 분리 통합하고 부서 단위 접근 제한 적용',
          '플랫폼별 에이전트 카탈로그 API 리팩토링 — 언어 · 부서 노출 조건(jsonb), 플랫폼 테이블 신설, 관리 API 분리, 미설정 시 기존 동작 유지',
          '관리 콘솔에 에이전트 · 플랫폼 관리 화면 구현, KB 에이전트 시드와 Chat/Agent 대분류 마이그레이션 및 영향 범위 전수조사',
          'KB Factory 하위 에이전트의 모델 설정 주입을 RunConfigProvider 하나로 통일해, 실행 경로에 따라 기본 OpenAI 설정으로 떨어지던 위험 제거',
        ],
      },
      {
        name: '한국선급 Navia 웹 게이트웨이',
        summary: 'SPA 서빙과 다중 백엔드 리버스 프록시를 담당하는 Express 게이트웨이',
        tech: ['Node.js', 'Express', 'SSE', 'CORS'],
        highlights: [
          'SPA 정적 서빙과 API · 에이전트 · HR 3개 업스트림 리버스 프록시 구성',
          'CORS Origin 화이트리스트 도입 — 요청자가 보낸 Origin 헤더를 그대로 허용하던 설정을 환경변수 목록 대조 방식으로 교체',
          '업스트림 헤더 패스스루 규약 정리 및 SSE 스트리밍 통과 처리',
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
