'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

const ClientThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default ClientThemeProvider;
