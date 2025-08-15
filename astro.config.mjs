import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'it',
        locales: {
          it: 'it',
          en: 'en'
        }
      }
    })
  ],
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
