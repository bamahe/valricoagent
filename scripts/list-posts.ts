import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const {data, error} = await sb.from('blog_posts').select('slug, title, pillar').order('publish_date', {ascending: false}).limit(100);
  if(error) { console.error(error); process.exit(1); }
  data.forEach(p => console.log(p.pillar.padEnd(12), p.slug));
}

main();
