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
];

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
  const bare = path.replace(/^\/(?:es|en)(?=\/|$)/, '') || '/';
  const withSlash = (suffix) => `${ORIGIN}/${suffix}${bare}`;
  return { locale, es: withSlash('es'), en: withSlash('en') };
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

  // Exactly two graphs, and every one of them must be valid JSON.
  const blocks = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].map((match) => match[1]);
  check(`seo ${path} has 2 json-ld blocks`, blocks.length === 2, `got ${blocks.length}`);

  const graphs = [];
  for (const block of blocks) {
    try {
      graphs.push(JSON.parse(block));
    } catch (error) {
      check(`seo ${path} json-ld parses`, false, String(error));
    }
  }
  check(
    `seo ${path} json-ld blocks all parse`,
    graphs.length === blocks.length,
    `${graphs.length}/${blocks.length} parsed`,
  );

  const app = graphs.find((graph) => graph['@type'] === 'SoftwareApplication');
  const faq = graphs.find((graph) => graph['@type'] === 'FAQPage');
  check(`seo ${path} has SoftwareApplication`, Boolean(app));
  check(`seo ${path} has FAQPage`, Boolean(faq));

  if (app) {
    check(`seo ${path} offer price is "0"`, app.offers?.price === '0', `got ${app.offers?.price}`);
    check(
      `seo ${path} has no aggregateRating`,
      !Object.hasOwn(app, 'aggregateRating'),
    );
    check(
      `seo ${path} inLanguage is ${landing.inLanguage}`,
      app.inLanguage === landing.inLanguage,
      `got ${app.inLanguage}`,
    );
  }

  if (faq) {
    // The schema must mirror the FAQ actually visible on the page.
    const renderedAnswers = html.split('faq-item__answer').length - 1;
    const questions = Array.isArray(faq.mainEntity) ? faq.mainEntity.length : -1;
    check(
      `seo ${path} FAQPage mirrors rendered answers`,
      questions === renderedAnswers,
      `schema ${questions}, rendered ${renderedAnswers}`,
    );
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
