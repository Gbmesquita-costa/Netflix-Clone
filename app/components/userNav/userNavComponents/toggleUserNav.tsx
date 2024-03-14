import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";

import { SignOutButton } from "./signOutButton";

export async function ToggleUserNav(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions)

  return (
    <div className="flex flex-col items-center gap-1">
      <Avatar className="h-28 w-28 md:h-10 md:w-10 rounded-sm mb-5">
        <AvatarImage src={session?.user?.image as string | undefined} />
        <AvatarFallback
          className="rounded-sm"
        >
          user
        </AvatarFallback>
      </Avatar>
      <p className="text-md font-medium leading-none">
        {session?.user?.name}
      </p>
      <p className="text-sm leading-none text-muted-foreground">
        {session?.user?.email}
      </p>
      <SignOutButton/>
    </div>
  )
}