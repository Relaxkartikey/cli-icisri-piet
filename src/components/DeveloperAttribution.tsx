import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface DeveloperAttributionProps {
  className?: string;
  variant?: 'footer' | 'inline' | 'card';
}

export function DeveloperAttribution({ className = '', variant = 'footer' }: DeveloperAttributionProps) {
  const baseClasses = "developer-attribution";
  
  const variantClasses = {
    footer: "text-center py-4 border-t border-gray-200 bg-gray-50",
    inline: "inline-flex items-center gap-2 text-sm",
    card: "bg-white rounded-lg p-4 shadow-sm border"
  };

  const textClasses = {
    footer: "text-sm text-gray-600",
    inline: "text-gray-500",
    card: "text-gray-700"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span className={textClasses[variant]}>
          Developed with ❤️ by
        </span>
        <a
          href="https://github.com/relaxkartikey"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#001E80] hover:text-blue-700 transition-colors duration-200"
          title="Visit RelaxKartikey's GitHub Profile"
        >
          RelaxKartikey (Kartikey Sharma)
        </a>
        
        {variant !== 'inline' && (
          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://github.com/relaxkartikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#001E80] transition-colors duration-200"
              title="GitHub"
              aria-label="Visit RelaxKartikey's GitHub Profile"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/relaxkartikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#001E80] transition-colors duration-200"
              title="LinkedIn"
              aria-label="Visit RelaxKartikey's LinkedIn Profile"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://twitter.com/relaxkartikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#001E80] transition-colors duration-200"
              title="Twitter"
              aria-label="Follow RelaxKartikey on Twitter"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        )}
      </div>
      
      {variant === 'card' && (
        <div className="mt-2 text-xs text-gray-500 text-center">
          Full-stack developer specializing in modern web technologies
        </div>
      )}
    </div>
  );
}

// SEO-optimized developer credit component for search engines
export function DeveloperSEOCredit() {
  return (
    <div className="hidden" itemScope itemType="https://schema.org/Person">
      <meta itemProp="name" content="RelaxKartikey" />
      <meta itemProp="alternateName" content="Kartikey Sharma" />
      <meta itemProp="alternateName" content="Relax Kartikey" />
      <meta itemProp="url" content="https://github.com/relaxkartikey" />
      <meta itemProp="sameAs" content="https://github.com/relaxkartikey" />
      <meta itemProp="sameAs" content="https://github.com/Relaxkartikey" />
      <meta itemProp="sameAs" content="https://linkedin.com/in/relaxkartikey" />
      <meta itemProp="sameAs" content="https://twitter.com/relaxkartikey" />
      <meta itemProp="jobTitle" content="Web Developer" />
      <meta itemProp="description" content="Full-stack web developer and creator of ICISRI 2026 conference website" />
      <meta itemProp="knowsAbout" content="Web Development" />
      <meta itemProp="knowsAbout" content="React.js" />
      <meta itemProp="knowsAbout" content="Next.js" />
      <meta itemProp="knowsAbout" content="TypeScript" />
      <span itemProp="name">RelaxKartikey (Kartikey Sharma)</span>
      <span itemProp="description">
        Developer of ICISRI 2026 conference website. Specializes in modern web development 
        using React, Next.js, and TypeScript.
      </span>
    </div>
  );
}