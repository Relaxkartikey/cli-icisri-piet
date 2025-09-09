import { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ContactHero } from "@/sections/contact/ContactHero";
import { ContactInfoSection } from "@/sections/contact/ContactInfoSection";
import { MapSection } from "@/sections/contact/MapSection";
import { FAQSection } from "@/sections/contact/FAQSection";
import { SocialMediaSection } from "@/sections/contact/SocialMediaSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ICISRI 2025 organizers. Find contact information, location details, FAQs, and connect with us for conference inquiries, paper submissions, and registration support.",
  keywords: [
    "Contact ICISRI",
    "Conference Contact",
    "PIET Contact",
    "Conference Inquiry",
    "Registration Support",
    "Paper Submission Help",
    "Conference Location",
    "Jaipur Conference"
  ],
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactInfoSection />
      <MapSection />
      <FAQSection />
      <SocialMediaSection />
      <Footer />
    </>
  );
}
