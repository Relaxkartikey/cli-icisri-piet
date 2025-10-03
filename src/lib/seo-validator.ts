// SEO Validation and Testing Utilities
// Use this to test your SEO implementation

export interface SEOTestResult {
  test: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  details?: string;
}

export class SEOValidator {
  private results: SEOTestResult[] = [];
  
  constructor(private baseUrl: string) {}

  async runAllTests(): Promise<SEOTestResult[]> {
    this.results = [];
    
    await Promise.all([
      this.testSitemap(),
      this.testRobotsTxt(),
      this.testMetaTags(),
      this.testStructuredData(),
      this.testPageSpeed(),
      this.testMobileResponsiveness(),
      this.testSocialMediaTags(),
      this.testFavicons(),
    ]);

    return this.results;
  }

  private addResult(test: string, status: 'pass' | 'fail' | 'warning', message: string, details?: string) {
    this.results.push({ test, status, message, details });
  }

  private async testSitemap(): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/sitemap.xml`);
      if (response.ok) {
        const content = await response.text();
        if (content.includes('<urlset') && content.includes('<url>')) {
          this.addResult('Sitemap', 'pass', 'XML sitemap is accessible and valid');
        } else {
          this.addResult('Sitemap', 'fail', 'Sitemap exists but appears invalid');
        }
      } else {
        this.addResult('Sitemap', 'fail', `Sitemap not accessible (${response.status})`);
      }
    } catch (error) {
      this.addResult('Sitemap', 'fail', 'Failed to test sitemap', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  private async testRobotsTxt(): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/robots.txt`);
      if (response.ok) {
        const content = await response.text();
        if (content.includes('Sitemap:') && content.includes('User-agent:')) {
          this.addResult('Robots.txt', 'pass', 'Robots.txt is accessible and contains sitemap reference');
        } else {
          this.addResult('Robots.txt', 'warning', 'Robots.txt exists but may be incomplete');
        }
      } else {
        this.addResult('Robots.txt', 'fail', `Robots.txt not accessible (${response.status})`);
      }
    } catch (error) {
      this.addResult('Robots.txt', 'fail', 'Failed to test robots.txt', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  private async testMetaTags(): Promise<void> {
    try {
      const response = await fetch(this.baseUrl);
      if (response.ok) {
        const html = await response.text();
        const tests = [
          { tag: 'title', regex: /<title[^>]*>([^<]+)<\/title>/, name: 'Page Title' },
          { tag: 'description', regex: /<meta[^>]*name="description"[^>]*content="([^"]+)"/, name: 'Meta Description' },
          { tag: 'keywords', regex: /<meta[^>]*name="keywords"[^>]*content="([^"]+)"/, name: 'Meta Keywords' },
          { tag: 'og:title', regex: /<meta[^>]*property="og:title"[^>]*content="([^"]+)"/, name: 'Open Graph Title' },
          { tag: 'og:description', regex: /<meta[^>]*property="og:description"[^>]*content="([^"]+)"/, name: 'Open Graph Description' },
          { tag: 'twitter:card', regex: /<meta[^>]*name="twitter:card"[^>]*content="([^"]+)"/, name: 'Twitter Card' },
        ];

        tests.forEach(test => {
          if (test.regex.test(html)) {
            this.addResult(`Meta Tags - ${test.name}`, 'pass', `${test.name} is present`);
          } else {
            this.addResult(`Meta Tags - ${test.name}`, 'fail', `${test.name} is missing`);
          }
        });
      }
      } catch (error) {
        this.addResult('Meta Tags', 'fail', 'Failed to test meta tags', error instanceof Error ? error.message : 'Unknown error');
      }
  }

  private async testStructuredData(): Promise<void> {
    try {
      const response = await fetch(this.baseUrl);
      if (response.ok) {
        const html = await response.text();
        if (html.includes('application/ld+json')) {
          const jsonLdMatches = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g);
          if (jsonLdMatches && jsonLdMatches.length > 0) {
            try {
              jsonLdMatches.forEach(match => {
                const jsonContent = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
                JSON.parse(jsonContent.trim());
              });
              this.addResult('Structured Data', 'pass', `Found ${jsonLdMatches.length} valid JSON-LD structured data blocks`);
            } catch (jsonError) {
              this.addResult('Structured Data', 'fail', 'Structured data exists but contains invalid JSON');
            }
          }
        } else {
          this.addResult('Structured Data', 'fail', 'No structured data found');
        }
      }
    } catch (error) {
      this.addResult('Structured Data', 'fail', 'Failed to test structured data', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  private async testPageSpeed(): Promise<void> {
    try {
      const startTime = performance.now();
      const response = await fetch(this.baseUrl);
      const endTime = performance.now();
      const loadTime = endTime - startTime;

      if (loadTime < 1000) {
        this.addResult('Page Speed', 'pass', `Page loaded in ${loadTime.toFixed(0)}ms`);
      } else if (loadTime < 3000) {
        this.addResult('Page Speed', 'warning', `Page loaded in ${loadTime.toFixed(0)}ms (could be faster)`);
      } else {
        this.addResult('Page Speed', 'fail', `Page loaded in ${loadTime.toFixed(0)}ms (too slow)`);
      }
    } catch (error) {
      this.addResult('Page Speed', 'fail', 'Failed to test page speed', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  private async testMobileResponsiveness(): Promise<void> {
    try {
      const response = await fetch(this.baseUrl);
      if (response.ok) {
        const html = await response.text();
        if (html.includes('viewport')) {
          this.addResult('Mobile Responsiveness', 'pass', 'Viewport meta tag is present');
        } else {
          this.addResult('Mobile Responsiveness', 'fail', 'Viewport meta tag is missing');
        }
      }
    } catch (error) {
      this.addResult('Mobile Responsiveness', 'fail', 'Failed to test mobile responsiveness', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  private async testSocialMediaTags(): Promise<void> {
    try {
      const response = await fetch(this.baseUrl);
      if (response.ok) {
        const html = await response.text();
        const socialTags = [
          'og:title', 'og:description', 'og:image', 'og:url', 'og:type',
          'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'
        ];

        const foundTags = socialTags.filter(tag => 
          html.includes(`property="${tag}"`) || html.includes(`name="${tag}"`)
        );

        if (foundTags.length >= 7) {
          this.addResult('Social Media Tags', 'pass', `Found ${foundTags.length}/${socialTags.length} social media tags`);
        } else if (foundTags.length >= 4) {
          this.addResult('Social Media Tags', 'warning', `Found ${foundTags.length}/${socialTags.length} social media tags (could be improved)`);
        } else {
          this.addResult('Social Media Tags', 'fail', `Found only ${foundTags.length}/${socialTags.length} social media tags`);
        }
      }
    } catch (error) {
      this.addResult('Social Media Tags', 'fail', 'Failed to test social media tags', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  private async testFavicons(): Promise<void> {
    try {
      const faviconPaths = [
        '/favicon.ico',
        '/favicon/favicon-16x16.png',
        '/favicon/favicon-32x32.png',
        '/favicon/apple-touch-icon.png'
      ];

      const faviconTests = await Promise.all(
        faviconPaths.map(async path => {
          try {
            const response = await fetch(`${this.baseUrl}${path}`);
            return response.ok;
          } catch {
            return false;
          }
        })
      );

      const availableFavicons = faviconTests.filter(Boolean).length;
      
      if (availableFavicons >= 3) {
        this.addResult('Favicons', 'pass', `${availableFavicons}/${faviconPaths.length} favicon files are accessible`);
      } else if (availableFavicons >= 1) {
        this.addResult('Favicons', 'warning', `${availableFavicons}/${faviconPaths.length} favicon files are accessible`);
      } else {
        this.addResult('Favicons', 'fail', 'No favicon files are accessible');
      }
    } catch (error) {
      this.addResult('Favicons', 'fail', 'Failed to test favicons', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  generateReport(): string {
    const passCount = this.results.filter(r => r.status === 'pass').length;
    const warnCount = this.results.filter(r => r.status === 'warning').length;
    const failCount = this.results.filter(r => r.status === 'fail').length;
    const total = this.results.length;

    let report = `# SEO Validation Report for ${this.baseUrl}\n\n`;
    report += `## Summary\n`;
    report += `- ✅ Passed: ${passCount}/${total}\n`;
    report += `- ⚠️  Warnings: ${warnCount}/${total}\n`;
    report += `- ❌ Failed: ${failCount}/${total}\n`;
    report += `- 📊 Score: ${Math.round((passCount / total) * 100)}%\n\n`;

    report += `## Detailed Results\n\n`;
    
    this.results.forEach(result => {
      const icon = result.status === 'pass' ? '✅' : result.status === 'warning' ? '⚠️' : '❌';
      report += `${icon} **${result.test}**: ${result.message}\n`;
      if (result.details) {
        report += `   Details: ${result.details}\n`;
      }
      report += '\n';
    });

    return report;
  }
}

// Usage example:
// const validator = new SEOValidator('https://your-domain.com');
// const results = await validator.runAllTests();
// console.log(validator.generateReport());