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

export default function SignUp() {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const initalFormData: UserFormData = {
		firstname: null,
		lastname: null,
		username: null,
		password: null
	}

	const [formData, setFormData] = useState(initalFormData);


	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const toggleRememberMe = () => {
		setRememberMe(!rememberMe);
	};

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		console.log("Submit Clicked!")

		// Check if password meets the minimum length requirement
		// if (password.length < 8) {
		//   setPasswordError('Password must be a combination of minimum 8 characters');
		//   return;
		// }

		// Check if all fields are filled in and the checkbox is checked
		// if ( firstName && lastName && username && password && rememberMe) {
		const redirectUrl = "/landing"; // Change this to your desired URL

		console.log(formData)

		const errors = addUser(formData);

		console.log(errors);

		// Redirect to the specified URL
		// window.location.href = redirectUrl;
		// } else {
		// Show an alert if any field is missing
		//   alert("Please fill in all fields and accept the terms.");
		// }
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
