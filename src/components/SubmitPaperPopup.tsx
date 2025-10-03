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
    { event: "Paper Submission", date: "10 March, 2026" },
    { event: "Notification", date: "20 March, 2026" },
    { event: "Camera Ready", date: "25 March, 2026" },
    { event: "Registration", date: "25 March, 2026" },
    { event: "Conference", date: "10-11 April, 2026" }
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
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 max-h-[95vh] flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#001E80] to-[#183EC2] text-white p-4 sm:p-5 rounded-t-2xl relative flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>
              
              <div className="flex items-center gap-3 pr-8">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaFileAlt className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Submit Your Paper</h2>
                  <p className="text-white/90 text-sm mt-0.5">Join ICISRI 2026 - Share Your Research</p>
                </div>
              </div>
            </div>

            {/* Content - Scrollable if needed */}
            <div className="p-4 sm:p-5 space-y-5 flex-grow overflow-y-auto">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Important Dates */}
                <div className="bg-gradient-to-br from-[#F8FAFF] to-[#E6ECFF] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FaClock className="w-4 h-4 text-[#001E80]" />
                    <h3 className="text-base font-semibold text-[#010D3E]">Important Dates</h3>
                  </div>
                  <div className="space-y-2">
                    {importantDates.map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-xs">
                        <span className="text-[#010D3E]/80">{item.event}:</span>
                        <span className="text-[#001E80] font-medium">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submission Steps */}
                <div className="bg-gradient-to-br from-white to-[#FAFBFF] rounded-xl p-4 border border-[#F1F1F1]">
                  <div className="flex items-center gap-2 mb-3">
                    <FaUpload className="w-4 h-4 text-[#001E80]" />
                    <h3 className="text-base font-semibold text-[#010D3E]">Submission Process</h3>
                  </div>
                  <div className="space-y-2">
                    {submissionSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-5 h-5 bg-[#001E80] text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-[#010D3E]/80 text-xs leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="bg-[#F8FAFF] rounded-lg p-3 border border-[#E1E7FF]">
                <p className="text-center text-[#010D3E]/70 text-xs">
                  <span className="font-medium text-[#001E80]">Note:</span> All papers will be peer-reviewed. 
                  Accepted papers will be published in CRC Press & UGC Care Listed Journal.
                </p>
              </div>
            </div>

            {/* Action Buttons - Fixed at bottom */}
            <div className="flex flex-col sm:flex-row gap-3 p-4 sm:p-5 pt-0 flex-shrink-0">
              <button className="flex-1 bg-gradient-to-r from-[#001E80] to-[#183EC2] text-white px-4 py-3 rounded-lg font-semibold hover:shadow-[0_6px_20px_rgba(0,30,128,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm">
                Submit Paper Now
                <Image src={arrowRightPath} alt="Arrow right" width={14} height={14} className="h-3.5 w-3.5 filter invert" />
              </button>
              <button 
                onClick={onClose}
                className="flex-1 bg-white text-[#001E80] border-2 border-[#001E80] px-4 py-3 rounded-lg font-semibold hover:bg-[#F8FAFF] transition-all duration-300 text-sm"
              >
                View Guidelines
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
