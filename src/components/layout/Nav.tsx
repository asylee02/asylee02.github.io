import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { cn } from '@/lib/cn';
import { useContent } from '@/content';
import { useLang, localePath, stripLang } from '@/i18n';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#intro');
  const { pathname } = useLocation();
  const lang = useLang();
  const { navItems, profile, ui } = useContent();

  const isHome = pathname === '/' || pathname === '/en';
  const homePath = localePath(lang, '/');
  const toggleLang = lang === 'ko' ? 'en' : 'ko';
  const togglePath = localePath(toggleLang, stripLang(pathname));

  useEffect(() => {
    if (!isHome) return;

    const sections = navItems
      .map((item) => document.getElementById(item.hash.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome, navItems]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-canvas/80 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to={homePath} className="text-[15px] font-semibold tracking-tight text-ink">
          {profile.name}
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop links */}
          <ul className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link
                  to={{ pathname: homePath, hash: item.hash }}
                  className={cn(
                    'text-[13px] transition-colors',
                    isHome && active === item.hash
                      ? 'font-medium text-ink'
                      : 'text-muted hover:text-ink'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <Link
            to={togglePath}
            className="rounded-pill border border-hairline px-3 py-1 text-[12px] font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
          >
            {ui.langToggle}
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={cn(
                  'absolute left-0 h-[1.5px] w-5 bg-ink transition-all',
                  open ? 'top-1.5 rotate-45' : 'top-0'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-[1.5px] w-5 bg-ink transition-all',
                  open && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-[1.5px] w-5 bg-ink transition-all',
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        className={cn(
          'overflow-hidden border-t border-black/5 bg-canvas/95 backdrop-blur-xl md:hidden',
          open ? 'max-h-80' : 'max-h-0 border-t-0'
        )}
        style={{ transition: 'max-height 0.3s ease' }}
      >
        <ul className="flex flex-col px-5 py-2">
          {navItems.map((item) => (
            <li key={item.hash}>
              <Link
                to={{ pathname: homePath, hash: item.hash }}
                onClick={() => setOpen(false)}
                className="block py-3 text-[15px] text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
