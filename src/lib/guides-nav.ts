// Builds the guides navigation from the article collection. Counts, labels and
// links are derived at build time, so publishing an article updates the menu and
// the hub without editing this file. An unmapped section fails the build.
import { getCollection } from 'astro:content';
import { GUIDE_BLOCKS } from '../data/guides-nav';
import type { Lang } from '../i18n';

export type GuideLink = {
  /** Public article path, trailing slash included. */
  href: string;
  title: string;
};

export type GuideNavSection = {
  id: string;
  label: string;
  articles: GuideLink[];
};

export type GuideNavBlock = {
  id: string;
  label: string;
  total: number;
  sections: GuideNavSection[];
};

// Published `section` values that differ from the taxonomy label, keyed by the
// normalized value. Everything else matches after case and accent normalization.
const ALIASES: Record<Lang, Record<string, string>> = {
  es: {
    'prevencion y recuperacion de lesiones': 'prevencion-y-recuperacion',
    'rutinas en principiantes': 'rutinas-para-principiantes',
  },
  en: {
    'volume routines': 'rutinas-de-volumen',
    shoulder: 'hombro',
    'legendary physiques': 'fisicos-de-leyenda',
  },
};

function normalize(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

const sectionIdByLabel: Record<Lang, Map<string, string>> = {
  es: new Map(),
  en: new Map(),
};

for (const lang of ['es', 'en'] as const) {
  for (const block of GUIDE_BLOCKS) {
    for (const section of block.sections) {
      sectionIdByLabel[lang].set(normalize(section[lang]), section.id);
    }
  }
}

function resolveSectionId(lang: Lang, published: string): string | undefined {
  const key = normalize(published);
  return ALIASES[lang][key] ?? sectionIdByLabel[lang].get(key);
}

async function build(lang: Lang): Promise<GuideNavBlock[]> {
  const entries = (await getCollection('articles')).filter((entry) => entry.data.lang === lang);

  const blocks: GuideNavBlock[] = GUIDE_BLOCKS.map((block) => ({
    id: block.id,
    label: block[lang],
    total: 0,
    sections: block.sections.map((section) => ({
      id: section.id,
      label: section[lang],
      articles: [],
    })),
  }));

  const sectionById = new Map<string, GuideNavSection>();
  for (const block of blocks) {
    for (const section of block.sections) sectionById.set(section.id, section);
  }

  for (const entry of entries) {
    const sectionId = resolveSectionId(lang, entry.data.section);
    const section = sectionId ? sectionById.get(sectionId) : undefined;
    if (!section) {
      throw new Error(
        `Unmapped section "${entry.data.section}" in ${entry.id} (${lang}). Add the section to src/data/guides-nav.ts or its published name to the alias map in src/lib/guides-nav.ts.`,
      );
    }
    section.articles.push({
      href: `/${lang}/${entry.id.split('/').slice(1).join('/')}/`,
      title: entry.data.h1,
    });
  }

  let total = 0;
  for (const block of blocks) {
    block.sections = block.sections.filter((section) => section.articles.length > 0);
    for (const section of block.sections) {
      section.articles.sort((a, b) => a.title.localeCompare(b.title, lang));
      block.total += section.articles.length;
    }
    total += block.total;
  }

  if (total !== entries.length) {
    throw new Error(
      `Guides nav for ${lang} lists ${total} articles but the collection holds ${entries.length}.`,
    );
  }

  return blocks;
}

// The nav reads frontmatter once per process, so a running dev server keeps the
// first result: restart it after editing an article's `section`.
const navs = new Map<Lang, Promise<GuideNavBlock[]>>();

export async function getGuideNav(lang: Lang): Promise<GuideNavBlock[]> {
  const cached = navs.get(lang);
  if (cached) return cached;
  const pending = build(lang);
  navs.set(lang, pending);
  return pending;
}
