"use client";
import React, { useContext } from "react";
import MaxwidthWrapper from "./MaxwidthWrapper";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../../public";
import { UserContext } from "@/provider/UserContextProvider";
import generateAvatars from "@/hooks/generateAvatars";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const { avatars } = generateAvatars();
	const { currentUser } = useContext(UserContext);
	const pathname = usePathname();

	return (
		<header
			className={`sticky w-full bg-gray-50 h-[65px] top-0 z-40 left-0 ${
				pathname.includes("marketplace")
					? "shadow-sm shadow-custom-alabaster"
					: ""
			}`}
		>
			<MaxwidthWrapper className="flex items-center justify-between">
				<Link
					href={"/"}
					className="text-3xl font-bold text-custom-persimmon"
				>
					<div className="w-[100px] md:w-[120px] h-10 md:h-[48px] relative">
						<Image
							src={Logo}
							alt="logo"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</Link>
				{currentUser?.gender ? (
					<div className="h-10 w-10 md:w-14 md:h-14 rounded-full overflow-hidden relative bg-custom-alabaster">
						<Image
							src={
								currentUser?.gender === "male"
									? avatars[4]?.avatar
									: avatars[2]?.avatar
							}
							alt="user"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				) : (
					<Link href={currentUser?.email ? "/marketplace" : "/onboarding"}>
						<Button className="bg-custom-persimmon font-semibold text-xs md:text-base hover:bg-custom-persimmon hover:bg-opacity-90 ">
							{currentUser?.email ? "Explore" : "Get started"}
						</Button>
					</Link>
				)}
			</MaxwidthWrapper>
		</header>
	);
};

export default Navbar;
