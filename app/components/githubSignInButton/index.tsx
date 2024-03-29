"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

import { GithubIcon } from "lucide-react";

export function GithubSignInButton(): JSX.Element {
  return (
    <Button
      type="submit"
      variant="outline"
      className="w-full gap-5"
      onClick={() => signIn("github")}
      size="icon"
    >
      <GithubIcon size={24}/>
      Log in with github
    </Button>
  )
}