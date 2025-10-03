"use client";
import { useState } from "react";
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/committees" className="hover:text-white transition-colors">Committees</a>
              <a href="/callforpaper" className="hover:text-white transition-colors">Call for Paper</a>
              <a href="/speakers" className="hover:text-white transition-colors">Speakers</a>
              <a href="/partners" className="hover:text-white transition-colors">Partners</a>
              <a href="/registration" className="hover:text-white transition-colors">Registration</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
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
                  className="text-white/90 hover:text-white transition-colors py-1.5 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="text-white/90 hover:text-white transition-colors py-1.5 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="/committees" 
                  className="text-white/90 hover:text-white transition-colors py-1.5 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Committees
                </a>
                <a 
                  href="/callforpaper" 
                  className="text-white/90 hover:text-white transition-colors py-1.5 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Call for Paper
                </a>
                <a 
                  href="/speakers" 
                  className="text-white/90 hover:text-white transition-colors py-1.5 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Speakers
                </a>
                <a 
                  href="/partners" 
                  className="text-white/90 hover:text-white transition-colors py-1.5 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Partners
                </a>
                <a 
                  href="/registration" 
                  className="text-white/90 hover:text-white transition-colors py-1.5 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Registration
                </a>
                <a 
                  href="/contact" 
                  className="text-white/90 hover:text-white transition-colors py-1.5 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
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
