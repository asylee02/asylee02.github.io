import { SITE_URL, OG_IMAGE } from '@/config/site';
import { localePath } from '@/i18n';

import type { Lang } from '@/types/content';

interface SeoProps {
  lang: Lang;
  title: string;
  description: string;
  /** 언어 접두사 없는 논리 경로. 예: '/', '/projects/univey' */
  path: string;
  image?: string;
  /** JSON-LD 구조화 데이터 */
  jsonLd?: Record<string, unknown>;
}

const abs = (path: string) => `${SITE_URL}${path}`;

const Seo = ({ lang, title, description, path, image, jsonLd }: SeoProps) => {
  const koUrl = abs(localePath('ko', path));
  const enUrl = abs(localePath('en', path));
  const canonical = lang === 'ko' ? koUrl : enUrl;
  const ogImage = abs(image ?? OG_IMAGE);
  const ogLocale = lang === 'ko' ? 'ko_KR' : 'en_US';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* 언어 대체 링크 (hreflang) */}
      <link rel="alternate" hrefLang="ko" href={koUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={koUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sangyeon Lee" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={ogLocale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
};

export default Seo;
