"use client";
import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";

export const FAQSection = () => (
  <section className="py-24 bg-white">
    <div className="container">
      <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">Support</div>
        </div>
        <h2 className="section-title mt-5">Frequently Asked Questions</h2>
        <p className="section-des mt-5">
          Find quick answers to common questions about ICISRI-2024. Can&apos;t find what you&apos;re looking for? Contact us directly.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          {
            question: "How do I submit my research paper?",
            answer: "Paper submissions can be made through our online submission portal. Please ensure your paper follows the conference format guidelines and submission deadlines."
          },
          {
            question: "What are the registration fees?",
            answer: "Registration fees vary based on participant category (student, faculty, industry professional). Early bird discounts are available until the specified deadline."
          },
          {
            question: "Is accommodation arranged by the conference?",
            answer: "We provide a list of recommended hotels and accommodation options near the venue. Participants need to make their own booking arrangements."
          },
          {
            question: "What topics are covered in the conference?",
            answer: "ICISRI-2024 covers IoT applications, semiconductor research, robotics, automation, cloud computing, cyber forensics, and high-performance computing."
          }
        ].map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] p-8 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#001E80] to-[#183EC2] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <FaQuestionCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#010D3E]">{faq.question}</h3>
            </div>
            <p className="text-base text-[#010D3E]/80 leading-relaxed ml-14">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
