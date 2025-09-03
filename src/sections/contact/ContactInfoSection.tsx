"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export const ContactInfoSection = () => (
  <section className="py-24 bg-white">
    <div className="container">
      <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">Conference Information</div>
        </div>
        <h2 className="section-title mt-5">Contact Details</h2>
        <p className="section-des mt-5">
          Get in touch with our conference organizing committee for any questions or assistance you may need.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Location Card */}
        <motion.div
          className="bg-gradient-to-br from-white to-[#FAFBFF] rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] p-8 text-center hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0, duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#001E80] to-[#183EC2] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaMapMarkerAlt className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-[#010D3E] mb-4">Conference Venue</h3>
          <p className="text-base text-[#010D3E]/80 leading-relaxed">
            Poornima Institute of Engineering & Technology
            <br />
            ISI-2, RIICO Institutional Area
            <br />
            Sitapura, Jaipur - 302022
            <br />
            Rajasthan, India
          </p>
        </motion.div>

        {/* Email Card */}
        <motion.div
          className="bg-gradient-to-br from-white to-[#FAFBFF] rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] p-8 text-center hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#001E80] to-[#183EC2] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaEnvelope className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-[#010D3E] mb-4">Email Address</h3>
          <p className="text-base text-[#010D3E]/80 mb-4">
            For all conference related inquiries:
          </p>
          <a 
            href="mailto:icisri@poornima.org" 
            className="text-[#001E80] hover:text-[#183EC2] font-medium transition-colors"
          >
            icisri@poornima.org
          </a>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          className="bg-gradient-to-br from-white to-[#FAFBFF] rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] p-8 text-center hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#001E80] to-[#183EC2] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaPhone className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-[#010D3E] mb-4">Phone Number</h3>
          <p className="text-base text-[#010D3E]/80 mb-4">
            Call us for immediate assistance:
          </p>
          <a 
            href="tel:+919785487195" 
            className="text-[#001E80] hover:text-[#183EC2] font-medium transition-colors"
          >
            +91-9785487195
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);
