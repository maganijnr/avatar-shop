"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SuccessImage } from "../../../../public";
import { Button } from "@/components/ui/button";

const Success = () => {
	const pageVariants = {
		initial: {
			opacity: 0,
			x: "-100vw",
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 200,
				damping: 20,
			},
		},
		exit: {
			opacity: 0,
			x: "100vw",
			transition: {
				type: "spring",
				stiffness: 200,
				damping: 20,
			},
		},
	};

	return (
		<motion.div
			variants={pageVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="w-full h-full min-h-[92dvh] bg-white rounded-2xl flex items-center justify-center p-4 relative"
		>
			<div className="flex flex-col gap-4 items-center justify-center">
				<div className="w-[200px] h-[200px] relative">
					<Image
						src={SuccessImage}
						alt="success"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				<div className="w-full max-w-[550px] flex flex-col gap-2 items-center justify-center">
					<h2 className="text-3xl xl:text-4xl text-center font-bold">
						Account created successfully!
					</h2>
					<p className="text-sm lg:text-base text-center font-medium">
						Welcome aboard! Explore our extensive collection of avatars.
					</p>

					<Link href={"/marketplace"}>
						<Button className="bg-custom-persimmon hover:bg-custom-persimmon hover:bg-opacity-90 px-12 font-medium text-base py-2">
							Explore
						</Button>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default Success;
