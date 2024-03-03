import NextAuth from "next-auth";

declare module "next-auth" {
	interface Session {
	  user: {
		id: string;
	  };
	}

	interface User {
        id: string;
	}
}

declare module "next-auth/jwt" {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT {
		/** OpenID ID Token */
        id: string;
	}
}