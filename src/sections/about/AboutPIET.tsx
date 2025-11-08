"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Using direct public path following existing pattern
const ktlogoPath = "/assets/ktlogo.png";
const arrowRightPath = "/assets/arrow-right.svg";
const pic9 = "/assets/confg/pic9.webp";

export const AboutPIET = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 mt-16 px-4 max-w-7xl mx-auto items-start">
          {/* Image Section */}
          <motion.div
            className="lg:w-[35%] flex items-start justify-start"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-[#F1F1F1] w-full max-w-[400px]">
              <Image
                src={pic9}
                alt="PIET Institute"
                width={400}
                height={280}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="lg:w-[65%]"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#010D3E] mb-4">
              About Poornima Institute of Engineering & Technology
            </h3>
            <div className="text-[#010D3E]/80 leading-relaxed mb-4 space-y-4 text-justify">
              <p>
                Poornima Institute of Engineering & Technology (PIET) in Jaipur, established in 2007, is a leading institution in engineering education. Affiliated with Rajasthan Technical University and approved by AICTE, it offers six specializations in undergraduate engineering: B.Tech in CSE, AI & DS, CS(R), CS (AI), CS (DS), and CS (IoT).
              </p>
              <p>
                Noteworthy achievements include being ranked 4th in the annual QIV ranking for 2022-23 by Rajasthan Technical University, and being the first institution in India to offer B.Tech CSE in a regional language under NEP 2020. Accredited by NAAC and NBA, PIET is recognized for its strong industry links, with accolades such as a Platinum rating from AICTE-CII and Diamond rating from QS-iGauge.
              </p>
              <p>
                It boasts specialized labs supported by AICTE and industry funding, including the first IDEA Lab in Rajasthan. PIET emphasizes research, with over 200 SCI & Scopus indexed publications in the last five years, and significant research grants and patents. With a focus on entrepreneurship, its Poornima Business Incubation Cell has nurtured over 25 startups, with 12 registered with government agencies. Additionally, PIET achieves a high placement rate of over 80% with reputed industries, with an average package of Rs. 5.5 lakh per annum.
              </p>
            </div>
            <a 
              href="https://piet.poornima.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 text-[#001E80] font-medium inline-flex items-center hover:opacity-80 transition-opacity"
            >
              Read More
              <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
