const SITE_URL = 'https://batamproteksi.biz.id'

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function insuranceServiceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string
  description: string
  path: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      '@type': 'InsuranceAgency',
      name: 'Batam Proteksi',
      url: SITE_URL,
      telephone: '+6287781658231',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Batam',
        addressRegion: 'Kepulauan Riau',
        addressCountry: 'ID',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Batam',
    },
  }
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `${SITE_URL}${path}`,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: 'Tono',
      jobTitle: 'Praktisi Asuransi Profesional',
      url: `${SITE_URL}/#tentang`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Batam Proteksi',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${path}`,
    },
  }
}

export { SITE_URL }
