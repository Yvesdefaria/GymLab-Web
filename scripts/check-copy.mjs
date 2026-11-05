// Source-level copy gate. `check:i18n` proves the built routes; this proves the
// article copy against the contract before a page can be marked as done.
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = 'src/content/articles';
const REQUIRED = [
  'lang',
  'title',
  'description',
  'h1',
  'block',
  'section',
  'lead',
  'tags',
  'meta',
  'alternate',
  'updated',
];

const VOSOTROS =
  /\b(usad|reducid|podéis|tenéis|vuestr\w*|debéis|habéis|necesitéis|inclinaos|echaos|haríais|mantened|llevad|balanceéis|centréis|arqueéis|aseguraos)\b/i;
// JavaScript's \b treats accented vowels as non-word characters, so "mirá"
// matches inside "mirándose". Use an explicit letter class as the boundary.
const WORD_CHAR = 'A-Za-zÁÉÍÓÚÜÑáéíóúüñ';
const VOSEO = new RegExp(
  `(?<![${WORD_CHAR}])(tenés|podés|querés|escribinos|mirá|decí|sabés|hacés)(?![${WORD_CHAR}])`,
  'i',
);

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : entry.name.endsWith('.md') ? [full] : [];
  });
}

const failures = [];
const checks = [];

function check(name, ok, detail = '') {
  checks.push({ name, ok });
  if (!ok) failures.push(`${name}${detail ? ` — ${detail}` : ''}`);
}

function frontmatter(text) {
  const parts = text.split(/^---\r?$/m);
  return parts.length >= 3 ? parts[1] : '';
}

function body(text) {
  const parts = text.split(/^---\r?$/m);
  return parts.length >= 3 ? parts.slice(2).join('---') : text;
}

function grab(fm, key) {
  const match = fm.match(new RegExp(`^${key}:\\s*(?:"([^"]*)"|'([^']*)'|(.*))$`, 'm'));
  return match ? (match[1] ?? match[2] ?? match[3] ?? '').trim() : '';
}

for (const file of walk(ROOT)) {
  const rel = relative(ROOT, file).replaceAll('\\', '/');
  const text = readFileSync(file, 'utf8');
  const fm = frontmatter(text);
  const content = body(text);

  check(`${rel} frontmatter`, fm !== '');
  for (const field of REQUIRED) {
    check(`${rel} ${field}`, grab(fm, field) !== '');
  }

  const lang = grab(fm, 'lang');
  const title = grab(fm, 'title');
  const description = grab(fm, 'description');
  const h1 = grab(fm, 'h1');
  const hero = grab(fm, 'hero');
  const heroCredit = grab(fm, 'heroCredit');
  const alternate = grab(fm, 'alternate');
  const updated = grab(fm, 'updated');

  check(`${rel} lang is es|en`, lang === 'es' || lang === 'en', lang);
  check(`${rel} title 45-60`, title.length >= 45 && title.length <= 60, `${title.length}`);
  check(
    `${rel} description 150-160`,
    description.length >= 150 && description.length <= 160,
    `${description.length}`,
  );
  check(`${rel} title has no archive artifacts`, !/[|▷]/.test(title));
  check(`${rel} h1 is an exact phrase`, h1 !== '' && !/[|▷]/.test(h1));
  check(`${rel} hero has a credit`, hero === '' || heroCredit !== '');
  check(
    `${rel} alternate points to the other locale`,
    lang === 'es' ? alternate.startsWith('/en/') : alternate.startsWith('/es/'),
    alternate,
  );
  check(`${rel} updated is an ISO date`, /^\d{4}-\d{2}-\d{2}$/.test(updated), updated);
  check(`${rel} has at least one H2`, /^## /m.test(content));

  const emDashes = (content.match(/—/g) ?? []).length;
  check(`${rel} at most 2 em dashes`, emDashes <= 2, `${emDashes}`);

  if (lang === 'es') {
    check(`${rel} has no vosotros`, !VOSOTROS.test(content));
    check(`${rel} has no voseo`, !VOSEO.test(content));
    check(`${rel} does not say "gym"`, !/\bgym\b/i.test(content));
    check(`${rel} has no "cortacésped"`, !/\bcortacésped\b/i.test(content));
  }
}

for (const failure of failures) console.error(`FAIL ${failure}`);
console.log(`\n${checks.length - failures.length}/${checks.length} copy checks passed`);
if (failures.length > 0) process.exit(1);
