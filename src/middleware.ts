import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import authConfig from "@/auth.config";

const { auth } = NextAuth(authConfig);

const protectedRoutes = ["/profile"];

export default auth((req) => {
  const { nextUrl } = req;
  // All three approaches are equivalent
  // const isLoggedIn = req.auth !== null && req.auth !== undefined;
  // const isLoggedIn = Boolean(req.auth);
  const isLoggedIn = !!req.auth; // !!: double bang operator

  const isProtected = protectedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !isLoggedIn) {
    return Response.redirect(new URL("/api/auth/signin", nextUrl));
  }

  return NextResponse.next();
});

// Required for Auth.js
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"]
}
