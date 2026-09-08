import PillButton from '@/components/common/PillButton';
import Reveal from '@/components/common/Reveal';
import { useContent } from '@/content';
import { useLang, localePath } from '@/i18n';

const Hero = () => {
  const lang = useLang();
  const { profile, ui } = useContent();

  return (
    <section id="intro" className="bg-canvas px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="mb-5 text-[15px] font-semibold text-accent">{profile.role}</p>
            <h1 className="text-4xl leading-[1.1] tracking-tight sm:text-6xl">
              {profile.greeting}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {profile.headline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PillButton to={localePath(lang, '/#projects')} variant="primary">
                {ui.hero.primaryCta}
              </PillButton>
              <PillButton to={localePath(lang, '/#contact')} variant="secondary">
                {ui.hero.secondaryCta}
              </PillButton>
            </div>
          </Reveal>

          <Reveal delay={120} className="justify-self-center md:justify-self-end">
            <img
              src={profile.photo}
              alt={ui.hero.photoAlt}
              className="h-44 w-44 rounded-3xl object-cover shadow-[var(--shadow-product)] sm:h-56 sm:w-56"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-16 max-w-3xl space-y-4 border-t border-hairline pt-10">
          {profile.intro.map((paragraph, i) => (
            <p key={i} className="text-[17px] leading-relaxed text-ink/80">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="h-full rounded-2xl bg-parchment p-6 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-[15px] font-semibold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
