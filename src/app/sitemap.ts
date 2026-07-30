import type { MetadataRoute } from 'next'
import { produkKategori } from '@/lib/produk-data'

const SITE_URL = 'https://batamproteksi.biz.id'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/produk`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const productRoutes: MetadataRoute.Sitemap = produkKategori
    .filter((p) => p.status === 'live')
    .map((p) => ({
      url: `${SITE_URL}/produk/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

  return [...staticRoutes, ...productRoutes]
}
