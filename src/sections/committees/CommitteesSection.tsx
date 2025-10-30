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
      name: "Deepak Mathur",
      role: "Honorary Chair",
      organization: ""
    }
  ],
  generalChair: [
    {
      id: 4,
      name: "Prof. (Dr.) Carlos M. Travieso-Gonzalez",
      role: "General Chair",
      organization: "Dept. of Signals & Communication (IDeTIC), University of Las Palmas de Gran Canaria, Spain"
    }
  ],
  conferenceChair: [
    {
      id: 5,
      name: "Dr. M. N. Hooda",
      role: "Director",
      organization: "Bharati Vidyapeeth, Delhi"
    },
    {
      id: 6,
      name: "Prof. (Dr.) Dinesh Goyal",
      role: "Principal & Director",
      organization: "PIET, Jaipur"
    },
    {
      id: 7,
      name: "Prof. Rachna Garg",
      role: "Professor, Electrical Engineering",
      organization: "DTU, Delhi"
    }
  ],
  organizingChair: [
    {
      id: 8,
      name: "Prof. (Dr.) Payal Bansal",
      role: "HOD, IoT",
      organization: "PIET, Jaipur"
    },
    {
      id: 9,
      name: "Dr. Shruti Jain",
      role: "Associate Dean (Innovation) & Professor, ECE",
      organization: "JP University"
    }
  ],
  financeChair: [
    {
      id: 10,
      name: "Ritam Dutta",
      role: "Professor",
      organization: "PIET, Jaipur"
    },
    {
      id: 11,
      name: "Dr. Richa Gupta",
      role: "Assistant Professor, CSE",
      organization: "Jamia Hamdard"
    }
  ],
  publicityCommittee: [
    {
      id: 12,
      name: "Dr. Madhav Sharma",
      role: "Associate Professor",
      organization: "PIET, Jaipur"
    },
    {
      id: 13,
      name: "Prof. (Dr.) Rajeev Kumar",
      role: "Professor",
      organization: "MIT, Moradabad"
    },
    {
      id: 14,
      name: "Dr. Preet Yadav",
      role: "IEEE Delhi Section",
      organization: "Faculty & IEEE Member"
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
      name: "Prof. (Dr.) Rajeev Kumar",
      role: "Professor",
      organization: "MIT, Moradabad"
    },
    {
      id: 17,
      name: "Prof. (Dr.) Igor Jurcic",
      role: "Professor",
      organization: "University of Mostar"
    }
  ],
  logisticsHospitality: [
    {
      id: 18,
      name: "Mr. Vishal Kothari",
      role: "Logistics & Hospitality",
      organization: "PIET, Jaipur"
    }
  ],
  accommodationTransportation: [
    {
      id: 19,
      name: "Laxman Singh Chauhan",
      role: "Accommodation & Transportation",
      organization: "PIET, Jaipur"
    },
    {
      id: 20,
      name: "Ms. Sameeksha",
      role: "Accommodation & Transportation",
      organization: "PIET, Jaipur"
    }
  ],
  technicalProgram: [
    {
      id: 21,
      name: "Prof. (Dr.) Sugandha Singh",
      role: "Dean & Professor, CSE",
      organization: "Guru Gobind Singh University"
    },
    {
      id: 22,
      name: "Dr. Badri N. Subudhi",
      role: "Associate Professor",
      organization: "IIT Jammu"
    },
    {
      id: 23,
      name: "Dr. Mahendra Kumar",
      role: "Assistant Professor",
      organization: "NIT Jalandhar"
    },
    {
      id: 24,
      name: "Dr. Brojo Kishore Mishra",
      role: "Prof. & HOD, CSE",
      organization: "NIST University, Odisha"
    },
    {
      id: 25,
      name: "Dr. Ashish Chaudhary",
      role: "Assistant Professor",
      organization: "NIT Raipur"
    },
    {
      id: 26,
      name: "Dr. O. P. Verma",
      role: "Prof. & HOD, CSE",
      organization: "DTU, Delhi"
    },
    {
      id: 27,
      name: "Dr. Rajeeb Dey",
      role: "Associate Professor",
      organization: "NIT Silchar"
    },
    {
      id: 28,
      name: "Dr. Nitai Paitya",
      role: "Professor, AI-ML",
      organization: "Amity University, Kolkata"
    },
    {
      id: 29,
      name: "Dr. Suganthi K.",
      role: "Associate Professor",
      organization: "SRM Institute of Science & Technology, Chennai"
    },
    {
      id: 30,
      name: "Ashish Laddha",
      role: "Associate Professor",
      organization: "PIET, Jaipur"
    },
    {
      id: 31,
      name: "Prof. (Dr.) Milin Tuba",
      role: "Professor",
      organization: ""
    },
    {
      id: 32,
      name: "Prof. (Dr.) Ahmed Engler",
      role: "Professor",
      organization: ""
    }
  ],
  editorialBoard: [
    {
      id: 33,
      name: "Prof. (Dr.) Dinesh Goyal",
      role: "Principal & Director",
      organization: "PIET, Jaipur"
    },
    {
      id: 34,
      name: "Prof. (Dr.) Payal Bansal",
      role: "HOD, IoT",
      organization: "PIET, Jaipur"
    },
    {
      id: 35,
      name: "Dr. Madhav Sharma",
      role: "Associate Professor, Dept. of IoT",
      organization: "PIET, Jaipur"
    },
    {
      id: 36,
      name: "Ashish Laddha",
      role: "Editorial Board Member",
      organization: "PIET, Jaipur"
    },
    {
      id: 37,
      name: "Dr. Ritam Dutta",
      role: "Editorial Board Member",
      organization: "PIET, Jaipur"
    }
  ],
  internationalSteering: [
    {
      id: 38,
      name: "Dr. Yogesh Kumar Singla",
      role: "Research Associate",
      organization: "Texas A&M University, USA"
    },
    {
      id: 39,
      name: "J. Mike Walker",
      role: "Researcher",
      organization: "University of Idaho, USA & University of Miskolc, Hungary"
    },
    {
      id: 40,
      name: "Dr. Dimitris Kanellopoulos",
      role: "Associate Professor",
      organization: "University of Patras, Greece"
    },
    {
      id: 41,
      name: "Mohd Helmy Abd Wahab",
      role: "Senior Lecturer",
      organization: "Universiti Tun Hussein Onn, Malaysia"
    },
    {
      id: 42,
      name: "Dr. Sivasakthivel Thangavel",
      role: "Senior Lecturer",
      organization: "GCETM, Oman"
    }
  ],
  nationalSteering: [
    {
      id: 43,
      name: "Dr. Karan Nathwani",
      role: "Assistant Professor",
      organization: "IIT Jammu"
    },
    {
      id: 44,
      name: "Dr. Felix Orlando",
      role: "Associate Professor",
      organization: "IIT Roorkee"
    },
    {
      id: 45,
      name: "Dr. Yamuna Prasad",
      role: "Assistant Professor",
      organization: "IIT Jammu"
    },
    {
      id: 46,
      name: "Dr. Rashmi Agarwal",
      role: "Dept. of Electrical Engineering",
      organization: ""
    },
    {
      id: 47,
      name: "Prof. Mridula Gupta",
      role: "Professor",
      organization: "University of Delhi, South Campus"
    },
    {
      id: 48,
      name: "Dr. Shivani Sharma",
      role: "Principal Technical Consultant",
      organization: "J.C. Bose University of Science & Technology, YMCA Faridabad"
    }
  ],
  organizingCommittee: [
    {
      id: 49,
      name: "Mr. Vishal Kothari",
      role: "Organizing Committee",
      organization: "PIET, Jaipur"
    },
    {
      id: 50,
      name: "Ms. Samiksha Agarwal",
      role: "Organizing Committee",
      organization: "PIET, Jaipur"
    },
    {
      id: 51,
      name: "Vinod Kumar Gurjar",
      role: "Organizing Committee",
      organization: "PIET, Jaipur"
    },
    {
      id: 52,
      name: "Laxman Singh Chauhan",
      role: "Organizing Committee",
      organization: "PIET, Jaipur"
    },
    {
      id: 53,
      name: "Surendra Kumar Sharma",
      role: "Organizing Committee",
      organization: "PIET, Jaipur"
    }
  ],
  localAdvisory: [
    {
      id: 54,
      name: "Dr. Anil Kumar",
      role: "Professor, Dept. of CSE",
      organization: "PIET, Jaipur"
    },
    {
      id: 55,
      name: "Dr. Budesh Kunwar",
      role: "Professor, Dept. of AIDS",
      organization: "PIET, Jaipur"
    },
    {
      id: 56,
      name: "Dr. Sama Jain",
      role: "Professor, Dept. of Applied Sciences",
      organization: "PIET, Jaipur"
    }
  ],
  publicationPartners: [
    {
      id: 57,
      name: "AIP Conference Proceedings",
      role: "Publication Partner",
      organization: "AIP Publishing"
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
          <CommitteeSection title="GENERAL CHAIR" members={committeeData.generalChair} startIndex={3} />
          <CommitteeSection title="CONFERENCE CHAIR" members={committeeData.conferenceChair} startIndex={4} />
          <CommitteeSection title="ORGANIZING CHAIR" members={committeeData.organizingChair} startIndex={7} />
          <CommitteeSection title="FINANCE CHAIR" members={committeeData.financeChair} startIndex={9} />
          <CommitteeSection title="PUBLICITY COMMITTEE" members={committeeData.publicityCommittee} startIndex={11} />
          <CommitteeSection title="PUBLICITY CHAIR" members={committeeData.publicityChair} startIndex={14} />
          <CommitteeSection title="LOGISTICS & HOSPITALITY COMMITTEE" members={committeeData.logisticsHospitality} startIndex={17} />
          <CommitteeSection title="ACCOMMODATION & TRANSPORTATION COMMITTEE" members={committeeData.accommodationTransportation} startIndex={18} />
          <CommitteeSection title="TECHNICAL PROGRAM COMMITTEE" members={committeeData.technicalProgram} startIndex={20} />
          <CommitteeSection title="EDITORIAL BOARD" members={committeeData.editorialBoard} startIndex={32} />
          <CommitteeSection title="INTERNATIONAL STEERING COMMITTEE" members={committeeData.internationalSteering} startIndex={37} />
          <CommitteeSection title="NATIONAL STEERING COMMITTEE" members={committeeData.nationalSteering} startIndex={42} />
          <CommitteeSection title="ORGANIZING COMMITTEE" members={committeeData.organizingCommittee} startIndex={48} />
          <CommitteeSection title="LOCAL ADVISORY COMMITTEE" members={committeeData.localAdvisory} startIndex={53} />
          <CommitteeSection title="PUBLICATION PARTNERS" members={committeeData.publicationPartners} startIndex={56} />
        </div>
      </div>
    </section>
  );
};
