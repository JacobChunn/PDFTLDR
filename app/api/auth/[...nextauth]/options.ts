// This is a dynamic route handler, or a catch all route for auth, meaning /api/auth/* will have its route be defined here

import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { getUserByUsername } from '@/app/lib/data';
import { User, UserInfo } from '@/app/lib/definitions';

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			name: 'Credentials',
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'Enter Username:',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'Enter Password:',
				},
			},
			async authorize(credentials, req) {
				// You need to provide your own logic here that takes the credentials
				// submitted and returns either a object representing a user or value
				// that is false/null if the credentials are invalid.
				// e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
				// You can also use the `req` object to obtain additional parameters
				// (i.e., the request IP address)

				console.log("In Authorize...")

				if (!credentials) return null;

				const res = await getUserByUsername(credentials.username);

				const foundUser: User = await res.json();

				if (!foundUser) return null;

				const match = await bcrypt.compare(
					credentials.password,
					foundUser.password,
				);

				if (match) {
					console.log('Found User was a match!');
					console.log("id: " + foundUser.id);
					return {
						id: foundUser.id.toString(),
					} satisfies UserInfo;
				}

				console.log('Found User was NOT a match');
				// Return null if user data could not be retrieved
				return null;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, account, profile }) {
			if (user) {
					token.id = user.id;
			}

			// console.log({
			// 	msg: "JWT Callback Result",
			// 	token: token,
			// 	user: user,
			// 	account: account,
			// 	profile: profile,
			// });
			return token;
		},
		async session({ session, user, token }) {
			if (session?.user) {
				session.user.id = token.id;
			}

			// console.log({
			// 	msg: "Session Callback Result",
			// 	session: session,
			// 	token: token,
			// 	user: user,
			// });
			return session;
		},
	},
}
