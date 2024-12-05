"use client";
import { useRouter } from "next/navigation";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

interface UserContextProps {
	newUser: any;
	handleNewUserUpdate: (values: any) => void;
	createNewUser: (values: any) => void;
	currentUser: any;
}

export const UserContext = createContext<UserContextProps>({
	newUser: {},
	handleNewUserUpdate: (values: any) => {},
	createNewUser: (values: any) => {},
	currentUser: {},
});

const UserContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const router = useRouter();
	const [newUser, setNewUser] = useState<any>({});
	const [currentUser, setCurrentUser] = useState<any>({});

	function handleNewUserUpdate(values: any) {
		setNewUser(values);
	}

	function createNewUser(values: any) {
		if (Object.entries(newUser).length !== 0) {
			localStorage.setItem("avatarUser", JSON.stringify(values));

			window.location.href = "/onboarding/success";
		}
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

	return (
		<UserContext.Provider
			value={{ newUser, handleNewUserUpdate, createNewUser, currentUser }}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
