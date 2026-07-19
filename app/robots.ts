/**
 * robots.txt configuration
 * - Allows all legitimate crawlers and AI bots
 * - Blocks known SEO scraper bots that add no value
 */
export default function robots() {
  return {
    rules: [
      // Default: allow everything
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow AI crawlers for AEO (Answer Engine Optimization)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'GoogleOther', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      // Block SEO scraper bots, they consume bandwidth without benefit
      { userAgent: 'SemrushBot', disallow: '/' },
      { userAgent: 'AhrefsBot', disallow: '/' },
      { userAgent: 'MJ12bot', disallow: '/' },
      { userAgent: 'DotBot', disallow: '/' },
    ],
    sitemap: 'https://valricoagent.com/sitemap.xml',
  };
}
