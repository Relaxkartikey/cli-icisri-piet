import { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { PartnersHero } from "@/sections/partners/PartnersHero";
import { TechnicalPartnersSection } from "@/sections/partners/TechnicalPartnersSection";
import { PublicationPartnersSection } from "@/sections/partners/PublicationPartnersSection";
import { OrganizingPartnersSection } from "@/sections/partners/OrganizingPartnersSection";

export const metadata: Metadata = {
  title: "Conference Partners",
  description: "Discover our esteemed partners supporting ICISRI 2025. Meet our technical partners, publication partners, and organizing partners who make this international conference possible.",
  keywords: [
    "Conference Partners",
    "Technical Partners",
    "Publication Partners",
    "Organizing Partners",
    "ICISRI Partners",
    "IEEE Partners",
    "Industry Partners",
    "Academic Partners"
  ],
};

export default function PartnersPage() {
  return (
    <>
      <Header />
      <PartnersHero />
      <TechnicalPartnersSection />
      <PublicationPartnersSection />
      <OrganizingPartnersSection />
      <Footer />
    </>
  );
}
