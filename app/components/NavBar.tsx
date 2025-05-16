'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto flex justify-center gap-6 px-6 py-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-colors ${
              pathname === href
                ? 'font-semibold text-indigo-600 dark:text-indigo-400'
                : 'text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
