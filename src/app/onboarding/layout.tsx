import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="p-5 lg:p-8 xl:p-10 bg-custom-alabaster w-full h-full min-h-screen ">
			<div className="mx-auto">{children}</div>
		</div>
	);
}
