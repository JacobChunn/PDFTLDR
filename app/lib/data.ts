import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { User } from "./definitions";

export async function getUserByUsername(username: string) {
	noStore();
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
    	return Response.json(data.rows[0]);
	} catch (error) {
    	console.error("Database Error:", error);
		return Response.error();
	}
}
