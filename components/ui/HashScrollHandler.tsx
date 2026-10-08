'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function HashScrollInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Handle hash scrolling when page loads or route changes
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Global event listener to intercept same-page hash clicks and dummy '#' links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Prevent full page reload on dummy '#' anchors
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Handle hash links (e.g. /products#mgo-focus or #mgo-focus)
      if (href.includes('#')) {
        const [targetPath, hash] = href.split('#');
        const currentPath = window.location.pathname;

        // If target path is current path or relative hash
        if (targetPath === '' || targetPath === currentPath) {
          const element = document.getElementById(hash);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `${currentPath}#${hash}`);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return null;
}

export function HashScrollHandler() {
  return (
    <Suspense fallback={null}>
      <HashScrollInner />
    </Suspense>
  );
}
