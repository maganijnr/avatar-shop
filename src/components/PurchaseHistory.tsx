import React, { FC, useContext } from "react";
import { Sheet, SheetContent } from "./ui/sheet";
import { UserContext } from "@/provider/UserContextProvider";
import { AvatarProps } from "@/@types/avatarProps";
import Link from "next/link";
import Image from "next/image";

const PurchaseHistory: FC<{ isOpen: boolean; closeHistory: () => void }> = ({
	isOpen,
	closeHistory,
}) => {
	const { purchaseHistory } = useContext(UserContext);
	return (
		<Sheet open={isOpen} onOpenChange={closeHistory}>
			<SheetContent>
				<div className="w-full  flex flex-col h-full overflow-y-scroll gap-3">
					{purchaseHistory?.map((history: AvatarProps, idx: number) => (
						<Link href={`/marketplace/${history?.id}`} key={idx}>
							<div className=" h-[50px] flex items-center justify-start gap-3">
								<div className="w-10 h-10 rounded-md relative bg-custom-alabaster overflow-hidden">
									<Image
										src={history?.avatar}
										alt="history"
										layout="fill"
										objectFit="cover"
									/>
								</div>

								<div>
									<h2 className="text-xs">{history?.name}</h2>
									<h5 className="text-sm font-semibold">
										Bought at ${history?.price}
									</h5>
								</div>
							</div>
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default PurchaseHistory;
