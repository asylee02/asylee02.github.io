import { Link } from 'react-router-dom';

import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import { useContent } from '@/content';
import { useLang, localePath } from '@/i18n';

import type { ReactNode } from 'react';
import type { CareerProject } from '@/types';

const CardShell = ({
  to,
  children,
}: {
  to?: string;
  children: ReactNode;
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className="group flex flex-col rounded-2xl border border-hairline bg-canvas p-6 transition-colors hover:border-accent/40"
      >
        {children}
      </Link>
    );
  }
  return (
    <div className="flex flex-col rounded-2xl border border-hairline bg-canvas p-6">
      {children}
    </div>
  );
};

const CompanyProjectCard = ({
  project,
  viewDetailsLabel,
}: {
  project: CareerProject;
  viewDetailsLabel: string;
}) => {
  const lang = useLang();
  const to = project.detailSlug
    ? localePath(lang, `/projects/${project.detailSlug}`)
    : undefined;

  return (
    <CardShell to={to}>
      <h4 className="text-[17px] font-semibold tracking-tight">{project.name}</h4>
      <p className="mt-1 text-[14px] text-muted">{project.summary}</p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-[14px] leading-relaxed text-ink/80">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-parchment px-2 py-0.5 text-[12px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      {to && (
        <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-medium text-accent">
          {viewDetailsLabel}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      )}
    </CardShell>
  );
};

const CareerSection = () => {
  const { careers, ui } = useContent();

  return (
    <Section
      id="career"
      eyebrow={ui.sections.career.eyebrow}
      title={ui.sections.career.title}
      variant="parchment"
    >
      <div className="space-y-12">
        {careers.map((career) => (
          <Reveal
            key={`${career.org}-${career.period}`}
            className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-10"
          >
            <div className="md:pt-1">
              <div className="flex items-center gap-2">
                <h3 className="text-[19px] font-semibold tracking-tight">{career.org}</h3>
                {career.current && (
                  <span className="rounded-pill bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
                    {ui.career.current}
                  </span>
                )}
              </div>
              <p className="mt-1 text-[14px] text-muted">{career.role}</p>
              <p className="mt-0.5 text-[13px] text-muted">{career.period}</p>
            </div>

            <div>
              <p className="text-[16px] leading-relaxed text-ink/80">{career.description}</p>

              {career.projects && (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {career.projects.map((p) => (
                    <CompanyProjectCard
                      key={p.name}
                      project={p}
                      viewDetailsLabel={ui.career.viewDetails}
                    />
                  ))}
                </div>
              )}

              {career.reflection && (
                <div className="mt-6 rounded-2xl border-l-2 border-accent bg-canvas/60 py-4 pr-4 pl-5">
                  <p className="mb-1 text-[13px] font-semibold text-accent">
                    {ui.career.reflection}
                  </p>
                  <p className="text-[15px] leading-relaxed text-ink/75">
                    {career.reflection}
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default CareerSection;
