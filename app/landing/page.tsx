import { useState } from 'react';
import Link from 'next/link';
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white text-black p-4 border-b-2 flex justify-between items-center z-10">
        <div className="ml-8">
          <h1>PDFTDLR</h1>
        </div>
        <div className="flex-grow flex justify-center">
          <ul className="flex gap-[40px]">
            <button className="text-black">
              <Link href="/landing">Home</Link>
            </button>
            <button className="text-black">
              <Link href="/upload">Text Bot</Link>
            </button>
            <button className="text-black">Profile</button>
          </ul>
        </div>
        <div className="ml-auto">
          <button className="text-white font-bold">
            <Link href="/login" className="text-black font-medium">Log In</Link>
          </button>
        </div>
      </header>
      
      {/* Main content */}
      <div className="flex">
        <div className="flex-1">
          <div className="h-screen bg-gray-200 flex flex-col items-center justify-center">
            <section className="text-center">
              <h1 className="[font-family:var(--primary-font)] text-7xl font-bold mb-6">We do the dirty work for you.</h1>
              <p className="text-gray-700 mb-8 text-left max-w-[850px] mx-auto text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="bg-blue-500 text-white font-bold rounded-md px-16 py-3 hover:bg-blue-600 transition duration-300">
                <Link href="/upload" className="text-white font-medium">Start Summarizing</Link>
              </button>
            </section>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <div className="h-screen bg-gray-200 flex items-center justify-end">
            <img src="RobotClass.jpeg" alt="Placeholder" className="w-96 rounded-l-lg" style={{ objectPosition: 'center top', borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px', width: '600px' }}/>
          </div>
        </div>
      </div>

      {/* Content Section 1 */}
      <div className="bg-gray-600">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <h2 className="text-white text-center text-5xl font-bold mb-8">Section Title</h2>
        </div>
        <div className="max-w-4xl pb-6 mx-auto">
          <p className="text-white text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

      {/* Rectangles Section */}
      <div className="bg-gray-600 pb-16">
        <div className="mx-auto py-2 px-4">
          <div className="flex justify-center">
            <div className="w-full xl:w-2/4 mx-2 flex items-center relative">
              <div className="w-full h-20 bg-white"></div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-20">
                <h3 className="text-black font-bold text-lg">Heading</h3>
                <p className="text-gray-700 mx-auto text-md">Something Here</p>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                <img src="placeholder_image.png" alt="Placeholder" className="w-16 h-16 bg-gray-300 mr-2" />
              </div>
            </div>
            <div className="w-full xl:w-2/4 mx-2 flex items-center relative">
              <div className="w-full h-20 bg-white"></div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-20">
                <h3 className="text-black font-bold text-lg">Heading</h3>
                <p className="text-gray-700 mx-auto text-md">Something Here</p>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                <img src="placeholder_image.png" alt="Placeholder" className="w-16 h-16 bg-gray-300 mr-2" />
              </div>
            </div>
            <div className="w-full xl:w-2/4 mx-2 flex items-center relative">
              <div className="w-full h-20 bg-white"></div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-20">
                <h3 className="text-black font-bold text-lg">Heading</h3>
                <p className="text-gray-700 mx-auto text-md">Something Here</p>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                <img src="placeholder_image.png" alt="Placeholder" className="w-16 h-16 bg-gray-300 mr-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section 2 */}
      <div className="bg-white my-40">
        <div className="flex justify-center items-center">
          <img src="guy.png" alt="Placeholder" className="w-1/4 mx-20" />
          <div className="grid grid-cols-2 gap-20">
            <div>
              <img src="placeholder_image.png" alt="Placeholder" className="w-16 h-16 mr-2" />
              <p className="text-gray-700 break-words max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img src="placeholder_image.png" alt="Placeholder" className="w-16 h-16 mr-2" />
              <p className="text-gray-700 break-words max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img src="placeholder_image.png" alt="Placeholder" className="w-16 h-16 mr-2" />
              <p className="text-gray-700 break-words max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img src="placeholder_image.png" alt="Placeholder" className="w-16 h-16 mr-2" />
              <p className="text-gray-700 break-words max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section 3 */}
      <div className="bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div className="w-2/3 pr-8">
            <h2 className="text-5xl font-bold mb-6">Placeholder</h2>
            <p className="text-gray-700 mb-6 mr-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="w-1/2 flex  items-center ml-20">
            <button className="bg-blue-500 text-white font-bold rounded-md px-16 py-3 mr-4 hover:bg-blue-600 transition duration-300" style={{ whiteSpace: 'nowrap' }}>Text Summarizer</button>
            <button className="bg-blue-500 text-white font-bold rounded-md px-16 py-3 hover:bg-blue-600 transition duration-300" style={{ whiteSpace: 'nowrap' }}>View Documents</button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="flex flex-col justify-evenly bg-gray-600 h-[150px]">
        <div className="flex items-center justify-between">
          <div className="p-4 ml-8">
            <h3 className="[color:var(--font-primary)] ">PDFTDLR</h3>
          </div>
          <div>
            <ul className="flex gap-[12px] [color:var(--font-primary)]">
              <li>Eleven</li>
              <li>Twelve</li>
              <li>Thirteen</li>
              <li>Fourteen</li>
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