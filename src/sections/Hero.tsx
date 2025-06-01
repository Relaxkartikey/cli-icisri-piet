"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Using direct public paths
const cogImagePath = "/assets/cog.png";
const cylinderImagePath = "/assets/cylinder.png";
const ktlogoPath = "/assets/ktlogo.png";

export const Hero = () => {
  const heroRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const calendarVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.6
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
      className="min-h-screen flex items-center overflow-x-clip relative"
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
            ICISRI 2024
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-[#010D3E] text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-5xl leading-tight px-4"
            variants={itemVariants}
          >
            1<sup>st</sup> International Conference on
            <span className="block mt-1 md:mt-2">Intelligent Systems using</span>
            <span className="block mt-1 md:mt-2">Semiconductors for Robotics and IoT</span>
          </motion.h1>
          
          {/* Tagline */}
          <motion.div 
            className="mt-4 md:mt-6 max-w-3xl text-[#010D3E]/90 text-base sm:text-lg md:text-xl italic px-4"
            variants={itemVariants}
          >
            &quot;Coming together is a beginning; keeping together is progress;
            working together is success.&quot;
          </motion.div>
          
          {/* Date and Register Section */}
          <motion.div 
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-10 px-4"
            variants={itemVariants}
          >
            {/* Date Card */}
            <div className="bg-white rounded-xl shadow-[0_5px_10px_#EAEAEA] border border-[#F1F1F1] overflow-hidden py-2 px-4 sm:px-5 flex items-center">
              <div className="text-[#001E80] font-medium mr-2 text-sm sm:text-base">November 2024:</div>
              <div className="text-[#010D3E] text-sm sm:text-base">29-30 (Friday & Saturday)</div>
            </div>
            
            {/* Register Button */}
            <button className="bg-[#001E80] text-white font-medium px-5 py-2 rounded-lg hover:bg-[#001E80]/90 transition-all text-sm sm:text-base">
              Register Now
            </button>
          </motion.div>
          
          {/* Small Notes Box */}
          <motion.div 
            className="mt-6 md:mt-8 max-w-2xl text-center px-4"
            variants={itemVariants}
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-xs leading-relaxed text-[#010D3E]/70">
              <span className="font-medium text-[#010D3E] mr-2">ICISRI 2024 Final Technical Session Schedule.</span>
              Registered and presented papers will be published in the proceedings of ICISRI-2024 in CRC Press (Tylor & Fransis) & UGC Care Listed Journal (IJTE)
            </div>
          </motion.div>
          
          {/* Scroll indicator for full-height hero */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 text-[#001E80]/50 hidden md:block"
            initial={{ opacity: 0.5, y: -5 }}
            animate={{ 
              opacity: [0.5, 0.8, 0.5], 
              y: [-5, 0, -5] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
