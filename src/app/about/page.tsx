import { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { AboutHero } from "@/sections/about/AboutHero";
import { AboutIntro } from "@/sections/about/AboutIntro";
import { AboutPIET } from "@/sections/about/AboutPIET";
import { AboutIoTDepartment } from "@/sections/about/AboutIoTDepartment";

export const metadata: Metadata = {
  title: "About ICISRI 2025 & PIET",
  description: "Learn about ICISRI 2025 conference, Poornima Institute of Engineering and Technology (PIET), and the IoT Department. Discover our mission, vision, and commitment to innovation in intelligent systems and IoT research.",
  keywords: [
    "About ICISRI",
    "PIET Jaipur",
    "IoT Department",
    "Engineering College",
    "Research Institute",
    "Intelligent Systems",
    "Semiconductor Research"
  ],
};

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
