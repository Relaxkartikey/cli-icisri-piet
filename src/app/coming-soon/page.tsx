"use client";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function ComingSoon() {
  return (
    <div>
      <Header />
      
      <section className="min-h-[85vh] flex items-center justify-center bg-white">
        <div className="text-center">
          {/* React Icon */}
          <motion.div
            className="mb-8"
            animate={{ 
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <FaReact className="w-24 h-24 text-[#001E80] mx-auto" />
          </motion.div>

          {/* Coming Soon Text */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-[#010D3E] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Coming Soon
          </motion.h1>

          <motion.p 
            className="text-[#010D3E]/70 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            We're working on something amazing!
          </motion.p>

          {/* Back to Home Button */}
          <motion.a
            href="/"
            className="bg-gradient-to-r from-[#001E80] to-[#183EC2] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}