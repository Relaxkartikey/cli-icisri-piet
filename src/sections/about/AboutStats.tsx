"use client";
import { motion } from "framer-motion";

const stats = [
  {
    number: "6",
    label: "Conference Tracks",
    description: "Specialized research areas",
    id: 1
  },
  {
    number: "4",
    label: "Keynote Speakers",
    description: "Industry experts",
    id: 2
  },
  {
    number: "2",
    label: "Conference Days",
    description: "Packed with sessions",
    id: 3
  },
  {
    number: "4",
    label: "Partner Organizations",
    description: "National & International",
    id: 4
  }
];

export const AboutStats = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * index,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 30, 128, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#EAEDF2]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="card p-8 text-center bg-white rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA]"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#001E80] mb-3">
                {stat.number}
              </div>
              <div className="text-[#010D3E] font-medium text-sm md:text-base leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
