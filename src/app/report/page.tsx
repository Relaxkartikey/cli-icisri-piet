import { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ReportHero } from "@/sections/report/ReportHero";
import { ReportCategoriesSection } from "@/sections/report/ReportCategoriesSection";
import { ReportFormSection } from "@/sections/report/ReportFormSection";
import { GuidelinesSection } from "@/sections/report/GuidelinesSection";

export const metadata: Metadata = {
  title: "Conference Reports & Publications",
  description: "Access conference reports, research publications, and proceedings from ICISRI 2024. Submit your reports and explore published research in intelligent systems, semiconductors, robotics, and IoT.",
  keywords: [
    "Conference Reports",
    "Research Publications",
    "Conference Proceedings",
    "ICISRI Reports",
    "Academic Publications",
    "Research Papers",
    "Conference Documentation"
  ],
};

export default function ReportPage() {
  return (
    <>
      <Header />
      <ReportHero />
      <ReportCategoriesSection />
      <ReportFormSection />
      <GuidelinesSection />
      <Footer />
    </>
  );
}
