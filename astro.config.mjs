// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const ORIGIN = 'https://gymlab.dev';

// The two locales do not share slugs, so the sitemap cannot pair a page with its
// alternate by swapping the locale prefix. Each pair is listed once.
const ROUTE_PAIRS = [
  ['/', '/'],
  ['/privacidad', '/privacidad'],
  ['/terminos', '/terminos'],
  ['/calculadora-1rm', '/one-rep-max-calculator'],
  ['/calculadora-imc', '/bmi-calculator'],
  ['/calcular-calorias', '/calorie-calculator'],
  ['/rutinas-espalda', '/back-routines'],
  ['/ejercicios-espalda', '/back-exercises'],
  ['/anatomia-de-la-espalda', '/back-anatomy'],
  ['/elige-las-dominadas-adecuadas-para-mejorar-tu-espalda', '/best-pull-ups-for-back-width'],
  ['/mejores-ejercicios-con-mancuernas-para-espalda', '/dumbbell-back-exercises'],
  ['/consejos-para-desarrollar-espalda', '/how-to-build-back-muscle'],
  ['/espalda-baja-fuerte', '/strong-lower-back'],
  ['/agarres-jalones-dorsales', '/lat-pulldown-grips'],
  ['/como-ampliar-tus-dorsales', '/how-to-widen-your-lats'],
  ['/mejores-jalones-para-trabajar-la-parte-inferior-del-dorsal', '/lower-lat-pulldowns'],
  ['/dominadas', '/pull-ups'],
  ['/dominadas-agarre-ancho', '/wide-grip-pull-ups'],
  ['/dominadas-agarre-cerrado', '/close-grip-pull-ups'],
  ['/remo-barra', '/barbell-row'],
  ['/remo-mancuerna-una-mano', '/one-arm-dumbbell-row'],
  ['/remo-barra-t', '/t-bar-row'],
];

const pairFor = (pathname) => {
  const [locale, ...rest] = pathname.replace(/^\/+|\/+$/g, '').split('/');
  const bare = `/${rest.join('/')}`;
  const pair = ROUTE_PAIRS.find((candidate) => candidate[locale === 'en' ? 1 : 0] === bare);
  return pair ? { es: pair[0], en: pair[1] } : null;
};

const withSlash = (lang, slug) => `${ORIGIN}/${lang}${slug === '/' ? '/' : `${slug}/`}`;

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
      // @astrojs/sitemap pairs locales by path, which no longer works now that the
      // English calculators have their own slugs. The alternates are rebuilt from
      // ROUTE_PAIRS so the sitemap and the markup publish the same three links.
      serialize(item) {
        const url = new URL(item.url);
        const pair = pairFor(url.pathname);
        if (!pair) return item;
        return {
          ...item,
          links: [
            { lang: 'es', url: withSlash('es', pair.es) },
            { lang: 'en', url: withSlash('en', pair.en) },
            { lang: 'x-default', url: withSlash('es', pair.es) },
          ],
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
