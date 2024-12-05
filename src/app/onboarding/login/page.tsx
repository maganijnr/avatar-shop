"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../../../../public";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Separator } from "@/components/ui/separator";
import { UserContext } from "@/provider/UserContextProvider";
import { useRouter } from "next/navigation";

const formSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }).min(2, {
		message: "Email must be at least 2 characters.",
	}),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters." }),
});

const Login = () => {
	const router = useRouter();
	const { currentUser } = useContext(UserContext);
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
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		if (currentUser.email !== values.email) {
			alert("Email or password is incorrect");
			return;
		}

		if (currentUser.password !== values.password) {
			alert("Email or password is incorrect");
			return;
		}
		router.push("/marketplace");
	}

	return (
		<motion.div
			variants={pageVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="w-full h-full min-h-[92dvh] bg-white rounded-2xl flex items-center justify-center p-4"
		>
			<div className=" w-full max-w-[450px] flex flex-col items-center">
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
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-custom-persimmon font-semibold text-sm">
										Email
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter a valid email"
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
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-custom-persimmon font-semibold text-sm">
										Password
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your password"
											className="h-[48px]"
											type="password"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button className="w-full bg-custom-persimmon font-semibold text-xs md:text-base hover:bg-custom-persimmon hover:bg-opacity-90">
							Sign in
						</Button>
					</form>
				</Form>

				<Separator />
				<div className="text-center text-sm font-medium mt-5">
					Don't have an account?{" "}
					<Link
						href={"/onboarding"}
						className="text-custom-persimmon font-semibold"
					>
						Create one
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default Login;
