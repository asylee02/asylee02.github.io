// 이 파일은 portfolio-resume-sync 태스크가 자동 생성합니다. 직접 수정하지 마세요.
// 수정해도 다음 동기화에서 덮어써집니다.
// 손으로 관리할 내용은 src/content/en.ts 에 쓰세요.
// generated: 2026-10-01
import type { CareerAutoEntry } from '@/types';

export const enCareerAuto: CareerAutoEntry[] = [
  {
    org: 'Mazelone',
    period: '2026.04 – Present',
    project: 'Korean Register Navia',
    highlights: [
      'Implemented Microsoft Entra ID sign-in alongside the existing intranet cookie SSO — JWKS token validation, Graph user lookup via OBO linked to intranet accounts, and in-house access/refresh token issuance',
      'Split authentication per site — Entra sign-in for the employee-only Navia, cookie SSO for KRCon with external members — and unified the login API into a single grant_type-based endpoint',
      'Moved chat streaming from JSONL to standard SSE (text/event-stream) frames and fixed intermittently missing citations by buffering lines split across chunk boundaries',
      'Consolidated per-domain citation rules into a shared prompt module and attached a domain category to every citation shown in the UI',
      'Handled OpenAI Agents SDK max_turns and token-limit cutoffs by producing a wrap-up answer from gathered evidence instead of an error, with a way to continue',
      'Traced intranet-only regulation search failures to tiktoken encoding downloads failing SSL verification (certifi not trusting the corporate root CA)',
    ],
    updatedAt: '2026-10-01',
  },
  {
    org: 'Mazelone',
    period: '2026.04 – Present',
    project: 'Korean Register Navia Web Gateway',
    highlights: [
      'Replaced ~560 lines of axios-based per-method relay code with a single http-proxy-middleware stream pass-through (~250 lines), removing query-encoding, dropped-header, and lost-upload defects at once',
      "Designed a timeout that only measures until the upstream's first response byte so SSE connections are never cut",
      'Added SSE pass-through for GET requests to match an agent server that starts with POST and continues the stream over GET',
      'Refactored routing so that declaring an upstream list is all it takes to wire it up',
      'Set up a Husky pre-commit hook running lint, format, and type-check that blocks the commit on failure',
    ],
    updatedAt: '2026-10-01',
  },
  {
    org: 'Mazelone',
    period: '2026.04 – Present',
    project: 'Teams Personal App',
    highlights: [
      'Built an MVP of work-update notifications via the Microsoft Graph activity feed — manifest activityTypes and app-only token acquisition',
      'Documented the Entra SSO setup and Teams app manifest/env fields as guides for backend and frontend developers',
      'Validated Teams manifest icons and metadata against the spec and regenerated the icons',
    ],
    updatedAt: '2026-10-01',
  },
];
