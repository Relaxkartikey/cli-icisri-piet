// Developer Profile Structured Data for SEO
export function generateDeveloperStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "RelaxKartikey",
    "alternateName": [
      "Kartikey Sharma", 
      "Relax Kartikey",
      "@relaxkartikey"
    ],
    "description": "Web Developer and Software Engineer specializing in modern web technologies. Creator of ICISRI 2026 conference website.",
    "url": "https://github.com/relaxkartikey",
    "image": "https://github.com/relaxkartikey.png",
    "sameAs": [
      "https://github.com/relaxkartikey",
      "https://github.com/Relaxkartikey",
      "https://www.linkedin.com/in/relaxkartikey",
      "https://twitter.com/relaxkartikey",
      "https://instagram.com/relaxkartikey"
    ],
    "knowsAbout": [
      "Web Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Full Stack Development",
      "Frontend Development",
      "UI/UX Design",
      "Software Engineering"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Web Development",
        "credentialCategory": "Professional Development"
      }
    ],
    "owns": [
      {
        "@type": "WebSite",
        "name": "ICISRI 2026 Conference Website",
        "url": "https://icisri.piet.poornima.org",
        "description": "Official website for International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT"
      }
    ]
  }
}

// Website authorship structured data
export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ICISRI 2026 - International Conference Website",
    "url": "https://icisri.piet.poornima.org",
    "description": "Official website for ICISRI 2026 - International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT, developed by RelaxKartikey (Kartikey Sharma)",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "author": {
      "@type": "Person",
      "name": "RelaxKartikey",
      "alternateName": "Kartikey Sharma",
      "url": "https://github.com/relaxkartikey"
    },
    "creator": {
      "@type": "Person", 
      "name": "RelaxKartikey",
      "alternateName": "Kartikey Sharma",
      "url": "https://github.com/relaxkartikey"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Poornima Institute of Engineering and Technology",
      "url": "https://poornima.org"
    },
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Poornima Institute of Engineering and Technology"
    },
    "about": [
      {
        "@type": "Event",
        "name": "ICISRI 2026",
        "description": "International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT"
      }
    ],
    "keywords": "ICISRI 2026, Conference Website, RelaxKartikey, Kartikey Sharma, Web Development, React, Next.js, Conference Management System",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://icisri.piet.poornima.org/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
}

// Software Application structured data for the website
export function generateSoftwareApplicationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ICISRI 2026 Conference Management Website",
    "description": "Web application for managing conference registrations, paper submissions, and information for ICISRI 2026. Built with modern web technologies.",
    "url": "https://icisri.piet.poornima.org",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Cross-platform",
    "browserRequirements": "Modern web browser with JavaScript support",
    "author": {
      "@type": "Person",
      "name": "RelaxKartikey",
      "alternateName": "Kartikey Sharma",
      "url": "https://github.com/relaxkartikey"
    },
    "creator": {
      "@type": "Person",
      "name": "RelaxKartikey", 
      "alternateName": "Kartikey Sharma",
      "url": "https://github.com/relaxkartikey"
    },
    "programmingLanguage": [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "runtimePlatform": [
      "Next.js",
      "React",
      "Node.js"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "isAccessibleForFree": true,
    "license": "Proprietary"
  }
}