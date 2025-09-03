"use client";
import { motion } from "framer-motion";
import { FaClipboardList, FaCamera, FaClock } from "react-icons/fa";

export const GuidelinesSection = () => (
  <section className="py-24 bg-white">
    <div className="container">
      <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">Best Practices</div>
        </div>
        <h2 className="section-title mt-5">Reporting Guidelines</h2>
        <p className="section-des mt-5">
          Follow these guidelines to help us understand and resolve your issue as quickly as possible.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: FaClipboardList,
            title: "Be Specific",
            description: "Provide detailed descriptions including steps to reproduce issues, browser information, and specific page URLs when applicable.",
            color: "#DC2626"
          },
          {
            icon: FaCamera,
            title: "Include Evidence",
            description: "Screenshots, error messages, or videos help us understand and resolve issues more quickly and accurately.",
            color: "#2563EB"
          },
          {
            icon: FaClock,
            title: "Response Time",
            description: "We aim to acknowledge reports within 24 hours and provide updates on critical issues within 48 hours.",
            color: "#059669"
          }
        ].map((guideline, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-white to-[#FAFBFF] rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] p-8 text-center hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${guideline.color}15` }}>
              <guideline.icon className="w-8 h-8" style={{ color: guideline.color }} />
            </div>
            <h3 className="text-xl font-bold text-[#010D3E] mb-4">{guideline.title}</h3>
            <p className="text-base text-[#010D3E]/80 leading-relaxed">{guideline.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
