"use client";
import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import Link from 'next/link';
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { addUser } from '../lib/actions';
import { useFormState } from 'react-dom';
import { UserFormData, UserState } from '../lib/definitions';
import InputWrapper from '../components/input-wrapper';
import { signIn } from "next-auth/react";


export default function SignUp() {
	const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState<UserFormData>({
        firstname: '',
        lastname: '',
        username: '',
        password: ''
    });
    const [passwordError, setPasswordError] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Check if password meets the minimum length requirement
        if (formData.password && formData.password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            return;
        } else {
            setPasswordError('');
        }

        try {
            // Call addUser function to add the user
            const result = await addUser(formData);

            if (result.success) {
                // Call signIn after successfully adding the user
                await signIn("credentials", { username: formData.username, password: formData.password, redirect: false });
                // Redirect the user to the landing page or any other page
                window.location.href = "/landing";
            } else {
                // Handle error
                console.error("Failed to add user:", result.message);
            }
        } catch (error) {
            console.error("Error adding user:", error);
            // Handle any unexpected errors
            // You may want to show a generic error message to the user
        }
    };
	


	return (
		<div>
			<div className="h-screen bg-gray-200 flex items-center justify-center">
				<section className="bg-white w-[1200px] h-[800px] flex mt-16">
					{/* Placeholder photo */}
					<div
						className="flex-1 flex items-center justify-center"
						style={{
							backgroundImage: "url('RobotWriting.png')",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat"
						}}
					></div>
					{/* Sign-up form */}
					<div className="flex-1 flex items-center justify-center">
						<div className="w-[500px]">
							<form className="space-y-4" onSubmit={handleSubmit}>
								<h1 className="text-4xl font-bold text-left">Sign Up</h1>
								<div className="flex justify-between">
									{/* First Name input */}
									<div className="w-[calc(50% - 5px)]">
										<label htmlFor="firstname" className="block font-medium">
											First Name
										</label>
										<InputWrapper
											id="firstname"
											styles="w-full border rounded-md px-3 py-2 mt-1"
											formSetter={setFormData}
										/>
									</div>
									<div className="w-10" />
									{/* Last Name input */}
									<div className="w-[calc(50% - 5px)]">
										<label htmlFor="lastname" className="block font-medium">
											Last Name
										</label>
										<InputWrapper
											id="lastname"
											styles="w-full border rounded-md px-3 py-2 mt-1"
											formSetter={setFormData}
										/>
									</div>
								</div>
								{/* Username input */}
								<div>
									<label htmlFor="username" className="block font-medium">
										Username
									</label>
									<InputWrapper
										id="username"
										styles="w-full border rounded-md px-3 py-2 mt-1"
										formSetter={setFormData}
									/>
								</div>
								{/* Password input */}
								<div className="relative">
									<label htmlFor="password" className="block font-medium">
										Password
									</label>
									<InputWrapper
										type={passwordVisible ? "text" : "password"}
										id="password"
										styles="w-full border rounded-md px-3 py-2 mt-1 pr-10"
										formSetter={setFormData}
									/>
									{/* Eye icon */}
									<button
										type="button"
										className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none mt-7"
										onClick={togglePasswordVisibility}
									>
										<Icon icon={passwordVisible ? eyeOff : eye} size={20} />
									</button>
								</div>
								{/* Password criteria */}
								{passwordError && <p className="text-sm text-red-500 mt-1 ml-1">{passwordError}</p>}
								{/* Sign-up button */}
								<button
									type="submit"
									className="w-full bg-blue-500 text-white font-bold rounded-md px-3 py-2 mt-4 hover:bg-blue-600 transition duration-300"
								>
									Get Started
								</button>
							</form>
							{/* Placeholder buttons */}

							{/* Sign-in link */}
							<div className="mt-4 text-center">
								<p className="text-gray-600">
									Already have an account?{" "}
									<Link href="/login" className="text-blue-600 font-medium">
										Sign in
									</Link>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
			{/* Footer */}
			<footer className="flex flex-col justify-evenly bg-gray-600 h-[150px]">
				<div className="flex items-center justify-between">
					<div className="p-4 ml-8">
						<h3 className="[color:var(--font-primary)] ">PDFTDLR</h3>
					</div>
					<div className=" flex justify-center">
						<ul className="flex gap-[30px]">
							<button className="text-black">
								<Link href="#">Terms of Service</Link>
							</button>
							<button className="text-black">
								<Link href="#">Contact</Link>
							</button>
							<button className="text-black">
								<Link href="#">Help</Link></button>
						</ul>
					</div>
					<div className="mr-12 flex gap-3 [color:var(--font-primary)]">
						<a href="#"><span className="d text-1xl"><FaYoutube /></span></a>
						<a href="#"><span className="d text-1xl"><FaFacebookF /></span></a>
						<a href="#"><span className="d text-1xl"><FaTwitter /></span></a>
						<a href="#"><span className="d text-1xl"><FaInstagram /></span></a>
						<a href="#"><span className="d text-1xl"><FaLinkedinIn /></span></a>
					</div>
				</div>
				<div className="my-8 flex items-center justify-center text-xs [color:var(--font-primary)]">
					<p>PDFTDLR @2024. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
