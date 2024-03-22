import '@/styles/globals.css';
import { Inter } from 'next/font/google';

import { Drawer } from '@/components/common';

import { cn } from '@/utils';

interface Props {
  children: React.ReactNode;
}

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
