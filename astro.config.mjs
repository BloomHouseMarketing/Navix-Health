import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://navixhealth.com',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      serialize: (item) => {
        const url = item.url.endsWith('/') ? item.url.slice(0, -1) : item.url
        return { ...item, url }
      },
    }),
  ],

  redirects: {
    '/news': '/blogs',

    '/news/disrupt-magazine-features-navix-health-inc-the-future-of-behavioral-health-facilities-lies-in-ai':
      '/blogs/disrupt-magazine-features-navix-health-inc-the-future-of-behavioral-health-facilities-lies-in-ai',

    '/news/unveiling-navixai-tm': '/blogs/unveiling-navixai-tm',

    '/news/navix-healths-innovative-approach-featured-in-msn':
      '/blogs/navix-healths-innovative-approach-featured-in-msn',

    '/news/new-york-weekly-featured-navix-health-advancing-behavioral-health-software':
      '/blogs/new-york-weekly-featured-navix-health-advancing-behavioral-health-software',

    '/news/forbes-features-navix-health-the-transformative-power-of-ai-in-behavioral-healthcare':
      '/blogs/forbes-features-navix-health-the-transformative-power-of-ai-in-behavioral-healthcare',

    '/news/business-insider-features-navix-health-leveraging-ai-to-transform-behavioral-health':
      '/blogs/business-insider-features-navix-health-leveraging-ai-to-transform-behavioral-health',

    '/news/navix-health-partners-with-sobrsafe-for-advanced-alcohol-monitoring-in-digital-healthcare':
      '/blogs/navix-health-partners-with-sobrsafe-for-advanced-alcohol-monitoring-in-digital-healthcare',
  },

  server: {
    headers: {
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
    },
  },
})
