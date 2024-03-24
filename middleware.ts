import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

// https://github.com/TusharVashishth/Nextjs_Authentication/blob/main/src/middleware.ts

export async function middleware(req: NextRequest) {

	const unprotectedRoutes = [
		"/",
		"/landing",
		"/signup"
	];

	const unprotectedBeginningRoutes = [
		"/favicon.ico",
		"/_next/static",
		"/_next/image",
		"/api/auth",
		"/public"
	];

	const unprotectedEndingRoutes = [
		".jpeg",
		".jpg",
		".png"
	];

	//console.log("middleware is here");

	const { pathname } = req.nextUrl;
	//console.log("PATHNAME: ", pathname)
	// console.log(req.url)
	// console.log(pathname);

	if (pathname == "/api/auth/signin") {
		//console.log("signin page!")
		return NextResponse.next();
	}

	const token = await getToken({ req });

	if (token == null) {
		console.log("NO TOKEN!!!!!!!")
		if (
			!(
				unprotectedRoutes.includes(pathname) ||
				pathnameBeginsWithAny(pathname, unprotectedBeginningRoutes) ||
				pathnameEndsWithAny(pathname, unprotectedEndingRoutes)
			)
		) {
			console.log("NO TOKEN BLOCKED: ", pathname);
			return NextResponse.redirect(
				new URL(
					"/api/auth/signin", req.url
				)
			);
		}
		else {
			console.log("NO TOKEN ALLOWED: ", pathname);
			return NextResponse.next();
		}
	}
	console.log("signed in! going to ", pathname)
	// Is signed in, and trying to access landing page
	if (
		unprotectedRoutes.includes(pathname)
	) {
		console.log("IN SECOND")
		return NextResponse.next();
	}


	console.log("END OF CHECKS!!!")
	return NextResponse.next();

}

function addCallbackURL(pathname: string, base:string, callbackURL: string) {
	const inputURL = new URL (pathname, base);
	inputURL.searchParams.set('callbackURL', callbackURL);
	//console.log("Callback Added: ", inputURL.toString())
	return inputURL;
}

function pathnameBeginsWithAny(pathname: string, routeBeginnings: string[]) {
	for (let prefix of routeBeginnings) {
		if (pathname.startsWith(prefix)) {
			return true;
		}
	}
	return false;
}

function pathnameEndsWithAny(pathname: string, routeBeginnings: string[]) {
	for (let postfix of routeBeginnings) {
		if (pathname.endsWith(postfix)) {
			return true;
		}
	}
	return false;
}