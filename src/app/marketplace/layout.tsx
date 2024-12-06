import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="">
			<Navbar />
			<div>{children}</div>
		</div>
	);
}
