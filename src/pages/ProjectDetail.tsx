import { Link, Navigate, useParams } from 'react-router-dom';

import { cn } from '@/lib/cn';
import PillButton from '@/components/common/PillButton';
import Reveal from '@/components/common/Reveal';
import Seo from '@/components/common/Seo';
import { useContent } from '@/content';
import { useLang, localePath } from '@/i18n';

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <dt className="text-[13px] text-muted">{label}</dt>
    <dd className="mt-1 text-[15px] font-medium text-ink">{value}</dd>
  </div>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const lang = useLang();
  const { projects, profile, ui } = useContent();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to={localePath(lang, '/')} replace />;
  }

  const isDark = project.accent === 'dark';
  const isWork = project.kind === 'work';
  const backPath = localePath(lang, isWork ? '/#career' : '/#projects');
  const backLabel = isWork ? ui.detail.backToCareer : ui.detail.backToProjects;

  return (
    <article>
      <Seo
        lang={lang}
        title={`${project.name} · ${profile.name}`}
        description={project.summary}
        path={`/projects/${project.slug}`}
        image={project.hero}
      />

      {/* Hero */}
      <header
        className={cn(
          'px-5 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-20',
          isDark ? 'bg-ink text-white' : 'bg-parchment text-ink'
        )}
      >
        <div className="mx-auto max-w-5xl">
          <Link
            to={backPath}
            className={cn(
              'inline-flex items-center gap-1 text-[14px] transition-colors',
              isDark ? 'text-white/60 hover:text-white' : 'text-muted hover:text-ink'
            )}
          >
            ← {backLabel}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <p
              className={cn(
                'text-[15px] font-semibold',
                isDark ? 'text-accent-sky' : 'text-accent'
              )}
            >
              {project.role}
            </p>
            {isWork && (
              <span
                className={cn(
                  'rounded-pill px-2.5 py-0.5 text-[12px] font-semibold',
                  isDark ? 'bg-white/10 text-white/80' : 'bg-ink/5 text-muted'
                )}
              >
                {ui.detail.workBadge}
              </span>
            )}
          </div>
          <h1 className="mt-2 text-4xl tracking-tight sm:text-5xl">{project.name}</h1>
          <p
            className={cn(
              'mt-4 max-w-2xl text-[18px] leading-relaxed',
              isDark ? 'text-muted-dark' : 'text-muted'
            )}
          >
            {project.tagline}
          </p>

          {project.hero && (
            <div className="mt-10 overflow-hidden rounded-2xl">
              <img
                src={project.hero}
                alt={`${project.name}`}
                className="w-full object-cover shadow-[var(--shadow-product)]"
              />
            </div>
          )}
        </div>
      </header>

      {/* Overview + meta */}
      <section className="bg-canvas px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_240px]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{ui.detail.overview}</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink/80">{project.overview}</p>

            <h3 className="mt-10 text-[17px] font-semibold">{ui.detail.role}</h3>
            <ul className="mt-3 space-y-2">
              {project.responsibilities.map((r) => (
                <li key={r} className="flex gap-2 text-[16px] leading-relaxed text-ink/80">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {r}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-[17px] font-semibold">{ui.detail.features}</h3>
            <ul className="mt-3 space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2 text-[16px] leading-relaxed text-ink/80">
                  <span className="mt-1 text-accent">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {project.details?.map((section) => (
              <div key={section.heading} className="mt-10">
                <h3 className="text-[17px] font-semibold">{section.heading}</h3>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="mt-3 text-[16px] leading-relaxed text-ink/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <aside className="md:border-l md:border-hairline md:pl-8">
            <dl className="space-y-5">
              <InfoRow label={ui.detail.period} value={project.period} />
              <InfoRow
                label={isWork ? ui.detail.teamLabelWork : ui.detail.team}
                value={project.team}
              />
              <InfoRow label={ui.detail.position} value={project.role} />
            </dl>
            {project.links.length > 0 && (
              <div className="mt-8 flex flex-col gap-3">
                {project.links.map((link) => (
                  <PillButton
                    key={link.label}
                    href={link.url}
                    variant={link.label === 'GitHub' ? 'secondary' : 'primary'}
                    className="w-full"
                  >
                    {link.label}
                  </PillButton>
                ))}
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Pipeline */}
      {project.pipeline && (
        <section className="bg-ink px-5 py-16 text-white sm:px-8 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              {project.pipeline.title}
            </h2>
            <ol className="mt-10 grid gap-3 md:grid-cols-5">
              {project.pipeline.steps.map((step, i) => (
                <li key={step.label} className="relative flex md:flex-col">
                  <Reveal delay={i * 110} className="flex-1">
                    <div className="h-full rounded-2xl bg-white/5 p-5">
                      <p className="text-[12px] font-semibold text-accent-sky">
                        {ui.detail.step} {i + 1}
                      </p>
                      <p className="mt-1.5 text-[15px] font-semibold text-white">
                        {step.label}
                      </p>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">
                        {step.desc}
                      </p>
                    </div>
                  </Reveal>
                  {i < project.pipeline!.steps.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden items-center justify-center text-white/30 md:absolute md:top-1/2 md:-right-3 md:flex md:h-6 md:w-6 md:-translate-y-1/2"
                    >
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Tech stack */}
      <section className="bg-parchment px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight">{ui.detail.techStack}</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {project.techStack.map((group) => (
              <div key={group.label}>
                <h3 className="mb-3 text-[14px] font-semibold text-accent">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-hairline bg-canvas px-2.5 py-1 text-[13px] text-ink/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <section className="bg-canvas px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight">{ui.detail.screens}</h2>
            <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {project.screenshots.map((shot, i) => (
                <Reveal key={shot.caption} delay={(i % 2) * 90} className="flex">
                  <figure className="flex w-full flex-col">
                    <div className="flex flex-1 items-center justify-center rounded-2xl bg-parchment p-5">
                      <img
                        src={shot.src}
                        alt={shot.caption}
                        loading="lazy"
                        className="max-h-[460px] w-full rounded-lg object-contain shadow-[var(--shadow-product)]"
                      />
                    </div>
                    <figcaption className="mt-4">
                      <p className="text-[16px] font-semibold text-ink">{shot.caption}</p>
                      {shot.description && (
                        <p className="mt-1 text-[14px] leading-relaxed text-muted">
                          {shot.description}
                        </p>
                      )}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom nav */}
      <div className="bg-canvas px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-5xl border-t border-hairline pt-10">
          <Link
            to={backPath}
            className="text-[15px] font-medium text-accent hover:text-accent-focus"
          >
            ← {ui.detail.moreProjects}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetail;
