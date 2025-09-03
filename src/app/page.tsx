import { BentoGridSection } from "@/sections/BentoGridSection";
import { CallToAction } from "@/sections/CallToAction";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { IntroductionSection } from "@/sections/IntroductionSection";
import { PartnersSection } from "@/sections/PartnersSection";
import { TeamSection } from "@/sections/TeamSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <IntroductionSection />
      <BentoGridSection />
      <PartnersSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
