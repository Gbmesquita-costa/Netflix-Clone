import { redirect } from "next/navigation";

import { ReactNode } from "react";
import { getServerSession } from "next-auth";

import { authOptions } from "../utils/auth";
import { Navbar } from "../components/navbar";

export default async function HomeLayout({
  children
}: {
  children: ReactNode;
}): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect("/login")
  }

  return (
    <>
      <Navbar />
      <main className="w-full max-w-[1800px] mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  )
}