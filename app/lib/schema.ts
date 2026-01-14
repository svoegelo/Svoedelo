export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Свое Дело",
    "url": "https://svoedelo.ru",
    "logo": "https://svoedelo.ru/images/logo.svg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Челябинск",
      "addressCountry": "RU"
    },
    "telephone": "+79227122266",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+79227122266",
      "contactType": "customer service",
      "areaServed": "RU"
    }
  };
}

export function getRegionSchema(region: { name: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Свое Дело — бухгалтерия в ${region.name}`,
    "image": "https://svoedelo.ru/images/logo.svg",
    "url": `https://svoedelo.ru/regions/${region.slug}`,
    "telephone": "+79227122266",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": region.name,
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates"
      // координаты можно добавить позже
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };
}

export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}