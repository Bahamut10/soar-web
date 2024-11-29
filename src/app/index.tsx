'use client';

import Sidebar from '@/components/Sidebar';

import RootContextProvider, { useRootContext } from './Context';
import Navbar from '@/components/Navbar';
import { ReactNode, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/utils/query-client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAPILogin } from '@/networks/auth/useAPIAuth';

function Content({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { isNavbarOpen } = useRootContext();

  // this method should be called when a user logins, but since there are no login mechanism here and it's just for token simulation purpose only, we call this API here
  const { mutateAsync: login } = useAPILogin();

  const handleLogin = useCallback(async () => {
    await login();
  }, [login]);

  // This is to simulate login event
  useEffect(() => {
    handleLogin();
  }, [handleLogin]);

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
        <ToastContainer position="top-center" theme="colored" />
      </RootContextProvider>
    </QueryClientProvider>
  );
}
