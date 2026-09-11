# 이상연 포트폴리오

풀스택 · AI 개발자 이상연의 개인 포트폴리오 사이트입니다.
React 19 + TypeScript + Vite + Tailwind CSS v4 로 구성된 프론트엔드 전용 프로젝트이며,
**한국어 / 영어 이중 언어**와 **검색엔진 최적화(SEO)**를 지원합니다.

## 실행

```bash
npm install
npm run dev       # 개발 서버 (http://localhost:5173)
npm run build     # sitemap 생성 + 타입 체크 + 프로덕션 빌드
npm run preview   # 빌드 결과 미리보기
npm run gen:seo   # robots.txt / sitemap.xml 수동 재생성
```

## 다국어 (i18n)

언어별로 URL이 분리됩니다 (SEO에 유리).

- 한국어: `/`, `/projects/:slug`
- 영어: `/en`, `/en/projects/:slug`

우측 상단 토글로 전환합니다. 콘텐츠는 언어별 번들로 관리합니다.

- 한국어: `src/data/*.ts` (profile / skills / career / education / projects / nav / ui)
- 영어: `src/content/en.ts` (한 파일에 전부)
- 이미지·구조는 한국어 프로젝트 데이터를 재사용하고 영어는 텍스트만 덮어씁니다.

## SEO

- 페이지마다 고유 `title` · `description` · `canonical` · `og:*` · `twitter:*` (React 19 네이티브 메타데이터)
- `hreflang` 한/영 상호 링크 + `x-default`
- JSON-LD `Person` 구조화 데이터 (홈)
- `public/robots.txt`, `public/sitemap.xml` (빌드 시 자동 생성, 언어별 alternate 포함)
- 시맨틱 HTML · 이미지 `alt` · 지연 로딩

## 배포

`main`에 push하면 `.github/workflows/pages.yml`이 빌드해 **GitHub Pages**로 배포한다.
배포 주소는 https://asylee02.github.io 다.

- Pages 소스는 저장소 Settings → Pages → Source = `GitHub Actions`
- SPA 직접 진입(`/en` 등)은 `scripts/post-build.mjs`가 만드는 `dist/404.html`이 처리한다
- `SITE_URL`은 `src/config/site.ts`와 `scripts/gen-sitemap.mjs` 두 곳에 있다

## 구조

```
src/
├── assets/         # 프로필 사진 · 프로젝트 스크린샷
├── components/
│   ├── common/     # Section, PillButton, Reveal(스크롤 애니메이션), Seo
│   ├── home/       # 메인 섹션 (Hero/Career/Projects/Skills/Education/Contact)
│   └── layout/     # Nav(언어 토글·스크롤 스파이), Footer
├── config/         # site.ts (SITE_URL 등)
├── content/        # index.ts(언어 번들 선택) · en.ts · en.auto.ts(자동 생성)
├── data/           # 한국어 콘텐츠 + ui.ts + career.auto.ts(자동 생성)
├── i18n.ts         # 언어 판별 · 경로 헬퍼 · useLang
├── layouts/        # BasicLayout
├── lib/            # cn.ts + mergeCareer.ts(사람 레이어 + 자동 레이어 병합)
├── pages/          # Home, ProjectDetail
├── types/          # 공통 타입 · content.ts
└── router.tsx      # 라우팅 (ko: / · en: /en)
```

## 남은 placeholder

- Colio 등 데모 없는 프로젝트는 제거된 상태입니다.
- 일부 GitHub `url`이 `'#'` 인 항목은 실제 주소로 교체하세요 (`data/projects.ts`, `content/en.ts`).
- 성과 수치(인식률 개선, Lighthouse 점수 등)를 알려주시면 각 프로젝트 카드/상세에 반영할 수 있습니다.
