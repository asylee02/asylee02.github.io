// 이 파일은 portfolio-resume-sync 태스크가 자동 생성합니다. 직접 수정하지 마세요.
// 수정해도 다음 동기화에서 덮어써집니다.
// 손으로 관리할 내용은 src/data/career.ts 에 쓰세요.
// generated: 2026-10-01
import type { CareerAutoEntry } from '@/types';

export const careerAuto: CareerAutoEntry[] = [
  {
    org: '(주) 마젤원',
    period: '2026.04 – 재직중',
    project: '한국선급 Navia',
    highlights: [
      '기존 인트라넷 쿠키 SSO와 공존하는 MS Entra ID 로그인 구현 — JWKS 토큰 검증, OBO로 Graph 사용자 조회 후 인트라넷 계정과 연계, 자체 access · refresh 토큰 발급',
      '임직원 전용 Navia는 Entra 로그인, 외부 회원이 포함된 KRCon은 쿠키 SSO로 사이트별 인증을 분리하고 로그인 API를 grant_type 기반 단일 엔드포인트로 통합',
      '채팅 스트리밍을 JSONL에서 SSE 표준(text/event-stream) 프레임으로 전환하고, 청크 경계에서 잘린 줄을 버퍼링해 출처가 간헐적으로 누락되던 버그 수정',
      '도메인별로 흩어진 출처 인용 규칙을 공통 프롬프트 모듈로 통합하고, 출처마다 도메인 카테고리를 실어 화면에 표시',
      'OpenAI Agents SDK의 max_turns 초과 · 토큰 한도 도달 시 에러 대신 수집한 자료로 마무리 답변을 만들고 이어서 볼 수 있도록 처리',
      '사내망에서만 규정 검색이 실패하던 원인을 tiktoken 인코딩 다운로드의 SSL 검증 실패(certifi가 사내 루트 CA를 신뢰하지 않음)로 규명',
    ],
    updatedAt: '2026-10-01',
  },
  {
    org: '(주) 마젤원',
    period: '2026.04 – 재직중',
    project: '한국선급 Navia 웹 게이트웨이',
    highlights: [
      'axios 기반 메서드별 릴레이 코드(약 560줄)를 http-proxy-middleware 단일 스트림 패스스루(약 250줄)로 교체해 쿼리 인코딩 · 헤더 유실 · 업로드 누락 결함을 일괄 제거',
      'SSE 연결을 끊지 않도록 업스트림의 첫 응답 바이트까지만 재는 타임아웃 설계',
      'POST로 시작해 GET으로 스트림을 잇는 에이전트 서버 방식에 맞춰 GET 요청의 SSE 패스스루 지원',
      '업스트림 목록만 선언하면 라우팅이 구성되도록 리팩토링',
      'Husky pre-commit 훅으로 lint · format · 타입체크 3단계 검사를 걸어 실패 시 커밋 차단',
    ],
    updatedAt: '2026-10-01',
  },
  {
    org: '(주) 마젤원',
    period: '2026.04 – 재직중',
    project: 'Teams Personal App',
    highlights: [
      'Microsoft Graph 활동 피드로 업무 업데이트 알림 MVP 구현 — 매니페스트 activityTypes 정의, app-only 토큰 발급',
      'Entra SSO 구성과 Teams 앱 manifest · env 항목을 백엔드 · 프론트엔드 개발자용 가이드로 문서화',
      'Teams 매니페스트 아이콘 · 메타데이터 규격 검증 및 아이콘 재생성',
    ],
    updatedAt: '2026-10-01',
  },
];
