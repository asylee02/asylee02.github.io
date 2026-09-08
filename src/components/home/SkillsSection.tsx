import { cn } from '@/lib/cn';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import { useContent } from '@/content';

import type { SkillLevel } from '@/types';

const levels: SkillLevel[] = ['low', 'mid', 'high'];

const LevelMeter = ({
  level,
  labels,
}: {
  level: SkillLevel;
  labels: Record<string, string>;
}) => {
  return (
    <div className="flex gap-1">
      {levels.map((l, i) => {
        const active =
          (level === 'low' && l === 'low') ||
          (level === 'mid' && l !== 'high') ||
          level === 'high';
        return (
          <span
            key={l}
            title={labels[l]}
            className="h-1.5 w-6 overflow-hidden rounded-pill bg-white/15"
          >
            <span
              className={cn(
                'meter-fill block h-full w-full rounded-pill',
                active ? 'bg-accent-sky' : 'bg-transparent'
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            />
          </span>
        );
      })}
    </div>
  );
};

const SkillsSection = () => {
  const { skillGroups, levelLabel, ui } = useContent();

  return (
    <Section
      id="skills"
      eyebrow={ui.sections.skills.eyebrow}
      title={ui.sections.skills.title}
      description={ui.sections.skills.description}
      variant="dark"
    >
      <div className="grid gap-10 md:grid-cols-4">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 90}>
            <h3 className="mb-5 text-[15px] font-semibold text-white/60">
              {group.category}
            </h3>
            <ul className="space-y-4">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between gap-4">
                  <span className="text-[16px] text-white">{skill.name}</span>
                  <LevelMeter level={skill.level} labels={levelLabel} />
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
