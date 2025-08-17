import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Check if we're in GitHub Actions environment for site URL
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const site = isGitHubActions
  ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io/${repoName}`
  : 'https://studiolegaleferrini.com';
const base = isGitHubActions ? `/${repoName}/` : undefined;

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
    domains: ['studiolegaleferrini.com', 'github.io'],
    formats: ['webp', 'avif'],
  },

  i18n: {
    defaultLocale: 'it',
    locales: ['en', 'it'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
