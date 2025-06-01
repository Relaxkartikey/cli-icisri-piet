"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Using direct public paths
const arrowRightPath = "/assets/arrow-right.svg";
const ktlogoPath = "/assets/ktlogo.png";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "With 15+ years of experience in SaaS leadership, Sarah drives our vision and strategy.",
    image: ktlogoPath
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Michael leads our engineering team with expertise in scalable architecture.",
    image: ktlogoPath
  },
  {
    id: 3,
    name: "Alicia Rodriguez",
    role: "Head of Product Design",
    bio: "Alicia brings user-centered design principles to every aspect of our product.",
    image: ktlogoPath
  },
  {
    id: 4,
    name: "David Okafor",
    role: "VP of Customer Success",
    bio: "David ensures our customers achieve their goals through strategic implementation.",
    image: ktlogoPath
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Marketing Director",
    bio: "Emma crafts our brand narrative and drives growth strategies across markets.",
    image: ktlogoPath
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Head of Engineering",
    bio: "James oversees our technical infrastructure and ensures robust solutions.",
    image: ktlogoPath
  },
  {
    id: 7,
    name: "Sophia Kim",
    role: "Head of Data Analytics",
    bio: "Sophia drives insights from our data to enhance product features and UX.",
    image: ktlogoPath
  },
  {
    id: 8,
    name: "Carlos Martinez",
    role: "Research Director",
    bio: "Carlos leads our research initiatives to identify new opportunities.",
    image: ktlogoPath
  }
];

export const TeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Our People</div>
          </div>
          
          <h2 className="section-title mt-5">Behind the Team</h2>
          <p className="section-des mt-5">
            Meet the talented individuals who drive our mission forward and make innovation possible.
          </p>
        </div>
        
        {/* Team grid with fixed height for exactly 2 rows and scrolling */}
        <div className="mt-16 px-4 max-w-7xl mx-auto relative">
          <div 
            ref={containerRef}
            className="h-[430px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#E6ECFF] scrollbar-track-transparent pr-4 pb-2 mask-bottom"
            style={{
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="rounded-xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] bg-white overflow-hidden flex flex-col md:flex-row h-[110px]"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                >                  <div className="md:w-[110px] flex-shrink-0 p-2 flex items-center justify-center">
                    <div className="aspect-square w-[85px] h-[85px] overflow-hidden rounded-lg border border-[#F1F1F1] shadow-sm relative">                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <div className="py-2 px-3 md:p-3 flex flex-col justify-center flex-grow">
                    <h3 className="font-medium text-sm tracking-tight text-[#010D3E] truncate">{member.name}</h3>
                    <p className="text-xs text-[#001E80] font-medium mt-0.5 truncate">{member.role}</p>
                    <p className="text-xs text-[#010D3E]/70 mt-1 line-clamp-2">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Subtle scroll indicator */}
          <div className="absolute bottom-0 left-0 right-4 h-8 pointer-events-none flex justify-center">
            <motion.div
              initial={{ opacity: 0.5, y: -5 }}
              animate={{ opacity: [0.5, 0.8, 0.5], y: [-5, 0, -5] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
              className="w-8 h-8 text-[#010D3E]/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
              </svg>
            </motion.div>
          </div>
        </div>
        
        {/* Button */}
        <div className="flex justify-center mt-10">          <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
            Read more about committee
            <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};