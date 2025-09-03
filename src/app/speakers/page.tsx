import { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SpeakersHero } from "@/sections/speakers/SpeakersHero";
import { SpeakersSection } from "@/sections/speakers/SpeakersSection";

export const metadata: Metadata = {
  title: "Keynote Speakers",
  description: "Meet the distinguished keynote speakers at ICISRI 2024. Leading experts in intelligent systems, semiconductors, robotics, and IoT will share their insights and research.",
  keywords: [
    "Keynote Speakers",
    "ICISRI Speakers",
    "Conference Speakers",
    "IoT Experts",
    "Robotics Experts",
    "Semiconductor Experts",
    "AI Researchers"
  ],
};

export default function SpeakersPage() {
  return (
    <div>
      <Header />
      <SpeakersHero />
      <SpeakersSection />
      <Footer />
    </div>
  );
}
