"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Using direct public paths
const ktlogoPath = "/assets/ktlogo.png";
const arrowRightPath = "/assets/arrow-right.svg";

// Feature card data
const featureCards = [
	{
		id: 1,
		title: "Research & Innovation",
		description:
			"Pioneering research in emerging technologies and methodologies for industry applications.",
		icon: "cog",
	},
	{
		id: 2,
		title: "Global Collaboration",
		description:
			"Building partnerships with leading institutions and researchers worldwide.",
		icon: "star",
	},
	{
		id: 3,
		title: "Knowledge Sharing",
		description:
			"Facilitating the exchange of ideas through publications, conferences, and workshops.",
		icon: "spring",
	},
	{
		id: 4,
		title: "Industry Solutions",
		description:
			"Developing practical applications and solutions for real-world challenges.",
		icon: "tube",
	},
];

export const IntroductionSection = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	// Animation variants
	const fadeInUpVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1 * index,
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		}),
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

	const cardVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: (index: number) => ({
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.15 * index,
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		}),
		hover: {
			y: -5,
			boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 20,
			},
		},
	};

	return (
		<section className="py-24 bg-gradient-to-b from-white to-[#EAEDF2]">
			<div className="container">
				<div className="section-heading">
					<div className="flex justify-center">
						<div className="tag">About Us</div>
					</div>

					<h2 className="section-title mt-5">Introduction</h2>
					<p className="section-des mt-5">
						Learn more about our mission, vision, and the impact we&#39;re making
						in the field.
					</p>
				</div>

				{/* Main content with image */}
				<div className="flex flex-col lg:flex-row gap-10 mt-16 px-4 max-w-7xl mx-auto">
					<motion.div
						className="lg:w-[70%]"
						variants={fadeInUpVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						custom={0}
					>
						<h3 className="text-2xl font-semibold text-[#010D3E] mb-4">
							Advancing Research and Technology
						</h3>
						<p className="text-[#010D3E]/80 leading-relaxed mb-4">
							We are dedicated to advancing the frontiers of knowledge in various
							fields through innovative research, collaborative projects, and
							industry partnerships. Our multidisciplinary approach allows us to
							tackle complex challenges and create solutions that have real-world
							impact.
						</p>
						<p className="text-[#010D3E]/80 leading-relaxed">
							Established with a vision to bridge the gap between academic research
							and industry applications, we continue to foster an environment of
							creativity, critical thinking, and excellence. Our team of experts
							works tirelessly to ensure that we remain at the cutting edge of
							technological advancements.
						</p>						<button className="mt-6 text-[#001E80] font-medium inline-flex items-center">
							Read our story
							<Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2" />
						</button>
					</motion.div>

					<motion.div
						className="lg:w-[30%] flex items-center justify-center"
						variants={imageVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
					>
						<div className="rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-[#F1F1F1] w-full max-w-[300px]">							<Image
								src={ktlogoPath}
								alt="Introduction image"
								width={300}
								height={200}
								className="w-full h-auto object-cover"
								priority
							/>
						</div>
					</motion.div>
				</div>

				{/* Feature cards */}
				<div className="mt-20 px-4 max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{featureCards.map((card, index) => (
							<motion.div
								key={card.id}
								className="rounded-xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] bg-white p-6 flex items-start"
								variants={cardVariants}
								initial="hidden"
								whileInView="visible"
								whileHover="hover"
								viewport={{ once: true, amount: 0.2 }}
								custom={index}
							>								<div className="w-12 h-12 mr-4 rounded-lg bg-[#F8FAFF] flex items-center justify-center flex-shrink-0">
									<Image 
										src={`/assets/${card.icon}.png`}
										alt={card.title}
										width={24}
										height={24}
										className="w-6 h-6 object-contain"
									/>
								</div>

								<div>
									<h3 className="font-medium text-lg tracking-tight text-[#010D3E] mb-2">
										{card.title}
									</h3>
									<p className="text-sm text-[#010D3E]/70">
										{card.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};