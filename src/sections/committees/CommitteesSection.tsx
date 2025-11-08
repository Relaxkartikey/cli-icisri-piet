"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Using direct public paths
const arrowRightPath = "/assets/arrow-right.svg";

// Committee data organized by sections
const committeeData = {
  chiefPatrons: [
    {
      id: 1,
      name: "Mr. Hari Singh Shekhawat",
      role: "Director (Infrastructure)",
      organization: "Poornima Group, Jaipur"
    },
    {
      id: 2,
      name: "Mr. MKM Shah",
      role: "Director (Admin & Finance)",
      organization: "Poornima Group, Jaipur"
    }
  ],
  honoraryChair: [
    {
      id: 3,
      name: "Prof. Sheng-Lung Peng",
      role: "Department of Creative Technologies and Product Design",
      organization: "National Taipei University of Business, Taiwan"
    },
    {
      id: 4,
      name: "Dr. MN Hooda",
      role: "Director",
      organization: "Bharati Vidyapeeth, New Delhi"
    }
  ],
  generalChair: [
    {
      id: 5,
      name: "Prof.(Dr.) CARLOS M, TRAVIESO-GONZALEZ",
      role: "Full Professor - Department of Signals & Communication (IDeTIC)",
      organization: "University of Las Palmas de Gran Canaria, Las Palmas"
    },
    {
      id: 6,
      name: "Deepak Mathur",
      role: "Member | Vice President",
      organization: "IEEE MGA Board"
    }
  ],
  conferenceChair: [
    {
      id: 7,
      name: "Prof.(Dr.) Dinesh Goyal",
      role: "Principal & Director",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 8,
      name: "Prof. Rachna Garg",
      role: "Associate Dean (Innovation) and Professor Department of Electronics and Communication Engineering",
      organization: "Delhi Technological University, Delhi"
    }
  ],
  organizingChair: [
    {
      id: 9,
      name: "Prof.(Dr.) Payal Bansal",
      role: "HOD - IOT",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 10,
      name: "Dr. Shruti Jain",
      role: "Associate Dean (Innovation) and Professor Department of Electronics and Communication Engineering",
      organization: "JP University"
    }
  ],
  financeChair: [
    {
      id: 11,
      name: "Ritam Dutta",
      role: "Professor",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 12,
      name: "Dr Richa Gupta",
      role: "Assistant Professor, Department of CSE",
      organization: "Jamia Hamdard"
    }
  ],
  publicityCommittee: [
    {
      id: 13,
      name: "Dr Madhav Sharma",
      role: "Assistant Professor",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 14,
      name: "Prof.(Dr.) RAJEEV KUMAR",
      role: "Professor",
      organization: "MIT, Moradabad"
    }
  ],
  publicityChair: [
    {
      id: 15,
      name: "Dr. Ashish Laddha",
      role: "Associate Professor",
      organization: "PIET, Jaipur"
    },
    {
      id: 16,
      name: "Prof.(Dr.) RAJEEV KUMAR",
      role: "Professor",
      organization: "MIT, Moradabad"
    },
    {
      id: 17,
      name: "Prof.(Dr.) Igor Jurcic",
      role: "Professor",
      organization: "University of Mostar"
    }
  ],
  logisticsHospitality: [
    {
      id: 18,
      name: "Mr. Vishal Kothari",
      role: "Assistant Professor",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    }
  ],
  accommodationTransportation: [
    {
      id: 19,
      name: "Ms. Sameeksha",
      role: "Assistant Professor",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    }
  ],
  technicalProgram: [
    {
      id: 20,
      name: "Prof (Dr) Sugandha Singh",
      role: "Dean-Faculty of Engineering and Technology and Prof. CSE Department",
      organization: "Guru Gobind Singh University"
    },
    {
      id: 21,
      name: "Dr. Badri N Subudhi",
      role: "Associate Professor",
      organization: "IIT Jammu"
    },
    {
      id: 22,
      name: "Dr. Mahendra Kumar",
      role: "Associate Professor",
      organization: "NIT JALANDHAR"
    },
    {
      id: 23,
      name: "Dr. Brojo Kishor Mishra",
      role: "Prof. & HOD, CSE",
      organization: "NIST UNIVERSITY"
    },
    {
      id: 24,
      name: "Dr. Ashish Chaudhary",
      role: "Asst. Prof.",
      organization: "NIT Raipur"
    },
    {
      id: 25,
      name: "Dr. O.P Verma",
      role: "Prof & HOD, CSE",
      organization: "DTU, DELHI"
    },
    {
      id: 26,
      name: "Dr. Rajeeb Dey",
      role: "Assoc. Prof.",
      organization: "NIT Silchar"
    },
    {
      id: 27,
      name: "Dr. Nitai Paitya",
      role: "Professor, AI-ML",
      organization: "Amity University, Kolkata"
    },
    {
      id: 28,
      name: "Dr. Suganthi K.",
      role: "Associate Professor",
      organization: "SRM Institute of Science & Technology, Chennai"
    },
    {
      id: 29,
      name: "Ashish Laddha",
      role: "Associate Professor",
      organization: "PIET, Jaipur"
    }
  ],
  editorialBoard: [
    {
      id: 30,
      name: "Prof.(Dr.) Dinesh Goyal",
      role: "Principal & Director",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 31,
      name: "Prof.(Dr.) Payal Bansal",
      role: "HOD - IOT",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 32,
      name: "Dr. Madhav Sharma",
      role: "Associate Professor, Dept of IOT",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 33,
      name: "Ashish Laddha",
      role: "Associate Professor",
      organization: "PIET, Jaipur"
    },
    {
      id: 34,
      name: "Ritam Dutta",
      role: "Professor",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    }
  ],
  internationalSteering: [
    {
      id: 35,
      name: "DR. YOGESH KUMAR SINGLA",
      role: "Research Associate",
      organization: "University of Idaho, USA"
    },
    {
      id: 36,
      name: "DR. DIMITRIS KANELLOPOULOS",
      role: "Assoc. Prof.",
      organization: "UNIVERSITY OF PATRAS, GREECE"
    },
    {
      id: 37,
      name: "empty empty",
      role: "Researcher",
      organization: "University of Miskolc, Hungary"
    },
    {
      id: 38,
      name: "MOHD HELMY ABD WAHAB",
      role: "Senior Lecturer",
      organization: "UNIVERSITI TUN HUSSEIN ONN, MALAYSIA"
    },
    {
      id: 39,
      name: "J. MIKE WALKER",
      role: "Senior Lecturer",
      organization: "Department of Mechanical Engineering, Texas A&M University, USA"
    },
    {
      id: 40,
      name: "DR. SIVASAKTHIVEL THANGAVEL",
      role: "Senior Lecturer",
      organization: "GCETM, OMAN"
    }
  ],
  nationalSteering: [
    {
      id: 41,
      name: "Dr. Karan Nathwani",
      role: "Asst. Professor",
      organization: "IIT Jammu, India"
    },
    {
      id: 42,
      name: "Dr. Rashmi Agarwal",
      role: "Department of Electrical Engineering",
      organization: "J.C. Bose University of Science & Technology, YMCA, Faridabad, India"
    },
    {
      id: 43,
      name: "Dr. Felix Orlando",
      role: "Associate Professor",
      organization: "IIT Rorkee, India"
    },
    {
      id: 44,
      name: "Prof. Mridula Gupta",
      role: "Professor",
      organization: "University of Delhi, South Campus"
    },
    {
      id: 45,
      name: "Dr. Yamuna Prasad",
      role: "Assistant Professor",
      organization: "IIT Jammu, India"
    },
    {
      id: 46,
      name: "Dr. Shivani Sharma",
      role: "Principal Technical Consultant",
      organization: ""
    }
  ],
  organizingCommittee: [
    {
      id: 47,
      name: "Mr. Vishal Kothari",
      role: "Assistant Professor",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 48,
      name: "Vinod Kumar Gurjar",
      role: "Technical Assistant",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 49,
      name: "Ms. Samiksha Agarwal",
      role: "Assistant Professor",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 50,
      name: "Laxman Singh Chauhan",
      role: "Technical Officer",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 51,
      name: "Surendra Kumar Sharma",
      role: "Technical Assistant",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    }
  ],
  localAdvisory: [
    {
      id: 52,
      name: "Dr. Anil Kumar",
      role: "Prof., Dept. of CSE",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 53,
      name: "DR. Budesh Kunwar",
      role: "Prof., Dept. of AIDS",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    },
    {
      id: 54,
      name: "DR. Sama Jain",
      role: "Prof., Dept. of Appl. Sc.",
      organization: "Poornima Institute of Engineering & Technology, Jaipur"
    }
  ],
  publicationPartners: [
    {
      id: 55,
      name: "AIP Conference Proceedings",
      role: "Publishing Organisation",
      organization: "American Institute of Physics"
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
          <CommitteeSection title="CHIEF PATRONS" members={committeeData.chiefPatrons} startIndex={0} />
          <CommitteeSection title="HONORARY CHAIR" members={committeeData.honoraryChair} startIndex={2} />
          <CommitteeSection title="GENERAL CHAIR" members={committeeData.generalChair} startIndex={4} />
          <CommitteeSection title="CONFERENCE CHAIR" members={committeeData.conferenceChair} startIndex={6} />
          <CommitteeSection title="ORGANIZING CHAIR" members={committeeData.organizingChair} startIndex={8} />
          <CommitteeSection title="FINANCE CHAIR" members={committeeData.financeChair} startIndex={10} />
          <CommitteeSection title="PUBLICITY COMMITTEE" members={committeeData.publicityCommittee} startIndex={12} />
          <CommitteeSection title="PUBLICITY CHAIR" members={committeeData.publicityChair} startIndex={14} />
          <CommitteeSection title="LOGISTICS & HOSPITALITY COMMITTEE" members={committeeData.logisticsHospitality} startIndex={17} />
          <CommitteeSection title="ACCOMMODATION & TRANSPORTATION COMMITTEE" members={committeeData.accommodationTransportation} startIndex={18} />
          <CommitteeSection title="TECHNICAL PROGRAM COMMITTEE" members={committeeData.technicalProgram} startIndex={19} />
          <CommitteeSection title="EDITORIAL BOARD" members={committeeData.editorialBoard} startIndex={29} />
          <CommitteeSection title="INTERNATIONAL STEERING COMMITTEE" members={committeeData.internationalSteering} startIndex={34} />
          <CommitteeSection title="NATIONAL STEERING COMMITTEE" members={committeeData.nationalSteering} startIndex={40} />
          <CommitteeSection title="ORGANIZING COMMITTEE" members={committeeData.organizingCommittee} startIndex={46} />
          <CommitteeSection title="LOCAL ADVISORY COMMITTEE" members={committeeData.localAdvisory} startIndex={51} />
          <CommitteeSection title="PUBLICATION PARTNERS" members={committeeData.publicationPartners} startIndex={54} />
        </div>
      </div>
    </section>
  );
};
