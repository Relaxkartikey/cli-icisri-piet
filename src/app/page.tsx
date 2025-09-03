"use client";
import { useState, useEffect } from "react";
import { BentoGridSection } from "@/sections/BentoGridSection";
import { CallToAction } from "@/sections/CallToAction";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { IntroductionSection } from "@/sections/IntroductionSection";
import { PartnersSection } from "@/sections/PartnersSection";
import { TeamSection } from "@/sections/TeamSection";
import { SubmitPaperPopup } from "@/components/SubmitPaperPopup";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Auto-open popup after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <div>
      <Header onApplyClick={handleOpenPopup} />
      <Hero />
      <IntroductionSection />
      <BentoGridSection />
      <PartnersSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <SubmitPaperPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}
