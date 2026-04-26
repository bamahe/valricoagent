import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://valricoagent.com'
  const now = new Date().toISOString()

  const neighborhoods = [
    'bloomingdale','river-hills','diamond-hill','buckhorn','twin-lakes','brentwood-hills',
    'crestwood-estates','bloomingdale-east','bloomingdale-oaks','canterbury-oaks',
    'bent-tree-estates','buckhorn-preserve','buckhorn-springs-manor','crosby-crossings',
    'wellington','shetland-ridge','duncan-groves','lakemont','bloomingdale-cove',
    'buckhorn-bloomingdale','river-hills-masters','savannah-landings','kings-mill',
    'lake-valrico','legends-pass','valrico-oaks','valrico-hills','valri-park',
    'arista','valrico-forest','heritage-crest','northwood-estates',
  ]

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
    { url: `${baseUrl}/blog/`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/valrico-housing-market-q1-2026/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/bloomingdale-vs-buckhorn-valrico/`, changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  const neighborhoodPages = neighborhoods.map((slug) => ({
    url: `${baseUrl}/neighborhoods/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...corePages.map((p) => ({ ...p, lastModified: now })),
    ...neighborhoodPages,
  ]
}
