// JSON-LD builders. Plain objects only: the renderer stays a single
// serialisation step and each page composes the nodes it can back with facts.
import { localePath, useTranslations, type Lang } from '../i18n';

export const ORIGIN = 'https://gymlab.dev';

export type SchemaNode = Record<string, unknown>;

const ORGANIZATION_ID = `${ORIGIN}/#organization`;
const WEBSITE_ID = `${ORIGIN}/#website`;

/** BCP 47 tags for the two locales, matching the `hreflang` set in the layout. */
const inLanguage = (lang: Lang): string => (lang === 'en' ? 'en-GB' : 'es-ES');

/**
 * Absolute URL of a page. Built with the same `localePath` the layout uses for
 * `<link rel="canonical">`, so the markup can never point at a second URL form.
 */
const pageUrl = (lang: Lang, path = '/'): string => `${ORIGIN}${localePath(lang, path)}`;

const freeOffer = (): SchemaNode => ({
  '@type': 'Offer',
  price: '0',
  priceCurrency: 'EUR',
});

// Factual claims about the app, carried over verbatim from the previous markup.
const FEATURE_LIST: Record<Lang, readonly string[]> = {
  en: ['873 exercises with photos', '9 calculators', '68 routine templates', 'Works offline'],
  es: [
    '873 ejercicios con foto',
    '9 calculadoras',
    '68 plantillas de rutina',
    'Funciona sin conexión',
  ],
};

export function organization(lang: Lang): SchemaNode {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'GymLab',
    url: pageUrl(lang),
    logo: `${ORIGIN}/brand/icon-512.png`,
    email: 'gymlab@gymlab.dev',
  };
}

export function webSite(lang: Lang): SchemaNode {
  const t = useTranslations(lang);

  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: pageUrl(lang),
    name: 'GymLab',
    inLanguage: inLanguage(lang),
    description: t.meta.home.description,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function softwareApplication(lang: Lang): SchemaNode {
  const t = useTranslations(lang);

  return {
    '@type': 'SoftwareApplication',
    name: 'GymLab',
    applicationCategory: 'HealthApplication',
    // The app ships on the web only; the store listings are still announced.
    operatingSystem: 'Web',
    url: pageUrl(lang),
    description: t.meta.home.description,
    inLanguage: inLanguage(lang),
    offers: freeOffer(),
    featureList: [...FEATURE_LIST[lang]],
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function webApplication(
  lang: Lang,
  path: string,
  name: string,
  description: string,
): SchemaNode {
  const url = pageUrl(lang, path);

  return {
    '@type': 'WebApplication',
    '@id': `${url}#webapp`,
    url,
    name,
    description,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    inLanguage: inLanguage(lang),
    offers: freeOffer(),
    publisher: { '@id': ORGANIZATION_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function breadcrumbList(lang: Lang, path: string, name: string): SchemaNode {
  const url = pageUrl(lang, path);

  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GymLab', item: pageUrl(lang) },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  };
}
