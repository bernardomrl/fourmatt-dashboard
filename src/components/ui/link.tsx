'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils';

interface Props {
  children: React.ReactNode;
  href: string;
}

export function Link({ children, href }: Props) {
  const pathname = usePathname();
  return (
    <NextLink
      href={href}
      className={cn(
        'btn btn-ghost btn-sm rounded-2xl font-sans font-semibold text-neutral-700 hover:bg-primary/25',
        pathname === href && 'bg-primary/50 hover:bg-primary/75'
      )}
    >
      {children}
    </NextLink>
  );
}
