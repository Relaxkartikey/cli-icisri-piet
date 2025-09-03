import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { CommitteesHero } from "@/sections/committees/CommitteesHero";
import { CommitteesSection } from "@/sections/committees/CommitteesSection";

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
