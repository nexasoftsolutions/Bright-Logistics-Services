/**
 * Breadcrumbs
 * Auto-generated breadcrumb navigation from the current route.
 * Provides navigational context on every inner page.
 *
 * Usage:
 *   <Breadcrumbs />                           // Auto-detects from route
 *   <Breadcrumbs items={[                     // Manual override
 *     { label: 'Home', href: '/' },
 *     { label: 'Services' },
 *   ]} />
 */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const LABEL_MAP = {
  about: 'About Us',
  services: 'Services',
  coverage: 'Coverage',
  fleet: 'Fleet',
  industries: 'Industries',
  gallery: 'Gallery',
  quote: 'Get a Quote',
  contact: 'Contact Us',
  blog: 'Blog',
};

export default function Breadcrumbs({ items: manualItems, className = '' }) {
  const pathname = usePathname();

  const items = manualItems || generateFromPath(pathname);

  // Don't render on homepage
  if (!manualItems && pathname === '/') return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`max-w-[1440px] mx-auto px-margin-mobile lg:px-margin-desktop py-4 ${className}`}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {i === 0 && <Home className="w-3.5 h-3.5 text-outline" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-body-sm text-on-surface-variant hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-body-sm text-on-surface font-semibold">
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight className="w-3.5 h-3.5 text-outline-variant" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function generateFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  const crumbs = [{ label: 'Home', href: '/' }];

  segments.forEach((segment, i) => {
    const href = '/' + segments.slice(0, i + 1).join('/');
    const label = LABEL_MAP[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    crumbs.push({
      label,
      href: i < segments.length - 1 ? href : undefined,
    });
  });

  return crumbs;
}

