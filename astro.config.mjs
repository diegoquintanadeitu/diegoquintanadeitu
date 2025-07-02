// @ts-check
import {defineConfig} from 'astro/config';
import {fileURLToPath, URL} from 'node:url';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://diegoquintanadeitu.github.io',
  base: '/diegoquintanadeitu',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@/components': fileURLToPath(
          new URL('./src/components', import.meta.url)
        ),
        '@/ui': fileURLToPath(new URL('./src/components/ui', import.meta.url)),
        '@/layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@/pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@/services': fileURLToPath(new URL('./src/services', import.meta.url)),
        '@/types': fileURLToPath(new URL('./src/types', import.meta.url)),
        '@/assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@/mocks': fileURLToPath(new URL('./src/mocks', import.meta.url)),
      },
    },
    server: {
      proxy: {
        // Proxy para desarrollo - redirige /catalogo-de-componentes a Storybook
        '/catalogo-de-componentes': {
          target: 'http://localhost:6006',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/catalogo-de-componentes/, ''),
        },
      },
    },
  },
});
