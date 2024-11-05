'use client';
import './globals.css';
import { Quicksand } from '@next/font/google';
import ClientThemeProvider from '@/components/ClientThemeProvider';
import { Analytics } from '@vercel/analytics/react';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${quicksand.className} antialiased bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden`}
      >
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
