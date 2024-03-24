"use client";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Main content */}
      <div className="flex">
        <div className="flex-1">
          <div className="h-screen [background:var(--color-background-grey)] flex flex-col items-center justify-center">
            <section className="text-center flex flex-col justify-center items-center ml-8">
              <h1 className="[font-family:var(--primary-font)] text-7xl font-bold mb-16">
                We do the dirty work for you.
              </h1>
              <p className="[color:var(--color-dark-grey)]  mb-8 text-left max-w-[850px] ml-8 mr-8 text-lg">
                Welcome to PDF TL;DR, where we make things easier for you. Tired
                of reading long documents? Just upload your files and we'll do
                the hard work. Our system quickly picks out the most important
                information, giving you short summaries that are easy to
                understand. Say goodbye to long reading sessions and hello to
                quick insights. Start summarizing your documents with us today!
              </p>
              <button className="[background:var(--color-blue)] [color:var(--color-white)] font-bold rounded-md px-16 py-3 hover:bg-blue-600 transition duration-300">
                <Link
                  href="/upload"
                  className="[color:var(--color-white)] font-medium"
                >
                  Start Summarizing
                </Link>
              </button>
            </section>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <div className="h-screen [background:var(--color-background-grey)] flex items-center justify-end">
            <img
              src="RobotClass.jpeg"
              alt="Placeholder"
              className="w-96 rounded-l-lg"
              style={{
                objectPosition: "center top",
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px",
                width: "600px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Content Section 1 */}
      <div className="[background:var(--color-grey)]">
        <div className="max-w-4xl mx-auto py-16 px-4 mt-4">
          <h2 className="[color:var(--color-white)] [font-family:var(--primary-font)] text-center text-6xl ">
            Streamline Your Reading
          </h2>
        </div>
        <div className="max-w-5xl pb-6 mx-auto">
          <p className="[color:var(--color-white)] text-center ml-16 mr-16 mb-8">
            Our innovative technology simplifies the process of digesting
            lengthy documents by extracting key insights and presenting them in
            concise summaries. No more long hours spent sifting through pages of
            text, our application will provide efficient and focused reading.
            Whether you're a professional seeking quick insights or a student
            managing heavy coursework, our tool is designed to help you save
            time and effort.
          </p>
        </div>
      </div>

      {/* Rectangles Section */}
      <div className="[background:var(--color-grey)] pb-16">
        <div className="mx-auto py-2 px-4">
          <div className="flex justify-center">
            <div className="w-full xl:w-2/4 mx-2 flex items-center relative">
              <div className="w-full h-20 [background:var(--color-background-grey)] rounded-md"></div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-20 ">
                <h3 className="[color:var(--color-black)] font-bold text-lg ">
                  Multiple File Types Accepted
                </h3>
                <p className="[color:var(--color-dark-grey)] mx-auto text-md">
                  Easily summarize .pdf, .docx, and more
                </p>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                <img
                  src="File.png"
                  alt="Placeholder"
                  className="w-10 h-10 [background:var(--color-background-grey)] ml-2"
                />
              </div>
            </div>
            <div className="w-full xl:w-2/4 mx-2 flex items-center relative">
              <div className="w-full h-20 [background:var(--color-background-grey)] rounded-md"></div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-20">
                <h3 className="[color:var(--color-black)] font-bold text-lg">
                  Customizable Summaries
                </h3>
                <p className="[color:var(--color-dark-grey)] mx-auto text-md">
                  Tailor summary length to your liking
                </p>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                <img
                  src="Gear.png"
                  alt="Placeholder"
                  className="w-10 h-10 [background:var(--color-background-grey)] ml-2"
                />
              </div>
            </div>
            <div className="w-full xl:w-2/4 mx-2 flex items-center relative">
              <div className="w-full h-20 [background:var(--color-background-grey)] rounded-md"></div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-20">
                <h3 className="[color:var(--color-black)] font-bold text-lg">
                  Available 24/7
                </h3>
                <p className="[color:var(--color-dark-grey)] mx-auto text-md">
                  View your saved summaries
                </p>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                <img
                  src="24-7.png"
                  alt="Placeholder"
                  className="w-10 h-10 [background:var(--color-background-grey)] ml-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section 2 */}
      <div className="[background:var(--color-white)] my-40">
        <div className="flex justify-center items-center">
          <img
            src="RobotStudying.png"
            alt="Placeholder"
            className="w-1/4 mx-20"
          />
          <div className="grid grid-cols-2 gap-20">
            <div>
              <img
                src="AILogo.png"
                alt="AILogo"
                className="w-16 h-16 mr-2 mb-4"
              />
              <p className="[color:var(--color-dark-grey)] break-words max-w-[400px]">
                PDF TL;DR services utilize AI technology, specifically the
                OpenAI model, to assist in summarizing your documents.
              </p>
            </div>
            <div>
              <img
                src="View.png"
                alt="View"
                className="w-14 h-14 mr-2 mb-5"
                style={{ objectFit: "cover" }}
              />
              <p className="[color:var(--color-dark-grey)] break-words max-w-[400px]">
                Controlling summary length provides more choices for users to
                modify the final output as per requirements.
              </p>
            </div>
            <div>
              <img
                src="fast.png"
                alt="Fast"
                className="w-15 h-14 mr-2 mb-4"
                style={{ objectFit: "cover" }}
              />
              <p className="[color:var(--color-dark-grey)] break-words max-w-[400px]">
                Our tool works fast to summarize your documents, so you can save
                time and still get all the important information you need.
              </p>
            </div>
            <div className="mb-10">
              <img src="Save.png" alt="Save" className="w-12 h-12 mr-2 mb-5" />
              <p className="[color:var(--color-dark-grey)] break-words max-w-[400px]">
                Our application allows users to conveniently save translations
                for future reference, ensuring easy access to previously
                converted content whenever needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section 3 */}
      <div className="bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div className="w-2/3 pr-8">
            <h2 className="text-5xl font-bold mb-6">Start Now!</h2>
            <p className="text-gray-700 mb-6 mr-2">
              Begin summarizing or view your saved translations.
            </p>
          </div>
          <div className="w-1/2 flex  items-center ml-20">
            <button
              className="bg-blue-500 text-white font-bold rounded-md px-16 py-3 mr-4 hover:bg-blue-600 transition duration-300"
              style={{ whiteSpace: "nowrap" }}
            >
              <Link href="/upload" className="text-white">
                Text Summarizer
              </Link>
            </button>
            <button
              className="bg-blue-500 text-white font-bold rounded-md px-16 py-3 hover:bg-blue-600 transition duration-300"
              style={{ whiteSpace: "nowrap" }}
            >
              <Link href="/profile" className="text-white">
                View Documents
              </Link>
            </button>
          </div>
        </div>
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
                <Link href="#">Help</Link>
              </button>
            </ul>
          </div>
          <div className="mr-12 flex gap-3 [color:var(--font-primary)]">
            <a href="#">
              <span className="d text-1xl">
                <FaYoutube />
              </span>
            </a>
            <a href="#">
              <span className="d text-1xl">
                <FaFacebookF />
              </span>
            </a>
            <a href="#">
              <span className="d text-1xl">
                <FaTwitter />
              </span>
            </a>
            <a href="#">
              <span className="d text-1xl">
                <FaInstagram />
              </span>
            </a>
            <a href="#">
              <span className="d text-1xl">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div className="my-8 flex items-center justify-center text-xs [color:var(--font-primary)]">
          <p>PDFTDLR @2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
