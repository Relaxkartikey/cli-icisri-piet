"use client";
import { motion } from "framer-motion";
import { FaUniversity, FaCreditCard, FaGlobe, FaUsers } from "react-icons/fa";

export const AccountDetails = () => {
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

  const accountDetails = [
    {
      label: "Account Name",
      value: "POORNIMA INSTITUTE PART TWO",
      icon: FaUniversity
    },
    {
      label: "Account Number",
      value: "50200067728688",
      icon: FaCreditCard
    },
    {
      label: "Bank",
      value: "HDFC BANK LTD. F-129 RIICO INDUSTRIAL AREA SITAPURA JAIPUR",
      icon: FaUniversity
    },
    {
      label: "IFSC Code",
      value: "HDFC0003873",
      icon: FaCreditCard
    },
    {
      label: "SWIFT Code",
      value: "HDFCINBBXXX",
      icon: FaGlobe
    }
  ];

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
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#010D3E] mb-4">
              Account Details
            </h2>
            <p className="text-[#010D3E]/80 text-lg max-w-3xl mx-auto">
              Use the following bank account details to make your conference registration payment
            </p>
          </motion.div>

          {/* Account Details Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            variants={itemVariants}
          >
            {accountDetails.map((detail, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-[#F8FAFF] rounded-2xl p-6 shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#001E80]/10 rounded-xl flex items-center justify-center">
                    <detail.icon className="w-6 h-6 text-[#001E80]" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-[#010D3E] mb-2">{detail.label}</h4>
                    <p className="text-[#001E80] font-mono text-sm sm:text-base break-all">
                      {detail.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}\n          </motion.div>

          {/* Payment Instructions */}
          <motion.div 
            className="bg-gradient-to-br from-[#001E80] to-[#183EC2] rounded-2xl p-6 sm:p-8 text-white mb-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <FaCreditCard className="w-6 h-6" />
              Payment Instructions
            </h3>
            <div className="space-y-3 text-white/90">
              <p>• Transfer the registration fee to the above mentioned bank account</p>
              <p>• Keep the transaction receipt for verification purposes</p>
              <p>• Email the payment proof along with your registration details</p>
              <p>• Registration will be confirmed only after payment verification</p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8"
            variants={itemVariants}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                <FaUsers className="w-3 h-3 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-emerald-800 mb-2">Need Help with Registration?</h4>
                <p className="text-emerald-700 mb-3">
                  For any queries regarding registration, payment, or technical issues, please contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="mailto:icisri@poornima.org"
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-center"
                  >
                    Email Support
                  </a>
                  <a 
                    href="/contact"
                    className="bg-white text-emerald-600 border border-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors text-center"
                  >
                    Contact Page
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};