import type { MetadataRoute } from 'next'

const routes = ['/home/projects', '/home/certifications', '/home/others']

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_PAGE_URL || 'localhost:3000'

  const urls = routes.map((r) => {
    return {
      url: `${baseUrl}${r}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es${r}`,
          en: `${baseUrl}/en${r}`,
        },
      },
    }
  })

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
        },
      },
    },
    ...urls,
  ]
}
