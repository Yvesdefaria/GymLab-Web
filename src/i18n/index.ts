import { es } from './es';
import { en } from './en';
import { privacy as privacyEs, terms as termsEs } from './legal/es';
import { privacy as privacyEn, terms as termsEn } from './legal/en';
import type { LegalDoc, LegalSection } from './legal/es';

export const LOCALES = ['es', 'en'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LANG: Lang = 'es';

/** The shape of a dictionary. `en` is annotated with it, so a missing key is a type error. */
export type Dict = typeof es;

const dictionaries: Record<Lang, Dict> = { es, en };

/** `/en` and `/en/...` are English; every other path is Spanish. */
export function getLang(pathname: string): Lang {
  return /^\/en(?:\/|$)/.test(pathname) ? 'en' : DEFAULT_LANG;
}

export function useTranslations(lang: Lang): Dict {
  return dictionaries[lang] ?? dictionaries[DEFAULT_LANG];
}

/**
 * Prefix a site path with a locale. The trailing-slash form is canonical,
 * matching what Astro emits and Cloudflare serves:
 * `'/'` → `'/es/'`, `'/privacidad'` → `'/es/privacidad/'`.
 */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean === '' ? `/${lang}/` : `/${lang}/${clean}/`;
}

/** The same page in the target locale: `/en/privacidad/` + `'es'` → `/es/privacidad/`. */
export function localeSwitchPath(pathname: string, target: Lang): string {
  const stripped = pathname.replace(/^\/(?:es|en)(?=\/|$)/, '') || '/';
  return localePath(target, stripped);
}

/**
 * Calculator routes, in the order of `calculators.items` in the dictionaries.
 * The order is the link between the two, so a new calculator goes in both.
 */
export const CALC_PATHS = [
  '/calculadora-1rm',
  '/calculadora-imc',
  '/calcular-calorias',
] as const;

/** Legal documents, one bundle per locale. `en` is annotated with `LegalDoc`, so gaps are type errors. */
export const legalDocs: Record<Lang, { privacy: LegalDoc; terms: LegalDoc }> = {
  es: { privacy: privacyEs, terms: termsEs },
  en: { privacy: privacyEn, terms: termsEn },
};

export type { LegalDoc, LegalSection };
