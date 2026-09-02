import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getServiceClient } from '@/lib/supabase';

// ============================================================
// Cron: Auto-generate blog post (Mon/Wed/Fri at 10am ET)
// Vercel cron hits this endpoint; CRON_SECRET protects it.
// Uses Claude API to write Valrico-specific real estate content.
// ============================================================

// Force Node.js runtime (not Edge) so Anthropic SDK works
export const runtime = 'nodejs';
// Vercel cron can take a while; allow up to 60s
export const maxDuration = 60;

// Pillars rotate in order so we get variety
const PILLARS = ['buyer', 'seller', 'market', 'comparison', 'relocation', 'agent'] as const;
type Pillar = (typeof PILLARS)[number];

// Neighborhoods in the Valrico 33594/33596 area
const NEIGHBORHOODS = [
  'Bloomingdale', 'River Hills', 'Buckhorn', 'Twin Lakes',
  'Diamond Hill', 'Wellington', 'Brentwood Hills', 'FishHawk Ranch',
  'Lithia', 'Durant', 'Riverview', 'Brandon', 'Seffner',
  'Plant City', 'Dover', 'Sydney', 'Boyette', 'Alafia',
];

// Long-tail keyword starters per pillar (Claude will expand on these)
const TOPIC_SEEDS: Record<Pillar, string[]> = {
  buyer: [
    'first-time home buyer tips in Valrico FL',
    'best neighborhoods for families in Valrico',
    'Valrico FL homes under 400k',
    'what to know before buying a home in Valrico',
    'VA loan home buying in Valrico FL',
    'new construction homes in Valrico FL',
    'Valrico FL school zones and home values',
    'closing costs for buyers in Valrico FL',
  ],
  seller: [
    'how to sell your home fast in Valrico FL',
    'Valrico FL home staging tips',
    'best time to sell a home in Valrico',
    'Valrico home value estimator',
    'curb appeal upgrades that sell homes in Valrico',
    'pricing your Valrico home to sell',
    'FSBO vs REALTOR in Valrico FL',
  ],
  market: [
    'Valrico FL real estate market update',
    'Valrico housing market trends',
    'median home price in Valrico FL',
    'Valrico FL inventory levels',
    'interest rate impact on Valrico real estate',
    'Valrico FL days on market trends',
  ],
  comparison: [
    'Valrico vs Brandon FL real estate',
    'Valrico vs Riverview FL homes',
    'Valrico vs FishHawk Ranch comparison',
    'Bloomingdale vs River Hills Valrico',
    'Valrico vs Lithia FL real estate',
    'living in Valrico vs Plant City',
  ],
  relocation: [
    'relocating to Valrico FL guide',
    'moving to Valrico from out of state',
    'cost of living in Valrico FL',
    'Valrico FL lifestyle and amenities',
    'best areas to live in Valrico FL',
    'Valrico FL weather and outdoor activities',
  ],
  agent: [
    'why use a REALTOR in Valrico FL',
    'questions to ask your Valrico real estate agent',
    'how Barrett Henry helps Valrico home buyers',
    'choosing a listing agent in Valrico FL',
    'REALTOR vs real estate agent in Florida',
  ],
};

// Pick today's pillar based on post count (round-robin)
async function pickPillar(): Promise<{ pillar: Pillar; topic: string }> {
  const supabase = getServiceClient();

  // Count existing posts to determine which pillar is next
  const { count } = await supabase
    .from('blog_posts')
    .select('*', { count: 'exact', head: true });

  const idx = (count ?? 0) % PILLARS.length;
  const pillar = PILLARS[idx];

  // Pick a random topic seed for this pillar
  const seeds = TOPIC_SEEDS[pillar];
  const topic = seeds[Math.floor(Math.random() * seeds.length)];

  return { pillar, topic };
}

// Build the system prompt for Claude
function buildSystemPrompt(): string {
  return `You are a real estate content writer for Barrett Henry, REALTOR and Broker Associate at REMAX Collective (never write "RE/MAX", always "REMAX" with no slash).

Barrett has 24+ years of real estate experience (never tie this to Tampa Bay specifically, just say "24+ years of real estate experience").

Service area: Valrico FL, ZIP codes 33594 and 33596.
Neighborhoods include: Bloomingdale, River Hills, Buckhorn, Twin Lakes, Diamond Hill, Wellington, Brentwood Hills, FishHawk Ranch, Lithia, Durant, Riverview, Brandon, Seffner, Plant City, Dover, Sydney, Boyette, Alafia, and more.
School zones: Bloomingdale High School and Newsome High School.
Contact: (813) 733-7907, barrett@nowtb.com

IMPORTANT RULES:
- Always say "owners suite" - NEVER "master suite"
- NEVER mention mobile homes or manufactured homes
- Personal brand (Barrett Henry) always takes priority over team branding
- Content must be SEO-optimized for Valrico real estate keywords
- Write in plain English, no fluff, no AI-sounding transitions
- Use question-format H2 headings where possible
- Give a direct answer in the first 2-4 sentences of each section
- End every post with a CTA mentioning Barrett Henry and his phone number

INTERNAL LINKS — only use these exact URLs when linking to site pages:
- /valrico-fl-homes-for-sale/ (search homes)
- /valrico-fl-home-values/ (home values / CMA)
- /sell-my-home-valrico/ (selling guide)
- /valrico-market-report/ (market report)
- /valrico-school-zones/ (school zones)
- /valrico-relocation-guide/ (relocation guide)
- /valrico-first-time-homebuyer/ (first-time buyers)
- /valrico-property-management/ (property management)
- /valrico-pool-homes/ (pool homes)
- /valrico-luxury-homes/ (luxury homes)
- /valrico-new-construction-homes/ (new construction)
- /valrico-no-hoa-homes/ (no HOA homes)
- /valrico-foreclosures/ (foreclosures)
- /valrico-cash-offer/ (cash offer)
- /neighborhoods/bloomingdale/ (Bloomingdale)
- /neighborhoods/river-hills/ (River Hills)
- /neighborhoods/buckhorn/ (Buckhorn)
- /neighborhoods/diamond-hill/ (Diamond Hill)
- /neighborhoods/copper-ridge/ (Copper Ridge)
- /neighborhoods/ (all neighborhoods)
- /get-help/ (contact form)
- /about/ (about Barrett)
- /blog/ (all blog posts)
Do NOT invent URLs. Only link to the pages listed above.

You output valid JSON only. No markdown fencing, no commentary outside the JSON.`;
}

// Build the user prompt for a specific topic
function buildUserPrompt(pillar: string, topic: string, neighborhood: string): string {
  return `Write a blog post about: "${topic}"

Pillar category: ${pillar}
Featured neighborhood to mention: ${neighborhood}

Return a single JSON object with these exact keys:
{
  "title": "SEO-optimized title (50-65 chars)",
  "slug": "url-friendly-slug-with-valrico",
  "content": "Full markdown blog post, 800-1200 words. Use ## for H2s (question format). Include neighborhood details. End with a CTA for Barrett Henry (813) 733-7907.",
  "excerpt": "2-3 sentence summary for cards/previews (under 160 chars)",
  "meta_title": "SEO title tag (50-60 chars, include Valrico FL)",
  "meta_description": "Meta description (140-155 chars, include primary keyword)",
  "focus_keyword": "primary long-tail keyword",
  "secondary_keywords": ["keyword2", "keyword3", "keyword4"],
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "faq_data": [
    {"question": "Relevant FAQ question 1?", "answer": "Direct answer 1."},
    {"question": "Relevant FAQ question 2?", "answer": "Direct answer 2."},
    {"question": "Relevant FAQ question 3?", "answer": "Direct answer 3."}
  ]
}

Rules:
- The slug must be unique and URL-safe (lowercase, hyphens, no special chars)
- Content must be 800-1200 words of markdown
- Include at least 3 FAQ pairs, up to 5
- tags array should have 3-6 relevant tags
- secondary_keywords should have 2-4 keywords
- Do NOT use "master suite", always "owners suite"
- Do NOT mention mobile/manufactured homes
- Write "REMAX" not "RE/MAX"
- Return ONLY the JSON object, nothing else`;
}

export async function GET(request: NextRequest) {
  try {
    // ---- Auth check: verify CRON_SECRET ----
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // ---- Pick pillar + topic ----
    const { pillar, topic } = await pickPillar();
    const neighborhood = NEIGHBORHOODS[Math.floor(Math.random() * NEIGHBORHOODS.length)];

    // ---- Call Claude API ----
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY!,
    });

    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: buildUserPrompt(pillar, topic, neighborhood),
        },
      ],
      system: buildSystemPrompt(),
    });

    // Extract text from Claude's response
    const textBlock = message.content.find((block) => block.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No text content in Claude response');
    }

    // Parse the JSON response
    const postData = JSON.parse(textBlock.text);

    // ---- Calculate word count and reading time ----
    const wordCount = postData.content.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(wordCount / 200);

    // ---- Determine schema type (FAQPage if 4+ FAQs, else BlogPosting) ----
    const schemaType =
      postData.faq_data && postData.faq_data.length >= 4
        ? 'FAQPage'
        : 'BlogPosting';

    // ---- Insert into Supabase ----
    const supabase = getServiceClient();

    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        title: postData.title,
        slug: postData.slug,
        content: postData.content,
        excerpt: postData.excerpt,
        pillar,
        tags: postData.tags || [],
        meta_title: postData.meta_title,
        meta_description: postData.meta_description,
        focus_keyword: postData.focus_keyword,
        secondary_keywords: postData.secondary_keywords || [],
        schema_type: schemaType,
        faq_data: postData.faq_data || [],
        status: 'published',
        publish_date: new Date().toISOString(),
        cta_type: 'contact',
        word_count: wordCount,
        reading_time: readingTime,
        related_slugs: [],
      })
      .select('slug')
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      // If slug collision, append timestamp and retry once
      if (error.code === '23505') {
        const retrySlug = `${postData.slug}-${Date.now()}`;
        const { data: retryData, error: retryError } = await supabase
          .from('blog_posts')
          .insert({
            title: postData.title,
            slug: retrySlug,
            content: postData.content,
            excerpt: postData.excerpt,
            pillar,
            tags: postData.tags || [],
            meta_title: postData.meta_title,
            meta_description: postData.meta_description,
            focus_keyword: postData.focus_keyword,
            secondary_keywords: postData.secondary_keywords || [],
            schema_type: schemaType,
            faq_data: postData.faq_data || [],
            status: 'published',
            publish_date: new Date().toISOString(),
            cta_type: 'contact',
            word_count: wordCount,
            reading_time: readingTime,
            related_slugs: [],
          })
          .select('slug')
          .single();

        if (retryError) {
          throw new Error(`Supabase retry insert failed: ${retryError.message}`);
        }

        return NextResponse.json({
          success: true,
          slug: retryData.slug,
          pillar,
          wordCount,
          note: 'slug collision resolved with timestamp suffix',
        });
      }

      throw new Error(`Supabase insert failed: ${error.message}`);
    }

    return NextResponse.json({
      success: true,
      slug: data.slug,
      pillar,
      wordCount,
      readingTime,
    });
  } catch (err) {
    console.error('Cron generate-post error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
