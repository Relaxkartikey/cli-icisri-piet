"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBook } from "react-icons/fa";

// Using direct public path
const ktlogoPath = "/assets/ktlogo.png";
const crc = "/assets/crc.png";
const iste = "/assets/iste.png";
const taru = "/assets/taru.png";

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

const publicationPartners: Partner[] = [
  {
    id: "pub-1",
    name: "Taru Publication",
    bio: "Leading publisher of academic research papers and technical journals.",
    description: "Taru Publication is a distinguished academic publisher specializing in high-quality research publications across various technical and scientific disciplines. With a commitment to advancing knowledge and promoting scholarly excellence, Taru Publication provides a platform for researchers to share their innovative work with the global academic community.",
    logo: taru,
    type: "publication",
    website: "#"
  },
  {
    id: "pub-2",
    name: "CRC Publication",
    bio: "Premier publisher of technical and scientific resources with global reach.",
    description: "CRC Publication stands as a premier publisher in the technical and scientific publishing landscape, offering comprehensive resources that span multiple disciplines. With decades of experience in academic publishing, CRC Publication maintains rigorous editorial standards and provides authors with extensive support throughout the publication process.",
    logo: crc,
    type: "publication",
    website: "#"
  },
  {
    id: "pub-3",
    name: "IJTE-ISTE Publication",
    bio: "International Journal of Technical Education specializing in educational technology research.",
    description: "The International Journal of Technical Education (IJTE) by ISTE is a peer-reviewed publication dedicated to advancing technical education research and practice. The journal publishes original research articles, case studies, and reviews that contribute to the understanding and improvement of technical education methodologies, curriculum development, and educational technology applications.",
    logo: iste,
    type: "publication",
    website: "#"
  }
];

export const PublicationPartnersSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#EAEDF2]">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Academic Publishers</div>
          </div>
          <h2 className="section-title mt-5">Publication Partners</h2>
          <p className="section-des mt-5">
            Renowned publishers committed to disseminating high-quality research and ensuring wide accessibility of scholarly work.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {publicationPartners.map((partner, index) => (
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
                      <FaBook className="w-4 h-4 text-white" />
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
