"use client";
import { useEffect, useState, ChangeEvent } from "react";
import Link from "next/link";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { search } from "react-icons-kit/feather/search";
import { Trash2 } from "react-feather";
import { useSession } from 'next-auth/react';
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { fetchDocuments, deleteDocument, saveDocument } from "../lib/docs";
import { fetchUsername} from "../lib/docs";
import DataDisplay from "../components/DataDisplay";
import { getSession, signOut } from "next-auth/react";
import {deleteUserById} from "../lib/actions";

export default function Profile() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [uploadProfilePhoto, setUploadProfilePhoto] = useState<File | null>(
    null
  );
  const [savedDocuments, setSavedDocuments] = useState<any[]>([]);
  const [savedUsername, setSavedUsername] = useState<any[]>([]);
  const [firstName, setFirstName] = useState<any[]>([]);
  const [lastName, setLastName] = useState<any[]>([]);
  const [deletingDocumentId, setDeletingDocumentId] = useState<number | null>(
    null
  );
  const [selectedDocument, setSelectedDocument] = useState<any | null>(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    const fetchSavedDocuments = async () => {
      try {
        const documentsResponse = await fetchDocuments(); // Fetch documents from the database
        const documentsData = documentsResponse.rows.map((row: any) => ({
          id: row.id,
          file_name: row.file_name,
          date_created: row.date_created,
          file_type: row.file_type,
          summarized_text: row.summarized_text,
          summary_type: row.summary_type,
        }));
        setSavedDocuments(documentsData);
      } catch (error) {
        console.error("Failed to fetch saved documents:", error);
      }
    };
    const fetchSavedUsername = async () => {
      try {
        const usernameResponse = await fetchUsername(); // Fetch username from the database
        const usernameData = usernameResponse.rows[0]?.username;
        const FirstNamedata = usernameResponse.rows[0]?.firstname;
        const LastNamedata = usernameResponse.rows[0]?.lastname;
        setSavedUsername(usernameData);
        setFirstName(FirstNamedata);
        setLastName(LastNamedata);
      } catch (error) {
        console.error("Failed to fetch saved username:", error);
      }
    };
    fetchSavedDocuments();
    fetchSavedUsername();
  }, []);

  const [searchText, setSearchText] = useState("");

  const handleDeleteDocument = async (documentId: number) => {
    setDeletingDocumentId(documentId);
  };

  const confirmDeleteDocument = async (confirm: boolean) => {
    if (confirm && deletingDocumentId !== null) {
      try {
        await deleteDocument(deletingDocumentId);

        setSavedDocuments(
          savedDocuments.filter((doc) => doc.id !== deletingDocumentId)
        );

        console.log("Document deleted successfully");
      } catch (error) {
        console.error("Failed to delete document:", error);
      }
    }
    setDeletingDocumentId(null);
  };

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setUploadProfilePhoto(file);
    }
  };

  const handleRemoveButtonClick = () => {
    setUploadProfilePhoto(null);
    // Reset the input value to allow reuploading the photo
    const input = document.getElementById("upload-photo") as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  };

  const handleViewDocument = (document: any) => {
    setSelectedDocument(document);
  };

  const handleCloseModal = () => {
    setSelectedDocument(null);
  };
  const handleDeleteProfile = () => {
    setShowConfirmation(true);
  };
  const handleConfirmDelete = async () => {
    setShowConfirmation(false);
    try {
      // Call the deleteUser function here
      await deleteUser();
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };
  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const deleteUser = async () => {
    try {
      const session = await getSession();
  
      if (!session || !session.user) {
        throw new Error("User session not found");
      }
  
      const userId = session.user.id;
  
      // Call the deleteUserById function with the user's ID
      await deleteUserById(userId);
  
      // Sign out the user after deleting their profile
      await signOut();
      window.location.href = "/landing";
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };
  return (
    <div>
      {/* Profile Section */}
      <div className="h-screen [background:var(--color-white)] flex items-center justify-center">
        <div className="w-1/5 mx-auto flex flex-col" style={{ height: "65%" }}>
          {/* Profile Photo Section */}
          <div className="mb-8 relative">
            {/* Header */}
            <h2 className="text-center [color:var(--color-black)] font-bold text-xl mb-6">
              Profile Photo
            </h2>

            {/* Profile Photo Placeholder and Upload Button */}
            <div className="flex items-center flex-col mb-6">
              <div
                className="[background:var(--color-background-grey)] rounded-full flex items-center justify-center mb-3"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              >
                <img
                  src={
                    uploadProfilePhoto
                      ? URL.createObjectURL(uploadProfilePhoto)
                      : "placeholder.png"
                  }
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Upload Photo Button */}
              <label
                htmlFor="upload-photo"
                className="[background:var(--color-blue)] [color:var(--color-white)] font-bold rounded-md px-6 py-3 hover:bg-blue-600 transition duration-300 mb-2"
                style={{ whiteSpace: "nowrap", cursor: "pointer" }}
              >
                Upload Photo
              </label>
              <input
                type="file"
                id="upload-photo"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handlePhotoChange}
              />
              {/* Remove Button */}
              {uploadProfilePhoto && (
                <button
                  onClick={handleRemoveButtonClick}
                  className="[color:var(--color-blue)] text-center block hover:underline"
                >
                  remove
                </button>
              )}
            </div>
          </div>
          {/* Grey line */}
          <div
            className="absolute top-0 left-20 w-1/4 [color:var(--color-dark-grey)] h-px"
            style={{ top: "43%", transform: "translateY(-50%)" }}
          ></div>

          {/* User Details Section */}
          <div>
            {/* Header */}
            <h2 className="text-left [color:var(--color-black)] font-bold text-xl mb-6">
              {firstName}'s details
            </h2>

            {/* User Details Form */}
            <div className="w-full">
              {/* First Name */}
              <div className="flex items-center mb-4">
                <div className="w-32">
                  <label htmlFor="firstName" className="font-medium">
                    First Name
                  </label>
                </div>
                <div
    id="username"
    className="w-full border rounded-md px-4 py-2"
  >
    {firstName}
  </div>
              </div>

              {/* Last Name */}
              <div className="flex items-center mb-4">
                <div className="w-32">
                  <label htmlFor="lastName" className="font-medium">
                    Last Name
                  </label>
                </div>
                <div
    id="username"
    className="w-full border rounded-md px-4 py-2"
  >
    {lastName}
  </div>
              </div>

              {/* Username */}
              <div className="flex items-center mb-4">
                <div className="w-32">
                  <label htmlFor="username" className="font-medium">
                    Username 
                  </label>
                </div>
                <div
    id="username"
    className="w-full border rounded-md px-4 py-2"
  >
    {savedUsername}
  </div>
              </div>

              {/* Save Button */}
              <button className="[background:var(--color-blue)] [color:var(--color-white)] font-bold rounded-md px-6 py-3 hover:bg-blue-600 transition duration-300 block mx-auto mt-10">
                Save
              </button>
               {/* Delete Button */}
               <button 
             onClick={handleDeleteProfile}
              className=" [color:var(--color-blue)] font-bold rounded-md px-5 py-2  block mx-auto mt-10">
                Delete Profile
              </button>
            </div>
          </div>
        </div>

        {/* Summaries Section */}
        <div className="w-2/3 min-h-screen [background:var(--color-background-grey)]">
          {/* My Summaries Header */}
          <div className="p-4 mt-20 ml-8">
            <h2 className="text-5xl font-bold mb-10 [font-family:var(--primary-font)]">
              My Summaries
            </h2>

            {/* Documents Header and Search Box */}
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl text-gray-600">Documents</h3>

              {/* Search Box */}
              <div className="relative">
                <input
                  type="text"
                  className="border rounded-md px-4 py-2 pr-8"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none">
                  <Icon icon={search} size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Sample Section */}
          <div className="mt-6 pt-4 border border-gray-400">
            {/* Section Headers */}
            <div className="flex border-b border-gray-400">
              <div className="w-full">
                <div className="ml-14 font-bold">
                  <h3 className="text-gray-800">View</h3>
                </div>
              </div>
              <div className="mb-4 w-full" style={{ marginLeft: "-60px" }}>
                <h3 className="font-bold">Name</h3>
              </div>
              <div className="mb-4 w-full" style={{ marginLeft: "-60px" }}>
                <h3 className="font-bold">Date created</h3>
              </div>
              <div className="mb-4 w-full" style={{ marginLeft: "-60px" }}>
                <h3 className="font-bold">Original File type</h3>
              </div>
            </div>

            {/* Scrollable container for the documents */}
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 400px)" }}
            >
              {/* Saved Documents */}
              {savedDocuments.
              filter((doc) => doc.file_name.toLowerCase()
              .includes(searchText.toLowerCase()))
              .map((document, index) => (
                <div
                  key={index}
                  className="border-t border-gray-400 mt-1 pt-1"
                  style={{ height: "120px" }}
                >
                  <div className="flex items-center">
                    <div className="mt-10 w-full">
                      <div className="ml-10">
                        <button
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                          onClick={() => handleViewDocument(document)}
                        >
                          <span>View</span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-10 w-full">
                      <h3 className="font-bold">{document.file_name}</h3>
                    </div>
                    <div className="mt-10 w-full">
                      <h3 className="font-bold">
                        {new Date(document.date_created).toLocaleDateString(
                          "en-US"
                        )}
                      </h3>
                    </div>
                    <div className="mt-10 w-full">
                      <h3 className="font-bold">{document.file_type}</h3>
                    </div>
                    <div style={{ marginRight: "40px", marginTop: "40px" }}>
                      <button onClick={() => handleDeleteDocument(document.id)}>
                        <Trash2 />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popup for displaying summarized text */}
          {selectedDocument && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg w-2/3 relative">
                <h3 className="text-2xl font-bold mb-8">
                  {selectedDocument.file_name}
                </h3>
                <DataDisplay
                  //@ts-ignore
                  translatedDocument={selectedDocument.summarized_text}
                  //@ts-ignore
                  summaryType={selectedDocument.summary_type}
                />
                <button
                  className="absolute mt-6 px-4 py-2 bottom-4 right-4 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          {/* Confirmation Dialog */}
          {deletingDocumentId !== null && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-md">
                <p>Are you sure you want to delete this document?</p>
                <div className="mt-4 flex justify-end">
                  <button
                    className="px-4 py-2 mr-4 border border-gray-300 rounded-md"
                    onClick={() => confirmDeleteDocument(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                    onClick={() => confirmDeleteDocument(true)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
{/* Confirmation Dialog */}
{showConfirmation && (
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-md">
      <p>Are you sure you want to delete your profile?</p>
      <div className="mt-4 flex justify-end">
        <button
          className="px-4 py-2 mr-4 border border-gray-300 rounded-md"
          onClick={handleCancelDelete}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={handleConfirmDelete}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}
      {/* Footer */}
      <footer className="flex flex-col justify-evenly bg-gray-600 h-[150px]">
        <div className="flex items-center justify-between">
          <div className="p-4 ml-8">
            <h3>PDFTDLR</h3>
          </div>
          <div className=" flex justify-center">
            <ul className="flex gap-[30px]">
              <li>
                <button>
                  <Link href="#">Terms of Service</Link>
                </button>
              </li>
              <li>
                <button>
                  <Link href="#">Contact</Link>
                </button>
              </li>
              <li>
                <button>
                  <Link href="#">Help</Link>
                </button>
              </li>
            </ul>
          </div>
          <div className="mr-12 flex gap-3">
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="my-8 flex items-center justify-center text-xs">
          <p>PDFTDLR @2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
