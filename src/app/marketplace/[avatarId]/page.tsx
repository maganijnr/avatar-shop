"use client";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import RotatingView from "@/components/RotatingView";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import generateAvatars from "@/hooks/generateAvatars";
import { UserContext } from "@/provider/UserContextProvider";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, {
	Suspense,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

const AvatarDetails = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const { avatarId }: { avatarId: string } = useParams();
	const { buyAvatar, purchaseHistory } = useContext(UserContext);

	const { avatars } = generateAvatars();

	const selectedAvatar = useMemo(() => {
		const avatar = avatars.find((avatar) => avatar.id === avatarId);

		return avatar;
	}, [avatarId, avatars]);

	const isBought: boolean = useMemo(() => {
		if (selectedAvatar) {
			return purchaseHistory.some(
				(purchase) => purchase.id === selectedAvatar?.id
			);
		}

		return false;
	}, [purchaseHistory, selectedAvatar]);

	if (!selectedAvatar) return <div>Loading...</div>;

	return (
		<div>
			<MaxwidthWrapper className="pt-5">
				<button
					onClick={() => router.back()}
					className=" flex items-center justify-start gap-1 text-custom-persimmon"
				>
					<ChevronLeft size={18} /> Back
				</button>
				<div className="py-6 md:py-10 flex flex-col md:flex-row gap-5 md:gap-10">
					<div className="w-full md:w-[50%] h-[30rem] md:h-[40rem]">
						<div className="bg-custom-alabaster relative overflow-hidden rounded-2xl w-full h-full ">
							<Image
								src={selectedAvatar?.avatar}
								alt="avatar"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>
					<div className="w-full md:w-[50%] gap-5">
						<div className="flex flex-col w-full ">
							<h2 className="text-2xl sm:text-3xl font-semibold">
								{selectedAvatar?.name}
							</h2>
							<p className="text-sm md:text-base font-medium">
								{selectedAvatar?.description}
							</p>

							<div className="flex flex-col lg:flex-row gap-5 mt-5 lg:mt-0">
								<Button
									className="w-full lg:w-fit lg:mt-5 bg-custom-persimmon hover:bg-custom-persimmon hover:bg-opacity-90 md:px-20 disabled:bg-opacity-90"
									onClick={() => {
										buyAvatar(selectedAvatar);
									}}
									disabled={isBought}
								>
									{isBought ? "Bought" : "Buy"} for $
									{selectedAvatar?.price}
								</Button>

								<Button
									className="w-full lg:w-fit lg:mt-5 border border-custom-persimmon bg-white text-custom-persimmon hover:bg-custom-persimmon hover:text-white md:px-20 disabled:bg-opacity-90"
									onClick={() => {
										setIsOpen(true);
									}}
								>
									View in 360
								</Button>
							</div>
						</div>
					</div>
				</div>

				<Dialog
					open={isOpen}
					onOpenChange={() => {
						setIsOpen(false);
					}}
				>
					<DialogContent>
						<div className="h-[20rem] w-full">
							<RotatingView imageSource={selectedAvatar?.avatar} />
						</div>
					</DialogContent>
				</Dialog>
			</MaxwidthWrapper>
		</div>
	);
};

export default AvatarDetails;
