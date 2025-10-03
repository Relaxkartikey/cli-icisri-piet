import { Metadata } from 'next'

export const siteConfig = {
  name: "ICISRI 2026",
  title: "ICISRI 2026 - International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT",
  description: "Join ICISRI 2026 at PIET, Jaipur - International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT. Explore cutting-edge research in AI, semiconductor technology, robotics, and IoT applications. Developed by RelaxKartikey (Kartikey Sharma).",
  url: "https://icisri2026.vercel.app", // Update with your actual domain
  ogImage: "/assets/pics/logo-ici.png",
  author: "PIET IoT Department",
  developer: "RelaxKartikey (Kartikey Sharma)",
  developerGithub: "https://github.com/relaxkartikey",
  keywords: [
    "ICISRI 2026",
    "International Conference",
    "Intelligent Systems",
    "Semiconductors",
    "Robotics",
    "IoT",
    "Internet of Things",
    "Artificial Intelligence",
    "PIET Jaipur",
    "Research Conference",
    "Technology Conference",
    "IEEE Conference",
    "Academic Conference",
    "Call for Papers",
    "Research Paper Submission",
    "RelaxKartikey",
    "Kartikey Sharma",
    "Relax Kartikey",
    "Developer RelaxKartikey",
    "@relaxkartikey",
    "GitHub RelaxKartikey"
  ]
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  noindex?: boolean
  canonical?: string
  keywords?: string[]
}

export function generateSEO({
  title,
  description,
  image,
  noindex = false,
  canonical,
  keywords = []
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const seoDescription = description || siteConfig.description
  const seoImage = image || siteConfig.ogImage
  const seoKeywords = [...siteConfig.keywords, ...keywords]

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    ...(canonical && {
      alternates: {
        canonical
      }
    }),
    ...(noindex && {
      robots: {
        index: false,
        follow: false
      }
    }),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: seoTitle,
      description: seoDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: "@PIET_Jaipur",
    },
  }
}

// Event structured data generator
export function generateEventStructuredData(eventData?: Partial<{
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  organizer: string
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": eventData?.name || "ICISRI 2026 - International Conference on Intelligent Systems",
    "description": eventData?.description || siteConfig.description,
    "url": siteConfig.url,
    "startDate": eventData?.startDate || "2026-04-10",
    "endDate": eventData?.endDate || "2026-04-11",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": eventData?.location || "Poornima Institute of Engineering and Technology",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ISI-2, RIICO Institutional Area, Sitapura",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302022",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.9124",
        "longitude": "75.7873"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": eventData?.organizer || "Poornima Institute of Engineering and Technology",
      "url": "https://poornima.org",
      "logo": `${siteConfig.url}/assets/pics/logo-ici.png`
    },
    "offers": {
      "@type": "Offer",
      "url": `${siteConfig.url}/registration`,
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-10-01"
    },
    "image": `${siteConfig.url}/assets/pics/logo-ici.png`,
    "keywords": siteConfig.keywords.join(", "),
    "inLanguage": "en",
    "isAccessibleForFree": true
  }
}

// Organization structured data
export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Poornima Institute of Engineering and Technology",
    "alternateName": "PIET",
    "url": "https://poornima.org",
    "logo": `${siteConfig.url}/assets/pics/piet.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXX-XXX-XXXX", // Update with actual phone
      "contactType": "customer service",
      "email": "icisri@poornima.org",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ISI-2, RIICO Institutional Area, Sitapura",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302022",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.9124",
      "longitude": "75.7873"
    },
    "sameAs": [
      "https://www.linkedin.com/school/piet-jaipur/",
      "https://twitter.com/PIET_Jaipur",
      "https://www.facebook.com/pietjaipur"
    ]
  }
}

// FAQ structured data generator
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}