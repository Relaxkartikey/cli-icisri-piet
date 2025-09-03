import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { CallForPaperHero } from "@/sections/callforpaper/CallForPaperHero";
import { CallForPaperContent } from "@/sections/callforpaper/CallForPaperContent";

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
