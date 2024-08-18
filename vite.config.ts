import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ['es2020'],
    rollupOptions: {
      input: './src/main.ts',
      output: {
        dir: 'dist',
        entryFileNames: 'main.js',
      },
    },
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [angular()],
});
