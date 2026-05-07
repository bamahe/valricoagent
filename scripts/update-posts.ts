/**
 * Reads markdown files from scripts/content/ and updates matching blog posts in Supabase.
 * Each file is named by slug (e.g., "valrico-real-estate-market-report-q1-2026.md")
 * and its contents replace the post's content field.
 *
 * Usage: npx tsx scripts/update-posts.ts
 */
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const contentDir = path.join(__dirname, 'content');
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

  console.log(`Found ${files.length} content files to update...\n`);

  let updated = 0;
  let errors = 0;

  for (const file of files) {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const wordCount = content.split(/\s+/).length;

    const { error } = await sb.from('blog_posts').update({ content }).eq('slug', slug);

    if (error) {
      console.log(`  ERROR: ${slug} — ${error.message}`);
      errors++;
    } else {
      console.log(`  Updated: ${slug} (${wordCount} words)`);
      updated++;
    }
  }

  console.log(`\nDone! Updated: ${updated}, Errors: ${errors}`);
}

main().catch(console.error);
