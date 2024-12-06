"use client";
import AvatarCard from "@/components/AvatarCard";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import PurchaseHistory from "@/components/PurchaseHistory";
import { Button } from "@/components/ui/button";
import generateAvatars from "@/hooks/generateAvatars";
import { UserContext } from "@/provider/UserContextProvider";
import { History } from "lucide-react";
import React, { useContext, useState } from "react";

const MarketPlace = () => {
	const { currentUser } = useContext(UserContext);
	const { avatars } = generateAvatars();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className="pb-10 pt-20">
			<MaxwidthWrapper className="flex flex-col gap-5">
				<div className="w-full flex justify-end items-center">
					<Button
						onClick={() => setIsOpen(true)}
						className="bg-custom-persimmon hover:bg-custom-persimmon hover:bg-opacity-90 font-medium"
					>
						<History />
						History
					</Button>
				</div>
				<section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  md:place-content-start md:justify-end gap-5 lg:gap-6 place-items-center 2xl:gap-8">
					{avatars?.map((avatar, idx) => (
						<AvatarCard data={avatar} key={idx} isHome={false} />
					))}
				</section>
			</MaxwidthWrapper>
			<PurchaseHistory
				isOpen={isOpen}
				closeHistory={() => {
					setIsOpen(false);
				}}
			/>
		</div>
	);
};

export default MarketPlace;
