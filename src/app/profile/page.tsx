// import Image from "next/image";
import { auth } from "@/auth";

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    return <div>Not authenticated</div>
  }

  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )

  // return (
  //   <div>
  //     <h1>Profile</h1>
  //     <p>Name: {session?.user?.name}</p>
  //     <p>Email: {session?.user?.email}</p>
  //
  //     {session?.user?.image && (
  //       <Image
  //         src={session.user.image}
  //         width={48}
  //         height={48}
  //         alt={session.user.name ?? "Avatar"}
  //         style={{ borderRadius: "50%" }}
  //       />
  //     )}
  //   </div>
  // );
}
