"use client";
import { AvatarProps } from "@/@types/avatarProps";
import { useRouter } from "next/navigation";
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import * as THREE from "three";

interface UserContextProps {
	newUser: any;
	handleNewUserUpdate: (values: any) => void;
	createNewUser: (values: any) => void;
	currentUser: any;
	purchaseHistory: any[];
	buyAvatar: (value: AvatarProps) => void;
}

export const UserContext = createContext<UserContextProps>({
	newUser: {},
	handleNewUserUpdate: (values: any) => {},
	createNewUser: (values: any) => {},
	currentUser: {},
	purchaseHistory: [],
	buyAvatar: (values: AvatarProps) => {},
});

const UserContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const router = useRouter();
	const [newUser, setNewUser] = useState<any>({});
	const [currentUser, setCurrentUser] = useState<any>({});
	const [purchaseHistory, setPurchaseHistory] = useState<any[]>([]);
	// const [isMounted, se]

	function handleNewUserUpdate(values: any) {
		setNewUser(values);
	}

	function createNewUser(values: any) {
		if (Object.entries(newUser).length !== 0) {
			localStorage.setItem("avatarUser", JSON.stringify(values));

			window.location.href = "/onboarding/success";
		}
	}

	function buyAvatar(value: AvatarProps) {
		if (Object.entries(value).length === 0) {
			alert("Create an account to buy an avatar");
			return;
		}

		const prevPurchase =
			typeof window !== "undefined" &&
			localStorage.getItem("purchaseHistory")
				? JSON.parse(localStorage.getItem("purchaseHistory")!)
				: [];

		console.log("🚀 ~ buyAvatar ~ prevPurchase:", prevPurchase);

		const updatedHistory = [...prevPurchase, value];
		localStorage.setItem("purchaseHistory", JSON.stringify(updatedHistory));
		setPurchaseHistory(updatedHistory);
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (localStorage.getItem("avatarUser")) {
				const user = JSON.parse(localStorage.getItem("avatarUser")!);

				setCurrentUser(user);
			} else {
				setCurrentUser({});
			}
		}
	}, []);

	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		if (localStorage.getItem("purchaseHistory")) {
	// 			const history = JSON.parse(
	// 				localStorage.getItem("purchaseHistory")!
	// 			);

	// 			setPurchaseHistory(history);
	// 		} else {
	// 			setPurchaseHistory([]);
	// 		}
	// 	}
	// }, []);

	return (
		<UserContext.Provider
			value={{
				newUser,
				handleNewUserUpdate,
				createNewUser,
				currentUser,
				purchaseHistory,
				buyAvatar,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
