/// <reference types="vitest" />
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['vitest.setup.ts'],
  },
  resolve: {
    alias: {
      '@root': '/',
      '@': '/src',
    },
  },
});
