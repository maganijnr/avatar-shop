"use client";
import React from "react";
import MaxwidthWrapper from "./MaxwidthWrapper";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../../public";

const Navbar = () => {
	return (
		<header className="sticky w-full bg-gray-50 h-[70px] top-0 left-0">
			<MaxwidthWrapper className="flex items-center justify-between">
				<Link
					href={"/"}
					className="text-3xl font-bold text-custom-persimmon"
				>
					<div className="w-[120px] h-[48px] relative">
						<Image
							src={Logo}
							alt="logo"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</Link>
				<Button className="bg-custom-persimmon font-semibold text-xs md:text-base hover:bg-custom-persimmon hover:bg-opacity-90 ">
					Get Started
				</Button>
			</MaxwidthWrapper>
		</header>
	);
};

export default Navbar;
