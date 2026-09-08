import { cn } from '@/lib/cn';
import Reveal from '@/components/common/Reveal';

import type { ReactNode } from 'react';

type SectionVariant = 'canvas' | 'parchment' | 'dark';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  variant?: SectionVariant;
  className?: string;
  children: ReactNode;
}

const variantStyles: Record<SectionVariant, string> = {
  canvas: 'bg-canvas text-ink',
  parchment: 'bg-parchment text-ink',
  dark: 'bg-ink text-white',
};

const Section = ({
  id,
  eyebrow,
  title,
  description,
  variant = 'canvas',
  className,
  children,
}: SectionProps) => {
  const isDark = variant === 'dark';

  return (
    <section id={id} className={cn('px-5 py-20 sm:px-8 sm:py-28', variantStyles[variant])}>
      <div className={cn('mx-auto max-w-6xl', className)}>
        {(eyebrow || title) && (
          <Reveal className="mb-12 sm:mb-16">
            {eyebrow && (
              <p
                className={cn(
                  'mb-3 text-[13px] font-semibold tracking-tight',
                  isDark ? 'text-accent-sky' : 'text-accent'
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-3xl sm:text-4xl">{title}</h2>}
            {description && (
              <p
                className={cn(
                  'mt-4 max-w-2xl text-[17px] leading-relaxed',
                  isDark ? 'text-muted-dark' : 'text-muted'
                )}
              >
                {description}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
