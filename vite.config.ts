/// <reference types="vite/client" />

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import packageJson from './package.json';

const bigLibs = [
  { regExp: /^@mui*/, chunkName: '@mui' },
  { regExp: /^i18next*/, chunkName: 'i18next' },
  { regExp: /^react*/, chunkName: 'react' },
];

function getManualChunks(deps: any) {
  return Object.keys(deps).reduce(
    (prev, cur) => {
      // console.log("\nPREV: ", prev, "\nCUR: ", cur);
      let isBigLib = false;
      if (!cur.includes('@capacitor')) {
        for (const l of bigLibs) {
          if (l.regExp.test(cur)) {
            isBigLib = true;
            if (prev[l.chunkName]) {
              prev[l.chunkName].push(cur);
            } else {
              prev[l.chunkName] = [cur];
            }
            break;
          }
        }

        if (!isBigLib) prev.vendors.push(cur);
      }
      return prev;
    },
    { vendors: [] }
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy()],
  resolve: {
    alias: {
      '@/api': resolve(__dirname, './src/api'),
      '@/pages': resolve(__dirname, './src/pages'),
      '@/components': resolve(__dirname, './src/components'),
      '@/layout': resolve(__dirname, './src/layout'),
      '@/interfaces': resolve(__dirname, './src/interfaces'),
      '@/constants': resolve(__dirname, './src/constants'),
      '@/hooks': resolve(__dirname, './src/hooks'),
      '@/locales': resolve(__dirname, './src/locales'),
      '@/store': resolve(__dirname, './src/store'),
      '@': resolve(__dirname, './src'),
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: getManualChunks(packageJson.dependencies),
      },
    },
  },
});
