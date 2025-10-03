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
      <div className="pt-4 pb-4 my-0">
        <div className="container">
          <div className="flex items-center justify-between">
              <a href="/" className="bg-white text-[#001E80] px-4 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-white/90 transition-colors" style={{ minWidth: 180, minHeight: 60 }}>
                <Image src={logoPath} alt="logo" height={60} width={180} style={{ objectFit: 'contain' }} />
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
            <nav className="hidden lg:flex gap-6 text-white/90 items-center">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/committees" className="hover:text-white transition-colors">Committees</a>
              <a href="/callforpaper" className="hover:text-white transition-colors">Call for Paper</a>
              <a href="/speakers" className="hover:text-white transition-colors">Speakers</a>
              <a href="/partners" className="hover:text-white transition-colors">Partners</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <button 
                onClick={onApplyClick}
                className="bg-white text-[#001E80] px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-white/90 transition-colors"
              >
                Apply Now
                <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2" />
              </button>
            </nav>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
              <nav className="flex flex-col gap-4 pt-4">
                <a 
                  href="/" 
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="/committees" 
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Committees
                </a>
                <a 
                  href="/callforpaper" 
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Call for Paper
                </a>
                <a 
                  href="/speakers" 
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Speakers
                </a>
                <a 
                  href="/partners" 
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Partners
                </a>
                <a 
                  href="/contact" 
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <button 
                  onClick={() => {
                    onApplyClick?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-white text-[#001E80] px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-white/90 transition-colors mt-2 w-fit"
                >
                  Apply Now
                  <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
