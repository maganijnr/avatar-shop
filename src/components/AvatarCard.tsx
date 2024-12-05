import { AvatarProps } from "@/@types/avatarProps";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect } from "react";

const AvatarCard: FC<{ data: AvatarProps; isHome: boolean }> = ({
	data,
	isHome = false,
}) => {
	if (isHome) {
		return (
			<div className="bg-custom-alabaster mx-5 relative h-[200px] w-[170px] overflow-hidden rounded-2xl md:h-[21.25rem] md:w-[17.125rem] md:rounded-[2rem]">
				<Image
					src={data?.avatar}
					alt="avatar"
					layout="fill"
					objectFit="cover"
				/>
			</div>
		);
	}

	return (
		<Link href={"/hello"}>
			<div className="bg-custom-alabaster relative h-[200px] w-[170px] overflow-hidden rounded-2xl md:h-[21.25rem] md:w-[17.125rem] md:rounded-[2rem]">
				<Image
					src={data?.avatar}
					alt="avatar"
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</Link>
	);
};

export default AvatarCard;
