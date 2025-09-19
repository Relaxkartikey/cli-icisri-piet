"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Using direct public path
const ktlogoPath = "/assets/user.jpeg";

interface Speaker {
  id: string;
  name: string;
  designation: string;
  institution: string;
  country: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Dr Ashish khanna",
    designation: "Associate professor",
    institution: "MAIT, Delhi",
    country: "India",
    image: ktlogoPath,
  },
  {
    id: "speaker-2",
    name: "Dr. Yogesh Kumar Singla",
    designation: "Assistant Professor",
    institution: "NTU, Crownpoint",
    country: "USA",
    image: ktlogoPath,
  },
  {
    id: "speaker-3",
    name: "Dr. Dharm Singh",
    designation: "Professor",
    institution: "NUST",
    country: "Namibia",
    image: ktlogoPath,
  },
  {
    id: "speaker-4",
    name: "Dr. Rajesh Kumar",
    designation: "Professor",
    institution: "MNIT, Jaipur",
    country: "India",
    image: ktlogoPath,
  }
];

export const SpeakersSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.1 * index,
        duration: 0.5 
      }
    })
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#EAEDF2]">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Guests</div>
          </div>
          
          <h2 className="section-title mt-5">Speakers at ICISRI</h2>
          <p className="section-des mt-5">
            Distinguished experts who will share their insights and knowledge at ICISRI 2026.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="mt-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                className="card p-0 overflow-hidden rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] bg-white transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  {/* Speaker Image */}
                  <div className="w-32 h-32 mx-auto mt-8 rounded-xl overflow-hidden">
                    <Image 
                      src={speaker.image}
                      alt={`${speaker.name} photo`}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Speaker Details */}
                  <div className="p-6 text-center flex-grow flex flex-col">
                    <h3 className="font-semibold text-lg tracking-tight text-[#010D3E] mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-[#001E80] font-medium mb-1">
                      {speaker.designation}
                    </p>
                    <p className="text-sm text-[#010D3E]/70 mb-1">
                      {speaker.institution}
                    </p>
                    <p className="text-sm text-[#010D3E]/60 font-medium">
                      {speaker.country}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
