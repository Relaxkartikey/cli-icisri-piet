"use client";
import { motion } from "framer-motion";

export const MapSection = () => (
  <section className="py-24 bg-gradient-to-b from-white to-[#EAEDF2]">
    <div className="container">
      <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">Location</div>
        </div>
        <h2 className="section-title mt-5">Find Us</h2>
        <p className="section-des mt-5">
          PIET is conveniently located in the RIICO Institutional Area, Sitapura, making it easily accessible from all parts of Jaipur.
        </p>
      </div>

      <motion.div
        className="mt-16 rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-[#F1F1F1]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1234567890123!2d75.8!3d26.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4c0e0e0e0e0%3A0x1234567890abcdef!2sPoornima%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </motion.div>
    </div>
  </section>
);
