// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gymlab.dev',
  // Directory output with an explicit slash, so a page never answers to two URLs.
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      // Both locales are first-class; the alternates are reciprocal in the XML.
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-GB' },
      },
      // The unprefixed paths are redirect stubs, never content.
      filter: (page) => /^\/(?:es|en)\//.test(new URL(page).pathname),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
