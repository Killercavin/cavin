import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('swiper')) return 'swiper';
            if (id.includes('react')) return 'react';
            if (id.includes('bootstrap')) return 'bootstrap';
            if (id.includes('@fortawesome')) return 'fontawesome';
          }
        },
      },
    },
    // Optimize for SEO and performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Enable source maps for debugging
    sourcemap: false,
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // SEO and performance optimizations
  server: {
    headers: {
      'Cache-Control': 'no-cache',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import"],
      },
    },
    // Enable CSS code splitting
    devSourcemap: true,
  },
})