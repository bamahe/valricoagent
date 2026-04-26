# Market Data Automation (Future Setup)

## Status: Manual updates for now. Automation to be built after launch.

## Goal
Automatically keep the market stats on valricoagent.com current by scraping nowtb.com.

## Architecture
```
Stellar MLS → nowtb.com (daily via Showcase IDX)
     ↓
[n8n workflow, runs weekly Mondays 6 AM]
     ↓
Scrapes nowtb.com/valrico-market-stats/ (stable page with data-metric attributes)
     ↓
Writes /public/data/valrico-market.json in this repo
     ↓
Git commit + push → Vercel auto-deploys
     ↓
Site displays always-current numbers
```

## Prerequisite: Stable Stats Page on nowtb.com

Create a page at `nowtb.com/valrico-market-stats/` with this exact HTML structure.
Consistent class names matter for reliable scraping:

```html
<div class="market-stats" data-area="valrico">
  <span class="stat" data-metric="median-price">$415,000</span>
  <span class="stat" data-metric="ppsf-low">$210</span>
  <span class="stat" data-metric="ppsf-high">$220</span>
  <span class="stat" data-metric="dom-low">30</span>
  <span class="stat" data-metric="dom-high">55</span>
  <span class="stat" data-metric="range-low">$300K</span>
  <span class="stat" data-metric="range-high">$1M+</span>
</div>
```

This page can be populated by a Showcase IDX widget, a manually-updated WP page, or a separate automation. The key is the HTML structure stays consistent.

## n8n Workflow

1. **Trigger:** Schedule trigger, every Monday 6:00 AM
2. **HTTP Request:** GET https://nowtb.com/valrico-market-stats/
3. **HTML Extract:** Pull each `data-metric` value
4. **Set node:** Format into target JSON structure
5. **GitHub node:** Commit to `valricoagent` repo at `/public/data/valrico-market.json`

## Target JSON Structure (`/public/data/valrico-market.json`)

```json
{
  "updated": "April 2026",
  "source": "Stellar MLS via nowtb.com",
  "zip_codes": ["33594", "33596"],
  "stats": [
    {
      "val": "~$415K",
      "label": "Median sale price",
      "note": "Stable year-over-year"
    },
    {
      "val": "$210–$220",
      "label": "Price per square foot",
      "note": "Varies by subdivision"
    },
    {
      "val": "30–55 days",
      "label": "Typical days on market",
      "note": "Depends on pricing"
    },
    {
      "val": "$300K–$1M+",
      "label": "Price range across Valrico",
      "note": "Starter homes to River Hills estates"
    }
  ]
}
```

## Site Code Changes (Once JSON Exists)

In `app/page.tsx`, replace the hardcoded array:

```tsx
// At top of file:
import marketData from '@/public/data/valrico-market.json';

// In the market section, replace the inline array with:
{marketData.stats.map(({ val, label, note }) => (
  <div key={label} className="bg-white rounded-md p-6 border" style={{ borderColor: 'var(--border)' }}>
    <span className="font-serif text-[28px] block mb-1" style={{ color: 'var(--ink)' }}>{val}</span>
    <span className="text-[13px] block mb-2.5" style={{ color: 'var(--ink-muted)' }}>{label}</span>
    <span className="text-xs px-2 py-1 rounded inline-block" style={{ color: 'var(--ink-muted)', background: 'var(--cream)' }}>{note}</span>
  </div>
))}

// And replace the hardcoded "April 2026" timestamp with:
Market data updated {marketData.updated} · Sourced from {marketData.source}
```

## Scaling to Other Micro-Sites

The same n8n workflow can branch to feed every micro-site:

| Source page on nowtb.com | Target file |
|---|---|
| `/valrico-market-stats/` | `valricoagent.com/public/data/market.json` |
| `/brandon-market-stats/` | `brandonflagent.com/public/data/market.json` |
| `/riverview-market-stats/` | `riverviewflagent.com/public/data/market.json` |
| `/plant-city-market-stats/` | `plantcityflagent.com/public/data/market.json` |
| `/fishhawk-market-stats/` | `fishhawkflagent.com/public/data/market.json` |
| `/dover-market-stats/` | `doverflagent.com/public/data/market.json` |
| `/wesley-chapel-market-stats/` | `wesleychapelflagent.com/public/data/market.json` |

One hub. Seven sites. One workflow.

## When to Build This

**Not before launch.** Valrico needs to ship first and market data barely moves month-to-month.

**Build when:**
1. Valricoagent.com has been live 30+ days
2. Brandon site is ready to deploy (so you're feeding 2+ sites and the automation pays for itself in time saved)
3. You have an hour to set up the Showcase IDX widget on nowtb.com at the source URL

## Manual Update Process (Current)

Until automation is live, update market data quarterly:

1. Edit `app/page.tsx`
2. Find the `{/* === MARKET DATA AUTOMATION PLACEHOLDER === */}` comment
3. Update the 4 `val`/`label`/`note` entries in the array below it
4. Update the "April 2026" timestamp in the paragraph below the grid
5. Update the eyebrow text ("Q1 2026") if the quarter has changed
6. Commit and push — Vercel auto-deploys
