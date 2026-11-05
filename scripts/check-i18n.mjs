// Post-build gate for the bilingual site. The repo has no test runner, so this
// is the deterministic check that proves the locale contract after `npm run build`.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const ORIGIN = 'https://gymlab.dev';

const PAGES = [
  ['es', '/es/'],
  ['en', '/en/'],
  ['es', '/es/privacidad/'],
  ['en', '/en/privacidad/'],
  ['es', '/es/terminos/'],
  ['en', '/en/terminos/'],
  ['es', '/es/calculadora-1rm/'],
  ['en', '/en/one-rep-max-calculator/'],
  ['es', '/es/calculadora-imc/'],
  ['en', '/en/bmi-calculator/'],
  ['es', '/es/calcular-calorias/'],
  ['en', '/en/calorie-calculator/'],
  ['es', '/es/rutinas-espalda/'],
  ['en', '/en/back-routines/'],
  ['es', '/es/ejercicios-espalda/'],
  ['en', '/en/back-exercises/'],
  ['es', '/es/anatomia-de-la-espalda/'],
  ['en', '/en/back-anatomy/'],
  ['es', '/es/elige-las-dominadas-adecuadas-para-mejorar-tu-espalda/'],
  ['en', '/en/best-pull-ups-for-back-width/'],
  ['es', '/es/mejores-ejercicios-con-mancuernas-para-espalda/'],
  ['en', '/en/dumbbell-back-exercises/'],
  ['es', '/es/consejos-para-desarrollar-espalda/'],
  ['en', '/en/how-to-build-back-muscle/'],
  ['es', '/es/espalda-baja-fuerte/'],
  ['en', '/en/strong-lower-back/'],
  ['es', '/es/agarres-jalones-dorsales/'],
  ['en', '/en/lat-pulldown-grips/'],
  ['es', '/es/como-ampliar-tus-dorsales/'],
  ['en', '/en/how-to-widen-your-lats/'],
  ['es', '/es/mejores-jalones-para-trabajar-la-parte-inferior-del-dorsal/'],
  ['en', '/en/lower-lat-pulldowns/'],
  ['es', '/es/dominadas/'],
  ['en', '/en/pull-ups/'],
  ['es', '/es/dominadas-agarre-ancho/'],
  ['en', '/en/wide-grip-pull-ups/'],
  ['es', '/es/dominadas-agarre-cerrado/'],
  ['en', '/en/close-grip-pull-ups/'],
  ['es', '/es/remo-barra/'],
  ['en', '/en/barbell-row/'],
  ['es', '/es/remo-mancuerna-una-mano/'],
  ['en', '/en/one-arm-dumbbell-row/'],
  ['es', '/es/remo-barra-t/'],
  ['en', '/en/t-bar-row/'],
  ['es', '/es/jalones-frontales-2/'],
  ['en', '/en/front-lat-pulldowns/'],
  ['es', '/es/jalones-agarre-cerrado/'],
  ['en', '/en/close-grip-lat-pulldowns/'],
  ['es', '/es/jalones-agarre-v/'],
  ['en', '/en/v-grip-lat-pulldowns/'],
  ['es', '/es/jalones-tras-nuca/'],
  ['en', '/en/behind-the-neck-lat-pulldowns/'],
  ['es', '/es/hiperextensiones-espalda/'],
  ['en', '/en/back-extensions/'],
  ['es', '/es/pullover-mancuerna/'],
  ['en', '/en/dumbbell-pullover/'],
  ['es', '/es/pullover-barra/'],
  ['en', '/en/barbell-pullover/'],
  ['es', '/es/rutina-espalda-amplitud-densidad/'],
  ['en', '/en/back-width-and-thickness-routine/'],
  ['es', '/es/como-entrenar-la-espalda-en-quince-minutos/'],
  ['en', '/en/15-minute-back-workout/'],
  ['es', '/es/rutina-de-espalda-para-dorsales-mas-grandes-y-musculados/'],
  ['en', '/en/back-routine-for-bigger-lats/'],
  ['es', '/es/dominadas-asistidas/'],
  ['en', '/en/assisted-pull-ups/'],
  ['es', '/es/dominadas-con-peso-multipower/'],
  ['en', '/en/weighted-pull-ups-machine/'],
  ['es', '/es/dominadas-tras-nuca/'],
  ['en', '/en/behind-the-neck-pull-ups/'],
  ['es', '/es/jalon-dorsal-a-una-mano/'],
  ['en', '/en/one-arm-lat-pulldown/'],
  ['es', '/es/jalones-en-maquina/'],
  ['en', '/en/machine-lat-pulldowns/'],
  ['es', '/es/jalones-frontales-brazos-rectos/'],
  ['en', '/en/straight-arm-lat-pulldowns/'],
  ['es', '/es/remo-polea-sentado/'],
  ['en', '/en/seated-cable-row/'],
  ['es', '/es/remo-pendley/'],
  ['en', '/en/pendlay-row/'],
  ['es', '/es/remo-barra-agarre-invertido/'],
  ['en', '/en/reverse-grip-barbell-row/'],
  ['es', '/es/dominadas-programa-avanzado/'],
  ['en', '/en/advanced-pull-up-program/'],
  ['es', '/es/buenos-dias-barra-de-pie/'],
  ['en', '/en/standing-good-mornings/'],
  ['es', '/es/buenos-dias-barra-sentado/'],
  ['en', '/en/seated-good-mornings/'],
  ['es', '/es/buenos-dias-con-barra-piernas-separadas/'],
  ['en', '/en/wide-stance-good-mornings/'],
  ['es', '/es/peso-muerto-piernas-rigidas-barra/'],
  ['en', '/en/stiff-leg-deadlift-barbell/'],
  ['es', '/es/peso-muerto-piernas-rigidas-mancuernas/'],
  ['en', '/en/stiff-leg-deadlift-dumbbells/'],
  ['es', '/es/peso-muerto-sumo/'],
  ['en', '/en/sumo-deadlift/'],
  ['es', '/es/pullover-en-banco-declinado/'],
  ['en', '/en/decline-bench-pullover/'],
  ['es', '/es/remo-en-polea-a-una-mano-de-pie/'],
  ['en', '/en/one-arm-cable-row/'],
  ['es', '/es/remo-invertido/'],
  ['en', '/en/inverted-row/'],
  ['es', '/es/remo-maquina/'],
  ['en', '/en/machine-row/'],
];

// Content routes, keyed by a stable id with the slug each locale publishes. The
// locales do not share slugs, so the alternates are resolved through this table
// instead of swapping the locale prefix.
const ROUTES = {
  home: { es: '/', en: '/' },
  privacy: { es: '/privacidad', en: '/privacidad' },
  terms: { es: '/terminos', en: '/terminos' },
  oneRm: { es: '/calculadora-1rm', en: '/one-rep-max-calculator' },
  bmi: { es: '/calculadora-imc', en: '/bmi-calculator' },
  calories: { es: '/calcular-calorias', en: '/calorie-calculator' },
  backRoutines: { es: '/rutinas-espalda', en: '/back-routines' },
  backExercises: { es: '/ejercicios-espalda', en: '/back-exercises' },
  backAnatomy: { es: '/anatomia-de-la-espalda', en: '/back-anatomy' },
  pullUpWidth: {
    es: '/elige-las-dominadas-adecuadas-para-mejorar-tu-espalda',
    en: '/best-pull-ups-for-back-width',
  },
  dumbbellBack: {
    es: '/mejores-ejercicios-con-mancuernas-para-espalda',
    en: '/dumbbell-back-exercises',
  },
  backTips: {
    es: '/consejos-para-desarrollar-espalda',
    en: '/how-to-build-back-muscle',
  },
  lowerBack: { es: '/espalda-baja-fuerte', en: '/strong-lower-back' },
  latGrips: { es: '/agarres-jalones-dorsales', en: '/lat-pulldown-grips' },
  latWidth: { es: '/como-ampliar-tus-dorsales', en: '/how-to-widen-your-lats' },
  lowerLat: {
    es: '/mejores-jalones-para-trabajar-la-parte-inferior-del-dorsal',
    en: '/lower-lat-pulldowns',
  },
  pullUps: { es: '/dominadas', en: '/pull-ups' },
  widePullUps: { es: '/dominadas-agarre-ancho', en: '/wide-grip-pull-ups' },
  closePullUps: { es: '/dominadas-agarre-cerrado', en: '/close-grip-pull-ups' },
  barbellRow: { es: '/remo-barra', en: '/barbell-row' },
  oneArmRow: { es: '/remo-mancuerna-una-mano', en: '/one-arm-dumbbell-row' },
  tBarRow: { es: '/remo-barra-t', en: '/t-bar-row' },
  frontLatPulldowns: { es: '/jalones-frontales-2', en: '/front-lat-pulldowns' },
  closeGripPulldowns: { es: '/jalones-agarre-cerrado', en: '/close-grip-lat-pulldowns' },
  vGripPulldowns: { es: '/jalones-agarre-v', en: '/v-grip-lat-pulldowns' },
  behindNeckPulldowns: {
    es: '/jalones-tras-nuca',
    en: '/behind-the-neck-lat-pulldowns',
  },
  backExtensions: { es: '/hiperextensiones-espalda', en: '/back-extensions' },
  dumbbellPullover: { es: '/pullover-mancuerna', en: '/dumbbell-pullover' },
  barbellPullover: { es: '/pullover-barra', en: '/barbell-pullover' },
  backWidthRoutine: {
    es: '/rutina-espalda-amplitud-densidad',
    en: '/back-width-and-thickness-routine',
  },
  fifteenMinuteBack: {
    es: '/como-entrenar-la-espalda-en-quince-minutos',
    en: '/15-minute-back-workout',
  },
  biggerLatsRoutine: {
    es: '/rutina-de-espalda-para-dorsales-mas-grandes-y-musculados',
    en: '/back-routine-for-bigger-lats',
  },
  assistedPullUps: { es: '/dominadas-asistidas', en: '/assisted-pull-ups' },
  weightedPullUps: {
    es: '/dominadas-con-peso-multipower',
    en: '/weighted-pull-ups-machine',
  },
  behindNeckPullUps: {
    es: '/dominadas-tras-nuca',
    en: '/behind-the-neck-pull-ups',
  },
  oneArmPulldown: { es: '/jalon-dorsal-a-una-mano', en: '/one-arm-lat-pulldown' },
  machinePulldowns: { es: '/jalones-en-maquina', en: '/machine-lat-pulldowns' },
  straightArmPulldowns: {
    es: '/jalones-frontales-brazos-rectos',
    en: '/straight-arm-lat-pulldowns',
  },
  seatedCableRow: { es: '/remo-polea-sentado', en: '/seated-cable-row' },
  pendlayRow: { es: '/remo-pendley', en: '/pendlay-row' },
  reverseGripRow: {
    es: '/remo-barra-agarre-invertido',
    en: '/reverse-grip-barbell-row',
  },
  advancedPullUp: { es: '/dominadas-programa-avanzado', en: '/advanced-pull-up-program' },
  standingGoodMornings: { es: '/buenos-dias-barra-de-pie', en: '/standing-good-mornings' },
  seatedGoodMornings: { es: '/buenos-dias-barra-sentado', en: '/seated-good-mornings' },
  wideGoodMornings: {
    es: '/buenos-dias-con-barra-piernas-separadas',
    en: '/wide-stance-good-mornings',
  },
  stiffLegBarbell: {
    es: '/peso-muerto-piernas-rigidas-barra',
    en: '/stiff-leg-deadlift-barbell',
  },
  stiffLegDumbbells: {
    es: '/peso-muerto-piernas-rigidas-mancuernas',
    en: '/stiff-leg-deadlift-dumbbells',
  },
  sumoDeadlift: { es: '/peso-muerto-sumo', en: '/sumo-deadlift' },
  declinePullover: { es: '/pullover-en-banco-declinado', en: '/decline-bench-pullover' },
  oneArmCableRow: {
    es: '/remo-en-polea-a-una-mano-de-pie',
    en: '/one-arm-cable-row',
  },
  invertedRow: { es: '/remo-invertido', en: '/inverted-row' },
  machineRow: { es: '/remo-maquina', en: '/machine-row' },
};

const routeId = (path) => {
  const [locale, ...rest] = path.replace(/^\/+|\/+$/g, '').split('/');
  const bare = `/${rest.join('/')}`;
  return Object.keys(ROUTES).find((id) => ROUTES[id][locale] === bare);
};

// Spanish words that must never reach an English page.
const SPANISH_SENTINELS = [
  'Última actualización',
  'Deja de entrenar',
  'Avísame cuando salga',
  'Funciones',
  'Capturas',
  'Responsable del tratamiento',
  'Términos y Condiciones',
];

const failures = [];
const checks = [];

function check(name, ok, detail = '') {
  checks.push({ name, ok, detail });
  if (!ok) failures.push(`${name}${detail ? ` — ${detail}` : ''}`);
}

const fileFor = (path) => join(DIST, path.replace(/^\/|\/$/g, ''), 'index.html');

function alternatesFor(path) {
  const locale = path.startsWith('/en/') ? 'en' : 'es';
  const id = routeId(path);
  const withSlash = (lang, slug) => `${ORIGIN}/${lang}${slug === '/' ? '/' : `${slug}/`}`;
  return { locale, es: withSlash('es', ROUTES[id].es), en: withSlash('en', ROUTES[id].en) };
}

for (const [lang, path] of PAGES) {
  const file = fileFor(path);
  if (!existsSync(file)) {
    check(`${path} exists`, false);
    continue;
  }
  check(`${path} exists`, true);

  const html = readFileSync(file, 'utf8');
  const expected = alternatesFor(path);

  check(`${path} html lang`, new RegExp(`<html[^>]*\\slang="${lang}"`).test(html));
  check(
    `${path} canonical`,
    html.includes(`<link rel="canonical" href="${ORIGIN}${path}">`),
    `expected ${ORIGIN}${path}`,
  );
  for (const [code, url] of [
    ['es', expected.es],
    ['en', expected.en],
    ['x-default', expected.es],
  ]) {
    check(
      `${path} alternate ${code}`,
      html.includes(`<link rel="alternate" hreflang="${code}" href="${url}">`),
      `expected ${url}`,
    );
  }
  check(`${path} og:locale`, html.includes(`content="${lang === 'en' ? 'en_GB' : 'es_ES'}"`));

  // The header switch must land on the pair, not on the same slug in the other
  // locale. Articles use different slugs per language, so this is the check that
  // catches a link to /en/<spanish-slug>/ (a 404).
  const switchLinks = [...html.matchAll(/<a href="([^"]+)" class="lang-switch__link"[^>]*hreflang="(es|en)"/g)];
  for (const code of ['es', 'en']) {
    const link = switchLinks.find((match) => match[2] === code);
    const expectedPath = (code === 'es' ? expected.es : expected.en).replace(ORIGIN, '');
    check(
      `${path} language switch ${code}`,
      link?.[1] === expectedPath,
      `expected ${expectedPath}, got ${link?.[1] ?? 'no link'}`,
    );
  }

  if (lang === 'en') {
    for (const sentinel of SPANISH_SENTINELS) {
      check(`${path} has no "${sentinel}"`, !html.includes(sentinel));
    }
  }
}

// Legacy paths are redirect stubs in dev, never indexed content.
for (const path of ['/', '/privacidad/', '/terminos/']) {
  const file = fileFor(path);
  if (!existsSync(file)) {
    check(`stub ${path} exists`, false);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  check(`stub ${path} is noindex`, html.includes('name="robots" content="noindex"'));
  check(`stub ${path} never canonicalises to itself`, !html.includes(`href="${ORIGIN}${path}"`));
}

const redirects = readFileSync(join(DIST, '_redirects'), 'utf8');
for (const rule of [
  '/ /es/ 302',
  '/privacidad /es/privacidad/ 301',
  '/terminos /es/terminos/ 301',
  '/sitemap.xml /sitemap-index.xml 301',
  '/en/calculadora-1rm/ /en/one-rep-max-calculator/ 301',
  '/en/calculadora-imc/ /en/bmi-calculator/ 301',
  '/en/calcular-calorias/ /en/calorie-calculator/ 301',
]) {
  check(`_redirects "${rule}"`, redirects.includes(rule));
}

const sitemapFile = join(DIST, 'sitemap-0.xml');
if (!existsSync(sitemapFile)) {
  check('sitemap-0.xml exists', false);
} else {
  const sitemap = readFileSync(sitemapFile, 'utf8');
  for (const [, path] of PAGES) {
    check(`sitemap has ${path}`, sitemap.includes(`<loc>${ORIGIN}${path}</loc>`));
  }
  check('sitemap has hreflang alternates', sitemap.includes('xhtml:link'));
  for (const stub of ['<loc>https://gymlab.dev/</loc>', `${ORIGIN}/privacidad/`, `${ORIGIN}/terminos/`]) {
    check(`sitemap excludes ${stub}`, !sitemap.includes(stub));
  }
}

// The sitemap and the markup must publish the same hreflang annotations: same
// codes and same targets. Region subtags on one side and not the other, or a
// missing x-default, leaves two competing sets instead of one reinforced set.
if (existsSync(sitemapFile)) {
  const xml = readFileSync(sitemapFile, 'utf8');
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => {
    const body = match[1];
    return {
      loc: /<loc>([^<]+)<\/loc>/.exec(body)?.[1],
      links: [...body.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)]
        .map((link) => `${link[1]}=${link[2]}`)
        .sort(),
    };
  });

  for (const [lang, path] of PAGES) {
    const html = readFileSync(fileFor(path), 'utf8');
    const htmlLinks = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)]
      .map((link) => `${link[1]}=${link[2]}`)
      .sort();
    const entry = entries.find((candidate) => candidate.loc === `${ORIGIN}${path}`);

    check(`sitemap has an entry for ${path}`, Boolean(entry));
    check(
      `${path} hreflang annotations match the sitemap`,
      entry !== undefined && JSON.stringify(entry.links) === JSON.stringify(htmlLinks),
      `markup [${htmlLinks.join(' ')}] vs sitemap [${(entry?.links ?? []).join(' ')}]`,
    );
  }
}

// Landing SEO contract: the meta description, the visible FAQ and the JSON-LD
// graphs must describe the same page. Only the landing carries structured data.
const LANDINGS = [
  {
    path: '/es/',
    inLanguage: 'es-ES',
    terms: ['app de entrenamiento', 'gratis', 'sin conexión'],
    questions: ['¿GymLab es gratis?', '¿Necesito crear una cuenta?'],
  },
  {
    path: '/en/',
    inLanguage: 'en-GB',
    terms: ['training app', 'free', 'offline'],
    questions: ['Is GymLab free?', 'Do I need an account?'],
  },
];

for (const landing of LANDINGS) {
  const { path } = landing;
  const file = fileFor(path);
  if (!existsSync(file)) {
    check(`seo ${path} exists`, false);
    continue;
  }
  const html = readFileSync(file, 'utf8');

  // Description: 150-160 characters and carrying the primary keyword.
  const metaDescription = html.match(/<meta name="description" content="([^"]*)">/)?.[1] ?? '';
  check(
    `seo ${path} description length`,
    metaDescription.length >= 150 && metaDescription.length <= 160,
    `got ${metaDescription.length} characters`,
  );
  for (const term of landing.terms) {
    check(
      `seo ${path} description mentions "${term}"`,
      metaDescription.toLowerCase().includes(term.toLowerCase()),
    );
  }

  // Both new FAQ entries must reach the rendered page.
  for (const question of landing.questions) {
    check(`seo ${path} renders FAQ "${question}"`, html.includes(question));
  }

  // Social card completeness: the alt is the only thing a screen reader gets from
  // the image, and the type lets consumers skip a content sniff.
  check(
    `seo ${path} has twitter:image:alt`,
    /<meta name="twitter:image:alt" content="[^"]+">/.test(html),
  );
  check(
    `seo ${path} has og:image:type`,
    /<meta property="og:image:type" content="image\/jpeg">/.test(html),
  );
  check(
    `seo ${path} has og:locale:alternate`,
    /<meta property="og:locale:alternate" content="(?:es_ES|en_GB)">/.test(html),
  );

  // One graph per page. A second block was the old shape; the site now composes
  // every node into a single `@graph` so references resolve inside the document.
  const blocks = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].map((match) => match[1]);
  check(`seo ${path} has 1 json-ld block`, blocks.length === 1, `got ${blocks.length}`);

  let graph = null;
  try {
    graph = JSON.parse(blocks[0] ?? '{}');
  } catch (error) {
    check(`seo ${path} json-ld parses`, false, String(error));
  }
  check(`seo ${path} json-ld parses`, Boolean(graph));

  const nodes = graph?.['@graph'] ?? [];
  const byType = (type) => nodes.find((node) => node['@type'] === type);
  const app = byType('SoftwareApplication');
  const site = byType('WebSite');
  const org = byType('Organization');

  check(`seo ${path} has Organization`, Boolean(org));
  check(`seo ${path} has WebSite`, Boolean(site));
  check(`seo ${path} has SoftwareApplication`, Boolean(app));

  // The FAQ rich result was retired in May 2026. The page still renders the
  // questions; the schema node is the part that no longer earns anything.
  check(`seo ${path} ships no FAQPage`, !html.includes('"FAQPage"'));

  if (site && org) {
    check(
      `seo ${path} WebSite.publisher resolves to Organization`,
      site.publisher?.['@id'] === org['@id'],
      `got ${site.publisher?.['@id']}`,
    );
  }

  if (app) {
    check(`seo ${path} offer price is "0"`, app.offers?.price === '0', `got ${app.offers?.price}`);
    check(
      `seo ${path} has no aggregateRating`,
      !Object.hasOwn(app, 'aggregateRating'),
    );
    // The stores are announced, not shipped. Web is the only honest platform.
    check(
      `seo ${path} operatingSystem is "Web"`,
      app.operatingSystem === 'Web',
      `got ${app.operatingSystem}`,
    );
    check(
      `seo ${path} inLanguage is ${landing.inLanguage}`,
      app.inLanguage === landing.inLanguage,
      `got ${app.inLanguage}`,
    );
  }
}

// Calculator pages: the same metadata rule as the landing, one H1 (a single topic)
// and a live CTA. Each entry names the term its own copy has to match; the BMI
// descriptions spell the concept out, so the term follows the copy, not the slug.
const CALC_PAGES = [
  { path: '/es/calculadora-1rm/', term: '1rm' },
  { path: '/en/one-rep-max-calculator/', term: 'one rep max' },
  { path: '/es/calculadora-imc/', term: 'índice de masa corporal' },
  { path: '/en/bmi-calculator/', term: 'body mass index' },
  { path: '/es/calcular-calorias/', term: 'calorías' },
  { path: '/en/calorie-calculator/', term: 'calories' },
];

for (const { path, term } of CALC_PAGES) {
  const file = fileFor(path);
  if (!existsSync(file)) {
    check(`calc ${path} exists`, false);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  const metaDescription = html.match(/<meta name="description" content="([^"]*)">/)?.[1] ?? '';

  check(
    `calc ${path} description length`,
    metaDescription.length >= 150 && metaDescription.length <= 160,
    `got ${metaDescription.length} characters`,
  );
  check(`calc ${path} description mentions "${term}"`, metaDescription.toLowerCase().includes(term));
  check(`calc ${path} has exactly one h1`, (html.match(/<h1[\s>]/g) ?? []).length === 1);
  check(`calc ${path} links to the app`, html.includes('https://app.gymlab.dev'));
  // A unit or label placed on its own line after <output> loses its space: the
  // built page renders "90kg" instead of "90 kg".
  check(
    `calc ${path} keeps a space after every output`,
    !/<\/output>[0-9A-Za-zÀ-ÿ]/.test(html),
  );

  // Each calculator composes its own graph: the site nodes travel with it so no
  // `@id` reference points at a node that lives on another page.
  const schemaBlocks = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].map((match) => match[1]);
  check(
    `calc ${path} has 1 json-ld block`,
    schemaBlocks.length === 1,
    `got ${schemaBlocks.length}`,
  );

  let calcNodes = [];
  try {
    calcNodes = JSON.parse(schemaBlocks[0] ?? '{}')['@graph'] ?? [];
  } catch (error) {
    check(`calc ${path} json-ld parses`, false, String(error));
  }
  check(`calc ${path} json-ld parses`, calcNodes.length > 0);

  const calcTypes = calcNodes.map((node) => node['@type']);
  check(`calc ${path} has WebApplication`, calcTypes.includes('WebApplication'));
  check(`calc ${path} has BreadcrumbList`, calcTypes.includes('BreadcrumbList'));
  check(`calc ${path} ships no FAQPage`, !html.includes('"FAQPage"'));

  const calcApp = calcNodes.find((node) => node['@type'] === 'WebApplication');
  const canonical = html.match(/<link rel="canonical" href="([^"]*)">/)?.[1];
  if (calcApp) {
    check(
      `calc ${path} operatingSystem is "Web"`,
      calcApp.operatingSystem === 'Web',
      `got ${calcApp.operatingSystem}`,
    );
    check(
      `calc ${path} app url matches canonical`,
      calcApp.url === canonical,
      `${calcApp.url} vs ${canonical}`,
    );
  }

  const calcIds = new Set(calcNodes.map((node) => node['@id']).filter(Boolean));
  const refs = [];
  const collect = (value) => {
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value)) {
      value.forEach(collect);
      return;
    }
    if (Object.keys(value).length === 1 && typeof value['@id'] === 'string') refs.push(value['@id']);
    Object.values(value).forEach(collect);
  };
  calcNodes.forEach(collect);
  const dangling = refs.filter((ref) => !calcIds.has(ref));
  check(`calc ${path} has no dangling @id`, dangling.length === 0, dangling.join(', '));
}

// Orphan pages are invisible: the landing must link to every calculator, and the
// calculators must link to each other, or the surface exists but nobody reaches it.
const CALC_ROUTES = [
  { id: 'oneRm', es: '/calculadora-1rm', en: '/one-rep-max-calculator' },
  { id: 'bmi', es: '/calculadora-imc', en: '/bmi-calculator' },
  { id: 'calories', es: '/calcular-calorias', en: '/calorie-calculator' },
];

for (const landing of LANDINGS) {
  const html = readFileSync(fileFor(landing.path), 'utf8');
  const lang = landing.path.startsWith('/en/') ? 'en' : 'es';
  const prefix = `/${lang}`;
  const anchor = lang === 'en' ? 'id="calculators"' : 'id="calculadoras"';

  check(`links ${landing.path} anchors the calculators`, html.includes(anchor));
  for (const route of CALC_ROUTES) {
    check(
      `links ${landing.path} → ${route[lang]}`,
      html.includes(`href="${prefix}${route[lang]}/"`),
      `expected href="${prefix}${route[lang]}/"`,
    );
  }
}

for (const lang of ['es', 'en']) {
  for (const route of CALC_ROUTES) {
    const file = fileFor(`/${lang}${route[lang]}/`);
    if (!existsSync(file)) continue;
    const html = readFileSync(file, 'utf8');
    for (const other of CALC_ROUTES) {
      if (other.id === route.id) continue;
      check(
        `links ${lang}${route[lang]} → ${other[lang]}`,
        html.includes(`href="/${lang}${other[lang]}/"`),
        `expected href="/${lang}${other[lang]}/"`,
      );
    }
  }
}

const failed = checks.filter((c) => !c.ok);
for (const c of checks) {
  if (!c.ok) console.log(`FAIL  ${c.name}${c.detail ? ` — ${c.detail}` : ''}`);
}
console.log(
  `\n${checks.length - failed.length}/${checks.length} i18n checks passed` +
    (failed.length ? ` — ${failed.length} failed` : ''),
);
process.exit(failed.length ? 1 : 0);
