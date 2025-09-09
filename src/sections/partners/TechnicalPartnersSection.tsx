"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUniversity } from "react-icons/fa";

// Using direct public path
const isteLogoPath = "/assets/pics/iste.png";
const ieeeLogoPath = "/assets/pics/ieee.png";
const acmLogoPath = "/assets/pics/acm.png";


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

const technicalPartners: Partner[] = [
  {
    id: "tech-1",
    name: "ISTE",
    bio: "Indian Society for Technical Education - Promoting technical education in India through quality programs.",
    description: "The Indian Society for Technical Education (ISTE) is a National Professional non-profit making Society for the Technical Education System in our country with the motto of Career Development of Teachers and Personality Development of Students and overall development of our Technical Education System. ISTE conducts various programs for the development of Technical Education and to maintain the quality and relevance of technical education.",
    logo: isteLogoPath,
    type: "technical",
    website: "https://www.isteonline.in/"
  },
  {
    id: "tech-2",
    name: "IEEE",
    bio: "Institute of Electrical and Electronics Engineers - World's largest technical professional organization dedicated to advancing technology.",
    description: "IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. IEEE has over 400,000 members in over 160 countries.",
    logo: ieeeLogoPath,
    type: "technical",
    website: "https://www.ieee.org/"
  },
  {
    id: "tech-3",
    name: "ACM",
    bio: "Association for Computing Machinery - International learned society for computing professionals and researchers.",
    description: "ACM is an international learned society for computing. It was founded in 1947 and is the world's largest scientific and educational computing society. The ACM is a non-profit professional membership group, claiming nearly 100,000 student and professional members. Its headquarters are in New York City. ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges.",
    logo: acmLogoPath,
    type: "technical",
    website: "https://www.acm.org/"
  }
];

export const TechnicalPartnersSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Professional Organizations</div>
          </div>
          <h2 className="section-title mt-5">Technical Partners</h2>
          <p className="section-des mt-5">
            Leading professional organizations that provide technical expertise and support for advancing research standards in our field.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {technicalPartners.map((partner, index) => (
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
                      <FaUniversity className="w-4 h-4 text-white" />
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
                  <p className="text-base text-[#010D3E]/80 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  {partner.website && partner.website !== "#" && (
                    <motion.a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#001E80] hover:text-[#010D3E] font-medium transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      Visit Website
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
