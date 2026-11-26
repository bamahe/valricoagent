import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SLUG = 'florida-hoa-reform-2024-valrico-buyers-guide';

const META = {
  title: 'Florida HOA Reform 2024: What Every Valrico Buyer in an HOA Community Needs to Know',
  excerpt:
    'Florida HB 1203 (Chapter 2024-221) took effect July 1, 2024 and changed the rules for HOAs statewide. What the new law means for buyers in Bloomingdale, Buckhorn Preserve, River Hills, and Diamond Hill: homeowner rights, transparency requirements, and how to do HOA due diligence before closing.',
  pillar: 'buyer',
  tags: [
    'Buyer Guide',
    'HOA',
    'Florida Law',
    'Valrico FL',
    'Bloomingdale',
    'Buckhorn Preserve',
    'River Hills',
    'Diamond Hill',
    'HOA Reform',
    '2024',
    'HB 1203',
    'Hillsborough County',
    '33594',
    '33596',
  ],
  meta_title: "Florida HOA Reform 2024: Valrico Buyer's Guide to HB 1203 | ValricoAgent.com",
  meta_description:
    'Florida HB 1203 (2024) changed HOA rules statewide: vegetable garden rights, fining limits, online transparency requirements, and criminal penalties for kickbacks. What Valrico buyers in Bloomingdale, Buckhorn, and River Hills need to know before closing.',
  focus_keyword: 'Florida HOA reform 2024 Valrico buyers guide',
  secondary_keywords: [
    'Florida HB 1203 HOA law 2024',
    'Valrico HOA community buyer guide',
    'Florida HOA homeowner rights 2024',
    'HOA reform Hillsborough County Florida',
    'Valrico HOA fees and rules 2024',
    'Chapter 2024-221 Florida HOA changes',
    'Bloomingdale HOA Valrico buyer guide',
  ],
  schema_type: 'FAQPage' as const,
  faq_data: [
    {
      question: "What did Florida's HOA reform law change in 2024?",
      answer:
        "Florida HB 1203 (Chapter 2024-221), signed May 31, 2024 and effective July 1, 2024, made sweeping changes to HOA law statewide. Key changes include: prohibiting HOAs from restricting vegetable gardens and clotheslines not visible from the street; banning fines for holiday decorations without a one-week notice period; requiring denied architectural requests to cite the specific rule violated; requiring HOAs with 100 or more parcels to post official records online; creating criminal penalties for board members who accept kickbacks from vendors; and new education requirements for community association managers and board members.",
    },
    {
      question:
        'Which Valrico HOA communities must post their records online under the 2024 law?',
      answer:
        "Any Valrico HOA with 100 or more parcels must post its official records on the association's website or app under Florida HB 1203. That includes the declaration of covenants, bylaws, current budget, most recent financial report, and board meeting minutes for the past three years. The deadline for compliance was January 1, 2025. Major Valrico communities including Bloomingdale HOA sections, Buckhorn Preserve, Diamond Hill, and River Hills qualify. If you are evaluating a community and the HOA cannot produce a website link with current governing documents, that is a compliance red flag.",
    },
    {
      question:
        'Can a Valrico HOA still regulate the exterior of my home after the 2024 reform?',
      answer:
        "Yes. The 2024 HOA reform law did not eliminate HOA authority over exterior appearance. HOAs can still regulate paint colors, fence styles, landscaping visible from the street, roof materials, driveways, and most traditional architectural controls. The 2024 law carved out specific protections for interior spaces that cannot be seen from the street, vegetable gardens in non-visible areas, and certain vehicles. If you are planning exterior renovations, the HOA's architectural review committee still has jurisdiction.",
    },
    {
      question: 'What HOA due diligence should Valrico buyers do before closing in 2027?',
      answer:
        "Valrico buyers should complete the following before closing on an HOA property: (1) review all governing documents including declaration, bylaws, and rules; (2) check the most recent budget and reserve study for financial health; (3) ask specifically about any pending or recent special assessments; (4) read three years of board meeting minutes to understand recurring issues; (5) verify the HOA's delinquency rate; (6) confirm that the HOA's website is current with all required documents; and (7) ask a real estate attorney to review if anything in the documents is unclear.",
    },
    {
      question: 'What can I do if a Valrico HOA violates the 2024 Florida reform law?',
      answer:
        'Homeowners can file a complaint with the Florida Department of Business and Professional Regulation (DBPR), which oversees community association managers and enforces certain HOA law provisions. For records request violations, the DBPR has an established complaint process. For architectural denial issues, fining violations, or kickback allegations, consulting a Florida HOA attorney is typically the fastest path to resolution. Many HOA disputes are resolved with a demand letter before litigation.',
    },
  ],
  publish_date: '2026-11-25T10:00:00.000Z',
  cta_type: 'buyer' as const,
  featured_image: '/images/bloomingdale-brick-home-valrico.jpg' as string | null,
  featured_image_alt:
    'Bloomingdale neighborhood HOA community home in Valrico FL representing Florida HOA reform 2024 buyer rights for east Hillsborough County buyers' as string | null,
  related_slugs: [
    'valrico-homes-with-no-hoa-what-buyers-need-to-know',
    'best-neighborhoods-in-valrico-for-buyers-in-2026',
    'valrico-fl-gated-communities-and-golf-course-homes',
    'florida-homeowners-insurance-costs-valrico-fl-2026',
    'valrico-fl-home-inspection-guide-east-hillsborough-county-buyers',
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
