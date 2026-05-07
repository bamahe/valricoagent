import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getServiceClient } from '@/lib/supabase';

// ============================================================
// Cron: Weekly roundup post (Tuesdays at 10am ET)
// Generates a "Valrico This Week" style local market roundup.
// ============================================================

export const runtime = 'nodejs';
export const maxDuration = 60;

// System prompt for the weekly roundup writer
function buildSystemPrompt(): string {
  return `You are a real estate content writer for Barrett Henry, REALTOR and Broker Associate at REMAX Collective (never write "RE/MAX" — always "REMAX" with no slash).

Barrett has 23+ years of real estate experience (never tie this to Tampa Bay specifically).

Service area: Valrico FL, ZIP codes 33594 and 33596.
Neighborhoods: Bloomingdale, River Hills, Buckhorn, Twin Lakes, Diamond Hill, Wellington, Brentwood Hills, FishHawk Ranch, Lithia, Durant, Riverview, Brandon, Seffner, Plant City, Dover, Sydney, Boyette, Alafia.
School zones: Bloomingdale High School and Newsome High School.
Contact: (813) 733-7907, barrett@nowtb.com

RULES:
- Always say "owners suite" — NEVER "master suite"
- NEVER mention mobile homes or manufactured homes
- Personal brand (Barrett Henry) always takes priority
- Write in plain English, no fluff, no AI-sounding transitions
- Write "REMAX" not "RE/MAX"

You output valid JSON only. No markdown fencing, no commentary outside the JSON.`;
}

function buildUserPrompt(weekDate: string): string {
  return `Write a weekly real estate roundup blog post for the week of ${weekDate} in Valrico FL.

The post should have these sections (use ## H2 headings):
1. **Market Snapshot** — General Valrico market conditions, trends, inventory commentary
2. **Neighborhood Spotlight** — Pick one Valrico neighborhood and highlight what makes it great for buyers or sellers right now
3. **Buyer Tip of the Week** — One actionable tip for home buyers in Valrico
4. **Seller Tip of the Week** — One actionable tip for home sellers in Valrico
5. **What to Watch Next Week** — Brief forward-looking commentary

Target 600-800 words total. End with a CTA for Barrett Henry (813) 733-7907.

Return a single JSON object with these exact keys:
{
  "title": "Valrico Real Estate This Week: [catchy subtitle] (50-65 chars)",
  "slug": "valrico-real-estate-week-of-${weekDate.toLowerCase().replace(/\s/g, '-')}",
  "content": "Full markdown blog post, 600-800 words",
  "excerpt": "2-3 sentence summary (under 160 chars)",
  "meta_title": "SEO title (50-60 chars, include Valrico FL)",
  "meta_description": "Meta description (140-155 chars)",
  "focus_keyword": "Valrico FL real estate market update",
  "secondary_keywords": ["keyword2", "keyword3"],
  "tags": ["market-update", "valrico-real-estate", "weekly-roundup", "tag4"],
  "faq_data": [
    {"question": "Market-related FAQ 1?", "answer": "Answer 1."},
    {"question": "Market-related FAQ 2?", "answer": "Answer 2."},
    {"question": "Market-related FAQ 3?", "answer": "Answer 3."}
  ]
}

Rules:
- The slug must be unique and URL-safe
- Do NOT use "master suite" — always "owners suite"
- Do NOT mention mobile/manufactured homes
- Write "REMAX" not "RE/MAX"
- Return ONLY the JSON object, nothing else`;
}

// Format current week as "May 6 2026"
function getCurrentWeekLabel(): string {
  const now = new Date();
  return now.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export async function GET(request: NextRequest) {
  try {
    // ---- Auth check ----
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const weekDate = getCurrentWeekLabel();

    // ---- Call Claude API ----
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY!,
    });

    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 3000,
      messages: [
        {
          role: 'user',
          content: buildUserPrompt(weekDate),
        },
      ],
      system: buildSystemPrompt(),
    });

    // Extract text from response
    const textBlock = message.content.find((block) => block.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No text content in Claude response');
    }

    const postData = JSON.parse(textBlock.text);

    // ---- Calculate word count and reading time ----
    const wordCount = postData.content.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(wordCount / 200);

    // ---- Insert into Supabase ----
    const supabase = getServiceClient();

    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        title: postData.title,
        slug: postData.slug,
        content: postData.content,
        excerpt: postData.excerpt,
        pillar: 'market',
        tags: postData.tags || [],
        meta_title: postData.meta_title,
        meta_description: postData.meta_description,
        focus_keyword: postData.focus_keyword,
        secondary_keywords: postData.secondary_keywords || [],
        schema_type: 'BlogPosting',
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

      // Handle slug collision — append timestamp and retry once
      if (error.code === '23505') {
        const retrySlug = `${postData.slug}-${Date.now()}`;
        const { data: retryData, error: retryError } = await supabase
          .from('blog_posts')
          .insert({
            title: postData.title,
            slug: retrySlug,
            content: postData.content,
            excerpt: postData.excerpt,
            pillar: 'market',
            tags: postData.tags || [],
            meta_title: postData.meta_title,
            meta_description: postData.meta_description,
            focus_keyword: postData.focus_keyword,
            secondary_keywords: postData.secondary_keywords || [],
            schema_type: 'BlogPosting',
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
          throw new Error(`Supabase retry failed: ${retryError.message}`);
        }

        return NextResponse.json({
          success: true,
          slug: retryData.slug,
          pillar: 'market',
          wordCount,
          note: 'slug collision resolved',
        });
      }

      throw new Error(`Supabase insert failed: ${error.message}`);
    }

    return NextResponse.json({
      success: true,
      slug: data.slug,
      pillar: 'market',
      wordCount,
      readingTime,
      weekOf: weekDate,
    });
  } catch (err) {
    console.error('Cron weekly-roundup error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
