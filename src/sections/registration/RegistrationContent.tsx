"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Using direct public path
const arrowRightPath = "/assets/arrow-right.svg";

export const RegistrationContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Paper Submission Guidelines */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#010D3E] mb-6">
              Paper Submission Guidelines
            </h2>
            
            <div className="bg-gradient-to-br from-white to-[#F8FAFF] rounded-2xl p-6 sm:p-8 shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1]">
              <h3 className="text-xl font-semibold text-[#010D3E] mb-4">Instructions</h3>
              <p className="text-[#010D3E]/80 leading-relaxed mb-6">
                All the registered and presented papers will be published in the conference proceedings. Your registration WILL NOT be confirmed until full payment is received. All the accepted and presented papers shall be part of the ICISRI Conference Proceedings Publication.
              </p>
            </div>
          </motion.div>

          {/* Formatting Guidelines */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1]">
              <h3 className="text-xl font-semibold text-[#010D3E] mb-4">Formatting Guidelines</h3>
              <p className="text-[#010D3E]/80 leading-relaxed mb-6">
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

          {/* Important Dates */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1]">
              <h3 className="text-xl font-semibold text-[#010D3E] mb-4">Important Dates</h3>
              <div className="text-[#010D3E]/80 leading-relaxed space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-[#F1F1F1]/50">
                  <span className="font-medium">Last and Extended Full Paper Submission Last Date:</span>
                  <span className="text-[#001E80] font-semibold">10 March, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#F1F1F1]/50">
                  <span className="font-medium">Notification of Acceptance:</span>
                  <span className="text-[#001E80] font-semibold">20 March, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#F1F1F1]/50">
                  <span className="font-medium">Camera Ready Copy:</span>
                  <span className="text-[#001E80] font-semibold">25 March, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#F1F1F1]/50">
                  <span className="font-medium">Registration:</span>
                  <span className="text-[#001E80] font-semibold">25 March, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Conference Date:</span>
                  <span className="text-[#001E80] font-semibold">10th-11th April, 2026</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-[#001E80] to-[#183EC2] rounded-2xl p-6 sm:p-8 text-white">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Copy Right Form CRC</h3>
                  <p className="text-white/90">Download and submit the copyright form</p>
                </div>
                <button className="bg-white text-[#001E80] px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-white/90 transition-colors">
                  Download CRC Form
                  <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Important Note */}
          <motion.div 
            variants={itemVariants}
          >
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Important Notice</h4>
                  <p className="text-amber-700">
                    <strong>No Paper To Have More Than 5 Authors</strong> - Please ensure your paper complies with this requirement during submission.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};