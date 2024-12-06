import { createAvatar } from "@dicebear/core";
import { micah } from "@dicebear/collection";

// const avatars = [];

// for (let i = 0; i < 10; i++) {
//  const avatar = createAvatar(adventurer, {

// });
// 	const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${i}`;
// 	const price = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100
// 	const description = `A unique DiceBear avatar, #${i}`;
// 	const isBought = false; // Initially, no avatars are bought

// 	avatars.push({
// 		avatar,
// 		price,
// 		description,
// 		isBought,
// 	});
// }

import React, { useEffect } from "react";
import { AvatarProps } from "@/@types/avatarProps";

const generateAvatars = () => {
	const [avatars, setAvatars] = React.useState<AvatarProps[]>([]);
	const [homeAvatars, setHomeAvatars] = React.useState<AvatarProps[]>([]);

	function handleGenerate() {
		const avatars = [];

		for (let i = 0; i < 100; i++) {
			const avatarSeed = `${i}`; // Replace with your desired seed
			const avatarUrl = createAvatar(micah, {
				seed: avatarSeed,
			}).toDataUri();

			// const avatar = `https://api.dicebear.com/9.x/avataaars/svg?seed=${i}`;
			const price = Math.floor(Math.random() * 100) + 1;
			const description = `#${i}. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
			software like Aldus PageMaker including versions of Lorem Ipsum.
`;
			const isBought = false;

			avatars.push({
				avatar: avatarUrl,
				price,
				description,
				isBought,
				name: `Micah Avatar ${i + 1}`,
				id: `avatar-${i + 1}`,
			});
		}

		setAvatars(avatars);
	}

	function handleGenerateHomeAvatars() {
		const avatars = [];

		for (let i = 0; i < 10; i++) {
			const avatarSeed = `${i}`; // Replace with your desired seed
			const avatarUrl = createAvatar(micah, {
				seed: avatarSeed,
			}).toDataUri();

			// const avatar = `https://api.dicebear.com/9.x/avataaars/svg?seed=${i}`;
			const price = Math.floor(Math.random() * 100) + 1;
			const description = `#${i}. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
			software like Aldus PageMaker including versions of Lorem Ipsum.

`;
			const isBought = false;

			avatars.push({
				avatar: avatarUrl,
				price,
				description,
				isBought,
				name: `Micah Avatar ${i + 1}`,
				id: `home-avatar-${i + 1}`,
			});
		}

		setHomeAvatars(avatars);
	}

	useEffect(() => {
		handleGenerate();
		handleGenerateHomeAvatars();
	}, []);

	return {
		avatars,
		homeAvatars,
	};
};

export default generateAvatars;
