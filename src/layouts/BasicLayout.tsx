import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { langFromPath } from '@/i18n';

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.documentElement.lang = langFromPath(pathname);
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const id = window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return () => window.clearTimeout(id);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
};

const BasicLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BasicLayout;
