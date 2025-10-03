"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IoCloudOutline } from "react-icons/io5";
import { FaRobot, FaLaptopCode, FaNetworkWired } from "react-icons/fa";
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { HiOutlineServer } from "react-icons/hi";

const arrowRightPath = "/assets/arrow-right.svg";

function IconCode({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 18 22 12 16 6M8 6 2 12 8 18" />
    </svg>
  );
}

function IconDatabase({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function IconSettings({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1-1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconRocket({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconBrandGithub({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function IconCloud({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

export function BentoGridSection() {
  const features = [
    {
      title: "Internet of Things",
      description: "The interconnection via the Internet of computing devices embedded in everyday objects, enabling them to send and receive data.",
      icon: <GiArtificialIntelligence className="h-8 w-8 text-[#001E80]" />,
      index: 0
    },
    {
      title: "Robotics",
      description: "Robotics is an interdisciplinary research area at the interface of computer science and engineering.",
      icon: <FaRobot className="h-8 w-8 text-[#001E80]" />,
      index: 1
    },
    {
      title: "Automation",
      description: "Automation, or labor-saving technology is the technology by which a process or procedure is performed with minimal human assistance.",
      icon: <MdOutlineAutoFixHigh className="h-8 w-8 text-[#001E80]" />,
      index: 2
    },
    {
      title: "Cloud Computing",
      description: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.",
      icon: <IoCloudOutline className="h-8 w-8 text-[#001E80]" />,
      index: 3
    },
    {
      title: "Computational Intelligence ",
      description: "Computer forensics is a branch of digital forensic science pertaining to evidence found in computers and digital storage media.",
      icon: <FaLaptopCode className="h-8 w-8 text-[#001E80]" />,
      index: 4
    },
    {
      title: "High Performance Computing",
      description: "High Performance Computing most generally refers to the practice of aggregating computing power in a way that delivers much higher performance than one could get out of a typical desktop computer.",
      icon: <HiOutlineServer className="h-8 w-8 text-[#001E80]" />,
      index: 5
    },
  ];

  return (
    <section className="bg-white py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Research Conference</div>
          </div>

          <h2 className="section-title mt-5">Topics @ ICISRI-2026</h2>
          <p className="section-des mt-5">
            Explore the key technology domains and research areas that will be covered at the International Conference on Innovations in Semiconductor Research and IoT.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                className="card p-0 overflow-hidden rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] bg-white h-full"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                custom={feature.index}
              >
                <div className="w-full h-full flex flex-col p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#F8FAFF] p-4 rounded-xl mr-4 shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="font-semibold tracking-tight leading-6 text-lg text-[#010D3E]">
                      {feature.title}
                    </div>
                  </div>
                  <div className="text-base text-[#010D3E]/80 mt-2 flex-grow">
                    {feature.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Read More Button */}
          <div className="flex justify-center mt-8">
            <Link href="/about">
              <motion.div
                className="bg-[#001E80] text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-[#001E80]/90 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span>Read more</span>
                <Image
                  src={arrowRightPath}
                  alt="arrow right"
                  width={16}
                  height={16}
                  className="h-4 w-4 ml-2 filter invert"
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}