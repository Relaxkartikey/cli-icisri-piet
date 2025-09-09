"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLightbulb } from "react-icons/fa";

// Using direct public path
const idea = "/assets/pics/idea.png";

type PartnerType = "technical" | "publication" | "organizing";

interface Partner {
  id: string;
  name: string;
  bio: string;
  description: string;
  logo: string;
  type: PartnerType;
  website?: string;
}

const organizingPartners: Partner[] = [
  {
    id: "org-1",
    name: "IDEA LAB Piet",
    bio: "Innovation, Design, Engineering, and Art Laboratory at Poornima Institute of Engineering & Technology.",
    description: "IDEA LAB at PIET is a state-of-the-art innovation hub that fosters creativity, research, and technological advancement. The laboratory serves as a catalyst for interdisciplinary collaboration, bringing together students, faculty, and industry professionals to work on cutting-edge projects in engineering, technology, and design. With modern facilities and equipment, IDEA LAB provides an environment where innovative ideas can be transformed into practical solutions.",
    logo: idea,
    type: "organizing",
    website: "#"
  }
];

export const OrganizingPartnersSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Innovation Hub</div>
          </div>
          <h2 className="section-title mt-5">Organizing Partners</h2>
          <p className="section-des mt-5">
            Institutional partners who provide essential support and resources for successfully conducting ICISRI-2024.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {organizingPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="bg-white rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] overflow-hidden hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: Image */}
                <div className="md:w-64 flex-shrink-0 p-8 flex items-center justify-center bg-gradient-to-br from-[#F8FAFF] to-[#E6ECFF]">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border border-[#F1F1F1] shadow-lg bg-white p-4">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={128}
                        height={128}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#001E80] rounded-full flex items-center justify-center">
                      <FaLightbulb className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#010D3E] mb-2">{partner.name}</h3>
                      <p className="text-base text-[#001E80] font-medium">{partner.bio}</p>
                    </div>
                  </div>
                  <p className="text-base text-[#010D3E]/80 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
