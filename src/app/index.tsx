'use client';

import Sidebar from '@/components/Sidebar';

import RootContextProvider, { useRootContext } from './Context';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/utils/query-client';

function Content({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { isNavbarOpen } = useRootContext();

  const cloudyBgOnMobile = ['/setting'];

  return (
    <div className="flex">
      <Sidebar />
      <div
        className={clsx('flex-1', isNavbarOpen ? 'h-svh overflow-hidden' : '')}
      >
        <Navbar />
        <div
          className={clsx(
            'laptop:bg-cloudy-grey',
            cloudyBgOnMobile.includes(pathname) ? 'bg-cloudy-grey' : 'bg-white'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RootContextProvider>
        <Content>{children}</Content>
      </RootContextProvider>
    </QueryClientProvider>
  );
}
