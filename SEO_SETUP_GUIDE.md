# Google Search Console Integration Guide

## 1. Verify Your Site in Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your property (website URL)
3. Choose verification method:
   - **HTML Tag Method**: Add this meta tag to your layout.tsx head section:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
   - **HTML File Method**: Download the verification file and place it in your public folder
   - **DNS Method**: Add a TXT record to your domain's DNS settings

## 2. Submit Your Sitemap

After verification:
1. In Google Search Console, go to "Sitemaps" in the left sidebar
2. Add your sitemap URL: `https://yourdomain.com/sitemap.xml`
3. Click "Submit"

## 3. Update Domain Configuration

Update the following files with your actual domain:
- `src/app/sitemap.ts` - Update baseUrl
- `src/app/robots.ts` - Update baseUrl
- `src/app/layout.tsx` - Update metadataBase URL

## 4. SEO Features Included

### Sitemap (sitemap.ts)
- Automatically generated XML sitemap
- Includes all main pages with appropriate priorities
- Updates automatically when deployed

### Robots.txt (robots.ts)
- Allows search engines to crawl main pages
- Blocks admin and API routes
- Points to sitemap location

### Enhanced Metadata (layout.tsx)
- Comprehensive SEO metadata
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD) for rich snippets
- Favicon configuration
- Geo-tagging for local SEO

### Structured Data
- Event schema for conference information
- Organization schema for PIET
- Location data with coordinates
- Date and time information

## 5. Monitor Performance

In Google Search Console, you can:
- Check indexing status
- Monitor search performance
- View mobile usability
- Check for Core Web Vitals
- Analyze search queries and clicks

## 6. Additional SEO Recommendations

1. **Content Optimization**:
   - Ensure each page has unique, descriptive titles
   - Write compelling meta descriptions
   - Use proper heading hierarchy (H1, H2, H3)
   - Add alt text to all images

2. **Performance**:
   - Optimize images (WebP format)
   - Minimize JavaScript and CSS
   - Enable compression
   - Use lazy loading for images

3. **Mobile Optimization**:
   - Ensure responsive design
   - Test on various devices
   - Optimize touch targets
   - Fast loading on mobile networks

4. **Local SEO**:
   - Add Google My Business listing
   - Include location-based keywords
   - Add local schema markup
   - Get local backlinks

## 7. Verification Codes to Update

Replace placeholder verification codes in layout.tsx:
```typescript
verification: {
  google: "your-actual-google-verification-code",
  yandex: "your-yandex-verification-code",
  yahoo: "your-yahoo-verification-code",
}
```

## 8. Social Media Integration

Update social media handles in layout.tsx:
```typescript
twitter: {
  creator: "@YourActualTwitterHandle",
}
```

This comprehensive SEO setup will help your ICISRI 2026 conference website rank better in search results and appear properly when shared on social media.