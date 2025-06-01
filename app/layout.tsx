'use client';

import './globals.css';
import { Quicksand } from "next/font/google";
import ClientThemeProvider from '@/components/ClientThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect } from 'react';
import Loading from './loading';
import Head from './head';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate a loading duration
    }, 1500); // Adjust the duration as needed (1.5 seconds in this case)

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <html lang="en" dir="ltr">
      <Head />
      <body
        className={`${quicksand.className} antialiased bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden`}
      >
        <ClientThemeProvider>
          {/* Loading UI */}
          {isLoading ? <Loading /> : (
            // Render children once loading is complete
            children
          )}
        </ClientThemeProvider>
        <Analytics />
        <noscript>
          <style>{`body { background: #fff; color: #000; }`}</style>
          <p>
            JavaScript is required to view this site. Please enable JavaScript
            in your browser.
          </p>
        </noscript>
      </body>
    </html>
  );
}