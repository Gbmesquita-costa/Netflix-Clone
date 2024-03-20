import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";

import { GithubSignInButton } from "@/app/components/githubSignInButton";
import { GoogleSignInButton } from "@/app/components/googleSignInButton";

import { redirect } from "next/navigation";

export default async function Login(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)

  if (session) {
    return redirect("/home")
  }

  return (
    <div className="mt-24 rounded bg-[rgba(0,0,0,0.7)] py-10 px-6 md:mt-0 w-full md:max-w-[400px] md:px-14">
      <div>
        <h1 className="text-3xl font-semibold text-white">
          Log in
        </h1>

        <p className="text-md mt-3 text-white">
          To access the platform, log in.
        </p>

        <div className="space-y-4 mt-5 flex">
          <GithubSignInButton />
        </div>

        <div className="space-y-4 mt-5 flex">
          <GoogleSignInButton />
        </div>
      </div>
    </div>
  )
}