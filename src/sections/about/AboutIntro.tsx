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

export const AboutIntro = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

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
    <section className="py-24 bg-gradient-to-b from-white to-[#EAEDF2]">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">About</div>
          </div>
          
          <h2 className="section-title mt-5">
            Introduction
          </h2>
          <p className="section-des mt-5">
						 2nd International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT
					</p>
        </div>
        
        <motion.div
          className="mt-16 max-w-6xl mx-auto px-4"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-[#010D3E]/80 leading-relaxed text-lg text-justify space-y-6">
            <p>
              The International Conference on Intelligent Systems using Semiconductors for Robotics and IoT (ICSRI) is a premier event uniting experts in academia and industry to explore cutting-edge advancements in intelligent systems, semiconductor technology, robotics, and the Internet of Things (IoT). With a focus on integrating intelligent systems with semiconductor tech for robotics and IoT, ICSRI covers diverse topics such as semiconductor devices, intelligent control systems, robotics, IoT architectures, edge computing, and human-robot interaction.
            </p>
            
            <p>
              ICSRI serves as a platform for researchers to present their findings, share insights, and engage in discussions on topics crucial to the development of intelligent systems. From the latest semiconductor materials and fabrication processes to advanced control algorithms and machine learning techniques, participants delve into innovations driving autonomy, adaptability, and intelligence in robotics and IoT.
            </p>
            
            <p>
              Robotic applications across industries like manufacturing, healthcare, and agriculture are explored, alongside discussions on IoT architectures, communication protocols, security, and applications in smart cities and homes. The conference also delves into embedded systems, edge computing, cyber-physical systems, and the ethical and societal implications of deploying intelligent technologies.
            </p>
            
            <p>
              Through keynote speeches, paper presentations, workshops, and exhibitions, ICSRI fosters interdisciplinary collaboration and innovation, shaping the future of intelligent systems, robotics, and IoT. It provides a vital forum for experts to exchange ideas, forge partnerships, and contribute to the advancement of these rapidly evolving fields.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="mt-20">
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
      </div>
    </section>
  );
};
