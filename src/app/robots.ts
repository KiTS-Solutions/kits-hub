import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard/', '/billing/'],
      },
    ],
    sitemap: 'https://kits-hub.com/sitemap.xml',
  }
}
