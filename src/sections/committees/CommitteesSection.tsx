"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Using direct public paths
const arrowRightPath = "/assets/arrow-right.svg";

// Committee data organized by sections
const committeeData = {
  patrons: [
    {
      id: 1,
      name: "Mr. Hari Singh Shekhawat",
      role: "Director (Infrastructure)",
      organization: "Poornima Group, Jaipur, India"
    },
    {
      id: 2,
      name: "Mr. MKM Shah",
      role: "Director (Admin & Finance)",
      organization: "Poornima Group, Jaipur, India"
    }
  ],
  chairs: [
    {
      id: 3,
      name: "Prof.(Dr.) CARLOS M, TRAVIESO-GONZALEZ",
      role: "General Chair",
      organization: "Department of Signals & Communication (IDeTIC), University of Las Palmas de Gran Canaria, Las Palmas"
    },
    {
      id: 4,
      name: "Prof.(Dr.) Dinesh Goyal",
      role: "Conference Chair",
      organization: "Principal & Director, PIET, Jaipur, India"
    },
    {
      id: 5,
      name: "Prof.(Dr.) Payal Bansal",
      role: "ORGANIZING Chair",
      organization: "IOT DEPARTMENT, PIET, Jaipur, India"
    },
    {
      id: 6,
      name: "Prof.(Dr) RITAM DUTTA",
      role: "Convener",
      organization: "IOT DEPARTMENT, PIET, Jaipur, India"
    }
  ],
  technicalProgram: [
    {
      id: 7,
      name: "Prof (Dr) Sugandha Singh",
      role: "Dean-Faculty of Engineering and Technology and Prof- CSE",
      organization: "Guru Gobind Singh University, India"
    },
    {
      id: 8,
      name: "Dr. Badri N Subudhi",
      role: "Assoc. Prof.",
      organization: "IIT JAMMU, India"
    },
    {
      id: 9,
      name: "DR. MAHENDRA KUMAR",
      role: "Asst. Prof.",
      organization: "NIT JALANDHAR, India"
    },
    {
      id: 10,
      name: "DR. AMIT GARG",
      role: "Asst. Prof.",
      organization: "IIIT KOTA, India"
    },
    {
      id: 11,
      name: "DR. BHANU PRATAP SINGH",
      role: "Assoc. Prof.",
      organization: "PIET, India"
    },
    {
      id: 12,
      name: "DR. O.P VERMA",
      role: "Prof & HOD of CSE",
      organization: "DTU, DELHI, India"
    },
    {
      id: 13,
      name: "Dr. Madhav Sharma",
      role: "Assoc. Prof.",
      organization: "PIET Jaipur, India"
    },
    {
      id: 14,
      name: "DR. ASHISH CHAUDHARY",
      role: "Asst. Prof.",
      organization: "NIT, RAIPUR, India"
    },
    {
      id: 15,
      name: "DR. BROJO KISHORE MISHRA",
      role: "Prof & HOD - CSE",
      organization: "NIST UNIVERSITY, ODISHA, India"
    },
    {
      id: 16,
      name: "Prof.(Dr.) SHASHIKANT PATIL",
      role: "Full Prof.",
      organization: "ATLAS SKILLTECH UNIVERSITY, MUMBAI, India"
    }
  ],
  editorialBoard: [
    {
      id: 17,
      name: "Prof.(Dr.) DINESH GOYAL",
      role: "Principal & Director",
      organization: "PIET, Jaipur, India"
    },
    {
      id: 18,
      name: "Prof.(Dr.) Payal Bansal",
      role: "Depatment IOT",
      organization: "PIET, Jaipur, India"
    },
    {
      id: 19,
      name: "Prof.(Dr.) MONIKA AGARWAL",
      role: "Professor",
      organization: "IIT Delhi, India"
    },
    {
      id: 20,
      name: "Dr Ashwani Kumar",
      role: "Senior Lecturer",
      organization: "Technical Education Department UP, India"
    }
  ],
  financeCommittee: [
    {
      id: 21,
      name: "Reshma kala",
      role: "Asst. Prof.",
      organization: "PIET, Jaipur, India"
    },
    {
      id: 22,
      name: "Dr. Priya Mathur",
      role: "Professor",
      organization: "PIET, Jaipur, India"
    }
  ],
  publicityChair: [
    {
      id: 23,
      name: "Dr. Ashish Laddha",
      role: "Assoc. Professor",
      organization: "PIET, Jaipur, India"
    },
    {
      id: 24,
      name: "Prof.(Dr.) RAJEEV KUMAR",
      role: "Professor",
      organization: "MIT, Moradabad, India"
    },
    {
      id: 25,
      name: "Prof.(Dr.) NISCHAL VERMA",
      role: "Professor",
      organization: "IIT KANPUR, India"
    },
    {
      id: 26,
      name: "Prof.(Dr.) Igor Jurcic",
      role: "Professor",
      organization: "University of Mostar, India"
    }
  ],
  internationalSteering: [
    {
      id: 27,
      name: "DR. YOGESH KUMAR SINGLA",
      role: "Research Associate",
      organization: "University of Idaho, USA"
    },
    {
      id: 28,
      name: "Tanuj Namboodari",
      role: "Researcher",
      organization: "University of Miskolc, Hungary"
    },
    {
      id: 29,
      name: "J. MIKE WALKER",
      role: "Department of Mechanical Engineering",
      organization: "Texas A&M University, USA"
    },
    {
      id: 30,
      name: "DR. DIMITRIS KANELLOPOULOS",
      role: "Assoc. Prof.",
      organization: "UNIVERSITY OF PATRAS, GREECE"
    },
    {
      id: 31,
      name: "MOHD HELMY ABD WAHAB",
      role: "Senior Lecturer",
      organization: "UNIVERSITI TUN HUSSEIN ONN, MALAYSIA"
    },
    {
      id: 32,
      name: "DR. SIVASAKTHIVEL THANGAVEL",
      role: "Senior Lecturer",
      organization: "GCETM, OMAN"
    }
  ],
  nationalSteering: [
    {
      id: 33,
      name: "Dr. Karan Nathwani",
      role: "Asst. Professor",
      organization: "IIT Jammu, India"
    },
    {
      id: 34,
      name: "Dr. Felix Orlando",
      role: "Assoc. Professor",
      organization: "IIT Rorkee, India"
    },
    {
      id: 35,
      name: "DR. Yamuna Prasad",
      role: "Asst. Professor",
      organization: "IIT Jammu, India"
    },
    {
      id: 36,
      name: "Dr Sudeshna Chakraborty",
      role: "Professor",
      organization: "Galgotias University, Greater Noida, India"
    }
  ],
  organizingCommittee: [
    {
      id: 37,
      name: "Vinod Kumar Gurjar",
      role: "Deg.TA",
      organization: "India"
    },
    {
      id: 38,
      name: "Laxman Singh Chauhan",
      role: "T.A (IoT)",
      organization: "PIET, Jaipur, India"
    },
    {
      id: 39,
      name: "Surendra Kumar Sharma",
      role: "T.A (IoT)",
      organization: "PIET, Jaipur, India"
    },
    {
      id: 40,
      name: "Sumit Lunia",
      role: "T.A (IoT)",
      organization: "PIET, Jaipur, India"
    }
  ],
  localAdvisory: [
    {
      id: 41,
      name: "Dr. Gautam Singh",
      role: "Chief Proctor & Registrar",
      organization: "PIET Jaipur, India"
    },
    {
      id: 42,
      name: "Dr. Anil Kumar",
      role: "HOD, CSE",
      organization: "PIET Jaipur, India"
    },
    {
      id: 43,
      name: "DR. Budesh Kunwar",
      role: "HOD, AI&DS",
      organization: "PIET Jaipur, India"
    },
    {
      id: 44,
      name: "DR. Sama Jain",
      role: "HOD, CSE (Applied Science)",
      organization: "PIET Jaipur, India"
    }
  ]
};

export const CommitteesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.02 * index,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: {
      y: -3,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const CommitteeCard = ({ member, index }: { member: any, index: number }) => (
    <motion.div
      key={member.id}
      className="rounded-xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] bg-white overflow-hidden p-4 h-auto min-h-[120px]"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      <div className="flex flex-col justify-center h-full">
        <h3 className="font-semibold text-sm tracking-tight text-[#010D3E] leading-tight mb-1">{member.name}</h3>
        <p className="text-xs text-[#001E80] font-medium mb-2">{member.role}</p>
        <p className="text-xs text-[#010D3E]/70 leading-relaxed">{member.organization}</p>
      </div>
    </motion.div>
  );

  const CommitteeSection = ({ title, members, startIndex }: { title: string, members: any[], startIndex: number }) => (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-[#010D3E] mb-6 text-center">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
        {members.map((member, index) => (
          <div key={member.id} className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] xl:w-[calc(25%-0.75rem)]">
            <CommitteeCard member={member} index={startIndex + index} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#EAEDF2]">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Members of Conference</div>
          </div>
          
          <h2 className="section-title mt-5">ICISRI-2026</h2>
          <p className="section-des mt-5">
            Meet the distinguished experts and organizers who are making ICISRI 2026 possible.
          </p>
        </div>
        
        <div className="mt-16 px-4 max-w-7xl mx-auto">
          <CommitteeSection title="PATRONS" members={committeeData.patrons} startIndex={0} />
          <CommitteeSection title="CHAIRS" members={committeeData.chairs} startIndex={2} />
          <CommitteeSection title="TECHNICAL PROGRAM COMMITTEE" members={committeeData.technicalProgram} startIndex={6} />
          <CommitteeSection title="EDITORIAL BOARD" members={committeeData.editorialBoard} startIndex={16} />
          <CommitteeSection title="FINANCE COMMITTEE" members={committeeData.financeCommittee} startIndex={20} />
          <CommitteeSection title="PUBLICITY CHAIR" members={committeeData.publicityChair} startIndex={22} />
          <CommitteeSection title="INTERNATIONAL STEERING COMMITTEE" members={committeeData.internationalSteering} startIndex={26} />
          <CommitteeSection title="NATIONAL STEERING COMMITTEE" members={committeeData.nationalSteering} startIndex={32} />
          <CommitteeSection title="ORGANIZING COMMITTEE" members={committeeData.organizingCommittee} startIndex={36} />
          <CommitteeSection title="LOCAL ADVISORY COMMITTEE" members={committeeData.localAdvisory} startIndex={40} />
        </div>
      </div>
    </section>
  );
};
