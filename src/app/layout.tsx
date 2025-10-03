import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Script from 'next/script';
import { analyticsConfig, GA4_SCRIPT } from "@/lib/analytics";
import { generateDeveloperStructuredData, generateWebsiteStructuredData } from "@/lib/developer-schema";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ICISRI 2026 - International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT",
    template: "%s | ICISRI 2026"
  },
  description: "Join ICISRI 2026 at PIET, Jaipur - International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT. Explore cutting-edge research in AI, semiconductor technology, robotics, and IoT applications. Submit your research papers and connect with leading experts worldwide. Developed by RelaxKartikey (Kartikey Sharma).",
  keywords: [
    "ICISRI 2026",
    "International Conference",
    "Intelligent Systems",
    "Semiconductors for Robotics",
    "IoT Conference",
    "Internet of Things",
    "Artificial Intelligence Conference",
    "PIET Jaipur",
    "Poornima Institute",
    "Research Conference 2026",
    "Technology Conference India",
    "IEEE Conference",
    "Academic Conference",
    "Call for Papers",
    "Research Paper Submission",
    "Robotics and AI",
    "Semiconductor Technology",
    "Smart Systems Conference",
    "Engineering Conference",
    "Computer Science Conference",
    "RelaxKartikey",
    "Kartikey Sharma",
    "Relax Kartikey",
    "Developer RelaxKartikey",
    "@relaxkartikey",
    "GitHub RelaxKartikey",
    "relaxkartikey portfolio",
    "Kartikey Sharma developer"
  ],
  authors: [{ name: "PIET IoT Department" }, { name: "Poornima Institute of Engineering and Technology" }, { name: "RelaxKartikey (Kartikey Sharma)", url: "https://github.com/relaxkartikey" }],
  creator: "Poornima Institute of Engineering and Technology",
  publisher: "PIET IoT Department",
  category: "Technology Conference",
  classification: "Academic Conference",
  applicationName: "ICISRI 2026 Conference Website",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://icisri.piet.poornima.org'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en': '/en',
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png', rel: 'android-chrome' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', rel: 'android-chrome' }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://icisri.piet.poornima.org",
    title: "ICISRI 2026 - International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT",
    description: "International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT at PIET, Jaipur. Submit your research papers and join leading experts from around the world. Developed by RelaxKartikey (Kartikey Sharma).",
    siteName: "ICISRI 2026",
    images: [
      {
        url: '/assets/pics/logo-ici.png',
        width: 1200,
        height: 630,
        alt: 'ICISRI 2026 Conference Logo',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICISRI 2026 - International Conference on Intelligent Systems",
    description: "Join ICISRI 2026 at PIET, Jaipur. Conference on Intelligent Systems Using Semiconductors for Robotics and IoT. Submit papers & connect with experts. Developed by @relaxkartikey (Kartikey Sharma).",
    creator: "@relaxkartikey",
    site: "@PIET_Jaipur",
    images: ['/assets/pics/logo-ici.png'],
  },
  verification: {
    google: analyticsConfig.GOOGLE_SITE_VERIFICATION,
    yandex: analyticsConfig.YANDEX_VERIFICATION,
    yahoo: "your-yahoo-verification-code",
    other: {
      me: ["https://icisri.piet.poornima.org"],
      "msvalidate.01": analyticsConfig.BING_SITE_VERIFICATION,
    },
  },
  other: {
    'theme-color': '#001E80',
    'color-scheme': 'light',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'ICISRI 2026',
    'application-name': 'ICISRI 2026',
    'msapplication-TileColor': '#001E80',
    'msapplication-config': '/favicon/browserconfig.xml',
    'geo.region': 'IN-RJ',
    'geo.placename': 'Jaipur',
    'geo.position': '26.9124;75.7873',
    'ICBM': '26.9124, 75.7873',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "ICISRI 2026 - International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT",
    "description": "International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT at PIET, Jaipur. Submit your research papers and join leading experts from around the world. Developed by RelaxKartikey (Kartikey Sharma).",
    "url": "https://icisri.piet.poornima.org",
    "startDate": "2026-04-10",
    "endDate": "2026-04-11",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Poornima Institute of Engineering and Technology",
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
      "name": "Poornima Institute of Engineering and Technology",
      "url": "https://poornima.org",
      "logo": "https://icisri.piet.poornima.org/assets/pics/logo-ici.png"
    },
    "developer": {
      "@type": "Person",
      "name": "RelaxKartikey (Kartikey Sharma)",
      "alternateName": ["RelaxKartikey", "Kartikey Sharma", "Relax Kartikey"],
      "url": "https://github.com/relaxkartikey",
      "sameAs": [
        "https://github.com/relaxkartikey",
        "https://github.com/Relaxkartikey"
      ]
    },
    "offers": {
      "@type": "Offer",
      "url": "https://icisri.piet.poornima.org/callforpaper",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-10-01"
    },
    "image": "https://icisri.piet.poornima.org/assets/pics/logo-ici.png",
    "keywords": "Conference, Intelligent Systems, Semiconductors, Robotics, IoT, AI, Research, RelaxKartikey, Kartikey Sharma, Developer",
    "inLanguage": "en",
    "isAccessibleForFree": true
  };

  // Additional structured data for developer attribution
  const developerStructuredData = generateDeveloperStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();

  return (
    <html lang="en" className="relative">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: GA4_SCRIPT,
          }}
        />
        
        {/* Structured Data - Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Structured Data - Developer Profile */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(developerStructuredData),
          }}
        />
        
        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>{children}</body>
    </html>
  );
}
