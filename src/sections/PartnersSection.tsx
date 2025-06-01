"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

// Using direct public path
const ktlogoPath = "/assets/ktlogo.png";

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
    name: "Acme Tech",
    bio: "Providing cutting-edge technology solutions for complex business challenges.",
    logo: "/assets/ktlogo.png",
    type: "technical",
  },
  {
    id: "tech-2",
    name: "Quantum Systems",
    bio: "Specialized in AI-driven solutions for data analysis and automation.",
    logo: "/assets/ktlogo.png",
    type: "technical",
  },
  {
    id: "tech-3",
    name: "ByteForge",
    bio: "Leaders in software development and cloud infrastructure services.",
    logo: "/assets/ktlogo.png",
    type: "technical",
  },
  {
    id: "tech-4",
    name: "Nexus Labs",
    bio: "Pioneering research in quantum computing and machine learning applications.",
    logo: "/assets/ktlogo.png",
    type: "technical",
  },
  
  // Publication Partners
  {
    id: "pub-1",
    name: "Insight Journal",
    bio: "Premier publication for technology trends and digital transformation insights.",
    logo: "/assets/ktlogo.png",
    type: "publication",
  },
  {
    id: "pub-2",
    name: "Tech Chronicle",
    bio: "Delivering daily updates on the latest advancements in the tech industry.",
    logo: "/assets/ktlogo.png",
    type: "publication",
  },
  {
    id: "pub-3",
    name: "Digital Frontier",
    bio: "Exploring the bleeding edge of technology and its impact on society.",
    logo: "/assets/ktlogo.png",
    type: "publication",
  },
  {
    id: "pub-4",
    name: "InnovateNow",
    bio: "Publication focused on startups, innovation, and entrepreneurship.",
    logo: "/assets/ktlogo.png",
    type: "publication",
  },
  
  // Organizing Partners
  {
    id: "org-1",
    name: "EventHorizon",
    bio: "Specialized in organizing technology conferences and networking events.",
    logo: "/assets/ktlogo.png",
    type: "organizing",
  },
  {
    id: "org-2",
    name: "Catalyst Group",
    bio: "Facilitating strategic partnerships between startups and established enterprises.",
    logo: "/assets/ktlogo.png",
    type: "organizing",
  },
  {
    id: "org-3",
    name: "Summit Partners",
    bio: "Creating immersive learning experiences through workshops and seminars.",
    logo: "/assets/ktlogo.png",
    type: "organizing",
  },
  {
    id: "org-4",
    name: "Nexus Connect",
    bio: "Building bridges between academia, industry, and government sectors.",
    logo: "/assets/ktlogo.png",
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
            <div className="tag">Collaboration</div>
          </div>
          
          <h2 className="section-title mt-5">Partners & Collaborators</h2>
          <p className="section-des mt-5">
            We work with leading organizations to deliver exceptional value and innovative solutions.
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            >
              {filteredPartners.map((partner) => (
                <motion.div
                  key={partner.id}
                  variants={itemVariants}
                  className="card p-0 overflow-hidden rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] bg-white transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-2"
                >
                  <div className="flex flex-col h-full">                    <div className="w-32 h-32 mx-auto mt-8 rounded-xl overflow-hidden">
                      <Image 
                        src={ktlogoPath}
                        alt={`${partner.name} logo`}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-center flex-grow flex flex-col">
                      <h3 className="font-medium text-lg tracking-tight text-[#010D3E] mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-[#010D3E]/70 flex-grow">
                        {partner.bio}
                      </p>
                      <motion.div 
                        className="mt-4 text-sm font-medium text-[#001E80] flex items-center justify-center"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ 
                          opacity: 1,
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        View Details
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
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