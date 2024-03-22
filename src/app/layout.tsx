import '@/styles/globals.css';
import { Inter } from 'next/font/google';

import { Drawer } from '@/components/common';

import { LayoutProps as Props } from '@/types/props';
import { cn } from '@/utils';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function Layout({ children }: Props) {
  return (
    <html>
      <body className={cn(inter.variable)}>
        <Drawer>{children}</Drawer>
      </body>
    </html>
  );
}
