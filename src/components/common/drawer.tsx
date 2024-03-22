import Link from 'next/link';

import { Header } from '@/components/common';

import { DrawerProps as Props } from '@/types/props';

const items = [
  { name: 'Perfil', href: '#' },
  { name: 'Configurações', href: '#' },
  { name: 'Sobre', href: '#' },
  { name: 'Sair', href: '#' }
];

export function Drawer({ children }: Props) {
  return (
    <div className="drawer">
      <input type="checkbox" id="drawer" className="drawer-toggle" />
      <div className="drawer-content">
        <Header />
        <div className="py-20">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay" />
        <div className="menu min-h-full w-80 gap-4 bg-base-200 p-4 text-base-content">
          <div className="flex h-40 items-end justify-between rounded-md bg-primary/75 pb-2 pl-2 text-white">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 font-sans text-xl font-bold"
            >
              4Matt Tecnologia
            </Link>
          </div>
          {items.map((entry, index) => (
            <Link
              key={index}
              href={entry.href}
              className="btn btn-ghost btn-md flex items-center justify-start font-sans text-lg font-medium text-neutral-700 hover:bg-primary/10"
            >
              {entry.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
