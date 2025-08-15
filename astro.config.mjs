import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://studiolegaleferrini.com',
  build: {
    format: 'file'
  },
  image: {
    domains: ['studiolegaleferrini.com'],
    formats: ['webp', 'avif']
  },
  i18n: {
    defaultLocale: 'it',
    locales: ['en', 'it'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
