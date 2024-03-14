import { ReactNode } from "react";
import Image from "next/image";

export default function AuthLayout(
  { children }: { children: ReactNode }
): JSX.Element {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={"/login_background.jpg"}
        alt="background image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />

      <Image
        src={"/netflix_logo.svg"}
        alt="Logo"
        width={120}
        height={120}
        priority
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      />
      {children}
    </div>
  )
}