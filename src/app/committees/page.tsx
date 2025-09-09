import { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { CommitteesHero } from "@/sections/committees/CommitteesHero";
import { CommitteesSection } from "@/sections/committees/CommitteesSection";

export const metadata: Metadata = {
  title: "Conference Committees",
  description: "Meet the organizing committee, advisory board, and review committee members of ICISRI 2025. Distinguished academics and industry experts leading the conference organization.",
  keywords: [
    "Conference Committee",
    "Organizing Committee",
    "Advisory Board",
    "Review Committee",
    "ICISRI Committee",
    "Conference Organizers",
    "Academic Committee"
  ],
};

export default function CommitteesPage() {
  return (
    <div>
      <Header />
      <CommitteesHero />
      <CommitteesSection />
      <Footer />
    </div>
  );
}
