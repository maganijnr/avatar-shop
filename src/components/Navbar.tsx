import React from "react";
import MaxwidthWrapper from "./MaxwidthWrapper";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className="sticky w-full bg-gray-50 h-[70px] top-0 left-0">
			<MaxwidthWrapper className="flex items-center justify-between">
				<Link
					href={"/"}
					className="text-3xl font-bold text-custom-persimmon"
				>
					AVATAR
				</Link>
				<Button className="bg-custom-persimmon font-semibold text-xs md:text-base hover:bg-custom-persimmon hover:bg-opacity-90  py-2">
					Get Started
				</Button>
			</MaxwidthWrapper>
		</header>
	);
};

export default Navbar;
