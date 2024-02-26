"use client";
import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { search } from 'react-icons-kit/feather/search';
import Link from 'next/link';
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Profile() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            {/* navbar */}
            <header className="fixed top-0 w-full [background:var(--color-white)] [color:var(--color-black)] p-4 border-b-2 flex justify-between items-center z-10">
                <div className="ml-8 [font-family:var(--primary-font)]">
                    <h1>PDF:TLDR</h1>
                </div>
                <div className="[font-family:var(--secondary-font)] flex-grow flex justify-center">
                    <ul className="flex gap-[40px]">
                        <button className="[color:var(--color-black)]">
                            <Link href="/landing">Home</Link>
                        </button>
                        <button className="[color:var(--color-black)]">
                            <Link href="/upload">Text Bot</Link>
                        </button>
                        <button className="[color:var(--color-black)]">
                            <Link href="/profile">Profile</Link>
                        </button>
                    </ul>
                </div>
                <div className="ml-auto">
                    <button className="[color:var(--color-black)] font-bold">
                        <Link href="/login" className="[color:var(--color-black)] [font-family:var(--secondary-font)] font-medium">Log In</Link>
                    </button>
                </div>
            </header>

            {/* Profile Section */}
            <div className="h-screen [background:var(--color-white)] flex items-center justify-center">
                <div className="w-1/5 mx-auto flex flex-col" style={{ height: "65%" }}>
                    
                    {/* Profile Photo Section */}
                    <div className="mb-8 relative">

                        {/* Header */}
                        <h2 className="text-left [color:var(--color-black)] font-bold text-xl mb-6">Profile Photo</h2>

                        {/* Profile Photo Placeholder and Upload Button */}
                        <div className="flex items-center mb-6">
                            <div className="[background:var(--color-background-grey)] rounded-full flex items-center justify-center mr-6" style={{ width: "150px", height: "150px", borderRadius: "50%" }}>
                                <img src="guy.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
                            </div>
                            {/* Upload Photo Button */}

                            <div>
                                <button className="[background:var(--color-blue)] [color:var(--color-white)] font-bold rounded-md px-6 py-3 hover:bg-blue-600 transition duration-300 mb-2" style={{ whiteSpace: 'nowrap' }}>Upload Photo</button>

                                {/* Remove Click */}
                                <a href="#" className="[color:var(--color-blue)] text-center block hover:underline">remove</a>
                            </div>
                        </div>
                    </div>
                    {/* Grey line */}
                    <div className="absolute top-0 left-20 w-1/4 [color:var(--color-dark-grey)] h-px" style={{ top: "43%", transform: "translateY(-50%)" }}></div>

                    {/* User Details Section */}
                    <div>

                        {/* Header */}
                        <h2 className="text-left [color:var(--color-black)] font-bold text-xl mb-6">User Details</h2>

                        {/* User Details Form */}
                        <div className="w-full">

                            {/* First Name */}
                            <div className="flex items-center mb-4">
                                <div className="w-32">
                                    <label htmlFor="firstName" className="font-medium">First Name</label>
                                </div>
                                <input type="text" id="firstName" className="w-full border rounded-md px-4 py-2" required />
                            </div>

                            {/* Last Name */}
                            <div className="flex items-center mb-4">
                                <div className="w-32">
                                    <label htmlFor="lastName" className="font-medium">Last Name</label>
                                </div>
                                <input type="text" id="lastName" className="w-full border rounded-md px-4 py-2" required />
                            </div>

                            {/* Username */}
                            <div className="flex items-center mb-4">
                                <div className="w-32">
                                    <label htmlFor="username" className="font-medium">Username</label>
                                </div>
                                <input type="text" id="username" className="w-full border rounded-md px-4 py-2" required />
                            </div>

                            {/* Password */}
                            <div className="flex items-center mb-4">
                                <div className="w-32">
                                    <label htmlFor="password" className="font-medium">Password</label>
                                </div>
                                <div className="relative w-full">
                                    <input type={passwordVisible ? "text" : "password"} id="password" className="w-full border rounded-md px-4 py-2 pr-10" required />

                                    {/* Eye icon */}
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <Icon icon={passwordVisible ? eyeOff : eye} size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Save Button */}
                            <button className="[background:var(--color-blue)] [color:var(--color-white)] font-bold rounded-md px-6 py-3 hover:bg-blue-600 transition duration-300 block mx-auto mt-10">Save</button>
                        </div>
                    </div>
                </div>

                {/* Summaries Section */}
                <div className="w-2/3 min-h-screen [background:var(--color-background-grey)]">

                    {/* My Summaries Header */}
                    <div className="p-4 mt-20 ml-8">
                        <h2 className="text-5xl font-bold mb-10 [font-family:var(--primary-font)]">My Summaries</h2>
                        
                        {/* Documents Header and Search Box */}
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-xl text-gray-600">Documents</h3>

                            {/* Search Box */}
                            <div className="relative">
                                <input type="text" className="border rounded-md px-4 py-2 pr-8" placeholder="Search" />
                                <button className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none">
                                    <Icon icon={search} size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Additional Box */}
                    <div className="mt-6 pt-4  border border-gray-400">

                        {/* Section Headers */}
                        <div className="flex">
                            <div className=" w-full">
                                <div className="ml-10">
                                    <input type="checkbox" style={{ width: '30px', height: '30px' }} disabled/>
                                </div>
                            </div>
                            <div className="mb-4 w-full">
                                <h3 className="font-bold">Name</h3>
                            </div>
                            <div className="mb-4 w-full">
                                <h3 className="font-bold">Date created</h3>
                            </div>



                            <div className="mb-4 w-full">
                                <h3 className="font-bold">Original File type</h3>
                            </div>

                        </div>

                        {/* Sample is for looks (Can and will change, just here to vizualize) */}
                        <div className="border-t [background:var(--color-white)] border-gray-400 mt-4 pt-4" style={{ height: '500px' }}>
                            <div className="flex">
                                <div className="mb-4 w-full">
                                    <div className="ml-10">
                                        <input type="checkbox" style={{ width: '30px', height: '30px' }}/>
                                    </div>
                                </div>
                                <div className="mb-4 w-full">
                                    <h3 className="font-bold">Sample</h3>
                                </div>


                                <div className="mb-4 w-full">
                                    <h3 className="font-bold">Sample</h3>
                                </div>

                                <div className="mb-4 w-full">
                                    <h3 className="font-bold">Sample</h3>
                                </div>
                            </div>
                            {/* Grey line */}
                            <hr className="border-t border-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="flex flex-col justify-evenly [background:var(--color-dark-grey)] h-[150px]">
                <div className="flex items-center justify-between">
                    <div className="p-4 ml-8">
                        <h3 className="[color:var(--color-light-grey)] ">PDFTDLR</h3>
                    </div>
                    <div>
                        <ul className="flex gap-[12px] [color:var(--color-light-grey)]">
                            <li>Eleven</li>
                            <li>Twelve</li>
                            <li>Thirteen</li>
                            <li>Fourteen</li>
                        </ul>
                    </div>
                    <div className="mr-12 flex gap-3 [color:var(--color-light-grey)]">
                        <a href="#"><span className="d text-1xl"><FaYoutube /></span></a>
                        <a href="#"><span className="d text-1xl"><FaFacebookF /></span></a>
                        <a href="#"><span className="d text-1xl"><FaTwitter /></span></a>
                        <a href="#"><span className="d text-1xl"><FaInstagram /></span></a>
                        <a href="#"><span className="d text-1xl"><FaLinkedinIn /></span></a>
                    </div>
                </div>
                <div className="my-8 flex items-center justify-center text-xs [color:var(--color-light-grey)]">
                    <p>PDFTDLR @2024. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
