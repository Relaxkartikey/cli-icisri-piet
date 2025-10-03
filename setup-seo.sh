#!/bin/bash

# Google Search Console Setup Automation Script
# Run this script after deploying your website to automate SEO setup

echo "🚀 ICISRI 2026 - Google Search Console Setup Script"
echo "=================================================="

# Check if domain is provided
if [ -z "$1" ]; then
    echo "❌ Error: Please provide your domain as an argument"
    echo "Usage: ./setup-seo.sh your-domain.com"
    exit 1
fi

DOMAIN=$1
echo "🌐 Setting up SEO for domain: $DOMAIN"

# Create temporary files for SEO verification
echo "📝 Creating SEO verification files..."

# Create Google verification file (replace with actual verification code)
cat > public/google-site-verification.html << EOL
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Google Site Verification</title>
</head>
<body>
    <p>Google site verification for ICISRI 2026</p>
    <!-- Replace 'your-verification-code' with actual Google verification code -->
    <meta name="google-site-verification" content="your-verification-code" />
</body>
</html>
EOL

# Create Bing verification file
cat > public/BingSiteAuth.xml << EOL
<?xml version="1.0"?>
<users>
    <user>your-bing-verification-code</user>
</users>
EOL

# Create Yandex verification file
cat > public/yandex-verification.html << EOL
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Yandex Verification</title>
    <meta name="yandex-verification" content="your-yandex-verification-code" />
</head>
<body>
    <p>Yandex site verification for ICISRI 2026</p>
</body>
</html>
EOL

echo "✅ Verification files created in public/ directory"

# Generate sitemap URL
SITEMAP_URL="https://$DOMAIN/sitemap.xml"
ROBOTS_URL="https://$DOMAIN/robots.txt"

echo "📊 SEO URLs generated:"
echo "   Sitemap: $SITEMAP_URL"
echo "   Robots: $ROBOTS_URL"
echo "   Website: https://$DOMAIN"

# Create SEO checklist
cat > SEO_CHECKLIST.md << EOL
# ICISRI 2026 - SEO Setup Checklist

## ✅ Completed Tasks
- [x] XML Sitemap generated (\`sitemap.ts\`)
- [x] Robots.txt created (\`robots.ts\`)
- [x] Structured data implemented (JSON-LD)
- [x] Open Graph meta tags added
- [x] Twitter Card meta tags added
- [x] PWA manifest configured
- [x] Favicon optimization completed
- [x] Google Analytics setup prepared
- [x] Performance tracking with Web Vitals

## 📋 Manual Tasks Required

### 1. Google Search Console Setup
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: \`$DOMAIN\`
3. Verify ownership using one of these methods:
   - HTML meta tag (already added to layout.tsx)
   - Upload verification file (created in public/)
   - DNS verification
4. Submit sitemap: \`$SITEMAP_URL\`

### 2. Google Analytics Setup
1. Create GA4 property at [Google Analytics](https://analytics.google.com/)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Update \`src/lib/analytics.ts\` with your actual Measurement ID
4. Replace \`analyticsConfig.GA_MEASUREMENT_ID\` with your code

### 3. Search Engine Verification Codes
Update the following files with actual verification codes:

#### src/lib/analytics.ts
\`\`\`typescript
export const analyticsConfig = {
  GA_MEASUREMENT_ID: 'G-XXXXXXXXXX', // Your actual GA4 ID
  GOOGLE_SITE_VERIFICATION: 'your-actual-google-code',
  BING_SITE_VERIFICATION: 'your-actual-bing-code',
  YANDEX_VERIFICATION: 'your-actual-yandex-code',
}
\`\`\`

### 4. Domain Configuration
Update the following files with your actual domain:

#### src/app/sitemap.ts
\`\`\`typescript
const baseUrl = 'https://$DOMAIN'
\`\`\`

#### src/app/robots.ts
\`\`\`typescript
const baseUrl = 'https://$DOMAIN'
\`\`\`

#### src/lib/seo.ts
\`\`\`typescript
export const siteConfig = {
  url: "https://$DOMAIN",
  // ... other config
}
\`\`\`

### 5. Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site: \`$DOMAIN\`
3. Verify using XML file or meta tag
4. Submit sitemap: \`$SITEMAP_URL\`

### 6. Yandex Webmaster
1. Go to [Yandex Webmaster](https://webmaster.yandex.com/)
2. Add site: \`$DOMAIN\`
3. Verify ownership
4. Submit sitemap: \`$SITEMAP_URL\`

## 🔍 SEO Monitoring URLs
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com/
- Bing Webmaster: https://www.bing.com/webmasters
- Yandex Webmaster: https://webmaster.yandex.com/

## 📈 Performance Testing
- PageSpeed Insights: https://pagespeed.web.dev/analysis?url=https://$DOMAIN
- GTmetrix: https://gtmetrix.com/
- Core Web Vitals: Built into Google Search Console

## 🎯 Keywords Focus
Primary: "ICISRI 2026", "International Conference Intelligent Systems"
Secondary: "Semiconductors Robotics IoT", "PIET Jaipur Conference"
Long-tail: "International Conference Intelligent Systems Semiconductors Robotics IoT 2026"

## 📱 Social Media Integration
- Open Graph tags: ✅ Configured
- Twitter Cards: ✅ Configured
- LinkedIn sharing: ✅ Ready
- WhatsApp preview: ✅ Ready

## 🏆 SEO Best Practices Applied
- Mobile-first responsive design
- Fast loading performance
- Semantic HTML structure
- Image optimization with alt tags
- Internal linking structure
- Clean URL structure
- SSL certificate required
- Schema.org structured data
EOL

echo "📋 SEO checklist created: SEO_CHECKLIST.md"

# Create post-deployment script
cat > scripts/post-deploy-seo.sh << 'EOL'
#!/bin/bash

# Post-deployment SEO tasks
echo "🔄 Running post-deployment SEO tasks..."

# Test sitemap accessibility
echo "🗺️  Testing sitemap..."
curl -I "$1/sitemap.xml" | head -n 1

# Test robots.txt
echo "🤖 Testing robots.txt..."
curl -I "$1/robots.txt" | head -n 1

# Test main pages
echo "🌐 Testing main pages..."
for page in "" "about" "callforpaper" "committees" "speakers" "registration" "contact" "partners"; do
    url="$1/$page"
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    echo "   $url: $status"
done

echo "✅ Post-deployment SEO tests completed"
EOL

chmod +x scripts/post-deploy-seo.sh

echo ""
echo "🎉 SEO setup completed successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Review and complete the manual tasks in SEO_CHECKLIST.md"
echo "2. Deploy your website to production"
echo "3. Run: ./scripts/post-deploy-seo.sh https://$DOMAIN"
echo "4. Submit sitemap to search engines"
echo "5. Monitor performance in Google Search Console"
echo ""
echo "🔗 Important URLs:"
echo "   Website: https://$DOMAIN"
echo "   Sitemap: $SITEMAP_URL"
echo "   Robots: $ROBOTS_URL"
echo ""
echo "Happy optimizing! 🚀"