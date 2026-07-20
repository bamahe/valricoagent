import { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://valricoagent.com'
  const now = new Date().toISOString()

  // All 38 neighborhoods
  const neighborhoods = [
    'bloomingdale','river-hills','diamond-hill','buckhorn','twin-lakes','brentwood-hills',
    'crestwood-estates','bloomingdale-east','bloomingdale-oaks','canterbury-oaks',
    'bent-tree-estates','buckhorn-preserve','buckhorn-springs-manor','crosby-crossings',
    'wellington','shetland-ridge','duncan-groves','lakemont','bloomingdale-cove',
    'buckhorn-bloomingdale','river-hills-masters','savannah-landings','kings-mill',
    'lake-valrico','legends-pass','valrico-oaks','valrico-hills','valri-park',
    'arista','valrico-forest','heritage-crest','northwood-estates',
    'magnolia-park','providence-lakes','summerfield','oak-creek','lithia-springs','valrico-village',
    'cimmaron','buckhorn-golf-club-estates','durant-oaks','copper-ridge',
  ]

  // Core static pages
  const corePages = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/valrico-realtor/`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/valrico-real-estate-agent/`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/valrico-fl-homes-for-sale/`, changeFrequency: 'daily' as const, priority: 0.95 },
    { url: `${baseUrl}/valrico-fl-home-values/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/sell-my-home-valrico/`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/valrico-market-report/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/living-in-valrico/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-pool-homes/`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-no-hoa-homes/`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-new-construction-homes/`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/homes-for-sale-33594/`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/homes-for-sale-33596/`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/valrico-luxury-homes/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-school-zones/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/valrico-property-management/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-waterfront-homes/`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-foreclosures/`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-short-sale/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-pre-foreclosure/`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-cash-offer/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-va-loan-homes/`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-investment-property/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-55-plus-communities/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-first-time-homebuyer/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-down-payment-assistance/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/valrico-relocation-guide/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/`, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/about/`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/best-realtor-in-valrico/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/valrico-real-estate/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    // Comparison and informational pages
    { url: `${baseUrl}/valrico-vs-brandon/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-vs-riverview/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-cost-of-living/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/is-valrico-safe/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/valrico-open-houses/`, changeFrequency: 'daily' as const, priority: 0.7 },
    { url: `${baseUrl}/get-help/`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/schedule-showing/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/florida-homestead-exemption-save-our-homes/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/neighborhoods/`, changeFrequency: 'weekly' as const, priority: 0.8 },
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
