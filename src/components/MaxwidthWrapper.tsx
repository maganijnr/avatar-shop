import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

const MaxwidthWrapper: FC<{ children: ReactNode; className?: string }> = ({
	children,
	className,
}) => {
	return (
		<div
			className={cn(
				"h-full w-full mx-auto max-w-[95%] md:max-w-[90%]",
				className
			)}
		>
			{children}
		</div>
	);
};

export default MaxwidthWrapper;
