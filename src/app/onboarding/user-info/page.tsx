"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../../../../public";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UserContext } from "@/provider/UserContextProvider";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username is required",
	}),
	instagram: z.string().min(2, {
		message: "Instagram username is required",
	}),
	twitter: z.string().min(2, {
		message: "Twitter username is required",
	}),
	occupation: z.string().min(2, {
		message: "Occupation is required",
	}),
});

const UserInfo = () => {
	//Context
	const { newUser, handleNewUserUpdate } = useContext(UserContext);

	const router = useRouter();
	const pageVariants = {
		initial: {
			opacity: 0,
			x: "-100vw",
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 200,
				damping: 20,
			},
		},
		exit: {
			opacity: 0,
			x: "100vw",
			transition: {
				type: "spring",
				stiffness: 200,
				damping: 20,
			},
		},
	};

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: newUser?.username || "",
			instagram: newUser?.instagram || "",
			twitter: newUser?.twitter || "",
			occupation: newUser?.occupation || "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const data = { ...newUser, ...values };

		handleNewUserUpdate(data);
		router.push("/onboarding/oragnisation");
	}

	return (
		<motion.div
			variants={pageVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="w-full h-full min-h-[92dvh] bg-white rounded-2xl flex items-center justify-center p-4 relative"
		>
			<button
				onClick={() => router.back()}
				className="absolute top-4 left-4 flex items-center justify-start gap-1 text-custom-persimmon"
			>
				<ChevronLeft size={18} /> Back
			</button>
			<div className="w-full max-w-[450px] flex flex-col items-center">
				<Link
					href={"/"}
					className="text-3xl mb-10 font-bold text-custom-persimmon"
				>
					<div className="w-[120px] h-[48px] relative">
						<Image
							src={Logo}
							alt="logo"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</Link>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 w-full"
					>
						<FormField
							control={form.control}
							name="occupation"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-custom-persimmon font-semibold text-sm">
										Occupation
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your occupation"
											className="h-[48px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-custom-persimmon font-semibold text-sm">
										Username
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter  username"
											className="h-[48px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="instagram"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-custom-persimmon font-semibold text-sm">
										Instagram username
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter instagram username"
											className="h-[48px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="twitter"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-custom-persimmon font-semibold text-sm">
										Twitter username
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter twitter username"
											className="h-[48px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button className="w-full bg-custom-persimmon font-semibold text-xs md:text-base hover:bg-custom-persimmon hover:bg-opacity-90">
							Continue
						</Button>
					</form>
				</Form>
			</div>
		</motion.div>
	);
};

export default UserInfo;
