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
  ['/jalones-frontales-2', '/front-lat-pulldowns'],
  ['/jalones-agarre-cerrado', '/close-grip-lat-pulldowns'],
  ['/jalones-agarre-v', '/v-grip-lat-pulldowns'],
  ['/jalones-tras-nuca', '/behind-the-neck-lat-pulldowns'],
  ['/hiperextensiones-espalda', '/back-extensions'],
  ['/pullover-mancuerna', '/dumbbell-pullover'],
  ['/pullover-barra', '/barbell-pullover'],
  ['/rutina-espalda-amplitud-densidad', '/back-width-and-thickness-routine'],
  ['/como-entrenar-la-espalda-en-quince-minutos', '/15-minute-back-workout'],
  ['/rutina-de-espalda-para-dorsales-mas-grandes-y-musculados', '/back-routine-for-bigger-lats'],
  ['/dominadas-asistidas', '/assisted-pull-ups'],
  ['/dominadas-con-peso-multipower', '/weighted-pull-ups-machine'],
  ['/dominadas-tras-nuca', '/behind-the-neck-pull-ups'],
  ['/jalon-dorsal-a-una-mano', '/one-arm-lat-pulldown'],
  ['/jalones-en-maquina', '/machine-lat-pulldowns'],
  ['/jalones-frontales-brazos-rectos', '/straight-arm-lat-pulldowns'],
  ['/remo-polea-sentado', '/seated-cable-row'],
  ['/remo-pendley', '/pendlay-row'],
  ['/remo-barra-agarre-invertido', '/reverse-grip-barbell-row'],
  ['/dominadas-programa-avanzado', '/advanced-pull-up-program'],
  ['/buenos-dias-barra-de-pie', '/standing-good-mornings'],
  ['/buenos-dias-barra-sentado', '/seated-good-mornings'],
  ['/buenos-dias-con-barra-piernas-separadas', '/wide-stance-good-mornings'],
  ['/peso-muerto-piernas-rigidas-barra', '/stiff-leg-deadlift-barbell'],
  ['/peso-muerto-piernas-rigidas-mancuernas', '/stiff-leg-deadlift-dumbbells'],
  ['/peso-muerto-sumo', '/sumo-deadlift'],
  ['/pullover-en-banco-declinado', '/decline-bench-pullover'],
  ['/remo-en-polea-a-una-mano-de-pie', '/one-arm-cable-row'],
  ['/remo-invertido', '/inverted-row'],
  ['/remo-maquina', '/machine-row'],
  ['/remo-multipower', '/smith-machine-row'],
  ['/superserie-de-espalda-para-terminar-tu-rutina', '/back-superset-finisher'],
  ['/plantilla-entrenamiento', '/workout-template'],
  ['/prueba-flexibilidad', '/flexibility-test'],
  ['/sentadilla-sin-lesiones', '/squat-safety'],
  ['/lo-que-no-hay-que-hacer-para-ganar-musculo', '/muscle-building-mistakes'],
  ['/frecuencia-entrenar-cada-musculo', '/training-frequency'],
  ['/mentiras-del-culturismo-que-os-impediran-progresar', '/bodybuilding-myths'],
  ['/ganar-masa-muscular', '/build-muscle'],
  ['/cross-training', '/cross-training'],
  ['/beneficios-de-contratar-un-entrenador-personal-online', '/online-personal-trainer-benefits'],
  ['/entrenamiento-personalizado-en-casa-ventajas-reales', '/home-personal-training-benefits'],
  ['/ejercicios-maxima-congestion-muscular', '/maximum-muscle-pump-exercises'],
  ['/ejercicios-gimnasio', '/gym-exercises'],
  ['/motivos-por-los-que-tus-musculos-no-crecen', '/why-muscles-dont-grow'],
  ['/ejercicios-con-bandas-de-resistencia-tubulares', '/resistance-band-exercises'],
  ['/como-ser-constante-en-el-entrenamiento', '/how-to-stay-consistent-working-out'],
  ['/principio-adaptacion-sobrecarga-progresiva', '/progressive-overload-principle'],
  ['/distribucion-rutina-entrenamiento', '/workout-split-guide'],
  ['/guia-musculacion-principiantes', '/beginner-gym-guide'],
  ['/ejercicios-dolor-de-espalda', '/back-pain-exercises'],
  ['/estiramientos', '/stretching'],
  ['/circuito-de-estiramientos-para-musculacion', '/gym-stretching-circuit'],
  ['/fallo-muscular', '/muscle-failure-training'],
  ['/periodizacion-entrenamiento', '/training-periodization'],
  ['/potencia-tu-sistema-inmunologico-con-el-entrenamiento', '/exercise-and-immune-system'],
  ['/semana-de-descarga', '/deload-week'],
  ['/cuanto-dormir-para-progresar-en-el-gimnasio', '/sleep-for-muscle-growth'],
  ['/planificacion-del-entrenamiento', '/training-planning'],
  ['/regeneracion-muscular', '/muscle-recovery'],
  ['/tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver', '/first-day-at-the-gym'],
  [
    '/agarres-prono-y-supino-diferencias-y-principales-beneficios',
    '/pronated-vs-supinated-grip',
  ],
  ['/estancamiento-muscular', '/muscle-plateau'],
  ['/mejor-equipamiento-para-entrenar-en-casa', '/best-home-gym-equipment'],
  ['/cinturon-entrenamiento', '/weightlifting-belt'],
  ['/entrenamiento-charles-poliquin', '/charles-poliquin-training'],
  ['/tipos-agarre', '/grip-types'],
  ['/culturismo-mas-que-musculo', '/bodybuilding-lifestyle'],
  ['/prueba-potencia-anaerobia', '/anaerobic-power-test'],
  ['/repeticiones-entrenamiento', '/optimal-rep-range'],
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
