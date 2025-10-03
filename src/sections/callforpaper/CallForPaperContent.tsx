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
            <p>
              Authors are kindly requested to submit their full-text papers in PDF format, inclusive of results, tables, figures, and references. Submitted papers will undergo a peer-review process, and accepted works will be published in conference proceedings. It is imperative that all submissions present original, unpublished research findings, whether experimental or theoretical. Papers under review or consideration for publication elsewhere are not eligible for submission. Please note that registration confirmation is contingent upon receipt of full payment. Only registered and presented papers will be included in the conference proceedings. Additionally, selected papers will be further considered for publication in a Scopus Indexed Journal.
            </p>
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
                  <span className="font-medium">Paper Submission:</span>
                  <span className="text-[#001E80]">10 March, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Notification:</span>
                  <span className="text-[#001E80]">20 March, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Camera Ready:</span>
                  <span className="text-[#001E80]">25 March, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Registration:</span>
                  <span className="text-[#001E80]">25 March, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Conference:</span>
                  <span className="text-[#001E80]">10-11 April, 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formatting Guidelines */}
          <div className="mt-8 bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1]">
            <h3 className="text-lg sm:text-xl font-semibold text-[#010D3E] mb-4">Formatting Guidelines</h3>
            <p className="text-sm sm:text-base text-[#010D3E]/80 leading-relaxed mb-6">
              ICISRI Conference Proceedings are indexed in a number of services, including these leading databases.
            </p>
            
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
              <button className="bg-[#001E80] text-white px-4 sm:px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-[#001E80]/90 transition-colors text-sm sm:text-base">
                Paper Template
                <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2 filter invert" />
              </button>
              
              <button className="bg-black text-white px-4 sm:px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-black/90 transition-colors text-sm sm:text-base">
                Paper Submission Link
                <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2 filter invert" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
