"use client";

import { login } from "@/lib/actions/auth";

export const SignInButton = () => {
  return <button
    className="text-teal-400 hover:text-teal-300"
    onClick={() => login()}> Sign In With Github</button>;
};
