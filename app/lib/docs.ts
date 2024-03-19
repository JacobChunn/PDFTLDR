"use server";

import { sql } from "@vercel/postgres";

export async function saveDocument(
  fileName: string,
  fileType: string,
  summarizedText: string
) {
  try {

    // Calculate the Date and Time when uploaded
    const timeZoneOffset = new Date().getTimezoneOffset() * 60000;
    const localDateTime = new Date(Date.now() - timeZoneOffset).toISOString();

    // Insert document data into the documents
    await sql`
  INSERT INTO documents (file_name, date_created, file_type, summarized_text)
  VALUES (${fileName}, ${localDateTime}, ${fileType}, ${summarizedText})
`;

    console.log('Document saved successfully');
  } catch (error) {
    console.error('Failed to save document:', error);
    throw error;
  }
}

export async function fetchDocuments() {
    try {
        // Fetch documents from the database
        const documents = await sql`
            SELECT id, file_name, date_created, file_type, summarized_text
            FROM documents
        `;
        return documents;
    } catch (error) {
        console.error('Failed to fetch documents:', error);
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
      console.log('Document deleted successfully');
    } catch (error) {
      console.error('Failed to delete document:', error);
      throw error;
    }
  }