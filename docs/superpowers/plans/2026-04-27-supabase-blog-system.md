# Supabase Blog Auto-Publishing System — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate a Supabase-powered blog with 66 auto-publishing posts into the existing valricoagent-next site.

**Architecture:** The existing site at `valricoagent-next/` uses Next.js 16 App Router (no `src/` directory) with Tailwind v4 and inline styles. We're adding a Supabase client library, replacing the hardcoded blog pages with dynamic Supabase-backed pages, updating the sitemap to include dynamic blog URLs, adding a robots.ts, copying in the 184KB seed script, and reordering the seed schedule per the briefing's publish priority rules.

**Tech Stack:** Next.js 16 + React 19 + Tailwind CSS v4 + Supabase (PostgreSQL) + Vercel

**Source files:** The pre-built blog system lives at `/Users/barretthenry/Desktop/valricoagent/` with `src/` structure. We adapt paths to the `valricoagent-next` project's `app/` structure (no `src/` prefix).

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Create | `lib/supabase.ts` | Supabase client + query helpers |
| Create | `app/blog/[slug]/page.tsx` | Dynamic blog post page (replaces static posts) |
| Replace | `app/blog/page.tsx` | Blog index → Supabase-driven with pillar filters |
| Delete | `app/blog/bloomingdale-vs-buckhorn-valrico/` | Static post replaced by dynamic route |
| Delete | `app/blog/valrico-housing-market-q1-2026/` | Static post replaced by dynamic route |
| Replace | `app/sitemap.ts` | Add dynamic blog post URLs from Supabase |
| Create | `app/robots.ts` | Allow all crawlers including AI bots |
| Create | `supabase-migration.sql` | Database schema for blog_posts + pillars |
| Create | `scripts/seed-posts.ts` | 66 blog posts with reordered publish schedule |
| Create | `.env.local.example` | Template for Supabase env vars |
| Modify | `package.json` | Add `@supabase/supabase-js` and `dotenv` deps |

---

### Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install @supabase/supabase-js and dotenv**

```bash
cd /Users/barretthenry/Desktop/valricoagent-next
npm install @supabase/supabase-js dotenv
```

Expected: packages added to `dependencies` in package.json.

- [ ] **Step 2: Install tsx as dev dependency (for running seed script)**

```bash
npm install -D tsx
```

- [ ] **Step 3: Verify package.json has the new deps**

```bash
grep -E "supabase|dotenv|tsx" package.json
```

Expected: `@supabase/supabase-js`, `dotenv`, and `tsx` visible.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "Add Supabase, dotenv, and tsx dependencies"
```

---

### Task 2: Create Supabase Client Library

**Files:**
- Create: `lib/supabase.ts`

- [ ] **Step 1: Create lib/ directory and supabase.ts**

Create `/Users/barretthenry/Desktop/valricoagent-next/lib/supabase.ts` with the following content. This is adapted from the source at `/Users/barretthenry/Desktop/valricoagent/src/lib/supabase.ts` — identical logic, just lives at `lib/` instead of `src/lib/`.

```typescript
import { createClient } from '@supabase/supabase-js';

// Public client (for reading published posts on the frontend)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Server client (for seed scripts, cron, admin - uses service role)
export function getServiceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// ============================================================
// Query helpers
// ============================================================

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  pillar: string;
  tags: string[];
  meta_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  secondary_keywords: string[];
  schema_type: string;
  faq_data: { question: string; answer: string }[] | null;
  featured_image: string | null;
  featured_image_alt: string | null;
  og_image: string | null;
  status: string;
  publish_date: string | null;
  related_slugs: string[];
  cta_type: string;
  word_count: number;
  reading_time: number;
  created_at: string;
  updated_at: string;
};

// Get all published posts (respects auto-publish schedule)
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .or(`status.eq.published,and(status.eq.scheduled,publish_date.lte.${new Date().toISOString()})`)
    .order('publish_date', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
  return data || [];
}

// Get posts by pillar
export async function getPostsByPillar(pillar: string): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('pillar', pillar)
    .or(`status.eq.published,and(status.eq.scheduled,publish_date.lte.${new Date().toISOString()})`)
    .order('publish_date', { ascending: false });

  if (error) {
    console.error('Error fetching posts by pillar:', error);
    return [];
  }
  return data || [];
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .or(`status.eq.published,and(status.eq.scheduled,publish_date.lte.${new Date().toISOString()})`)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }
  return data;
}

// Get related posts
export async function getRelatedPosts(slugs: string[]): Promise<BlogPost[]> {
  if (!slugs.length) return [];
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, pillar, publish_date, featured_image, reading_time')
    .in('slug', slugs)
    .or(`status.eq.published,and(status.eq.scheduled,publish_date.lte.${new Date().toISOString()})`);

  if (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
  return data || [];
}

// Get all slugs (for static generation / sitemap)
export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug')
    .or(`status.eq.published,and(status.eq.scheduled,publish_date.lte.${new Date().toISOString()})`);

  if (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
  return (data || []).map((d) => d.slug);
}

// Get all pillars
export async function getPillars() {
  const { data, error } = await supabase
    .from('pillars')
    .select('*')
    .order('sort_order');

  if (error) {
    console.error('Error fetching pillars:', error);
    return [];
  }
  return data || [];
}
```

- [ ] **Step 2: Update tsconfig.json to add `@/` path alias if not present**

Check `tsconfig.json` for a `paths` entry mapping `@/*` to `./*`. If missing, add it so imports like `@/lib/supabase` resolve correctly. The existing project may already have this from the Next.js default.

```bash
grep -c "@/" /Users/barretthenry/Desktop/valricoagent-next/tsconfig.json
```

If 0, add under `compilerOptions`:
```json
"paths": {
  "@/*": ["./*"]
}
```

- [ ] **Step 3: Commit**

```bash
git add lib/supabase.ts tsconfig.json
git commit -m "Add Supabase client library with query helpers"
```

---

### Task 3: Create .env.local.example and supabase-migration.sql

**Files:**
- Create: `.env.local.example`
- Create: `supabase-migration.sql`

- [ ] **Step 1: Create .env.local.example**

Create `/Users/barretthenry/Desktop/valricoagent-next/.env.local.example`:

```
# Supabase - Get these from your new Supabase project dashboard
# Settings > API > Project URL
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co

# Settings > API > anon/public key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Settings > API > service_role key (KEEP SECRET - only for seed scripts and server-side)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

- [ ] **Step 2: Copy the migration SQL**

Copy the file from the source project:
```bash
cp /Users/barretthenry/Desktop/valricoagent/supabase-migration.sql /Users/barretthenry/Desktop/valricoagent-next/supabase-migration.sql
```

- [ ] **Step 3: Make sure .env.local is in .gitignore**

```bash
grep -c ".env.local" /Users/barretthenry/Desktop/valricoagent-next/.gitignore
```

If 0, add `.env.local` to `.gitignore`.

- [ ] **Step 4: Commit**

```bash
git add .env.local.example supabase-migration.sql .gitignore
git commit -m "Add Supabase migration SQL and env example"
```

---

### Task 4: Replace Blog Index Page

**Files:**
- Replace: `app/blog/page.tsx`

The current blog index is hardcoded with 2 posts. Replace it with the Supabase-powered version.

- [ ] **Step 1: Remove 'use client' and rewrite app/blog/page.tsx**

Replace the entire contents of `/Users/barretthenry/Desktop/valricoagent-next/app/blog/page.tsx` with the content from `/Users/barretthenry/Desktop/valricoagent/src/app/blog/page.tsx`. 

The import path changes from `@/lib/supabase` — this stays the same since we put supabase.ts at `lib/supabase.ts` and the `@/` alias maps to the project root.

The file content is shown in full in the source read above. Copy it exactly as-is.

- [ ] **Step 2: Commit**

```bash
git add app/blog/page.tsx
git commit -m "Replace hardcoded blog index with Supabase-powered version"
```

---

### Task 5: Create Dynamic Blog Post Page

**Files:**
- Create: `app/blog/[slug]/page.tsx`
- Delete: `app/blog/bloomingdale-vs-buckhorn-valrico/`
- Delete: `app/blog/valrico-housing-market-q1-2026/`

- [ ] **Step 1: Delete old static blog post directories**

```bash
rm -rf /Users/barretthenry/Desktop/valricoagent-next/app/blog/bloomingdale-vs-buckhorn-valrico
rm -rf /Users/barretthenry/Desktop/valricoagent-next/app/blog/valrico-housing-market-q1-2026
```

- [ ] **Step 2: Create app/blog/[slug]/page.tsx**

Create the directory and file at `/Users/barretthenry/Desktop/valricoagent-next/app/blog/[slug]/page.tsx` with the full content from `/Users/barretthenry/Desktop/valricoagent/src/app/blog/[slug]/page.tsx`.

The import path `@/lib/supabase` works as-is. Copy the file exactly as read above.

**Important:** The CTA button links use paths like `/valrico-homes-for-sale` and `/valrico-home-values`. Verify these match the actual routes in the current project (they use `/valrico-fl-homes-for-sale/` and `/valrico-fl-home-values/`). Update the CTA config to use the correct paths:

```typescript
const ctaConfig = {
  buyer: {
    // ...
    buttonLink: '/valrico-fl-homes-for-sale/',
  },
  seller: {
    // ...
    buttonLink: '/valrico-fl-home-values/',
  },
  valuation: {
    // ...
    buttonLink: '/valrico-fl-home-values/',
  },
  consultation: {
    // ...
    buttonLink: '/#contact',
  },
  relocation: {
    // ...
    buttonLink: '/living-in-valrico/',
  },
  'market-report': {
    // ...
    buttonLink: '/valrico-market-report/',
  },
};
```

- [ ] **Step 3: Commit**

```bash
git add -A app/blog/
git commit -m "Add dynamic [slug] blog pages, remove old static posts"
```

---

### Task 6: Replace Sitemap with Supabase-Aware Version

**Files:**
- Replace: `app/sitemap.ts`

- [ ] **Step 1: Replace app/sitemap.ts**

The current sitemap has hardcoded blog URLs and neighborhood URLs. Replace it with a version that keeps all the existing static pages AND neighborhoods, but adds dynamic blog posts from Supabase.

Merge the best of both: keep the existing neighborhood list from the current sitemap, keep the existing core pages (with their correct URL paths like `/valrico-fl-homes-for-sale/`), and add the Supabase blog query from the source project's sitemap.

The key addition is importing `getPublishedPosts` from `@/lib/supabase` and mapping posts to sitemap entries.

The source project's sitemap (at `/Users/barretthenry/Desktop/valricoagent/src/app/sitemap.ts`) shows the pattern. Merge it with the current sitemap's static pages and neighborhoods.

- [ ] **Step 2: Commit**

```bash
git add app/sitemap.ts
git commit -m "Update sitemap to include dynamic blog posts from Supabase"
```

---

### Task 7: Add robots.ts

**Files:**
- Create: `app/robots.ts`

- [ ] **Step 1: Check if a static robots.txt exists**

```bash
ls /Users/barretthenry/Desktop/valricoagent-next/public/robots.txt 2>/dev/null
```

If it exists, delete it — the dynamic `app/robots.ts` takes precedence but the static file might cause conflicts.

- [ ] **Step 2: Create app/robots.ts**

Create `/Users/barretthenry/Desktop/valricoagent-next/app/robots.ts` with the content from the source project (read above). Copy exactly as-is.

- [ ] **Step 3: Commit**

```bash
git add app/robots.ts
# Also git rm public/robots.txt if it existed
git commit -m "Add robots.ts allowing all crawlers including AI bots"
```

---

### Task 8: Copy and Reorder Seed Script

**Files:**
- Create: `scripts/seed-posts.ts`

This is the biggest task. The 184KB seed script needs to be copied from the source project, then the publish order needs to be modified per the briefing.

- [ ] **Step 1: Copy the seed script**

```bash
cp /Users/barretthenry/Desktop/valricoagent/scripts/seed-posts.ts /Users/barretthenry/Desktop/valricoagent-next/scripts/seed-posts.ts
```

- [ ] **Step 2: Add publish_priority field and reorder logic**

The seed script currently assigns publish dates by array index. We need to:

1. Add a `publish_priority` field to the `PostSeed` interface
2. Add `publish_priority` to each post object
3. Sort by `publish_priority` before assigning dates
4. Use the priority-based date assignment: `publishDate(priority)` where priority 1 = tomorrow (April 28), priority 66 = July 2

**Priority assignments:**
- Priority 1: "Valrico Real Estate Market Report Q1 2026"
- Priority 2: "Best Neighborhoods in Valrico for Buyers in 2026"  
- Priority 3: "What Is My Valrico Home Worth? How We Price in 33594 vs 33596"
- Priority 4: "Step-by-Step Checklist to Sell Your Valrico Home for Top Dollar"
- Priority 5: "How to Choose the Best Real Estate Agent in Valrico"
- Priority 6: "Living in Valrico FL: Pros and Cons"
- Priorities 7-65: Remaining 59 posts, rotated by pillar (buyer → seller → market → agent → relocation → comparison, repeating)
- Priority 66: "Valrico Real Estate Market Report Q2 2026" (must publish July 2 or later)

**Content updates:**
- Q1 Market Report: Change opening to "As Q1 2026 wraps up, here is where the Valrico market stands heading into the spring selling season."
- Q2 Market Report: Add note at top: "Note: This report will be updated with final Q2 closing data as it becomes available from Stellar MLS."

**Date logic update** in the seed function (bottom of file):

Replace the date assignment loop. Instead of using array index, sort by `publish_priority` first, then assign dates. For priority 66 (Q2 report), force the date to July 2, 2026. For all others, use `tomorrow + (priority - 1) days`.

The bottom of the seed script where it builds records and upserts needs to be updated:

```typescript
// Sort posts by publish_priority before assigning dates
const sorted = posts.sort((a, b) => (a.publish_priority || 999) - (b.publish_priority || 999));

const records = sorted.map((post, i) => {
  // Q2 Market Report (priority 66) must publish July 2, 2026
  const date = post.publish_priority === 66
    ? new Date('2026-07-02T06:00:00-04:00').toISOString()
    : publishDate(i + 1); // i+1 = 1 day from now for first post

  return {
    title: post.title,
    slug: slugify(post.title),
    excerpt: post.excerpt,
    content: post.content,
    pillar: post.pillar,
    tags: post.tags,
    meta_title: post.title,
    meta_description: post.excerpt,
    focus_keyword: post.focus_keyword,
    secondary_keywords: post.secondary_keywords,
    schema_type: post.faq_data ? 'FAQPage' : 'BlogPosting',
    faq_data: post.faq_data || null,
    status: 'scheduled',
    publish_date: date,
    related_slugs: post.related_slugs || [],
    cta_type: post.cta_type,
  };
});
```

- [ ] **Step 3: Verify the Q1 and Q2 content updates**

Search the seed file for the Q1 and Q2 market report posts and make the content edits described above.

- [ ] **Step 4: Commit**

```bash
git add scripts/seed-posts.ts
git commit -m "Add 66-post seed script with priority-based publish schedule"
```

---

### Task 9: Build Verification

**Files:** None (verification only)

- [ ] **Step 1: Run the Next.js build to check for errors**

```bash
cd /Users/barretthenry/Desktop/valricoagent-next
npm run build 2>&1 | tail -30
```

The build will likely warn about missing Supabase env vars (they aren't set yet), but it should not have TypeScript or import errors. If the blog pages fail because Supabase isn't configured, that's expected — the build will succeed once env vars are set.

If there are TS errors, fix them before proceeding.

- [ ] **Step 2: Commit any fixes**

---

### Task 10: Manual Steps (Barrett Does These)

These are NOT code tasks. Barrett needs to do these in the browser:

1. **Create Supabase project** at supabase.com → New Project for valricoagent
2. **Copy the 3 keys** (URL, anon key, service role key)
3. **Create `.env.local`** from the example: `cp .env.local.example .env.local` and paste keys
4. **Run the migration** — paste `supabase-migration.sql` content into Supabase SQL Editor and run
5. **Enable pg_cron** — Supabase Dashboard → Database → Extensions → enable pg_cron, then run:
   ```sql
   SELECT cron.schedule('promote-scheduled-posts', '0 * * * *', $$SELECT promote_scheduled_posts()$$);
   ```
6. **Run the seed script**: `npx tsx scripts/seed-posts.ts`
7. **Add env vars to Vercel** — Project Settings → Environment Variables → add all 3 keys
8. **Push and redeploy** — `git push` triggers Vercel rebuild

---

## Validation Checklist

After deployment, verify:

- [ ] `valricoagent.com/blog` shows published posts in a grid with pillar badges
- [ ] `valricoagent.com/blog/<any-slug>` shows a full post with schema, FAQ, CTA, related posts
- [ ] `valricoagent.com/sitemap.xml` includes blog post URLs
- [ ] `valricoagent.com/robots.txt` allows AI crawlers
- [ ] View Source on a blog post shows JSON-LD schema markup
- [ ] Q1 Market Report is the first post published (Day 1)
- [ ] Q2 Market Report publish_date is July 2, 2026
- [ ] Posts rotate by pillar (not all same category back-to-back)
