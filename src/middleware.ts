import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
	const isAuth = !!req.auth;
	const protectedPaths = ["/create", "/profile"];
	const isProtectedPath = protectedPaths.some((path) =>
		req.nextUrl.pathname.startsWith(path),
	);

	if (isProtectedPath && !isAuth) {
		return NextResponse.redirect(new URL("/login", req.url));
	}
});

export const config = {
	matcher: ["/create/:path*", "/profile/:path*"],
};
