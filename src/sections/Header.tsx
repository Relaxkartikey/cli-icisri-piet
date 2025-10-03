"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Using direct public paths
const arrowRightPath = "/assets/arrow-right.svg";
const logoPath = "/assets/pics/logo-ici.png";
const menuPath = "/assets/menu.svg";

interface HeaderProps {
  onApplyClick?: () => void;
}

export const Header = ({ onApplyClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isArchiveDropdownOpen, setIsArchiveDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePage = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const getLinkClassName = (path: string) => {
    const isActive = isActivePage(path);
    return `relative hover:text-white transition-all duration-300 ${
      isActive ? 'text-white' : 'text-white/90'
    } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`;
  };

  const getMobileLinkClassName = (path: string) => {
    const isActive = isActivePage(path);
    return `relative hover:text-white transition-all duration-300 py-1.5 text-sm ${
      isActive ? 'text-white' : 'text-white/90'
    } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`;
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-[#001E80]/95 border-b border-white/10">
      <div className="pt-3 pb-3 my-0">
        <div className="container">
          <div className="flex items-center justify-between">
              <a href="/" className="bg-white text-[#001E80] px-3 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-white/90 transition-colors" style={{ minWidth: 140, minHeight: 45 }}>
                <Image src={logoPath} alt="logo" height={45} width={140} style={{ objectFit: 'contain' }} />
              </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="h-8 w-8 lg:hidden flex items-center justify-center hover:bg-white/10 rounded transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Image src={menuPath} alt="Menu" height={20} width={20} className="h-5 w-5 filter invert" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-4 text-white/90 items-center text-sm">
              <a href="/" className={getLinkClassName("/")}>Home</a>
              <a href="/about" className={getLinkClassName("/about")}>About</a>
              <a href="/committees" className={getLinkClassName("/committees")}>Committees</a>
              <a href="/callforpaper" className={getLinkClassName("/callforpaper")}>Call for Paper</a>
              <a href="/speakers" className={getLinkClassName("/speakers")}>Speakers</a>
              <a href="/partners" className={getLinkClassName("/partners")}>Partners</a>
              <a href="/registration" className={getLinkClassName("/registration")}>Registration</a>
              
              {/* Archive Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsArchiveDropdownOpen(true)}
                onMouseLeave={() => setIsArchiveDropdownOpen(false)}
              >
                <button className="relative hover:text-white transition-all duration-300 text-white/90 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:w-0 hover:after:w-full flex items-center gap-1 py-2">
                  Archive
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isArchiveDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {isArchiveDropdownOpen && (
                  <div className="absolute top-full left-0 pt-0 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <a 
                      href="https://www.icisri.poornima.org/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#F8FAFF] hover:text-[#001E80] transition-colors text-sm"
                    >
                      ICISRI 2025
                    </a>
                    <a 
                      href="/"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#F8FAFF] hover:text-[#001E80] transition-colors text-sm"
                    >
                      ICISRI 2026
                    </a>
                  </div>
                )}
              </div>
              
              <a href="/contact" className={getLinkClassName("/contact")}>Contact</a>
              <button 
                onClick={onApplyClick}
                className="bg-white text-[#001E80] px-3 py-1.5 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-white/90 transition-colors text-sm"
              >
                Apply Now
                <Image src={arrowRightPath} alt="Arrow right" width={14} height={14} className="h-3.5 w-3.5 ml-1.5" />
              </button>
            </nav>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-3 pb-3 border-t border-white/10">
              <nav className="flex flex-col gap-3 pt-3">
                <a 
                  href="/" 
                  className={getMobileLinkClassName("/")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className={getMobileLinkClassName("/about")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="/committees" 
                  className={getMobileLinkClassName("/committees")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Committees
                </a>
                <a 
                  href="/callforpaper" 
                  className={getMobileLinkClassName("/callforpaper")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Call for Paper
                </a>
                <a 
                  href="/speakers" 
                  className={getMobileLinkClassName("/speakers")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Speakers
                </a>
                <a 
                  href="/partners" 
                  className={getMobileLinkClassName("/partners")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Partners
                </a>
                <a 
                  href="/registration" 
                  className={getMobileLinkClassName("/registration")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Registration
                </a>
                <a 
                  href="/contact" 
                  className={getMobileLinkClassName("/contact")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                
                {/* Archive Section for Mobile */}
                <div className="border-t border-white/20 pt-3 mt-3">
                  <div className="text-white/70 text-xs font-medium mb-2 px-2">Archive</div>
                  <a 
                    href="https://www.icisri.poornima.org/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors py-1.5 text-sm block pl-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ICISRI 2025
                  </a>
                  <a 
                    href="/"
                    className="text-white/90 hover:text-white transition-colors py-1.5 text-sm block pl-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ICISRI 2026
                  </a>
                </div>
                
                <button 
                  onClick={() => {
                    onApplyClick?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-white text-[#001E80] px-3 py-1.5 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-white/90 transition-colors mt-1.5 w-fit text-sm"
                >
                  Apply Now
                  <Image src={arrowRightPath} alt="Arrow right" width={14} height={14} className="h-3.5 w-3.5 ml-1.5" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
