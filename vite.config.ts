import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@welldone-software/why-did-you-render',
    }),
  ],
});
