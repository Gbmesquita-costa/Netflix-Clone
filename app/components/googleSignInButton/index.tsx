"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";

export function GoogleSignInButton(): JSX.Element {
  return (
    <Button
      type="submit"
      variant="outline"
      className="w-full gap-5"
      onClick={() => signIn("google")}
      size="icon"
    >
      <FcGoogle size={24}/>
      Log in with google
    </Button>
  )
}