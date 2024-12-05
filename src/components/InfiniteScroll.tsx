import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import generateAvatars from "@/hooks/generateAvatars";
import AvatarCard from "./AvatarCard";

const InfiniteScroll = () => {
	const { homeAvatars } = generateAvatars();
	console.log("🚀 ~ InfiniteScroll ~ homeAvatars:", homeAvatars);

	return (
		<Marquee className="gap-4">
			{homeAvatars?.map((avatar, idx) => (
				<AvatarCard data={avatar} key={idx} isHome={true} />
			))}
		</Marquee>
	);
};

export default InfiniteScroll;
