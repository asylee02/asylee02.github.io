import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import { useContent } from '@/content';
import { useLang } from '@/i18n';

const CATEGORY_EN: Record<string, string> = {
  학력: 'Education',
  교육: 'Training',
  활동: 'Activity',
};

const EducationSection = () => {
  const lang = useLang();
  const { educations, ui } = useContent();
  const categoryLabel = (c: string) => (lang === 'en' ? (CATEGORY_EN[c] ?? c) : c);

  return (
    <Section
      id="education"
      eyebrow={ui.sections.education.eyebrow}
      title={ui.sections.education.title}
      variant="canvas"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {educations.map((edu, i) => (
          <Reveal
            key={edu.name}
            delay={(i % 2) * 90}
            className="rounded-2xl border border-hairline bg-canvas p-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-pill bg-parchment px-2.5 py-0.5 text-[12px] font-semibold text-muted">
                {categoryLabel(edu.category)}
              </span>
              {edu.badge && (
                <span className="rounded-pill bg-accent/10 px-2.5 py-0.5 text-[12px] font-semibold text-accent">
                  🏆 {edu.badge}
                </span>
              )}
            </div>
            <h3 className="mt-3 text-[17px] font-semibold tracking-tight">{edu.name}</h3>
            <p className="mt-0.5 text-[13px] text-muted">{edu.period}</p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink/75">{edu.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
