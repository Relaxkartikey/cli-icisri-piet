"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Using direct public paths
const ktlogoPath = "/assets/ktlogo.png";
const arrowRightPath = "/assets/arrow-right.svg";
const pic3 = "/assets/copics/conf3.JPG";

// Feature card data
const featureCards = [
	{
		id: 1,
		title: "Knowledge Sharing",
		description:
			"Facilitating the exchange of cutting-edge research findings and innovative ideas between academia and industry professionals.",
		icon: "cog",
	},
	{
		id: 2,
		title: "Semiconductor Advancement",
		description:
			"Advancing semiconductor technology specifically for robotics and IoT applications to create smarter systems.",
		icon: "star",
	},
	{
		id: 3,
		title: "Foster Collaboration",
		description:
			"Building strong partnerships between researchers, industry experts, and institutions to accelerate innovation.",
		icon: "spring",
	},
	{
		id: 4,
		title: "Networking Opportunities",
		description:
			"Providing valuable networking platforms for professionals to connect, collaborate, and address industry challenges.",
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
						<div className="tag">About Conference</div>
					</div>

					<h2 className="section-title mt-5">Introduction</h2>
					<p className="section-des mt-5">
						Discover ICISRI-2026: Where intelligent systems, semiconductor technology, robotics, and IoT converge for innovation.
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
							What is ICISRI-2026?
						</h3>
						<p className="text-[#010D3E]/80 leading-relaxed mb-4">
							The International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT is a gathering where experts discuss how to make robots and IoT devices smarter using semiconductor technology. They explore topics like artificial intelligence, semiconductor advancements, robotics, and IoT applications. It&apos;s a place for researchers and industry professionals to share ideas and innovations in these fields.
						</p>
						<p className="text-[#010D3E]/80 leading-relaxed">
							The motivation behind the conference lies in the recognition of the growing importance of intelligent systems, semiconductor technology, robotics, and IoT in various industries. By bringing together experts from these fields, the conference aims to accelerate innovation, foster collaboration, and address challenges, ultimately driving progress towards smarter and more efficient solutions for robotics and IoT applications.
						</p>						
						<Link href="/about">
							<button className="mt-6 text-[#001E80] font-medium inline-flex items-center hover:text-[#001E80]/80 transition-colors">
								Learn more about ICISRI
								<Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2" />
							</button>
						</Link>
					</motion.div>

					<motion.div
						className="lg:w-[30%] flex items-center justify-center"
						variants={imageVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
					>
						<div className="rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-[#F1F1F1] w-full max-w-[400px]">
							<Image
								src={pic3}
								alt="Introduction image"
								width={300}
								height={350}
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