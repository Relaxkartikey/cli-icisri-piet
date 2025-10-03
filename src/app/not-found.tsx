"use client";
import { motion } from "framer-motion";
import { FaHome, FaFileAlt, FaUsers, FaEnvelope } from "react-icons/fa";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function NotFound() {
  return (
    <div>
      <Header />
      
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Header */}
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-[#001E80] mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-[#010D3E] mb-4">Page Not Found</h2>
              <p className="text-[#010D3E]/70 text-lg">
                The page you&apos;re looking for doesn&apos;t exist. Let us help you find what you need.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <motion.a
                href="/"
                className="bg-gradient-to-br from-[#001E80] to-[#183EC2] text-white p-6 rounded-xl hover:shadow-lg transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHome className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold">Home</div>
              </motion.a>

              <motion.a
                href="/callforpaper"
                className="bg-gradient-to-br from-[#183EC2] to-[#2B4BC7] text-white p-6 rounded-xl hover:shadow-lg transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileAlt className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold">Papers</div>
              </motion.a>

              <motion.a
                href="/committees"
                className="bg-gradient-to-br from-[#2B4BC7] to-[#4A6FE7] text-white p-6 rounded-xl hover:shadow-lg transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUsers className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold">Committee</div>
              </motion.a>

              <motion.a
                href="/contact"
                className="bg-gradient-to-br from-[#4A6FE7] to-[#6B8EF7] text-white p-6 rounded-xl hover:shadow-lg transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold">Contact</div>
              </motion.a>
            </div>

            {/* Back Button */}
            <motion.button
              onClick={() => window.history.back()}
              className="bg-white text-[#001E80] border-2 border-[#001E80] px-6 py-3 rounded-lg font-semibold hover:bg-[#F8FAFF] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Go Back
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}