"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Using direct public paths instead of imports
const acmeLogo = "/assets/logo-acme.png";
const quantamLogo = "/assets/logo-quantum.png";
const echoLogo = "/assets/logo-echo.png";
const celestialLogo = "/assets/logo-celestial.png";
const pulseLogo = "/assets/logo-pulse.png";
const apexLogo = "/assets/logo-apex.png";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div
          className="flex overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)" }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acmeLogo} alt="Acme logo" className="logo-ticker-image" />
            <Image src={quantamLogo} alt="quantam logo" className="logo-ticker-image" />
            <Image src={echoLogo} alt="Echo logo" className="logo-ticker-image" />
            <Image src={celestialLogo} alt="celestial logo" className="logo-ticker-image" />
            <Image src={pulseLogo} alt="Pulse logo" className="logo-ticker-image" />
            <Image src={apexLogo} alt="Apex logo" className="logo-ticker-image" />

            <Image src={acmeLogo} alt="Acme logo" className="logo-ticker-image" />
            <Image src={quantamLogo} alt="quantam logo" className="logo-ticker-image" />
            <Image src={echoLogo} alt="Echo logo" className="logo-ticker-image" />
            <Image src={celestialLogo} alt="celestial logo" className="logo-ticker-image" />
            <Image src={pulseLogo} alt="Pulse logo" className="logo-ticker-image" />
            <Image src={apexLogo} alt="Apex logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
