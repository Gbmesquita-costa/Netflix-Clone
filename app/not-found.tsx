"use client"

import Image from "next/image";
import { NetflixNotFoundPage } from "@/app/assets/pageNotFoundHandlings";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound(): JSX.Element {
    const { push } = useRouter()

    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:bg-transparent">
            <Image
                src={"/netflix_logo.svg"}
                alt="Logo"
                width={120}
                height={120}
                priority
                className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
            />


            <div className="w-full flex flex-col justify-center items-center mt-56">
                <h1 className="text-white text-4xl font-bold px-5 sm:px-0 text-center">
                    This page no longer exists or has been deleted
                </h1>

                <NetflixNotFoundPage />

                <h2 className="text-zinc-400 text-lg px-5 sm:px-0 mt-4">
                    Unfortunately we cannot find this page
                </h2>

                <div className="mt-6">
                    <Button
                        variant={"outline"}
                        type="submit"
                        className="p-7 w-80"
                        onClick={() => push("/")}
                    >
                        Back to home page
                    </Button>
                </div>
            </div>
        </div>
    )
}