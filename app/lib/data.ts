import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { User } from "./definitions";

export async function getUserByUsername(username: string): Promise<User | null> {
	try {
	  const data = await sql<User>`
		SELECT
		  id,
		  username,
		  password,
		  firstname,
		  lastname
		FROM users
		WHERE users.username = ${username}
	  `;
  
	  // Check if user data is found
	  if (data.rows.length === 0) {
		return null; // Return null if user not found
	  }
  
	  // Return the user data
	  return data.rows[0];
	} catch (error) {
	  console.error("Database Error:", error);
	  return null; // Return null in case of error
	}
  }