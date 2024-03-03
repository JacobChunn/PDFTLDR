import { z } from 'zod';

export const UserSchema = z.object({
	id: z.coerce.number(),
	username: z.string().max(16),
	password: z.string().max(60),
	firstname: z.string().max(16),
	lastname: z.string().max(16),
});

export const AddUserSchema = UserSchema.omit({ id: true });