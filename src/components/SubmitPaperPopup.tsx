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
    { event: "Paper Submission Start", date: "10 Nov, 2025" },
    { event: "Paper Submission Deadline", date: "28 Feb, 2026" },
    { event: "Notification of Acceptance", date: "25 March, 2026" },
    { event: "Camera Ready Paper", date: "07 April, 2026" },
    { event: "Registration", date: "07 April, 2026" },
    { event: "Conference", date: "08-09 May, 2026" }
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] sm:max-h-[95vh] flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#001E80] to-[#183EC2] text-white p-3 sm:p-5 rounded-t-2xl relative flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-7 sm:h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <FaTimes className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
              </button>
              
              <div className="flex items-center gap-2 sm:gap-3 pr-10 sm:pr-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaFileAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">Submit Your Paper</h2>
                  <p className="text-white/90 text-xs sm:text-sm mt-0.5">Join ICISRI 2026 - Share Your Research</p>
                </div>
              </div>
            </div>

            {/* Content - Scrollable if needed */}
            <div className="p-3 sm:p-5 space-y-3 sm:space-y-5 flex-grow overflow-y-auto">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {/* Important Dates */}
                <div className="bg-gradient-to-br from-[#F8FAFF] to-[#E6ECFF] rounded-xl p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <FaClock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#001E80] flex-shrink-0" />
                    <h3 className="text-sm sm:text-base font-semibold text-[#010D3E]">Important Dates</h3>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    {importantDates.map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-xs gap-2">
                        <span className="text-[#010D3E]/80 flex-shrink-0">{item.event}:</span>
                        <span className="text-[#001E80] font-medium text-right">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submission Steps */}
                <div className="bg-gradient-to-br from-white to-[#FAFBFF] rounded-xl p-3 sm:p-4 border border-[#F1F1F1]">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <FaUpload className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#001E80] flex-shrink-0" />
                    <h3 className="text-sm sm:text-base font-semibold text-[#010D3E]">Submission Process</h3>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    {submissionSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 bg-[#001E80] text-white rounded-full flex items-center justify-center text-[10px] sm:text-xs font-medium flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-[#010D3E]/80 text-xs leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="bg-[#F8FAFF] rounded-lg p-2.5 sm:p-3 border border-[#E1E7FF]">
                <p className="text-center text-[#010D3E]/70 text-[10px] sm:text-xs leading-relaxed">
                  <span className="font-medium text-[#001E80]">Note:</span> All papers will be peer reviewed. 
                  Accepted papers will be published in AIP Proceedings - Scopus Indexed (Approval pending)
                </p>
              </div>
            </div>

            {/* Action Buttons - Fixed at bottom */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-3 sm:p-5 pt-0 flex-shrink-0">
              <a
                href="/coming-soon"
                className="flex-1 bg-gradient-to-r from-[#001E80] to-[#183EC2] text-white px-4 py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-[0_6px_20px_rgba(0,30,128,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-xs sm:text-sm"
              >
                Submit Paper Now
                <Image src={arrowRightPath} alt="Arrow right" width={14} height={14} className="h-3 w-3 sm:h-3.5 sm:w-3.5 filter invert" />
              </a>
              <a
                href="/callforpaper"
                onClick={onClose}
                className="flex-1 bg-white text-[#001E80] border-2 border-[#001E80] px-4 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#F8FAFF] transition-all duration-300 text-xs sm:text-sm text-center"
              >
                View Guidelines
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
