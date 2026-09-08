import { Link } from 'react-router-dom';

import { cn } from '@/lib/cn';

import type { ReactNode } from 'react';

type PillVariant = 'primary' | 'secondary';

interface PillButtonProps {
  children: ReactNode;
  variant?: PillVariant;
  href?: string;
  to?: string;
  className?: string;
}

const base =
  'inline-flex items-center justify-center rounded-pill px-5 py-2.5 text-[15px] font-medium transition-transform active:scale-95';

const variantStyles: Record<PillVariant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-focus',
  secondary: 'border border-accent text-accent hover:bg-accent/5',
};

const PillButton = ({
  children,
  variant = 'primary',
  href,
  to,
  className,
}: PillButtonProps) => {
  const classes = cn(base, variantStyles[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  const external = href?.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={classes}
    >
      {children}
    </a>
  );
};

export default PillButton;
