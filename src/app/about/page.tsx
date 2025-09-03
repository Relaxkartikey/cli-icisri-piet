import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { AboutHero } from "@/sections/about/AboutHero";
import { AboutIntro } from "@/sections/about/AboutIntro";
import { AboutPIET } from "@/sections/about/AboutPIET";
import { AboutIoTDepartment } from "@/sections/about/AboutIoTDepartment";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <AboutHero />
      <AboutIntro />
      <AboutPIET />
      <AboutIoTDepartment />
      <Footer />
    </div>
  );
}
