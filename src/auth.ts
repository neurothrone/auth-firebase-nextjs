import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "@/lib/firesstore";
import authConfig from "@/auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter(firestore),
  session: { strategy: "jwt" },
  debug: true,
  ...authConfig
});
