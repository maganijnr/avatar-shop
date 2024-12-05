"use client";
import { UserContext } from "@/provider/UserContextProvider";
import React, { useContext } from "react";

const MarketPlace = () => {
	const { currentUser } = useContext(UserContext);
	console.log("🚀 ~ MarketPlace ~ currentUser:", currentUser);

	return <div>MarketPlace</div>;
};

export default MarketPlace;
