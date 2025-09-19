import { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { CallForPaperHero } from "@/sections/callforpaper/CallForPaperHero";
import { CallForPaperContent } from "@/sections/callforpaper/CallForPaperContent";

export const metadata: Metadata = {
  title: "Call for Papers",
  description: "Submit your research papers to ICISRI 2026. We invite original research contributions in intelligent systems, semiconductors, robotics, IoT, AI, and related fields. View submission guidelines and important dates.",
  keywords: [
    "Call for Papers",
    "Paper Submission",
    "Research Papers",
    "ICISRI Submission",
    "Academic Papers",
    "Conference Submission",
    "Research Publication",
    "IEEE Papers"
  ],
};

export default function CallForPaperPage() {
  return (
    <div>
      <Header />
      <CallForPaperHero />
      <CallForPaperContent />
      <Footer />
    </div>
  );
}
