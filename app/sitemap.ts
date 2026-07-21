import { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://valricoagent.com'
  const now = new Date().toISOString()

  // All 38 actual neighborhoods (verified against app/neighborhoods/*/page.tsx)
  const neighborhoods = [
    'arista','bent-tree-estates','bloomingdale','bloomingdale-cove','bloomingdale-east',
    'bloomingdale-oaks','brentwood-hills','buckhorn','buckhorn-bloomingdale',
    'buckhorn-golf-club-estates','buckhorn-preserve','buckhorn-springs-manor',
    'canterbury-oaks','cimmaron','copper-ridge','crestwood-estates','crosby-crossings',
    'diamond-hill','duncan-groves','durant-oaks','heritage-crest','kings-mill',
    'lake-valrico','lakemont','legends-pass','lithia-springs','northwood-estates',
    'river-hills','river-hills-masters','savannah-landings','shetland-ridge',
    'twin-lakes','valri-park','valrico-forest','valrico-hills','valrico-oaks',
    'valrico-village','wellington',
  ]

  // Core static pages — homepage, service pages, informational, tools, utility
  const corePages = [
    // Homepage
    { url: `${baseUrl}/`, changeFrequency: 'weekly' as const, priority: 1.0 },
    // Service pages (homes for sale, home values, sell)
    { url: `${baseUrl}/valrico-fl-homes-for-sale/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/valrico-fl-home-values/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/sell-my-home-valrico/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/valrico-realtor/`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/valrico-real-estate-agent/`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/best-realtor-in-valrico/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/valrico-market-report/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    // Neighborhood hub
    { url: `${baseUrl}/neighborhoods/`, changeFrequency: 'weekly' as const, priority: 0.8 },
    // ZIP code pages
    { url: `${baseUrl}/homes-for-sale-33594/`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/homes-for-sale-33596/`, changeFrequency: 'weekly' as const, priority: 0.8 },
    // Property type / feature pages
    { url: `${baseUrl}/valrico-pool-homes/`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-no-hoa-homes/`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-new-construction-homes/`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-luxury-homes/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-waterfront-homes/`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-open-houses/`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-va-loan-homes/`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-foreclosures/`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-pre-foreclosure/`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-short-sale/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-cash-offer/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-investment-property/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-55-plus-communities/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    // Guide / informational pages
    { url: `${baseUrl}/valrico-school-zones/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/living-in-valrico/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-real-estate/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-first-time-homebuyer/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-down-payment-assistance/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-relocation-guide/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-property-management/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-vs-brandon/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-vs-riverview/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-cost-of-living/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/is-valrico-safe/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/florida-homestead-exemption-save-our-homes/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    // Blog index
    { url: `${baseUrl}/blog/`, changeFrequency: 'weekly' as const, priority: 0.8 },
    // About & contact
    { url: `${baseUrl}/about/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/get-help/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/schedule-showing/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    // Utility pages
    { url: `${baseUrl}/privacy-policy/`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/thank-you/`, changeFrequency: 'yearly' as const, priority: 0.1 },
  ]

  // Neighborhood pages
  const neighborhoodPages = neighborhoods.map((slug) => ({
    url: `${baseUrl}/neighborhoods/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic blog posts from Supabase
  let blogEntries: MetadataRoute.Sitemap = []
  try {
    const posts = await getPublishedPosts()
    blogEntries = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}/`,
      lastModified: post.updated_at,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // Supabase not configured yet, skip blog entries
  }

  return [
    ...corePages.map((p) => ({ ...p, lastModified: now })),
    ...neighborhoodPages,
    ...blogEntries,
  ]
}
