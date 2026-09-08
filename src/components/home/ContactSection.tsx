import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import { useContent } from '@/content';

const ContactSection = () => {
  const { profile, ui } = useContent();

  return (
    <Section
      id="contact"
      eyebrow={ui.sections.contact.eyebrow}
      title={ui.sections.contact.title}
      description={ui.sections.contact.description}
      variant="parchment"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.contacts.map((c, i) => {
          const external = c.href.startsWith('http');
          return (
            <Reveal key={c.label} delay={(i % 2) * 90}>
              <a
                href={c.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="group flex items-center justify-between rounded-2xl border border-hairline bg-canvas px-6 py-5 transition-colors hover:border-accent/40"
              >
                <div>
                  <p className="text-[13px] font-semibold text-accent">{c.label}</p>
                  <p className="mt-1 text-[16px] text-ink">{c.value}</p>
                </div>
                <span className="text-muted transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default ContactSection;
