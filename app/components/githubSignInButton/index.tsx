"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export function GithubSignInButton(): JSX.Element {
  return (
    <Button
      type="submit"
      variant="destructive"
      className="w-full bg-[#e50914] gap-5"
      onClick={() => signIn("github")}
      size="icon"
    >
      Log in
    </Button>
  )
}