import { Fragment } from 'react';

import { Link } from '@/components/ui';

import { Bars3BottomLeftIcon } from '@heroicons/react/20/solid';

const items = [
  { name: 'Cost optimization dashboard', href: '/dashboard' },
  { name: 'Application spend', href: '/application' },
  { name: 'Transactions', href: '/transactions' },
  { name: 'Licenses', href: '/licenses' }
];

export function Header() {
  return (
    <header className="fixed left-0 top-0 flex w-full items-center p-4">
      <nav className="flex items-center justify-center gap-4">
        <label
          htmlFor="drawer"
          className="btn btn-ghost btn-sm rounded-2xl bg-primary/50 text-neutral-700 hover:bg-primary/75"
        >
          <Bars3BottomLeftIcon className="h-5 w-5" />
        </label>
        {items.map((entry, index) => (
          <Fragment key={index}>
            <Link href={entry.href}>{entry.name}</Link>
          </Fragment>
        ))}
      </nav>
    </header>
  );
}
