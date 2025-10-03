// Google Analytics and Search Console utilities
export const analyticsConfig = {
  // Google Analytics 4 measurement ID
  GA_MEASUREMENT_ID: 'G-XXXXXXXXXX', // Replace with your actual GA4 ID
  
  // Google Search Console verification meta tags
  GOOGLE_SITE_VERIFICATION: 'your-google-verification-code', // Replace with actual code
  
  // Bing Webmaster Tools verification
  BING_SITE_VERIFICATION: 'your-bing-verification-code', // Replace with actual code
  
  // Yandex Webmaster verification
  YANDEX_VERIFICATION: 'your-yandex-verification-code', // Replace with actual code
}

// Google Analytics 4 gtag script
export const GA4_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${analyticsConfig.GA_MEASUREMENT_ID}', {
    page_title: document.title,
    page_location: window.location.href,
  });
`

// Event tracking functions
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    })
  }
}

// Page view tracking
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', analyticsConfig.GA_MEASUREMENT_ID, {
      page_title: title,
      page_location: url,
    })
  }
}

// Conference-specific event tracking
export const trackConferenceEvent = {
  // Track paper submission
  paperSubmission: (paperType: string) => {
    trackEvent('paper_submission', {
      event_category: 'conference',
      paper_type: paperType,
      label: 'Paper Submission Started'
    })
  },
  
  // Track registration
  registration: (registrationType: string) => {
    trackEvent('conference_registration', {
      event_category: 'conference',
      registration_type: registrationType,
      label: 'Registration Started'
    })
  },
  
  // Track brochure download
  brochureDownload: () => {
    trackEvent('brochure_download', {
      event_category: 'content',
      label: 'Conference Brochure Downloaded'
    })
  },
  
  // Track guideline view
  guidelineView: (guidelineType: string) => {
    trackEvent('guideline_view', {
      event_category: 'content',
      guideline_type: guidelineType,
      label: 'Guidelines Viewed'
    })
  },
  
  // Track contact form submission
  contactSubmission: () => {
    trackEvent('contact_form_submission', {
      event_category: 'engagement',
      label: 'Contact Form Submitted'
    })
  },
  
  // Track archive page visit
  archiveView: (year: string) => {
    trackEvent('archive_view', {
      event_category: 'navigation',
      year: year,
      label: `ICISRI ${year} Archive Viewed`
    })
  }
}

// Performance monitoring (basic timing)
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // Track basic page load performance
    window.addEventListener('load', () => {
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        trackEvent('page_load_time', { value: Math.round(loadTime) });
      }
    });
  }
}

// Type declarations for Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default analyticsConfig