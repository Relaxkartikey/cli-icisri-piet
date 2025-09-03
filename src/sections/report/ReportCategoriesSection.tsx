"use client";
import { motion } from "framer-motion";
import { FaBug, FaEdit, FaLightbulb, FaQuestionCircle } from "react-icons/fa";

export const ReportCategoriesSection = () => (
  <section className="py-24 bg-white">
    <div className="container">
      <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">Issue Categories</div>
        </div>
        <h2 className="section-title mt-5">What would you like to report?</h2>
        <p className="section-des mt-5">
          Choose the most appropriate category for your issue to help us process and address it efficiently.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            icon: FaBug,
            title: "Technical Issues",
            description: "Report website bugs, technical problems, or accessibility issues",
            examples: ["Broken links", "Page loading errors", "Mobile responsiveness issues", "Form submission problems"],
            color: "#DC2626"
          },
          {
            icon: FaEdit,
            title: "Content Issues",
            description: "Report incorrect information, typos, or content suggestions",
            examples: ["Factual errors", "Outdated information", "Spelling/grammar mistakes", "Missing information"],
            color: "#2563EB"
          },
          {
            icon: FaLightbulb,
            title: "Conference Feedback",
            description: "Share feedback about the conference organization or suggestions",
            examples: ["Venue suggestions", "Program improvements", "Speaker recommendations", "General feedback"],
            color: "#F59E0B"
          },
          {
            icon: FaQuestionCircle,
            title: "Other Issues",
            description: "Any other concerns or issues not covered above",
            examples: ["Privacy concerns", "Account issues", "Registration problems", "Payment issues"],
            color: "#7C3AED"
          }
        ].map((category, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-white to-[#FAFBFF] rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] p-8 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${category.color}15` }}>
              <category.icon className="w-8 h-8" style={{ color: category.color }} />
            </div>
            <h3 className="text-xl font-bold text-[#010D3E] mb-4">{category.title}</h3>
            <p className="text-base text-[#010D3E]/80 mb-6">{category.description}</p>
            <div className="space-y-3">
              <p className="text-sm font-medium text-[#001E80]">Examples:</p>
              <ul className="space-y-2">
                {category.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex} className="flex items-center text-sm text-[#010D3E]/70">
                    <div className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: category.color }}></div>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
