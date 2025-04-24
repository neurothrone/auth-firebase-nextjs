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
        <Link href="/profile">Profile</Link>
        <SignOutButton/>
      </div>
    );
  }

  return (
    <div>
      <p>You Are Not Signed In</p>
      <SignInButton/>
    </div>
  );
}
