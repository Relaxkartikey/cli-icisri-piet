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
    name: "Mr. Hari Singh Shekhawat",
    role: "Director (Infrastructure)",
    bio: "Poornima Group, Jaipur, India",
    image: ktlogoPath
  },
  {
    id: 2,
    name: "Mr. MKM Shah",
    role: "Director (Admin & Finance)",
    bio: "Poornima Group, Jaipur, India",
    image: ktlogoPath
  },
  {
    id: 3,
    name: "Prof.(Dr.) CARLOS M, TRAVIESO-GONZALEZ",
    role: "General Chair",
    bio: "Department of Signals & Communication (IDeTIC), University of Las Palmas de Gran Canaria, Las Palmas",
    image: ktlogoPath
  },
  {
    id: 4,
    name: "Prof.(Dr.) Dinesh Goyal",
    role: "Conference Chair",
    bio: "Principal & Director, PIET, Jaipur, India",
    image: ktlogoPath
  },
  {
    id: 5,
    name: "Prof.(Dr.) Payal Bansal",
    role: "ORGANIZING Chair",
    bio: "IOT DEPARTMENT, PIET, Jaipur, India",
    image: ktlogoPath
  },
  {
    id: 6,
    name: "Prof.(Dr) RITAM DUTTA",
    role: "Convener",
    bio: "IOT DEPARTMENT, PIET, Jaipur, India",
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
            <div className="tag">Conference Leadership</div>
          </div>
          
          <h2 className="section-title mt-5">Committee</h2>
          <p className="section-des mt-5">
            Meet the distinguished leaders and organizers who are driving ICISRI-2025 forward.
          </p>
        </div>
        
        {/* Team grid with fixed height for exactly 2 rows and scrolling */}
        <div className="mt-16 px-4 max-w-7xl mx-auto relative">
          <div 
            ref={containerRef}
            className="h-auto overflow-visible pr-4 pb-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="rounded-xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] bg-white overflow-hidden flex flex-col h-auto min-h-[140px] p-6"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                >
                  <div className="flex flex-col justify-center flex-grow">
                    <h3 className="font-semibold text-base tracking-tight text-[#010D3E] leading-tight mb-2">{member.name}</h3>
                    <p className="text-sm text-[#001E80] font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-[#010D3E]/70 leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Button */}
        <div className="flex justify-center mt-10">
          <a href="/committees">
            <button className="bg-[#001E80] text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-[#001E80]/90 transition-colors">
              View Full Committee
              <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2 filter invert" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};