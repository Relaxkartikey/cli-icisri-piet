"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

// Using direct public path instead of import
const ktlogo = "/assets/ktlogo.png";

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
      title: "Responsive Design",
      description: "Our components are fully responsive and work seamlessly across all device sizes, providing a consistent experience.",
      icon: <IconCode className="h-6 w-6 text-neutral-500" />,
      image: ktlogo,
      index: 0
    },
    {
      title: "Powerful Analytics",
      description: "Gain insights into user behavior with comprehensive analytics tools designed for data-driven decisions.",
      icon: <IconDatabase className="h-6 w-6 text-neutral-500" />,
      image: ktlogo,
      index: 1
    },
    {
      title: "Seamless Integration",
      description: "Easily integrate with your existing tools and workflows with our extensive API and plugin ecosystem.",
      icon: <IconSettings className="h-6 w-6 text-neutral-500" />,
      image: ktlogo,
      index: 2
    },
    {
      title: "Optimized Performance",
      description: "Built with performance in mind for lightning-fast experiences that keep your users engaged on your platform.",
      icon: <IconRocket className="h-6 w-6 text-neutral-500" />,
      image: ktlogo,
      index: 3
    },
    {
      title: "Developer Friendly",
      description: "Built with TypeScript and modern tools for a great developer experience and easy extensibility.",
      icon: <IconBrandGithub className="h-6 w-6 text-neutral-500" />,
      image: ktlogo,
      index: 4
    },
    {
      title: "Cloud Deployment",
      description: "Deploy your applications to the cloud with just a few clicks and scale effortlessly as your user base grows.",
      icon: <IconCloud className="h-6 w-6 text-neutral-500" />,
      image: ktlogo,
      index: 5
    },
  ];

  return (
    <section className="bg-white py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Modern Design System</div>
          </div>

          <h2 className="section-title mt-5">Discover our key features</h2>
          <p className="section-des mt-5">
            Our platform provides powerful capabilities to help you build, scale, and succeed with your SaaS business.
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
                <div className="w-full h-full flex flex-col">
                  <div className="relative overflow-hidden">                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full"
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={500}
                        height={176}
                        className="w-full h-44 object-cover rounded-t-3xl"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center">
                      <div className="bg-[#F8FAFF] p-2 rounded-lg mr-3">{feature.icon}</div>
                      <div className="font-medium tracking-tight leading-6 text-[#010D3E]">
                        {feature.title}
                      </div>
                    </div>
                    <div className="text-sm text-[#010D3E]/80 mt-4 flex-grow">
                      {feature.description}
                    </div>
                    <motion.div
                      className="mt-5 text-sm font-medium text-[#001E80] flex items-center"
                      initial={{ opacity: 0.8 }}
                      whileHover={{
                        opacity: 1,
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      Learn more
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1"
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}