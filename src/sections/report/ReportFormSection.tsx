"use client";
import { motion } from "framer-motion";
import { FaClipboardList, FaEnvelope } from "react-icons/fa";

export const ReportFormSection = () => (
  <section className="py-24 bg-gradient-to-b from-white to-[#EAEDF2]">
    <div className="container">
      <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">Submit Report</div>
        </div>
        <h2 className="section-title mt-5">Report Form</h2>
        <p className="section-des mt-5">
          Our comprehensive reporting system will be available here soon with advanced features for better issue tracking.
        </p>
      </div>

      <motion.div
        className="mt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#001E80] to-[#183EC2] rounded-3xl flex items-center justify-center mx-auto mb-8">
            <FaClipboardList className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#010D3E] mb-6">Coming Soon: Advanced Report Form</h3>
          <p className="text-lg text-[#010D3E]/80 mb-8 max-w-2xl mx-auto">
            We&apos;re building a comprehensive reporting system that will make it easy to submit detailed reports 
            with all the information we need to help you quickly.
          </p>
          
          <div className="bg-gradient-to-br from-[#F8FAFF] to-[#E6ECFF] rounded-2xl p-8 mb-8">
            <h4 className="text-xl font-semibold text-[#010D3E] mb-6">Upcoming Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                "File attachments support",
                "Screenshot upload capability", 
                "Priority level selection",
                "Automatic issue tracking",
                "Email notifications",
                "Real-time status updates"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-[#010D3E]/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#F1F1F1] pt-8">
            <h4 className="text-lg font-semibold text-[#010D3E] mb-6">Need to Report Something Now?</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:icisri@poornima.org"
                className="bg-gradient-to-r from-[#001E80] to-[#183EC2] text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="w-5 h-5 mr-2" />
                Email Us Directly
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-white text-[#001E80] border-2 border-[#001E80] px-8 py-4 rounded-xl font-medium hover:bg-[#F8FAFF] transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Contact Page
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
