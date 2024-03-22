'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils';
import { Bars3BottomLeftIcon } from '@heroicons/react/20/solid';

const items = [
  { name: 'Cost optimization dashboard', href: '/dashboard' },
  { name: 'Application spend', href: '/application' },
  { name: 'Transactions', href: '/transactions' },
  { name: 'Licenses', href: '/licenses' }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 flex w-full items-center p-4">
      <nav className="flex items-center justify-center gap-4">
        <label
          htmlFor="drawer"
          className="btn btn-ghost btn-sm rounded-2xl bg-primary/50 text-neutral-700 hover:bg-primary/75"
        >
          <Bars3BottomLeftIcon className="h-5 w-5" />
        </label>
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'btn btn-ghost btn-sm rounded-2xl font-sans font-semibold text-neutral-700 hover:bg-primary/25',
              pathname === item.href && 'bg-primary/50 hover:bg-primary/75'
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
