import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getServiceClient } from '@/lib/supabase';

// ============================================================
// Cron: Auto-generate quarterly market report
// Runs 1st of Jan, Apr, Jul, Oct at 10am ET (14:00 UTC)
// Creates a data-driven Valrico market report for the current quarter
// ============================================================

export const runtime = 'nodejs';
export const maxDuration = 60;

// Determine current quarter label (e.g. "Q3 2026")
function getQuarterLabel(): { quarter: string; slug: string } {
  const now = new Date();
  const month = now.getMonth(); // 0-indexed
  const year = now.getFullYear();
  const q = Math.floor(month / 3) + 1;
  return {
    quarter: `Q${q} ${year}`,
    slug: `valrico-real-estate-market-report-q${q}-${year}`,
  };
}

function buildSystemPrompt(): string {
  return `You are a real estate market analyst writing for Barrett Henry, REALTOR and Broker Associate at REMAX Collective (never write "RE/MAX" — always "REMAX" with no slash).

Barrett has 23+ years of real estate experience (never tie this to Tampa Bay specifically).

Service area: Valrico FL, ZIP codes 33594 and 33596.
Key neighborhoods: Bloomingdale (most active, ~189 sales/18mo), River Hills Country Club, Copper Ridge (busiest in 33594), Diamond Hill, Buckhorn, Twin Lakes, Wellington, Crestwood Estates.

IMPORTANT RULES:
- Always say "owners suite" — NEVER "master suite"
- NEVER mention mobile homes or manufactured homes
- Write "REMAX" not "RE/MAX"
- Use question-format H2 headings
- Give direct answers in the first 2-3 sentences of each section
- Include a comparison table (HTML table with inline styles using brand colors: header bg #003da5, border #e8e8e8)
- End with a CTA using Barrett's phone (813) 733-7907 and link to /get-help
- CTA box: background:#003da5, button background:#fff with color:#003da5 text
- Internal links: /neighborhoods/bloomingdale, /neighborhoods/river-hills, /neighborhoods/copper-ridge, /get-help
- FAQ answers must start with a direct, complete sentence

You output valid JSON only. No markdown fencing, no commentary outside the JSON.`;
}

function buildUserPrompt(quarter: string): string {
  return `Write a quarterly market report blog post for Valrico FL real estate: "${quarter}"

This is a QUARTERLY MARKET REPORT — it should cover:
1. Median home prices for 33594 and 33596 (use ~$380K for 33594, ~$465K for 33596, ~$415K overall)
2. Days on market trends by price tier
3. Sale-to-list ratio (~98.5-99%)
4. Most active neighborhoods with specific data
5. What sellers should know this quarter
6. What buyers should know this quarter
7. Outlook for the rest of the quarter/next quarter
8. Year-over-year price change (~3-4%)

Include an HTML comparison table (33594 vs 33596) with inline styles.

Return a single JSON object:
{
  "title": "Valrico Real Estate Market Report ${quarter}",
  "slug": "valrico-real-estate-market-report-${quarter.toLowerCase().replace(' ', '-')}",
  "content": "Full HTML blog post content (not markdown). 1000-1500 words. Use <h2>, <p>, <ul>, <table> tags. Include internal <a> links to neighborhood pages.",
  "excerpt": "2-3 sentence summary (under 160 chars)",
  "meta_title": "Valrico Housing Market ${quarter} | Prices, Trends, Neighborhood Data",
  "meta_description": "Valrico ${quarter} market report: median prices, days on market, sale-to-list ratios for 33594 and 33596. Data-driven analysis by Barrett Henry, REALTOR.",
  "focus_keyword": "Valrico housing market ${quarter}",
  "tags": ["market update", "33594", "33596", "quarterly report"],
  "faq_data": [
    {"question": "What is the median home price in Valrico in ${quarter}?", "answer": "..."},
    {"question": "How fast are homes selling in Valrico?", "answer": "..."},
    {"question": "Are home prices going up or down in Valrico?", "answer": "..."},
    {"question": "Which Valrico neighborhood has the most sales?", "answer": "..."},
    {"question": "Is ${quarter} a good time to buy/sell in Valrico?", "answer": "..."}
  ]
}

Return ONLY the JSON object.`;
}

export async function GET(request: NextRequest) {
  try {
    // Auth check
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { quarter, slug } = getQuarterLabel();
    const supabase = getServiceClient();

    // Check if this quarter's report already exists
    const { data: existing } = await supabase
      .from('blog_posts')
      .select('slug')
      .eq('slug', slug)
      .single();

    if (existing) {
      return NextResponse.json({
        success: true,
        message: `${quarter} market report already exists`,
        slug: existing.slug,
      });
    }

    // Generate with Claude
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY!,
    });

    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 4096,
      messages: [{ role: 'user', content: buildUserPrompt(quarter) }],
      system: buildSystemPrompt(),
    });

    const textBlock = message.content.find((block) => block.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No text content in Claude response');
    }

    const postData = JSON.parse(textBlock.text);
    const wordCount = postData.content.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Insert into Supabase
    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        title: postData.title,
        slug: postData.slug || slug,
        content: postData.content,
        excerpt: postData.excerpt,
        pillar: 'market',
        tags: postData.tags || ['market update', '33594', '33596', 'quarterly report'],
        meta_title: postData.meta_title,
        meta_description: postData.meta_description,
        focus_keyword: postData.focus_keyword,
        secondary_keywords: [],
        schema_type: 'BlogPosting',
        faq_data: postData.faq_data || [],
        featured_image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
        featured_image_alt: 'Valrico Florida neighborhood homes aerial view',
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
      throw new Error(`Supabase insert failed: ${error.message}`);
    }

    // Also update the homepage Q reference by triggering a revalidation
    // (the homepage will pick up the latest quarter from the blog)

    return NextResponse.json({
      success: true,
      slug: data.slug,
      quarter,
      wordCount,
      readingTime,
    });
  } catch (err) {
    console.error('Quarterly market report cron error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
