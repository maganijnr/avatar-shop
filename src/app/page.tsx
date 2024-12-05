"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import Navbar from "@/components/Navbar";
import generateAvatars from "@/hooks/generateAvatars";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	const { avatars } = generateAvatars();

	const bounceAnimation = {
		initial: { scale: 1 },
		animate: {
			scale: [1, 1.1, 1],
			transition: {
				duration: 2.5,
				ease: "easeInOut",
				repeat: Infinity,
			},
		},
	};

	return (
		<div className="w-full relative  h-full min-h-screen max-h-screen ">
			<Navbar />
			<section className="w-full h-full min-h-[68dvh] md:min-h-[58dvh] flex items-center justify-center flex-col relative">
				<div className="w-full max-w-[600px] lg:max-w-[900px] flex items-center justify-center flex-col">
					<h1 className="text-4xl xl:text-5xl text-center font-bold">
						Elevate Your Online Presence with Unique Avatars
					</h1>
					<h5 className="text-base text-center sm:text-base md:text-lg mt-5 font-medium">
						Stand Out from the Crowd with Our Exclusive Avatar Collection
					</h5>
					<Link href={"/onboarding"}>
						<Button className="bg-custom-persimmon mt-5 hover:bg-custom-persimmon hover:bg-opacity-90 px-10 font-medium text-base py-2">
							Get started
						</Button>
					</Link>
				</div>

				<motion.div
					className="absolute top-[10%] md:top-[20%] -translate-y-[80%] left-[20%] -translate-x-[80%] h-10 w-10 md:h-[50px] md:w-[50px] rounded-full overflow-hidden bg-custom-persimmon"
					variants={bounceAnimation}
					initial="initial"
					animate="animate"
				>
					<Image
						src={avatars[0]?.avatar}
						alt="avatar"
						layout="fill"
						objectFit="cover"
					/>
				</motion.div>
				<motion.div
					className="absolute top-[10%] md:top-[20%] -translate-y-[80%] left-[50%] -translate-x-[50%] h-10 w-10 md:h-[50px] md:w-[50px] rounded-full overflow-hidden bg-custom-persimmon"
					variants={bounceAnimation}
					initial="initial"
					animate="animate"
				>
					<Image
						src={avatars[4]?.avatar}
						alt="avatar"
						layout="fill"
						objectFit="cover"
					/>
				</motion.div>

				<motion.div
					className="absolute bottom-[10%] md:bottom-[20%] translate-y-[80%] left-[25%] -translate-x-[80%] h-10 w-10 md:h-[50px] md:w-[50px] rounded-full overflow-hidden bg-custom-persimmon"
					variants={bounceAnimation}
					initial="initial"
					animate="animate"
				>
					<Image
						src={avatars[1]?.avatar}
						alt="avatar"
						layout="fill"
						objectFit="cover"
					/>
				</motion.div>

				<motion.div
					className="absolute top-[10%] md:top-[20%] -translate-y-[80%] right-[20%] translate-x-[80%] h-10 w-10 md:h-[50px] md:w-[50px] rounded-full overflow-hidden bg-custom-persimmon"
					variants={bounceAnimation}
					initial="initial"
					animate="animate"
				>
					<Image
						src={avatars[2]?.avatar}
						alt="avatar"
						layout="fill"
						objectFit="cover"
					/>
				</motion.div>

				<motion.div
					className="absolute bottom-[10%] md:bottom-[20%] translate-y-[80%] right-[25%] translate-x-[80%] h-10 w-10 md:h-[50px] md:w-[50px] rounded-full overflow-hidden bg-custom-persimmon"
					variants={bounceAnimation}
					initial="initial"
					animate="animate"
				>
					<Image
						src={avatars[3]?.avatar}
						alt="avatar"
						layout="fill"
						objectFit="cover"
					/>
				</motion.div>
			</section>
			<div className="w-full flex items-end ">
				<InfiniteScroll />
			</div>
		</div>
	);
}
