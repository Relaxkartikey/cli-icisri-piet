import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SpeakersHero } from "@/sections/speakers/SpeakersHero";
import { SpeakersSection } from "@/sections/speakers/SpeakersSection";

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
