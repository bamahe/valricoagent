export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Allow all AI crawlers
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
    sitemap: 'https://valricoagent.com/sitemap.xml',
  };
}
