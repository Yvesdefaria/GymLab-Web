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
      // The hreflang codes here must be the same annotations BaseLayout writes in
      // the markup (`es`, `en`, `x-default`). Region subtags would create a second,
      // competing set and the two methods would stop reinforcing each other.
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
      // The unprefixed paths are redirect stubs, never content.
      filter: (page) => /^\/(?:es|en)\//.test(new URL(page).pathname),
      // @astrojs/sitemap emits one alternate per locale and never x-default, so it
      // is appended here to mirror the `<link>` tags exactly. `links` arrives as
      // `{ url, lang }` and this runs after the i18n links are attached.
      serialize(item) {
        const url = new URL(item.url);
        url.pathname = url.pathname.replace(/^\/(?:es|en)(?=\/|$)/, '/es');
        return { ...item, links: [...(item.links ?? []), { lang: 'x-default', url: url.href }] };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
