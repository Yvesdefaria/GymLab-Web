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

const failed = checks.filter((c) => !c.ok);
for (const c of checks) {
  if (!c.ok) console.log(`FAIL  ${c.name}${c.detail ? ` — ${c.detail}` : ''}`);
}
console.log(
  `\n${checks.length - failed.length}/${checks.length} i18n checks passed` +
    (failed.length ? ` — ${failed.length} failed` : ''),
);
process.exit(failed.length ? 1 : 0);
