import { Link } from 'react-router-dom';

import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import { useContent } from '@/content';
import { useLang, localePath } from '@/i18n';

import type { Lang } from '@/types/content';
import type { Project } from '@/types';

const FeaturedCard = ({
  project,
  lang,
  viewDetailsLabel,
}: {
  project: Project;
  lang: Lang;
  viewDetailsLabel: string;
}) => {
  return (
    <Link
      to={localePath(lang, `/projects/${project.slug}`)}
      className="group grid overflow-hidden rounded-3xl border border-hairline bg-canvas transition-transform duration-300 hover:-translate-y-1 md:grid-cols-2"
    >
      <div className="flex items-center justify-center overflow-hidden bg-parchment p-8">
        <img
          src={project.thumbnail}
          alt={project.name}
          className="max-h-64 w-full rounded-xl object-contain shadow-[var(--shadow-product)] transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10">
        <p className="text-[13px] font-semibold text-accent">{project.role}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 text-[15px] text-muted">{project.tagline}</p>
        <p className="mt-4 text-[16px] leading-relaxed text-ink/80">{project.summary}</p>
        <span className="mt-6 inline-flex items-center gap-1 text-[15px] font-medium text-accent">
          {viewDetailsLabel}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
};

const ProjectsSection = () => {
  const lang = useLang();
  const { projects, ui } = useContent();
  const featured = projects.filter((p) => p.kind !== 'work' && p.thumbnail);

  return (
    <Section
      id="projects"
      eyebrow={ui.sections.projects.eyebrow}
      title={ui.sections.projects.title}
      description={ui.sections.projects.description}
      variant="canvas"
    >
      <div className="space-y-8">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 90}>
            <FeaturedCard
              project={project}
              lang={lang}
              viewDetailsLabel={ui.career.viewDetails}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
