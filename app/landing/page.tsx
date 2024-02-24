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
      {/* navbar */}
      <header className="fixed top-0 w-full [background:var(--color-white)] [color:var(--color-black)] p-4 border-b-2 flex justify-between items-center z-10">
          <div className="ml-8">
            <h1>PDFTLDR</h1>
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
                <Link href="/profile">Profile</Link></button>
            </ul>
          </div>
          <div className="ml-auto">
            <button className="[color:var(--color-black)] font-bold">
              <Link href="/login" className="[color:var(--color-black)] [font-family:var(--secondary-font)] font-medium">Log In</Link>
            </button>
          </div>
        </header>
      
      {/* Main content */}
      <div className="flex">
        <div className="flex-1">
          <div className="h-screen [background:var(--color-background-grey)] flex flex-col items-center justify-center">
            <section className="text-center">
              <h1 className="[font-family:var(--primary-font)] text-7xl font-bold mb-16">We do the dirty work for you.</h1>
              <p className="[color:var(--color-dark-grey)]  mb-8 text-left max-w-[850px] mx-auto text-lg">Welcome to PDF TL;DR, where we make things easier for you.
               Tired of reading long documents? Just upload your files and we'll do the hard work.
               Our system quickly picks out the most important information, giving you short summaries that are easy to understand.
               Say goodbye to long reading sessions and hello to quick insights. Start summarizing your documents with us today!</p>
              <button className="[background:var(--color-blue)] [color:var(--color-white)] font-bold rounded-md px-16 py-3 hover:bg-blue-600 transition duration-300">
                <Link href="/upload" className="[color:var(--color-white)] font-medium">Start Summarizing</Link>
              </button>
            </section>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <div className="h-screen [background:var(--color-background-grey)] flex items-center justify-end">
            <img src="RobotClass.jpeg" alt="Placeholder" className="w-96 rounded-l-lg" style={{ objectPosition: 'center top', borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px', width: '600px' }}/>
          </div>
        </div>
      </div>

      {/* Content Section 1 */}
      <div className="[background:var(--color-dark-grey)]">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <h2 className="[color:var(--color-white)] [font-family:var(--primary-font)] text-center text-5xl font-bold mb-8">Streamline Your Reading</h2>
        </div>
        <div className="max-w-7xl pb-6 mx-auto">
          <p className="[color:var(--color-white)] text-center mb-8">Our innovative technology simplifies the process of digesting lengthy documents by extracting
           key insights and presenting them in concise summaries.
           No more long hours spent sifting through pages of text our application will provide efficient, focused reading.
            Whether you're a professional seeking quick insights or a student managing heavy coursework, our tool is designed to help you save time and effort.</p>
        </div>
      </div>

      {/* Rectangles Section */}
      <div className="[background:var(--color-dark-grey)] pb-16">
        <div className="mx-auto py-2 px-4">
          <div className="flex justify-center">
            <div className="w-full xl:w-2/4 mx-2 flex items-center relative">
              <div className="w-full h-20 [background:var(--color-white)]"></div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-20">
                <h3 className="[color:var(--color-black)] font-bold text-lg">Multiple File Types Accepted</h3>
                <p className="[color:var(--color-dark-grey)] mx-auto text-md">Easily upload and summarize various file types</p>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                <img src="File.png" alt="Placeholder" className="w-16 h-16 [background:var(--color-background-grey)] mr-2" />
              </div>
            </div>
            <div className="w-full xl:w-2/4 mx-2 flex items-center relative">
              <div className="w-full h-20 [background:var(--color-white)]"></div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-20">
                <h3 className="[color:var(--color-black)] font-bold text-lg">Customizable Summaries</h3>
                <p className="[color:var(--color-dark-grey)] mx-auto text-md">Tailor summaries to your preferences</p>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                <img src="Gear.png" alt="Placeholder" className="w-16 h-16 [background:var(--color-background-grey)] mr-2" />
              </div>
            </div>
            <div className="w-full xl:w-2/4 mx-2 flex items-center relative">
              <div className="w-full h-20 [background:var(--color-white)]"></div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-20">
                <h3 className="[color:var(--color-black)] font-bold text-lg">Available 24/7</h3>
                <p className="[color:var(--color-dark-grey)] mx-auto text-md">Summarize documents anytime, anywhere</p>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                <img src="24-7.png" alt="Placeholder" className="w-16 h-16 [background:var(--color-background-grey)] mr-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section 2 */}
      <div className="[background:var(--color-white)] my-40">
        <div className="flex justify-center items-center">
          <img src="guy.png" alt="Placeholder" className="w-1/4 mx-20" />
          <div className="grid grid-cols-2 gap-20">
            <div>
              <img src="placeholder_image.png" alt="Placeholder" className="w-16 h-16 mr-2" />
              <p className="[color:var(--color-dark-grey)] break-words max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img src="placeholder_image.png" alt="Placeholder" className="w-16 h-16 mr-2" />
              <p className="[color:var(--color-dark-grey)] break-words max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img src="placeholder_image.png" alt="Placeholder" className="w-16 h-16 mr-2" />
              <p className="[color:var(--color-dark-grey)] break-words max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img src="placeholder_image.png" alt="Placeholder" className="w-16 h-16 mr-2" />
              <p className="[color:var(--color-dark-grey)] break-words max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section 3 */}
      <div className="[background:var(--color-background-grey)] py-12">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div className="w-2/3 pr-8">
            <h2 className="[font-family:var(--primary-font)] text-5xl font-bold mb-6">Placeholder</h2>
            <p className="[color:var(--color-dark-grey)] mb-6 mr-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="w-1/2 flex  items-center ml-20">
            <button className="[background:var(--color-blue)] [color:var(--color-white)] font-bold rounded-md px-16 py-3 mr-4 hover:bg-blue-600 transition duration-300" style={{ whiteSpace: 'nowrap' }}>Text Summarizer</button>
            <button className="[background:var(--color-blue)] [color:var(--color-white)] font-bold rounded-md px-16 py-3 hover:bg-blue-600 transition duration-300" style={{ whiteSpace: 'nowrap' }}>View Documents</button>
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