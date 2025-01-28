'use client';

import './globals.css';
import { Quicksand } from "@next/font/google";
import ClientThemeProvider from '@/components/ClientThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect } from 'react';

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Your website description here." />
        <link rel="icon" href="/favicon.ico" />
        <title>Cavin | Portfolio</title>
      </head>
      <body
        className={`${quicksand.className} antialiased bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden`}
      >
        <ClientThemeProvider>
          {/* Loading UI */}
          {isLoading ? (
            <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-grey-900">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-violet-600"></div>
                <p className="mt-4 text-lg font-medium">Loading...</p>
              </div>
            </div>
          ) : (
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
