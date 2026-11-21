import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'what-600000-buys-valrico-fl-east-hillsborough-q4-2026';

const META = {
  title: 'What $600,000 Buys in Valrico FL in Q4 2026: Luxury Entry Level in East Hillsborough County',
  excerpt:
    'At $600,000 in Valrico FL, buyers step into a tier that delivers 3,000-plus square feet, newer construction, and gated or golf course communities in east Hillsborough County. This Q4 2026 breakdown covers what you actually get in River Hills, Diamond Hill, and Buckhorn, how Valrico compares to Fishhawk Ranch and New Tampa at the same price, and what the negotiating landscape looks like right now.',
  pillar: 'buyer',
  tags: [
    'Valrico FL',
    'Luxury Real Estate',
    '$600K Homes',
    'River Hills',
    'Diamond Hill',
    'Buckhorn',
    '33596',
    'East Hillsborough County',
    'Q4 2026',
    'Buyer Guide',
    'Gated Communities',
    'Fishhawk Ranch',
    'New Tampa',
    'Luxury Entry Level',
    'Hillsborough County',
    '2026',
  ],
  meta_title: 'What $600,000 Buys in Valrico FL in Q4 2026: River Hills, Diamond Hill and Beyond | ValricoAgent.com',
  meta_description:
    'What does $600,000 buy in Valrico FL in Q4 2026? River Hills golf community, Diamond Hill gated, or Buckhorn. Compared to Fishhawk Ranch, New Tampa, and Wesley Chapel at the same price. Complete breakdown by square footage, school zone, and HOA.',
  focus_keyword: 'what $600000 buys Valrico FL 2026',
  secondary_keywords: [
    '$600K homes Valrico FL 2026',
    'River Hills Valrico FL 33596 luxury homes',
    'Diamond Hill Valrico FL gated community homes',
    'Valrico FL vs Fishhawk Ranch $600000',
    'east Hillsborough County luxury entry level 2026',
    '33596 luxury homes Q4 2026',
    'Valrico FL golf course community homes 600000',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: 'What neighborhoods in Valrico FL have homes in the $600,000 price range?',
      answer:
        'The 33596 ZIP code is where the $600,000 price point lands in Valrico. The primary communities at this tier include River Hills Golf and Country Club, Diamond Hill, upper Buckhorn Preserve, and portions of Buckhorn Springs. These are all east Valrico communities generally zoned for Hillsborough County schools in the Durant or Newsome high school zones depending on specific location. River Hills is a golf course community with guard-gated access. Diamond Hill is a gated executive community with larger lots. Buckhorn Preserve and upper Buckhorn offer newer construction without gate fees.',
    },
    {
      question: 'How does $600,000 in Valrico FL compare to the same budget at Fishhawk Ranch?',
      answer:
        'At $600,000, both Valrico 33596 and Fishhawk Ranch (Lithia 33547) deliver similar square footage -- roughly 3,000 to 3,400 square feet of newer construction. The key differences are community structure and lifestyle. Fishhawk Ranch is a large master-planned community with multiple amenity centers, trails, and a strong HOA-managed environment. Valrico 33596 at this price tends to offer larger lots, more established trees, and quieter neighborhoods without the master-plan feel. Both share the Newsome High School attendance zone in many subdivisions. Price per square foot is comparable, though Fishhawk Ranch tends to run $5 to $15 per square foot higher in direct comparisons for similar vintage homes.',
    },
    {
      question: 'What are the school zones for $600,000 homes in Valrico FL 33596?',
      answer:
        'School zones for 33596 vary by specific street address. River Hills Golf and Country Club homes are generally zoned for Nelson Elementary, Mulrennan Middle, and Durant High School. Diamond Hill homes are typically zoned for Lithia Springs Elementary, Randall Middle, and Newsome High School -- giving Diamond Hill the Newsome zone premium that supports values at this tier. Always verify school zones directly with the Hillsborough County School District using the official address lookup tool, as boundaries can change.',
    },
  ],
  publish_date: '2026-11-21T12:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/valrico-fl-luxury-estates.jpg' as string | null,
  featured_image_alt:
    'Luxury estate home in Valrico FL representing the $600,000 and above market segment in east Hillsborough County 33596 including River Hills and Diamond Hill communities in Q4 2026' as string | null,
  related_slugs: [
    'valrico-fl-real-estate-market-update-november-2026',
    'valrico-vs-fishhawk-where-to-buy',
    'what-does-400000-buy-in-valrico-fl-by-neighborhood-2026',
  ],
};

export async function GET() {
  try {
    const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL'];
    const supabaseKey = process.env['SUPABASE_SERVICE_ROLE_KEY'];
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ status: 'error', message: 'Missing env vars' }, { status: 500 });
    }
    const sb = createClient(supabaseUrl, supabaseKey);

    const { data: existing } = await sb
      .from('blog_posts')
      .select('slug')
      .eq('slug', SLUG)
      .maybeSingle();

    if (existing) {
      return NextResponse.json({ status: 'already_exists', slug: SLUG });
    }

    const contentPath = path.join(process.cwd(), 'scripts', 'content', `${SLUG}.md`);
    const content = fs.readFileSync(contentPath, 'utf-8');
    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(wordCount / 200);

    const { error } = await sb.from('blog_posts').insert({
      slug: SLUG,
      ...META,
      content,
      status: 'published',
      word_count: wordCount,
      reading_time: readingTime,
      og_image: null,
    });

    if (error) {
      return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
    }

    return NextResponse.json({ status: 'inserted', slug: SLUG, wordCount, readingTime });
  } catch (err) {
    return NextResponse.json({ status: 'error', message: String(err) }, { status: 500 });
  }
}
