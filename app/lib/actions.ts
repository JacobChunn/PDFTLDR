"use server";

import { sql } from "@vercel/postgres";
import { UserFormData, UserState } from "./definitions";
import { AddUserSchema } from "./zod";
import * as bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


import formidable, {errors as formidableErrors} from 'formidable';
import http from 'node:http';
import IncomingForm from "formidable/Formidable";
import next from "next";

export async function addUser(formData: UserFormData) {
  console.log("In addUser...");
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
      message: "Missing Fields. Failed to Add User.",
    };
  }

  const { password, ...otherFields } = validatedFields.data;

  const { username, firstname, lastname } = otherFields;

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
  return { success: true };
  } catch (error) {
    // Handle error
    console.error("Failed to add user:", error);
    return { success: false, message: "Failed to add user." };
}
}

export async function deleteUserById(userId: string): Promise<{ success: boolean; message?: string }> {
  try {
    // Execute a DELETE query to remove the user from the database
    await sql`
      DELETE FROM users
      WHERE id = ${userId}
    `;
    console.log(`User with ID ${userId} deleted successfully`);
    return { success: true };
  } catch (error) {
    console.error("Failed to delete user:", error);
    return { success: false, message: "Failed to delete user." };
  }
}