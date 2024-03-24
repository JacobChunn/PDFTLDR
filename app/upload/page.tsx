"use client";
import { ChangeEvent } from "react";
import { FaFileArrowUp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { saveDocument } from "../lib/docs";

export default function Upload() {
  const [previewURL, setPreviewURL] = useState("");
  const [submittedFile, setSubmittedFile] = useState<File | undefined>(
    undefined
  );
  const [fileName, setFileName] = useState("PDF, Docx, or text file");
  const [text, setText] = useState("");
  const [summaryType, setSummaryType] = useState("Paragraph");
  const [fileType, setFileType] = useState("Unknown");
  const [fileNameInput, setFileNameInput] = useState("");

  // @ts-ignore
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setSubmittedFile(file);
    setPreviewURL("");

    if (
      file.type !==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const url = URL.createObjectURL(file);
      setPreviewURL(url);
    }

    if (file) {
      setFileName(file.name);

      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("./api/parser", formData);

      const { data } = res;
      console.log(data);
      setText(data);
    } else {
      console.log("No file is present");
    }
  };

  const handleDuplicateKeyError = (error: any) => {
    if (error.code === "23505") {
      console.error("Duplicate key violation:", error.detail);
    } else {
      console.error("Failed to save document:", error);
    }
  };

  const handleFileNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileNameInput(e.target.value);
  };

  const handleSavedDocument = async (
    status: any,
    fileName: string,
    summarizedText: string,
    fileType: string
  ) => {
    try {
      // Save the document
      await saveDocument(status, fileName, fileType, summarizedText);
      console.log("Document saved successfully");
      alert("Your document has been saved successfully");
    } catch (error) {
      handleDuplicateKeyError(error);
      alert("Failed to save your document, please try again.");
    }
  };

  const handleSummarize = async () => {
    if (text === "") {
      console.log("No text to summarize");
      return;
    }

    try {
      const GPTapiRequestData = {
        option: summaryType,
        text: text,
      };

      const res = await axios.post("./api/openai", GPTapiRequestData);

      const blob = new Blob([JSON.stringify(res.data)], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      setPreviewURL(url);

      const fileName = fileNameInput.trim();

      // Set file type
      const fileType = submittedFile?.type || "Unknown";

      setFileType(fileType);

      // Call handleSavedDocument
      await handleSavedDocument(res.status, fileName, res.data, fileType);
    } catch (error) {
      console.error("Error during summarization:", error);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <section className="[background:var(--color-background-grey)] flex-grow">
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
              <Link
                href="/login"
                className="[color:var(--color-black)] [font-family:var(--secondary-font)] font-medium"
              >
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
                  Your browser does not support iframe embedding
                </iframe>
              </div>
            ) : (
              <div></div>
            )}

            {/* upload document section */}
            <div className="flex flex-col items-center">
              <h1 className="[font-family:var(--primary-font)] text-4xl font-bold">
                Upload Document
              </h1>
              <h4 className="[font-family:var(--primary-font)] mb-8">
                Summarize your way, in seconds.
              </h4>
              <form className="flex mb-10">
                <label
                  htmlFor="file-input"
                  className="[background:var(--color-blue)] [color:var(--color-white)] rounded-md p-2 text-center px-24 cursor-pointer flex items-center hover:bg-blue-400 transition duration-300"
                >
                  <input
                    onChange={handleFileChange}
                    id="file-input"
                    type="file"
                    className="hidden"
                    accept="application/pdf, text/plain, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                  <span className="mr-3 text-2xl">
                    <FaFileArrowUp />
                  </span>
                  {fileName}
                </label>
              </form>
              <div className="flex justify-start flex-col items-start w-full mb-10">
                <p>Save As</p>
                <input
                  type="text"
                  placeholder="File name"
                  value={fileNameInput}
                  onChange={handleFileNameChange}
                  className="border-2 rounded-md border-color:var(--color-light-grey) p-2 text-start w-full"
                />
              </div>
              <div className="flex justify-between border-2 rounded-md [border-color:var(--color-dark-grey)] mb-16">
                <div className="flex items-center border-r-2 [border-color:var(--color-dark-grey)] p-1 px-5">
                  <input
                    type="radio"
                    id="paragraph"
                    name="summaryType"
                    value="Paragraph"
                    checked={summaryType === "Paragraph"}
                    onChange={() => setSummaryType("Paragraph")}
                    className="w-6 h-6 border-2 [border-color:var(--color-dark-grey)] rounded-full p-1 mr-4 hover:cursor-pointer"
                  />
                  <label htmlFor="paragraph" className="p-1">
                    Paragraph
                  </label>
                </div>
                <div className="flex items-center border-r-2 [border-color:var(--color-dark-grey)] p-1 px-5">
                  <input
                    type="radio"
                    id="bulletPoints"
                    name="summaryType"
                    value="Bullet Points"
                    className="w-6 h-6 border-2 [border-color:var(--color-dark-grey)] rounded-full p-1 mr-4 hover:cursor-pointer"
                    checked={summaryType === "Bullet Points"}
                    onChange={() => setSummaryType("Bullet Points")}
                  />
                  <label htmlFor="bulletPoints" className="p-1">
                    Bullet Points
                  </label>
                </div>
                <div className="flex items-center [border-color:var(--color-dark-grey)] p-1 px-5">
                  <input
                    type="radio"
                    id="sentence"
                    name="summaryType"
                    value="Sentence"
                    checked={summaryType === "Sentence"}
                    onChange={() => setSummaryType("Sentence")}
                    className="w-6 h-6 border-2  [border-color:var(--color-dark-grey)] rounded-full p-1 mr-4 hover:cursor-pointer"
                  />
                  <label htmlFor="sentence" className="p-1">
                    Sentence
                  </label>
                </div>
              </div>
              <button
                onClick={handleSummarize}
                disabled={text == ""}
                className="[background:var(--color-blue)] [color:var(--color-white)] font-bold rounded-md p-2 px-6 w-full hover:bg-blue-600 transition duration-300"
              >
                Summarize
              </button>
            </div>
          </div>
        </main>
      </section>

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
