'use server';

import { sql } from "@vercel/postgres";
import { UserFormData, UserState } from "./definitions";
import { AddUserSchema } from "./zod";
import * as bcrypt from 'bcrypt';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addUser(
	formData: UserFormData,
) {
	console.log("In addUser...")
  const validatedFields = AddUserSchema.safeParse({
    username: formData.username,
    password: formData.password,
    firstname: formData.firstname,
    lastname: formData.lastname,
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Add User.',
    };
  }

  const {password, ...otherFields} = validatedFields.data;

  const {username, firstname, lastname} = otherFields;

  // Prepare data for insertion into the database
  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);

  try {
    await sql`
    INSERT INTO users (
      username, password, firstname, lastname
    )
    VALUES (
      ${username}, ${hashedPassword}, ${firstname}, ${lastname}
    )
  `;
  } catch (error) {
    console.log(error);
    return {
      message: 'Database Error: Failed to Add User.',
    };
  }

  revalidatePath('/profile');
  redirect('/profile');
}