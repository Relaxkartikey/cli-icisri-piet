"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

// Using direct public path
const ieeeLogoPath = "/assets/pics/ieee.png";
const acmLogoPath = "/assets/pics/acm.png";
const isteLogoPath = "/assets/pics/iste.png";
const crc = "/assets/pics/crc.png";
const taru = "/assets/pics/taru.png";
const idea = "/assets/pics/idea.png";

type PartnerType = "technical" | "publication" | "organizing";

interface Partner {
  id: string;
  name: string;
  bio: string;
  logo: string;
  type: PartnerType;
}

const partners: Partner[] = [
  // Technical Partners
  {
    id: "tech-1",
    name: "ISTE",
    bio: "Indian Society for Technical Education - Promoting technical education in India through quality programs.",
    logo: isteLogoPath,
    type: "technical",
  },
  {
    id: "tech-2",
    name: "IEEE",
    bio: "Institute of Electrical and Electronics Engineers - World's largest technical professional organization dedicated to advancing technology.",
    logo: ieeeLogoPath,
    type: "technical",
  },
  {
    id: "tech-3",
    name: "ACM",
    bio: "Association for Computing Machinery - International learned society for computing professionals and researchers.",
    logo: acmLogoPath,
    type: "technical",
  },
  
  // Publication Partners
  {
    id: "pub-1",
    name: "Taru Publication",
    bio: "Leading publisher of academic research papers and technical journals.",
    logo: taru,
    type: "publication",
  },
  {
    id: "pub-2",
    name: "CRC Publication",
    bio: "Premier publisher of technical and scientific resources with global reach.",
    logo: crc,
    type: "publication",
  },
  {
    id: "pub-3",
    name: "IJTE-ISTE Publication",
    bio: "International Journal of Technical Education specializing in educational technology research.",
    logo: isteLogoPath,
    type: "publication",
  },
  
  // Organizing Partners
  {
    id: "org-1",
    name: "IDEA LAB Piet",
    bio: "Innovation, Design, Engineering, and Art Laboratory at Poornima Institute of Engineering & Technology.",
    logo: idea,
    type: "organizing",
  }
];

export const PartnersSection = () => {
  const [activeTab, setActiveTab] = useState<PartnerType>("technical");
  
  const tabVariants = {
    inactive: { opacity: 0.6, y: 0 },
    active: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const filteredPartners = partners.filter(partner => partner.type === activeTab);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#EAEDF2]">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Partnerships</div>
          </div>
          
          <h2 className="section-title mt-5">Our Partners</h2>
          <p className="section-des mt-5">
            ICISRI-2025 is proudly supported by leading academic and industry partners dedicated to advancing technology research and innovation.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex rounded-xl bg-[#F1F1F1] p-1.5">
            <motion.button
              className={twMerge(
                "px-4 py-2 text-sm font-medium rounded-lg",
                activeTab === "technical" ? "bg-white shadow-sm" : "text-[#010D3E]/70"
              )}
              onClick={() => setActiveTab("technical")}
              variants={tabVariants}
              animate={activeTab === "technical" ? "active" : "inactive"}
              whileHover={{ opacity: activeTab === "technical" ? 1 : 0.8 }}
            >
              Technical Partners
            </motion.button>
            <motion.button
              className={twMerge(
                "px-4 py-2 text-sm font-medium rounded-lg",
                activeTab === "publication" ? "bg-white shadow-sm" : "text-[#010D3E]/70"
              )}
              onClick={() => setActiveTab("publication")}
              variants={tabVariants}
              animate={activeTab === "publication" ? "active" : "inactive"}
              whileHover={{ opacity: activeTab === "publication" ? 1 : 0.8 }}
            >
              Publication Partners
            </motion.button>
            <motion.button
              className={twMerge(
                "px-4 py-2 text-sm font-medium rounded-lg",
                activeTab === "organizing" ? "bg-white shadow-sm" : "text-[#010D3E]/70"
              )}
              onClick={() => setActiveTab("organizing")}
              variants={tabVariants}
              animate={activeTab === "organizing" ? "active" : "inactive"}
              whileHover={{ opacity: activeTab === "organizing" ? 1 : 0.8 }}
            >
              Organizing Partners
            </motion.button>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="mt-16 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-wrap justify-center gap-8 w-full mx-auto"
            >
              {filteredPartners.map((partner) => (
                <motion.div
                  key={partner.id}
                  variants={itemVariants}
                  className="card p-0 overflow-hidden rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] bg-white transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-2 w-full md:w-[calc(50%-16px)] lg:w-[calc(30%-24px)]"
                >
                  <div className="flex flex-col h-full">                    <div className="w-36 h-36 mx-auto mt-10 rounded-xl overflow-hidden">
                      <Image 
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={144}
                        height={144}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 text-center flex-grow flex flex-col">
                      <h3 className="font-semibold text-xl tracking-tight text-[#010D3E] mb-3">
                        {partner.name}
                      </h3>
                      <p className="text-base text-[#010D3E]/70 flex-grow">
                        {partner.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};