"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { BreakingNews } from "../components/BreakingNews";

// Using direct public paths
const cogImagePath = "/assets/cog.png";
const cylinderImagePath = "/assets/cylinder.png";
const pic1 = "/assets/copics/conf1.JPG";
const pic2 = "/assets/copics/conf2.JPG";
const pic3 = "/assets/copics/conf3.JPG";
const pic4 = "/assets/copics/conf4.JPG";
const pic5 = "/assets/copics/conf5.JPG";
const pic6 = "/assets/copics/conf6.JPG";
const pic7 = "/assets/copics/conf7.JPG";
const pic8 = "/assets/copics/conf8.JPG";

// Carousel images - using ktlogo as requested
const carouselImages = [
  { src: pic1, alt: "Conference view 1" },
  { src: pic2, alt: "Conference view 2" },
  { src: pic3, alt: "Conference view 3" },
  { src: pic4, alt: "Conference view 4" },
  { src: pic5, alt: "Conference view 5" },
  { src: pic6, alt: "Conference view 6" },
  { src: pic7, alt: "Conference view 7" },
  { src: pic8, alt: "Conference view 8" },
];

export const Hero = () => {
  const heroRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const nextIndex = (prev + 1) % carouselImages.length;
        return nextIndex;
      });
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

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
    <>
      {/* Breaking News Banner */}
      <BreakingNews />
      
      <section
        ref={heroRef}
        className="min-h-[85vh] flex items-center overflow-x-clip relative"
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

      <div className="container pt-0 pb-8 sm:pt-2 sm:pb-12 md:pt-4 md:pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <motion.div 
            className="flex-1 text-left flex flex-col justify-center max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Conference Tag */}
            <motion.div 
              className="text-sm inline-block border border-[#001E80]/20 px-3 py-1 rounded-lg tracking-tight bg-[#001E80] text-white font-medium mb-4 shadow-sm w-fit"
              variants={itemVariants}
            >
              ICISRI 2026
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              className="text-[#010D3E] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight"
              variants={itemVariants}
            >
              2<sup>nd</sup> International Conference on
              <span className="block mt-1">Intelligent Systems using</span>
              <span className="block mt-1">Semiconductors for Robotics and IoT</span>
            </motion.h1>
            
            {/* Tagline */}
            <motion.div 
              className="mt-3 text-[#010D3E]/90 text-sm sm:text-base italic"
              variants={itemVariants}
            >
              &quot;Coming together is a beginning; keeping together is progress;
              working together is success.&quot;
            </motion.div>
            
            {/* Date and Register Section */}
            <motion.div 
              className="mt-5 flex flex-col sm:flex-row items-start gap-3"
              variants={itemVariants}
            >
              {/* Date Card */}
              <div className="bg-gradient-to-r from-white to-[#F8FAFF] rounded-xl shadow-[0_4px_12px_rgba(0,30,128,0.15)] border border-[#E1E7FF] py-3 px-5 flex items-center">
                <div className="text-[#001E80] font-semibold mr-2 text-sm">April 2026:</div>
                <div className="text-[#010D3E] text-sm">10th-11th (Thu & Fri)</div>
              </div>
              
              {/* Register Button */}
                <a
                href="/callforpaper"
                className="bg-gradient-to-r from-[#001E80] to-[#183EC2] text-white font-semibold px-6 py-3 rounded-xl hover:shadow-[0_6px_20px_rgba(0,30,128,0.3)] transition-all text-sm transform hover:-translate-y-0.5"
                >
                Register Now
                </a>
            </motion.div>
            
            {/* Small Notes Box */}
            <motion.div 
              className="mt-4"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-r from-white/80 to-[#F8FAFF]/80 backdrop-blur-sm rounded-xl p-4 text-xs leading-relaxed text-[#010D3E]/80 border border-[#E1E7FF]/50 shadow-[0_2px_8px_rgba(0,30,128,0.08)]">
                <span className="font-semibold text-[#001E80] mr-1">ICISRI 2026 Final Technical Session Schedule.</span>
                Registered papers will be published in CRC Press & UGC Care Listed Journal (IJTE)
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Carousel */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-96 h-72 lg:w-[440px] lg:h-80">
              {/* Main carousel container */}
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-white to-[#F5F6F9] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-[#F1F1F1] overflow-hidden">
                {/* Carousel images */}
                <div className="absolute inset-0 overflow-hidden">
                  <div 
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {carouselImages.map((image, index) => (
                      <div
                        key={index}
                        className="w-full h-full flex-shrink-0 relative"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 384px, 440px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white w-6 shadow-lg' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
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
      </div>
    </section>
    </>
  );
};
