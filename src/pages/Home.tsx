import Seo from '@/components/common/Seo';
import Hero from '@/components/home/Hero';
import CareerSection from '@/components/home/CareerSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import SkillsSection from '@/components/home/SkillsSection';
import EducationSection from '@/components/home/EducationSection';
import ContactSection from '@/components/home/ContactSection';
import { useContent } from '@/content';
import { useLang, localePath } from '@/i18n';
import { SITE_URL, OG_IMAGE } from '@/config/site';

const Home = () => {
  const lang = useLang();
  const { profile, ui } = useContent();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    description: ui.metaDescription,
    url: `${SITE_URL}${localePath(lang, '/')}`,
    image: `${SITE_URL}${OG_IMAGE}`,
    email: 'asylee02@naver.com',
    sameAs: profile.contacts
      .filter((c) => c.href.startsWith('http'))
      .map((c) => c.href),
  };

  return (
    <>
      <Seo
        lang={lang}
        title={ui.metaTitle}
        description={ui.metaDescription}
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <CareerSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
};

export default Home;
