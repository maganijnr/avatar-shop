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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const TEAM_SIZE = [
	{ label: "Size 1 - 10", value: "1-10" },
	{ label: "Size 1 - 20", value: "1-20" },
	{ label: "Size 1 - 30", value: "1-30" },
];

const formSchema = z.object({
	teamLead: z.string().min(2, {
		message: "Team lead is required.",
	}),
	teamSize: z.string().min(2, { message: "Team size is required" }),
	teamName: z.string().min(2, { message: "Team name is required" }),
});

const Organisation = () => {
	//Context
	const { newUser, handleNewUserUpdate, createNewUser } =
		useContext(UserContext);

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
			teamLead: newUser?.teamLead || "",
			teamSize: newUser?.teamSize || "",
			teamName: newUser?.teamName || "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const data = { ...newUser, ...values };

		handleNewUserUpdate(data);
		createNewUser(data);
		// router.push("/onboarding/success");
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
							name="teamName"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-custom-persimmon font-semibold text-sm">
										Team name
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter team name"
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
							name="teamLead"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-custom-persimmon font-semibold text-sm">
										Team Lead
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter team lead username"
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
							name="teamSize"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-custom-persimmon font-semibold text-sm">
										Team Lead
									</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a team size" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{TEAM_SIZE.map((item, idx) => (
												<SelectItem value={item.value} key={idx}>
													{item.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
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

export default Organisation;
