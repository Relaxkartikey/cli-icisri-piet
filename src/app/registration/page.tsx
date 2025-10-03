import { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { RegistrationHero } from "@/sections/registration/RegistrationHero";
import { RegistrationContent } from "@/sections/registration/RegistrationContent";
import { RegistrationFees } from "@/sections/registration/RegistrationFees";
import { AccountDetails } from "@/sections/registration/AccountDetails";

export const metadata: Metadata = {
  title: "Registration",
  description: "Register for ICISRI 2026 conference. View registration fees, payment details, and submission guidelines. All registered and presented papers will be published in conference proceedings.",
  keywords: [
    "ICISRI Registration",
    "Conference Registration",
    "Registration Fees",
    "Paper Registration",
    "Conference Payment",
    "ICISRI 2026 Registration",
    "Academic Conference Registration",
    "Research Paper Registration"
  ],
};

export default function RegistrationPage() {
  return (
    <div>
      <Header />
      <RegistrationHero />
      <RegistrationContent />
      <RegistrationFees />
      <AccountDetails />
      <Footer />
    </div>
  );
}
