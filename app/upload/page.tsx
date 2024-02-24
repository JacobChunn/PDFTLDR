"use client";
import { FaFileArrowUp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";


export default function Upload() {
  const [previewURL, setPreviewURL] = useState("");
  const [submittedFile, setSubmittedFile] = useState<File | undefined>(undefined);
  const [fileName, setFileName] = useState("PDF, Docx, or text file")

  console.log("preview file:", previewURL);
  // @ts-ignore
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSubmittedFile(file);

    if (file) {
      URL.revokeObjectURL(previewURL);
    }

    if (file) {
      const url = URL.createObjectURL(file);
      console.log(file)
      setPreviewURL(url);
      setFileName(file.name)
    } else {
      console.log("you fuccked up");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="[background:var(--color-background-grey)] flex-grow">
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
              <Link href="/login" className="[color:var(--color-black)] [font-family:var(--secondary-font)] font-medium">
                Log In
              </Link>
            </button>
          </div>
        </header>

        {/* main content */}
        <main className="flex items-center justify-center my-[40px] mt-40">
          <div className="[background:var(--color-white)] p-8 rounded-lg flex flex-row justify-center items-center h-[575px]">
            {/* the picture */}
            {previewURL && submittedFile ? (
              <div>
                <iframe
                  src={previewURL}
                  className="w-[500px] h-[500px] object-contain mr-[40px]"
                >
                  Your browser does not support iframe enbedding
                </iframe>
              </div>
            ) : (
              <div></div>
            )}

            {/* upload document section */}
            <div className="flex flex-col items-center">
              <h1 className="[font-family:var(--primary-font)] text-4xl font-bold">Upload Document</h1>
              <h4 className="[font-family:var(--primary-font)] mb-8">Summarize your way, in seconds.</h4>
              <form className="flex mb-10">
                <label
                  htmlFor="file-input"
                  className="[background:var(--color-light-grey)] border-b-2 [border-color:var(--color-dark-grey)] p-2 text-center px-24 cursor-pointer flex items-center"
                >
                  <input
                    onChange={handleFileChange}
                    id="file-input"
                    type="file"
                    className="hidden"
                  />
                  <span className="mr-3 text-2xl">
                    <FaFileArrowUp />
                  </span>
                    {fileName}
                </label>
                <button className="[background:var(--color-blue)] [color:var(--color-white)] font-bold px-3 ml-2 hover:bg-blue-600 transition duration-300">
                  Upload
                </button>
              </form>
              <div className="flex justify-start flex-col items-start w-full mb-10">
                <p>Save As</p>
                <input
                  type="text"
                  placeholder="Placeholder"
                  className="[background:var(--color-light-grey)] border-b-2 [border-color:var(--color-dark-grey)] p-2 text-start w-full"
                />
              </div>
              <div className="flex justify-between border-2 [border-color:var(--color-dark-grey)] mb-16">
                <div className="flex items-center border-r-2 [border-color:var(--color-dark-grey)] p-1 px-5">
                  <div className="w-6 h-6 border-2 [border-color:var(--color-dark-grey)] rounded-full p-1 mr-4"></div>
                  <p className="p-1">Title</p>
                </div>
                <div className="flex items-center border-r-2 [border-color:var(--color-dark-grey)] p-1 px-5">
                  <div className="w-6 h-6 border-2 [border-color:var(--color-dark-grey)] rounded-full p-1 mr-4"></div>
                  <p>Title</p>
                </div>
                <div className="flex items-center [border-color:var(--color-dark-grey)] p-1 px-5">
                  <div className="w-6 h-6 border-2 [border-color:var(--color-dark-grey)] rounded-full p-1 mr-4"></div>
                  <p>Title</p>
                </div>
              </div>
              <button className="[background:var(--color-blue)] [color:var(--color-white)] font-bold rounded-md p-2 px-6 w-full hover:bg-blue-600 transition duration-300">
                Summarize
              </button>
            </div>
          </div>
        </main>
      </section>

      {/* Footer */}
      <footer className="flex flex-col justify-evenly [background:var(--color-dark-grey)] h-[150px]">
        <div className="flex items-center justify-between">
          <div className="p-4 ml-8">
            <h3 className="[color:var(--color-light-grey)] ">PDFTLDR</h3>
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
        <div className="my-8 flex items-center justify-center text-xs [color:var(--color-light-grey)]">
          <p>PDFTDLR @2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
