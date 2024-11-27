'use client';

import Sidebar from '@/components/Sidebar';

import RootContextProvider, { useRootContext } from './Context';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';
import clsx from 'clsx';

function Content({ children }: { children: ReactNode }) {
  const { isNavbarOpen } = useRootContext();

  return (
    <div className="flex">
      <Sidebar />
      <div
        className={clsx('flex-1', isNavbarOpen ? 'h-svh overflow-hidden' : '')}
      >
        <Navbar />
        <div className="laptop:bg-cloudy-grey">{children}</div>
      </div>
    </div>
  );
}

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <RootContextProvider>
      <Content>{children}</Content>
    </RootContextProvider>
  );
}
