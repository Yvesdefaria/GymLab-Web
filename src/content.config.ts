import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One entry per article and locale. The file lives at `articles/<lang>/<slug>.md`,
// so the entry id is `<lang>/<slug>` and the route derives the URL from it.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    block: z.string(),
    section: z.string(),
    hero: z.string().optional(),
    heroAlt: z.string().optional(),
    heroCredit: z.string().optional(),
    /** First paragraph, rendered as the editorial lead above the body. */
    lead: z.string(),
    /** Editorial tags shown as stencil chips under the lead. */
    tags: z.array(z.string()).default([]),
    /** Right side of the header rule, e.g. "Guía · 11 rutinas". */
    meta: z.string(),
    /** The same article in the other locale. Drives canonical and hreflang. */
    alternate: z.string(),
    updated: z.string(),
  }),
});

export const collections = { articles };
