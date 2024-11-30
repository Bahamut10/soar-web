'use client';

import Sidebar from '@/components/Sidebar';

import ErrorFallback from '@/components/Fallback';
import Navbar from '@/components/Navbar';
import { useAPILogin } from '@/networks/auth/useAPIAuth';
import { queryClient } from '@/utils/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useCallback, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RootContextProvider, { useRootContext } from './Context';

function Content({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { isNavbarOpen, setIsLoginSuccess } = useRootContext();

  // This method is intended to be called during user login. However, since there's no login mechanism implemented and this is solely for token simulation purposes, we invoke this API here.
  const { mutateAsync: login } = useAPILogin();

  const handleLogin = useCallback(async () => {
    await login(undefined, {
      onSuccess: () => {
        setIsLoginSuccess(true);
      },
    });
  }, [login, setIsLoginSuccess]);

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

function GlobalError(props: { children: React.ReactNode }): JSX.Element {
  const route = useRouter();
  const { children } = props;

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        route.refresh();
      }}
      onError={(error, info) => {
        console.error('Global Error:', error);
        console.error('Error Info:', info);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <GlobalError>
      <QueryClientProvider client={queryClient}>
        <RootContextProvider>
          <Content>{children}</Content>
          <ToastContainer position="top-center" theme="colored" />
        </RootContextProvider>
      </QueryClientProvider>
    </GlobalError>
  );
}
