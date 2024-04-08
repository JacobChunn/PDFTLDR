"use server";

import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

export async function saveDocument(
  status: any,
  fileName: string,
  fileType: string,
  summarizedText: string,
  summaryType: string,
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    console.log("Session was unable to be retrieved!");
    throw new Error("Session was unable to be retrieved!");
  }

  const userID = Number(session.user.id);

  try {
    // check status of api call
    if (status == 200) {
      // Calculate the Date and Time when uploaded
      const timeZoneOffset = new Date().getTimezoneOffset() * 60000;
      const localDateTime = new Date(Date.now() - timeZoneOffset).toISOString();

      // Insert document data into the documents
      await sql`
      INSERT INTO documents (file_name, date_created, file_type, summarized_text, user_id, summary_type)
      VALUES (${fileName}, ${localDateTime}, ${fileType}, ${summarizedText}, ${userID}, ${summaryType})`;
    } else {
      console.log(status + " Error in API call");
    }
  } catch (error) {
    console.error("Failed to save document:", error);
    throw error;
  }
}

export async function fetchDocuments() {

	const session = await getServerSession(authOptions);

	if (!session) {
	  console.log("Session was unable to be retrieved!");
	  throw new Error("Session was unable to be retrieved!");
	}
  
	const userID = Number(session.user.id);

  try {
    // Fetch documents from the database
    const documents = await sql`
            SELECT id, file_name, date_created, file_type, summarized_text, summary_type
            FROM documents
			WHERE user_id = ${userID}
        `;
    return documents;
  } catch (error) {
    console.error("Failed to fetch documents:", error);
    throw error;
  }
}
export async function fetchUsername() {

	const session = await getServerSession(authOptions);

	if (!session) {
	  console.log("Session was unable to be retrieved!");
	  throw new Error("Session was unable to be retrieved!");
	}
  
	const userID = Number(session.user.id);

  try {
    // Fetch username from the database
    const username = await sql`
            SELECT username, 
            firstname, 
            lastname,
            password
            FROM users
			WHERE id = ${userID}
        `;
    return username;
  } catch (error) {
    console.error("Failed to fetch username:", error);
    throw error;
  }
}

export async function deleteDocument(documentId: number) {
  try {
    // Delete document from the database
    await sql`
        DELETE FROM documents
        WHERE id = ${documentId}
      `;
    console.log("Document deleted successfully");
  } catch (error) {
    console.error("Failed to delete document:", error);
    throw error;
  }
}
