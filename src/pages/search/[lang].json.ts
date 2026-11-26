// Search index per locale, emitted as `/search/{es,en}.json`. It is the same
// data the guides hub lists, flattened, plus the static pages. Built here so the
// client never ships the taxonomy in JavaScript.
import type { APIRoute, GetStaticPaths } from 'astro';
import { calcPath, localePath, ROUTES, useTranslations, type Lang } from '../../i18n';
import { getGuideNav } from '../../lib/guides-nav';
import type { SearchEntry } from '../../lib/search';

export const getStaticPaths = (() =>
  [{ params: { lang: 'es' } }, { params: { lang: 'en' } }]) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const lang: Lang = params.lang === 'en' ? 'en' : 'es';
  const t = useTranslations(lang);
  const guidesPath = localePath(lang, ROUTES.guides[lang]);

  const unit = (count: number) =>
    `${count} ${count === 1 ? t.guidesHub.unitOne : t.guidesHub.unitMany}`;

  const entries: SearchEntry[] = [];
  const blocks = await getGuideNav(lang);

  for (const block of blocks) {
    entries.push({
      title: block.label,
      meta: unit(block.total),
      href: `${guidesPath}#${block.id}`,
      group: 'section',
    });

    for (const section of block.sections) {
      entries.push({
        title: section.label,
        meta: unit(section.articles.length),
        href: `${guidesPath}#s-${section.id}`,
        group: 'section',
      });

      for (const article of section.articles) {
        entries.push({
          title: article.title,
          meta: block.label,
          href: article.href,
          group: 'guide',
        });
      }
    }
  }

  const pages = [
    { title: t.search.allGuides, href: guidesPath },
    { title: t.calculators.items[0].title, href: localePath(lang, calcPath(lang, 'oneRm')) },
    { title: t.calculators.items[1].title, href: localePath(lang, calcPath(lang, 'bmi')) },
    { title: t.calculators.items[2].title, href: localePath(lang, calcPath(lang, 'calories')) },
    { title: t.footer.links.privacy, href: localePath(lang, ROUTES.privacy[lang]) },
    { title: t.footer.links.terms, href: localePath(lang, ROUTES.terms[lang]) },
    { title: t.header.contact, href: 'mailto:gymlab@gymlab.dev' },
  ];

  for (const page of pages) {
    entries.push({ ...page, meta: t.search.page, group: 'page' });
  }

  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' },
  });
};
