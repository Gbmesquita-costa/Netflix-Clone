"use client"

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export function SignOutButton(): JSX.Element {
    return (
        <Button 
            variant={"ghost"} 
            className="w-full flex justify-center mt-5 md:justify-start md:mt-0 h-8 font-medium" 
            onClick={() => signOut()}
        >
            Sign out
        </Button>
    )
}