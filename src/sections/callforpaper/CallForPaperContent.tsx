"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaMicrochip, FaRobot, FaBrain, FaNetworkWired, FaDatabase, FaShieldAlt, FaEye, FaGamepad, FaMobile, FaGlobe, FaCogs, FaChartLine, FaFileCode, FaBug, FaSearch, FaImage, FaCalculator, FaLanguage, FaCloud, FaPalette } from "react-icons/fa";

// Using direct public path following existing pattern
const arrowRightPath = "/assets/arrow-right.svg";

// Topics data with icons
const topicsData = [
  { name: "Algorithms", icon: FaCode },
  { name: "Neural Networks", icon: FaBrain },
  { name: "Digital System and Logic Design", icon: FaMicrochip },
  { name: "Data Communication", icon: FaNetworkWired },
  { name: "Artificial Intelligence", icon: FaBrain },
  { name: "Parallel and Distributed Computing", icon: FaNetworkWired },
  { name: "Distributed and Parallel Processing", icon: FaCogs },
  { name: "Computer Security", icon: FaShieldAlt },
  { name: "Automated Software Engineering", icon: FaCode },
  { name: "Pattern Recognition", icon: FaEye },
  { name: "Distributed Systems", icon: FaNetworkWired },
  { name: "Computer Simulation", icon: FaCalculator },
  { name: "Bio-informatics", icon: FaDatabase },
  { name: "Performance Evaluation", icon: FaChartLine },
  { name: "E-commerce and E-governance", icon: FaGlobe },
  { name: "Computer Vision", icon: FaEye },
  { name: "Bioinformatics and Scientific Computing", icon: FaDatabase },
  { name: "Programming Languages", icon: FaCode },
  { name: "Event Driven Programming", icon: FaFileCode },
  { name: "Computer-aided Design/Manufacturing", icon: FaPalette },
  { name: "Biomedical Engineering", icon: FaMicrochip },
  { name: "Re-Configurable Computing Systems", icon: FaCogs },
  { name: "Expert Systems", icon: FaBrain },
  { name: "Computing Ethics", icon: FaShieldAlt },
  { name: "Compilers and Interpreters", icon: FaCode },
  { name: "Robotics and Automation", icon: FaRobot },
  { name: "High Performance Computing", icon: FaCogs },
  { name: "Computing Practices & Applications", icon: FaCalculator },
  { name: "Computational Intelligence", icon: FaBrain },
  { name: "Security & Cryptography", icon: FaShieldAlt },
  { name: "Human Computer Interaction", icon: FaEye },
  { name: "Control Systems", icon: FaCogs },
  { name: "Computer Animation", icon: FaPalette },
  { name: "Software Engineering & CASE", icon: FaCode },
  { name: "Image Processing", icon: FaImage },
  { name: "Data Communications", icon: FaNetworkWired },
  { name: "Computer Architecture & VLSI", icon: FaMicrochip },
  { name: "System Security", icon: FaShieldAlt },
  { name: "Information Retrieval", icon: FaSearch },
  { name: "Data Compression", icon: FaDatabase },
  { name: "Computer Architecture", icon: FaMicrochip },
  { name: "Embedded Systems", icon: FaMicrochip },
  { name: "Information Systems", icon: FaDatabase },
  { name: "Data Encryption", icon: FaShieldAlt },
  { name: "Computer Based Education", icon: FaGlobe },
  { name: "Natural Language Processing", icon: FaLanguage },
  { name: "Internet and Web Applications", icon: FaGlobe },
  { name: "Data Mining", icon: FaDatabase },
  { name: "Computer Games", icon: FaGamepad },
  { name: "Theoretical Computer Science", icon: FaCalculator },
  { name: "Knowledge Data Engineering", icon: FaDatabase },
  { name: "Database Systems", icon: FaDatabase },
  { name: "Computer Graphics & Virtual Reality", icon: FaPalette },
  { name: "Ubiquitous Computing", icon: FaCloud },
  { name: "Mobile Computing", icon: FaMobile },
  { name: "Digital Library", icon: FaDatabase },
  { name: "Computer Graphics and Multimedia", icon: FaPalette },
  { name: "Wireless Communication", icon: FaNetworkWired },
  { name: "Computer Modeling", icon: FaCalculator },
  { name: "Digital Signal and Image Processing", icon: FaImage },
  { name: "Wireless Sensor Networks", icon: FaNetworkWired }
];

export const CallForPaperContent = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const topicVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.02 * index,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#EAEDF2]">
      <div className="container">
        {/* Section 1: Announcements for Authors */}
        <motion.div
          className="max-w-6xl mx-auto px-4 mb-20"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-heading mb-12">
            <div className="flex justify-center">
              <div className="tag">Guidelines</div>
            </div>
            <h2 className="section-title mt-5">Announcements for Authors</h2>
          </div>
          
          <div className="text-[#010D3E]/80 leading-relaxed text-lg text-justify bg-white rounded-2xl p-8 shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1]">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl text-[#010D3E] mb-3">Submission Guidelines:</h3>
                <p>
                  To submit a paper for ICISRI-2026, authors must follow the conference proceedings format. The submission template for the conference is available for Word users and LaTeX users. The maximum length of the paper is six (6) pages. Authors must ensure that their research paper is original and has not been previously submitted to any other journal or conference. The similarity score of the manuscript should not exceed 10%. Manuscripts with a similarity score of more than 10% will not be processed.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-xl text-[#010D3E] mb-3">Review Process & Oral Presentation:</h3>
                <p className="mb-3">
                  All papers with a similarity score of less than 10% will undergo a double-blind review. The technical committee of the conference will review the papers, and the authors will be notified of the paper's status, which can be one of the following:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Accepted for oral presentation</li>
                  <li>Accepted with minor corrections for Oral Presentation</li>
                  <li>Rejected</li>
                </ul>
                <p className="mt-3 italic text-base">
                  Note: *yet to be announced
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Topics/Tracks */}
        <motion.div
          className="max-w-7xl mx-auto px-4 mb-20"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-heading mb-12">
            <div className="flex justify-center">
              <div className="tag">Research Areas</div>
            </div>
            <h2 className="section-title mt-5">Topics & Tracks</h2>
            <p className="section-des mt-5">
              The ICISRI is the premier multidisciplinary platform for the presentation of new advances and research results in the fields of Computer Science & Engineering, IoT, Robotics and Semiconductor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {topicsData.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-3 shadow-[0_4px_8px_#EAEAEA] border border-[#F1F1F1] hover:border-[#001E80]/20 transition-colors duration-300 cursor-pointer"
                  variants={topicVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.1 }}
                  custom={index}
                >
                  <div className="flex items-center gap-2">
                    <IconComponent className="text-[#001E80] text-sm flex-shrink-0" />
                    <span className="text-xs text-[#010D3E] font-medium leading-tight">{topic.name}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Section 3: Paper Submission Guidelines */}
        <motion.div
          className="max-w-6xl mx-auto px-4"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-heading mb-12">
            <div className="flex justify-center">
              <div className="tag">Submission</div>
            </div>
            <h2 className="section-title mt-5">Paper Submission Guidelines</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Instructions Card */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1]">
              <h3 className="text-xl font-semibold text-[#010D3E] mb-4">Instructions</h3>
              <div className="text-[#010D3E]/80 leading-relaxed space-y-3">
                <p>All the registered and presented papers will be published in the conference proceedings.</p>
                <p>Your registration WILL NOT be confirmed until full payment is received.</p>
                <p>All the accepted and presented papers shall be part of the ICISRI Conference Proceedings Publication.</p>
              </div>
            </div>

            {/* Important Dates Card */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1]">
              <h3 className="text-xl font-semibold text-[#010D3E] mb-4">Important Dates</h3>
              <div className="text-[#010D3E]/80 leading-relaxed space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Paper Submission Start:</span>
                  <span className="text-[#001E80]">10 Nov, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Paper Submission Deadline:</span>
                  <span className="text-[#001E80]">28 Feb, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Notification of Acceptance:</span>
                  <span className="text-[#001E80]">25 March, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Camera Ready Paper:</span>
                  <span className="text-[#001E80]">07 April, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Registration:</span>
                  <span className="text-[#001E80]">07 April, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Conference:</span>
                  <span className="text-[#001E80]">08-09 May, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
