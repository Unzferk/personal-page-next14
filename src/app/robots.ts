import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_PAGE_URL || 'localhost:3000'
  const routes = [
    '/en',
    '/es',
    '/en/home/projects',
    '/en/home/certifications',
    '/en/home/others',
    '/es/home/projects',
    '/es/home/certifications',
    '/es/home/others',
  ]
  return {
    rules: {
      userAgent: '*',
      allow: routes,
      disallow: '',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
