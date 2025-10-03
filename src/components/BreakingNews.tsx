"use client";
import { useState, useEffect } from "react";

interface NewsItem {
  id: number;
  text: string;
  isImportant?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    text: "🔥 Early Bird Registration Open Until November 30, 2025 - Save 30%!",
    isImportant: true
  },
  {
    id: 2,
    text: "📅 Paper Submission Deadline: January 15, 2026 - Don't Miss Out!"
  },
  {
    id: 3,
    text: "🎯 Call for Papers Now Open - Submit Your Research Today"
  },
  {
    id: 4,
    text: "🌟 ICISRI 2026: International Conference on Innovative Solutions for Real-world IoT - April 11-12, 2026"
  },
  {
    id: 5,
    text: "📍 Venue: Poornima Institute of Engineering & Technology, Jaipur, Rajasthan"
  }
];

export const BreakingNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 4000); // Change news every 4 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentNews = newsItems[currentIndex];

  return (
    <>
      <div className="bg-gradient-to-r from-[#001E80] via-[#183EC2] to-[#2B4BC7] relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
        </div>

        <div className="relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center py-2 sm:py-3">
              {/* Breaking News Label */}
              <div className="flex-shrink-0 mr-3 sm:mr-4">
                <div className="bg-white text-[#001E80] px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-bold flex items-center gap-1 shadow-lg">
                  <div className="w-2 h-2 bg-[#001E80] rounded-full animate-pulse"></div>
                  <span className="hidden sm:inline">Notice</span>
                  <span className="sm:hidden">NEWS</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0 ml-auto mr-2 sm:mr-3 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors text-white text-sm"
                aria-label="Close breaking news"
              >
                ✕
              </button>

              {/* News Content - Animated Container */}
              <div className="flex-1 overflow-hidden mr-2 sm:mr-3">
                <div className="relative h-6 sm:h-7">
                  <div
                    key={currentNews.id}
                    className="absolute inset-0 flex items-center animate-fade-in"
                  >
                    <div className="w-full">
                      <p className={`text-white text-xs sm:text-sm font-medium leading-tight ${
                        currentNews.isImportant ? 'font-bold text-[#FFD23F]' : ''
                      }`}>
                        <span className="inline-block animate-slide-in">
                          {currentNews.text}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* News Indicators */}
              <div className="flex-shrink-0 flex space-x-1">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#FFD23F] scale-110' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Show news ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }
      `}</style>
    </>
  );
};