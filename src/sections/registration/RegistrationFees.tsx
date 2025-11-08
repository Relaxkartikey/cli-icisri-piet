"use client";
import { motion } from "framer-motion";

export const RegistrationFees = () => {
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

  const registrationData = [
    {
      category: "Faculty Member (ACM/IEEE/FIP)",
      earlyBird: "INR 9000",
      lateReg: "INR 9500"
    },
    {
      category: "Faculty (ACM/IEEE/FIP) With International co-Author",
      earlyBird: "INR 8000",
      lateReg: "INR 8500"
    },
    {
      category: "Faculty International Author and Member (ACM/IEEE/FIP)",
      earlyBird: "$124",
      lateReg: "$174"
    },
    {
      category: "Faculty Non-Member (ACM/IEEE/FIP)",
      earlyBird: "INR 10000",
      lateReg: "INR 10500"
    },
    {
      category: "Faculty Non-Member (ACM/IEEE/FIP) with international co-Author",
      earlyBird: "INR 9000",
      lateReg: "INR 9500"
    },
    {
      category: "International Author Non-Member (ACM/IEEE/FIP)",
      earlyBird: "$174",
      lateReg: "$224"
    },
    {
      category: "Corporate/Industry Professional",
      earlyBird: "INR 11000",
      lateReg: "INR 11500"
    },
    {
      category: "PhD Student",
      earlyBird: "INR 8000",
      lateReg: "INR 8500"
    },
    {
      category: "PG/UG Student",
      earlyBird: "INR 7000",
      lateReg: "INR 7500"
    },
    {
      category: "Attendee",
      earlyBird: "INR 3000",
      lateReg: "INR 3500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-[#EAEDF2]">
      <div className="container">
        <motion.div
          className="max-w-6xl mx-auto"
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
              Registration Fees
            </h2>
            <p className="text-[#010D3E]/80 text-lg max-w-3xl mx-auto">
              Registration Fees Details For Conference Registration the Author can pay the corresponding fees in the following Bank Account:
            </p>
          </motion.div>

          {/* Registration Table */}
          <motion.div 
            className="bg-white rounded-2xl shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1] overflow-hidden"
            variants={itemVariants}
          >
            {/* Table Header */}
            <div className="bg-gradient-to-r from-[#001E80] to-[#183EC2] text-white p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="font-semibold text-lg">CATEGORY</div>
                <div className="font-semibold text-lg text-center">Early Bird</div>
                <div className="font-semibold text-lg text-center">Late Reg</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-[#F1F1F1]">
              {registrationData.map((row, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-6 hover:bg-[#F8FAFF] transition-colors"
                >
                  <div className="font-medium text-[#010D3E]">
                    {row.category}
                  </div>
                  <div className="text-[#001E80] font-semibold text-center md:text-center">
                    {row.earlyBird}
                  </div>
                  <div className="text-[#001E80] font-semibold text-center md:text-center">
                    {row.lateReg}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Registration Note */}
          <motion.div 
            className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8"
            variants={itemVariants}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm font-bold">i</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Registration Information</h4>
                <p className="text-blue-700">
                  Early Bird rates are available until <strong>28 Feb, 2026</strong>. 
                  Late registration fees apply after this date. All fees are inclusive of conference materials, meals, and proceedings.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};