// robots.txt / sitemap.xml 생성 스크립트.
// SITE_URL 을 실제 배포 도메인으로 바꾼 뒤 `npm run gen:seo` 로 재생성하세요.
// (build 시 자동 실행됨)
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const SITE_URL = 'https://sangyeon-lee.vercel.app';

const paths = [
  '/',
  '/projects/univey',
  '/projects/fatpet',
  '/projects/document-analyzer',
  '/projects/druginfo-chatbot',
];

const enPath = (p) => (p === '/' ? '/en' : `/en${p}`);
const abs = (p) => `${SITE_URL}${p}`;

const urlEntry = (p) => {
  const ko = abs(p);
  const en = abs(enPath(p));
  const alternates = [
    `    <xhtml:link rel="alternate" hreflang="ko" href="${ko}"/>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${ko}"/>`,
  ].join('\n');
  return [ko, en]
    .map(
      (loc) =>
        `  <url>\n    <loc>${loc}</loc>\n${alternates}\n    <changefreq>monthly</changefreq>\n    <priority>${p === '/' ? '1.0' : '0.8'}</priority>\n  </url>`
    )
    .join('\n');
};

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${paths.map(urlEntry).join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '..', 'public');
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap);
writeFileSync(resolve(publicDir, 'robots.txt'), robots);
console.log('generated public/sitemap.xml and public/robots.txt for', SITE_URL);
