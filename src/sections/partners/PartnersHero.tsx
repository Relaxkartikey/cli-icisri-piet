"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Using direct public paths following the existing pattern
const cylinderImagePath = "/assets/cylinder.png";
const cogImagePath = "/assets/cog.png";

export const PartnersHero = () => {
  const heroRef = useRef(null);

  // Animation variants following existing patterns
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatingObjectVariants = {
    float: {
      y: [0, -15, 0],
      x: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-[60vh] flex items-center overflow-x-clip relative"
      style={{ 
        background: "linear-gradient(180deg, white 0%, #F5F6F9 50%, #EAEDF2 100%)",
      }}
    >
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute -left-10 top-1/3 opacity-50 hidden md:block" 
        variants={floatingObjectVariants}
        animate="float"
      >
        <Image 
          src={cylinderImagePath} 
          alt="Decorative cylinder" 
          width={120} 
          height={120}
        />
      </motion.div>

      <motion.div 
        className="absolute right-10 bottom-1/4 opacity-40 hidden md:block" 
        variants={floatingObjectVariants}
        animate="float"
        style={{ animationDelay: "-1.5s" }}
      >
        <Image 
          src={cogImagePath} 
          alt="Decorative cog" 
          width={150} 
          height={150}
        />
      </motion.div>

      <div className="container py-16 sm:py-20 md:py-24">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Conference Tag */}
          <motion.div 
            className="px-4 py-1.5 bg-[#001E80] text-white text-sm rounded-full mb-4 md:mb-6"
            variants={itemVariants}
          >
            Partnerships
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-[#010D3E] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-5xl leading-tight px-4"
            variants={itemVariants}
          >
            Our <span className="text-[#001E80]">Partners</span>
          </motion.h1>
          
          {/* Description */}
          <motion.div 
            className="mt-4 md:mt-6 max-w-4xl text-[#010D3E]/80 text-lg sm:text-xl md:text-2xl font-medium px-4 text-center"
            variants={itemVariants}
          >
            ICISRI-2024 is proudly supported by leading academic institutions, professional organizations, 
            and industry partners who share our commitment to advancing technology research and innovation.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
