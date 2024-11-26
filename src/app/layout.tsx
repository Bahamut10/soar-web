import type { Metadata } from 'next';

import { inter } from '../../fonts';
import './globals.scss';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="flex">
          <div className="flex-[1/4]">
            <Sidebar />
          </div>
          <div className="flex-1">
            <Navbar />
            <div className="laptop:bg-cloudy-grey">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
