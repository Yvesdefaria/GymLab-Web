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

/** The same page in the target locale, resolved through the route table below. */
export function localeSwitchPath(pathname: string, target: Lang): string {
  const id = routeIdFromPath(pathname);
  if (id) return localePath(target, ROUTES[id][target]);
  const stripped = pathname.replace(/^\/(?:es|en)(?=\/|$)/, '') || '/';
  return localePath(target, stripped);
}

/**
 * Every content route, keyed by a stable id with its slug per locale. The locales
 * do not share slugs: the English URLs carry the English keyword.
 */
export type RouteId = 'home' | 'privacy' | 'terms' | 'oneRm' | 'bmi' | 'calories';

export const ROUTES: Record<RouteId, Record<Lang, string>> = {
  home: { es: '/', en: '/' },
  privacy: { es: '/privacidad', en: '/privacidad' },
  terms: { es: '/terminos', en: '/terminos' },
  oneRm: { es: '/calculadora-1rm', en: '/one-rep-max-calculator' },
  bmi: { es: '/calculadora-imc', en: '/bmi-calculator' },
  calories: { es: '/calcular-calorias', en: '/calorie-calculator' },
};

/** Calculator route ids, in the order of `calculators.items` in the dictionaries. */
export const CALC_ROUTE_IDS = ['oneRm', 'bmi', 'calories'] as const;
export type CalcRouteId = (typeof CALC_ROUTE_IDS)[number];

/** The URL path for one calculator in one locale. */
export function calcPath(lang: Lang, id: CalcRouteId): string {
  return ROUTES[id][lang];
}

/** Resolve a pathname back to its route id, or `undefined` for an unknown path. */
export function routeIdFromPath(pathname: string): RouteId | undefined {
  const [locale, ...rest] = pathname.replace(/^\/+|\/+$/g, '').split('/');
  const bare = `/${rest.join('/')}`;
  return (Object.keys(ROUTES) as RouteId[]).find((id) => ROUTES[id][locale as Lang] === bare);
}

/** Legal documents, one bundle per locale. `en` is annotated with `LegalDoc`, so gaps are type errors. */
export const legalDocs: Record<Lang, { privacy: LegalDoc; terms: LegalDoc }> = {
  es: { privacy: privacyEs, terms: termsEs },
  en: { privacy: privacyEn, terms: termsEn },
};

export type { LegalDoc, LegalSection };
