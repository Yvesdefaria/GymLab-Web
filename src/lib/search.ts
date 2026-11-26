// Ranking for the header search. The index is built once per locale at
// `/search/{lang}.json`; this module runs on the client, so it stays pure and
// small: fold case and accents, score by title match, then cap each group.
import type { Lang } from '../i18n';

export type SearchEntryGroup = 'guide' | 'section' | 'page';

export type SearchEntry = {
  title: string;
  meta: string;
  href: string;
  group: SearchEntryGroup;
};

export type SearchGroup = {
  group: SearchEntryGroup;
  entries: SearchEntry[];
};

const GROUPS: SearchEntryGroup[] = ['guide', 'section', 'page'];
const LIMITS: Record<SearchEntryGroup, number> = { guide: 6, section: 4, page: 3 };

export function normalize(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function score(entry: SearchEntry, query: string): number {
  const title = normalize(entry.title);
  if (title === query) return 5;
  if (title.startsWith(query)) return 4;
  if (title.includes(query)) return 3;
  if (normalize(entry.meta).includes(query)) return 1;
  return 0;
}

/** Grouped hits, in the order guides, sections, pages. Empty groups are dropped. */
export function searchEntries(entries: SearchEntry[], query: string, lang: Lang): SearchGroup[] {
  const normalized = normalize(query);
  if (normalized.length < 2) return [];

  const ranked = entries
    .map((entry) => ({ entry, score: score(entry, normalized) }))
    .filter((item) => item.score > 0)
    .sort(
      (a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title, lang),
    );

  return GROUPS.map((group) => ({
    group,
    entries: ranked
      .filter((item) => item.entry.group === group)
      .slice(0, LIMITS[group])
      .map((item) => item.entry),
  })).filter((result) => result.entries.length > 0);
}
