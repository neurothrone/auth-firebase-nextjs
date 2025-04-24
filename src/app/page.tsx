"use server";

import Link from "next/link";
import { auth } from "@/auth";
import { SignInButton } from "@/ui/components/sign-in-button";
import { SignOutButton } from "@/ui/components/sign-out-button";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div>
        <Link href="/profile" className="me-2">Profile</Link>
        <SignOutButton/>
      </div>
    );
  }

  return (
    <div>
      <p className="me-2">You Are Not Signed In</p>
      <Link href="/api/auth/signin" className="me-2 text-purple-400 hover:text-purple-300">Sign in options</Link>
      <SignInButton/>
    </div>
  );
}
