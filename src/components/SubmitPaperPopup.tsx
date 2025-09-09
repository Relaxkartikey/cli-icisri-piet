"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaFileAlt, FaClock, FaUpload } from "react-icons/fa";
import Image from "next/image";

const arrowRightPath = "/assets/arrow-right.svg";

interface SubmitPaperPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitPaperPopup = ({ isOpen, onClose }: SubmitPaperPopupProps) => {

  const importantDates = [
    { event: "Paper Submission", date: "30 Oct, 2025" },
    { event: "Notification", date: "5 Nov, 2025" },
    { event: "Camera Ready", date: "8 Nov, 2025" },
    { event: "Registration", date: "8 Nov, 2025" },
    { event: "Conference", date: "29-30 Nov, 2025" }
  ];

  const submissionSteps = [
    "Prepare your research paper (6-8 pages)",
    "Follow IEEE conference format",
    "Submit via online portal",
    "Await review notification"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#001E80] to-[#183EC2] text-white p-6 rounded-t-3xl relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaFileAlt className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Submit Your Paper</h2>
                  <p className="text-white/90 mt-1">Join ICISRI 2025 - Share Your Research</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Quick Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Important Dates */}
                <div className="bg-gradient-to-br from-[#F8FAFF] to-[#E6ECFF] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FaClock className="w-5 h-5 text-[#001E80]" />
                    <h3 className="text-lg font-semibold text-[#010D3E]">Important Dates</h3>
                  </div>
                  <div className="space-y-3">
                    {importantDates.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-[#010D3E]/80 text-sm">{item.event}:</span>
                        <span className="text-[#001E80] font-medium text-sm">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submission Steps */}
                <div className="bg-gradient-to-br from-white to-[#FAFBFF] rounded-2xl p-6 border border-[#F1F1F1]">
                  <div className="flex items-center gap-3 mb-4">
                    <FaUpload className="w-5 h-5 text-[#001E80]" />
                    <h3 className="text-lg font-semibold text-[#010D3E]">Submission Process</h3>
                  </div>
                  <div className="space-y-3">
                    {submissionSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#001E80] text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-[#010D3E]/80 text-sm leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex-1 bg-gradient-to-r from-[#001E80] to-[#183EC2] text-white px-6 py-4 rounded-xl font-semibold hover:shadow-[0_8px_25px_rgba(0,30,128,0.3)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Submit Paper Now
                  <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 filter invert" />
                </button>
                <button 
                  onClick={onClose}
                  className="flex-1 bg-white text-[#001E80] border-2 border-[#001E80] px-6 py-4 rounded-xl font-semibold hover:bg-[#F8FAFF] transition-all duration-300"
                >
                  View Full Guidelines
                </button>
              </div>

              {/* Footer Note */}
              <div className="bg-[#F8FAFF] rounded-xl p-4 border border-[#E1E7FF]">
                <p className="text-center text-[#010D3E]/70 text-sm">
                  <span className="font-medium text-[#001E80]">Note:</span> All papers will be peer-reviewed. 
                  Accepted papers will be published in CRC Press (Taylor & Francis) & UGC Care Listed Journal (IJTE).
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
