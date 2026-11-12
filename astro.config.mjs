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
  ['/cuanto-peso-cargar-en-el-gimnasio', '/how-much-weight-to-lift'],
  ['/instrumentos-del-gimnasio', '/gym-equipment-guide'],
  ['/tiempo-de-descanso-entre-series', '/rest-between-sets'],
  ['/ejercicios-en-polea-ventajas', '/cable-exercise-benefits'],
  [
    '/ejercicios-multiarticulares-y-ejercicios-de-aislamiento',
    '/compound-vs-isolation-exercises',
  ],
  [
    '/como-se-adapta-el-cuerpo-al-entrenamiento-con-pesas',
    '/how-the-body-adapts-to-weight-training',
  ],
  ['/entrenamiento-del-agarre', '/grip-strength-training'],
  ['/peso-muerto-mejor-agarre', '/deadlift-grip'],
  ['/gimnasio-de-la-vieja-escuela', '/old-school-gym-training'],
  ['/entrenamiento-piramidal', '/pyramid-training'],
  ['/volumen-de-entrenamiento', '/training-volume'],
  ['/congestion-muscular', '/muscle-pump'],
  ['/elaboracion-de-rutinas-puntos-debiles', '/routine-weak-points'],
  ['/levantar-aumentar-peso', '/lift-more-weight-5-percent'],
  ['/escoger-actividad-en-tu-vuelta-al-gimnasio', '/back-to-the-gym-choosing-activity'],
  ['/ejercicios-sobre-balon', '/stability-ball-exercises'],
  ['/los-peligros-de-entrenar-como-un-preplaya', '/unbalanced-training-dangers'],
  ['/tiempos-entrenamiento', '/rep-tempo'],
  ['/8-repeticiones-entrenando', '/eight-reps-debate'],
  ['/elegir-gimnasio', '/choosing-a-gym'],
  ['/metodo-bulgaro', '/bulgarian-method'],
  ['/repeticion-maxima', '/calculate-one-rep-max'],
  ['/tipos-somaticos-endomorfos-ectomorfos-y-mesomorfos', '/somatotypes'],
  ['/tipos-de-fibras-musculares', '/muscle-fiber-types'],
  ['/desafio-100-flexiones', '/100-push-up-challenge'],
  ['/errores-entrenamiento', '/common-training-mistakes'],
  ['/tests-evaluar-estado-fisico', '/fitness-tests'],
  ['/entrenamiento-oxigenacion', '/muscle-oxygenation-training'],
  ['/entrenamiento-balistico', '/ballistic-training'],
  [
    '/mitos-estupidos-debes-entrenar-cada-musculo-solo-una-vez-por-semana',
    '/training-frequency-myth',
  ],
  ['/dias-entrenamiento-pesado', '/heavy-training-days'],
  ['/consejos-para-crear-tu-rutina-dividida', '/split-routine-tips'],
  ['/fibras-musculares-ejercicios', '/exercises-that-recruit-muscle-fibers'],
  ['/repeticion-maxima-rutinas-volumen', '/one-rep-max-volume-training'],
  ['/tecnica-ejecucion-ejercicios', '/exercise-technique'],
  [
    '/contracciones-musculares-excentrica-concentrica-isometricas',
    '/muscle-contractions',
  ],
  ['/grandes-musculos-de-forma-natural', '/natural-muscle-growth'],
  ['/entrena-con-musica-para-ser-mas-fuerte-en-el-gimnasio', '/training-with-music'],
  [
    '/normas-para-hacer-del-gimnasio-un-lugar-mejor-y-sentirte-agusto',
    '/gym-etiquette',
  ],
  ['/como-entrenar-con-altas-temperaturas', '/training-in-hot-weather'],
  ['/multipower-para-superar-puntos-de-estancamiento', '/smith-machine-sticking-points'],
  ['/rango-completo-de-movimiento-rom', '/range-of-motion-training'],
  ['/dolor-crecimiento-muscular', '/muscle-soreness-and-growth'],
  ['/como-respirar-mientras-entrenamos', '/breathing-while-lifting'],
  ['/menos-grasa-mas-musculo', '/lose-fat-gain-muscle'],
  ['/entrenamiento-con-companero', '/training-partner-benefits'],
  ['/guia-de-entrenamiento-hitt', '/hiit-training-guide'],
  ['/rutina-entrenamiento-natacion', '/swimming-workout-routine'],
  [
    '/como-disfrutar-del-running-y-conseguir-acabar-cualquier-carrera-popular',
    '/enjoy-running-popular-races',
  ],
  ['/cardio-de-bajo-impacto-para-quemar-grasa', '/low-impact-cardio'],
  ['/como-combinar-natacion-y-pesas-sin-perder-musculo', '/swimming-and-weights'],
  ['/como-combinar-cardio-y-pesas-para-mujeres', '/cardio-and-weights-for-women'],
  ['/cardio-liss-baja-intensidad-larga-duracion', '/liss-cardio-guide'],
  ['/bicicletas-electricas-para-perder-peso', '/electric-bikes-weight-loss'],
  ['/kayak-paddle-surf-beneficios', '/kayak-paddleboarding-benefits'],
  ['/bicicleta-eliptica-vs-bicicleta-estatica-cual-es-mejor', '/elliptical-vs-stationary-bike'],
  ['/bicicleta-estatica-vs-cinta-de-correr', '/stationary-bike-vs-treadmill'],
  ['/beneficios-de-la-bicicleta-de-aire-y-como-entrenar-con-ella', '/air-bike-benefits'],
  ['/ejercicio-aerobico', '/aerobic-exercise'],
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
