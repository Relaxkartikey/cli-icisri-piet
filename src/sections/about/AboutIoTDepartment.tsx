"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Using direct public path following existing pattern
const ktlogoPath = "/assets/ktlogo.png";
const arrowRightPath = "/assets/arrow-right.svg";

export const AboutIoTDepartment = () => {
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
    hidden: { opacity: 0, x: 30 },
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
    <section className="py-24 bg-gradient-to-b from-white to-[#EAEDF2]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 mt-16 px-4 max-w-7xl mx-auto items-start">
          {/* Content Section */}
          <motion.div
            className="lg:w-[65%] order-2 lg:order-1"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#010D3E] mb-4">
              About Department of Internet of Things (IoT)<br />
              <span className="text-lg font-medium text-[#001E80]">Poornima Institute of Engineering & Technology</span>
            </h3>
            <div className="text-[#010D3E]/80 leading-relaxed mb-4 space-y-4 text-justify">
              <p>
                The Department of Internet of Things (IoT) at Poornima Institute of Engineering and Technology was established in session 2023-24 with a visionary goal to cultivate a dynamic ecosystem where innovation and technological advancements converge to shape the technocrats and innovators of tomorrow who work in collaborative domains of Computer Engineering, Electronics & communication and leading to creating IoT based solutions for ease of life for society.
              </p>
              <p>
                The department offers B.Tech Computer Science & Engineering (IoT) program with an intake of 60 seats, duly approved by AICTE and affiliated to Rajasthan Technical University. With a faculty comprising dedicated mentors, a substantial percentage holding Ph.D. degrees, and state-of-the-art infrastructure, we've consistently attracted bright minds from both within the state and beyond.
              </p>
              <p>
                Through initiatives like project exhibitions and international conferences, we will provide a platform for students to showcase their innovative projects and engage in research endeavors. Furthermore, our department fosters a culture of continuous learning and skill development through workshops, technical seminars, and industry partnerships, ensuring our students are well-equipped for the challenges of the digital age.
              </p>
            </div>
            <button className="mt-6 text-[#001E80] font-medium inline-flex items-center hover:opacity-80 transition-opacity">
              Read More
              <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2" />
            </button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-[35%] flex items-start justify-end order-1 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-[#F1F1F1] w-full max-w-[400px]">
              <Image
                src={ktlogoPath}
                alt="IoT Department"
                width={400}
                height={280}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
