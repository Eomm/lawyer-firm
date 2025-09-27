import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// const base = isGitHubActions ? `/${repoName}/` : undefined;
const base = undefined;
const site = process.env.WEBSITE_BUILD || 'http://localhost:4321';

// eslint-disable-next-line no-undef
const siteUrl = new URL(site);

// https://astro.build/config
export default defineConfig({
  site,
  base,

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'it',
        locales: {
          it: 'it',
          en: 'en',
        },
      },
    }),
  ],

  build: {
    format: 'file',
  },

  image: {
    domains: [siteUrl.host],
    formats: ['webp', 'avif'],
  },

  i18n: {
    defaultLocale: 'it',
    locales: ['en', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
